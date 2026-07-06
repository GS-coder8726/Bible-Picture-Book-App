# 迷子の羊 (lost_sheep) 画像・動画生成ガイド

## 1. アートスタイル (Watercolor & Pastel)
このテーマは以下のトーンで統一します。
- スタイル: Watercolor style illustration（水彩画風）
- 色調: Soft pastel colors（パステルカラー）
- 雰囲気: Warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere, warm and cozy

## 2. キャラクター
- **ひつじかい**: やさしい青年。シンプルで表情豊か、大きな目、アーストーンの自然な服、木の杖。ちびキャラプロポーション。
- **まいごのひつじ**: 小さくてふわふわした白い羊。シンプルで表情豊か、大きな目。

## 3. 画像生成手順（Midjourney推奨）
1. `character_prompts.md` を使用して、ベースとなるキャラクターのスタイルを確認・生成します。
2. `scene_prompts.json` のプロンプトを順にコピーして、シーンごとの画像を生成します。アスペクト比は `--ar 16:9` です。
3. **重要: シーン6-3 (神様のメッセージ) は画像を生成しません。** 既存の `./assets/adam_and_eve/images/シーン1−2.jpeg` 等を流用してください。

## 4. 動画生成手順（Runway / Luma 等推奨）
1. `video_prompts.json` にリストされたシーン（計13シーン）の画像をベースに、動画を生成します。
2. カメラの動きはゆっくりとし、水彩画のテクスチャや光の粒子(sparkles)が優しく動くようにプロンプトを調整してください。

## 5. アプリ組み込み手順
1. 生成した画像と動画を `./assets/lost_sheep/images/` および `./assets/lost_sheep/videos/` フォルダに配置します。
2. ファイル名は `シーン1-1.jpeg`, `シーン1-1.mp4` のように命名してください。
3. `app_data.js` の内容を `app.js`（またはデータ定義部）に追加し、パスが正しいか確認します。
