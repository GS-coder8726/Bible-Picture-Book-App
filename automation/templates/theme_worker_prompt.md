# 聖書絵本ワーカー共通プロンプトテンプレート

## 基準パターン：三大祝福（adam_and_eve）の構成

### シーン構成
- **カバー**: 1シーン（静止画のみ）
- **セクション1〜6**: 各2〜5パーツ
- **合計**: 約25〜27シーン（カバー含む）
- **動画比率**: コンテンツシーンの約48%〜50%を動画化

### テキストスタイル
- 全てのテーマで台本を**ゼロから新規作成**してください。
- ひらがな中心、3〜5歳の幼児向け
- 1シーンあたり1〜2文（短く簡潔）
- `<br>` で文を区切る（複数文の場合）
- 漢字を使う場合は簡単なもの（例：大切、世界、笑顔）

---

## アートスタイルガイドライン

### 画風
- **スタイル**: Watercolor style illustration（水彩画風）
- **色調**: Soft pastel colors（パステルカラー）
- **テクスチャ**: Hand-drawn texture, soft edges
- **照明**: Warm and gentle lighting, glowing light particles, soft sparkles
- **雰囲気**: Dreamlike atmosphere, warm and cozy

### 神様の表現（重要特別ルール）
- **神様の画像は新たに生成しません**。
- 神様が単独で登場するシーン、または神様のお告げのシーンでは、**必ず以下の三大祝福の既存画像アセットを流用**してください。
  - 静止画として流用するパス: `./assets/adam_and_eve/images/シーン1−2.jpeg` または `./assets/adam_and_eve/images/シーン5−1.jpeg`
- そのため、神様メインのシーンでは `is_video: false` とし、`app_data.js` の `imagePath` に上記のパスを直接指定します。プロンプト出力も不要です。

### キャラクター共通特徴（神様以外）
- Simple characters with innocent facial expressions
- Large and expressive eyes（大きくて表情豊かな瞳）
- Wearing simple, natural clothing（葉の服、earth-tone の素朴な衣服）
- Soft rounded features, chibi-like proportions for children

---

## 出力ファイル仕様

以下のファイルを `/Users/goya/Documents/Antigravity/聖書絵本制作/automation/output/{theme_id}/` に作成します。

### 1. script.json
```json
{
  "id": "theme_id",
  "title": "テーマの日本語タイトル",
  "sections": [
    // ...
  ]
}
```

### 2. characters.json
登場人物の定義。神様は含めないか、流用する旨を記載。

### 3. character_prompts.md
Flowで使うキャラクター画像生成プロンプト集。

### 4. scene_prompts.json
神様流用シーン以外の、全シーンの画像・動画プロンプト。

### 5. video_prompts.json
動画化するシーンのみ抽出。

### 6. generation_guide.md
ユーザーがFlowで手動生成するための手順書。

### 7. app_data.js
app.jsに挿入可能なJavaScriptコードブロック。
神様メインのシーンでは既存画像を流用します。
```javascript
{
    id: "theme_id",
    title: "テーマタイトル",
    cover: "./assets/theme_id/images/シーン0−1.jpeg",
    scenes: [
        { id: "0-1", text: "...", imagePath: "./assets/theme_id/images/シーン0−1.jpeg", placeholderImage: "..." },
        // 神様シーンの流用例:
        { id: "2-1", text: "かみさまは...", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." }
    ]
}
```
