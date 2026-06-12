import os
import subprocess
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ASSETS_IMG_DIR = os.path.join(BASE_DIR, 'assets', 'images')
ASSETS_VID_DIR = os.path.join(BASE_DIR, 'assets', 'videos')
METADATA_FILE = os.path.join(BASE_DIR, 'audio_metadata.json')
OUTPUT_FILE = os.path.join(BASE_DIR, 'final_movie.mp4')

def main():
    print("動画の結合処理を開始します...")

    if not os.path.exists(METADATA_FILE):
        print(f"Error: {METADATA_FILE} が見つかりません。")
        return

    with open(METADATA_FILE, 'r', encoding='utf-8') as f:
        metadata = json.load(f)

    temp_clips = []
    
    # 0-1, 1-1 to 1-4, etc.
    for scene_key, sub_scenes in metadata.items():
        # scene_key = "scene1"
        audio_file = os.path.join(BASE_DIR, f"{scene_key}.mp3")
        
        if not os.path.exists(audio_file):
            print(f"Warning: 音声ファイル {audio_file} が見つからないためスキップします。")
            continue

        current_audio_time = 0.0

        for sub_id, duration in sub_scenes.items():
            # sub_id = "1-1", duration = 6.976
            video_file = os.path.join(ASSETS_VID_DIR, f"scene{sub_id}.mp4")
            image_file = os.path.join(ASSETS_IMG_DIR, f"scene{sub_id}.png")
            output_clip = os.path.join(BASE_DIR, f"temp_scene{sub_id}.mp4")
            
            # 1. 動画優先
            if os.path.exists(video_file):
                if sub_id in ["2-4", "6-5"]:
                    print(f"[{sub_id}] 動画ファイルを結合中... (FLOW生成の音声を使用)")
                    cmd = [
                        'ffmpeg', '-y', '-i', video_file,
                        '-c:v', 'libx264', '-c:a', 'aac', '-b:a', '192k',
                        '-pix_fmt', 'yuv420p', output_clip
                    ]
                    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                    temp_clips.append(output_clip)
                    # 語りかけシーンは全体のmp3から切り出さないため、オーディオ時間は進めない
                else:
                    print(f"[{sub_id}] 動画ファイルを結合中...")
                    # 音声を指定秒数切り出し、映像と合わせる
                    cmd = [
                        'ffmpeg', '-y', '-ss', str(current_audio_time), '-t', str(duration),
                        '-i', audio_file,
                        '-stream_loop', '-1', '-i', video_file,
                        '-c:v', 'libx264', '-c:a', 'aac', '-b:a', '192k',
                        '-shortest', '-pix_fmt', 'yuv420p', output_clip
                    ]
                    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                    temp_clips.append(output_clip)
                    # 次のサブシーンのためにオーディオの開始時間を進める
                    current_audio_time += duration
                
            # 2. 画像
            elif os.path.exists(image_file):
                print(f"[{sub_id}] 画像ファイルを結合中...")
                cmd = [
                    'ffmpeg', '-y', '-ss', str(current_audio_time), '-t', str(duration),
                    '-i', audio_file,
                    '-loop', '1', '-i', image_file,
                    '-c:v', 'libx264', '-tune', 'stillimage', '-c:a', 'aac', '-b:a', '192k',
                    '-shortest', '-pix_fmt', 'yuv420p', output_clip
                ]
                subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                temp_clips.append(output_clip)
                # 次のサブシーンのためにオーディオの開始時間を進める
                current_audio_time += duration
            
            else:
                print(f"Warning: [{sub_id}] 動画も画像も見つかりません。")

    if not temp_clips:
        print("結合できるシーンがありませんでした。")
        return

    # リストファイル作成と最終結合
    list_file_path = os.path.join(BASE_DIR, 'concat_list.txt')
    with open(list_file_path, 'w', encoding='utf-8') as f:
        for clip in temp_clips:
            f.write(f"file '{clip}'\n")

    print("全ての中間ファイルを1本の動画にまとめています...")
    concat_cmd = [
        'ffmpeg', '-y', '-f', 'concat', '-safe', '0', '-i', list_file_path,
        '-c', 'copy', OUTPUT_FILE
    ]
    subprocess.run(concat_cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    print(f"完成！ 動画が出力されました: {OUTPUT_FILE}")

    # クリーンアップ
    for clip in temp_clips:
        if os.path.exists(clip):
            os.remove(clip)
    if os.path.exists(list_file_path):
        os.remove(list_file_path)

if __name__ == "__main__":
    main()
