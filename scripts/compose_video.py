import os
import json
import numpy as np
from moviepy import VideoFileClip, ImageClip, AudioFileClip, CompositeAudioClip, concatenate_videoclips

# =============================================
# 設定
# =============================================
VID_DIR = 'assets/videos'
IMG_DIR = 'assets/images'
METADATA_PATH = 'audio_metadata.json'
OUTPUT = 'output_narrated_v14.mp4'
FPS = 24
TARGET_W, TARGET_H = 1920, 1080
SFX_VOLUME = 0.20
FADE_SEC = 1.0

# =============================================
# 各カットのタイプ定義
# =============================================
CUT_TYPES = {
    '0-1': 'img', '1-1': 'img', '1-2': 'vid', '1-3': 'vid', '1-4': 'img',
    '2-1': 'vid', '2-2': 'img', '2-3': 'vid', '2-4': 'img',
    '3-1': 'vid', '3-2': 'vid', '3-3': 'img',
    '4-1': 'img', '4-2': 'vid', '4-3': 'vid',
    '5-1': 'img', '5-2': 'vid', '5-3': 'img',
    '6-1': 'vid', '6-2': 'vid', '6-3': 'img', '6-4': 'img',
    '7-1': 'vid', '7-2': 'img', '7-3': 'img', '7-4': 'img',
}

# =============================================
# ヘルパー関数
# =============================================

def make_image_clip(cut_id, duration):
    path = os.path.join(IMG_DIR, f'{cut_id}.png')
    if not os.path.exists(path): return None
    clip = ImageClip(path, duration=duration)
    resize_f = clip.resized if hasattr(clip, 'resized') else clip.resize
    return resize_f((TARGET_W, TARGET_H))

def apply_fade(clip, duration):
    """映像フェードのバージョン安定化適用"""
    try:
        # MoviePy 2.x
        from moviepy.video.fx.FadeIn import FadeIn
        from moviepy.video.fx.FadeOut import FadeOut
        return clip.with_effects([FadeIn(duration), FadeOut(duration)])
    except:
        try:
            # MoviePy 1.x
            import moviepy.video.fx.all as vfx
            return clip.fx(vfx.fadein, duration).fx(vfx.fadeout, duration)
        except:
            return clip

def make_video_clip(cut_id, target_duration):
    path = os.path.join(VID_DIR, f'{cut_id}.mp4')
    if not os.path.exists(path): return None, None
    clip = VideoFileClip(path)
    
    crop_f = clip.cropped if hasattr(clip, 'cropped') else clip.crop
    resize_f = clip.resized if hasattr(clip, 'resized') else clip.resize
    clip = crop_f(x1=0, y1=0, x2=1860, y2=1020)
    clip = resize_f((TARGET_W, TARGET_H))
    
    sfx_audio = None
    if clip.audio is not None:
        v_f = clip.audio.with_volume_scaled if hasattr(clip.audio, 'with_volume_scaled') else clip.audio.volumex
        sfx_audio = v_f(SFX_VOLUME)
        # Audio Fades
        if hasattr(sfx_audio, 'audio_fadein'):
            sfx_audio = sfx_audio.audio_fadein(FADE_SEC).audio_fadeout(FADE_SEC)
        elif hasattr(sfx_audio, 'with_fadein'):
            sfx_audio = sfx_audio.with_fadein(FADE_SEC).with_fadeout(FADE_SEC)
        clip = clip.without_audio()
    
    sub_f = clip.subclipped if hasattr(clip, 'subclipped') else clip.subclip
    if target_duration <= clip.duration:
        clip = sub_f(0, target_duration)
        if sfx_audio:
            asub_f = sfx_audio.subclipped if hasattr(sfx_audio, 'subclipped') else sfx_audio.subclip
            sfx_audio = asub_f(0, target_duration)
    else:
        # Slow Motion
        speed_factor = clip.duration / target_duration
        if hasattr(clip, 'with_speed_scaled'):
            clip = clip.with_speed_scaled(speed_factor)
        elif hasattr(clip, 'multiply_speed'):
            clip = clip.multiply_speed(speed_factor)
        else:
            import moviepy.video.fx.all as vfx
            clip = clip.fx(vfx.speedx, speed_factor)
        dur_f = clip.with_duration if hasattr(clip, 'with_duration') else clip.set_duration
        clip = dur_f(target_duration)

    return clip, sfx_audio

def main():
    if not os.path.exists(METADATA_PATH): return
    with open(METADATA_PATH, 'r', encoding='utf-8') as f:
        sync_metadata = json.load(f)

    print('🚀 Version 14 (Sequential Transition) Rendering...')
    scene_clips = []
    
    for i, scene_key in enumerate(sorted(sync_metadata.keys())):
        audio_path = f"{scene_key}.mp3"
        if not os.path.exists(audio_path): continue
        narration = AudioFileClip(audio_path)
        print(f'\n📖 {scene_key} ({narration.duration:.2f}s)')

        cuts_data = sync_metadata[scene_key]
        cut_ids = sorted(cuts_data.keys())
        current_scene_cut_clips = []
        sfx_tracks = []
        time_offset = 0.0

        for cid in cut_ids:
            duration = cuts_data[cid]
            ctype = CUT_TYPES.get(cid, 'img')
            clip, sfx = (make_image_clip(cid, duration), None) if ctype == 'img' else make_video_clip(cid, duration)
            if sfx:
                st_func = sfx.with_start if hasattr(sfx, 'with_start') else sfx.set_start
                sfx_tracks.append(st_func(time_offset))
            if clip:
                current_scene_cut_clips.append(clip)
                time_offset += duration

        visual = concatenate_videoclips(current_scene_cut_clips, method='compose')
        audio_layers = [narration] + sfx_tracks
        mixed_audio = CompositeAudioClip(audio_layers)
        
        sa_f = visual.with_audio if hasattr(visual, 'with_audio') else visual.set_audio
        scene_video = sa_f(mixed_audio)
        
        # 演出: フェードイン・フェードアウト
        scene_video = apply_fade(scene_video, FADE_SEC)
        scene_clips.append(scene_video)

    # 順次結合（音が重ならない）
    final_video = concatenate_videoclips(scene_clips, method='compose')
    final_video.write_videofile(OUTPUT, fps=FPS, codec='libx264', audio_codec='aac', bitrate='8000k', threads=4)
    print(f'\n✅ Done Version 14: {OUTPUT}')

if __name__ == '__main__':
    main()
