# 画像・動画生成手順（天に昇るイエス様）

1. **キャラクター生成**: `character_prompts.md` を用いて、イエス様、おでしさんたち、天使の基準画像を生成します。（神様は流用するため生成不要です）
2. **シーン静止画生成**: `scene_prompts.json` のプロンプトに従い、各シーンの画像を生成します。（`6-5` は神様流用のため生成しません。`assets/adam_and_eve/images/シーン1−2.jpeg` を流用します）
3. **動画生成**: `video_prompts.json` にリストアップされたシーン（13シーン）について、生成した静止画を元に動画を生成します。
4. **アセット配置**:
   - 静止画: `./assets/ascension/images/シーン{X}-{Y}.jpeg` に配置
   - 動画: `./assets/ascension/videos/シーン{X}-{Y}.mp4` に配置
