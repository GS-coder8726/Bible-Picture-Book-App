const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { generateImage } = require('../image');

// PNG構造をバイナリレベルで厳密にパース・検証するヘルパー
function validatePngStructure(buffer) {
  const pngSignature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (buffer.length < 8 || !buffer.subarray(0, 8).equals(pngSignature)) {
    throw new Error('Invalid PNG signature.');
  }

  let offset = 8;
  let hasIhdr = false;
  let hasIend = false;

  while (offset < buffer.length) {
    if (offset + 8 > buffer.length) {
      throw new Error('PNG file truncated: cannot read chunk length and type.');
    }

    const length = buffer.readUInt32BE(offset);
    const type = buffer.subarray(offset + 4, offset + 8).toString('ascii');
    
    if (offset + 12 + length > buffer.length) {
      throw new Error(`PNG chunk ${type} is truncated.`);
    }

    if (!hasIhdr) {
      if (type !== 'IHDR') {
        throw new Error('First chunk must be IHDR.');
      }
      hasIhdr = true;
    }

    if (type === 'IEND') {
      hasIend = true;
      if (length !== 0) {
        throw new Error('IEND chunk must have length 0.');
      }
      break;
    }

    offset += 12 + length;
  }

  if (!hasIhdr) {
    throw new Error('Missing IHDR chunk.');
  }
  if (!hasIend) {
    throw new Error('Missing IEND chunk.');
  }
  return true;
}

test('Image Generator Robustness & Stress Challenge', async (t) => {
  const testDir = path.join(__dirname, 'test_output_challenge');
  
  t.beforeEach(() => {
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }
  });

  t.afterEach(() => {
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true });
    }
  });

  await t.test('1. Model Validation Correctness', async (st) => {
    const validModels = ['Nano Banana Pro', 'nano-banana-pro'];
    const invalidModels = [
      'NANO-BANANA-PRO',
      'nano-banana-pro ',
      ' Nano Banana Pro',
      'Nano Banana Pro\n',
      'some-other-model',
      'banana',
      'pro',
      true,
      123,
      {}
    ];

    const testFile = path.join(testDir, 'model_val.png');

    // Valid cases
    for (const model of validModels) {
      const res = await generateImage({
        prompt: 'test prompt',
        outputPath: testFile,
        options: { model, mock: true }
      });
      assert.strictEqual(res.success, true);
      assert.strictEqual(res.model, model);
    }

    // Default/Empty cases (should fallback to 'Nano Banana Pro')
    for (const model of [undefined, null, '']) {
      const res = await generateImage({
        prompt: 'test prompt',
        outputPath: testFile,
        options: { model, mock: true }
      });
      assert.strictEqual(res.success, true);
      assert.strictEqual(res.model, 'Nano Banana Pro');
    }

    // Invalid cases
    for (const model of invalidModels) {
      await assert.rejects(
        generateImage({
          prompt: 'test prompt',
          outputPath: testFile,
          options: { model, mock: true }
        }),
        /Invalid model/,
        `Should reject model: ${model}`
      );
    }
  });

  await t.test('2. Concurrent Request Stress & Race Conditions', async (st) => {
    // 2.1 Write same file concurrently
    const sameFilePath = path.join(testDir, 'same_file.png');
    const concurrencyCount = 20;

    const promises = Array.from({ length: concurrencyCount }).map((_, idx) => {
      return generateImage({
        prompt: `prompt ${idx}`,
        outputPath: sameFilePath,
        options: { mock: true }
      });
    });

    const results = await Promise.all(promises);
    assert.strictEqual(results.length, concurrencyCount);
    for (const res of results) {
      assert.strictEqual(res.success, true);
    }
    assert.ok(fs.existsSync(sameFilePath));
    const fileBytes = fs.readFileSync(sameFilePath);
    assert.doesNotThrow(() => validatePngStructure(fileBytes));

    // 2.2 Create same non-existent directory concurrently with different files
    const concurrentSubdir = path.join(testDir, 'new_dir_concurrent');
    
    // Ensure the subdir doesn't exist
    if (fs.existsSync(concurrentSubdir)) {
      fs.rmSync(concurrentSubdir, { recursive: true, force: true });
    }

    const uniquePromises = Array.from({ length: concurrencyCount }).map((_, idx) => {
      const uniquePath = path.join(concurrentSubdir, `file_${idx}.png`);
      return generateImage({
        prompt: `prompt ${idx}`,
        outputPath: uniquePath,
        options: { mock: true }
      });
    });

    const uniqueResults = await Promise.all(uniquePromises);
    assert.strictEqual(uniqueResults.length, concurrencyCount);
    for (let idx = 0; idx < concurrencyCount; idx++) {
      const uniquePath = path.join(concurrentSubdir, `file_${idx}.png`);
      assert.ok(fs.existsSync(uniquePath));
      const bytes = fs.readFileSync(uniquePath);
      assert.doesNotThrow(() => validatePngStructure(bytes));
    }
  });

  await t.test('3. API Parameter Forwarding & Output PNG Integrity', async (st) => {
    const originalFetch = globalThis.fetch;
    const testFile = path.join(testDir, 'api_test.png');

    const origEnvKey = process.env.GEMINI_API_KEY;
    const origNodeEnv = process.env.NODE_ENV;
    const origMockImageGen = process.env.MOCK_IMAGE_GEN;

    process.env.GEMINI_API_KEY = 'dummy_api_key';
    delete process.env.NODE_ENV;
    delete process.env.MOCK_IMAGE_GEN;

    try {
      const aspectRatios = ['1:1', '16:9', '4:3', '3:4'];
      const mimeTypes = ['image/png', 'image/jpeg'];

      for (const aspectRatio of aspectRatios) {
        for (const outputMimeType of mimeTypes) {
          let lastRequestBody = null;

          globalThis.fetch = async (url, options) => {
            lastRequestBody = JSON.parse(options.body);
            
            return {
              ok: true,
              status: 200,
              json: async () => ({
                generatedImages: [{
                  image: {
                    imageBytes: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
                  }
                }]
              })
            };
          };

          const res = await generateImage({
            prompt: 'Test prompt for params',
            outputPath: testFile,
            options: {
              model: 'nano-banana-pro',
              aspectRatio,
              outputMimeType,
              mock: false
            }
          });

          assert.strictEqual(res.success, true);
          assert.strictEqual(res.mock, false);
          assert.strictEqual(res.aspectRatio, aspectRatio);
          assert.strictEqual(res.mimeType, outputMimeType);

          assert.ok(lastRequestBody);
          assert.strictEqual(lastRequestBody.aspectRatio, aspectRatio);
          assert.strictEqual(lastRequestBody.outputMimeType, outputMimeType);
          assert.strictEqual(lastRequestBody.prompt, 'Test prompt for params');
          assert.strictEqual(lastRequestBody.numberOfImages, 1);

          const fileBytes = fs.readFileSync(testFile);
          assert.doesNotThrow(() => validatePngStructure(fileBytes));
          fs.unlinkSync(testFile);
        }
      }
    } finally {
      globalThis.fetch = originalFetch;
      if (origEnvKey === undefined) delete process.env.GEMINI_API_KEY;
      else process.env.GEMINI_API_KEY = origEnvKey;

      if (origNodeEnv === undefined) delete process.env.NODE_ENV;
      else process.env.NODE_ENV = origNodeEnv;

      if (origMockImageGen === undefined) delete process.env.MOCK_IMAGE_GEN;
      else process.env.MOCK_IMAGE_GEN = origMockImageGen;
    }
  });

  await t.test('4. Real API Error Handling', async (st) => {
    const originalFetch = globalThis.fetch;
    const testFile = path.join(testDir, 'api_error_test.png');

    const origEnvKey = process.env.GEMINI_API_KEY;
    const origNodeEnv = process.env.NODE_ENV;
    const origMockImageGen = process.env.MOCK_IMAGE_GEN;

    process.env.GEMINI_API_KEY = 'dummy_api_key';
    delete process.env.NODE_ENV;
    delete process.env.MOCK_IMAGE_GEN;

    try {
      // 4.1 HTTP 500 Error
      globalThis.fetch = async () => {
        return {
          ok: false,
          status: 500,
          text: async () => 'Internal Server Error Mock'
        };
      };

      await assert.rejects(
        generateImage({
          prompt: 'Test prompt',
          outputPath: testFile,
          options: { mock: false }
        }),
        /Gemini API Error \(HTTP 500\): Internal Server Error Mock/
      );

      // 4.2 Malformed API Response structure
      globalThis.fetch = async () => {
        return {
          ok: true,
          status: 200,
          json: async () => ({
            generatedImages: [{}]
          })
        };
      };

      await assert.rejects(
        generateImage({
          prompt: 'Test prompt',
          outputPath: testFile,
          options: { mock: false }
        }),
        /Invalid response structure from Gemini API: missing image bytes\./
      );

      // 4.3 Network exception
      globalThis.fetch = async () => {
        throw new Error('Connection refused');
      };

      await assert.rejects(
        generateImage({
          prompt: 'Test prompt',
          outputPath: testFile,
          options: { mock: false }
        }),
        /Connection refused/
      );
    } finally {
      globalThis.fetch = originalFetch;
      if (origEnvKey === undefined) delete process.env.GEMINI_API_KEY;
      else process.env.GEMINI_API_KEY = origEnvKey;

      if (origNodeEnv === undefined) delete process.env.NODE_ENV;
      else process.env.NODE_ENV = origNodeEnv;

      if (origMockImageGen === undefined) delete process.env.MOCK_IMAGE_GEN;
      else process.env.MOCK_IMAGE_GEN = origMockImageGen;
    }
  });
});
