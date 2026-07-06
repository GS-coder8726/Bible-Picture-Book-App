# 画像・動画生成ガイド：じゅうじかと ふっかつ (crucifixion)

## 1. 準備
1. Flow (またはMidjourney等の画像生成AI) を開きます。
2. `character_prompts.md` に記載されたキャラクター特徴（プロンプト）を確認します。
3. 今回は**神様の画像は生成しません**。既存のアダムとエバの画像（`シーン1−2.jpeg`等）を流用します。

## 2. 画像生成 (Image Generation)
1. `scene_prompts.json` を開きます。
2. 各シーンの `prompt` をコピーし、画像生成AIに入力して生成します。
3. 生成された画像から、水彩画風（Watercolor style）、パステルカラー、キャラクターの目が大きく温かい雰囲気のものを選びます。
4. ファイル名は `シーン0−1.jpeg`, `シーン1−1.jpeg` のようにリネームして保存します。
※シーン1-4、シーン5-1は神様の画像を流用するため、生成をスキップしてください。

## 3. 動画生成 (Video Generation)
1. `video_prompts.json` を開きます。
2. Luma Dream Machine などの動画生成AIに、生成した静止画と `prompt`（動きの指示）を入力します。
3. 生成された動画をダウンロードし、`シーン0−1.mp4` のようにリネームして保存します。

## 4. フォルダへの配置
- 生成した画像は `/assets/crucifixion/images/` に配置します。
- 生成した動画は `/assets/crucifixion/videos/` に配置します。
