# ペンテコステの ひ 画像・動画生成ガイド

## 1. 静止画の生成 (Midjourney)
`scene_prompts.json` のプロンプトを使用して画像を生成します。
神様が登場するシーン（2-3, 3-5）については生成不要です。

## 2. 動画の生成 (Luma Dream Machine or Runway Gen-3)
`video_prompts.json` に記載されたシーンの画像を元に動画を生成します。
テキストプロンプトには画像生成時のプロンプトと同じものを入力し、動きの指示（例: "wind blowing", "glowing light"）を強調してください。

## 3. ファイルの配置
- 画像: `assets/pentecost/images/`
- 動画: `assets/pentecost/videos/`
ファイル名は `シーン1−1.jpeg` または `シーン1−1.mp4` のように命名してください。
