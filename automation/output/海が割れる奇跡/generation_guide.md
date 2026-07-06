# 画像・動画生成ガイド: うみが われる きせき (parting_of_the_sea)

## 1. 事前準備
1. **Flow** などの画像生成AIツールを開きます。
2. アートスタイルとして「Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, glowing light particles, soft sparkles」を基本プロンプトとして使用します。

## 2. 特別ルール（神様の画像流用）
以下のシーンは神様単独、もしくはお告げのシーンです。**画像を新規生成せず**、既存のアセット（adam_and_eve）を使用してください。
- **シーン 3-1**: `./assets/adam_and_eve/images/シーン1−2.jpeg`
- **シーン 3-2**: `./assets/adam_and_eve/images/シーン5−1.jpeg`

## 3. 画像生成手順
1. `scene_prompts.json` に記載されている各シーンのプロンプトをコピーして画像を生成します。
2. キャラクターの一貫性を保つため、`character_prompts.md` に記載されているキャラクターの容姿設定（モーセ、イスラエルの人々、エジプト軍）を参考にしてください。
3. アスペクト比は横長（16:9 または 3:2）を推奨します。
4. 出力された画像を `./assets/parting_of_the_sea/images/` フォルダに保存し、ファイル名を `シーン{id}.jpeg` とします。

## 4. 動画生成手順
1. `video_prompts.json` に記載されているシーンについては、生成した静止画を元に動画（mp4）を生成します。
2. 各シーンの `prompt` に指定された動きの指示に従ってください。
3. 出力された動画を `./assets/parting_of_the_sea/videos/` フォルダに保存し、ファイル名を `シーン{id}.mp4` とします。
