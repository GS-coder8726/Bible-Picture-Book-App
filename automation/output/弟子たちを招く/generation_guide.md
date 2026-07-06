# 絵本画像・動画生成ガイド (テーマ: 弟子たちを招く)

## 1. 準備
1. `/automation/output/calling_disciples/scene_prompts.json` と `video_prompts.json` を開きます。
2. Midjourney または DALL-E 3 を開きます。
3. Luma Dream Machine または Runway Gen-2 などの動画生成AIを開きます。

## 2. 画像生成 (Midjourney/DALL-E)
- **注意**: シーン1-1と1-2は既存の画像 (`./assets/adam_and_eve/images/シーン1−2.jpeg`) を流用するため、新しく生成する必要はありません。
- `scene_prompts.json` の各シーンのプロンプトをコピーして、画像生成AIに入力します。
- 出力された画像を保存し、ファイル名を `シーン{scene_id}.jpeg` (例: `シーン0−1.jpeg`, `シーン1−3.jpeg`) として `./assets/calling_disciples/images/` に保存します。

## 3. 動画生成 (Luma/Runway)
- `video_prompts.json` に記載されているシーンについて、生成した静止画をベースに動画化します。
- プロンプトの動きの指示に従い、動画を生成します。
- 出力された動画を保存し、ファイル名を `シーン{scene_id}.mp4` として `./assets/calling_disciples/videos/` に保存します。

## 4. プログラムへの組み込み
- `app_data.js` の内容をコピーして、フロントエンドの `app.js` または対応するデータファイルに貼り付けます。
- カバー画像や、流用する神様の画像のパスが正しいか確認してください。
