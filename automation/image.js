const fs = require('fs');
const path = require('path');
require('dotenv').config();

const MOCK_PNG_BASE64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

/**
 * 画像を自動生成し、指定されたパスに保存します。
 *
 * @param {Object} params
 * @param {string} params.prompt - 画像生成用プロンプト（英語）
 * @param {string} params.outputPath - 保存先ファイル絶対パス
 * @param {Object} [params.options] - 生成オプション
 * @param {string} [params.options.model='Nano Banana Pro'] - 使用する画像生成モデル
 * @param {string} [params.options.aspectRatio='1:1'] - アスペクト比
 * @param {string} [params.options.outputMimeType='image/png'] - MIMEタイプ ('image/png' | 'image/jpeg')
 * @param {boolean} [params.options.mock] - 明示的なモック化フラグ
 * @returns {Promise<{success: boolean, path: string, model: string, mock: boolean, prompt: string, aspectRatio: string, mimeType: string}>}
 */
async function generateImage({ prompt, outputPath, options = {} }) {
  const model = options.model || 'Nano Banana Pro';
  const aspectRatio = options.aspectRatio || '1:1';
  const outputMimeType = options.outputMimeType || 'image/png';

  // 必須要件: 設定モデルが厳密に 'Nano Banana Pro' または 'nano-banana-pro' であることをチェック
  if (model !== 'Nano Banana Pro' && model !== 'nano-banana-pro') {
    throw new Error(`Invalid model: '${model}'. Only 'Nano Banana Pro' or 'nano-banana-pro' is supported.`);
  }

  if (!prompt || typeof prompt !== 'string') {
    throw new Error('Prompt must be a non-empty string.');
  }

  if (!outputPath || typeof outputPath !== 'string') {
    throw new Error('Output path must be a valid file path.');
  }

  // 動作モードの判定
  const apiKey = process.env.GEMINI_API_KEY;
  const isTest = process.env.NODE_ENV === 'test' || process.env.MOCK_IMAGE_GEN === 'true';
  const shouldMock = options.mock === true || isTest || !apiKey;

  // 出力先ディレクトリの再帰的作成
  const destDir = path.dirname(outputPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  if (shouldMock) {
    const buffer = Buffer.from(MOCK_PNG_BASE64, 'base64');
    fs.writeFileSync(outputPath, buffer);
    return {
      success: true,
      path: outputPath,
      model: model,
      mock: true,
      prompt: prompt,
      aspectRatio: aspectRatio,
      mimeType: outputMimeType
    };
  }

  // リアルAPI呼び出し
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:generateImages?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: prompt,
        numberOfImages: 1,
        outputMimeType: outputMimeType,
        aspectRatio: aspectRatio
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API Error (HTTP ${response.status}): ${errText}`);
    }

    const result = await response.json();
    const generatedImage = result.generatedImages?.[0];
    if (!generatedImage || !generatedImage.image?.imageBytes) {
      throw new Error('Invalid response structure from Gemini API: missing image bytes.');
    }

    const buffer = Buffer.from(generatedImage.image.imageBytes, 'base64');
    fs.writeFileSync(outputPath, buffer);

    return {
      success: true,
      path: outputPath,
      model: model,
      mock: false,
      prompt: prompt,
      aspectRatio: aspectRatio,
      mimeType: outputMimeType
    };
  } catch (error) {
    console.error(`[generateImage Error] Real call failed: ${error.message}`);
    throw error;
  }
}

module.exports = {
  generateImage
};
