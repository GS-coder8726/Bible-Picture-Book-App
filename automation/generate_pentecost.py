import os
import json

base_dir = "/Users/goya/Documents/Antigravity/聖書絵本制作/automation/output/pentecost"
os.makedirs(base_dir, exist_ok=True)

# Data definition
theme_id = "pentecost"
title = "ペンテコステの ひ"

scenes_data = [
    {"id": "0-1", "text": "ペンテコステの ひ", "video": False, "prompt": "Cover illustration of pentecost, Holy Spirit descending as small warm glowing fire over happy diverse people, joyful atmosphere"},
    {"id": "1-1", "text": "イエスさまが おそらに のぼっていくよ。", "video": True, "prompt": "Jesus ascending to a beautiful warm sky with glowing light, soft clouds"},
    {"id": "1-2", "text": "「わたしは いつも いっしょに いるよ。」", "video": False, "prompt": "Jesus looking down with a gentle smile, glowing warm light, soft clouds"},
    {"id": "1-3", "text": "「かみさまの ちからを おくるから、まっていてね。」", "video": True, "prompt": "Jesus pointing to the sky, warm glowing light particles falling down"},
    {"id": "1-4", "text": "おでしたちは、そらを みあげて おみおくりをしたよ。", "video": False, "prompt": "Simple disciples looking up at the sky in awe, soft warm light from above"},
    
    {"id": "2-1", "text": "おでしたちは おへやに あつまったよ。", "video": False, "prompt": "Simple disciples gathered inside a simple cozy stone room, warm natural light from window"},
    {"id": "2-2", "text": "みんなで おいのりをして まっていたんだ。", "video": True, "prompt": "Simple disciples sitting in a circle praying, eyes closed, peaceful atmosphere, warm glowing light"},
    {"id": "2-3", "text": "「かみさま、イエスさまの おやくそくは いつかな？」", "video": False, "god_scene": "./assets/adam_and_eve/images/シーン1−2.jpeg"},
    {"id": "2-4", "text": "みんな なかよく、おいのり していたよ。", "video": False, "prompt": "Simple disciples holding hands and smiling, warm cozy lighting in a room"},
    
    {"id": "3-1", "text": "あるひ、とつぜん つよい かぜが ふいてきた！", "video": True, "prompt": "Strong wind blowing through an open window in a stone room, soft glowing dust particles swirling"},
    {"id": "3-2", "text": "ビューッ！ おへやの なかに かぜの おとが ひびくよ。", "video": False, "prompt": "Wind swirling inside the room, disciples looking surprised but not scared, warm dynamic lighting"},
    {"id": "3-3", "text": "すると、ちいさな ほのおが みえてきたよ。", "video": True, "prompt": "Small warm glowing fire-like lights appearing in the air, soft sparkles, dreamlike atmosphere"},
    {"id": "3-4", "text": "ほのおは、みんなの あたまの うえに おりてきたんだ。", "video": False, "prompt": "Small soft glowing fire shapes hovering above the heads of the disciples, warm cozy glow, beautiful lighting"},
    {"id": "3-5", "text": "でも、あつくないよ。<br>これは「せいれい」という かみさまの ちからだよ。", "video": False, "god_scene": "./assets/adam_and_eve/images/シーン5−1.jpeg"},
    
    {"id": "4-1", "text": "みんなの こころが ぽかぽか あたたかくなったよ。", "video": True, "prompt": "Disciples smiling warmly, glowing light radiating from their chests, soft sparkles around them"},
    {"id": "4-2", "text": "こわがりだった おでしたちも、ゆうきが わいてきたんだ。", "video": False, "prompt": "Disciples standing up looking brave and happy, warm bright lighting"},
    {"id": "4-3", "text": "「かみさま、ありがとう！」", "video": True, "prompt": "Disciples raising their hands in joy and thanksgiving, warm glowing light from above"},
    {"id": "4-4", "text": "みんな、とっても うれしそう！", "video": False, "prompt": "Group of disciples hugging and laughing together, warm bright colors"},
    
    {"id": "5-1", "text": "おでしたちは、おそとに でて おはなしを はじめたよ。", "video": True, "prompt": "Disciples walking out into a sunny village street, talking happily to people"},
    {"id": "5-2", "text": "あれ？ いろんな くにの ことばで おはなし しているよ！", "video": False, "prompt": "Disciples talking to people with different clothes, floating colorful speech bubbles or glowing music notes to represent words"},
    {"id": "5-3", "text": "まちの ひとたちは、びっくり！", "video": True, "prompt": "People in the village looking surprised and amazed, wide eyes, warm sunny lighting"},
    {"id": "5-4", "text": "「ぼくたちの くにの ことばで おはなし している！」", "video": False, "prompt": "Happy village people listening to a disciple, joyful atmosphere, soft pastel colors"},
    {"id": "5-5", "text": "かみさまの ちからって、すごいね！", "video": False, "prompt": "A diverse group of happy people smiling and chatting, glowing warm sparkles in the air"},
    
    {"id": "6-1", "text": "ペテロさんが、みんなに イエスさまの ことを おはなししたよ。", "video": True, "prompt": "Peter standing on a small step, speaking happily to a large crowd, warm sunny daylight"},
    {"id": "6-2", "text": "「イエスさまは、みんなの ことを あいしているよ！」", "video": False, "prompt": "Peter pointing to his heart with a gentle smile, crowd listening attentively"},
    {"id": "6-3", "text": "たくさんの ひとが、かみさまを だいすきに なったよ。", "video": True, "prompt": "Many people of all ages smiling and holding hands, glowing warm light covering them"},
    {"id": "6-4", "text": "こうして、はじめの きょうかいが できたんだ。<br>みんな えがおだね！", "video": False, "prompt": "A beautiful happy community gathered together, soft warm glowing light, dreamlike and cozy atmosphere"}
]

common_prompt_suffix = "Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere, warm and cozy, simple characters with innocent facial expressions, large and expressive eyes, soft rounded features, chibi-like proportions for children --ar 16:9"

# Generate 1. script.json
script_data = {
    "id": theme_id,
    "title": title,
    "sections": []
}

current_section = []
for i in range(1, 7):
    section_scenes = [s for s in scenes_data if s["id"].startswith(f"{i}-")]
    script_data["sections"].append({
        "sectionId": i,
        "scenes": [{"id": s["id"], "text": s["text"]} for s in section_scenes]
    })

with open(f"{base_dir}/script.json", "w", encoding="utf-8") as f:
    json.dump(script_data, f, ensure_ascii=False, indent=2)

# Generate 2. characters.json
characters_data = {
    "characters": [
        {"name": "イエスさま", "description": "Gentle, glowing warm light, soft robes."},
        {"name": "おでしたち", "description": "Simple characters, earth-tone clothes, expressive eyes."},
        {"name": "ペテロさん", "description": "One of the disciples, speaking bravely."},
        {"name": "まちのひとたち", "description": "Diverse simple people with colorful pastel clothes."}
    ],
    "notes": "神様が登場するシーン(2-3, 3-5)は既存画像(adam_and_eveのアセット)を流用するためキャラクターとしては定義しません。"
}
with open(f"{base_dir}/characters.json", "w", encoding="utf-8") as f:
    json.dump(characters_data, f, ensure_ascii=False, indent=2)

# Generate 3. character_prompts.md
character_prompts = f"""# {title} キャラクタープロンプト

## イエスさま (Jesus)
Jesus with a gentle smile, glowing warm light, soft pastel robes, Watercolor style illustration, soft pastel colors, hand-drawn texture, soft edges, warm and gentle lighting, dreamlike atmosphere

## おでしたち (Disciples)
Simple disciples with innocent facial expressions, large and expressive eyes, wearing simple natural earth-tone clothing, soft rounded features, chibi-like proportions, Watercolor style illustration, soft pastel colors, hand-drawn texture

## まちのひとたち (Townspeople)
Diverse village people, innocent facial expressions, large expressive eyes, simple colorful pastel clothing, Watercolor style illustration, soft pastel colors, hand-drawn texture
"""
with open(f"{base_dir}/character_prompts.md", "w", encoding="utf-8") as f:
    f.write(character_prompts)

# Generate 4. scene_prompts.json and 5. video_prompts.json
scene_prompts = []
video_prompts = []
for s in scenes_data:
    if "god_scene" in s:
        continue
    full_prompt = f"{s['prompt']}, {common_prompt_suffix}"
    scene_item = {"id": s["id"], "prompt": full_prompt}
    scene_prompts.append(scene_item)
    if s["video"]:
        video_prompts.append(scene_item)

with open(f"{base_dir}/scene_prompts.json", "w", encoding="utf-8") as f:
    json.dump(scene_prompts, f, ensure_ascii=False, indent=2)

with open(f"{base_dir}/video_prompts.json", "w", encoding="utf-8") as f:
    json.dump(video_prompts, f, ensure_ascii=False, indent=2)

# Generate 6. generation_guide.md
generation_guide = f"""# {title} 画像・動画生成ガイド

## 1. 静止画の生成 (Midjourney)
`scene_prompts.json` のプロンプトを使用して画像を生成します。
神様が登場するシーン（2-3, 3-5）については生成不要です。

## 2. 動画の生成 (Luma Dream Machine or Runway Gen-3)
`video_prompts.json` に記載されたシーンの画像を元に動画を生成します。
テキストプロンプトには画像生成時のプロンプトと同じものを入力し、動きの指示（例: "wind blowing", "glowing light"）を強調してください。

## 3. ファイルの配置
- 画像: `assets/{theme_id}/images/`
- 動画: `assets/{theme_id}/videos/`
ファイル名は `シーン1−1.jpeg` または `シーン1−1.mp4` のように命名してください。
"""
with open(f"{base_dir}/generation_guide.md", "w", encoding="utf-8") as f:
    f.write(generation_guide)

# Generate 7. app_data.js
app_data_lines = [
    "{",
    f'    id: "{theme_id}",',
    f'    title: "{title}",',
    f'    cover: "./assets/{theme_id}/images/シーン0−1.jpeg",',
    "    scenes: ["
]
for i, s in enumerate(scenes_data):
    if "god_scene" in s:
        image_path = s["god_scene"]
        is_video = "false"
    else:
        image_path = f"./assets/{theme_id}/images/シーン{s['id'].replace('-', '−')}.jpeg"
        is_video = "true" if s["video"] else "false"
    
    video_path_str = f', videoPath: "./assets/{theme_id}/videos/シーン{s["id"].replace("-", "−")}.mp4"' if s["video"] else ""
    
    line = f'        {{ id: "{s["id"]}", text: "{s["text"]}", is_video: {is_video}, imagePath: "{image_path}"{video_path_str}, placeholderImage: "..." }}'
    if i < len(scenes_data) - 1:
        line += ","
    app_data_lines.append(line)

app_data_lines.append("    ]")
app_data_lines.append("}")

with open(f"{base_dir}/app_data.js", "w", encoding="utf-8") as f:
    f.write("\n".join(app_data_lines))

print("All files generated successfully.")
