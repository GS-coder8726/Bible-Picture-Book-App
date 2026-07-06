const test = require('node:test');
const assert = require('node:assert');
const { generateStory } = require('../story');

test('Story Generator Constraints & Logic Verification', async (t) => {

  await t.test('1. Normal Theme Story Generation & Basic Schema', async () => {
    const theme = "ノアの箱舟";
    const result = await generateStory(theme);

    // 基本スキーマの検証
    assert.strictEqual(result.id, 'noahs_ark');
    assert.ok(result.title);
    assert.ok(Array.isArray(result.scenes));

    // IDフォーマットの検証 ("scene_number-part_number")
    result.scenes.forEach(part => {
      assert.match(part.id, /^\d+-\d+$/, `ID must match pattern "scene_number-part_number". Got: ${part.id}`);
    });
  });

  await t.test('2. Total Scene Count Constraint (7 to 8 scenes)', async () => {
    const theme = "ノアの箱舟";
    const result = await generateStory(theme);

    const sceneNumbers = new Set(
      result.scenes.map(part => part.id.split('-')[0])
    );
    const totalScenes = sceneNumbers.size;
    assert.ok(totalScenes >= 7 && totalScenes <= 8, `Total scenes must be 7-8. Got ${totalScenes}`);
  });

  await t.test('3. Parts per Scene Constraint (Scene 0 has 1 part, others have 3-5 parts)', async () => {
    const theme = "ノアの箱舟";
    const result = await generateStory(theme);

    const scenePartsCount = {};
    result.scenes.forEach(part => {
      const sceneNum = part.id.split('-')[0];
      scenePartsCount[sceneNum] = (scenePartsCount[sceneNum] || 0) + 1;
    });

    for (const [sceneNum, count] of Object.entries(scenePartsCount)) {
      if (sceneNum === '0') {
        assert.strictEqual(count, 1, `Scene 0 (Cover) must have exactly 1 part. Got ${count}`);
      } else {
        assert.ok(count >= 3 && count <= 5, `Scene ${sceneNum} must have 3-5 parts. Got ${count}`);
      }
    }
  });

  await t.test('4. Cover Page (Scene 0) Static Constraint', async () => {
    const theme = "ノアの箱舟";
    const result = await generateStory(theme);

    const coverPart = result.scenes.find(part => part.id === '0-1');
    assert.ok(coverPart, 'Cover part 0-1 must exist');
    assert.strictEqual(coverPart.is_video, false, 'Cover must not be a video');
    assert.strictEqual(coverPart.video_prompt, null, 'Cover must not have a video prompt');
  });

  await t.test('5. Video Ratio Constraint (45% to 50% of total parts)', async () => {
    const theme = "ノアの箱舟";
    const result = await generateStory(theme);

    const totalParts = result.scenes.length;
    const videoParts = result.scenes.filter(part => part.is_video === true).length;
    const ratio = videoParts / totalParts;

    assert.ok(ratio >= 0.45 && ratio <= 0.50, `Video ratio must be between 45% and 50%. Got ${Math.round(ratio * 100)}% (${videoParts}/${totalParts})`);
  });

  await t.test('6. Prompt Style Inclusion Validation', async () => {
    const theme = "ノアの箱舟";
    const result = await generateStory(theme);

    result.scenes.forEach(part => {
      assert.ok(part.image_prompt, `Part ${part.id} must have image_prompt`);
      const imgPromptLower = part.image_prompt.toLowerCase();
      assert.ok(imgPromptLower.includes('watercolor'), `Part ${part.id} image_prompt must contain 'watercolor'`);
      assert.ok(imgPromptLower.includes('pastel'), `Part ${part.id} image_prompt must contain 'pastel'`);
      assert.ok(
        imgPromptLower.includes('light') || imgPromptLower.includes('lighting'),
        `Part ${part.id} image_prompt must contain 'light' or 'lighting'`
      );
      assert.ok(imgPromptLower.includes('sparkles'), `Part ${part.id} image_prompt must contain 'sparkles'`);

      if (part.is_video) {
        assert.ok(part.video_prompt, `Part ${part.id} must have video_prompt when is_video is true`);
        const vidPromptLower = part.video_prompt.toLowerCase();
        assert.ok(vidPromptLower.includes('watercolor'), `Part ${part.id} video_prompt must contain 'watercolor'`);
        assert.ok(vidPromptLower.includes('pastel'), `Part ${part.id} video_prompt must contain 'pastel'`);
        assert.ok(
          vidPromptLower.includes('light') || vidPromptLower.includes('lighting'),
          `Part ${part.id} video_prompt must contain 'light' or 'lighting'`
        );
        assert.ok(vidPromptLower.includes('sparkles'), `Part ${part.id} video_prompt must contain 'sparkles'`);
      } else {
        assert.strictEqual(part.video_prompt, null, `Part ${part.id} video_prompt must be null when is_video is false`);
      }
    });
  });

  await t.test('7. Post-processing Adjustment (too_many_videos) - Reduction Logic', async () => {
    const theme = "too_many_videos";
    const result = await generateStory(theme);

    const totalParts = result.scenes.length;
    const videoParts = result.scenes.filter(part => part.is_video === true).length;
    const ratio = videoParts / totalParts;

    assert.ok(ratio >= 0.45 && ratio <= 0.50, `Adjustment failed for too many videos: Got ${Math.round(ratio * 100)}% (${videoParts}/${totalParts})`);
    
    // カバー以外のすべてのパートが動画化推薦されていたが、削減され動画化が解除されたパートは video_prompt = null になっていることの確認
    result.scenes.forEach(part => {
      if (!part.is_video) {
        assert.strictEqual(part.video_prompt, null, `Non-video part ${part.id} must have video_prompt as null`);
      }
    });
  });

  await t.test('8. Post-processing Adjustment (too_few_videos) - Addition Logic', async () => {
    const theme = "too_few_videos";
    const result = await generateStory(theme);

    const totalParts = result.scenes.length;
    const videoParts = result.scenes.filter(part => part.is_video === true).length;
    const ratio = videoParts / totalParts;

    assert.ok(ratio >= 0.45 && ratio <= 0.50, `Adjustment failed for too few videos: Got ${Math.round(ratio * 100)}% (${videoParts}/${totalParts})`);
    
    // カバー以外のすべてのパートが動画化推薦されていなかったが、追加され動画化されたパートは video_prompt が保持されていることの確認
    result.scenes.forEach(part => {
      if (part.is_video) {
        assert.ok(part.video_prompt, `Video-enabled part ${part.id} must retain its video_prompt`);
      }
    });
  });

});
