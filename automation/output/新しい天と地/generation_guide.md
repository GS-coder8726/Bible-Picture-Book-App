# 画像・動画生成ガイド：新しい天と地

1. **基本方針**
   - Watercolor style illustration, Soft pastel colors のプロンプトを使用してMidjourneyで画像を生成します。
   - 神様が単独で登場するシーン（1-2, 1-3, 4-1, 4-2, 5-1）は、既存の「adam_and_eve」のアセットを流用するため生成不要です。
2. **動画生成**
   - `video_prompts.json` に記載されたシーンの画像をRunway Gen-3等の動画生成ツールに入力し、短いアニメーションを作成します。
3. **配置**
   - 出力された画像・動画は `./assets/new_heaven_and_earth/images/` および `./assets/new_heaven_and_earth/videos/` フォルダに配置します。
