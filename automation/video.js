const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { exec, execFile } = require('child_process');

/**
 * システムに FFmpeg がインストールされているかチェックする
 * @returns {Promise<boolean>}
 */
function hasFfmpeg() {
  return new Promise((resolve) => {
    exec('ffmpeg -version', (error) => {
      if (error) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

/**
 * FFmpeg を使用して動画デコード検証を行う
 * @param {string} filePath 
 * @returns {Promise<{valid: boolean, reason?: string}>}
 */
function validateFfmpeg(filePath) {
  return new Promise((resolve) => {
    execFile('ffmpeg', ['-v', 'error', '-i', filePath, '-f', 'null', '-'], (error, stdout, stderr) => {
      if (error) {
        resolve({ valid: false, reason: `FFmpegデコード検証エラー: ${error.message} (stderr: ${stderr})` });
      } else {
        resolve({ valid: true });
      }
    });
  });
}

/**
 * Node.js標準fsを用いた簡易バイナリ検証 (ftyp & moov スキャン)
 * @param {string} filePath 
 * @returns {{valid: boolean, reason?: string}}
 */
function validateMp4Structure(filePath) {
  let fd;
  try {
    fd = fs.openSync(filePath, 'r');
    const stats = fs.fstatSync(fd);
    const fileSize = stats.size;

    // MP4として最低限必要なサイズ
    if (fileSize < 16) {
      return { valid: false, reason: 'ファイルサイズが小さすぎます（有効なMP4ではありません）' };
    }

    // 1. ftypアトムの検証 (先頭の4〜7バイトが 'ftyp' であること)
    const ftypBuffer = Buffer.alloc(8);
    fs.readSync(fd, ftypBuffer, 0, 8, 0);
    const signature = ftypBuffer.toString('ascii', 4, 8);
    if (signature !== 'ftyp') {
      return { valid: false, reason: 'ファイルヘッダーが不正です（MP4形式ではありません）' };
    }

    // 2. moovアトムの検証 (先頭4KBまたは末尾4KBに 'moov' が含まれること)
    const checkSize = Math.min(fileSize, 4096);
    
    // 先頭の読み込み
    const startBuffer = Buffer.alloc(checkSize);
    fs.readSync(fd, startBuffer, 0, checkSize, 0);

    // 末尾の読み込み
    const endBuffer = Buffer.alloc(checkSize);
    const endOffset = Math.max(0, fileSize - checkSize);
    fs.readSync(fd, endBuffer, 0, checkSize, endOffset);

    const hasMoov = startBuffer.includes('moov') || endBuffer.includes('moov');
    if (!hasMoov) {
      return { valid: false, reason: '動画のメタデータ(moov)が見つかりません。ファイルが破損しているか、書き出しが不完全です。' };
    }

    return { valid: true };
  } catch (error) {
    return { valid: false, reason: `ファイル読み込みエラー: ${error.message}` };
  } finally {
    if (fd !== undefined) {
      fs.closeSync(fd);
    }
  }
}

/**
 * 総合的な動画バリデーション
 * @param {string} filePath 
 * @param {boolean} useFfmpeg 
 * @returns {Promise<{valid: boolean, reason?: string}>}
 */
async function validateVideo(filePath, useFfmpeg = false) {
  // 1. 存在確認
  if (!fs.existsSync(filePath)) {
    return { valid: false, reason: 'ファイルが存在しません。' };
  }

  // 2. 拡張子検証
  if (path.extname(filePath).toLowerCase() !== '.mp4') {
    return { valid: false, reason: '拡張子が.mp4ではありません。' };
  }

  // 3. ファイルサイズ検証 (0バイト排除)
  const size = fs.statSync(filePath).size;
  if (size === 0) {
    return { valid: false, reason: 'ファイルサイズが0バイトです。' };
  }

  // 4. 簡易バイナリ検証
  const binaryResult = validateMp4Structure(filePath);
  if (!binaryResult.valid) {
    return binaryResult;
  }

  // 5. FFmpegデコード検証 (利用可能な場合)
  if (useFfmpeg) {
    const ffmpegInstalled = await hasFfmpeg();
    if (ffmpegInstalled) {
      return await validateFfmpeg(filePath);
    }
  }

  return { valid: true };
}

/**
 * 動画自動化・受付のメイン処理を実行する
 * @param {string} bookId 
 * @param {object|string} storyDataOrPath 
 * @param {object} options 
 * @returns {Promise<object>} 状態管理オブジェクト
 */
async function runVideoAutomation(bookId, storyDataOrPath, options = {}) {
  const interval = options.interval !== undefined ? options.interval : 2000;
  const timeout = options.timeout !== undefined ? options.timeout : 0; // 0 は無制限
  const interactive = options.interactive !== undefined ? options.interactive : true;
  
  const rootDir = options.rootDir || path.join(__dirname, '..');
  const statePath = options.statePath || path.join(rootDir, 'webapp', 'assets', bookId, 'generation_state.json');
  const videosDir = options.videosDir || path.join(rootDir, 'webapp', 'assets', bookId, 'videos');

  const stdin = options.stdin || process.stdin;
  const stdout = options.stdout || process.stdout;

  // ストーリーデータの取得
  let storyData;
  if (typeof storyDataOrPath === 'string') {
    const fullPath = path.isAbsolute(storyDataOrPath) ? storyDataOrPath : path.join(rootDir, storyDataOrPath);
    storyData = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  } else {
    storyData = storyDataOrPath;
  }

  // 動画化対象のシーンを抽出
  const scenes = storyData.scenes || [];
  const videoScenes = scenes.filter(s => s.is_video && s.video_prompt);

  // 状態のロードまたは初期化
  let state = { book_id: bookId, completed_scenes: {} };
  const stateDir = path.dirname(statePath);
  if (!fs.existsSync(stateDir)) {
    fs.mkdirSync(stateDir, { recursive: true });
  }
  if (fs.existsSync(statePath)) {
    try {
      state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
      if (!state.completed_scenes) {
        state.completed_scenes = {};
      }
    } catch (e) {
      stdout.write(`[警告] 状態ファイルの読み込みに失敗しました。新規作成します。: ${e.message}\n`);
    }
  }

  // 動画ディレクトリの作成
  if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir, { recursive: true });
  }

  // FFmpegの存在有無をあらかじめ確認
  const useFfmpeg = await hasFfmpeg();
  if (useFfmpeg) {
    stdout.write(`[情報] システムにFFmpegが検出されました。ハイブリッドデコード検証を有効にします。\n`);
  } else {
    stdout.write(`[情報] FFmpegが検出されませんでした。簡易バイナリ検証のみを使用します。\n`);
  }

  // 進捗を保存するヘルパー（アトミック書き込み）
  const saveState = () => {
    const tempPath = statePath + '.tmp';
    try {
      fs.writeFileSync(tempPath, JSON.stringify(state, null, 2), 'utf8');
      fs.renameSync(tempPath, statePath);
    } catch (e) {
      stdout.write(`[エラー] 状態ファイルの保存に失敗しました: ${e.message}\n`);
      if (fs.existsSync(tempPath)) {
        try { fs.unlinkSync(tempPath); } catch (_) {}
      }
      throw e;
    }
  };

  // 各シーンの待機とバリデーション
  for (const scene of videoScenes) {
    const sceneId = scene.id;
    const expectedFile = path.join(videosDir, `${sceneId}.mp4`);
    const expectedRelPath = `./assets/${bookId}/videos/${sceneId}.mp4`;

    // 既に完了またはスキップされている場合はスキップ
    if (state.completed_scenes[sceneId]) {
      const sceneState = state.completed_scenes[sceneId];
      if (sceneState.status === 'completed' || sceneState.status === 'skipped') {
        stdout.write(`[スキップ] シーン「${sceneId}」は既に処理済みです (ステータス: ${sceneState.status})\n`);
        continue;
      }
    }

    stdout.write(`\n==================================================\n`);
    stdout.write(`🎬 【動画生成対象シーン】 ID: ${sceneId}\n`);
    stdout.write(`テキスト: ${scene.text}\n`);
    stdout.write(`動画用プロンプト（英語）:\n`);
    stdout.write(`--------------------------------------------------\n`);
    stdout.write(`${scene.video_prompt}\n`);
    stdout.write(`--------------------------------------------------\n`);
    stdout.write(`👉 動画ファイルを以下のパスに配置してください：\n`);
    stdout.write(`   ${expectedFile}\n`);
    stdout.write(`メニュー操作 (※入力後、Enterキーを押してください):\n`);
    stdout.write(`   [f] 今すぐ強制チェック  [s] 動画をスキップ  [q] 進捗保存して安全終了\n`);
    stdout.write(`==================================================\n\n`);

    let checkIntervalId;
    let timeoutId;
    let rl;
    let previousSize = undefined;
    let sizeStableCount = 0;
    let isTransitioning = false;

    // 1つのシーンに対する待機プロミス
    await new Promise((resolve, reject) => {
      // SIGINT ハンドラ
      const sigintHandler = () => {
        stdout.write(`\n[割り込み] SIGINT (Ctrl+C) を検知しました。進捗を保存してクリーンアップします...\n`);
        try {
          saveState();
        } catch (err) {
          stdout.write(`[エラー] SIGINT時の状態保存に失敗しました: ${err.message}\n`);
        }
        cleanup();
        reject(new Error('USER_QUIT'));
      };

      // 終了・クリーンアップ処理
      const cleanup = () => {
        if (checkIntervalId) {
          clearInterval(checkIntervalId);
          checkIntervalId = undefined;
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = undefined;
        }
        process.off('SIGINT', sigintHandler);
        if (rl) {
          rl.off('SIGINT', sigintHandler);
          rl.close();
          rl = undefined;
        }
      };

      // 共通の検証実行ロジック
      const runCheck = async (force = false) => {
        if (isTransitioning) return;
        
        if (!fs.existsSync(expectedFile)) {
          if (force) {
            stdout.write(`[エラー] ファイルが見つかりません: ${expectedFile}\n`);
          }
          return;
        }

        const stats = fs.statSync(expectedFile);
        const currentSize = stats.size;

        if (currentSize === 0) {
          if (force) {
            stdout.write(`[エラー] ファイルサイズが0バイトです。書き込みが完了していないか、作成に失敗しています。\n`);
          }
          return;
        }

        // 強制チェックでなければ、サイズ安定チェックを行う
        if (!force) {
          if (previousSize === undefined) {
            previousSize = currentSize;
            stdout.write(`[検知] 動画ファイルを検知しました。サイズ: ${currentSize} bytes. 書き込み完了を待っています...\n`);
            return;
          }

          if (currentSize === previousSize) {
            sizeStableCount++;
          } else {
            sizeStableCount = 0;
            previousSize = currentSize;
            stdout.write(`[更新] ファイル書き込み中... サイズ: ${currentSize} bytes\n`);
            return;
          }

          // 2回連続でサイズ変化が止まるのを確認する（検知時を含めて2回の同サイズ確認）
          if (sizeStableCount < 2) {
            return;
          }
        }

        // 検証実行
        isTransitioning = true;
        stdout.write(`[検証中] 動画ファイルの整合性を検証しています...\n`);
        const result = await validateVideo(expectedFile, useFfmpeg);
        
        if (result.valid) {
          stdout.write(`[成功] ✅ シーン「${sceneId}」の動画検証に合格しました！\n`);
          state.completed_scenes[sceneId] = {
            status: 'completed',
            imagePath: `./assets/${bookId}/images/${sceneId}.png`, // 推定画像パス
            videoPath: expectedRelPath,
            timestamp: new Date().toISOString()
          };
          saveState();
          cleanup();
          resolve();
        } else {
          stdout.write(`[警告] ❌ 動画ファイルの検証に失敗しました: ${result.reason}\n`);
          stdout.write(`👉 対処法: 動画生成ツールで再度書き出しを行い、上記パスに上書き保存してください。\n`);
          isTransitioning = false;
          previousSize = undefined;
          sizeStableCount = 0;
        }
      };

      // シグナルハンドラの登録
      process.on('SIGINT', sigintHandler);

      // CLI入力の初期化
      if (interactive) {
        rl = readline.createInterface({
          input: stdin,
          output: stdout,
          terminal: false
        });

        rl.on('SIGINT', sigintHandler);

        rl.on('line', async (line) => {
          try {
            const cmd = line.trim().toLowerCase();
            if (cmd === 'f' || cmd === '[f]') {
              stdout.write(`\n[操作] 強制チェックを実行します...\n`);
              await runCheck(true);
            } else if (cmd === 's' || cmd === '[s]') {
              stdout.write(`\n[操作] 動画待機をスキップし、静止画フォールバックします。\n`);
              state.completed_scenes[sceneId] = {
                status: 'skipped',
                imagePath: `./assets/${bookId}/images/${sceneId}.png`,
                videoPath: "",
                timestamp: new Date().toISOString()
              };
              saveState();
              cleanup();
              resolve();
            } else if (cmd === 'q' || cmd === '[q]') {
              stdout.write(`\n[操作] 進捗を保存して安全に終了します。\n`);
              saveState();
              cleanup();
              reject(new Error('USER_QUIT'));
            }
          } catch (e) {
            stdout.write(`[エラー] 入力処理中に例外が発生しました: ${e.message}\n`);
            cleanup();
            reject(e);
          }
        });
      }

      // 自動ポーリングの設定
      checkIntervalId = setInterval(async () => {
        try {
          await runCheck(false);
        } catch (e) {
          stdout.write(`[エラー] 自動ポーリング中に例外が発生しました: ${e.message}\n`);
          cleanup();
          reject(e);
        }
      }, interval);

      // タイムアウト設定 (指定がある場合)
      if (timeout > 0) {
        timeoutId = setTimeout(() => {
          stdout.write(`\n[タイムアウト] シーン「${sceneId}」の待機時間がタイムアウト（${timeout}秒）に達しました。\n`);
          cleanup();
          reject(new Error('TIMEOUT'));
        }, timeout * 1000);
      }
    }).catch(err => {
      if (err.message === 'USER_QUIT') {
        // 安全に終了を要求された場合は、ループを打ち切り、ステートを返却して抜ける
        return state;
      }
      throw err;
    });

    // ユーザ終了時は残りのループを実行せず終了する
    if (state.completed_scenes[sceneId] && state.completed_scenes[sceneId].status === 'completed' || state.completed_scenes[sceneId] && state.completed_scenes[sceneId].status === 'skipped') {
      continue;
    } else {
      // USER_QUIT がスローされたなどの理由でループを抜けた場合
      break;
    }
  }

  stdout.write(`\n[完了] 動画処理プロセスを終了しました。\n`);
  return state;
}

module.exports = {
  hasFfmpeg,
  validateFfmpeg,
  validateMp4Structure,
  validateVideo,
  runVideoAutomation
};
