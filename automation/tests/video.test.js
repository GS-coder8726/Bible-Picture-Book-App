const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { PassThrough } = require('stream');
const {
  validateMp4Structure,
  validateVideo,
  runVideoAutomation,
  hasFfmpeg
} = require('../video');

// 一時テストディレクトリの定義
const testTmpDir = path.join(__dirname, 'tmp');

/**
 * テスト用ダミーファイルを生成するヘルパー
 */
function createTestAssets() {
  if (!fs.existsSync(testTmpDir)) {
    fs.mkdirSync(testTmpDir, { recursive: true });
  }

  // 1. 正常なダミーMP4 (ftyp と moov を両方含む)
  const validBuf = Buffer.alloc(64);
  validBuf.writeUInt32BE(16, 0);     // size of ftyp
  validBuf.write('ftyp', 4);         // ftyp type
  validBuf.write('mp42', 8);         // major brand
  validBuf.writeUInt32BE(16, 32);    // size of moov
  validBuf.write('moov', 36);        // moov type
  fs.writeFileSync(path.join(testTmpDir, 'valid.mp4'), validBuf);

  // 2. 0バイトファイル
  fs.writeFileSync(path.join(testTmpDir, 'empty.mp4'), Buffer.alloc(0));

  // 3. 不正拡張子
  fs.writeFileSync(path.join(testTmpDir, 'wrong_ext.txt'), 'dummy');

  // 4. ftyp欠落 (偽装ファイル)
  fs.writeFileSync(path.join(testTmpDir, 'no_ftyp.mp4'), Buffer.from('This is fake video data.'));

  // 5. moov欠落 (不完全な書き出しファイル)
  const noMoovBuf = Buffer.alloc(24);
  noMoovBuf.writeUInt32BE(16, 0);
  noMoovBuf.write('ftyp', 4);
  noMoovBuf.write('mp42', 8);
  fs.writeFileSync(path.join(testTmpDir, 'no_moov.mp4'), noMoovBuf);
}

/**
 * 一時フォルダのクリーンアップ
 */
function cleanupTestAssets() {
  if (fs.existsSync(testTmpDir)) {
    const files = fs.readdirSync(testTmpDir);
    for (const file of files) {
      const curPath = path.join(testTmpDir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        cleanupTestAssetsRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    }
    fs.rmdirSync(testTmpDir);
  }
}

function cleanupTestAssetsRecursive(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const curPath = path.join(dir, file);
    if (fs.lstatSync(curPath).isDirectory()) {
      cleanupTestAssetsRecursive(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  }
  fs.rmdirSync(dir);
}

/**
 * テストスイートの実行
 */
async function main() {
  console.log('🧪 テストの実行を開始します...');
  
  // テスト用フォルダの準備
  cleanupTestAssets();
  createTestAssets();

  try {
    // -------------------------------------------------------------------------
    // 1. validateMp4Structure 単体テスト
    // -------------------------------------------------------------------------
    console.log('\n--- 1. validateMp4Structure の単体テスト ---');
    
    // 正常なMP4
    const resValid = validateMp4Structure(path.join(testTmpDir, 'valid.mp4'));
    assert.strictEqual(resValid.valid, true, '正常なMP4は合格するべき');
    console.log('✅ 正常なMP4の検証: 合格');

    // 0バイトファイル
    const resEmpty = validateMp4Structure(path.join(testTmpDir, 'empty.mp4'));
    assert.strictEqual(resEmpty.valid, false, '0バイトは不合格にするべき');
    assert.match(resEmpty.reason, /小さすぎます/, 'サイズ不足のエラーメッセージ');
    console.log('✅ 0バイトMP4の検証: 不合格（想定通り）');

    // ftyp欠落
    const resNoFtyp = validateMp4Structure(path.join(testTmpDir, 'no_ftyp.mp4'));
    assert.strictEqual(resNoFtyp.valid, false, 'ftyp無しのMP4は不合格にするべき');
    assert.match(resNoFtyp.reason, /ファイルヘッダーが不正です/, 'ヘッダー不正メッセージ');
    console.log('✅ ftyp欠落MP4の検証: 不合格（想定通り）');

    // moov欠落
    const resNoMoov = validateMp4Structure(path.join(testTmpDir, 'no_moov.mp4'));
    assert.strictEqual(resNoMoov.valid, false, 'moov無しのMP4は不合格にするべき');
    assert.match(resNoMoov.reason, /moov.*見つかりません/, 'moov欠落メッセージ');
    console.log('✅ moov欠落MP4の検証: 不合格（想定通り）');

    // -------------------------------------------------------------------------
    // 2. validateVideo 総合検証テスト
    // -------------------------------------------------------------------------
    console.log('\n--- 2. validateVideo のテスト ---');
    
    // 拡張子不正
    const resExt = await validateVideo(path.join(testTmpDir, 'wrong_ext.txt'));
    assert.strictEqual(resExt.valid, false, '拡張子違いは不合格にするべき');
    assert.match(resExt.reason, /拡張子が.mp4ではありません/, '拡張子エラーメッセージ');
    console.log('✅ 拡張子不正の検証: 不合格（想定通り）');

    // 存在しないファイル
    const resNotExist = await validateVideo(path.join(testTmpDir, 'non_existent.mp4'));
    assert.strictEqual(resNotExist.valid, false, '存在しないファイルは不合格にするべき');
    assert.match(resNotExist.reason, /ファイルが存在しません/, '存在エラーメッセージ');
    console.log('✅ 存在しないファイルの検証: 不合格（想定通り）');

    // -------------------------------------------------------------------------
    // 3. runVideoAutomation の結合テスト (状態・レジューム)
    // -------------------------------------------------------------------------
    console.log('\n--- 3. runVideoAutomation のテスト (状態・レジューム) ---');

    const mockStoryData = {
      id: 'test_book',
      title: 'テスト絵本',
      scenes: [
        { id: 'scene1', text: 'シーン1テキスト', is_video: true, video_prompt: 'prompt 1' },
        { id: 'scene2', text: 'シーン2テキスト', is_video: false }, // 動画化対象外
        { id: 'scene3', text: 'シーン3テキスト', is_video: true, video_prompt: 'prompt 3' }
      ]
    };

    const mockStatePath = path.join(testTmpDir, 'generation_state.json');
    const mockVideosDir = path.join(testTmpDir, 'videos');

    // 既に scene1 が完了している状態の state.json を事前作成
    const preExistingState = {
      book_id: 'test_book',
      completed_scenes: {
        scene1: {
          status: 'completed',
          imagePath: './assets/test_book/images/scene1.png',
          videoPath: './assets/test_book/videos/scene1.mp4',
          timestamp: new Date().toISOString()
        }
      }
    };
    fs.mkdirSync(path.dirname(mockStatePath), { recursive: true });
    fs.writeFileSync(mockStatePath, JSON.stringify(preExistingState, null, 2), 'utf8');

    // 静止画フォールバック [s] の入力をシミュレートする stdin
    const mockStdin = new PassThrough();
    const mockStdout = new PassThrough();

    // 出力監視
    let stdoutBuffer = '';
    mockStdout.on('data', (data) => {
      stdoutBuffer += data.toString();
    });

    // 待機テストの非同期実行
    // scene1 はレジュームでスキップされ、scene3 に入る。
    // scene3 に入った後、300ms後に `s\n` (スキップ) を stdin に流し込んで進める
    setTimeout(() => {
      mockStdin.write('s\n');
    }, 300);

    const finalState = await runVideoAutomation('test_book', mockStoryData, {
      interval: 100, // 高速ポーリング (100ms)
      interactive: true,
      stdin: mockStdin,
      stdout: mockStdout,
      statePath: mockStatePath,
      videosDir: mockVideosDir,
      rootDir: testTmpDir
    });

    assert.ok(finalState.completed_scenes.scene1, 'scene1は完了状態で引き継がれているべき');
    assert.strictEqual(finalState.completed_scenes.scene1.status, 'completed');
    assert.ok(finalState.completed_scenes.scene3, 'scene3はスキップで完了しているべき');
    assert.strictEqual(finalState.completed_scenes.scene3.status, 'skipped');
    assert.strictEqual(finalState.completed_scenes.scene3.videoPath, '', 'スキップされた動画パスは空であるべき');

    console.log('✅ レジューム & スキップフォールバック対話: 合格');

    // -------------------------------------------------------------------------
    // 4. runVideoAutomation 自動ポーリング & 静定判定テスト
    // -------------------------------------------------------------------------
    console.log('\n--- 4. runVideoAutomation 自動ポーリング & 静定判定テスト ---');

    // 状態を初期化
    fs.writeFileSync(mockStatePath, JSON.stringify({ book_id: 'test_book', completed_scenes: {} }), 'utf8');
    
    // シーン1の動画配置をシミュレート
    // 100ms後に 10バイトでファイルを作成
    // 200ms後に 20バイトにサイズを拡張
    // その後はサイズ変更なし (静定)
    const targetFilePath = path.join(mockVideosDir, 'scene1.mp4');
    
    // あらかじめ videos ディレクトリを作っておく
    if (!fs.existsSync(mockVideosDir)) {
      fs.mkdirSync(mockVideosDir, { recursive: true });
    }
    if (fs.existsSync(targetFilePath)) {
      fs.unlinkSync(targetFilePath);
    }

    setTimeout(() => {
      // 1回目のファイル作成 (サイズ不足 or 書き込み中)
      fs.writeFileSync(targetFilePath, Buffer.alloc(10));
    }, 150);

    setTimeout(() => {
      // 2回目の書き込み (サイズ変更)
      fs.writeFileSync(targetFilePath, Buffer.alloc(30));
    }, 300);

    setTimeout(() => {
      // 3回目の書き込み (検証に通る正常な最小MP4に上書き)
      const validBuf = Buffer.alloc(64);
      validBuf.writeUInt32BE(16, 0);
      validBuf.write('ftyp', 4);
      validBuf.write('moov', 36);
      fs.writeFileSync(targetFilePath, validBuf);
    }, 450);

    // テスト対象ストーリー (scene1 のみ動画化)
    const singleSceneStory = {
      id: 'test_book',
      title: 'テスト絵本',
      scenes: [
        { id: 'scene1', text: 'シーン1テキスト', is_video: true, video_prompt: 'prompt 1' }
      ]
    };

    const finalStatePolling = await runVideoAutomation('test_book', singleSceneStory, {
      interval: 100, // 100msごとに監視
      interactive: false, // 対話なし
      statePath: mockStatePath,
      videosDir: mockVideosDir,
      rootDir: testTmpDir
    });

    assert.ok(finalStatePolling.completed_scenes.scene1, 'scene1が自動ポーリングで完了しているべき');
    assert.strictEqual(finalStatePolling.completed_scenes.scene1.status, 'completed');
    assert.strictEqual(finalStatePolling.completed_scenes.scene1.videoPath, './assets/test_book/videos/scene1.mp4');

    console.log('✅ 自動ポーリング & 静定判定 & 正常動画検知: 合格');

    // -------------------------------------------------------------------------
    // 5. runVideoAutomation 強制チェック [f] インタラクションテスト
    // -------------------------------------------------------------------------
    console.log('\n--- 5. runVideoAutomation 強制チェック [f] のテスト ---');

    fs.writeFileSync(mockStatePath, JSON.stringify({ book_id: 'test_book', completed_scenes: {} }), 'utf8');
    if (fs.existsSync(targetFilePath)) {
      fs.unlinkSync(targetFilePath);
    }

    const mockStdinF = new PassThrough();
    const mockStdoutF = new PassThrough();

    // 待機開始後、150ms 後に正常ファイルを配置し、直後に 'f\n' を流し込んで強制検証させる
    setTimeout(() => {
      const validBuf = Buffer.alloc(64);
      validBuf.writeUInt32BE(16, 0);
      validBuf.write('ftyp', 4);
      validBuf.write('moov', 36);
      fs.writeFileSync(targetFilePath, validBuf);
    }, 150);

    setTimeout(() => {
      mockStdinF.write('f\n');
    }, 300);

    const finalStateF = await runVideoAutomation('test_book', singleSceneStory, {
      interval: 1000, // 長いポーリングにしておき、強制チェックで終わらせる
      interactive: true,
      stdin: mockStdinF,
      stdout: mockStdoutF,
      statePath: mockStatePath,
      videosDir: mockVideosDir,
      rootDir: testTmpDir
    });

    assert.ok(finalStateF.completed_scenes.scene1, 'scene1が強制チェックで完了しているべき');
    assert.strictEqual(finalStateF.completed_scenes.scene1.status, 'completed');

    console.log('✅ 強制チェック[f]による即時検証: 合格');

    // -------------------------------------------------------------------------
    // 6. runVideoAutomation 安全終了 [q] インタラクションテスト
    // -------------------------------------------------------------------------
    console.log('\n--- 6. runVideoAutomation 安全終了 [q] のテスト ---');

    fs.writeFileSync(mockStatePath, JSON.stringify({ book_id: 'test_book', completed_scenes: {} }), 'utf8');
    if (fs.existsSync(targetFilePath)) {
      fs.unlinkSync(targetFilePath);
    }

    const mockStdinQ = new PassThrough();
    const mockStdoutQ = new PassThrough();

    // 待機開始後、150ms 後に 'q\n' を流し込んで安全終了させる
    setTimeout(() => {
      mockStdinQ.write('q\n');
    }, 150);

    const finalStateQ = await runVideoAutomation('test_book', singleSceneStory, {
      interval: 1000,
      interactive: true,
      stdin: mockStdinQ,
      stdout: mockStdoutQ,
      statePath: mockStatePath,
      videosDir: mockVideosDir,
      rootDir: testTmpDir
    });

    // 完了していないため、completed_scenes に scene1 は含まれないはず
    assert.ok(!finalStateQ.completed_scenes.scene1, 'scene1は完了していないはず');

    // state.json が保存されていることを確認
    const savedState = JSON.parse(fs.readFileSync(mockStatePath, 'utf8'));
    assert.ok(!savedState.completed_scenes.scene1, '保存された状態にもscene1は含まれないはず');
    
    console.log('✅ 安全終了[q]による途中保存と終了: 合格');

    // -------------------------------------------------------------------------
    // 7. 非同期例外時のエラーハンドリングとタイマーリーク防止のテスト
    // -------------------------------------------------------------------------
    console.log('\n--- 7. runVideoAutomation 非同期例外発生テスト ---');
    fs.writeFileSync(mockStatePath, JSON.stringify({ book_id: 'test_book', completed_scenes: {} }), 'utf8');
    
    // 検知のためにファイルを配置
    fs.writeFileSync(targetFilePath, Buffer.alloc(10));

    // fs.statSync を一時的にモックして、エラーを投げさせる
    const originalStatSync = fs.statSync;
    fs.statSync = (p) => {
      if (p.includes('scene1.mp4')) {
        throw new Error('MOCK_FS_ERROR');
      }
      return originalStatSync(p);
    };

    let errorThrown = null;
    try {
      await runVideoAutomation('test_book', singleSceneStory, {
        interval: 50, // 高速
        interactive: false,
        statePath: mockStatePath,
        videosDir: mockVideosDir,
        rootDir: testTmpDir
      });
    } catch (err) {
      errorThrown = err;
    } finally {
      // 元に戻す
      fs.statSync = originalStatSync;
    }

    assert.ok(errorThrown, '非同期例外が発生した場合はPromiseが拒否されるべき');
    assert.strictEqual(errorThrown.message, 'MOCK_FS_ERROR', '例外メッセージが一致すること');
    console.log('✅ 非同期例外の捕捉とプロセス即死防止: 合格');

    // -------------------------------------------------------------------------
    // 8. SIGINT割り込み時の状態安全保存のテスト
    // -------------------------------------------------------------------------
    console.log('\n--- 8. runVideoAutomation SIGINT 割り込みテスト ---');
    
    const preState = {
      book_id: 'test_book',
      completed_scenes: {
        'dummy_scene': { status: 'completed', videoPath: 'dummy.mp4' }
      }
    };
    fs.writeFileSync(mockStatePath, JSON.stringify(preState, null, 2), 'utf8');
    if (fs.existsSync(targetFilePath)) {
      fs.unlinkSync(targetFilePath);
    }

    // 150ms 後に SIGINT シグナルをプロセスに送信する
    setTimeout(() => {
      process.emit('SIGINT');
    }, 150);

    const finalStateSigint = await runVideoAutomation('test_book', singleSceneStory, {
      interval: 1000,
      interactive: false,
      statePath: mockStatePath,
      videosDir: mockVideosDir,
      rootDir: testTmpDir
    });

    // 完了していないため、completed_scenes に scene1 は含まれないはず
    assert.ok(!finalStateSigint.completed_scenes.scene1, 'scene1は完了していないはず');

    // 状態が保存されていることを確認
    const finalSavedState = JSON.parse(fs.readFileSync(mockStatePath, 'utf8'));
    assert.ok(finalSavedState.completed_scenes.dummy_scene, '既存の状態が失われずに保存されていること');
    console.log('✅ SIGINT時の状態安全保存とクリーンアップ: 合格');

  } catch (error) {
    console.error('❌ テスト中にエラーが発生しました:');
    console.error(error);
    process.exit(1);
  } finally {
    // クリーンアップ
    cleanupTestAssets();
    console.log('\n🧹 テスト用一時ファイルのクリーンアップ完了。');
  }

  console.log('\n🎉 全てのテストケースが正常に終了しました！');
  process.exit(0);
}

main();
