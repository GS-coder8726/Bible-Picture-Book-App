# 絵本生成ガイド (Exodus - エジプトからの脱出)

## 1. キャラクター画像生成 (Midjourney等)
`character_prompts.md` を使用して、主人公モーセ、ファラオ、イスラエルの人々のベース画像を作成してください。

## 2. シーン画像生成 (Midjourney等)
`scene_prompts.json` のプロンプトを使用して、各シーンの静止画を生成してください。
※ 神様が単独で登場する以下のシーンは、既存アセットを流用するため生成不要です。
- 2-2
- 2-4
- 4-1
- 6-5

## 3. 動画生成 (Runway Gen-2 / Luma Dream Machine / Haiper 等)
`video_prompts.json` にリストされているシーンのみ、生成した静止画をベースにして動画化してください。

## 4. アプリ組み込み
生成した画像・動画をリネームし、`app_data.js` のデータを `app.js` のテーマ配列に追加してください。
神様流用シーンはすでに `app_data.js` 内で正しいパス（`./assets/adam_and_eve/images/シーン1−2.jpeg` 等）が指定されています。
