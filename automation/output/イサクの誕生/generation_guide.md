# イサクの誕生 (isaacs_birth) - 画像・動画生成ガイド

## 1. アートスタイル
- Watercolor style illustration（水彩画風）
- Soft pastel colors（パステルカラー）
- Warm and gentle lighting, glowing light particles, soft sparkles
- 幼児向け（ちびキャラ風プロポーション、大きな瞳）

## 2. 神様シーンの扱い（重要）
以下のシーンは、既存のアセットを流用するため**新規生成を行いません**。
- シーン2-1
- シーン3-4
- シーン4-3
- シーン6-4
※`app_data.js` にて `./assets/adam_and_eve/images/シーン1−2.jpeg` を設定済みです。

## 3. 生成手順
1. `scene_prompts.json` のプロンプトを使用して画像を生成します。
2. 生成した画像を `./assets/isaacs_birth/images/シーンID.jpeg` として保存します。
3. `video_prompts.json` に記載されたシーンについては、生成した静止画を元に動画生成AI（例：Runway, Luma等）で動画化し、`./assets/isaacs_birth/videos/シーンID.mp4` として保存します。

## 4. キャラクターの一貫性
- `character_prompts.md` に記載されたキャラクターの特徴プロンプトを常に付与して生成してください。
