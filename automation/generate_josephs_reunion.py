import os
import json

output_dir = "/Users/goya/Documents/Antigravity/聖書絵本制作/automation/output/josephs_reunion"
os.makedirs(output_dir, exist_ok=True)

# 1. script.json
script_data = {
  "id": "josephs_reunion",
  "title": "ヨセフと きょうだいたちの さいかい",
  "sections": [
    {
      "id": "0",
      "scenes": [
        {"id": "0-1", "text": "ヨセフと きょうだいたち"}
      ]
    },
    {
      "id": "1",
      "title": "はらぺこの きょうだいたち",
      "scenes": [
        {"id": "1-1", "text": "むかしむかし、せかいじゅうで たべものが なくなって しまいました。"},
        {"id": "1-2", "text": "ヨセフの おにいさんたちも、おなかが ぺこぺこです。"},
        {"id": "1-3", "text": "「エジプトという くにには、パンが あるらしいぞ。」"},
        {"id": "1-4", "text": "おにいさんたちは、エジプトへ しゅっぱつ しました。"}
      ]
    },
    {
      "id": "2",
      "title": "エジプトの えらいひと",
      "scenes": [
        {"id": "2-1", "text": "エジプトには、とっても えらい ひとが いました。"},
        {"id": "2-2", "text": "それは、むかし わかれわかれに なった、おとうと の ヨセフ でした。"},
        {"id": "2-3", "text": "おにいさんたちは、ヨセフの まえで おじぎを しました。"},
        {"id": "2-4", "text": "でも、えらいひとが ヨセフだとは、ぜんぜん きづきません。"}
      ]
    },
    {
      "id": "3",
      "title": "ヨセフの テスト",
      "scenes": [
        {"id": "3-1", "text": "ヨセフは、おにいさんたちが やさしく なったか、テストを することに しました。"},
        {"id": "3-2", "text": "いちばん したの おとうと、ベニヤミンを つかまえようと しました。"},
        {"id": "3-3", "text": "「このこは おいていきなさい。」と ヨセフは いいました。"}
      ]
    },
    {
      "id": "4",
      "title": "かわる おにいさんたち",
      "scenes": [
        {"id": "4-1", "text": "すると、おにいさんの ユダが まえに でました。"},
        {"id": "4-2", "text": "「おねがいです。このこは わたしが まもります！」"},
        {"id": "4-3", "text": "「どうか ゆるして ください。」と いっしょうけんめい おねがい しました。"},
        {"id": "4-4", "text": "おにいさんたちは、もう むかしの いじわるな ひとでは ありません。"}
      ]
    },
    {
      "id": "5",
      "title": "ぼくは ヨセフです",
      "scenes": [
        {"id": "5-1", "text": "ヨセフは なみだが とまらなく なりました。"},
        {"id": "5-2", "text": "「みんな、ぼくです。おとうとの ヨセフです！」"},
        {"id": "5-3", "text": "おにいさんたちは びっくりして、なきだしました。"},
        {"id": "5-4", "text": "「ごめんね、ヨセフ。」「もう だいじょうぶだよ。」"},
        {"id": "5-5", "text": "みんなで ぎゅっと だきしめ あいました。"}
      ]
    },
    {
      "id": "6",
      "title": "かみさまの おやくそく",
      "scenes": [
        {"id": "6-1", "text": "かみさまは、ずっと ヨセフたちを みまもって いました。"},
        {"id": "6-2", "text": "かなしい ことも、かみさまが えがおに してくれました。"},
        {"id": "6-3", "text": "かぞく みんなで、エジプトで くらす ことに なりました。"},
        {"id": "6-4", "text": "みんな いっしょで、とっても しあわせ です。"}
      ]
    }
  ]
}
with open(os.path.join(output_dir, "script.json"), "w", encoding="utf-8") as f:
    json.dump(script_data, f, ensure_ascii=False, indent=2)

# 2. characters.json
characters_data = {
  "characters": [
    {
      "id": "joseph_adult",
      "name": "ヨセフ（大人）",
      "description": "エジプトの偉い人。豪華だがシンプルな装飾の服を着ている。",
      "features": ["simple character", "innocent facial expression", "large expressive eyes", "wearing elegant but simple ancient Egyptian style earthy clothing"]
    },
    {
      "id": "brothers",
      "name": "お兄さんたち（代表してユダなど数人）",
      "description": "ヨセフの兄たち。素朴で少し疲れた旅の服。",
      "features": ["simple characters", "innocent facial expressions", "large expressive eyes", "wearing simple ancient middle eastern earth-tone travel clothing", "some with simple beards"]
    },
    {
      "id": "benjamin",
      "name": "ベニヤミン",
      "description": "一番下の弟。小柄で可愛らしい。",
      "features": ["simple character", "innocent facial expression", "large expressive eyes", "wearing simple earth-tone clothing", "chibi-like proportions", "cute boy"]
    }
  ],
  "note": "神様は新規に生成せず、既存のアセット（adam_and_eve）から流用します。"
}
with open(os.path.join(output_dir, "characters.json"), "w", encoding="utf-8") as f:
    json.dump(characters_data, f, ensure_ascii=False, indent=2)

# 3. character_prompts.md
character_prompts = """# Character Prompts for Joseph's Reunion

**Style Guidelines:** Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere, warm and cozy.

## Joseph (Adult)
A simple character of a young adult man, innocent facial expression, large and expressive eyes, wearing elegant but simple ancient Egyptian style earthy clothing. Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere, warm and cozy.

## Brothers (Group)
A group of simple characters of adult men, innocent facial expressions, large and expressive eyes, wearing simple ancient middle eastern earth-tone travel clothing, some with simple soft beards. Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere, warm and cozy.

## Benjamin (Youngest Brother)
A simple character of a young boy, innocent facial expression, large and expressive eyes, wearing simple earth-tone clothing, chibi-like proportions, cute and small. Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere, warm and cozy.
"""
with open(os.path.join(output_dir, "character_prompts.md"), "w", encoding="utf-8") as f:
    f.write(character_prompts)

# 4. scene_prompts.json & 5. video_prompts.json
video_ids = ["1-2", "1-4", "2-2", "2-3", "3-2", "4-1", "4-2", "5-1", "5-3", "5-5", "6-3", "6-4"]
god_scenes = ["6-1", "6-2"]

scene_prompts = []
video_prompts = []

base_style = "Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere, warm and cozy. Simple characters with innocent facial expressions, large and expressive eyes."

prompts_mapping = {
  "0-1": "Cover image. Joseph in elegant simple clothes and his brothers in travel clothes standing together, smiling. " + base_style,
  "1-1": "A barren land with dry fields, empty baskets. No characters. " + base_style,
  "1-2": "The brothers looking hungry and tired, rubbing their bellies. " + base_style + " --video: They look sad and exhausted.",
  "1-3": "The brothers pointing excitedly towards a distant bright city (Egypt). " + base_style,
  "1-4": "The brothers walking together carrying empty sacks towards the horizon. " + base_style + " --video: They are walking forward together.",
  "2-1": "A beautiful ancient Egyptian palace room with warm sunlight. " + base_style,
  "2-2": "Joseph sitting on a high chair looking important. " + base_style + " --video: Joseph looking down gently.",
  "2-3": "The brothers bowing down deeply in front of Joseph. " + base_style + " --video: The brothers are bowing.",
  "2-4": "Close up of the brothers' faces, looking respectful but confused. " + base_style,
  "3-1": "Joseph looking thoughtfully at his brothers. " + base_style,
  "3-2": "Egyptian guards gently holding the young boy Benjamin. " + base_style + " --video: Guards gently holding Benjamin.",
  "3-3": "Joseph pointing his finger gently, testing them. " + base_style,
  "4-1": "One brother, Judah, stepping forward bravely. " + base_style + " --video: Judah taking a step forward.",
  "4-2": "Judah standing protectively in front of little Benjamin. " + base_style + " --video: Judah extending his arms to protect Benjamin.",
  "4-3": "Judah kneeling and pleading earnestly. " + base_style,
  "4-4": "The other brothers looking worried and caring for Benjamin. " + base_style,
  "5-1": "Joseph with tears in his large eyes, looking deeply moved. " + base_style + " --video: Tears falling from Joseph's eyes.",
  "5-2": "Joseph spreading his arms wide, revealing who he is. " + base_style,
  "5-3": "The brothers with wide eyes, completely surprised and crying. " + base_style + " --video: Brothers opening their eyes wide in shock.",
  "5-4": "Joseph and brothers looking at each other softly. " + base_style,
  "5-5": "Joseph and all his brothers hugging together warmly. " + base_style + " --video: Everyone hugging and swaying slightly.",
  "6-3": "The whole family walking happily together in Egypt with their belongings. " + base_style + " --video: Happy family walking.",
  "6-4": "Joseph, his brothers, and Benjamin smiling happily under a warm sun. " + base_style + " --video: Everyone smiling and laughing softly."
}

for section in script_data["sections"]:
    for scene in section["scenes"]:
        sid = scene["id"]
        if sid in god_scenes:
            continue
        
        is_vid = sid in video_ids
        prompt_obj = {
            "scene_id": sid,
            "is_video": is_vid,
            "prompt": prompts_mapping[sid].split(" --video: ")[0],
            "video_prompt": prompts_mapping[sid].split(" --video: ")[1] if is_vid and " --video: " in prompts_mapping[sid] else ""
        }
        scene_prompts.append(prompt_obj)
        if is_vid:
            video_prompts.append(prompt_obj)

with open(os.path.join(output_dir, "scene_prompts.json"), "w", encoding="utf-8") as f:
    json.dump(scene_prompts, f, ensure_ascii=False, indent=2)

with open(os.path.join(output_dir, "video_prompts.json"), "w", encoding="utf-8") as f:
    json.dump(video_prompts, f, ensure_ascii=False, indent=2)

# 6. generation_guide.md
guide_content = """# 画像・動画生成ガイド：ヨセフと兄弟の再会

## 1. 静止画の生成 (Midjourney)
1. `character_prompts.md` を参考に、登場人物のスタイルを固定します。
2. `scene_prompts.json` の `prompt` を使用して各シーンの画像を生成します。
3. **神様シーン（6-1, 6-2）は生成不要**です。既存のアセット（`./assets/adam_and_eve/images/シーン1−2.jpeg` 等）を流用します。

## 2. 動画の生成 (Runway / Luma etc.)
1. `video_prompts.json` にリストされたシーン（is_video: true）の静止画をベースにします。
2. `video_prompt` の指示に従って、微細なアニメーションを追加します。

## 3. ファイルの配置
- 生成した画像: `/assets/josephs_reunion/images/シーン{id}.jpeg`
- 生成した動画: `/assets/josephs_reunion/videos/シーン{id}.mp4`
"""
with open(os.path.join(output_dir, "generation_guide.md"), "w", encoding="utf-8") as f:
    f.write(guide_content)

# 7. app_data.js
app_data = {
    "id": "josephs_reunion",
    "title": "ヨセフと きょうだいたちの さいかい",
    "cover": "./assets/josephs_reunion/images/シーン0−1.jpeg",
    "scenes": []
}

for section in script_data["sections"]:
    for scene in section["scenes"]:
        sid = scene["id"]
        is_vid = sid in video_ids
        
        if sid in god_scenes:
            img_path = "./assets/adam_and_eve/images/シーン1−2.jpeg" # 神様の流用
            vid_path = None
        else:
            img_path = f"./assets/josephs_reunion/images/シーン{sid.replace('-', '−')}.jpeg"
            vid_path = f"./assets/josephs_reunion/videos/シーン{sid.replace('-', '−')}.mp4" if is_vid else None

        scene_obj = {
            "id": sid,
            "text": scene["text"],
            "imagePath": img_path,
            "placeholderImage": "..."
        }
        if vid_path:
            scene_obj["videoPath"] = vid_path
            
        app_data["scenes"].append(scene_obj)

js_content = "const josephsReunionData = " + json.dumps(app_data, ensure_ascii=False, indent=4) + ";\n"

with open(os.path.join(output_dir, "app_data.js"), "w", encoding="utf-8") as f:
    f.write(js_content)

print("すべてのファイルの生成が完了しました。")
