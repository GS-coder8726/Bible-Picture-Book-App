const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { generateImage } = require('../image');

// ヘルパー: テスト用の一時ファイルとディレクトリを削除
function cleanup(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
    } catch (e) {
      // ignore
    }
  }
  const dir = path.dirname(filePath);
  if (fs.existsSync(dir)) {
    if (dir.includes('test_output')) {
      try {
        fs.rmdirSync(dir);
      } catch (e) {
        // ignore if not empty or locked
      }
    }
  }
}

test('Image Generator Robustness & Edge Cases Verification', async (t) => {
  const testDir = path.join(__dirname, 'test_output');
  const outPath = path.join(testDir, 'test-image.png');

  // 初期化: テストフォルダをきれいに
  if (fs.existsSync(outPath)) {
    try { fs.unlinkSync(outPath); } catch(e) {}
  }
  if (fs.existsSync(testDir)) {
    try { fs.rmdirSync(testDir); } catch(e) {}
  }

  await t.test('1. Default Options - Verification of defaults when options is missing/empty', async () => {
    const res = await generateImage({
      prompt: 'A test watercolor painting.',
      outputPath: outPath
    });

    assert.strictEqual(res.success, true);
    assert.strictEqual(res.model, 'Nano Banana Pro');
    assert.strictEqual(res.aspectRatio, '1:1');
    assert.strictEqual(res.mimeType, 'image/png');
    assert.strictEqual(res.mock, true);
    assert.ok(fs.existsSync(outPath));

    cleanup(outPath);
  });

  await t.test('2. Error handling: Empty/invalid prompt', async () => {
    // 空文字プロンプト
    await assert.rejects(
      generateImage({
        prompt: '',
        outputPath: outPath
      }),
      /Prompt must be a non-empty string\./
    );

    // プロンプトパラメータ欠落
    await assert.rejects(
      generateImage({
        outputPath: outPath
      }),
      /Prompt must be a non-empty string\./
    );

    // 数値型のプロンプト
    await assert.rejects(
      generateImage({
        prompt: 123,
        outputPath: outPath
      }),
      /Prompt must be a non-empty string\./
    );
  });

  await t.test('3. Error handling: Invalid output path', async () => {
    // 出力パス欠落
    await assert.rejects(
      generateImage({
        prompt: 'A prompt string'
      }),
      /Output path must be a valid file path\./
    );

    // 文字列以外の出力パス
    await assert.rejects(
      generateImage({
        prompt: 'A prompt string',
        outputPath: true
      }),
      /Output path must be a valid file path\./
    );
  });

  await t.test('4. Very long prompt support', async () => {
    const longPrompt = 'A'.repeat(10000);
    const res = await generateImage({
      prompt: longPrompt,
      outputPath: outPath
    });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.prompt, longPrompt);
    cleanup(outPath);
  });

  await t.test('5. Model validation: Rejected invalid models', async () => {
    await assert.rejects(
      generateImage({
        prompt: 'Valid prompt',
        outputPath: outPath,
        options: { model: 'Invalid Model' }
      }),
      /Invalid model: 'Invalid Model'\. Only 'Nano Banana Pro' or 'nano-banana-pro' is supported\./
    );

    // 'nano-banana-pro' は受け入れるべき
    const res = await generateImage({
      prompt: 'Valid prompt',
      outputPath: outPath,
      options: { model: 'nano-banana-pro' }
    });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.model, 'nano-banana-pro');
    cleanup(outPath);
  });

  await t.test('6. Overwrite behavior - writing twice to same path', async () => {
    // 1回目の書き込み
    const res1 = await generateImage({
      prompt: 'Prompt 1',
      outputPath: outPath
    });
    assert.ok(fs.existsSync(outPath));
    const size1 = fs.statSync(outPath).size;

    // 2回目の書き込み
    const res2 = await generateImage({
      prompt: 'Prompt 2',
      outputPath: outPath
    });
    assert.strictEqual(res2.success, true);
    assert.ok(fs.existsSync(outPath));
    const size2 = fs.statSync(outPath).size;
    assert.strictEqual(size1, size2);

    cleanup(outPath);
  });

  await t.test('7. Directory creation recursive', async () => {
    const deepPath = path.join(testDir, 'nested/very/deep/image.png');
    const res = await generateImage({
      prompt: 'Deep path illustration',
      outputPath: deepPath
    });
    assert.strictEqual(res.success, true);
    assert.ok(fs.existsSync(deepPath));
    
    fs.unlinkSync(deepPath);
    fs.rmdirSync(path.dirname(deepPath));
    fs.rmdirSync(path.dirname(path.dirname(deepPath)));
    fs.rmdirSync(path.dirname(path.dirname(path.dirname(deepPath))));
    fs.rmdirSync(testDir);
  });

  await t.test('8. Options configuration - MIME type & Aspect ratio', async () => {
    const res = await generateImage({
      prompt: 'Configured illustration',
      outputPath: outPath,
      options: {
        aspectRatio: '16:9',
        outputMimeType: 'image/jpeg'
      }
    });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.aspectRatio, '16:9');
    assert.strictEqual(res.mimeType, 'image/jpeg');
    cleanup(outPath);
  });

  await t.test('9. Real API Call simulation - Success scenario (mocking fetch)', async () => {
    const originalFetch = globalThis.fetch;
    const dummyApiKey = 'dummy-key';
    process.env.GEMINI_API_KEY = dummyApiKey;

    // fetchのモック実装
    globalThis.fetch = async (url, options) => {
      assert.ok(url.includes('imagen-3.0-generate-002:generateImages'));
      assert.ok(url.includes(`key=${dummyApiKey}`));
      const body = JSON.parse(options.body);
      assert.strictEqual(body.prompt, 'Real API Test');
      assert.strictEqual(body.aspectRatio, '1:1');
      assert.strictEqual(body.outputMimeType, 'image/png');

      return {
        ok: true,
        status: 200,
        json: async () => ({
          generatedImages: [
            {
              image: {
                imageBytes: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
              }
            }
          ]
        })
      };
    };

    try {
      const res = await generateImage({
        prompt: 'Real API Test',
        outputPath: outPath,
        options: {
          mock: false // モックを明示的にオフにする
        }
      });

      assert.strictEqual(res.success, true);
      assert.strictEqual(res.mock, false);
      assert.ok(fs.existsSync(outPath));
    } finally {
      globalThis.fetch = originalFetch;
      delete process.env.GEMINI_API_KEY;
      cleanup(outPath);
    }
  });

  await t.test('10. Real API Call simulation - HTTP Failure scenario', async () => {
    const originalFetch = globalThis.fetch;
    process.env.GEMINI_API_KEY = 'dummy-key';

    globalThis.fetch = async () => {
      return {
        ok: false,
        status: 400,
        text: async () => 'API quota exceeded'
      };
    };

    try {
      await assert.rejects(
        generateImage({
          prompt: 'Real API Test Failure',
          outputPath: outPath,
          options: { mock: false }
        }),
        /Gemini API Error \(HTTP 400\): API quota exceeded/
      );
    } finally {
      globalThis.fetch = originalFetch;
      delete process.env.GEMINI_API_KEY;
      cleanup(outPath);
    }
  });

  await t.test('11. Real API Call simulation - Invalid response structure scenario', async () => {
    const originalFetch = globalThis.fetch;
    process.env.GEMINI_API_KEY = 'dummy-key';

    globalThis.fetch = async () => {
      return {
        ok: true,
        status: 200,
        json: async () => ({
          generatedImages: [] // 必要なimageBytesが見当たらない構造
        })
      };
    };

    try {
      await assert.rejects(
        generateImage({
          prompt: 'Real API Test Bad Structure',
          outputPath: outPath,
          options: { mock: false }
        }),
        /Invalid response structure from Gemini API: missing image bytes\./
      );
    } finally {
      globalThis.fetch = originalFetch;
      delete process.env.GEMINI_API_KEY;
      cleanup(outPath);
    }
  });

  await t.test('12. Real API Call simulation - Fetch network error', async () => {
    const originalFetch = globalThis.fetch;
    process.env.GEMINI_API_KEY = 'dummy-key';

    globalThis.fetch = async () => {
      throw new Error('Network Connection Refused');
    };

    try {
      await assert.rejects(
        generateImage({
          prompt: 'Real API Test Network Error',
          outputPath: outPath,
          options: { mock: false }
        }),
        /Network Connection Refused/
      );
    } finally {
      globalThis.fetch = originalFetch;
      delete process.env.GEMINI_API_KEY;
      cleanup(outPath);
    }
  });

  await t.test('13. Overwrite behavior - read-only / system file error handling', async () => {
    // 出力パスがファイルではなく既存のディレクトリである場合
    const dirPath = path.join(testDir, 'not-a-file');
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // ディレクトリへの書き込み試行。
    // writeFileSync がディレクトリに対して行われるため、EISDIRエラーが発生するはず。
    await assert.rejects(
      generateImage({
        prompt: 'Invalid output path due to being a directory',
        outputPath: dirPath
      }),
      /EISDIR|EACCES/
    );

    try {
      fs.rmdirSync(dirPath);
    } catch(e) {}
    cleanup(outPath);
  });
});
