const { GoogleGenerativeAI, Type } = require('@google/generative-ai');
require('dotenv').config();

/**
 * 聖書のテーマから snake_case の ID を生成するヘルパー関数
 */
function getThemeId(theme) {
  const themeMap = {
    "ノアの箱舟": "noahs_ark",
    "ノア": "noahs_ark",
    "アダムとエバ": "adam_and_eve",
    "天地創造": "creation"
  };
  if (themeMap[theme]) return themeMap[theme];
  let id = theme
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[-\s]+/g, '_');
  return id || "bible_story";
}

/**
 * APIキーが存在しない場合のフォールバック（モック）ストーリーデータを生成する
 */
function generateMockStory(theme) {
  const id = getThemeId(theme);
  const title = theme || "聖書の絵本";

  const scenes = [];

  // Scene 0: カバー (Cover) - 常に1パートのみ
  scenes.push({
    scene_number: 0,
    title: "カバー",
    parts: [
      {
        part_number: 1,
        text: `神様がつくられた素晴らしい世界：${title}`,
        image_prompt: "A beautiful watercolor style illustration of the bible cover, soft pastel colors, hand-drawn texture, warm gentle lighting, glowing sparkles.",
        video_prompt: "A beautiful watercolor style video of the bible cover, soft pastel colors, warm gentle lighting, glowing sparkles. Natural motion: light rays slowly shifting.",
        is_video_recommend: false
      }
    ]
  });

  const partCounts = [3, 4, 3, 5, 3, 4, 3]; // シーン1〜7のパート数（合計25パーツ + カバー1 = 26パーツ）
  const tooMany = theme.includes("too_many_videos");
  const tooFew = theme.includes("too_few_videos");

  let recIdx = 0;
  for (let s = 1; s <= 7; s++) {
    const partsCount = partCounts[s - 1];
    const parts = [];
    for (let p = 1; p <= partsCount; p++) {
      let isRec = (recIdx % 2 === 0); // 通常は交互に true/false (合計13個が推薦される)
      if (tooMany) {
        isRec = true; // テスト用：すべて true (25個推薦) -> 削減ロジックの検証
      } else if (tooFew) {
        isRec = false; // テスト用：すべて false (0個推薦) -> 追加ロジックの検証
      }
      recIdx++;

      parts.push({
        part_number: p,
        text: `シーン ${s} パート ${p} のお話です。神様は温かい光で包んでくださいます。`,
        image_prompt: `A beautiful watercolor style illustration of scene ${s} part ${p}, simple characters with innocent facial expressions and large expressive eyes wearing leaf clothing, soft pastel colors, hand-drawn texture, warm gentle lighting, glowing sparkles, radiant warm light beams.`,
        video_prompt: `A beautiful watercolor style video of scene ${s} part ${p}, simple characters with innocent facial expressions and large expressive eyes wearing leaf clothing, soft pastel colors, warm gentle lighting, glowing sparkles. Natural motion: gentle rustling of leaves, light rays slowly shifting.`,
        is_video_recommend: isRec
      });
    }
    scenes.push({
      scene_number: s,
      title: `シーン ${s} のタイトル`,
      parts
    });
  }

  return { id, title, scenes };
}

/**
 * 取得した生のストーリーデータに対して制約条件をプログラム的に強制・適用し、
 * フラットな構造へと変換する後処理関数
 */
function processAndEnforceConstraints(rawStory) {
  let rawScenes = rawStory.scenes || [];

  // 1. 総シーン数（カバー含む）が 7〜8 であることを保証
  if (rawScenes.length < 7) {
    // 7未満の場合はモックなどで最低限のシーンを補完
    const lastScene = rawScenes[rawScenes.length - 1] || { scene_number: 0, title: "シーン", parts: [] };
    while (rawScenes.length < 7) {
      const nextNum = rawScenes.length;
      rawScenes.push({
        scene_number: nextNum,
        title: `シーン ${nextNum} のタイトル`,
        parts: [
          {
            part_number: 1,
            text: `シーン ${nextNum} のお話です。`,
            image_prompt: "Watercolor style illustration, soft pastel colors, warm gentle lighting, glowing sparkles.",
            video_prompt: "Watercolor style video, soft pastel colors, warm gentle lighting, glowing sparkles. Natural motion: light rays slowly shifting.",
            is_video_recommend: false
          },
          {
            part_number: 2,
            text: `シーン ${nextNum} のお話の続きです。`,
            image_prompt: "Watercolor style illustration, soft pastel colors, warm gentle lighting, glowing sparkles.",
            video_prompt: "Watercolor style video, soft pastel colors, warm gentle lighting, glowing sparkles. Natural motion: light rays slowly shifting.",
            is_video_recommend: false
          },
          {
            part_number: 3,
            text: `シーン ${nextNum} のお話の終わりです。`,
            image_prompt: "Watercolor style illustration, soft pastel colors, warm gentle lighting, glowing sparkles.",
            video_prompt: "Watercolor style video, soft pastel colors, warm gentle lighting, glowing sparkles. Natural motion: light rays slowly shifting.",
            is_video_recommend: false
          }
        ]
      });
    }
  } else if (rawScenes.length > 8) {
    rawScenes = rawScenes.slice(0, 8);
  }

  // 2. カバーシーン (Scene 0) のパート数がちょうど1、静止画であることを保証
  const coverScene = rawScenes.find(s => s.scene_number === 0);
  if (coverScene) {
    if (!coverScene.parts || coverScene.parts.length === 0) {
      coverScene.parts = [{
        part_number: 1,
        text: rawStory.title || "カバー",
        image_prompt: "A beautiful watercolor style illustration of the bible cover, soft pastel colors, hand-drawn texture, warm gentle lighting, glowing sparkles.",
        video_prompt: "A beautiful watercolor style video of the bible cover, soft pastel colors, warm gentle lighting, glowing sparkles. Natural motion: light rays slowly shifting.",
        is_video_recommend: false
      }];
    } else {
      coverScene.parts = [coverScene.parts[0]];
    }
  }

  // 3. 各コンテンツシーン（Scene 0除く）のパート数が 3〜5 であることを保証
  for (const scene of rawScenes) {
    if (scene.scene_number === 0) continue;
    if (!scene.parts || scene.parts.length === 0) {
      scene.parts = [];
      for (let p = 1; p <= 3; p++) {
        scene.parts.push({
          part_number: p,
          text: `シーン ${scene.scene_number} パート ${p} のストーリー。`,
          image_prompt: "Watercolor style illustration, soft pastel colors, warm gentle lighting, glowing sparkles.",
          video_prompt: "Watercolor style video, soft pastel colors, warm gentle lighting, glowing sparkles. Natural motion: light rays slowly shifting.",
          is_video_recommend: false
        });
      }
    } else if (scene.parts.length < 3) {
      const lastPart = scene.parts[scene.parts.length - 1];
      while (scene.parts.length < 3) {
        const nextPartNum = scene.parts.length + 1;
        scene.parts.push({
          ...lastPart,
          part_number: nextPartNum
        });
      }
    } else if (scene.parts.length > 5) {
      scene.parts = scene.parts.slice(0, 5);
    }
  }

  // 4. ネストされた構造をフラット化し、IDを "${scene_number}-${part_number}" にマッピング
  const flatScenes = [];
  for (const scene of rawScenes) {
    const sceneNum = scene.scene_number;
    for (const part of scene.parts) {
      const partNum = part.part_number;
      flatScenes.push({
        id: `${sceneNum}-${partNum}`,
        text: part.text,
        image_prompt: part.image_prompt,
        video_prompt: part.video_prompt,
        is_video: part.is_video_recommend // 初期マッピング
      });
    }
  }

  // 5. 全体における動画化比率を 45% 〜 50% に強制補正
  const totalParts = flatScenes.length;
  const V_min = Math.ceil(totalParts * 0.45);
  const V_max = Math.floor(totalParts * 0.50);

  // カバーシーン (0-1) は必ず静止画
  const coverPart = flatScenes.find(p => p.id === "0-1");
  if (coverPart) {
    coverPart.is_video = false;
    coverPart.video_prompt = null;
  }

  const nonCoverParts = flatScenes.filter(p => p.id !== "0-1");
  let videoCount = nonCoverParts.filter(p => p.is_video).length;

  if (videoCount < V_min) {
    // 動画化数が不足している場合、静止画パートを動画化に変更（順序通りに変更）
    const candidates = nonCoverParts.filter(p => !p.is_video);
    const needed = V_min - videoCount;
    for (let i = 0; i < needed && i < candidates.length; i++) {
      candidates[i].is_video = true;
    }
  } else if (videoCount > V_max) {
    // 動画化数が超過している場合、動画パートを静止画に変更（順序通りに変更）
    const candidates = nonCoverParts.filter(p => p.is_video);
    const excess = videoCount - V_max;
    for (let i = 0; i < excess && i < candidates.length; i++) {
      candidates[i].is_video = false;
    }
  }

  // 最終処理：静止画（is_video === false）のパートは video_prompt = null に設定
  for (const part of flatScenes) {
    if (!part.is_video) {
      part.video_prompt = null;
    }
  }

  return {
    id: rawStory.id || getThemeId(rawStory.title || theme),
    title: rawStory.title || theme,
    scenes: flatScenes
  };
}

/**
 * 指定されたテーマの絵本ストーリーを生成するメイン関数
 * @param {string} theme 絵本のテーマ
 * @returns {Promise<object>} フラット化・制約適用済みの絵本ストーリーデータ
 */
async function generateStory(theme) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set. Using fallback mock story generator.");
    const mockData = generateMockStory(theme);
    return processAndEnforceConstraints(mockData);
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING, description: "Theme ID in snake_case (e.g., noahs_ark)" },
            title: { type: Type.STRING, description: "Japanese title of the book" },
            scenes: {
              type: Type.ARRAY,
              description: "List of scenes",
              items: {
                type: Type.OBJECT,
                properties: {
                  scene_number: { type: Type.INTEGER, description: "Scene index starting from 0 (Cover)" },
                  title: { type: Type.STRING, description: "Scene title" },
                  parts: {
                    type: Type.ARRAY,
                    description: "List of parts (cuts) within this scene",
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        part_number: { type: Type.INTEGER, description: "Part index starting from 1" },
                        text: { type: Type.STRING, description: "Japanese narration text (suitable for kids, clear phrases)" },
                        image_prompt: { type: Type.STRING, description: "Detailed English prompt for image generation using watercolor style" },
                        video_prompt: { type: Type.STRING, description: "Detailed English prompt for video generation (motion description)" },
                        is_video_recommend: { type: Type.BOOLEAN, description: "LLM recommendation on whether to make this part a video" }
                      },
                      required: ["part_number", "text", "image_prompt", "video_prompt", "is_video_recommend"]
                    }
                  }
                },
                required: ["scene_number", "title", "parts"]
              }
            }
          },
          required: ["id", "title", "scenes"]
        },
        temperature: 0.7,
      },
      systemInstruction: `You are a professional children's picture book author and prompt engineer.
Create a beautiful and touching story about the Bible theme.

Follow these structural requirements:
- Total scenes: Generate exactly 7 to 8 scenes (including Scene 0 as the cover).
- Parts per scene: Each scene must contain 3 to 5 parts (Scene 0 must contain exactly 1 part for the cover).
- Language: The "text" field must be written in gentle, children-friendly Japanese. Use hiragana and simple kanji (e.g. かみさま, ともだち).

For image_prompt and video_prompt, strictly follow these visual style guidelines:
1. **Art Style**: watercolor style illustration, soft pastel colors, soft edges, hand-drawn texture.
2. **Lighting/Mood**: warm and gentle lighting, glowing light particles, soft sparkles, dreamlike atmosphere. (If night scene: deep warm night tones with shining stars).
3. **Representation of God**: God must be described as a presence of warm light, radiant golden light beams, or a large gentle hand. Never describe God's face or direct human figure.
4. **Characters**: simple characters, innocent facial expressions, large and expressive eyes, wearing simple, natural clothing (such as leaves or basic earth-tone fabrics).

*Important Prompt Construction Rule*:
- Every image_prompt must describe the visual and start with: "A beautiful watercolor style illustration of [character/scene description], soft pastel colors, hand-drawn texture, warm gentle lighting, glowing sparkles."
- Every video_prompt must describe natural animation motion. It must start with: "A beautiful watercolor style video of [character/scene description], soft pastel colors, warm gentle lighting, glowing sparkles. Natural motion: [specific movement, e.g., gentle rustling of leaves, light rays slowly shifting, water ripples]."
- You MUST generate both image_prompt and video_prompt for ALL parts, regardless of your is_video_recommend selection.`
    });

    const prompt = `Create a story about "${theme}". Make sure to include all style requirements and constraints.`;
    const result = await model.generateContent(prompt);
    const rawStory = JSON.parse(result.response.text());

    return processAndEnforceConstraints(rawStory);
  } catch (error) {
    console.error("Error generating story from Gemini API, falling back to mock generator:", error);
    const mockData = generateMockStory(theme);
    return processAndEnforceConstraints(mockData);
  }
}

module.exports = {
  getThemeId,
  generateMockStory,
  processAndEnforceConstraints,
  generateStory
};
