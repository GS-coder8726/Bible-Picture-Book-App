# 画像・動画生成ガイド：アブラハムのたびだち (abrahams_departure)

## 1. 概要
このテーマは、神様に呼ばれたアブラム（アブラハム）が、故郷を離れて約束の地カナンへと旅する物語です。

## 2. アートスタイル（全共通）
- **画風**: 水彩画風 (Watercolor style)
- **色調**: パステルカラー (Soft pastel colors)
- **特徴**: 手描きの質感、柔らかい境界、温かい光、光の粒子
- プロンプトの末尾に必ず以下を追加してください：
  `Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere, warm and cozy.`

## 3. キャラクター設定
1. **アブラム (Abram)**: おじいさん、白く長い髭、優しい顔、茶色系のローブ、木の杖
2. **サライ (Sarai)**: おばあさん、優しい笑顔、シンプルなベール、茶色系のドレス
3. **ロト (Lot)**: 若い青年、元気な様子、シンプルなチュニック

## 4. 神様のシーンに関する【重要】ルール
- 神様が単独で登場するシーン（1-2, 1-3, 5-1）は**画像を新規生成しません**。
- `app_data.js`にて、アダムとエバの既存画像（`./assets/adam_and_eve/images/シーン1−2.jpeg` 等）を直接指定して流用します。

## 5. 生成手順（Flow）
1. `character_prompts.md` に基づき、主要キャラクターの参照画像（リファレンス）を生成し、一貫性を保ちます。
2. `scene_prompts.json` を使い、各シーンの静止画（16:9）を生成します。
3. `video_prompts.json` にリストされたシーン（動画化対象）について、Luma Dream Machine や Runway Gen-3 などを使い、静止画から動画を生成します。
4. 生成した画像を `/assets/abrahams_departure/images/` に、動画を `/assets/abrahams_departure/videos/` に配置します。
