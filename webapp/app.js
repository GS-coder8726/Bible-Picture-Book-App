const books = [
    {
        id: "paradise-lost",
        title: "しつらくえん",
        cover: "./assets/paradise-lost/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "しつらくえん<br>〜かみさまとのおやくそく〜", imagePath: "./assets/paradise-lost/images/シーン0−1.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "エデンの そのは とても きれいな ところでした。", imagePath: "./assets/paradise-lost/images/シーン1−1.jpeg", videoPath: "./assets/paradise-lost/videos/シーン1−1.mp4", placeholderImage: "..." },
            { id: "1-2", text: "おはなが さいていて、<br>どうぶつたちが あそんでいます。", imagePath: "./assets/paradise-lost/images/シーン1−2.jpeg", videoPath: "./assets/paradise-lost/videos/シーン1−2.mp4", placeholderImage: "..." },
            { id: "1-3", text: "アダムとエバは、いつも なかよしです。", imagePath: "./assets/paradise-lost/images/シーン1−3.jpeg", placeholderImage: "..." },
            { id: "1-4", text: "かみさまも、ふたりを みて<br>にこにこ していました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "2-1", text: "かみさまは、ふたりに おやくそくを しました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "2-2", text: "「あの きの みだけは、<br>たべては いけませんよ」", imagePath: "./assets/paradise-lost/images/シーン2−2.jpeg", videoPath: "./assets/paradise-lost/videos/シーン2−2.mp4", placeholderImage: "..." },
            { id: "2-3", text: "アダムとエバは、「はい」と おへんじ しました。", imagePath: "./assets/paradise-lost/images/シーン2−3.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "ふたりは まいにち、たのしく くらしていました。", imagePath: "./assets/paradise-lost/images/シーン2−4.jpeg", videoPath: "./assets/paradise-lost/videos/シーン2−4.mp4", placeholderImage: "..." },
            { id: "3-1", text: "あるひ、へびが エバに はなしかけました。", imagePath: "./assets/paradise-lost/images/シーン3−1.jpeg", videoPath: "./assets/paradise-lost/videos/シーン3−1.mp4", placeholderImage: "..." },
            { id: "3-2", text: "「あの きの みは、とても おいしいよ」", imagePath: "./assets/paradise-lost/images/シーン3−2.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "エバは、きの みを じっと みつめました。", imagePath: "./assets/paradise-lost/images/シーン3−3.jpeg", videoPath: "./assets/paradise-lost/videos/シーン3−3.mp4", placeholderImage: "..." },
            { id: "3-4", text: "どんな あじが するのかな？", imagePath: "./assets/paradise-lost/images/シーン3−4.jpeg", placeholderImage: "..." },
            { id: "4-1", text: "エバは、きの みを ひとつ とりました。", imagePath: "./assets/paradise-lost/images/シーン4−1.jpeg", videoPath: "./assets/paradise-lost/videos/シーン4−1.mp4", placeholderImage: "..." },
            { id: "4-2", text: "そして、ぱくりと たべてしまいました。", imagePath: "./assets/paradise-lost/images/シーン4−2.jpeg", placeholderImage: "..." },
            { id: "4-3", text: "「アダムも たべてみて」", imagePath: "./assets/paradise-lost/images/シーン4−3.jpeg", videoPath: "./assets/paradise-lost/videos/シーン4−3.mp4", placeholderImage: "..." },
            { id: "4-4", text: "アダムも、きの みを ぱくり。", imagePath: "./assets/paradise-lost/images/シーン4−4.jpeg", placeholderImage: "..." },
            { id: "4-5", text: "そのとき、ふたりは どきっ！と しました。", imagePath: "./assets/paradise-lost/images/シーン4−5.jpeg", videoPath: "./assets/paradise-lost/videos/シーン4−5.mp4", placeholderImage: "..." },
            { id: "5-1", text: "かみさまとの おやくそくを<br>やぶってしまったのです。", imagePath: "./assets/paradise-lost/images/シーン5−1.jpeg", placeholderImage: "..." },
            { id: "5-2", text: "ふたりは、こわくなって かくれました。", imagePath: "./assets/paradise-lost/images/シーン5−2.jpeg", videoPath: "./assets/paradise-lost/videos/シーン5−2.mp4", placeholderImage: "..." },
            { id: "5-3", text: "「アダム、エバ、どこに いるのですか？」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "5-4", text: "ふたりは、ごめんなさいと ないています。", imagePath: "./assets/paradise-lost/images/シーン5−4.jpeg", videoPath: "./assets/paradise-lost/videos/シーン5−4.mp4", placeholderImage: "..." },
            { id: "5-5", text: "かみさまは、とても かなしそうでした。", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン5−1.jpeg" },
            { id: "6-1", text: "かみさまは、ふたりに かわの おようふくを<br>くれました。", imagePath: "./assets/paradise-lost/images/シーン6−1.jpeg", videoPath: "./assets/paradise-lost/videos/シーン6−1.mp4", placeholderImage: "..." },
            { id: "6-2", text: "ふたりを まもる ためです。", imagePath: "./assets/paradise-lost/images/シーン6−2.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "アダムとエバは、<br>エデンの そのを でることに なりました。", imagePath: "./assets/paradise-lost/images/シーン6−3.jpeg", videoPath: "./assets/paradise-lost/videos/シーン6−3.mp4", placeholderImage: "..." },
            { id: "6-4", text: "でも、かみさまは<br>ずっと ふたりを みまもっています。", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン5−1.jpeg" }
        ]
    },
    {
        id: "cain_and_abel",
        title: "カインと アベル",
        cover: "./assets/cain_and_abel/videos/シーン0−1.mp4",
        scenes: [
            { id: "1-1", text: "アダムとエバに、ふたりの子どもが うまれました。", imagePath: "./assets/cain_and_abel/images/シーン1−1.jpeg", placeholderImage: "..." },
            { id: "1-2", text: "お兄ちゃんは カイン。<br>おとうとは アベルです。", imagePath: "./assets/cain_and_abel/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "ふたりは、すくすくと 大きくなりました。", imagePath: "./assets/cain_and_abel/videos/シーン1−3.mp4", placeholderImage: "..." },
            { id: "1-4", text: "お日さまの 下で、元気に あそびます。", imagePath: "./assets/cain_and_abel/videos/シーン1−4.mp4", placeholderImage: "..." },
            { id: "2-1", text: "大人になった カインは、畑で おやさいを そだてました。", imagePath: "./assets/cain_and_abel/images/シーン2−1.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "いっしょうけんめい、土を たがやします。", imagePath: "./assets/cain_and_abel/videos/シーン2−2.mp4", placeholderImage: "..." },
            { id: "2-3", text: "アベルは、ひつじの お世話を しました。", imagePath: "./assets/cain_and_abel/images/シーン2−3.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "やさしく、ひつじたちを まもります。", imagePath: "./assets/cain_and_abel/videos/シーン2−4.mp4", placeholderImage: "..." },
            { id: "3-1", text: "ある日、ふたりは 神様に おくりものを することに しました。", imagePath: "./assets/cain_and_abel/images/シーン3−1.jpeg", placeholderImage: "..." },
            { id: "3-2", text: "カインは、畑で とれた おやさいを もってきました。", imagePath: "./assets/cain_and_abel/videos/シーン3−2.mp4", placeholderImage: "..." },
            { id: "3-3", text: "アベルは、たいせつに 育てた ひつじの 赤ちゃんを もってきました。", imagePath: "./assets/cain_and_abel/videos/シーン3−3.mp4", placeholderImage: "..." },
            { id: "3-4", text: "ふたりとも、神様に 「ありがとう」を つたえます。", imagePath: "./assets/cain_and_abel/images/シーン3−4.jpeg", placeholderImage: "..." },
            { id: "4-1", text: "神様は、ふたりの おくりものを 見ました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "神様は、アベルの ひつじを とても よろこびました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "4-3", text: "アベルの 心には、神様への やさしい 気もちが いっぱい だったからです。", imagePath: "./assets/cain_and_abel/videos/シーン4−3.mp4", placeholderImage: "..." },
            { id: "4-4", text: "でも、カインの おやさいは、あまり よろこばれませんでした。", imagePath: "./assets/cain_and_abel/images/シーン4−4.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "カインは、とても くやしくて、怒って しまいました。", imagePath: "./assets/cain_and_abel/videos/シーン5−1.mp4", placeholderImage: "..." },
            { id: "5-2", text: "お顔が まっかに なって、下を むいて います。", imagePath: "./assets/cain_and_abel/images/シーン5−2.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "神様は 言いました。<br>「カイン、どうして 怒って いるの？」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "5-4", text: "でも、カインは 神様の お話を 聞きませんでした。", imagePath: "./assets/cain_and_abel/images/シーン5−4.jpeg", placeholderImage: "..." },
            { id: "5-5", text: "怒った カインは、とうとう アベルを 傷つけて しまいました。", imagePath: "./assets/cain_and_abel/videos/シーン5−5.mp4", placeholderImage: "..." },
            { id: "6-1", text: "神様は、とても かなしく なりました。<br>「アベルは どこに いるの？」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "カインは、とおくへ 行かなければ ならなく なりました。", imagePath: "./assets/cain_and_abel/images/シーン6−2.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "カインは なきました。<br>「だれかに いじめられたら、どうしよう。」", imagePath: "./assets/cain_and_abel/images/シーン6−3.jpeg", placeholderImage: "..." },
            { id: "6-4", text: "神様は、カインに しるしを つけました。<br>「だいじょうぶ、わたしが 守るよ。」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "6-5", text: "カインは、神様に 守られて、新しい ところへ しゅっぱつ しました。", imagePath: "./assets/cain_and_abel/videos/シーン6−5.mp4", placeholderImage: "..." }
        ]
    },
    {
        id: "noahs_ark",
        title: "ノアのはこぶね",
        cover: "./assets/noahs_ark/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", is_video: true, text: "ノアのはこぶね", imagePath: "./assets/noahs_ark/images/シーン0−1.jpeg", videoPath: "./assets/noahs_ark/videos/シーン0−1.mp4" },
            
            // セクション1: かみさまとノア
            { id: "1-1", is_video: true, text: "むかしむかし、ノアという おじいさんが いました。", imagePath: "./assets/noahs_ark/images/シーン1−1.jpeg", videoPath: "./assets/noahs_ark/videos/シーン1−1.mp4" },
            { id: "1-2", is_video: false, text: "ノアは とても やさしくて、かみさまが だいすきでした。", imagePath: "./assets/noahs_ark/images/シーン1−2.jpeg" },
            { id: "1-3", is_video: false, text: "かみさまは、ノアに いいました。<br>「おおきな ふねを つくりなさい」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg" }, // 神様流用
            { id: "1-4", is_video: false, text: "ノアは かみさまの おやくそくを まもって、ふねを つくりはじめました。", imagePath: "./assets/noahs_ark/images/シーン1−4.jpeg" },
            
            // セクション2: ふねをつくる
            { id: "2-1", is_video: true, text: "トントン、カンカン。<br>ノアと かぞくは、いっしょうけんめい きを きります。", imagePath: "./assets/noahs_ark/images/シーン2−1.jpeg", videoPath: "./assets/noahs_ark/videos/シーン2−1.mp4" },
            { id: "2-2", is_video: false, text: "まちの ひとたちは わらったけれど、ノアは とても おおきな ふねを つくりました。", imagePath: "./assets/noahs_ark/images/シーン2−2.jpeg" },
            { id: "2-3", is_video: false, text: "とうとう、はこぶねが かんせいしました！", imagePath: "./assets/noahs_ark/images/シーン2−3.jpeg" },
            
            // セクション3: どうぶつたちがやってくる
            { id: "3-1", is_video: false, text: "ふねが かんせいすると、ふしぎな ことが おきました。", imagePath: "./assets/noahs_ark/images/シーン3−1.jpeg" },
            { id: "3-2", is_video: true, text: "もりから たくさんの どうぶつたちが やってきました！", imagePath: "./assets/noahs_ark/images/シーン3−2.jpeg", videoPath: "./assets/noahs_ark/videos/シーン3−2.mp4" },
            { id: "3-3", is_video: true, text: "ゾウさん、ライオンさん、ウサギさん。<br>みんな ２ひき ずつです。", imagePath: "./assets/noahs_ark/images/シーン3−3.jpeg", videoPath: "./assets/noahs_ark/videos/シーン3−3.mp4" },
            { id: "3-4", is_video: true, text: "チュンチュン、ことりたちも とんで きました。", imagePath: "./assets/noahs_ark/images/シーン3−4.jpeg", videoPath: "./assets/noahs_ark/videos/シーン3−4.mp4" },
            { id: "3-5", is_video: false, text: "どうぶつたちは じゅんばんに、ふねの なかへ はいります。", imagePath: "./assets/noahs_ark/images/シーン3−5.jpeg" },
            
            // セクション4: おおあめ
            { id: "4-1", is_video: false, text: "どうぶつたちが はいると、ポツリポツリと あめが ふってきました。", imagePath: "./assets/noahs_ark/images/シーン4−1.jpeg" },
            { id: "4-2", is_video: true, text: "あめは だんだん つよくなり、ザーザーふりに なりました。", imagePath: "./assets/noahs_ark/images/シーン4−2.jpeg", videoPath: "./assets/noahs_ark/videos/シーン4−2.mp4" },
            { id: "4-3", is_video: false, text: "おおきな みずたまりが できて、うみの ようです。", imagePath: "./assets/noahs_ark/images/シーン4−3.jpeg" },
            { id: "4-4", is_video: true, text: "ふねは、チャプチャプと みずに うかびました。", imagePath: "./assets/noahs_ark/images/シーン4−4.jpeg", videoPath: "./assets/noahs_ark/videos/シーン4−4.mp4" },
            { id: "4-5", is_video: false, text: "かみさまが、ノアたちを まもって くれています。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg" }, // 神様流用
            
            // セクション5: あめがやむ
            { id: "5-1", is_video: true, text: "ずーっと ふっていた あめが、ようやく やみました。", imagePath: "./assets/noahs_ark/images/シーン5−1.jpeg", videoPath: "./assets/noahs_ark/videos/シーン5−1.mp4" },
            { id: "5-2", is_video: false, text: "ノアは、しろい ハトを おそらに とばしました。", imagePath: "./assets/noahs_ark/images/シーン5−2.jpeg" },
            { id: "5-3", is_video: true, text: "ハトは、オリーブの はっぱを くわえて もどってきました。", imagePath: "./assets/noahs_ark/images/シーン5−3.jpeg", videoPath: "./assets/noahs_ark/videos/シーン5−3.mp4" },
            { id: "5-4", is_video: false, text: "「やったあ！ じめんが みえたぞ！」<br>みんな おおよろこびです。", imagePath: "./assets/noahs_ark/images/シーン5−4.jpeg" },
            
            // セクション6: にじのおやくそく
            { id: "6-1", is_video: true, text: "ノアと どうぶつたちは、ふねから そとへ でました。", imagePath: "./assets/noahs_ark/images/シーン6−1.jpeg", videoPath: "./assets/noahs_ark/videos/シーン6−1.mp4" },
            { id: "6-2", is_video: false, text: "おひさまが キラキラと、みんなを てらします。", imagePath: "./assets/noahs_ark/images/シーン6−2.jpeg" },
            { id: "6-3", is_video: true, text: "おそらに、とても おおきな なないろの にじが かかりました。", imagePath: "./assets/noahs_ark/images/シーン6−3.jpeg", videoPath: "./assets/noahs_ark/videos/シーン6−3.mp4" },
            { id: "6-4", is_video: false, text: "「これは、もう ずっと みんなを まもる という おやくそくだよ」", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg" }, // 神様流用（虹関連の別の神様画像があればそちら、今回は5-1を使用）
            { id: "6-5", is_video: false, text: "ノアたちは かみさまに「ありがとう」と いいました。", imagePath: "./assets/noahs_ark/images/シーン6−5.jpeg" }
        ]
    },
    {
        id: "abrahams_departure",
        title: "アブラハムのたびだち",
        cover: "./assets/abrahams_departure/images/シーン0-1.jpeg",
        scenes: [
            { id: "0-1", text: "アブラハムのたびだち", imagePath: "./assets/abrahams_departure/images/シーン0-1.jpeg" },
            { id: "1-1", text: "むかしむかし、アブラムという おじいさんが いました。", imagePath: "./assets/abrahams_departure/images/シーン1-1.jpeg" },
            { id: "1-2", text: "かみさまは アブラムに いいました。<br>「あなたの うまれた くにを はなれなさい。」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "1-3", text: "「わたしが みせる あたらしい 土地へ いきなさい。」", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg" },
            { id: "1-4", text: "「そうすれば、あなたを おおきな くにに します。」", imagePath: "./assets/abrahams_departure/images/シーン1-4.jpeg" },
            { id: "2-1", text: "アブラムは、かみさまの ことばを しんじました。", imagePath: "./assets/abrahams_departure/images/シーン2-1.jpeg" },
            { id: "2-2", text: "おくさんの サライに いいました。<br>「かみさまが おっしゃる 土地へ いこう！」", imagePath: "./assets/abrahams_departure/images/シーン2-2.jpeg" },
            { id: "2-3", text: "おいの ロトも いっしょに いくことに なりました。", imagePath: "./assets/abrahams_departure/images/シーン2-3.jpeg" },
            { id: "2-4", text: "みんなで にもつを まとめて、たびの じゅんびを します。", imagePath: "./assets/abrahams_departure/images/シーン2-4.jpeg" },
            { id: "3-1", text: "たくさんの ひつじや うしも いっしょです。", imagePath: "./assets/abrahams_departure/images/シーン3-1.jpeg" },
            { id: "3-2", text: "アブラムたちは、とおくを めざして あるきだしました。", imagePath: "./assets/abrahams_departure/images/シーン3-2.jpeg" },
            { id: "3-3", text: "どこへ いくのか、まだ わかりません。", imagePath: "./assets/abrahams_departure/images/シーン3-3.jpeg" },
            { id: "3-4", text: "でも、アブラムは かみさまを しんじて いました。", imagePath: "./assets/abrahams_departure/images/シーン3-4.jpeg" },
            { id: "3-5", text: "てんとを はって、よるは ぐっすり ねむりました。", imagePath: "./assets/abrahams_departure/images/シーン3-5.jpeg" },
            { id: "4-1", text: "あつい さばくの みちも ありました。", imagePath: "./assets/abrahams_departure/images/シーン4-1.jpeg" },
            { id: "4-2", text: "おおきな やまも こえました。", imagePath: "./assets/abrahams_departure/images/シーン4-2.jpeg" },
            { id: "4-3", text: "かみさまは いつも アブラムたちを まもって くれました。", imagePath: "./assets/abrahams_departure/images/シーン4-3.jpeg" },
            { id: "4-4", text: "ときどき、みずが なくて こまった ことも ありました。", imagePath: "./assets/abrahams_departure/images/シーン4-4.jpeg" },
            { id: "5-1", text: "ある よる、かみさまが アブラムに いいました。<br>「よぞらの ほしを みてごらん。」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "5-2", text: "「あなたの こどもたちは、この ほしのように たくさんになるよ。」", imagePath: "./assets/abrahams_departure/images/シーン5-2.jpeg" },
            { id: "5-3", text: "アブラムは、おどろいて ほしぞらを みあげました。", imagePath: "./assets/abrahams_departure/images/シーン5-3.jpeg" },
            { id: "5-4", text: "「かみさま、ありがとうございます。」", imagePath: "./assets/abrahams_departure/images/シーン5-4.jpeg" },
            { id: "6-1", text: "ながい ながい たびを つづけました。", imagePath: "./assets/abrahams_departure/images/シーン6-1.jpeg" },
            { id: "6-2", text: "そして ついに、カナンの 土地に つきました。", imagePath: "./assets/abrahams_departure/images/シーン6-2.jpeg" },
            { id: "6-3", text: "「ここが、かみさまの やくそくの 土地だ！」", imagePath: "./assets/abrahams_departure/images/シーン6-3.jpeg" },
            { id: "6-4", text: "アブラムは、かみさまに ありがとうのおいのりを しました。", imagePath: "./assets/abrahams_departure/images/シーン6-4.jpeg" }
        ]
    },
    {
        id: "isaacs_birth",
        title: "イサクの誕生",
        cover: "./assets/isaacs_birth/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "イサクのたんじょう", imagePath: "./assets/isaacs_birth/images/シーン0−1.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン0−1.mp4", placeholderImage: "" },
            { id: "1-1", text: "むかしむかし、アブラハムと サラという ふうふが いました。", imagePath: "./assets/isaacs_birth/images/シーン1−1.jpeg", is_video: false, placeholderImage: "" },
            { id: "1-2", text: "ふたりは とても なかよしでしたが、<br>こどもが いませんでした。", imagePath: "./assets/isaacs_birth/images/シーン1−2.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン1−2.mp4", placeholderImage: "" },
            { id: "1-3", text: "「わたしたちにも、あかちゃんが ほしいね」", imagePath: "./assets/isaacs_birth/images/シーン1−3.jpeg", is_video: false, placeholderImage: "" },
            { id: "1-4", text: "おじいさんと おばあさんに なっても、<br>ずっと おいのりしていました。", imagePath: "./assets/isaacs_birth/images/シーン1−4.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン1−4.mp4", placeholderImage: "" },
            { id: "2-1", text: "あるひ、かみさまが アブラハムに はなしかけました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "2-2", text: "「そらの ほしを みてごらん。<br>あなたの こどもは、あの ほしのように おおくなるよ」", imagePath: "./assets/isaacs_birth/images/シーン2−2.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン2−2.mp4", placeholderImage: "" },
            { id: "2-3", text: "アブラハムは、かみさまの ことばを しんじました。", imagePath: "./assets/isaacs_birth/images/シーン2−3.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン2−3.mp4", placeholderImage: "" },
            { id: "2-4", text: "でも、サラは 「ほんとうかな？」と ふしぎに おもいました。", imagePath: "./assets/isaacs_birth/images/シーン2−4.jpeg", is_video: false, placeholderImage: "" },
            { id: "3-1", text: "あつい なつの ひ、さんにんの おきゃくさまが やってきました。", imagePath: "./assets/isaacs_birth/images/シーン3−1.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン3−1.mp4", placeholderImage: "" },
            { id: "3-2", text: "アブラハムは、おいしい パンと ミルクで<br>おもてなしを しました。", imagePath: "./assets/isaacs_birth/images/シーン3−2.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン3−2.mp4", placeholderImage: "" },
            { id: "3-3", text: "おきゃくさまは、「らいねんの いまごろ、<br>サラに あかちゃんが うまれるよ」と いいました。", imagePath: "./assets/isaacs_birth/images/シーン3−3.jpeg", is_video: false, placeholderImage: "" },
            { id: "3-4", text: "それは、かみさまからの おしらせでした。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-1", text: "テントの なかで きいていた サラは、<br>おもわず わらってしまいました。", imagePath: "./assets/isaacs_birth/images/シーン4−1.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン4−1.mp4", placeholderImage: "" },
            { id: "4-2", text: "「こんなに おばあさんなのに、あかちゃんが うまれるはず ないわ」", imagePath: "./assets/isaacs_birth/images/シーン4−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-3", text: "かみさまは、「なぜ わらうのですか。<br>かみさまに できない ことは ありません」と いいました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-4", text: "サラは びっくりして、「わらっていません」と いってしまいました。", imagePath: "./assets/isaacs_birth/images/シーン4−4.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-1", text: "そして らいねんになり、やくそくの 季節が きました。", imagePath: "./assets/isaacs_birth/images/シーン5−1.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-2", text: "なんと、ほんとうに サラに おとこのこが うまれたのです！", imagePath: "./assets/isaacs_birth/images/シーン5−2.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン5−2.mp4", placeholderImage: "" },
            { id: "5-3", text: "ふたりは、あかちゃんを ぎゅっと だきしめました。", imagePath: "./assets/isaacs_birth/images/シーン5−3.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-4", text: "なまえは「イサク」と なづけられました。", imagePath: "./assets/isaacs_birth/images/シーン5−4.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン5−4.mp4", placeholderImage: "" },
            { id: "5-5", text: "イサクとは、「わらい」という いみです。", imagePath: "./assets/isaacs_birth/images/シーン5−5.jpeg", is_video: false, placeholderImage: "" },
            { id: "6-1", text: "テントの まわりは、みんなの えがおで いっぱいになりました。", imagePath: "./assets/isaacs_birth/images/シーン6−1.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン6−1.mp4", placeholderImage: "" },
            { id: "6-2", text: "「かみさま、すばらしい おくりものを ありがとうございます」", imagePath: "./assets/isaacs_birth/images/シーン6−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "6-3", text: "サラは うれしくて、もういちど わらいました。", imagePath: "./assets/isaacs_birth/images/シーン6−3.jpeg", is_video: true, videoPath: "./assets/isaacs_birth/videos/シーン6−3.mp4", placeholderImage: "" },
            { id: "6-4", text: "かみさまの やくそくは、かならず かなうのです。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", is_video: false, placeholderImage: "" }
        ]
    },
    {
        id: "abraham_and_isaac",
        title: "アブラハムとイサク",
        cover: "./assets/abraham_and_isaac/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "アブラハムとイサク", imagePath: "./assets/abraham_and_isaac/images/シーン0−1.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "むかしむかし、アブラハムという おじいさんが いました。", imagePath: "./assets/abraham_and_isaac/images/シーン1−1.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン1−1.mp4", placeholderImage: "..." },
            { id: "1-2", text: "おばあさんの サラと、なかよく くらして いました。", imagePath: "./assets/abraham_and_isaac/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "ふたりには、イサクという かわいい おとこのこが いました。", imagePath: "./assets/abraham_and_isaac/images/シーン1−3.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン1−3.mp4", placeholderImage: "..." },
            { id: "1-4", text: "イサクは、かみさまから もらった、とても だいじな たからものです。", imagePath: "./assets/abraham_and_isaac/images/シーン1−4.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "あるひ、かみさまが アブラハムに おはなしを しました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "「アブラハムよ。あなたの だいじな イサクを、わたしに ささげなさい。」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "2-3", text: "アブラハムは とても びっくりしましたが、かみさまを しんじて いました。", imagePath: "./assets/abraham_and_isaac/images/シーン2−3.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン2−3.mp4", placeholderImage: "..." },
            { id: "3-1", text: "つぎのあさ、アブラハムと イサクは おやまへ しゅっぱつ しました。", imagePath: "./assets/abraham_and_isaac/images/シーン3−1.jpeg", placeholderImage: "..." },
            { id: "3-2", text: "イサクは たきぎを しょって、てくてく あるきます。", imagePath: "./assets/abraham_and_isaac/images/シーン3−2.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン3−2.mp4", placeholderImage: "..." },
            { id: "3-3", text: "「おとうさん、ひ と たきぎは あるけれど、ささげる ひつじは どこ？」", imagePath: "./assets/abraham_and_isaac/images/シーン3−3.jpeg", placeholderImage: "..." },
            { id: "3-4", text: "「かみさまが、きっと よういして くださるよ」と アブラハムは こたえました。", imagePath: "./assets/abraham_and_isaac/images/シーン3−4.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン3−4.mp4", placeholderImage: "..." },
            { id: "4-1", text: "おやまの うえに つきました。", imagePath: "./assets/abraham_and_isaac/images/シーン4−1.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン4−1.mp4", placeholderImage: "..." },
            { id: "4-2", text: "アブラハムは、いしを つんで さいだんを つくりました。", imagePath: "./assets/abraham_and_isaac/images/シーン4−2.jpeg", placeholderImage: "..." },
            { id: "4-3", text: "そのうえに たきぎを ならべて、イサクを のせました。", imagePath: "./assets/abraham_and_isaac/images/シーン4−3.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン4−3.mp4", placeholderImage: "..." },
            { id: "4-4", text: "アブラハムは、かみさまの いうとおりに しようと します。", imagePath: "./assets/abraham_and_isaac/images/シーン4−4.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "そのとき、てんしが おおきな こえで よびました。", imagePath: "./assets/abraham_and_isaac/images/シーン5−1.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン5−1.mp4", placeholderImage: "..." },
            { id: "5-2", text: "「アブラハムよ！ こどもに てを かけてはいけない。」", imagePath: "./assets/abraham_and_isaac/images/シーン5−2.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "「あなたが、かみさまを ほんとうに しんじている ことが わかりました。」", imagePath: "./assets/abraham_and_isaac/images/シーン5−3.jpeg", placeholderImage: "..." },
            { id: "5-4", text: "うしろを ふりむくと、やぶに つのが ひっかかった ひつじが いました。", imagePath: "./assets/abraham_and_isaac/images/シーン5−4.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン5−4.mp4", placeholderImage: "..." },
            { id: "5-5", text: "アブラハムは、イサクの かわりに、その ひつじを かみさまに ささげました。", imagePath: "./assets/abraham_and_isaac/images/シーン5−5.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン5−5.mp4", placeholderImage: "..." },
            { id: "6-1", text: "かみさまは、アブラハムが とても すきに なりました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "「わたしは、あなたを たくさん しゅくふく します。」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "「あなたから、ほしのように たくさんの こどもたちが うまれるでしょう。」", imagePath: "./assets/abraham_and_isaac/images/シーン6−3.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン6−3.mp4", placeholderImage: "..." },
            { id: "6-4", text: "アブラハムと イサクは、にこにこ えがおで おうちへ かえりました。", imagePath: "./assets/abraham_and_isaac/images/シーン6−4.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン6−4.mp4", placeholderImage: "..." },
            { id: "6-5", text: "かみさまの やくそくは、ずっと ずっと つづいて いきます。", imagePath: "./assets/abraham_and_isaac/images/シーン6−5.jpeg", videoPath: "./assets/abraham_and_isaac/videos/シーン6−5.mp4", placeholderImage: "..." }
        ]
    },
    {
        id: "jacob_and_esau_1",
        title: "ヤコブとエサウ①",
        cover: "./assets/jacob_and_esau_1/images/シーン0−1.jpeg",
        scenes: [
            { 
                id: "0-1", 
                text: "ふたごのきょうだい、<br>ヤコブと エサウ。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン0−1.jpeg" 
            },
            { 
                id: "1-1", 
                text: "むかしむかし、イサクと リベカという<br>ふうふが いました。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン1−1.jpeg" 
            },
            { 
                id: "1-2", 
                text: "かみさまは ふたりに<br>あかちゃんを さずけました。", 
                imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg" 
            },
            { 
                id: "1-3", 
                text: "なんと、<br>ふたごの あかちゃんです！", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン1−3.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン1−3.mp4" 
            },
            { 
                id: "1-4", 
                text: "お兄ちゃんは けぶかい エサウ、<br>弟は ヤコブです。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン1−4.jpeg" 
            },
            { 
                id: "2-1", 
                text: "お兄ちゃんの エサウは、<br>そとを はしりまわるのが だいすき。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン2−1.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン2−1.mp4" 
            },
            { 
                id: "2-2", 
                text: "ゆみを もって どうぶつを つかまえる、<br>つよい 男の子です。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン2−2.jpeg" 
            },
            { 
                id: "2-3", 
                text: "弟の ヤコブは、<br>テントの なかで すごすのが だいすき。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン2−3.jpeg" 
            },
            { 
                id: "2-4", 
                text: "おうちで おりょうりや<br>おてつだいを しています。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン2−4.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン2−4.mp4" 
            },
            { 
                id: "3-1", 
                text: "エサウは お兄ちゃんなので、<br>とくべつな おくりものを もらえます。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン3−1.jpeg" 
            },
            { 
                id: "3-2", 
                text: "それは かみさまからの<br>たくさんの しゅくふくです。", 
                imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg" 
            },
            { 
                id: "3-3", 
                text: "ヤコブは、「ぼくも かみさまの<br>しゅくふくが ほしいなぁ」と おもいました。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン3−3.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン3−3.mp4" 
            },
            { 
                id: "4-1", 
                text: "ある日、ヤコブが おいしそうな<br>赤い スープを つくっていました。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン4−1.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン4−1.mp4" 
            },
            { 
                id: "4-2", 
                text: "ぐつぐつ ぐつぐつ、<br>とっても いい においが します。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン4−2.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン4−2.mp4" 
            },
            { 
                id: "4-3", 
                text: "そこへ、エサウが<br>かりから かえってきました。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン4−3.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン4−3.mp4" 
            },
            { 
                id: "4-4", 
                text: "「あぁ おなかが ぺこぺこだ！<br>たおれそうだよ」", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン4−4.jpeg" 
            },
            { 
                id: "4-5", 
                text: "エサウは スープを 見て、<br>「それを たべさせてくれ！」と いいました。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン4−5.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン4−5.mp4" 
            },
            { 
                id: "5-1", 
                text: "ヤコブは いいました。「じゃあ、お兄ちゃんの<br>とくべつな おくりものと こうかんして！」", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン5−1.jpeg" 
            },
            { 
                id: "5-2", 
                text: "エサウは おなかが すきすぎて、<br>「いいから はやく スープを くれ！」と いいました。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン5−2.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン5−2.mp4" 
            },
            { 
                id: "5-3", 
                text: "エサウは かみさまの おくりものより、<br>スープを えらんでしまいました。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン5−3.jpeg" 
            },
            { 
                id: "5-4", 
                text: "むしゃむしゃ ごくごく。<br>エサウは スープを たいらげました。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン5−4.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン5−4.mp4" 
            },
            { 
                id: "6-1", 
                text: "こうして、とくべつな おくりものは<br>ヤコブの ものに なりました。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン6−1.jpeg" 
            },
            { 
                id: "6-2", 
                text: "かみさまは、おそらから<br>そっと 見ておられます。", 
                imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg" 
            },
            { 
                id: "6-3", 
                text: "かみさまの おくりものは、<br>とっても たいせつに しましょうね。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン6−3.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン6−3.mp4" 
            },
            { 
                id: "6-4", 
                text: "ふたりの おはなしは、<br>まだまだ つづきます。", 
                imagePath: "./assets/jacob_and_esau_1/images/シーン6−4.jpeg",
                videoPath: "./assets/jacob_and_esau_1/videos/シーン6−4.mp4" 
            }
        ]
    },
    {
        id: "jacob_and_esau_2",
        title: "ヤコブとエサウ②",
        cover: "./assets/jacob_and_esau_2/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "やこぶと えさう ２", imagePath: "./assets/jacob_and_esau_2/images/シーン0−1.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=0-1" },
            { id: "1-1", text: "やこぶと えさうの おとうさん、イサクは とても おじいちゃんに なりました。", imagePath: "./assets/jacob_and_esau_2/images/シーン1−1.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=1-1" },
            { id: "1-2", text: "おめめが よく みえなく なって しまいました。", imagePath: "./assets/jacob_and_esau_2/images/シーン1−2.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン1−2.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=1-2" },
            { id: "1-3", text: "イサクは、お兄さんの えさうを よびました。", imagePath: "./assets/jacob_and_esau_2/images/シーン1−3.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=1-3" },
            { id: "1-4", text: "「えさうや、おいしい ごはんを つくっておくれ。<br>とくべつな おいのりを してあげよう」", imagePath: "./assets/jacob_and_esau_2/images/シーン1−4.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン1−4.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=1-4" },
            { id: "2-1", text: "えさうは おとうさんの ために、弓をもって おでかけします。", imagePath: "./assets/jacob_and_esau_2/images/シーン2−1.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン2−1.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=2-1" },
            { id: "2-2", text: "「おいしい お肉を とってくるぞ！」", imagePath: "./assets/jacob_and_esau_2/images/シーン2−2.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=2-2" },
            { id: "2-3", text: "お母さんの リベカは、その おはなしを こっそり きいていました。", imagePath: "./assets/jacob_and_esau_2/images/シーン2−3.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン2−3.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=2-3" },
            { id: "2-4", text: "リベカは、おとうと の やこぶが だいすき でした。", imagePath: "./assets/jacob_and_esau_2/images/シーン2−4.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=2-4" },
            { id: "3-1", text: "リベカは、やこぶに いいました。", imagePath: "./assets/jacob_and_esau_2/images/シーン3−1.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=3-1" },
            { id: "3-2", text: "「やこぶ、えさうの かわりに、とくべつな おいのりを してもらうのよ」", imagePath: "./assets/jacob_and_esau_2/images/シーン3−2.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン3−2.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=3-2" },
            { id: "3-3", text: "でも、やこぶは しんぱい です。<br>「えさう お兄ちゃんは けむくじゃら だよ。ぼくは つるつる だよ」", imagePath: "./assets/jacob_and_esau_2/images/シーン3−3.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン3−3.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=3-3" },
            { id: "3-4", text: "「おとうさんに バレたら、おこられちゃうよ」", imagePath: "./assets/jacob_and_esau_2/images/シーン3−4.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=3-4" },
            { id: "4-1", text: "お母さんは、えさうの ふくを やこぶに きせました。", imagePath: "./assets/jacob_and_esau_2/images/シーン4−1.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン4−1.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=4-1" },
            { id: "4-2", text: "そして、やぎの 毛皮を やこぶの うでと 首に まきつけました。", imagePath: "./assets/jacob_and_esau_2/images/シーン4−2.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=4-2" },
            { id: "4-3", text: "「これで、さわっても えさう お兄ちゃんと おなじ けむくじゃら よ」", imagePath: "./assets/jacob_and_esau_2/images/シーン4−3.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン4−3.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=4-3" },
            { id: "4-4", text: "やこぶは、お母さんが つくった おいしい ごはんを 持ちました。", imagePath: "./assets/jacob_and_esau_2/images/シーン4−4.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=4-4" },
            { id: "5-1", text: "やこぶは、おとうさん イサクの おへやに いきました。", imagePath: "./assets/jacob_and_esau_2/images/シーン5−1.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン5−1.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=5-1" },
            { id: "5-2", text: "「おとうさん、えさう です。ごはんを もってきました」", imagePath: "./assets/jacob_and_esau_2/images/シーン5−2.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=5-2" },
            { id: "5-3", text: "イサクは やこぶの うでを さわりました。<br>「うむ、毛皮の ような うでだ。えさう だね」", imagePath: "./assets/jacob_and_esau_2/images/シーン5−3.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン5−3.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=5-3" },
            { id: "5-4", text: "おとうさんは やこぶに、とくべつな おいのりを してくれました。", imagePath: "./assets/jacob_and_esau_2/images/シーン5−4.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=5-4" },
            { id: "5-5", text: "神様が やこぶを しゅくふく します。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=5-5" },
            { id: "6-1", text: "やこぶが でていった あと、えさうが 帰ってきました。", imagePath: "./assets/jacob_and_esau_2/images/シーン6−1.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン6−1.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=6-1" },
            { id: "6-2", text: "えさうは、やこぶに だまされた ことを 知って、とっても おこりました。", imagePath: "./assets/jacob_and_esau_2/images/シーン6−2.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン6−2.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=6-2" },
            { id: "6-3", text: "「やこぶ め！ ゆるさないぞ！」", imagePath: "./assets/jacob_and_esau_2/images/シーン6−3.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=6-3" },
            { id: "6-4", text: "やこぶは こわくなって、とおくの 街へ おひっこし することに なりました。", imagePath: "./assets/jacob_and_esau_2/images/シーン6−4.jpeg", videoPath: "./assets/jacob_and_esau_2/videos/シーン6−4.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=6-4" },
            { id: "6-5", text: "さあ、やこぶの あたらしい 旅の はじまり です。", imagePath: "./assets/jacob_and_esau_2/images/シーン6−5.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=6-5" }
        ]
    },
    {
        id: "jacob_and_esau_3",
        title: "ヤコブとエサウ③",
        cover: "./assets/jacob_and_esau_3/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "ヤコブとエサウの なかなおり", imagePath: "./assets/jacob_and_esau_3/videos/シーン0−1.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン0−1.jpeg" },
            { id: "1-1", text: "やこぶは、とおくに すんでいました。<br>かぞくや どうぶつが、たくさん ふえました。", imagePath: "./assets/jacob_and_esau_3/images/シーン1−1.jpeg", placeholderImage: "./assets/jacob_and_esau_3/images/シーン1−1.jpeg" },
            { id: "1-2", text: "あるひ、かみさまが やこぶに いいました。<br>「ふるさとに かえりなさい。」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "1-3", text: "「わたしが あなたを まもります。」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "1-4", text: "やこぶは、ふるさとに かえることに しました。", imagePath: "./assets/jacob_and_esau_3/videos/シーン1−4.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン1−4.jpeg" },
            { id: "2-1", text: "でも、やこぶは とても こわくなりました。<br>「おにいさんの えさうは、まだ おこっているかな？」", imagePath: "./assets/jacob_and_esau_3/images/シーン2−1.jpeg", placeholderImage: "./assets/jacob_and_esau_3/images/シーン2−1.jpeg" },
            { id: "2-2", text: "そこで、えさうに たくさんの プレゼントを おくることに しました。", imagePath: "./assets/jacob_and_esau_3/videos/シーン2−2.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン2−2.jpeg" },
            { id: "2-3", text: "やぎや ひつじなどを あつめました。<br>「これを おにいさんに わたしてください。」", imagePath: "./assets/jacob_and_esau_3/videos/シーン2−3.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン2−3.jpeg" },
            { id: "3-1", text: "よるに なりました。<br>やこぶは ひとりで おいのりを します。", imagePath: "./assets/jacob_and_esau_3/images/シーン3−1.jpeg", placeholderImage: "./assets/jacob_and_esau_3/images/シーン3−1.jpeg" },
            { id: "3-2", text: "「かみさま、どうか わたしを たすけてください。」", imagePath: "./assets/jacob_and_esau_3/videos/シーン3−2.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン3−2.jpeg" },
            { id: "3-3", text: "そのとき、ふしぎな ひとが あらわれました。", imagePath: "./assets/jacob_and_esau_3/images/シーン3−3.jpeg", placeholderImage: "./assets/jacob_and_esau_3/images/シーン3−3.jpeg" },
            { id: "3-4", text: "やこぶは、あさまで すもうを とり、「わたしを しゅくふくしてください！」と おねがいしました。", imagePath: "./assets/jacob_and_esau_3/videos/シーン3−4.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン3−4.jpeg" },
            { id: "3-5", text: "かみさまは やこぶを しゅくふくしました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "4-1", text: "つぎのあさ、とおくから えさうが やってきました。", imagePath: "./assets/jacob_and_esau_3/images/シーン4−1.jpeg", placeholderImage: "./assets/jacob_and_esau_3/images/シーン4−1.jpeg" },
            { id: "4-2", text: "やこぶは ドキドキしながら、まえに すすみます。", imagePath: "./assets/jacob_and_esau_3/videos/シーン4−2.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン4−2.jpeg" },
            { id: "4-3", text: "そして、えさうの まえで ７かい おじぎを しました。", imagePath: "./assets/jacob_and_esau_3/images/シーン4−3.jpeg", placeholderImage: "./assets/jacob_and_esau_3/images/シーン4−3.jpeg" },
            { id: "5-1", text: "すると、えさうは はしってきました。", imagePath: "./assets/jacob_and_esau_3/videos/シーン5−1.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン5−1.jpeg" },
            { id: "5-2", text: "えさうは やこぶを ギュッと だきしめました。", imagePath: "./assets/jacob_and_esau_3/videos/シーン5−2.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン5−2.jpeg" },
            { id: "5-3", text: "ふたりは なきながら、よろこびあいました。", imagePath: "./assets/jacob_and_esau_3/videos/シーン5−3.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン5−3.jpeg" },
            { id: "5-4", text: "「やこぶ、よく かえってきたね。」<br>えさうは やこぶを ゆるして くれました。", imagePath: "./assets/jacob_and_esau_3/images/シーン5−4.jpeg", placeholderImage: "./assets/jacob_and_esau_3/images/シーン5−4.jpeg" },
            { id: "6-1", text: "やこぶは、えさうに プレゼントを わたしました。", imagePath: "./assets/jacob_and_esau_3/videos/シーン6−1.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン6−1.jpeg" },
            { id: "6-2", text: "えさうは よろこんで うけとりました。", imagePath: "./assets/jacob_and_esau_3/images/シーン6−2.jpeg", placeholderImage: "./assets/jacob_and_esau_3/images/シーン6−2.jpeg" },
            { id: "6-3", text: "かみさまが、ふたりを なかよしに してくれたのです。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "6-4", text: "やこぶの かぞくも みんな ニコニコです。", imagePath: "./assets/jacob_and_esau_3/images/シーン6−4.jpeg", placeholderImage: "./assets/jacob_and_esau_3/images/シーン6−4.jpeg" },
            { id: "6-5", text: "ふたりは また なかよく なりました。", imagePath: "./assets/jacob_and_esau_3/videos/シーン6−5.mp4", placeholderImage: "./assets/jacob_and_esau_3/images/シーン6−5.jpeg" }
        ]
    },
    {
        id: "dreaming_joseph",
        title: "ゆめみるヨセフとあにたち",
        cover: "./assets/dreaming_joseph/images/シーン0-1.jpeg",
        scenes: [
            { id: "0-1", text: "ゆめみるヨセフと<br>あにたち", imagePath: "./assets/dreaming_joseph/images/シーン0-1.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Cover" },
            { id: "1-1", text: "むかしむかし、ヨセフという<br>おとこのこが いました。", imagePath: "./assets/dreaming_joseph/images/シーン1-1.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン1-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+1-1" },
            { id: "1-2", text: "おとうさんのヤコブは、<br>ヨセフが だいすきでした。", imagePath: "./assets/dreaming_joseph/images/シーン1-2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+1-2" },
            { id: "1-3", text: "おとうさんは ヨセフに、<br>カラフルで きれいな ふくを<br>つくってあげました。", imagePath: "./assets/dreaming_joseph/images/シーン1-3.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン1-3.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+1-3" },
            { id: "1-4", text: "おにいさんたちは、それを見て<br>すこし やきもちを やきました。", imagePath: "./assets/dreaming_joseph/images/シーン1-4.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+1-4" },
            { id: "2-1", text: "あるよる、ヨセフは<br>ふしぎな ゆめを みました。", imagePath: "./assets/dreaming_joseph/images/シーン2-1.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン2-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+2-1" },
            { id: "2-2", text: "かみさまが、ヨセフに<br>とくべつな ゆめを<br>みせてくれたのです。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=God+Scene" },
            { id: "2-3", text: "「ぼくの むぎのたばに、<br>みんなの たばが おじぎをしたんだよ」", imagePath: "./assets/dreaming_joseph/images/シーン2-3.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+2-3" },
            { id: "2-4", text: "ほしの ゆめも みました。<br>「おほしさまが ぼくに おじぎをしたよ」", imagePath: "./assets/dreaming_joseph/images/シーン2-4.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン2-4.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+2-4" },
            { id: "2-5", text: "おにいさんたちは、<br>もっと ぷんぷん<br>おこってしまいました。", imagePath: "./assets/dreaming_joseph/images/シーン2-5.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+2-5" },
            { id: "3-1", text: "あるひ、おにいさんたちは<br>はたけで おしごとをしていました。", imagePath: "./assets/dreaming_joseph/images/シーン3-1.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン3-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+3-1" },
            { id: "3-2", text: "ヨセフが おべんとうを<br>とどけに きました。", imagePath: "./assets/dreaming_joseph/images/シーン3-2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+3-2" },
            { id: "3-3", text: "おにいさんたちは、ヨセフを<br>とおくからきた しょうにんに<br>つれていかせてしまいました。", imagePath: "./assets/dreaming_joseph/images/シーン3-3.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン3-3.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+3-3" },
            { id: "3-4", text: "ヨセフは エジプトという<br>とおくの くにへ<br>いくことに なりました。", imagePath: "./assets/dreaming_joseph/images/シーン3-4.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+3-4" },
            { id: "3-5", text: "でも、かみさまは いつも<br>ヨセフと いっしょでした。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=God+Scene" },
            { id: "4-1", text: "エジプトで、ヨセフは<br>いっしょうけんめい はたらきました。", imagePath: "./assets/dreaming_joseph/images/シーン4-1.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン4-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+4-1" },
            { id: "4-2", text: "どんなときも、かみさまに<br>おいのりを しました。", imagePath: "./assets/dreaming_joseph/images/シーン4-2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+4-2" },
            { id: "4-3", text: "かみさまは、ヨセフを<br>たくさん たすけてくれました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=God+Scene" },
            { id: "4-4", text: "ヨセフは エジプトの<br>えらいひとに なりました。", imagePath: "./assets/dreaming_joseph/images/シーン4-4.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン4-4.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+4-4" },
            { id: "5-1", text: "ずっと あとになって、<br>おにいさんたちが エジプトへ<br>やってきました。", imagePath: "./assets/dreaming_joseph/images/シーン5-1.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン5-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+5-1" },
            { id: "5-2", text: "食べものが なくて、<br>こまっていたのです。", imagePath: "./assets/dreaming_joseph/images/シーン5-2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+5-2" },
            { id: "5-3", text: "「ヨセフ、あのときは<br>ごめんなさい」", imagePath: "./assets/dreaming_joseph/images/シーン5-3.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン5-3.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+5-3" },
            { id: "5-4", text: "ヨセフは、おにいさんたちを<br>ゆるしてあげました。", imagePath: "./assets/dreaming_joseph/images/シーン5-4.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+5-4" },
            { id: "5-5", text: "「かみさまが、みんなを たすけるために<br>ぼくを ここへ よんだんだね」", imagePath: "./assets/dreaming_joseph/images/シーン5-5.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン5-5.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+5-5" },
            { id: "6-1", text: "ヨセフと おにいさんたちは、<br>なかなおりを しました。", imagePath: "./assets/dreaming_joseph/images/シーン6-1.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン6-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+6-1" },
            { id: "6-2", text: "おとうさんの ヤコブも<br>エジプトへ やってきました。", imagePath: "./assets/dreaming_joseph/images/シーン6-2.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン6-2.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+6-2" },
            { id: "6-3", text: "かぞく みんなで、ずっと<br>なかよく くらしました。", imagePath: "./assets/dreaming_joseph/images/シーン6-3.jpeg", videoPath: "./assets/dreaming_joseph/videos/シーン6-3.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+6-3" },
            { id: "6-4", text: "かみさま、いつも まもってくれて<br>ありがとう。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=God+Scene" }
        ]
    },
    {
        id: "joseph_in_egypt",
        title: "えジプトの ヨセフ",
        cover: "./assets/joseph_in_egypt/images/シーン0-1.jpeg",
        scenes: [
            {
                id: "0-1",
                text: "えジプトの ヨセフ",
                imagePath: "./assets/joseph_in_egypt/images/シーン0-1.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン0-1_thumb.jpeg",
                isVideo: false
            },
            {
                id: "1-1",
                text: "ヨセフは おとうさんに とても あいされて いました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン1-1.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン1-1_thumb.jpeg",
                isVideo: false
            },
            {
                id: "1-2",
                text: "きれいな いろの ふくを もらって<br>とても うれしそうです。",
                imagePath: "./assets/joseph_in_egypt/images/シーン1-2.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン1-2_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン1-2.mp4"
            },
            {
                id: "1-3",
                text: "ヨセフは ふしぎな ゆめを みました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン1-3.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン1-3_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン1-3.mp4"
            },
            {
                id: "1-4",
                text: "おにいさんたちは ヨセフに<br>やきもちを やいて いました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン1-4.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン1-4_thumb.jpeg",
                isVideo: false
            },
            {
                id: "1-5",
                text: "そして ヨセフを とおくの えジプトへ<br>うって しまいました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン1-5.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン1-5_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン1-5.mp4"
            },
            {
                id: "2-1",
                text: "かみさまは いつも ヨセフと いっしょに いて<br>まもって くれました。",
                imagePath: "./assets/adam_and_eve/images/シーン1-2.jpeg",
                placeholderImage: "./assets/adam_and_eve/images/シーン1-2_thumb.jpeg",
                isVideo: false
            },
            {
                id: "2-2",
                text: "ヨセフは えジプトで<br>いっしょうけんめい はたらきました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン2-2.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン2-2_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン2-2.mp4"
            },
            {
                id: "2-3",
                text: "でも わるい ひとに うそを つかれて<br>ろうやに いれられて しまいます。",
                imagePath: "./assets/joseph_in_egypt/images/シーン2-3.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン2-3_thumb.jpeg",
                isVideo: false
            },
            {
                id: "2-4",
                text: "ろうやの なかでも ヨセフは<br>かみさまを しんじて いました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン2-4.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン2-4_thumb.jpeg",
                isVideo: false
            },
            {
                id: "2-5",
                text: "かみさまが ともに いるので<br>ろうやでも だいかつやく です。",
                imagePath: "./assets/joseph_in_egypt/images/シーン2-5.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン2-5_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン2-5.mp4"
            },
            {
                id: "3-1",
                text: "あるひ えジプトの おうさまが<br>ふしぎな ゆめを みました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン3-1.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン3-1_thumb.jpeg",
                isVideo: false
            },
            {
                id: "3-2",
                text: "ふとった うしと やせた うしの<br>ゆめ です。",
                imagePath: "./assets/joseph_in_egypt/images/シーン3-2.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン3-2_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン3-2.mp4"
            },
            {
                id: "3-3",
                text: "おうさまは ゆめの いみが わからなくて<br>こまって いました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン3-3.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン3-3_thumb.jpeg",
                isVideo: false
            },
            {
                id: "3-4",
                text: "ろうやに いる ヨセフが<br>ゆめの いみが わかる と ききました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン3-4.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン3-4_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン3-4.mp4"
            },
            {
                id: "3-5",
                text: "ヨセフは おうさまの まえに<br>よばれました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン3-5.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン3-5_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン3-5.mp4"
            },
            {
                id: "4-1",
                text: "おうさまは ヨセフに<br>ゆめの はなしを しました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン4-1.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン4-1_thumb.jpeg",
                isVideo: false
            },
            {
                id: "4-2",
                text: "かみさまが ヨセフに<br>ゆめの いみを おしえて くれました。",
                imagePath: "./assets/adam_and_eve/images/シーン1-2.jpeg",
                placeholderImage: "./assets/adam_and_eve/images/シーン1-2_thumb.jpeg",
                isVideo: false
            },
            {
                id: "4-3",
                text: "ヨセフは おうさまに いいました。<br>「これから 7ねんかん たべものが たくさん とれます」",
                imagePath: "./assets/joseph_in_egypt/images/シーン4-3.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン4-3_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン4-3.mp4"
            },
            {
                id: "4-4",
                text: "「そのあとの 7ねんかんは<br>たべものが なくなって しまいます」",
                imagePath: "./assets/joseph_in_egypt/images/シーン4-4.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン4-4_thumb.jpeg",
                isVideo: false
            },
            {
                id: "4-5",
                text: "「だから たくさん ある ときに<br>たべものを あつめて おきましょう」",
                imagePath: "./assets/joseph_in_egypt/images/シーン4-5.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン4-5_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン4-5.mp4"
            },
            {
                id: "5-1",
                text: "おうさまは ヨセフの かしこさに<br>びっくり しました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン5-1.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン5-1_thumb.jpeg",
                isVideo: false
            },
            {
                id: "5-2",
                text: "そして ヨセフを えジプトで<br>1ばん えらい ひとに しました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン5-2.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン5-2_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン5-2.mp4"
            },
            {
                id: "5-3",
                text: "ヨセフは たくさんの たべものを<br>くらに あつめました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン5-3.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン5-3_thumb.jpeg",
                isVideo: false
            },
            {
                id: "5-4",
                text: "たべものが なくなった とき<br>ヨセフは みんなに たべものを わけました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン5-4.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン5-4_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン5-4.mp4"
            },
            {
                id: "5-5",
                text: "かみさまの おかげで<br>たくさんの ひとが たすかりました。",
                imagePath: "./assets/joseph_in_egypt/images/シーン5-5.jpeg",
                placeholderImage: "./assets/joseph_in_egypt/images/シーン5-5_thumb.jpeg",
                isVideo: true,
                videoPath: "./assets/joseph_in_egypt/videos/シーン5-5.mp4"
            }
        ]
    },
    {
        "id": "josephs_reunion",
        "title": "ヨセフと きょうだいたちの さいかい",
        "cover": "./assets/josephs_reunion/images/シーン0−1.jpeg",
        "scenes": [
            {
                "id": "0-1",
                "text": "ヨセフと きょうだいたち",
                "imagePath": "./assets/josephs_reunion/images/シーン0−1.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "1-1",
                "text": "むかしむかし、せかいじゅうで たべものが なくなって しまいました。",
                "imagePath": "./assets/josephs_reunion/images/シーン1−1.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "1-2",
                "text": "ヨセフの おにいさんたちも、おなかが ぺこぺこです。",
                "imagePath": "./assets/josephs_reunion/images/シーン1−2.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン1−2.mp4"
            },
            {
                "id": "1-3",
                "text": "「エジプトという くにには、パンが あるらしいぞ。」",
                "imagePath": "./assets/josephs_reunion/images/シーン1−3.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "1-4",
                "text": "おにいさんたちは、エジプトへ しゅっぱつ しました。",
                "imagePath": "./assets/josephs_reunion/images/シーン1−4.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン1−4.mp4"
            },
            {
                "id": "2-1",
                "text": "エジプトには、とっても えらい ひとが いました。",
                "imagePath": "./assets/josephs_reunion/images/シーン2−1.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "2-2",
                "text": "それは、むかし わかれわかれに なった、おとうと の ヨセフ でした。",
                "imagePath": "./assets/josephs_reunion/images/シーン2−2.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン2−2.mp4"
            },
            {
                "id": "2-3",
                "text": "おにいさんたちは、ヨセフの まえで おじぎを しました。",
                "imagePath": "./assets/josephs_reunion/images/シーン2−3.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン2−3.mp4"
            },
            {
                "id": "2-4",
                "text": "でも、えらいひとが ヨセフだとは、ぜんぜん きづきません。",
                "imagePath": "./assets/josephs_reunion/images/シーン2−4.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "3-1",
                "text": "ヨセフは、おにいさんたちが やさしく なったか、テストを することに しました。",
                "imagePath": "./assets/josephs_reunion/images/シーン3−1.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "3-2",
                "text": "いちばん したの おとうと、ベニヤミンを つかまえようと しました。",
                "imagePath": "./assets/josephs_reunion/images/シーン3−2.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン3−2.mp4"
            },
            {
                "id": "3-3",
                "text": "「このこは おいていきなさい。」と ヨセフは いいました。",
                "imagePath": "./assets/josephs_reunion/images/シーン3−3.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "4-1",
                "text": "すると、おにいさんの ユダが まえに でました。",
                "imagePath": "./assets/josephs_reunion/images/シーン4−1.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン4−1.mp4"
            },
            {
                "id": "4-2",
                "text": "「おねがいです。このこは わたしが まもります！」",
                "imagePath": "./assets/josephs_reunion/images/シーン4−2.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン4−2.mp4"
            },
            {
                "id": "4-3",
                "text": "「どうか ゆるして ください。」と いっしょうけんめい おねがい しました。",
                "imagePath": "./assets/josephs_reunion/images/シーン4−3.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "4-4",
                "text": "おにいさんたちは、もう むかしの いじわるな ひとでは ありません。",
                "imagePath": "./assets/josephs_reunion/images/シーン4−4.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "5-1",
                "text": "ヨセフは なみだが とまらなく なりました。",
                "imagePath": "./assets/josephs_reunion/images/シーン5−1.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン5−1.mp4"
            },
            {
                "id": "5-2",
                "text": "「みんな、ぼくです。おとうとの ヨセフです！」",
                "imagePath": "./assets/josephs_reunion/images/シーン5−2.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "5-3",
                "text": "おにいさんたちは びっくりして、なきだしました。",
                "imagePath": "./assets/josephs_reunion/images/シーン5−3.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン5−3.mp4"
            },
            {
                "id": "5-4",
                "text": "「ごめんね、ヨセフ。」「もう だいじょうぶだよ。」",
                "imagePath": "./assets/josephs_reunion/images/シーン5−4.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "5-5",
                "text": "みんなで ぎゅっと だきしめ あいました。",
                "imagePath": "./assets/josephs_reunion/images/シーン5−5.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン5−5.mp4"
            },
            {
                "id": "6-1",
                "text": "かみさまは、ずっと ヨセフたちを みまもって いました。",
                "imagePath": "./assets/adam_and_eve/images/シーン1−2.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "6-2",
                "text": "かなしい ことも、かみさまが えがおに してくれました。",
                "imagePath": "./assets/adam_and_eve/images/シーン1−2.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "6-3",
                "text": "かぞく みんなで、エジプトで くらす ことに なりました。",
                "imagePath": "./assets/josephs_reunion/images/シーン6−3.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン6−3.mp4"
            },
            {
                "id": "6-4",
                "text": "みんな いっしょで、とっても しあわせ です。",
                "imagePath": "./assets/josephs_reunion/images/シーン6−4.jpeg",
                "placeholderImage": "...",
                "videoPath": "./assets/josephs_reunion/videos/シーン6−4.mp4"
            }
        ]
    },
    {
        id: "baby_moses",
        title: "かごの なかの あかちゃん モーセ",
        cover: "./assets/baby_moses/images/シーン0-1.jpeg",
        scenes: [
            {
                id: "0-1",
                text: "かごの なかの あかちゃん モーセ",
                imagePath: "./assets/baby_moses/images/シーン0-1.jpeg",
                is_video: false
            },
            {
                id: "1-1",
                text: "むかしむかし、イスラエルの ひとたちは<br>エジプトという くにに いました。",
                imagePath: "./assets/baby_moses/images/シーン1-1.jpeg",
                is_video: false
            },
            {
                id: "1-2",
                text: "けれども、エジプトの おうさまは、<br>みんなを むりやり はたらかせました。",
                imagePath: "./assets/baby_moses/images/シーン1-2.jpeg",
                is_video: true,
                videoPath: "./assets/baby_moses/videos/シーン1-2.mp4"
            },
            {
                id: "1-3",
                text: "「イスラエルの おとこの あかちゃんを<br>なくしてしまえ！」と おうさまは いいました。",
                imagePath: "./assets/baby_moses/images/シーン1-3.jpeg",
                is_video: false
            },
            {
                id: "1-4",
                text: "みんな とても かなしくて、<br>かみさまに おいのりを します。",
                imagePath: "./assets/adam_and_eve/images/シーン1-2.jpeg",
                is_video: false
            },
            {
                id: "2-1",
                text: "そのころ、ある かぞくに<br>かわいい おとこの あかちゃんが うまれました。",
                imagePath: "./assets/baby_moses/images/シーン2-1.jpeg",
                is_video: true,
                videoPath: "./assets/baby_moses/videos/シーン2-1.mp4"
            },
            {
                id: "2-2",
                text: "おかあさんは、あかちゃんを<br>ずっと かくして そだてました。",
                imagePath: "./assets/baby_moses/images/シーン2-2.jpeg",
                is_video: false
            },
            {
                id: "2-3",
                text: "でも、あかちゃんが おおきくなって<br>もう かくせなくなって しまいました。",
                imagePath: "./assets/baby_moses/images/シーン2-3.jpeg",
                is_video: false
            },
            {
                id: "2-4",
                text: "「かみさま、このこを おまもり ください」と<br>おかあさんは おいのりしました。",
                imagePath: "./assets/adam_and_eve/images/シーン1-2.jpeg",
                is_video: false
            },
            {
                id: "3-1",
                text: "おかあさんは、あかちゃんを<br>パピルスの かごに いれました。",
                imagePath: "./assets/baby_moses/images/シーン3-1.jpeg",
                is_video: false
            },
            {
                id: "3-2",
                text: "そして、ナイルがわの くさの なかに<br>そっと おきました。",
                imagePath: "./assets/baby_moses/images/シーン3-2.jpeg",
                is_video: true,
                videoPath: "./assets/baby_moses/videos/シーン3-2.mp4"
            },
            {
                id: "3-3",
                text: "おねえさんの ミリアムが、とおくから<br>あかちゃんを みまもって います。",
                imagePath: "./assets/baby_moses/images/シーン3-3.jpeg",
                is_video: true,
                videoPath: "./assets/baby_moses/videos/シーン3-3.mp4"
            },
            {
                id: "3-4",
                text: "「どうか ぶじで いてね」と、<br>ミリアムは しんぱいそうに みています。",
                imagePath: "./assets/baby_moses/images/シーン3-4.jpeg",
                is_video: false
            },
            {
                id: "4-1",
                text: "そこへ、エジプトの おうじょさまが<br>もくよくに やってきました。",
                imagePath: "./assets/baby_moses/images/シーン4-1.jpeg",
                is_video: true,
                videoPath: "./assets/baby_moses/videos/シーン4-1.mp4"
            },
            {
                id: "4-2",
                text: "「あれは なにかしら？」<br>おうじょさまは かごを みつけました。",
                imagePath: "./assets/baby_moses/images/シーン4-2.jpeg",
                is_video: false
            },
            {
                id: "4-3",
                text: "かごを あけると、<br>あかちゃんが ないて いました。",
                imagePath: "./assets/baby_moses/images/シーン4-3.jpeg",
                is_video: true,
                videoPath: "./assets/baby_moses/videos/シーン4-3.mp4"
            },
            {
                id: "4-4",
                text: "「かわいそうに。わたしが そだてましょう」<br>おうじょさまは いいました。",
                imagePath: "./assets/baby_moses/images/シーン4-4.jpeg",
                is_video: false
            },
            {
                id: "5-1",
                text: "ミリアムが とびだして、<br>おうじょさまに いいました。",
                imagePath: "./assets/baby_moses/images/シーン5-1.jpeg",
                is_video: true,
                videoPath: "./assets/baby_moses/videos/シーン5-1.mp4"
            },
            {
                id: "5-2",
                text: "「あかちゃんに おっぱいを あげる ひとを、<br>よんで きましょうか？」",
                imagePath: "./assets/baby_moses/images/シーン5-2.jpeg",
                is_video: false
            },
            {
                id: "5-3",
                text: "「ええ、おねがいね」と、<br>おうじょさまは こたえました。",
                imagePath: "./assets/baby_moses/images/シーン5-3.jpeg",
                is_video: false
            },
            {
                id: "5-4",
                text: "ミリアムは、あかちゃんの<br>ほんとうの おかあさんを つれて きました。",
                imagePath: "./assets/baby_moses/images/シーン5-4.jpeg",
                is_video: true,
                videoPath: "./assets/baby_moses/videos/シーン5-4.mp4"
            },
            {
                id: "6-1",
                text: "おかあさんは、かみさまに「ありがとう」と いいながら<br>あかちゃんを そだてました。",
                imagePath: "./assets/adam_and_eve/images/シーン1-2.jpeg",
                is_video: false
            },
            {
                id: "6-2",
                text: "おおきくなると、あかちゃんは<br>おうじょさまの ところへ いきました。",
                imagePath: "./assets/baby_moses/images/シーン6-2.jpeg",
                is_video: true,
                videoPath: "./assets/baby_moses/videos/シーン6-2.mp4"
            },
            {
                id: "6-3",
                text: "おうじょさまは、あかちゃんに<br>「モーセ」という なまえを つけました。",
                imagePath: "./assets/baby_moses/images/シーン6-3.jpeg",
                is_video: true,
                videoPath: "./assets/baby_moses/videos/シーン6-3.mp4"
            },
            {
                id: "6-4",
                text: "モーセは、かみさまに まもられて<br>つよく やさしく そだちました。",
                imagePath: "./assets/adam_and_eve/images/シーン1-2.jpeg",
                is_video: false
            }
        ]
    },
    {
        id: "exodus",
        title: "えじぷとからの だっしゅつ",
        cover: "./assets/exodus/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "えじぷとからの だっしゅつ", imagePath: "./assets/exodus/videos/シーン0−1.mp4", placeholderImage: "./assets/exodus/images/シーン0−1.jpeg" },
            { id: "1-1", text: "むかしむかし、えじぷとという くにに、いすらえるの ひとたちが いました。", imagePath: "./assets/exodus/images/シーン1−1.jpeg", placeholderImage: "./assets/exodus/images/シーン1−1.jpeg" },
            { id: "1-2", text: "いすらえるの ひとたちは、まいにち つらい おしごとを していました。", imagePath: "./assets/exodus/videos/シーン1−2.mp4", placeholderImage: "./assets/exodus/images/シーン1−2.jpeg" },
            { id: "1-3", text: "そのころ、もーせという おとこのこが うまれました。", imagePath: "./assets/exodus/images/シーン1−3.jpeg", placeholderImage: "./assets/exodus/images/シーン1−3.jpeg" },
            { id: "1-4", text: "もーせは おおきくなって、ひつじかいに なりました。", imagePath: "./assets/exodus/videos/シーン1−4.mp4", placeholderImage: "./assets/exodus/images/シーン1−4.jpeg" },
            { id: "2-1", text: "あるひ、もーせの まえで、きの えだが もえあがりました。<br>ふしぎな ひ です。", imagePath: "./assets/exodus/videos/シーン2−1.mp4", placeholderImage: "./assets/exodus/images/シーン2−1.jpeg" },
            { id: "2-2", text: "ひの なかから、かみさまの こえが きこえました。<br>「もーせよ、わたしの ひとたちを たすけなさい。」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "2-3", text: "もーせは びっくりしました。<br>「ぼくが えじぷとの おうさまの ところへ いくのですか？」", imagePath: "./assets/exodus/images/シーン2−3.jpeg", placeholderImage: "./assets/exodus/images/シーン2−3.jpeg" },
            { id: "2-4", text: "かみさまは やさしく いいました。<br>「わたしが いっしょに いるから だいじょうぶです。」", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン5−1.jpeg" },
            { id: "3-1", text: "もーせは えじぷとの おうさま、ふぁらおの ところへ いきました。", imagePath: "./assets/exodus/images/シーン3−1.jpeg", placeholderImage: "./assets/exodus/images/シーン3−1.jpeg" },
            { id: "3-2", text: "「かみさまが、いすらえるの ひとたちを はなすように いっています。」", imagePath: "./assets/exodus/videos/シーン3−2.mp4", placeholderImage: "./assets/exodus/images/シーン3−2.jpeg" },
            { id: "3-3", text: "ふぁらおは おこって いいました。<br>「そんなこと できない！もっと はたらかせろ！」", imagePath: "./assets/exodus/videos/シーン3−3.mp4", placeholderImage: "./assets/exodus/images/シーン3−3.jpeg" },
            { id: "3-4", text: "もーせは 悲しみました。でも、かみさまを しんじました。", imagePath: "./assets/exodus/images/シーン3−4.jpeg", placeholderImage: "./assets/exodus/images/シーン3−4.jpeg" },
            { id: "4-1", text: "かみさまは、ふぁらおに 10この ふしぎな ことを おこしました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン1−2.jpeg" },
            { id: "4-2", text: "かえるが たくさん でてきたり、そらが まっくらになったり しました。", imagePath: "./assets/exodus/videos/シーン4−2.mp4", placeholderImage: "./assets/exodus/images/シーン4−2.jpeg" },
            { id: "4-3", text: "ふぁらおは とても びっくりして、こわがりました。", imagePath: "./assets/exodus/images/シーン4−3.jpeg", placeholderImage: "./assets/exodus/images/シーン4−3.jpeg" },
            { id: "4-4", text: "とうとう、ふぁらおは いいました。<br>「でていって いいぞ！」", imagePath: "./assets/exodus/videos/シーン4−4.mp4", placeholderImage: "./assets/exodus/images/シーン4−4.jpeg" },
            { id: "5-1", text: "いすらえるの ひとたちは とても よろこびました。<br>「やったー！おうちに かえることができる！」", imagePath: "./assets/exodus/videos/シーン5−1.mp4", placeholderImage: "./assets/exodus/images/シーン5−1.jpeg" },
            { id: "5-2", text: "みんなで いそいで にもつを もちました。", imagePath: "./assets/exodus/images/シーン5−2.jpeg", placeholderImage: "./assets/exodus/images/シーン5−2.jpeg" },
            { id: "5-3", text: "もーせを せんとうにして、えじぷとを しゅっぱつ しました。", imagePath: "./assets/exodus/videos/シーン5−3.mp4", placeholderImage: "./assets/exodus/images/シーン5−3.jpeg" },
            { id: "5-4", text: "かみさまは、ひるは くもで、よるは ひの はしらで みちびきました。", imagePath: "./assets/exodus/videos/シーン5−4.mp4", placeholderImage: "./assets/exodus/images/シーン5−4.jpeg" },
            { id: "6-1", text: "みんなが うみの まえに つくと、えじぷとの へいたいが おいかけて きました。", imagePath: "./assets/exodus/images/シーン6−1.jpeg", placeholderImage: "./assets/exodus/images/シーン6−1.jpeg" },
            { id: "6-2", text: "みんなは こわがって、なきだしました。", imagePath: "./assets/exodus/videos/シーン6−2.mp4", placeholderImage: "./assets/exodus/images/シーン6−2.jpeg" },
            { id: "6-3", text: "もーせが うみに つえを のばすと、うみが ふたつに わかれました！", imagePath: "./assets/exodus/videos/シーン6−3.mp4", placeholderImage: "./assets/exodus/images/シーン6−3.jpeg" },
            { id: "6-4", text: "みんなは、うみの なかの みちを あるいて わたりました。", imagePath: "./assets/exodus/videos/シーン6−4.mp4", placeholderImage: "./assets/exodus/images/シーン6−4.jpeg" },
            { id: "6-5", text: "かみさまが まもって くれたので、みんな ぶ事に たすかりました。", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン5−1.jpeg" },
            { id: "6-6", text: "みんなで かみさまに ありがとうを いいました。", imagePath: "./assets/exodus/videos/シーン6−6.mp4", placeholderImage: "./assets/exodus/images/シーン6−6.jpeg" }
        ]
    },
    {
        id: "parting_of_the_sea",
        title: "うみが われる きせき",
        cover: "./assets/parting_of_the_sea/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "うみが われる きせき", imagePath: "./assets/parting_of_the_sea/images/シーン0−1.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Cover" },
            { id: "1-1", text: "もーせと ひとびとは えじぷとを 出発しました。", imagePath: "./assets/parting_of_the_sea/videos/シーン1−1.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+1-1" },
            { id: "1-2", text: "「かみさまが まもってくださるよ」<br>もーせは みんなに いいました。", imagePath: "./assets/parting_of_the_sea/images/シーン1−2.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+1-2" },
            { id: "1-3", text: "ひるは くもの はしらが あんない してくれました。", imagePath: "./assets/parting_of_the_sea/videos/シーン1−3.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+1-3" },
            { id: "1-4", text: "よるは ほのおの はしらが てらしてくれました。", imagePath: "./assets/parting_of_the_sea/videos/シーン1−4.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+1-4" },
            { id: "2-1", text: "ひとびとが あるいていくと、<br>おおきな うみに ぶつかりました。", imagePath: "./assets/parting_of_the_sea/images/シーン2−1.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+2-1" },
            { id: "2-2", text: "そのとき、うしろから えじぷとの ぐんたいが おってきました！", imagePath: "./assets/parting_of_the_sea/videos/シーン2−2.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+2-2" },
            { id: "2-3", text: "「どうしよう！ にげみちが ないよ！」<br>ひとびとは こわがって なきだしました。", imagePath: "./assets/parting_of_the_sea/videos/シーン2−3.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+2-3" },
            { id: "2-4", text: "もーせは 「しんぱい しないで。かみさまが たすけてくれる」と いいました。", imagePath: "./assets/parting_of_the_sea/images/シーン2−4.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+2-4" },
            { id: "3-1", text: "かみさまは もーせに おはなしされました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+3-1" },
            { id: "3-2", text: "「つえを あげて、うみに むかって のばしなさい」", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+3-2" },
            { id: "3-3", text: "もーせは かみさまの いうとおりに しました。", imagePath: "./assets/parting_of_the_sea/videos/シーン3−3.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+3-3" },
            { id: "3-4", text: "つえを うみに むけて たかく あげました。", imagePath: "./assets/parting_of_the_sea/images/シーン3−4.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+3-4" },
            { id: "4-1", text: "すると、つよい かぜが ふいてきました。", imagePath: "./assets/parting_of_the_sea/videos/シーン4−1.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+4-1" },
            { id: "4-2", text: "ごーっ！ という おとと ともに、<br>うみの みずが 動きはじめました。", imagePath: "./assets/parting_of_the_sea/videos/シーン4−2.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+4-2" },
            { id: "4-3", text: "なんと、おおきな うみが まっぷたつに われたのです！", imagePath: "./assets/parting_of_the_sea/videos/シーン4−3.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+4-3" },
            { id: "4-4", text: "うみの なかに、かわいた みちが できました。", imagePath: "./assets/parting_of_the_sea/images/シーン4−4.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+4-4" },
            { id: "4-5", text: "みぎと ひだりには、みずの かべが できました。", imagePath: "./assets/parting_of_the_sea/videos/シーン4−5.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+4-5" },
            { id: "5-1", text: "「さあ、みんな いそいで わたろう！」", imagePath: "./assets/parting_of_the_sea/images/シーン5−1.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+5-1" },
            { id: "5-2", text: "ひとびとは びっくりしながらも、<br>うみの なかの みちを あるきました。", imagePath: "./assets/parting_of_the_sea/videos/シーン5−2.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+5-2" },
            { id: "5-3", text: "おとなも こどもも、<br>どうぶつたちも いっしょです。", imagePath: "./assets/parting_of_the_sea/images/シーン5−3.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+5-3" },
            { id: "5-4", text: "むこうの きしまで、<br>みんな ぶじに わたることが できました。", imagePath: "./assets/parting_of_the_sea/images/シーン5−4.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+5-4" },
            { id: "6-1", text: "えじぷとの ぐんたいも うみの みちを おってきました。", imagePath: "./assets/parting_of_the_sea/videos/シーン6−1.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+6-1" },
            { id: "6-2", text: "でも、かみさまが うみの みずを もとに もどしました。", imagePath: "./assets/parting_of_the_sea/images/シーン6−2.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+6-2" },
            { id: "6-3", text: "ざぶーん！<br>えじぷとの ぐんたいは なみに のまれて しまいました。", imagePath: "./assets/parting_of_the_sea/videos/シーン6−3.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+6-3" },
            { id: "6-4", text: "「わあ、かみさま ありがとう！」<br>みんなは よろこんで うたいました。", imagePath: "./assets/parting_of_the_sea/images/シーン6−4.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+6-4" },
            { id: "6-5", text: "かみさまは いつでも みんなを<br>まもって くださるのです。", imagePath: "./assets/parting_of_the_sea/images/シーン6−5.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+6-5" }
        ]
    },
    {
        id: "birth_of_jesus",
        title: "いえすさまのおたんじょう",
        cover: "./assets/birth_of_jesus/images/シーン0-1.jpeg",
        scenes: [
            { id: "0-1", text: "いえすさまの おたんじょう", imagePath: "./assets/birth_of_jesus/images/シーン0-1.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "むかしむかし、まりあという やさしい おんなの人が いました。", imagePath: "./assets/birth_of_jesus/images/シーン1-1.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン1-1.mp4", placeholderImage: "..." },
            { id: "1-2", text: "ある日、てんしが やってきて 言いました。<br>「かみさまの こどもが うまれますよ。」", imagePath: "./assets/birth_of_jesus/images/シーン1-2.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "まりあと よせふは、とおくの まちへ おでかけを しました。", imagePath: "./assets/birth_of_jesus/images/シーン1-3.jpeg", placeholderImage: "..." },
            { id: "1-4", text: "ろばさんに のって、ことこと。<br>よるの みちを すすみます。", imagePath: "./assets/birth_of_jesus/images/シーン1-4.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン1-4.mp4", placeholderImage: "..." },
            { id: "1-5", text: "やっとの おもいで、べつれへむ という まちに つきました。", imagePath: "./assets/birth_of_jesus/images/シーン1-5.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "まちは 人で いっぱいで、とまる おうちが ありません。", imagePath: "./assets/birth_of_jesus/images/シーン2-1.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン2-1.mp4", placeholderImage: "..." },
            { id: "2-2", text: "「どうしよう、あかちゃんが うまれそうなのに。」", imagePath: "./assets/birth_of_jesus/images/シーン2-2.jpeg", placeholderImage: "..." },
            { id: "2-3", text: "やどやの 人が 言いました。<br>「うまごや なら、あいていますよ。」", imagePath: "./assets/birth_of_jesus/images/シーン2-3.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "２人は ほっとして、うまごやへ むかいました。", imagePath: "./assets/birth_of_jesus/images/シーン2-4.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン2-4.mp4", placeholderImage: "..." },
            { id: "3-1", text: "よるに なりました。<br>おほしさまが きらきら ひかっています。", imagePath: "./assets/birth_of_jesus/images/シーン3-1.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン3-1.mp4", placeholderImage: "..." },
            { id: "3-2", text: "うまごやで、かわいい あかちゃんが うまれました。<br>おなまえは「いえすさま」です。", imagePath: "./assets/birth_of_jesus/images/シーン3-2.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "まりあは、いえすさまを やさしく だっこしました。", imagePath: "./assets/birth_of_jesus/images/シーン3-3.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン3-3.mp4", placeholderImage: "..." },
            { id: "3-4", text: "べっどが ないので、かいばおけの わらの 上に ねかせました。", imagePath: "./assets/birth_of_jesus/images/シーン3-4.jpeg", placeholderImage: "..." },
            { id: "3-5", text: "うしさんや ろばさんも、あかちゃんを みまもっています。", imagePath: "./assets/birth_of_jesus/images/シーン3-5.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン3-5.mp4", placeholderImage: "..." },
            { id: "4-1", text: "そのころ、のっぱらで ひつじかいたちが ひつじの おせわを していました。", imagePath: "./assets/birth_of_jesus/images/シーン4-1.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "すると、ぴかーっと ひかって、てんしが あらわれました。", imagePath: "./assets/birth_of_jesus/images/シーン4-2.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン4-2.mp4", placeholderImage: "..." },
            { id: "4-3", text: "「きょう、いえすさまが うまれましたよ。<br>うまごやに いってごらん。」", imagePath: "./assets/birth_of_jesus/images/シーン4-3.jpeg", placeholderImage: "..." },
            { id: "4-4", text: "ひつじかいたちは びっくりして、あかちゃんに あいに いきました。", imagePath: "./assets/birth_of_jesus/images/シーン4-4.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン4-4.mp4", placeholderImage: "..." },
            { id: "5-1", text: "とおくの くにの、はかせたちも おおきな ほしを みつけました。", imagePath: "./assets/birth_of_jesus/images/シーン5-1.jpeg", placeholderImage: "..." },
            { id: "5-2", text: "「すばらしい あかちゃんが うまれたんだ！」<br>らくだに のって、しゅっぱつです。", imagePath: "./assets/birth_of_jesus/images/シーン5-2.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン5-2.mp4", placeholderImage: "..." },
            { id: "5-3", text: "おほしさまは、いえすさまの いる うまごやを おしえてくれました。", imagePath: "./assets/birth_of_jesus/images/シーン5-3.jpeg", placeholderImage: "..." },
            { id: "6-1", text: "みんな、うまごやに あつまりました。", imagePath: "./assets/birth_of_jesus/images/シーン6-1.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "はかせたちは、たいせつな たからものを ぷれぜんと しました。", imagePath: "./assets/birth_of_jesus/images/シーン6-2.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン6-2.mp4", placeholderImage: "..." },
            { id: "6-3", text: "「いえすさま、おめでとう！」<br>みんな ほっこり えがおです。", imagePath: "./assets/birth_of_jesus/images/シーン6-3.jpeg", placeholderImage: "..." },
            { id: "6-4", text: "かみさまは、みんなを あいして いえすさまを おくって くれました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "6-5", text: "みんなの こころが、あたたかい ひかりで いっぱいになりました。", imagePath: "./assets/birth_of_jesus/images/シーン6-5.jpeg", videoPath: "./assets/birth_of_jesus/videos/シーン6-5.mp4", placeholderImage: "..." }
        ]
    },
    {
        id: "calling_disciples",
        title: "イエスさまと 12にんの でしたち",
        cover: "./assets/calling_disciples/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "イエスさまと\n12にんの でしたち", imagePath: "./assets/calling_disciples/images/シーン0−1.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "かみさまは、おそらから<br>せかいを みて いました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "1-2", text: "「せかいの みんなに、<br>たいせつな ことを つたえよう」と おもいました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "そこで、イエスさまは<br>うみの ほとりを あるき はじめました。", imagePath: "./assets/calling_disciples/images/シーン1−3.jpeg", placeholderImage: "..." },
            { id: "1-4", text: "おてつだいを してくれる<br>おともだちを さがして いるのです。", videoPath: "./assets/calling_disciples/videos/シーン1−4.mp4", imagePath: "./assets/calling_disciples/images/シーン1−4.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "うみには、ペテロと アンデレという<br>きょうだいが いました。", imagePath: "./assets/calling_disciples/images/シーン2−1.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "ふたりは いっしょうけんめい、<br>あみを なげて います。", videoPath: "./assets/calling_disciples/videos/シーン2−2.mp4", imagePath: "./assets/calling_disciples/images/シーン2−2.jpeg", placeholderImage: "..." },
            { id: "2-3", text: "おさかなを とる おしごとを<br>して いるのです。", imagePath: "./assets/calling_disciples/images/シーン2−3.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "だけど、きょうは<br>なかなか おさかなが とれません。", videoPath: "./assets/calling_disciples/videos/シーン2−4.mp4", imagePath: "./assets/calling_disciples/images/シーン2−4.jpeg", placeholderImage: "..." },
            { id: "3-1", text: "イエスさまは、<br>ふたりに こえを かけました。", imagePath: "./assets/calling_disciples/images/シーン3−1.jpeg", placeholderImage: "..." },
            { id: "3-2", text: "「わたしに ついて きなさい。」", videoPath: "./assets/calling_disciples/videos/シーン3−2.mp4", imagePath: "./assets/calling_disciples/images/シーン3−2.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "「にんげんを とる りょうしに<br>して あげよう。」", imagePath: "./assets/calling_disciples/images/シーン3−3.jpeg", placeholderImage: "..." },
            { id: "3-4", text: "すると ふたりは、すぐに あみを おいて、<br>イエスさまに ついて いきました。", videoPath: "./assets/calling_disciples/videos/シーン3−4.mp4", imagePath: "./assets/calling_disciples/images/シーン3−4.jpeg", placeholderImage: "..." },
            { id: "4-1", text: "すこし あるくと、<br>また べつの ふねが ありました。", imagePath: "./assets/calling_disciples/images/シーン4−1.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "ヤコブと ヨハネという<br>きょうだいが いました。", videoPath: "./assets/calling_disciples/videos/シーン4−2.mp4", imagePath: "./assets/calling_disciples/images/シーン4−2.jpeg", placeholderImage: "..." },
            { id: "4-3", text: "ふたりは、やぶれた あみを<br>きれいに なおして います。", imagePath: "./assets/calling_disciples/images/シーン4−3.jpeg", placeholderImage: "..." },
            { id: "4-4", text: "とても しんせつで、<br>げんきな おとこのこたち です。", videoPath: "./assets/calling_disciples/videos/シーン4−4.mp4", imagePath: "./assets/calling_disciples/images/シーン4−4.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "イエスさまは、この ふたりにも<br>こえを かけました。", imagePath: "./assets/calling_disciples/images/シーン5−1.jpeg", placeholderImage: "..." },
            { id: "5-2", text: "ヤコブと ヨハネは、イエスさまの<br>やさしい かおを みて うれしく なりました。", videoPath: "./assets/calling_disciples/videos/シーン5−2.mp4", imagePath: "./assets/calling_disciples/images/シーン5−2.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "おとうさんに 「いってきます！」と いって、<br>ふねを おりました。", imagePath: "./assets/calling_disciples/images/シーン5−3.jpeg", placeholderImage: "..." },
            { id: "5-4", text: "イエスさまと いっしょに、<br>とことこ あるき はじめました。", videoPath: "./assets/calling_disciples/videos/シーン5−4.mp4", imagePath: "./assets/calling_disciples/images/シーン5−4.jpeg", placeholderImage: "..." },
            { id: "6-1", text: "こうして、イエスさまの まわりに<br>おともだちが ふえて いきました。", imagePath: "./assets/calling_disciples/images/シーン6−1.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "ぜんぶで 12にんの たいせつな<br>おともだちが あつまりました。", videoPath: "./assets/calling_disciples/videos/シーン6−2.mp4", imagePath: "./assets/calling_disciples/images/シーン6−2.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "みんな、イエスさまの ことが<br>だいすきです。", imagePath: "./assets/calling_disciples/images/シーン6−3.jpeg", placeholderImage: "..." },
            { id: "6-4", text: "みんなで いっしょに、かみさまの<br>おはなしを つたえに いきます。", videoPath: "./assets/calling_disciples/videos/シーン6−4.mp4", imagePath: "./assets/calling_disciples/images/シーン6−4.jpeg", placeholderImage: "..." },
            { id: "6-5", text: "さあ、どんな わくわくする<br>おはなしが はじまるのかな？", imagePath: "./assets/calling_disciples/images/シーン6−5.jpeg", placeholderImage: "..." }
        ]
    },
    {
        id: "five_loaves",
        title: "5つの パンと 2ひきの さかな",
        cover: "./assets/five_loaves/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "5つの パンと<br>2ひきの さかな", imagePath: "./assets/five_loaves/images/シーン0−1.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "あるひ、イエスさまが<br>おはなしを していました。", imagePath: "./assets/five_loaves/videos/シーン1−1.mp4", placeholderImage: "..." },
            { id: "1-2", text: "「みんな、かみさまは<br>いつも みてくれていますよ」", imagePath: "./assets/five_loaves/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "たくさん の ひとが<br>あつまって きました。", imagePath: "./assets/five_loaves/videos/シーン1−3.mp4", placeholderImage: "..." },
            { id: "1-4", text: "おとなも こどもも<br>みんな むちゅう です。", imagePath: "./assets/five_loaves/images/シーン1−4.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "おひさまが しずんで<br>ゆうがたに なりました。", imagePath: "./assets/five_loaves/videos/シーン2−1.mp4", placeholderImage: "..." },
            { id: "2-2", text: "ぐうう。<br>みんな おなかが すいてきました。", imagePath: "./assets/five_loaves/images/シーン2−2.jpeg", placeholderImage: "..." },
            { id: "2-3", text: "「イエスさま、みんな<br>おなかが ぺこぺこ です」", imagePath: "./assets/five_loaves/videos/シーン2−3.mp4", placeholderImage: "..." },
            { id: "2-4", text: "おでしたちが<br>しんぱい して いました。", imagePath: "./assets/five_loaves/images/シーン2−4.jpeg", placeholderImage: "..." },
            { id: "3-1", text: "そのとき、ひとりの<br>おとこのこが きました。", imagePath: "./assets/five_loaves/videos/シーン3−1.mp4", placeholderImage: "..." },
            { id: "3-2", text: "「ぼくの おべんとう、<br>つかってください！」", imagePath: "./assets/five_loaves/images/シーン3−2.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "かごの なかには<br>5つの パンが ありました。", imagePath: "./assets/five_loaves/videos/シーン3−3.mp4", placeholderImage: "..." },
            { id: "3-4", text: "そして、ちいさな さかなが<br>2ひき ありました。", imagePath: "./assets/five_loaves/images/シーン3−4.jpeg", placeholderImage: "..." },
            { id: "3-5", text: "「でも、こんなに たくさんの<br>ひとには たりないよ…」", imagePath: "./assets/five_loaves/videos/シーン3−5.mp4", placeholderImage: "..." },
            { id: "4-1", text: "イエスさまは<br>にっこり ほほえみました。", imagePath: "./assets/five_loaves/images/シーン4−1.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "「ありがとう。<br>さあ、みんな すわりなさい」", imagePath: "./assets/five_loaves/videos/シーン4−2.mp4", placeholderImage: "..." },
            { id: "4-3", text: "イエスさまは パンと さかなを<br>てに とりました。", imagePath: "./assets/five_loaves/images/シーン4−3.jpeg", placeholderImage: "..." },
            { id: "4-4", text: "そして、おそらを みあげて<br>かみさまに おいのり しました。", imagePath: "./assets/five_loaves/videos/シーン4−4.mp4", placeholderImage: "..." },
            { id: "4-5", text: "かみさまは いつも<br>みんなを まもっています。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "イエスさまが パンを<br>ちぎって わたすと…", imagePath: "./assets/five_loaves/videos/シーン5−1.mp4", placeholderImage: "..." },
            { id: "5-2", text: "ふしぎな ことに<br>パンが どんどん ふえていきます。", imagePath: "./assets/five_loaves/images/シーン5−2.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "さかなも たくさん<br>ふえて いきました。", imagePath: "./assets/five_loaves/videos/シーン5−3.mp4", placeholderImage: "..." },
            { id: "5-4", text: "おでしたちが<br>みんなに くばりました。", imagePath: "./assets/five_loaves/images/シーン5−4.jpeg", placeholderImage: "..." },
            { id: "6-1", text: "「わあ、おいしい！」<br>みんな えがお です。", imagePath: "./assets/five_loaves/videos/シーン6−1.mp4", placeholderImage: "..." },
            { id: "6-2", text: "5せん にん も の ひとが<br>おなかいっぱい たべました。", imagePath: "./assets/five_loaves/images/シーン6−2.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "あまった パンを<br>かごに あつめると…", imagePath: "./assets/five_loaves/videos/シーン6−3.mp4", placeholderImage: "..." },
            { id: "6-4", text: "なんと、12こ の かごが<br>いっぱい に なりました！", imagePath: "./assets/five_loaves/images/シーン6−4.jpeg", placeholderImage: "..." },
            { id: "6-5", text: "かみさま、イエスさま、<br>ありがとう。", imagePath: "./assets/five_loaves/videos/シーン6−5.mp4", placeholderImage: "..." }
        ]
    },
    {
        id: "good_samaritan",
        title: "よき サマリアびと",
        cover: "./assets/good_samaritan/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "...", imagePath: "./assets/good_samaritan/images/シーン0−1.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "...", imagePath: "./assets/good_samaritan/images/シーン1−1.jpeg", placeholderImage: "..." },
            { id: "1-2", text: "...", imagePath: "./assets/good_samaritan/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "...", imagePath: "./assets/good_samaritan/images/シーン1−3.jpeg", placeholderImage: "..." },
            { id: "1-4", text: "...", imagePath: "./assets/good_samaritan/images/シーン1−4.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "...", imagePath: "./assets/good_samaritan/images/シーン2−1.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "...", imagePath: "./assets/good_samaritan/images/シーン2−2.jpeg", placeholderImage: "..." },
            { id: "2-3", text: "...", imagePath: "./assets/good_samaritan/images/シーン2−3.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "...", imagePath: "./assets/good_samaritan/images/シーン2−4.jpeg", placeholderImage: "..." },
            { id: "3-1", text: "...", imagePath: "./assets/good_samaritan/images/シーン3−1.jpeg", placeholderImage: "..." },
            { id: "3-2", text: "...", imagePath: "./assets/good_samaritan/images/シーン3−2.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "...", imagePath: "./assets/good_samaritan/images/シーン3−3.jpeg", placeholderImage: "..." },
            { id: "3-4", text: "...", imagePath: "./assets/good_samaritan/images/シーン3−4.jpeg", placeholderImage: "..." },
            { id: "4-1", text: "...", imagePath: "./assets/good_samaritan/images/シーン4−1.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "...", imagePath: "./assets/good_samaritan/images/シーン4−2.jpeg", placeholderImage: "..." },
            { id: "4-3", text: "...", imagePath: "./assets/good_samaritan/images/シーン4−3.jpeg", placeholderImage: "..." },
            { id: "4-4", text: "...", imagePath: "./assets/good_samaritan/images/シーン4−4.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "...", imagePath: "./assets/good_samaritan/images/シーン5−1.jpeg", placeholderImage: "..." },
            { id: "5-2", text: "...", imagePath: "./assets/good_samaritan/images/シーン5−2.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "...", imagePath: "./assets/good_samaritan/images/シーン5−3.jpeg", placeholderImage: "..." },
            { id: "5-4", text: "...", imagePath: "./assets/good_samaritan/images/シーン5−4.jpeg", placeholderImage: "..." },
            { id: "6-1", text: "...", imagePath: "./assets/good_samaritan/images/シーン6−1.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "...", imagePath: "./assets/good_samaritan/images/シーン6−2.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "...", imagePath: "./assets/good_samaritan/images/シーン6−3.jpeg", placeholderImage: "..." },
            { id: "6-4", text: "...", imagePath: "./assets/good_samaritan/images/シーン6−4.jpeg", placeholderImage: "..." },
            { id: "6-5", text: "...", imagePath: "./assets/good_samaritan/images/シーン6−5.jpeg", placeholderImage: "..." }
        ]
    },
    {
        id: "lost_sheep",
        title: "まいごの ひつじ",
        cover: "./assets/lost_sheep/images/シーン0-1.jpeg",
        scenes: [
            { id: "0-1", text: "まいごの ひつじ", imagePath: "./assets/lost_sheep/images/シーン0-1.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "あるところに、やさしい ひつじかいさんが いました。", imagePath: "./assets/lost_sheep/images/シーン1-1.jpeg", videoPath: "./assets/lost_sheep/videos/シーン1-1.mp4", placeholderImage: "..." },
            { id: "1-2", text: "ひつじかいさんは、ひつじを １００ぴき かっていました。", imagePath: "./assets/lost_sheep/images/シーン1-2.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "ひつじたちは、みんな なかよしです。<br>みどりの のはらで あそびます。", imagePath: "./assets/lost_sheep/images/シーン1-3.jpeg", videoPath: "./assets/lost_sheep/videos/シーン1-3.mp4", placeholderImage: "..." },
            { id: "1-4", text: "「さあ、おいしい くさを おたべ」<br>ひつじかいさんは、いつも みまもっています。", imagePath: "./assets/lost_sheep/images/シーン1-4.jpeg", placeholderImage: "..." },
            { id: "1-5", text: "ひつじたちは、ひつじかいさんが だいすきです。", imagePath: "./assets/lost_sheep/images/シーン1-5.jpeg", videoPath: "./assets/lost_sheep/videos/シーン1-5.mp4", placeholderImage: "..." },
            { id: "2-1", text: "ゆうぐれに なりました。<br>おうちへ かえる じかんです。", imagePath: "./assets/lost_sheep/images/シーン2-1.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "「１、２、３… ９９」<br>あれ？ １ぴき たりません。", imagePath: "./assets/lost_sheep/images/シーン2-2.jpeg", videoPath: "./assets/lost_sheep/videos/シーン2-2.mp4", placeholderImage: "..." },
            { id: "2-3", text: "ちいさな ひつじが、まいごに なって しまったのです。", imagePath: "./assets/lost_sheep/images/シーン2-3.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "ひつじかいさんは、びっくりして あたりを みまわしました。", imagePath: "./assets/lost_sheep/images/シーン2-4.jpeg", videoPath: "./assets/lost_sheep/videos/シーン2-4.mp4", placeholderImage: "..." },
            { id: "3-1", text: "「たいへんだ！ さがしに いかなくちゃ！」", imagePath: "./assets/lost_sheep/images/シーン3-1.jpeg", placeholderImage: "..." },
            { id: "3-2", text: "ひつじかいさんは、９９ぴきを のはらに のこして、はしりだしました。", imagePath: "./assets/lost_sheep/images/シーン3-2.jpeg", videoPath: "./assets/lost_sheep/videos/シーン3-2.mp4", placeholderImage: "..." },
            { id: "3-3", text: "くらい もりの なかや、けわしい やまみちを さがします。", imagePath: "./assets/lost_sheep/images/シーン3-3.jpeg", placeholderImage: "..." },
            { id: "3-4", text: "「どこに いるんだい？ でておいで！」<br>いっしょうけんめい よびかけます。", imagePath: "./assets/lost_sheep/images/シーン3-4.jpeg", videoPath: "./assets/lost_sheep/videos/シーン3-4.mp4", placeholderImage: "..." },
            { id: "4-1", text: "そのころ、まいごの ひつじは ひとりぼっちで ないていました。", imagePath: "./assets/lost_sheep/images/シーン4-1.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "「メェー、メェー」<br>こわくて、さみしくて、ふるえています。", imagePath: "./assets/lost_sheep/images/シーン4-2.jpeg", videoPath: "./assets/lost_sheep/videos/シーン4-2.mp4", placeholderImage: "..." },
            { id: "4-3", text: "あしもとが わるくて、とげとげの きに ひっかかって しまいました。", imagePath: "./assets/lost_sheep/images/シーン4-3.jpeg", placeholderImage: "..." },
            { id: "4-4", text: "「だれか たすけて…」<br>ひつじは、ちいさな こえで なきました。", imagePath: "./assets/lost_sheep/images/シーン4-4.jpeg", videoPath: "./assets/lost_sheep/videos/シーン4-4.mp4", placeholderImage: "..." },
            { id: "5-1", text: "そのときです！<br>「みつけたぞ！」", imagePath: "./assets/lost_sheep/images/シーン5-1.jpeg", placeholderImage: "..." },
            { id: "5-2", text: "ひつじかいさんが、かけつけて くれました。", imagePath: "./assets/lost_sheep/images/シーン5-2.jpeg", videoPath: "./assets/lost_sheep/videos/シーン5-2.mp4", placeholderImage: "..." },
            { id: "5-3", text: "「よかった、ケガは ないかい？」<br>やさしく だきしめて くれました。", imagePath: "./assets/lost_sheep/images/シーン5-3.jpeg", placeholderImage: "..." },
            { id: "5-4", text: "ひつじかいさんは、ひつじを かたに かついで、うれしそうに あるきだしました。", imagePath: "./assets/lost_sheep/images/シーン5-4.jpeg", videoPath: "./assets/lost_sheep/videos/シーン5-4.mp4", placeholderImage: "..." },
            { id: "6-1", text: "おうちへ かえると、みんなに おしえました。<br>「まいごの ひつじが みつかったよ！」", imagePath: "./assets/lost_sheep/images/シーン6-1.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "おともだちも よんで、みんなで パーティーです。", imagePath: "./assets/lost_sheep/images/シーン6-2.jpeg", videoPath: "./assets/lost_sheep/videos/シーン6-2.mp4", placeholderImage: "..." },
            { id: "6-3", text: "かみさまは、わたしたちの ことを この ひつじの ように だいじに してくれます。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "6-4", text: "１ぴきでも まいごに なったら、かならず さがしだして くれるのです。", imagePath: "./assets/lost_sheep/images/シーン6-4.jpeg", videoPath: "./assets/lost_sheep/videos/シーン6-4.mp4", placeholderImage: "..." }
        ]
    },
    {
        id: "crucifixion",
        title: "じゅうじかと ふっかつ",
        cover: "./assets/crucifixion/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "じゅうじかと ふっかつ", imagePath: "./assets/crucifixion/videos/シーン0−1.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン0−1.jpeg" },
            { id: "1-1", text: "イエスさまと おともだちが<br>ごはんを たべています。", imagePath: "./assets/crucifixion/images/シーン1−1.jpeg", is_video: false, placeholderImage: "" },
            { id: "1-2", text: "「これは わたしの からだと ちです。<br>みんなを あいしているよ。」", imagePath: "./assets/crucifixion/images/シーン1−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "1-3", text: "イエスさまは おやまの うえで<br>おいのりしました。", imagePath: "./assets/crucifixion/videos/シーン1−3.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン1−3.jpeg" },
            { id: "1-4", text: "かみさまは そらから<br>イエスさまを みまもっていました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "1-5", text: "そこへ、わるいひとたちが<br>イエスさまを つかまえに きました。", imagePath: "./assets/crucifixion/videos/シーン1−5.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン1−5.jpeg" },
            { id: "2-1", text: "「このひとは わるいひとだ！」と<br>ひとびとが おこっています。", imagePath: "./assets/crucifixion/images/シーン2−1.jpeg", is_video: false, placeholderImage: "" },
            { id: "2-2", text: "イエスさまは わるいことを していないのに、<br>じっと がまんしました。", imagePath: "./assets/crucifixion/images/シーン2−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "2-3", text: "イエスさまは おもい じゅうじかを<br>せおって あるきます。", imagePath: "./assets/crucifixion/videos/シーン2−3.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン2−3.jpeg" },
            { id: "2-4", text: "とても いたいけれど、<br>みんなの ために がんばりました。", imagePath: "./assets/crucifixion/images/シーン2−4.jpeg", is_video: false, placeholderImage: "" },
            { id: "3-1", text: "イエスさまは じゅうじかに<br>かけられました。", imagePath: "./assets/crucifixion/images/シーン3−1.jpeg", is_video: false, placeholderImage: "" },
            { id: "3-2", text: "「かみさま、このひとたちを<br>ゆるしてあげて。」", imagePath: "./assets/crucifixion/images/シーン3−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "3-3", text: "イエスさまは みんなの わるいこころを<br>ぜんぶ せおってくれました。", imagePath: "./assets/crucifixion/videos/シーン3−3.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン3−3.jpeg" },
            { id: "3-4", text: "そして、イエスさまは<br>いきを ひきとりました。", imagePath: "./assets/crucifixion/images/シーン3−4.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-1", text: "おともだちが イエスさまを<br>どうくつの おはかに いれました。", imagePath: "./assets/crucifixion/images/シーン4−1.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-2", text: "おおきな いしで<br>ぴたりと ふたを しました。", imagePath: "./assets/crucifixion/videos/シーン4−2.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン4−2.jpeg" },
            { id: "4-3", text: "みんな とても かなしくて、<br>たくさん ないています。", imagePath: "./assets/crucifixion/images/シーン4−3.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-4", text: "１にち、２にちと<br>じかんが すぎました。", imagePath: "./assets/crucifixion/images/シーン4−4.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-1", text: "３っかめの あさ、かみさまの ちからで<br>ひかりが さしました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-2", text: "なんと、おはかの いしが<br>ころがり あいています！", imagePath: "./assets/crucifixion/videos/シーン5−2.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン5−2.jpeg" },
            { id: "5-3", text: "「イエスさまが いない！」<br>おんなのひとたちが びっくりしています。", imagePath: "./assets/crucifixion/images/シーン5−3.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-4", text: "てんしが あらわれて 言いました。<br>「イエスさまは いきかえりましたよ！」", imagePath: "./assets/crucifixion/videos/シーン5−4.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン5−4.jpeg" },
            { id: "6-1", text: "イエスさまが みんなの まえに<br>あらわれました！", imagePath: "./assets/crucifixion/videos/シーン6−1.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン6−1.jpeg" },
            { id: "6-2", text: "「イエスさま！<br>いきかえったのですね！」", imagePath: "./assets/crucifixion/images/シーン6−2.jpeg", is_video: false, placeholderImage: "" },
            { id: "6-3", text: "イエスさまの おかげで、<br>みんなの こころは きれいになりました。", imagePath: "./assets/crucifixion/videos/シーン6−3.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン6−3.jpeg" },
            { id: "6-4", text: "イエスさまは いつまでも<br>わたしたちと いっしょです。", imagePath: "./assets/crucifixion/videos/シーン6−4.mp4", is_video: true, placeholderImage: "./assets/crucifixion/images/シーン6−4.jpeg" }
        ]
    },
    {
        id: "ascension",
        title: "てんに のぼる イエスさま",
        cover: "./assets/ascension/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "イエスさまが おそらに<br>のぼっていくよ。", imagePath: "./assets/ascension/images/シーン0−1.jpeg", placeholderImage: "./assets/ascension/images/シーン0−1.jpeg" },
            { id: "1-1", text: "イエスさまが じゅうじかに かかった あと、<br>ふしぎな ことが おきました。", imagePath: "./assets/ascension/videos/シーン1−1.mp4", placeholderImage: "./assets/ascension/images/シーン1−1.jpeg" },
            { id: "1-2", text: "イエスさまが、おはかから<br>よみがえったのです！", imagePath: "./assets/ascension/images/シーン1−2.jpeg", placeholderImage: "./assets/ascension/images/シーン1−2.jpeg" },
            { id: "1-3", text: "イエスさまは、おでしさんたちの<br>ところに きました。", imagePath: "./assets/ascension/videos/シーン1−3.mp4", placeholderImage: "./assets/ascension/images/シーン1−3.jpeg" },
            { id: "1-4", text: "みんな、イエスさまに あえて<br>とっても よろこびました。", imagePath: "./assets/ascension/images/シーン1−4.jpeg", placeholderImage: "./assets/ascension/images/シーン1−4.jpeg" },
            { id: "2-1", text: "イエスさまは、みんなと いっしょに<br>ごはんを たべました。", imagePath: "./assets/ascension/images/シーン2−1.jpeg", placeholderImage: "./assets/ascension/images/シーン2−1.jpeg" },
            { id: "2-2", text: "そして、かみさまの くにの ことを<br>たくさん おしえてくれました。", imagePath: "./assets/ascension/videos/シーン2−2.mp4", placeholderImage: "./assets/ascension/images/シーン2−2.jpeg" },
            { id: "2-3", text: "「わたしは いつも<br>みんなと いっしょに いるよ」", imagePath: "./assets/ascension/images/シーン2−3.jpeg", placeholderImage: "./assets/ascension/images/シーン2−3.jpeg" },
            { id: "2-4", text: "イエスさまの おはなしは、<br>とっても あたたかくて やさしいです。", imagePath: "./assets/ascension/videos/シーン2−4.mp4", placeholderImage: "./assets/ascension/images/シーン2−4.jpeg" },
            { id: "3-1", text: "ある日、イエスさまは みんなを<br>おやまに あつめました。", imagePath: "./assets/ascension/images/シーン3−1.jpeg", placeholderImage: "./assets/ascension/images/シーン3−1.jpeg" },
            { id: "3-2", text: "そして、たいせつな ことを<br>お話ししました。", imagePath: "./assets/ascension/videos/シーン3−2.mp4", placeholderImage: "./assets/ascension/images/シーン3−2.jpeg" },
            { id: "3-3", text: "「せかいじゅうの 人に、<br>かみさまの あいを つたえなさい」", imagePath: "./assets/ascension/images/シーン3−3.jpeg", placeholderImage: "./assets/ascension/images/シーン3−3.jpeg" },
            { id: "3-4", text: "「みんなを わたしの おでしさんに<br>しなさい」", imagePath: "./assets/ascension/videos/シーン3−4.mp4", placeholderImage: "./assets/ascension/images/シーン3−4.jpeg" },
            { id: "4-1", text: "おはなしが おわると、<br>ふしぎな ことが おきました。", imagePath: "./assets/ascension/videos/シーン4−1.mp4", placeholderImage: "./assets/ascension/images/シーン4−1.jpeg" },
            { id: "4-2", text: "イエスさまのからだが、<br>ふわっと ちゅうに うきました。", imagePath: "./assets/ascension/videos/シーン4−2.mp4", placeholderImage: "./assets/ascension/images/シーン4−2.jpeg" },
            { id: "4-3", text: "イエスさまは、すこしずつ<br>おそらに のぼっていきます。", imagePath: "./assets/ascension/images/シーン4−3.jpeg", placeholderImage: "./assets/ascension/images/シーン4−3.jpeg" },
            { id: "4-4", text: "「イエスさま、どこに<br>いっちゃうの？」", imagePath: "./assets/ascension/videos/シーン4−4.mp4", placeholderImage: "./assets/ascension/images/シーン4−4.jpeg" },
            { id: "5-1", text: "やさしい ひかりに つつまれて、<br>イエスさまは どんどん のぼります。", imagePath: "./assets/ascension/videos/シーン5−1.mp4", placeholderImage: "./assets/ascension/images/シーン5−1.jpeg" },
            { id: "5-2", text: "白い くもが、イエスさまを<br>やさしく つつみました。", imagePath: "./assets/ascension/images/シーン5−2.jpeg", placeholderImage: "./assets/ascension/images/シーン5−2.jpeg" },
            { id: "5-3", text: "みんなは、ずっと ずっと<br>おそらを みあげていました。", imagePath: "./assets/ascension/videos/シーン5−3.mp4", placeholderImage: "./assets/ascension/images/シーン5−3.jpeg" },
            { id: "5-4", text: "みんなの こころは、<br>イエスさまの あいで いっぱいです。", imagePath: "./assets/ascension/images/シーン5−4.jpeg", placeholderImage: "./assets/ascension/images/シーン5−4.jpeg" },
            { id: "6-1", text: "すると、しろい ふくを きた<br>てんしが あらわれました。", imagePath: "./assets/ascension/images/シーン6−1.jpeg", placeholderImage: "./assets/ascension/images/シーン6−1.jpeg" },
            { id: "6-2", text: "「イエスさまは、また いつか<br>おなじように かえってきますよ」", imagePath: "./assets/ascension/videos/シーン6−2.mp4", placeholderImage: "./assets/ascension/images/シーン6−2.jpeg" },
            { id: "6-3", text: "てんしは、みんなに<br>そう おしえてくれました。", imagePath: "./assets/ascension/images/シーン6−3.jpeg", placeholderImage: "./assets/ascension/images/シーン6−3.jpeg" },
            { id: "6-4", text: "みんなは よろこんで、<br>かみさまの あいを つたえに いきました。", imagePath: "./assets/ascension/videos/シーン6−4.mp4", placeholderImage: "./assets/ascension/images/シーン6−4.jpeg" },
            { id: "6-5", text: "イエスさまは、おそらの かみさまの<br>ところで みんなを みまもっています。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "./assets/adam_and_eve/images/シーン1−2.jpeg" }
        ]
    },
    {
        id: "pentecost",
        title: "ペンテコステの ひ",
        cover: "./assets/pentecost/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "ペンテコステの ひ", is_video: false, imagePath: "./assets/pentecost/images/シーン0−1.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "イエスさまが おそらに のぼっていくよ。", is_video: true, imagePath: "./assets/pentecost/images/シーン1−1.jpeg", videoPath: "./assets/pentecost/videos/シーン1−1.mp4", placeholderImage: "..." },
            { id: "1-2", text: "「わたしは いつも いっしょに いるよ。」", is_video: false, imagePath: "./assets/pentecost/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "「かみさまの ちからを おくるから、まっていてね。」", is_video: true, imagePath: "./assets/pentecost/images/シーン1−3.jpeg", videoPath: "./assets/pentecost/videos/シーン1−3.mp4", placeholderImage: "..." },
            { id: "1-4", text: "おでしたちは、そらを みあげて おみおくりをしたよ。", is_video: false, imagePath: "./assets/pentecost/images/シーン1−4.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "おでしたちは おへやに あつまったよ。", is_video: false, imagePath: "./assets/pentecost/images/シーン2−1.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "みんなで おいのりをして まっていたんだ。", is_video: true, imagePath: "./assets/pentecost/images/シーン2−2.jpeg", videoPath: "./assets/pentecost/videos/シーン2−2.mp4", placeholderImage: "..." },
            { id: "2-3", text: "「かみさま、イエスさまの おやくそくは いつかな？」", is_video: false, imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "みんな なかよく、おいのり していたよ。", is_video: false, imagePath: "./assets/pentecost/images/シーン2−4.jpeg", placeholderImage: "..." },
            { id: "3-1", text: "あるひ、とつぜん つよい かぜが ふいてきた！", is_video: true, imagePath: "./assets/pentecost/images/シーン3−1.jpeg", videoPath: "./assets/pentecost/videos/シーン3−1.mp4", placeholderImage: "..." },
            { id: "3-2", text: "ビューッ！ おへやの なかに かぜの おとが ひびくよ。", is_video: false, imagePath: "./assets/pentecost/images/シーン3−2.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "すると、ちいさな ほのおが みえてきたよ。", is_video: true, imagePath: "./assets/pentecost/images/シーン3−3.jpeg", videoPath: "./assets/pentecost/videos/シーン3−3.mp4", placeholderImage: "..." },
            { id: "3-4", text: "ほのおは、みんなの あたまの うえに おりてきたんだ。", is_video: false, imagePath: "./assets/pentecost/images/シーン3−4.jpeg", placeholderImage: "..." },
            { id: "3-5", text: "でも、あつくないよ。<br>これは「せいれい」という かみさまの ちからだよ。", is_video: false, imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "..." },
            { id: "4-1", text: "みんなの こころが ぽかぽか あたたかくなったよ。", is_video: true, imagePath: "./assets/pentecost/images/シーン4−1.jpeg", videoPath: "./assets/pentecost/videos/シーン4−1.mp4", placeholderImage: "..." },
            { id: "4-2", text: "こわがりだった おでしたちも、ゆうきが わいてきたんだ。", is_video: false, imagePath: "./assets/pentecost/images/シーン4−2.jpeg", placeholderImage: "..." },
            { id: "4-3", text: "「かみさま、ありがとう！」", is_video: true, imagePath: "./assets/pentecost/images/シーン4−3.jpeg", videoPath: "./assets/pentecost/videos/シーン4−3.mp4", placeholderImage: "..." },
            { id: "4-4", text: "みんな、とっても うれしそう！", is_video: false, imagePath: "./assets/pentecost/images/シーン4−4.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "おでしたちは、おそとに でて おはなしを はじめたよ。", is_video: true, imagePath: "./assets/pentecost/images/シーン5−1.jpeg", videoPath: "./assets/pentecost/videos/シーン5−1.mp4", placeholderImage: "..." },
            { id: "5-2", text: "あれ？ いろんな くにの ことばで おはなし しているよ！", is_video: false, imagePath: "./assets/pentecost/images/シーン5−2.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "まちの ひとたちは、びっくり！", is_video: true, imagePath: "./assets/pentecost/images/シーン5−3.jpeg", videoPath: "./assets/pentecost/videos/シーン5−3.mp4", placeholderImage: "..." },
            { id: "5-4", text: "「ぼくたちの くにの ことばで おはなし している！」", is_video: false, imagePath: "./assets/pentecost/images/シーン5−4.jpeg", placeholderImage: "..." },
            { id: "5-5", text: "かみさまの ちからって、すごいね！", is_video: false, imagePath: "./assets/pentecost/images/シーン5−5.jpeg", placeholderImage: "..." },
            { id: "6-1", text: "ペテロさんが、みんなに イエスさまの ことを おはなししたよ。", is_video: true, imagePath: "./assets/pentecost/images/シーン6−1.jpeg", videoPath: "./assets/pentecost/videos/シーン6−1.mp4", placeholderImage: "..." },
            { id: "6-2", text: "「イエスさまは、みんなの ことを あいしているよ！」", is_video: false, imagePath: "./assets/pentecost/images/シーン6−2.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "たくさんの ひとが、かみさまを だいすきに なったよ。", is_video: true, imagePath: "./assets/pentecost/images/シーン6−3.jpeg", videoPath: "./assets/pentecost/videos/シーン6−3.mp4", placeholderImage: "..." },
            { id: "6-4", text: "こうして、はじめの きょうかいが できたんだ。<br>みんな えがおだね！", is_video: false, imagePath: "./assets/pentecost/images/シーン6−4.jpeg", placeholderImage: "..." }
        ]
    },
    {
        id: "new_heaven_and_earth",
        title: "あたらしい てんと ち",
        cover: "./assets/new_heaven_and_earth/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", is_video: false, text: "あたらしい てんと ち", imagePath: "./assets/new_heaven_and_earth/images/シーン0−1.jpeg", placeholderImage: "..." },
            { id: "1-1", is_video: false, text: "わたしたちの すんでいる せかいには、<br>ときどき かなしいことや いたいことがあります。", imagePath: "./assets/new_heaven_and_earth/images/シーン1−1.jpeg", placeholderImage: "..." },
            { id: "1-2", is_video: false, text: "でも、かみさまは とっても すてきな<br>おやくそくを してくれました。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "1-3", is_video: false, text: "「いつか、すべてを あたらしく するよ」<br>かみさまは そう おっしゃいました。", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "..." },
            { id: "1-4", is_video: true, text: "それは どんな せかい なんでしょう？", imagePath: "./assets/new_heaven_and_earth/videos/シーン1−4.mp4", placeholderImage: "..." },
            { id: "2-1", is_video: true, text: "あるひ、おそらから イエスさまが<br>もどって こられます。", imagePath: "./assets/new_heaven_and_earth/videos/シーン2−1.mp4", placeholderImage: "..." },
            { id: "2-2", is_video: false, text: "イエスさまは ピカピカ ひかる<br>きれいないろに つつまれています。", imagePath: "./assets/new_heaven_and_earth/images/シーン2−2.jpeg", placeholderImage: "..." },
            { id: "2-3", is_video: true, text: "「みんな、おまたせ！」<br>イエスさまは やさしく わらいます。", imagePath: "./assets/new_heaven_and_earth/videos/シーン2−3.mp4", placeholderImage: "..." },
            { id: "2-4", is_video: true, text: "どうぶつたちも こどもたちも、<br>みんな イエスさまの ところへ あつまります。", imagePath: "./assets/new_heaven_and_earth/videos/シーン2−4.mp4", placeholderImage: "..." },
            { id: "3-1", is_video: true, text: "そして、かみさまが つくった<br>「あたらしい せかい」が はじまります。", imagePath: "./assets/new_heaven_and_earth/videos/シーン3−1.mp4", placeholderImage: "..." },
            { id: "3-2", is_video: false, text: "きらきら ひかる きれいな おみずや、<br>おいしい くだものが たくさん あります。", imagePath: "./assets/new_heaven_and_earth/images/シーン3−2.jpeg", placeholderImage: "..." },
            { id: "3-3", is_video: true, text: "くらい よるは もう ありません。<br>かみさまの ひかりが ずっと てらしているからです。", imagePath: "./assets/new_heaven_and_earth/videos/シーン3−3.mp4", placeholderImage: "..." },
            { id: "3-4", is_video: false, text: "らいおんさんと ひつじさんが、<br>いっしょに なかよく おひるね しています。", imagePath: "./assets/new_heaven_and_earth/images/シーン3−4.jpeg", placeholderImage: "..." },
            { id: "3-5", is_video: true, text: "おおかみさんも うさぎさんも、<br>みんな ずっと おともだち です。", imagePath: "./assets/new_heaven_and_earth/videos/シーン3−5.mp4", placeholderImage: "..." },
            { id: "4-1", is_video: false, text: "かみさまは やさしく<br>なみだを ふいてくださいます。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "4-2", is_video: false, text: "「もう なくことは ないんだよ」<br>かみさまは やさしく おっしゃいます。", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "..." },
            { id: "4-3", is_video: true, text: "いたいことも、かなしいことも、<br>びょうきも ぜんぶ なくなります。", imagePath: "./assets/new_heaven_and_earth/videos/シーン4−3.mp4", placeholderImage: "..." },
            { id: "4-4", is_video: false, text: "みんなの おかおは、<br>にこにこ えがおで いっぱいです。", imagePath: "./assets/new_heaven_and_earth/images/シーン4−4.jpeg", placeholderImage: "..." },
            { id: "5-1", is_video: false, text: "かみさまは、わたしたちと いっしょに<br>すんでくださいます。", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "..." },
            { id: "5-2", is_video: true, text: "わたしたちは かみさまの こどもとして、<br>ずっと ずっと なかよく くらします。", imagePath: "./assets/new_heaven_and_earth/videos/シーン5−2.mp4", placeholderImage: "..." },
            { id: "5-3", is_video: true, text: "おててを つないで、<br>うたを うたって あそびます。", imagePath: "./assets/new_heaven_and_earth/videos/シーン5−3.mp4", placeholderImage: "..." },
            { id: "5-4", is_video: true, text: "ほんとうに とっても すてきな<br>あたらしい せかい です。", imagePath: "./assets/new_heaven_and_earth/videos/シーン5−4.mp4", placeholderImage: "..." },
            { id: "6-1", is_video: false, text: "かみさま、すてきな おやくそくを<br>ありがとうございます。", imagePath: "./assets/new_heaven_and_earth/images/シーン6−1.jpeg", placeholderImage: "..." },
            { id: "6-2", is_video: true, text: "イエスさまが きてくれる ひを、<br>みんなで たのしみに まっています。", imagePath: "./assets/new_heaven_and_earth/videos/シーン6−2.mp4", placeholderImage: "..." },
            { id: "6-3", is_video: true, text: "アーメン。", imagePath: "./assets/new_heaven_and_earth/videos/シーン6−3.mp4", placeholderImage: "..." }
        ]
    }
]; // 「おしまい」のシーンを自動追加
books.forEach(book => {
    if (book.scenes && book.scenes.length > 0) {
        book.scenes.push({
            id: book.id + "-end",
            text: "",
            imagePath: "https://placehold.co/1280x720/1a1a1a/1a1a1a",
            videoPath: "", 
            placeholderImage: "https://placehold.co/1280x720/1a1a1a/1a1a1a"
        });
    }
});

let currentBook = null;
let currentSceneIndex = 0;

// DOM Elements
const bookshelfContainer = document.getElementById('bookshelf-container');
const booksGrid = document.getElementById('books-grid');
const bookContainer = document.getElementById('book-container');
const headerEl = document.getElementById('header');
const backBtn = document.getElementById('back-btn');

const sceneImageEl = document.getElementById('scene-image');
const sceneVideoEl = document.getElementById('scene-video');
const sceneTextEl = document.getElementById('scene-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressEl = document.getElementById('progress');
const topControlsEl = document.getElementById('top-controls');
const toggleTextBtn = document.getElementById('toggle-text-btn');
const muteBtn = document.getElementById('mute-btn');
const glassPanel = document.querySelector('.glass-panel');
const controlsEl = document.querySelector('.controls');
const progressContainerEl = document.querySelector('.progress-bar-container');
const bookContainerEl = document.getElementById('book-container');

let isGlobalMuted = false;
let currentSentenceIndex = 0;
let currentSceneSentences = [];

// プリロード用キャッシュ
const preloadedImages = new Map();
const preloadedVideos = new Map();

// ローディングオーバーレイを作成
const loadingOverlay = document.createElement('div');
loadingOverlay.id = 'loading-overlay';
loadingOverlay.innerHTML = '<div class="loading-spinner"><div class="spinner-dot"></div><div class="spinner-dot"></div><div class="spinner-dot"></div></div><p class="loading-text">よみこみちゅう...</p>';
loadingOverlay.style.display = 'none';
bookContainerEl.appendChild(loadingOverlay);

function showLoading() {
    loadingOverlay.style.display = 'flex';
}
function hideLoading() {
    loadingOverlay.style.display = 'none';
}

function checkImage(url) {
    if (!url) return Promise.resolve(false);
    if (preloadedImages.has(url)) return Promise.resolve(true);
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => { preloadedImages.set(url, true); resolve(true); };
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

// 次のシーンの画像・動画を先読みする
function preloadNextScene(index) {
    if (!currentBook || !currentBook.scenes) return;
    const nextIndex = index + 1;
    if (nextIndex >= currentBook.scenes.length) return;
    const nextScene = currentBook.scenes[nextIndex];

    // 画像のプリロード
    if (nextScene.imagePath && !preloadedImages.has(nextScene.imagePath)) {
        const img = new Image();
        img.onload = () => preloadedImages.set(nextScene.imagePath, true);
        img.src = nextScene.imagePath;
    }

    // 動画のプリロード（fetch APIでバックグラウンドダウンロード）
    if (nextScene.videoPath && !preloadedVideos.has(nextScene.videoPath)) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = nextScene.videoPath;
        link.as = 'video';
        document.head.appendChild(link);
        preloadedVideos.set(nextScene.videoPath, true);
    }
}

async function renderScene(index, startFromEnd = false) {
    if (!currentBook || !currentBook.scenes || currentBook.scenes.length === 0) return;
    
    const scenes = currentBook.scenes;
    if (index < 0 || index >= scenes.length) return;
    
    currentSceneIndex = index;
    const scene = scenes[index];

    currentSceneSentences = scene.text.split(/<br\s*\/?>/).map(s => s.trim()).filter(s => s.length > 0);
    currentSentenceIndex = startFromEnd ? Math.max(0, currentSceneSentences.length - 1) : 0;

    renderCurrentSentence();

    if (scene.videoPath) {
        sceneImageEl.classList.add('hidden');
        sceneVideoEl.classList.remove('hidden');

        // ローディング表示
        showLoading();
        sceneVideoEl.preload = 'auto';
        sceneVideoEl.src = scene.videoPath;
        sceneVideoEl.muted = isGlobalMuted;

        // 動画が再生可能になったらローディングを消す
        const onCanPlay = () => {
            hideLoading();
            sceneVideoEl.removeEventListener('canplay', onCanPlay);
        };
        sceneVideoEl.addEventListener('canplay', onCanPlay);
        sceneVideoEl.play().catch(e => console.log("Video autoplay blocked", e));

        // 3秒経過してもロード完了しない場合はローディングを消す（フォールバック）
        setTimeout(() => hideLoading(), 3000);
    } else {
        sceneVideoEl.classList.add('hidden');
        sceneVideoEl.pause();
        sceneImageEl.classList.remove('hidden');

        // ローディング表示
        showLoading();
        const hasRealImage = await checkImage(scene.imagePath);
        const bgUrl = hasRealImage ? scene.imagePath : scene.placeholderImage;
        sceneImageEl.style.backgroundImage = `url('${bgUrl}')`;
        hideLoading();
    }

    const progressPercent = ((index + 1) / scenes.length) * 100;
    progressEl.style.width = `${progressPercent}%`;

    // 最初のシーンの最初の文ならprevを無効化
    prevBtn.disabled = index === 0 && currentSentenceIndex === 0;
    // 最後のシーンの最後の文ならnextを無効化
    nextBtn.disabled = index === scenes.length - 1 && currentSentenceIndex === currentSceneSentences.length - 1;

    // 次のシーンを先読み
    preloadNextScene(index);
}

function renderCurrentSentence() {
    sceneTextEl.innerHTML = '';
    const scene = currentBook.scenes[currentSceneIndex];

    if (scene.id.endsWith('-end')) {
        const div = document.createElement('div');
        div.className = 'the-end-text fade-in';
        div.innerHTML = "おしまい";
        sceneTextEl.appendChild(div);
        
        if (currentBook && currentBook.scenes) {
            prevBtn.disabled = false;
            nextBtn.disabled = true;
        }
        return;
    }

    if (currentSceneSentences.length > 0 && currentSentenceIndex < currentSceneSentences.length) {
        const sentence = currentSceneSentences[currentSentenceIndex];
        const span = document.createElement('span');
        span.className = 'sentence';
        span.style.animationDelay = '0s'; // クリックですぐアニメーション開始
        span.innerHTML = sentence;
        sceneTextEl.appendChild(span);
    }
    
    if (currentBook && currentBook.scenes) {
        prevBtn.disabled = currentSceneIndex === 0 && currentSentenceIndex === 0;
        nextBtn.disabled = currentSceneIndex === currentBook.scenes.length - 1 && currentSentenceIndex === currentSceneSentences.length - 1;
    }
}

function openBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    currentBook = book;
    
    // UI切り替え
    bookshelfContainer.classList.add('hidden');
    bookContainer.classList.remove('hidden');
    headerEl.classList.remove('hidden');
    topControlsEl.classList.remove('hidden');
    controlsEl.classList.remove('hidden');
    progressContainerEl.classList.remove('hidden');

    if (currentBook.scenes && currentBook.scenes.length > 0) {
        // 最初の2シーンを先読み開始
        preloadNextScene(-1); // index 0を先読み
        preloadNextScene(0);  // index 1を先読み
        renderScene(0);
    } else {
        sceneImageEl.style.backgroundImage = `url('${currentBook.cover}')`;
        const span = document.createElement('span');
        span.className = 'sentence';
        span.innerHTML = "このお話は じゅんびちゅう です。";
        sceneTextEl.innerHTML = '';
        sceneTextEl.appendChild(span);
        progressEl.style.width = `100%`;
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    }
}

function closeBook() {
    currentBook = null;
    currentSceneIndex = 0;

    // UI切り替え
    bookContainer.classList.add('hidden');
    headerEl.classList.add('hidden');
    topControlsEl.classList.add('hidden');
    controlsEl.classList.add('hidden');
    progressContainerEl.classList.add('hidden');
    bookshelfContainer.classList.remove('hidden');
    
    sceneVideoEl.pause();
    sceneVideoEl.src = "";
}

function renderBookshelf() {
    booksGrid.innerHTML = '';
    books.forEach(book => {
        const isComingSoon = !book.scenes || book.scenes.length === 0;
        const card = document.createElement('div');
        card.className = 'book-card' + (isComingSoon ? ' coming-soon-card' : '');
        card.onclick = () => openBook(book.id);

        card.innerHTML = `
            <div class="book-cover" style="background-image: url('${book.cover}')"></div>
            ${isComingSoon ? '<div class="coming-soon-badge">Coming Soon</div>' : ''}
            <div class="book-info">
                <div class="book-title">${book.title}</div>
            </div>
        `;
        booksGrid.appendChild(card);
    });
}

function advanceNext() {
    if (!currentBook || !currentBook.scenes || currentBook.scenes.length === 0) return;
    if (currentSentenceIndex < currentSceneSentences.length - 1) {
        currentSentenceIndex++;
        renderCurrentSentence();
    } else if (currentSceneIndex < currentBook.scenes.length - 1) {
        renderScene(currentSceneIndex + 1);
    }
}

function advancePrev() {
    if (!currentBook || !currentBook.scenes || currentBook.scenes.length === 0) return;
    if (currentSentenceIndex > 0) {
        currentSentenceIndex--;
        renderCurrentSentence();
    } else if (currentSceneIndex > 0) {
        renderScene(currentSceneIndex - 1, true);
    }
}

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    advancePrev();
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    advanceNext();
});

bookContainerEl.addEventListener('click', (e) => {
    if (e.target.closest('.controls') || e.target.closest('#top-controls') || e.target.closest('button')) return;
    advanceNext();
});

backBtn.addEventListener('click', closeBook);

toggleTextBtn.addEventListener('click', () => {
    glassPanel.classList.toggle('hidden');
    if (glassPanel.classList.contains('hidden')) {
        toggleTextBtn.textContent = '文字をだす';
    } else {
        toggleTextBtn.textContent = '文字をかくす';
    }
});

muteBtn.addEventListener('click', () => {
    isGlobalMuted = !isGlobalMuted;
    sceneVideoEl.muted = isGlobalMuted;
    if (isGlobalMuted) {
        muteBtn.textContent = '🔇 音をだす';
    } else {
        muteBtn.textContent = '🔊 音をけす';
    }
});

// 初期化
renderBookshelf();

// キーボード操作（矢印キー、エンターキー）
window.addEventListener('keydown', (e) => {
    if (!currentBook || !currentBook.scenes || currentBook.scenes.length === 0) return;
    
    if (e.key === 'ArrowRight' || e.key === 'Enter') {
        advanceNext();
    } else if (e.key === 'ArrowLeft') {
        advancePrev();
    } else if (e.key === 'Escape') {
        closeBook();
    }
});

// スワイプ操作（スマホ・iPad対応）
let touchStartX = 0;
let touchEndX = 0;

window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

window.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    if (!currentBook || !currentBook.scenes || currentBook.scenes.length === 0) return;
    
    const swipeThreshold = 50; 
    if (touchEndX < touchStartX - swipeThreshold) {
        advanceNext();
    } else if (touchEndX > touchStartX + swipeThreshold) {
        advancePrev();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    renderBookshelf();
    // デフォルトで本棚を表示するため、他のUIを隠しておく
    bookContainer.classList.add('hidden');
    headerEl.classList.add('hidden');
    topControlsEl.classList.add('hidden');
    controlsEl.classList.add('hidden');
    progressContainerEl.classList.add('hidden');
});
