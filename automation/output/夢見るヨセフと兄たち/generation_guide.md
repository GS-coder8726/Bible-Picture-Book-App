# Flow 画像・動画生成ガイド (dreaming_joseph)

1. `character_prompts.md` に従って、キャラクター（Joseph, Jacob, Brothers）のリファレンス画像を生成してください。神様は既存のアセットを利用するため生成不要です。
2. キャラクター画像が決定したら、FlowにCharacter Referenceとして登録します。
3. `scene_prompts.json` のプロンプトをFlowに入力し、全24シーンの静止画を生成します。（神様シーン4つ分は生成しません）
4. 各静止画のファイル名を `シーン{scene_id}.jpeg`（例: `シーン1-1.jpeg`）として保存します。
5. `video_prompts.json` で指定された14シーンについて、Luma Dream Machine等を使用して動画を生成します。
6. 動画のファイル名を `シーン{scene_id}.mp4` として保存します。
7. すべてのアセット（静止画、動画）を `./assets/dreaming_joseph/images/` および `./assets/dreaming_joseph/videos/` フォルダへ配置します。
8. `app_data.js` をメインの絵本アプリコード (`app.js`等) に組み込んでください。
