import os
import json

out_dir = "/Users/goya/Documents/Antigravity/聖書絵本制作/automation/output/new_heaven_and_earth"
os.makedirs(out_dir, exist_ok=True)

# 1. script.json
script_data = {
  "id": "new_heaven_and_earth",
  "title": "あたらしい てんと ち",
  "sections": [
    {
      "id": "0",
      "title": "カバー",
      "scenes": [
        {"id": "0-1", "text": "あたらしい てんと ち"}
      ]
    },
    {
      "id": "1",
      "title": "いまの せかいと かみさまのおやくそく",
      "scenes": [
        {"id": "1-1", "text": "わたしたちの すんでいる せかいには、<br>ときどき かなしいことや いたいことがあります。"},
        {"id": "1-2", "text": "でも、かみさまは とっても すてきな<br>おやくそくを してくれました。"},
        {"id": "1-3", "text": "「いつか、すべてを あたらしく するよ」<br>かみさまは そう おっしゃいました。"},
        {"id": "1-4", "text": "それは どんな せかい なんでしょう？"}
      ]
    },
    {
      "id": "2",
      "title": "イエスさまが もどってくる",
      "scenes": [
        {"id": "2-1", "text": "あるひ、おそらから イエスさまが<br>もどって こられます。"},
        {"id": "2-2", "text": "イエスさまは ピカピカ ひかる<br>きれいないろに つつまれています。"},
        {"id": "2-3", "text": "「みんな、おまたせ！」<br>イエスさまは やさしく わらいます。"},
        {"id": "2-4", "text": "どうぶつたちも こどもたちも、<br>みんな イエスさまの ところへ あつまります。"}
      ]
    },
    {
      "id": "3",
      "title": "あたらしい おうち",
      "scenes": [
        {"id": "3-1", "text": "そして、かみさまが つくった<br>「あたらしい せかい」が はじまります。"},
        {"id": "3-2", "text": "きらきら ひかる きれいな おみずや、<br>おいしい くだものが たくさん あります。"},
        {"id": "3-3", "text": "くらい よるは もう ありません。<br>かみさまの ひかりが ずっと てらしているからです。"},
        {"id": "3-4", "text": "らいおんさんと ひつじさんが、<br>いっしょに なかよく おひるね しています。"},
        {"id": "3-5", "text": "おおかみさんも うさぎさんも、<br>みんな ずっと おともだち です。"}
      ]
    },
    {
      "id": "4",
      "title": "なみだも かなしみも ない",
      "scenes": [
        {"id": "4-1", "text": "かみさまは やさしく<br>なみだを ふいてくださいます。"},
        {"id": "4-2", "text": "「もう なくことは ないんだよ」<br>かみさまは やさしく おっしゃいます。"},
        {"id": "4-3", "text": "いたいことも、かなしいことも、<br>びょうきも ぜんぶ なくなります。"},
        {"id": "4-4", "text": "みんなの おかおは、<br>にこにこ えがおで いっぱいです。"}
      ]
    },
    {
      "id": "5",
      "title": "いつまでも いっしょ",
      "scenes": [
        {"id": "5-1", "text": "かみさまは、わたしたちと いっしょに<br>すんでくださいます。"},
        {"id": "5-2", "text": "わたしたちは かみさまの こどもとして、<br>ずっと ずっと なかよく くらします。"},
        {"id": "5-3", "text": "おててを つないで、<br>うたを うたって あそびます。"},
        {"id": "5-4", "text": "ほんとうに とっても すてきな<br>あたらしい せかい です。"}
      ]
    },
    {
      "id": "6",
      "title": "おわりの おいのり",
      "scenes": [
        {"id": "6-1", "text": "かみさま、すてきな おやくそくを<br>ありがとうございます。"},
        {"id": "6-2", "text": "イエスさまが きてくれる ひを、<br>みんなで たのしみに まっています。"},
        {"id": "6-3", "text": "アーメン。"}
      ]
    }
  ]
}
with open(os.path.join(out_dir, "script.json"), "w", encoding="utf-8") as f:
    json.dump(script_data, f, ensure_ascii=False, indent=2)

# 2. characters.json
characters_data = {
  "characters": [
    {
      "id": "jesus",
      "name": "イエスさま",
      "description": "光に包まれ、優しく微笑むイエス様。白い服を着ている。"
    },
    {
      "id": "boy",
      "name": "男の子",
      "description": "大きくて表情豊かな瞳、シンプルな自然の服を着た男の子。"
    },
    {
      "id": "girl",
      "name": "女の子",
      "description": "大きくて表情豊かな瞳、シンプルな自然の服を着た女の子。"
    },
    {
      "id": "animals",
      "name": "動物たち",
      "description": "ライオン、羊、うさぎ、狼など。すべて平和で仲良しな様子。"
    }
  ],
  "note": "神様の姿は、既存のアセット（adam_and_eve）の画像を流用するため、本テーマ用としては新規に定義・生成しません。"
}
with open(os.path.join(out_dir, "characters.json"), "w", encoding="utf-8") as f:
    json.dump(characters_data, f, ensure_ascii=False, indent=2)

# 3. character_prompts.md
char_prompts = """# キャラクタープロンプト（新しい天と地）

## イエスさま (Jesus)
A gentle man resembling Jesus, with a kind and loving smile, wearing simple white flowing robes. Soft rounded features, peaceful expression. Watercolor style illustration, soft pastel colors, warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere. --ar 16:9

## 男の子と女の子 (Children)
A young boy and a young girl with innocent facial expressions, large and expressive eyes, wearing simple natural earth-tone clothing. Soft rounded features, chibi-like proportions. Watercolor style illustration, soft pastel colors, hand-drawn texture. --ar 16:9

## 平和な動物たち (Peaceful Animals)
Cute innocent animals including a lion, a lamb, a wolf, and a rabbit, with soft rounded features and large expressive eyes. Peaceful and friendly. Watercolor style illustration, soft pastel colors, hand-drawn texture. --ar 16:9

※神様が単独で登場するシーンは、既存アセットを流用するためプロンプトは不要です。
"""
with open(os.path.join(out_dir, "character_prompts.md"), "w", encoding="utf-8") as f:
    f.write(char_prompts)

# 4. scene_prompts.json & 5. video_prompts.json
scenes = [
  {"id": "0-1", "is_video": False, "prompt": "Cover image. A beautiful, glowing heavenly city coming down from the sky, surrounded by peaceful nature, a lion and a lamb sleeping together, happy children playing. Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere, warm and cozy. --ar 16:9"},
  {"id": "1-1", "is_video": False, "prompt": "A young child looking slightly sad, sitting in a dim but beautiful forest. Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges. --ar 16:9"},
  # 1-2, 1-3, 4-1, 4-2, 5-1 are God scenes, so no prompt generated.
  {"id": "1-4", "is_video": True, "prompt": "Children looking up at the sky with hopeful, innocent expressions, large expressive eyes, glowing light shining on their faces. Watercolor style illustration, soft pastel colors, warm and gentle lighting, soft sparkles, dreamlike atmosphere. --ar 16:9"},
  {"id": "2-1", "is_video": True, "prompt": "Jesus coming down from the beautiful glowing sky, surrounded by radiant warm light and clouds. Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, glowing light particles, soft sparkles. --ar 16:9"},
  {"id": "2-2", "is_video": False, "prompt": "Close up of Jesus smiling gently, wrapped in beautiful glowing pastel colors. Watercolor style illustration, soft pastel colors, warm and gentle lighting, glowing light particles, dreamlike atmosphere. --ar 16:9"},
  {"id": "2-3", "is_video": True, "prompt": "Jesus opening his arms warmly to welcome the children, kind and loving smile. Watercolor style illustration, soft pastel colors, warm and gentle lighting, soft sparkles. --ar 16:9"},
  {"id": "2-4", "is_video": True, "prompt": "Happy children and cute animals running joyfully towards Jesus in a beautiful glowing meadow. Watercolor style illustration, soft pastel colors, hand-drawn texture, dreamlike atmosphere. --ar 16:9"},
  {"id": "3-1", "is_video": True, "prompt": "A breathtakingly beautiful new world, vibrant but soft nature, glowing flowers, a sparkling clear river. Watercolor style illustration, soft pastel colors, hand-drawn texture, warm and gentle lighting, glowing light particles, soft sparkles. --ar 16:9"},
  {"id": "3-2", "is_video": False, "prompt": "A sparkling clear river flowing, with beautiful fruit trees growing on the banks, glowing magical fruits. Watercolor style illustration, soft pastel colors, dreamlike atmosphere. --ar 16:9"},
  {"id": "3-3", "is_video": True, "prompt": "A radiant beautiful city made of light and jewels, glowing warmly from within, no dark shadows, bright pastel sky. Watercolor style illustration, soft pastel colors, warm and gentle lighting, glowing light particles. --ar 16:9"},
  {"id": "3-4", "is_video": False, "prompt": "A cute lion and a fluffy lamb sleeping together peacefully in a flower meadow. Soft rounded features. Watercolor style illustration, soft pastel colors, hand-drawn texture, warm and cozy. --ar 16:9"},
  {"id": "3-5", "is_video": True, "prompt": "A cute wolf and a bunny playing together happily. Soft rounded features, innocent expressions. Watercolor style illustration, soft pastel colors, dreamlike atmosphere. --ar 16:9"},
  {"id": "4-3", "is_video": True, "prompt": "Happy children with no tears, laughing and playing freely in a glowing magical field. Watercolor style illustration, soft pastel colors, glowing light particles. --ar 16:9"},
  {"id": "4-4", "is_video": False, "prompt": "Close up of happy children's faces, large expressive eyes, big smiles, rosy cheeks. Watercolor style illustration, soft pastel colors, warm and gentle lighting, dreamlike atmosphere. --ar 16:9"},
  {"id": "5-2", "is_video": True, "prompt": "Children holding hands, surrounded by a gentle, warm glowing light of God's presence, feeling safe and loved. Watercolor style illustration, soft pastel colors, glowing light particles, soft sparkles. --ar 16:9"},
  {"id": "5-3", "is_video": True, "prompt": "Children and animals dancing and singing happily in a circle, beautiful nature. Watercolor style illustration, soft pastel colors, dreamlike atmosphere. --ar 16:9"},
  {"id": "5-4", "is_video": True, "prompt": "A wide beautiful landscape of the new heaven and earth, people and animals living together in perfect harmony, a majestic glowing mountain in the background. Watercolor style illustration, soft pastel colors, warm and gentle lighting. --ar 16:9"},
  {"id": "6-1", "is_video": False, "prompt": "Children praying with closed eyes and peaceful smiles, glowing soft light around them. Watercolor style illustration, soft pastel colors, hand-drawn texture, warm and cozy. --ar 16:9"},
  {"id": "6-2", "is_video": True, "prompt": "Children looking up at a beautiful, hopeful glowing pastel sky, smiling in anticipation. Watercolor style illustration, soft pastel colors, warm and gentle lighting, glowing light particles. --ar 16:9"},
  {"id": "6-3", "is_video": True, "prompt": "A peaceful landscape with a gentle beam of heavenly light shining down on a beautiful garden. Watercolor style illustration, soft pastel colors, dreamlike atmosphere. --ar 16:9"}
]

with open(os.path.join(out_dir, "scene_prompts.json"), "w", encoding="utf-8") as f:
    json.dump({"scenes": scenes}, f, ensure_ascii=False, indent=2)

video_prompts = [s for s in scenes if s.get("is_video")]
with open(os.path.join(out_dir, "video_prompts.json"), "w", encoding="utf-8") as f:
    json.dump({"videos": video_prompts}, f, ensure_ascii=False, indent=2)

# 6. generation_guide.md
guide_md = """# 画像・動画生成ガイド：新しい天と地

1. **基本方針**
   - Watercolor style illustration, Soft pastel colors のプロンプトを使用してMidjourneyで画像を生成します。
   - 神様が単独で登場するシーン（1-2, 1-3, 4-1, 4-2, 5-1）は、既存の「adam_and_eve」のアセットを流用するため生成不要です。
2. **動画生成**
   - `video_prompts.json` に記載されたシーンの画像をRunway Gen-3等の動画生成ツールに入力し、短いアニメーションを作成します。
3. **配置**
   - 出力された画像・動画は `./assets/new_heaven_and_earth/images/` および `./assets/new_heaven_and_earth/videos/` フォルダに配置します。
"""
with open(os.path.join(out_dir, "generation_guide.md"), "w", encoding="utf-8") as f:
    f.write(guide_md)

# 7. app_data.js
app_data = """{
    id: "new_heaven_and_earth",
    title: "あたらしい てんと ち",
    cover: "./assets/new_heaven_and_earth/images/シーン0−1.jpeg",
    scenes: [
        { id: "0-1", is_video: false, text: "あたらしい てんと ち", imagePath: "./assets/new_heaven_and_earth/images/シーン0−1.jpeg", placeholderImage: "..." },
        { id: "1-1", is_video: false, text: "わたしたちの すんでいる せかいには、<br>ときどき かなしいことや いたいことがあります。", imagePath: "./assets/new_heaven_and_earth/images/シーン1−1.jpeg", placeholderImage: "..." },
        { id: "1-2", is_video: false, text: "でも、かみさまは とっても すてきな<br>おやくそくを してくれました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
        { id: "1-3", is_video: false, text: "「いつか、すべてを あたらしく するよ」<br>かみさまは そう おっしゃいました。", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "..." },
        { id: "1-4", is_video: true, text: "それは どんな せかい なんでしょう？", imagePath: "./assets/new_heaven_and_earth/videos/シーン1−4.mp4", placeholderImage: "..." },
        { id: "2-1", is_video: true, text: "あるひ、おそらから イエスさまが<br>もどって こられます。", imagePath: "./assets/new_heaven_and_earth/videos/シーン2−1.mp4", placeholderImage: "..." },
        { id: "2-2", is_video: false, text: "イエスさまは ピカピカ ひかる<br>きれいないろに つつまれています。", imagePath: "./assets/new_heaven_and_earth/images/シーン2−2.jpeg", placeholderImage: "..." },
        { id: "2-3", is_video: true, text: "「みんな、おまたせ！」<br>イエスさまは やさしく わらいます。", imagePath: "./assets/new_heaven_and_earth/videos/シーン2−3.mp4", placeholderImage: "..." },
        { id: "2-4", is_video: true, text: "どうぶつたちも こどもたちも、<br>みんな イエスさまの ところへ あつまります。", imagePath: "./assets/new_heaven_and_earth/videos/シーン2−4.mp4", placeholderImage: "..." },
        { id: "3-1", is_video: true, text: "そして、かみさまが つくった<br>「あたらしい せかい」が はじまります。", imagePath: "./assets/new_heaven_and_earth/videos/シーン3−1.mp4", placeholderImage: "..." },
        { id: "3-2", is_video: false, text: "きらきら ひかる きれいな おみずや、<br>おいしい くだものが たくさん あります。", imagePath: "./assets/new_heaven_and_earth/images/シーン3−2.jpeg", placeholderImage: "..." },
        { id: "3-3", is_video: true, text: "くらい よるは もう ありません。<br>かみさまの ひかりが ずっと てらしているからです。", imagePath: "./assets/new_heaven_and_earth/videos/シーン3−3.mp4", placeholderImage: "..." },
        { id: "3-4", is_video: false, text: "らいおんさんと ひつじさんが、<br>いっしょに なかよく おひるね しています。", imagePath: "./assets/new_heaven_and_earth/images/シーン3−4.jpeg", placeholderImage: "..." },
        { id: "3-5", is_video: true, text: "おおかみさんも うさぎさんも、<br>みんな ずっと おともだち です。", imagePath: "./assets/new_heaven_and_earth/videos/シーン3−5.mp4", placeholderImage: "..." },
        { id: "4-1", is_video: false, text: "かみさまは やさしく<br>なみだを ふいてくださいます。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
        { id: "4-2", is_video: false, text: "「もう なくことは ないんだよ」<br>かみさまは やさしく おっしゃいます。", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "..." },
        { id: "4-3", is_video: true, text: "いたいことも、かなしいことも、<br>びょうきも ぜんぶ なくなります。", imagePath: "./assets/new_heaven_and_earth/videos/シーン4−3.mp4", placeholderImage: "..." },
        { id: "4-4", is_video: false, text: "みんなの おかおは、<br>にこにこ えがおで いっぱいです。", imagePath: "./assets/new_heaven_and_earth/images/シーン4−4.jpeg", placeholderImage: "..." },
        { id: "5-1", is_video: false, text: "かみさまは、わたしたちと いっしょに<br>すんでくださいます。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
        { id: "5-2", is_video: true, text: "わたしたちは かみさまの こどもとして、<br>ずっと ずっと なかよく くらします。", imagePath: "./assets/new_heaven_and_earth/videos/シーン5−2.mp4", placeholderImage: "..." },
        { id: "5-3", is_video: true, text: "おててを つないで、<br>うたを うたって あそびます。", imagePath: "./assets/new_heaven_and_earth/videos/シーン5−3.mp4", placeholderImage: "..." },
        { id: "5-4", is_video: true, text: "ほんとうに とっても すてきな<br>あたらしい せかい です。", imagePath: "./assets/new_heaven_and_earth/videos/シーン5−4.mp4", placeholderImage: "..." },
        { id: "6-1", is_video: false, text: "かみさま、すてきな おやくそくを<br>ありがとうございます。", imagePath: "./assets/new_heaven_and_earth/images/シーン6−1.jpeg", placeholderImage: "..." },
        { id: "6-2", is_video: true, text: "イエスさまが きてくれる ひを、<br>みんなで たのしみに まっています。", imagePath: "./assets/new_heaven_and_earth/videos/シーン6−2.mp4", placeholderImage: "..." },
        { id: "6-3", is_video: true, text: "アーメン。", imagePath: "./assets/new_heaven_and_earth/videos/シーン6−3.mp4", placeholderImage: "..." }
    ]
}
"""
with open(os.path.join(out_dir, "app_data.js"), "w", encoding="utf-8") as f:
    f.write(app_data)

print("All files created successfully.")
