const test = require('node:test');
const assert = require('node:assert');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { processAndEnforceConstraints, generateStory } = require('../story');

// 100+の動的極端バリエーションストーリーJSONを生成するヘルパー
function generateFuzzedRawStory(index) {
  const sceneCountChoices = [0, 1, 2, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30];
  const sceneCount = sceneCountChoices[index % sceneCountChoices.length];

  const partCountChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10];
  const partCountMode = index % 5; 
  // 0: すべて0, 1: すべて1, 2: すべて10, 3: ランダム/変動, 4: undefined (partsキー無し)

  const videoFlagMode = Math.floor(index / 5) % 5;
  // 0: すべてtrue, 1: すべてfalse, 2: 交互, 3: ランダム, 4: undefined (is_video_recommendキー無し)

  const missingPropMode = Math.floor(index / 25) % 5;
  // 0: 正常, 1: title/id無し, 2: シーンタイトル無し, 3: パートナレーションテキスト無し, 4: シーン番号無し

  const rawStory = {};

  if (missingPropMode !== 1) {
    rawStory.id = `theme_fuzz_${index}`;
    rawStory.title = `Fuzzed Theme ${index}`;
  }

  const scenes = [];
  for (let s = 0; s < sceneCount; s++) {
    const scene = {};
    if (missingPropMode !== 4) {
      scene.scene_number = s;
    }
    if (missingPropMode !== 2) {
      scene.title = `Scene Title ${s}`;
    }

    let parts;
    if (partCountMode === 4) {
      parts = undefined;
    } else {
      parts = [];
      let pCount = 3;
      if (partCountMode === 0) pCount = 0;
      else if (partCountMode === 1) pCount = 1;
      else if (partCountMode === 2) pCount = 10;
      else if (partCountMode === 3) pCount = (s + index) % 8; // 変動

      for (let p = 0; p < pCount; p++) {
        const part = {
          part_number: p + 1,
          image_prompt: `A beautiful watercolor style illustration of scene ${s} part ${p+1}, soft pastel colors, hand-drawn texture, warm gentle lighting, glowing sparkles.`,
          video_prompt: `A beautiful watercolor style video of scene ${s} part ${p+1}, soft pastel colors, warm gentle lighting, glowing sparkles. Natural motion: light rays slowly shifting.`
        };

        if (missingPropMode !== 3) {
          part.text = `Narration text for scene ${s} part ${p+1}`;
        }

        if (videoFlagMode === 0) {
          part.is_video_recommend = true;
        } else if (videoFlagMode === 1) {
          part.is_video_recommend = false;
        } else if (videoFlagMode === 2) {
          part.is_video_recommend = (p % 2 === 0);
        } else if (videoFlagMode === 3) {
          part.is_video_recommend = Math.random() > 0.5;
        } // 4 は is_video_recommend なし

        parts.push(part);
      }
    }

    scene.parts = parts;
    scenes.push(scene);
  }

  if (index % 12 === 0) {
    rawStory.scenes = undefined; // scenesキー無し
  } else if (index % 12 === 1) {
    rawStory.scenes = "not an array"; // 不正な型
  } else {
    rawStory.scenes = scenes;
  }

  return rawStory;
}

test('Story Generator Adversarial Fuzzing & Exception Safety Challenge', async (t) => {

  await t.test('1. Fuzzing-like Validation with 120 Extreme Variations', async (st) => {
    for (let i = 0; i < 120; i++) {
      await st.test(`Fuzz test case #${i}`, () => {
        const rawStory = generateFuzzedRawStory(i);

        let result;
        try {
          result = processAndEnforceConstraints(rawStory);
        } catch (err) {
          // エラーが発生した場合は、その内容をアサーションエラーとして記録
          assert.fail(`Failed to process fuzzed story #${i}: ${err.message}\nInput: ${JSON.stringify(rawStory)}`);
        }

        // 1. 結果の基本構造検証
        assert.ok(result, "Result must be truthy");
        assert.ok(Array.isArray(result.scenes), "Result scenes must be an array");

        // 2. IDとタイトルの補完検証
        assert.ok(result.id, "Result id must be present");
        assert.ok(result.title, "Result title must be present");

        // 3. 総シーン数が 7〜8 であることの検証
        const sceneNumbers = new Set(
          result.scenes.map(part => part.id.split('-')[0])
        );
        const totalScenes = sceneNumbers.size;
        assert.ok(
          totalScenes >= 7 && totalScenes <= 8, 
          `Total scenes must be 7-8. Got ${totalScenes} (Scenes: ${Array.from(sceneNumbers).join(', ')})`
        );

        // 4. カバーシーン (Scene 0) の検証 (ちょうど1パート、is_video === false、video_prompt === null)
        const coverParts = result.scenes.filter(part => part.id.split('-')[0] === '0');
        assert.strictEqual(
          coverParts.length, 
          1, 
          `Cover Scene (Scene 0) must have exactly 1 part. Got ${coverParts.length}`
        );
        const coverPart = coverParts[0];
        assert.strictEqual(
          coverPart.id, 
          '0-1', 
          `Cover part ID must be "0-1". Got ${coverPart.id}`
        );
        assert.strictEqual(
          coverPart.is_video, 
          false, 
          `Cover part must not be a video. Got: ${coverPart.is_video}`
        );
        assert.strictEqual(
          coverPart.video_prompt, 
          null, 
          `Cover part video_prompt must be null. Got: ${coverPart.video_prompt}`
        );

        // 5. 各コンテンツシーン (Scene 0除く) のパート数が 3〜5 であることの検証
        const scenePartsCount = {};
        result.scenes.forEach(part => {
          const sceneNum = part.id.split('-')[0];
          if (sceneNum !== '0') {
            scenePartsCount[sceneNum] = (scenePartsCount[sceneNum] || 0) + 1;
          }
        });
        for (const [sceneNum, count] of Object.entries(scenePartsCount)) {
          assert.ok(
            count >= 3 && count <= 5, 
            `Scene ${sceneNum} must have 3-5 parts. Got ${count}`
          );
        }

        // 6. 全体における動画化比率が 45% 〜 50% であることの検証
        const totalParts = result.scenes.length;
        const videoParts = result.scenes.filter(part => part.is_video === true).length;
        const ratio = videoParts / totalParts;
        assert.ok(
          ratio >= 0.45 && ratio <= 0.50, 
          `Video ratio must be between 45% and 50%. Got ${Math.round(ratio * 100)}% (${videoParts}/${totalParts})`
        );

        // 7. すべてのパートIDが "${scene_number}-${part_number}" のフォーマットであることの検証
        result.scenes.forEach(part => {
          assert.match(
            part.id, 
            /^\d+-\d+$/, 
            `ID must match pattern "scene_number-part_number". Got: ${part.id}`
          );
        });
      });
    }
  });

  await t.test('2. Exception Safety - API Throws Error', async () => {
    const origEnvKey = process.env.GEMINI_API_KEY;
    process.env.GEMINI_API_KEY = 'mock_key';
    const originalGetGenerativeModel = GoogleGenerativeAI.prototype.getGenerativeModel;

    // APIクライアントが例外を投げるようにモック化
    GoogleGenerativeAI.prototype.getGenerativeModel = function(config) {
      return {
        generateContent: async function(prompt) {
          throw new Error("Simulated Gemini API Connection Timeout");
        }
      };
    };

    try {
      const theme = "アダムとエバ";
      const result = await generateStory(theme);

      assert.ok(result, "Fallback story must be returned");
      assert.strictEqual(result.id, 'adam_and_eve', "Fallback story should have correct theme ID");
      assert.ok(Array.isArray(result.scenes));

      // 制約条件の検証
      const sceneNumbers = new Set(result.scenes.map(p => p.id.split('-')[0]));
      assert.ok(sceneNumbers.size >= 7 && sceneNumbers.size <= 8);

      const coverPart = result.scenes.find(p => p.id === '0-1');
      assert.ok(coverPart);
      assert.strictEqual(coverPart.is_video, false);
      assert.strictEqual(coverPart.video_prompt, null);

      const totalParts = result.scenes.length;
      const videoParts = result.scenes.filter(p => p.is_video === true).length;
      const ratio = videoParts / totalParts;
      assert.ok(ratio >= 0.45 && ratio <= 0.50);
    } finally {
      if (origEnvKey === undefined) {
        delete process.env.GEMINI_API_KEY;
      } else {
        process.env.GEMINI_API_KEY = origEnvKey;
      }
      GoogleGenerativeAI.prototype.getGenerativeModel = originalGetGenerativeModel;
    }
  });

  await t.test('3. Exception Safety - API Returns Corrupted Content', async () => {
    const origEnvKey = process.env.GEMINI_API_KEY;
    process.env.GEMINI_API_KEY = 'mock_key';
    const originalGetGenerativeModel = GoogleGenerativeAI.prototype.getGenerativeModel;

    // APIクライアントが不正なテキスト（JSONではない）を返すようにモック化
    GoogleGenerativeAI.prototype.getGenerativeModel = function(config) {
      return {
        generateContent: async function(prompt) {
          return {
            response: {
              text: () => "<html><body>Internal Server Error</body></html>"
            }
          };
        }
      };
    };

    try {
      const theme = "天地創造";
      const result = await generateStory(theme);

      assert.ok(result);
      assert.strictEqual(result.id, 'creation');
      assert.ok(Array.isArray(result.scenes));

      // 制約条件の検証
      const sceneNumbers = new Set(result.scenes.map(p => p.id.split('-')[0]));
      assert.ok(sceneNumbers.size >= 7 && sceneNumbers.size <= 8);

      const totalParts = result.scenes.length;
      const videoParts = result.scenes.filter(p => p.is_video === true).length;
      const ratio = videoParts / totalParts;
      assert.ok(ratio >= 0.45 && ratio <= 0.50);
    } finally {
      if (origEnvKey === undefined) {
        delete process.env.GEMINI_API_KEY;
      } else {
        process.env.GEMINI_API_KEY = origEnvKey;
      }
      GoogleGenerativeAI.prototype.getGenerativeModel = originalGetGenerativeModel;
    }
  });

  await t.test('4. Exception Safety - API Returns Corrupted JSON structure', async () => {
    const origEnvKey = process.env.GEMINI_API_KEY;
    process.env.GEMINI_API_KEY = 'mock_key';
    const originalGetGenerativeModel = GoogleGenerativeAI.prototype.getGenerativeModel;

    // APIクライアントがJSONとしてパースできるが、構造が破損しているデータを返すようにモック化
    GoogleGenerativeAI.prototype.getGenerativeModel = function(config) {
      return {
        generateContent: async function(prompt) {
          return {
            response: {
              text: () => JSON.stringify({
                id: "corrupted_id",
                title: "Corrupted Title",
                scenes: "this is a string, not an array" // processAndEnforceConstraintsで例外を誘発
              })
            }
          };
        }
      };
    };

    try {
      const theme = "ノア";
      const result = await generateStory(theme);

      assert.ok(result);
      assert.strictEqual(result.id, 'noahs_ark');
      assert.ok(Array.isArray(result.scenes));

      // 制約条件の検証
      const sceneNumbers = new Set(result.scenes.map(p => p.id.split('-')[0]));
      assert.ok(sceneNumbers.size >= 7 && sceneNumbers.size <= 8);

      const totalParts = result.scenes.length;
      const videoParts = result.scenes.filter(p => p.is_video === true).length;
      const ratio = videoParts / totalParts;
      assert.ok(ratio >= 0.45 && ratio <= 0.50);
    } finally {
      if (origEnvKey === undefined) {
        delete process.env.GEMINI_API_KEY;
      } else {
        process.env.GEMINI_API_KEY = origEnvKey;
      }
      GoogleGenerativeAI.prototype.getGenerativeModel = originalGetGenerativeModel;
    }
  });

});
