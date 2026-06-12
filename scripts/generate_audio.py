import asyncio
import os
import wave
import json
import edge_tts

# =============================================
# 聖書の絵本「アダムとエバ」台本定義
# =============================================

scenes_script = {
    "scene0": [
        ("ひかりの こども アダムと エバ。", 1000, "0-1"),
        ("〜かみさまと いっしょに つくろう！〜", 0, "0-1"),
    ],
    "scene1": [
        ("広い広い エデンの園で、アダムと エバは 生まれました。", 1000, "1-1"),
        ("「アダム、エバ。はじめまして！ ずっと いっしょだよ」", 1200, "1-2"),
        ("かみさまは、ふたりの おとうさんで、おかあさんです。", 1000, "1-3"),
        ("ふたりは、かみさまの 手を ぎゅっと にぎって、おさんぽ するのが 大好き！", 0, "1-4"),
    ],
    "scene2": [
        ("アダムと エバは、かみさまの まねっこを はじめました。", 1000, "2-1"),
        ("かみさまが お花を みて「きれいだね」と 笑うと、ふたりも にっこり。", 1000, "2-2"),
        ("「かみさまが 喜ぶと、ぼくたちも 嬉しいね！」", 1200, "2-3"),
        ("ふたりの こころは、かみさまと おんなじ「愛」で ぽかぽかに なりました。", 0, "2-4"),
    ],
    "scene3": [
        ("キラキラした 時間が 流れて、ふたりは すてきな お兄さんと お姉さんに なりました。", 1000, "3-1"),
        ("「アダム、エバ。おめでとう。ふたりは、もう 立派な 大人だね」", 1200, "3-2"),
        ("アダムと エバは、たがいを 大切に 想い、かみさまの 前で 手を つなぎました。", 1000, "3-3"),
        ("「ずっと ずっと、かみさまと ふたりで、しあわせに なるよ！」", 0, "3-4"),
    ],
    "scene4": [
        ("おにわには、にぎやかな 声が ひびきわたりました。", 1000, "4-1"),
        ("アダムと エバの まわりには、かわいい 赤ちゃんが いっぱい。", 1000, "4-2"),
        ("「みんな、生まれてきてくれて ありがとう！」", 1200, "4-3"),
        ("かみさまも いっしょに、笑顔が あふれる「しあわせな おうち」が できました。", 0, "4-4"),
    ],
    "scene5": [
        ("「アダム、エバ。この 広い 世界を、みんなで 守っていこうね」", 1200, "5-1"),
        ("ふたりは、どうぶつたちと おはなしをして、お花や 木を やさしく なでてあげました。", 1000, "5-2"),
        ("「きみたちは、神様の 大切な 宝物だよ」", 1200, "5-3"),
        ("せかいじゅうの すべての ものが、ふたりの 愛に つつまれて、キラキラ 輝きだしました。", 0, "5-4"),
    ],
    "scene6": [
        ("「かみさま、わたしたち が いっしょに 幸せな世界を つくっていくよ！」", 1200, "6-1"),
        ("アダムと エバ、そして たくさんの 子どもたち。", 1000, "6-2"),
        ("みんなが、おたがいの 笑顔の ために、何かを してあげるのが 大好き！", 1200, "6-3"),
        ("だれかの ために 優しく すると、せかいじゅうが、かみさまの「愛」で、ふわふわ ぽっかぽかに なりました。", 0, "6-4"),
    ],
}

VOICE = "ja-JP-NanamiNeural"
RATE = "-20%"
FFMPEG_BIN = "/Users/goya/Library/Python/3.9/lib/python/site-packages/imageio_ffmpeg/binaries/ffmpeg-macos-aarch64-v7.1"

def mp3_to_wav(mp3_path, wav_path):
    import subprocess
    subprocess.run([FFMPEG_BIN, "-y", "-i", mp3_path, "-ar", "24000", "-ac", "1", "-sample_fmt", "s16", wav_path], capture_output=True, check=True)

def wav_to_mp3(wav_path, mp3_path):
    import subprocess
    subprocess.run([FFMPEG_BIN, "-y", "-i", wav_path, "-codec:a", "libmp3lame", "-qscale:a", "2", mp3_path], capture_output=True, check=True)

def read_wav_data(wav_path):
    with wave.open(wav_path, "rb") as wf:
        params = wf.getparams()
        data = wf.readframes(wf.getnframes())
    return params, data

def create_silence_bytes(duration_ms, sample_rate=24000, channels=1, sample_width=2):
    num_samples = int(sample_rate * duration_ms / 1000) * channels
    return b'\x00' * (num_samples * sample_width)

async def generate_phrase_wav(text, wav_path):
    tmp_mp3 = "/tmp/_phrase_tmp.mp3"
    communicate = edge_tts.Communicate(text, voice=VOICE, rate=RATE)
    await communicate.save(tmp_mp3)
    mp3_to_wav(tmp_mp3, wav_path)
    os.remove(tmp_mp3)

async def generate_scene(scene_name, phrases_list):
    all_pcm = b""
    params = None
    cuts_metadata = {}
    
    for idx, (text, pause_ms, cut_id) in enumerate(phrases_list):
        phrase_wav = f"/tmp/_phrase_{idx}.wav"
        await generate_phrase_wav(text, phrase_wav)
        p, data = read_wav_data(phrase_wav)
        if params is None: params = p
        
        phrase_duration = len(data) / (p.framerate * p.nchannels * p.sampwidth)
        pause_duration = pause_ms / 1000.0
        
        all_pcm += data
        if pause_ms > 0:
            all_pcm += create_silence_bytes(pause_ms, params.framerate, params.nchannels, params.sampwidth)
            
        total_phrase_dur = phrase_duration + pause_duration
        cuts_metadata[cut_id] = cuts_metadata.get(cut_id, 0.0) + total_phrase_dur
        os.remove(phrase_wav)
    
    combined_wav = f"/tmp/{scene_name}_combined.wav"
    with wave.open(combined_wav, "wb") as wf:
        wf.setparams(params)
        wf.writeframes(all_pcm)
    
    wav_to_mp3(combined_wav, f"{scene_name}.mp3")
    os.remove(combined_wav)
    return cuts_metadata

async def main():
    print("🎙️ 聖書の絵本「アダムとエバ」音声生成...")
    sync_data = {}
    
    for scene_name, phrases_list in scenes_script.items():
        print(f"🎬 {scene_name} を生成中...")
        cuts_metadata = await generate_scene(scene_name, phrases_list)
        sync_data[scene_name] = cuts_metadata
    
    with open("audio_metadata.json", "w", encoding="utf-8") as f:
        json.dump(sync_data, f, ensure_ascii=False, indent=2)
    
    print("\n✅ audio_metadata.json と各シーンのMP3ファイルを生成しました！")

if __name__ == "__main__":
    asyncio.run(main())
