# 画像生成ガイド (five_loaves)

1. `scene_prompts.json` のプロンプトを使用して Midjourney などで画像を生成します。
2. 画風の統一感（水彩画風、パステルカラー）を保つために、生成時は常に `character_prompts.md` に記載のスタイルプロンプトを含めてください。
3. **シーン 4-5** は神様がメインとなるシーンです。ここでは新規の画像生成は行わず、既存の画像を流用します。（`app_data.js`にて `./assets/adam_and_eve/images/シーン1−2.jpeg` を設定済みです）
4. 動画化対象シーン（`video_prompts.json`記載のシーン）については、生成した画像を元に Luma 等のAI動画ツールで動画化してください。
