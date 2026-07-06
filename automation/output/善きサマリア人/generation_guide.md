# 画像生成ガイド：よきサマリアびと

1. `character_prompts.md` に記載されたキャラクターごとのプロンプトをベースに、MidjourneyまたはDALL-Eでキャラクターの一貫性を確認してください。
2. `scene_prompts.json` のプロンプトを順番に入力し、全25枚の画像を生成してください。
3. 画像生成時は「水彩画風 (Watercolor)」「パステルカラー」「光の粒子 (Sparkles)」の雰囲気が保たれているか確認してください。
4. `video_prompts.json` にリストアップされたシーン（約12シーン）の画像を、Runway等の動画生成ツールに入力して数秒のアニメーションを作成してください。
5. 生成した画像・動画は `/assets/good_samaritan/images/` および `/assets/good_samaritan/videos/` フォルダに配置してください。
