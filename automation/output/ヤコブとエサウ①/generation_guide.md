# Generation Guide: ヤコブとエサウ① (jacob_and_esau_1)

## 1. キャラクターの作成
- Midjourneyで `character_prompts.md` に記載されたプロンプトを使用して、キャラクターのベース画像を生成します。
- スタイルリファレンス(`--sref`)には、既存の絵本（アダムとエバ等）から水彩画風の画像を1〜2枚指定し、一貫したトーンを保ってください。
- キャラクターリファレンス(`--cref`)を利用して、ヤコブとエサウの顔立ちが各シーンでブレないように固定します。

## 2. シーン画像の生成
- `scene_prompts.json` のプロンプトを使用して、全シーンの画像を生成します。
- **注意**: 以下の神様のシーンは新規生成せず、指定のアセットをコピーして使用します。
  - シーン1-2: `./assets/adam_and_eve/images/シーン1−2.jpeg`
  - シーン3-2: `./assets/adam_and_eve/images/シーン1−2.jpeg`
  - シーン6-2: `./assets/adam_and_eve/images/シーン1−2.jpeg`

## 3. 動画の生成 (Runway Gen-3 / Luma Dream Machine)
- `video_prompts.json` に記載されたシーン(12シーン)について、生成した静止画を元にImage-to-Videoで動画を生成します。
- プロンプトの指示に従い、ゆっくりとした動き(steam rising, gentle breathing, floating particles)をつけてください。

## 4. ファイルの配置
- 生成した画像を `/assets/jacob_and_esau_1/images/` に配置します。（例: `シーン0−1.jpeg`）
- 生成した動画を `/assets/jacob_and_esau_1/videos/` に配置します。（例: `シーン1−3.mp4`）
- アプリの `app.js` に `app_data.js` の内容を追記して動作確認を行ってください。
