# 画像・動画生成ガイド (ヤコブとエサウ③)

## 手順
1. **画像生成 (Midjourney)**
   - `scene_prompts.json` に記載されたプロンプトを順番にMidjourneyに入力します。
   - すべてのプロンプトに必ず以下の画風指定が含まれていることを確認してください：
     `Watercolor style illustration, Soft pastel colors, Hand-drawn texture, soft edges, Warm and gentle lighting, glowing light particles, soft sparkles, Dreamlike atmosphere, warm and cozy, Simple characters with innocent facial expressions, Large and expressive eyes`
   - 生成された画像を `/assets/jacob_and_esau_3/images/` に保存し、`シーン0−1.jpeg`, `シーン1−1.jpeg` のようにリネームします。
   - **注意**: シーン1-2, 1-3, 3-5, 6-3 は神様がメインのシーンです。画像生成は行わず、`adam_and_eve` テーマの `シーン1−2.jpeg` 等をそのまま流用してください。

2. **動画生成 (Luma Dream Machine / Runway Gen-3)**
   - `video_prompts.json` に記載されているシーンのみ動画化します。
   - Midjourneyで生成した画像をベース（第一フレーム）として読み込み、`video_prompt` の指示テキストを入力して動画を生成します。
   - 生成された動画を `/assets/jacob_and_esau_3/videos/` に保存し、`シーン0−1.mp4`, `シーン1−4.mp4` のようにリネームします。

3. **組み込み**
   - 生成したファイルを規定のディレクトリに配置後、`app_data.js` の内容を `app.js` に追加して動作確認を行います。
