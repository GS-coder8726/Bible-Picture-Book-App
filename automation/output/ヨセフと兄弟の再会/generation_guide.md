# 画像・動画生成ガイド：ヨセフと兄弟の再会

## 1. 静止画の生成 (Midjourney)
1. `character_prompts.md` を参考に、登場人物のスタイルを固定します。
2. `scene_prompts.json` の `prompt` を使用して各シーンの画像を生成します。
3. **神様シーン（6-1, 6-2）は生成不要**です。既存のアセット（`./assets/adam_and_eve/images/シーン1−2.jpeg` 等）を流用します。

## 2. 動画の生成 (Runway / Luma etc.)
1. `video_prompts.json` にリストされたシーン（is_video: true）の静止画をベースにします。
2. `video_prompt` の指示に従って、微細なアニメーションを追加します。

## 3. ファイルの配置
- 生成した画像: `/assets/josephs_reunion/images/シーン{id}.jpeg`
- 生成した動画: `/assets/josephs_reunion/videos/シーン{id}.mp4`
