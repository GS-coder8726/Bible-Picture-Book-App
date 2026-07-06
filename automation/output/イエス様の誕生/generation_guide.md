# イエス様の誕生 (birth_of_jesus) 生成ガイド

## 1. キャラクターの準備
`character_prompts.md` に記載されているプロンプトを使用して、キャラクターの基本デザインをMidjourney等で生成・確認してください。
（神様の画像は生成しません）

## 2. シーン画像の生成
`scene_prompts.json` のプロンプトを順番に入力し、画像を生成します。
- **神様のシーン（6-4）**: 生成不要。既存のアセット（`./assets/adam_and_eve/images/シーン1−2.jpeg`）を使用します。
- 生成した画像は `/assets/birth_of_jesus/images/` に `シーンX-Y.jpeg` という名前で保存してください。

## 3. 動画の生成
`video_prompts.json` に記載されたシーンについて、生成した静止画を元に動画生成AI（Runway, Luma等）で動きをつけてください。
- 生成した動画は `/assets/birth_of_jesus/videos/` に `シーンX-Y.mp4` という名前で保存してください。

## 4. アプリへの組み込み
`app_data.js` の内容をコピーし、`app.js` の適切な場所に貼り付けてください。これで新しいテーマがアプリに追加されます。
