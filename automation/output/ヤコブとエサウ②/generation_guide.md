# 画像・動画生成ガイド：ヤコブとエサウ②

## 1. 静止画の生成 (Midjourney)
1. `character_prompts.md` を参考にキャラクターのトーンを確認してください。
2. `scene_prompts.json` の `prompt` を順番に Midjourney に入力し、画像を生成します。
3. 画像は全てアスペクト比 16:9 (`--ar 16:9`) で生成してください。
4. **重要**: シーン5-5は神様単独シーンのため生成せず、既存の画像を流用します（`app_data.js` で設定済み）。

## 2. 動画の生成 (Runway Gen-3 / Luma Dream Machine)
1. 静止画生成で得られた画像のうち、`video_prompts.json` に記載されたIDの画像を動画生成ツールにアップロードします。
2. `video_prompt` のテキストを入力して動画を生成してください。
3. カメラの動きは控えめにし、キャラクターの微細な表情や光の粒子の揺らめき（Glowing light particles）が活きるようにします。

## 3. ファイルの配置
- 生成した画像（`.jpeg` または `.png`）と動画（`.mp4`）を `./assets/jacob_and_esau_2/images/` および `./assets/jacob_and_esau_2/videos/` に配置します。
- ファイル名は `シーン0−1.jpeg`, `シーン1−2.mp4` のように、IDに合わせてリネームしてください。
