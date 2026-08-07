const books = [
    {
        id: "creation",
        title: "天地創造",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/image9-8.jpeg",
        scenes: [
            { id: "c-1", text: "むかしむかし、せかいは なーんにも なかった。<br>まっくら で、とっても しずかな ばしょ。<br>でも、だいじょうぶ！ かみさま が いたよ。<br>かみさまは とっても やさしくて、 みんなの ことが だいすき。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-52.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/video-51.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1" },
            { id: "c-2", text: "『そうだ！ みんなと いっしょに あそべる、 すてきな せかい を つくろう！』<br>かみさまは わくわく しました。<br>まっくらな やみのなか で しあわせな せかい を つくるため たくさん かんがえました。<br>さあ、かみさま の すごい おしごと、 はじまり はじまり！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-69.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/video%20%282%29-68.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2" },
            { id: "c-3", text: "かみさまは、まず、こう いいました。<br>『ひかり あれ！』", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/image5-12.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3" },
            { id: "c-4", text: "すると、どうでしょう！ まっくらだった せかい が、 ぴかーっ！ と あかるく なりました。<br>かみさまは、あかるい じかん を 『おひる』、 くらい じかん を 『よる』 と よぶことに しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-73.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/video%20%283%29-72.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4" },
            { id: "c-5", text: "つぎに、かみさまは、 あおくて ひろーい 『そら』 を つくりました。<br>みず を ぐぐーっと あつめて、 ざぶーん！ 『うみ』 に しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-97.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/video%20%284%29-96.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5" },
            { id: "c-6", text: "かわいた ところ は、 しっかりとした 『だいち』 に なりました。<br>かみさまは これ を みて、 『うん、とっても よし！』と、 にっこり わらって いいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-100.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/Aerial_photography_timelapse_202512011346-99.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6" },
            { id: "c-7", text: "そして かみさまは、だいち に やさしく こえ を かけました。<br>さあ、げんきな き や くさ や おはなたち でてきなさい！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-106.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/The_character_is_202512011440-105.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+7" },
            { id: "c-8", text: "すると、 にょき！ にょきにょき！ ちいさな くさ が うまれました。<br>ぐんぐん ぐーん！ おおきな き も そだちました。<br>かわいい おはな も、いっぱい！ あかい りんご や、きいろい バナナ、 おいしい くだもの も、たくさん なりました。<br>せかいは きれいな みどり で いっぱいです！<br>かみさまは これ を みて、 『うん、とっても よし！』と、 またまた にっこり しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-114.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/Green_grass_sprouts_202512011447-113.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+8" },
            { id: "c-9", text: "さあ、つぎは げんきな おともだち の ばんだ！<br>かみさまは、つぎつぎに おともだち を よびました。<br>『うみの ともだち、おいで！』<br>すいすい～っ と おさかなたち。 おおきな くじら も ぷはーっ！<br>『そら の ともだち、おいで！』<br>ぱたぱた～っ と とりたちが、 おおぞら へ とんで いきます。<br>『だいち の ともだち、おいで！』<br>とことこ うさぎさん、どっしん ぞうさん！ みんな げんきに かけだしました。<br>かみさまは、みんなが げんき いっぱい なのを みて、 とっても うれしく なりました。<br>『うん、みんな とっても よし！』", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-117.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/The_yellow_character_202512011501-116.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+9" },
            { id: "c-10", text: "さあ、いよいよ、 いちばん だいじな、 かみさま の 『こども』 を つくります。<br>かみさまは、じぶん に そっくりな、 とくべつな こども を つくろう と おもいました。<br>だいち の つち を あつめて、 やさしく、からだ を つくりました。 『おとこのこ』 です。<br>かみさまが、そーっと いき を ふーっ と ふきかけると、 あったかい こころ が ぽっ と うまれました。<br>かみさまは、もうひとり、 なかよしの ともだち も つくりました。 『おんなのこ』 です。<br>かみさま は みんな の ことが だいすき 。みんなと おはなし できるように しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-127.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/video%20%286%29-126.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+10" },
            { id: "c-11", text: "かみさまは、うまれた ふたり を みて、 いままで で いちばん おおきな こえ で いいました。<br>『とっても よかった！』<br>かみさまは、ふたり を やさしく みつめて、 おはなし しました。<br>『ふたり とも、なかよく くらしなさい』<br>『そして、この せかい の どうぶつ や おはな たち は すべて あなたたち のために つくったんだよ』<br>みんな を たいせつ に してね。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-160.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/video%20%282%29-159.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+11" },
            { id: "c-12", text: "こうして かみさまは この うつくしい せかい を ぜーんぶ つくり おえました。<br>おはな も とり も どうぶつ も みんな なかよく くらす すてきな せかい が はじまりました。<br>この えほん を よんでいる みんな も かみさまが つくった だいじな だいじな 『こども』 です。<br>かみさまが つくった この せかい と まわりの ひと どうぶつたち みんなを たいせつ に しようね。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/posterImage-135.png", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/images/creation/video-134.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+12" }
        ]
    },
    {
        id: "adam_and_eve",
        title: "三大祝福",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "かみさまの こども アダムと エバ 〜かみさまとの おやくそく〜", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+0-1" },
            { id: "1-1", text: "広い広い エデンの園で、アダムと エバは 生まれました。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-1" },
            { id: "1-2", text: "「アダム、エバ。はじめまして！ ずっと いっしょだよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-2" },
            { id: "1-3", text: "かみさまは、ふたりの おとうさんで、おかあさんです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-3" },
            { id: "1-4", text: "ふたりは、かみさまの 手を ぎゅっと にぎって、おさんぽ するのが 大好き！", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-4" },
            { id: "2-1", text: "アダムと エバは、かみさま みたいに、おたがいに たすけあい みんなを よろこばせたいと おもいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-1" },
            { id: "2-2", text: "そんな ふたりも、ときには ころんで 泣いてしまう ことが ありました。すると かみさまは、心配して、急いで かけよりました。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-2" },
            { id: "2-3", text: "ふたりが きれいな お花を 見つけて 笑うと、かみさまも いっしょに にっこり わらいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-3" },
            { id: "2-4", text: "かみさまと おなじ 気持ちを しって、ふたりの こころは「愛」で ぽかぽかに なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%925.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-4" },
            { id: "2-5", text: "「ねえねえ、みんなは どんな ときに うれしくなるの？」", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-5" },
            { id: "3-1", text: "かみさまと アダムと エバには 夢が ありました。キラキラした すてきな お兄さんと お姉さんに なって", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-1" },
            { id: "3-2", text: "立派な 大人に なって", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-2" },
            { id: "3-3", text: "おたがいを 大切に 思い かみさまの 前で 手を つなごう！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-3" },
            { id: "3-4", text: "「ずっとずっと、かみさまといっしょだね。ふたりでしあわせになろう」", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-4" },
            { id: "4-1", text: "かみさまとの おやくそく どおり、ずっと なかよく くらそう！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg?v=2", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-1" },
            { id: "4-2", text: "そして いつの 日か かわいい 赤ちゃんが 生まれるよ", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-2" },
            { id: "4-3", text: "「みんな、生まれてきてくれて ありがとう！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-3" },
            { id: "4-4", text: "かみさまも いっしょに、笑顔 あふれる しあわせな お家を 作ろう！これが、かみさまと アダムと エバの 夢 でした。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-4" },
            { id: "5-1", text: "「アダム、エバ。この 広い 世界を、みんなで 守っていこうね」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-1" },
            { id: "5-2", text: "ふたりは、どうぶつたちと おはなしをして、お花や 木を やさしく なでてあげました。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-2" },
            { id: "5-3", text: "「きみたちは、神様の 大切な 宝物だよ」", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-3" },
            { id: "5-4", text: "せかいじゅうの すべての ものが、ふたりの 愛に つつまれて、キラキラ 輝きだしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-4" },
            { id: "6-1", text: "「かみさま、わたしたち が いっしょに 幸せな世界を つくっていくよ！」", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-1" },
            { id: "6-2", text: "アダムと エバ、そして たくさんの 子どもたち。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-2" },
            { id: "6-3", text: "みんなが、おたがいの 笑顔の ために、何かを してあげるのが 大好き！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-3" },
            { id: "6-4", text: "だれかの ために 優しく すると、せかいじゅうが、かみさまの「愛」で、ふわふわ ぽっかぽかに なりました。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-4" },
            { id: "6-5", text: "「みんなも、まわりの お友だちに たくさん 優しく してあげてね！」", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-5" }
        ]
    },
    {
        id: "paradise-lost",
        title: "失楽園",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/0%E2%88%921%E8%A1%A8%E7%B4%99.jpeg",
        scenes: [
            { id: "0-1", text: "アダムと エバ 〜エデンの そのの おやくそく〜", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/0%E2%88%921%E8%A1%A8%E7%B4%99.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+0-1" },
            { id: "1-1", text: "アダムと エバは、ぽかぽか あたたかい「エデンの その」で、なかよく くらしていました。", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/1%E2%88%921.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-1" },
            { id: "1-2", text: "おにわ には、あまーい くだもの や、きれいな おはな が いっぱい！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/1%E2%88%922.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-2" },
            { id: "1-3", text: "かみさまは ふたりに いいました。「ここにある きのみ は、どれでも たべて いいんだよ。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/1%E2%88%923.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-3" },
            { id: "1-4", text: "「でもね、おにわの まんなか にある きのみ だけは、ぜったいに たべないでね。おやくそく だよ。」", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/1%E2%88%924.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-4" },
            { id: "1-5", text: "ふたりは げんきに おへんじ しました。「はーい！ かみさまとの おやくそく、まもるよ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/1%E2%88%925.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-5" },
            { id: "2-1", text: "あるひ、エバが ひとりで いると、するする〜っと へびさんが やってきました。", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/2%E2%88%921.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-1" },
            { id: "2-2", text: "へびさんは いいました。「ねえ、エバ。かみさまは、きのみ を ぜんぶ たべちゃ ダメって いったの？」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/2%E2%88%922.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-2" },
            { id: "2-3", text: "「ううん、まんなかの きのみ だけは、ダメだって。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/2%E2%88%923.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-3" },
            { id: "2-4", text: "へびさんは にやりと わらって いいました。「え〜！ たべても だいじょうぶ だよ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/2%E2%88%924.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-4" },
            { id: "2-5", text: "「それを たべたら、かみさまみたいに すごく なれるんだよ。とっても おいしいよ？」", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/2%E2%88%925.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-5" },
            { id: "3-1", text: "エバは、その きのみ を じーっと みつめました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/3%E2%88%921.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-1" },
            { id: "3-2", text: "「なんだか、とっても おいしそう…。すこし だけなら、いいかな？」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/3%E2%88%922.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-2" },
            { id: "3-3", text: "エバは、とうとう きのみ を パクリ！ と たべて しまいました。", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/3%E2%88%923.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-3" },
            { id: "3-4", text: "「アダム！ これ、とっても おいしいわ！ あなたも たべてみて！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/3%E2%88%924.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-4" },
            { id: "3-5", text: "アダムも、「ダメだよ」と おもいながら、エバから もらった きのみ を… パクリ！ と たべて しまいました。", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/3%E2%88%925.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-5" },
            { id: "4-1", text: "そのとき、ふたりの こころ が ドキッ！ と しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/4%E2%88%921.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-1" },
            { id: "4-2", text: "ふたりは、かみさまとの おやくそく を やぶってしまった ことが、とても こわく なり、はっぱ で からだ を かくしました。", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/4%E2%88%922.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-2" },
            { id: "4-3", text: "「ああ、どうしよう！ かみさまとの おやくそく を やぶってしまった…！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/4%E2%88%923.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-3" },
            { id: "4-4", text: "その時、「アダム、エバ、どこに いるの？」と、かみさまの やさしい こえ が きこえました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/4%E2%88%924.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-4" },
            { id: "4-5", text: "ふたりは こわく なって、きの うしろに コソコソと かくれました。", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/4%E2%88%925.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-5" },
            { id: "5-1", text: "かみさまは、ふたりが おやくそく を やぶったことを しって、とっても かなしい おかお を しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/5%E2%88%921.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-1" },
            { id: "5-2", text: "「どうして、たべては いけないと いった きのみ を たべてしまったの？」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/5%E2%88%922.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-2" },
            { id: "5-3", text: "アダムは「エバが くれたからです」と いい、エバは「へびさんが いいよって いったからです」と いいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/5%E2%88%923.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-3" },
            { id: "5-4", text: "かみさまは、かなしそうに いいました。「おやくそくを やぶってしまったから、もう ここには いられません。」<br>ふたりは、だいすきな エデンのその から でていく ことに なりました。とぼとぼ、とぼとぼ…。", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/5%E2%88%924%265%E2%88%925.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-4" },
            { id: "6-1", text: "おにわ の そとは、チクチクする くさ が あったり、ごはん を つくるのも とっても たいへん でした。", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/6%E2%88%921.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-1" },
            { id: "6-2", text: "ふたりは「かみさまの おやくそくを まもっていれば よかったな」と、えんえん なきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/6%E2%88%922.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-2" },
            { id: "6-3", text: "でも、かみさまは ふたりに、あたたかい「どうぶつの かわ の おようふく」を つくって やさしく きせて くれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/6%E2%88%923.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-3" },
            { id: "6-4", text: "かみさまは、だいじな き を まもるため、おにわの いりぐちに てんしさん と、もえさかる ほのお の けん を おきました。", imagePath: "", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/videos/6%E2%88%924.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-4" },
            { id: "6-5", text: "ふたりは もう おにわ には もどれません。でも、この あたたかい おようふく は「かみさまは ずっと ふたりが だいすき だよ」という しるし なのです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/paradise-lost/images/6%E2%88%925.jpeg", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-5" }
        ]
    },
    {
        id: "cain_and_abel",
        title: "カインとアベル",
        cover: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Cover",
        scenes: [
            { id: "1-1", text: "エデンの その を でた アダムと エバは、いっしょうけんめい はたらきました。やがて、ふたりに かわいい あかちゃん が うまれました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-1" },
            { id: "1-2", text: "おにいちゃんは 「カイン」、おとうとは 「アベル」です。ふたりは ぐんぐん おおきく なりました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-2" },
            { id: "1-3", text: "カインは、はたけ で おやさい を そだてる おしごと を しています。アベルは、ひつじさん たちの おせわ を しています。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-3" },
            { id: "2-1", text: "あるひ、ふたりは「かみさま、ありがとう！」と、プレゼントを することに しました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-1" },
            { id: "2-2", text: "アベルは、「かみさま、いつも みまもってくれて ありがとう！」と、いちばん げんきで だいじな ひつじさんを えらびました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-2" },
            { id: "2-3", text: "カインは、「とりあえず、はたけ で とれた おやさい を もっていけば いいや」と、あまり こころ を こめずに えらびました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-3" },
            { id: "3-1", text: "かみさまは、アベルの 「ありがとう」の こころ が こもった プレゼントを みて、とても よろこびました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-1" },
            { id: "3-2", text: "かみさまは、ほんとうは カインの プレゼントも よろこんで うけとりたいと おもっていました。でも、カインの こころ に ありがとうの きもち が なかったので、うけとる ことが できませんでした。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-2" },
            { id: "3-3", text: "それを みた カインは「どうして アベル ばっかり ほめるんだ！ずるい！」と、した を むいて ひどく おこって しまいました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-3" },
            { id: "4-1", text: "かみさまは、やさしく いいました。「カイン、どうして おこっているの？ ただしい こころ を もてば、かお を あげられる はずだよ。わるい こころ に まけては いけないよ。」", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-1" },
            { id: "4-2", text: "でも、カインは かみさまの ことば を ききません。カインの こころ は「アベルなんて いなくなればいいのに」という きもち で いっぱい に なって しまいました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-2" },
            { id: "4-3", text: "カインは「アベル、のはら へ いこう」と おとうと を さそいだしました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-3" },
            { id: "4-4", text: "そして、だれも いない のはら で、アベルを はげしく ぶって しまったのです。アベルは たおれて、うごかなく なって しまいました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-4" },
            { id: "5-1", text: "かみさまが「カイン、おとうとの アベルは どこに いるの？」と ききました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-1" },
            { id: "5-2", text: "カインは「わかりません」と、うそ を ついて しまいました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-2" },
            { id: "5-3", text: "かみさまは、とっても かなしそうに いいました。「なんという ことを したのです。あなたの した わるい ことは、ぜんぶ わかっています。もう ここには いられません。」", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-3" },
            { id: "6-1", text: "カインは、かぞく から はなれて、とおく へ いく ことに なりました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-1" },
            { id: "6-2", text: "とおくへ いく カインに、かみさまは『かみさまが まもっている と わかる とくべつ な マーク』を つけて くれました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-2" },
            { id: "6-3", text: "わるい ことを してしまった カインの ことも、かみさまは ほんとうは ずっと あいして、まもって くれていたの です。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-3" }
        ]
    },
    {
        id: "noahs_ark",
        title: "ノアの箱舟",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", is_video: true, text: "ノアのはこぶね", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.mp4" },
            
            // セクション1: かみさまとノア
            { id: "1-1", is_video: true, text: "むかしむかし、ノアという おじいさんが いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.mp4" },
            { id: "1-2", is_video: false, text: "ノアは とても やさしくて、かみさまが だいすきでした。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "1-3", is_video: false, text: "かみさまは、ノアに いいました。<br>「おおきな ふねを つくりなさい」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" }, // 神様流用
            { id: "1-4", is_video: false, text: "ノアは かみさまの おやくそくを まもって、ふねを つくりはじめました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg" },
            
            // セクション2: ふねをつくる
            { id: "2-1", is_video: true, text: "トントン、カンカン。<br>ノアは ひとりで、いっしょうけんめい きを きります。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.mp4" },
            { id: "2-2", is_video: false, text: "まちの ひとたちや かぞくに わらわれても、ノアは とても おおきな ふねを つくりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg" },
            { id: "2-3", is_video: false, text: "とうとう、はこぶねが かんせいしました！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg" },
            
            // セクション3: どうぶつたちがやってくる
            { id: "3-1", is_video: false, text: "ふねが かんせいすると、ふしぎな ことが おきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg" },
            { id: "3-2", is_video: true, text: "もりから たくさんの どうぶつたちが やってきました！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.mp4" },
            { id: "3-3", is_video: true, text: "ゾウさん、ライオンさん、ウサギさん。<br>みんな、オスと メスが １ぴきずつ です。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.mp4" },
            { id: "3-4", is_video: true, text: "チュンチュン、ことりたちも とんで きました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.mp4" },
            { id: "3-5", is_video: false, text: "どうぶつたちは じゅんばんに、ふねの なかへ はいります。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%925.jpeg" },
            
            // セクション4: おおあめ
            { id: "4-1", is_video: false, text: "どうぶつたちが はいると、ポツリポツリと あめが ふってきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg" },
            { id: "4-2", is_video: true, text: "あめは だんだん つよくなり、ザーザーふりに なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4" },
            { id: "4-3", is_video: false, text: "おおきな みずたまりが できて、うみの ようです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg" },
            { id: "4-4", is_video: true, text: "ふねは、チャプチャプと みずに うかびました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.mp4" },
            { id: "4-5", is_video: false, text: "かみさまが、ノアたちを まもって くれています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" }, // 神様流用
            
            // セクション5: あめがやむ
            { id: "5-1", is_video: true, text: "ずーっと ふっていた あめが、ようやく やみました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.mp4" },
            { id: "5-2", is_video: false, text: "ノアは、しろい ハトを おそらに とばしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg" },
            { id: "5-3", is_video: true, text: "ハトは、オリーブの はっぱを くわえて もどってきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.mp4" },
            { id: "5-4", is_video: false, text: "「やったあ！ じめんが みえたぞ！」<br>みんな おおよろこびです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg" },
            
            // セクション6: にじのおやくそく
            { id: "6-1", is_video: true, text: "ノアと どうぶつたちは、ふねから そとへ でました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.mp4" },
            { id: "6-2", is_video: false, text: "おひさまが キラキラと、みんなを てらします。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg" },
            { id: "6-3", is_video: true, text: "おそらに、とても おおきな なないろの にじが かかりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4" },
            { id: "6-4", is_video: false, text: "「これは、もう ずっと みんなを まもる という おやくそくだよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg" }, // 神様流用（虹関連の別の神様画像があればそちら、今回は5-1を使用）
            { id: "6-5", is_video: false, text: "ノアたちは かみさまに「ありがとう」と いいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/noahs_ark/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.jpeg" }
        ]
    },
    {
        id: "abrahams_departure",
        title: "アブラハムの旅立ち",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg",
        scenes: [
            { id: "0-1", text: "アブラハムのたびだち", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg" },
            { id: "1-1", text: "むかしむかし、アブラムという おじいさんが いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B31-1.jpeg" },
            { id: "1-2", text: "かみさまは アブラムに いいました。<br>「あなたの うまれた くにを はなれなさい。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "1-3", text: "「わたしが みせる あたらしい 土地へ いきなさい。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg" },
            { id: "1-4", text: "「そうすれば、あなたを おおきな くにに します。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B31-4.jpeg" },
            { id: "2-1", text: "アブラムは、かみさまの ことばを しんじました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B32-1.jpeg" },
            { id: "2-2", text: "おくさんの サライに いいました。<br>「かみさまが おっしゃる 土地へ いこう！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B32-2.jpeg" },
            { id: "2-3", text: "おいの ロトも いっしょに いくことに なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B32-3.jpeg" },
            { id: "2-4", text: "みんなで にもつを まとめて、たびの じゅんびを します。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B32-4.jpeg" },
            { id: "3-1", text: "たくさんの ひつじや うしも いっしょです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B33-1.jpeg" },
            { id: "3-2", text: "アブラムたちは、とおくを めざして あるきだしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B33-2.jpeg" },
            { id: "3-3", text: "どこへ いくのか、まだ わかりません。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B33-3.jpeg" },
            { id: "3-4", text: "でも、アブラムは かみさまを しんじて いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B33-4.jpeg" },
            { id: "3-5", text: "てんとを はって、よるは ぐっすり ねむりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B33-5.jpeg" },
            { id: "4-1", text: "あつい さばくの みちも ありました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B34-1.jpeg" },
            { id: "4-2", text: "おおきな やまも こえました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B34-2.jpeg" },
            { id: "4-3", text: "かみさまは いつも アブラムたちを まもって くれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B34-3.jpeg" },
            { id: "4-4", text: "ときどき、みずが なくて こまった ことも ありました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B34-4.jpeg" },
            { id: "5-1", text: "ある よる、かみさまが アブラムに いいました。<br>「よぞらの ほしを みてごらん。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "5-2", text: "「あなたの こどもたちは、この ほしのように たくさんになるよ。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B35-2.jpeg" },
            { id: "5-3", text: "アブラムは、おどろいて ほしぞらを みあげました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B35-3.jpeg" },
            { id: "5-4", text: "「かみさま、ありがとうございます。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B35-4.jpeg" },
            { id: "6-1", text: "ながい ながい たびを つづけました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B36-1.jpeg" },
            { id: "6-2", text: "そして ついに、カナンの 土地に つきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B36-2.jpeg" },
            { id: "6-3", text: "「ここが、かみさまの やくそくの 土地だ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B36-3.jpeg" },
            { id: "6-4", text: "アブラムは、かみさまに ありがとうのおいのりを しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abrahams_departure/images/%E3%82%B7%E3%83%BC%E3%83%B36-4.jpeg" }
        ]
    },
    {
        id: "isaacs_birth",
        title: "イサクの誕生",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "イサクのたんじょう", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.mp4", placeholderImage: "" },
            { id: "1-1", text: "むかしむかし、アブラハムと サラという ふうふが いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg", is_video: false, placeholderImage: "" },
            { id: "1-2", text: "ふたりは とても なかよしでしたが、<br>こどもが いませんでした。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.mp4", placeholderImage: "" },
            { id: "1-3", text: "「わたしたちにも、あかちゃんが ほしいね」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg", is_video: false, placeholderImage: "" },
            { id: "1-4", text: "おじいさんと おばあさんに なっても、<br>ずっと おいのりしていました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.mp4", placeholderImage: "" },
            { id: "2-1", text: "あるひ、かみさまが アブラハムに はなしかけました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "2-2", text: "「そらの ほしを みてごらん。<br>あなたの こどもは、あの ほしのように おおくなるよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.mp4", placeholderImage: "" },
            { id: "2-3", text: "アブラハムは、かみさまの ことばを しんじました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.mp4", placeholderImage: "" },
            { id: "2-4", text: "でも、サラは 「ほんとうかな？」と ふしぎに おもいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg", is_video: false, placeholderImage: "" },
            { id: "3-1", text: "あつい なつの ひ、さんにんの おきゃくさまが やってきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.mp4", placeholderImage: "" },
            { id: "3-2", text: "アブラハムは、おいしい パンと ミルクで<br>おもてなしを しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.mp4", placeholderImage: "" },
            { id: "3-3", text: "おきゃくさまは、「らいねんの いまごろ、<br>サラに あかちゃんが うまれるよ」と いいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg", is_video: false, placeholderImage: "" },
            { id: "3-4", text: "それは、かみさまからの おしらせでした。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-1", text: "テントの なかで きいていた サラは、<br>おもわず わらってしまいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.mp4", placeholderImage: "" },
            { id: "4-2", text: "「こんなに おばあさんなのに、あかちゃんが うまれるはず ないわ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-3", text: "かみさまは、「なぜ わらうのですか。<br>かみさまに できない ことは ありません」と いいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-4", text: "サラは びっくりして、「わらっていません」と いってしまいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-1", text: "そして らいねんになり、やくそくの 季節が きました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-2", text: "なんと、ほんとうに サラに おとこのこが うまれたのです！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.mp4", placeholderImage: "" },
            { id: "5-3", text: "ふたりは、あかちゃんを ぎゅっと だきしめました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-4", text: "なまえは「イサク」と なづけられました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.mp4", placeholderImage: "" },
            { id: "5-5", text: "イサクとは、「わらい」という いみです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%925.jpeg", is_video: false, placeholderImage: "" },
            { id: "6-1", text: "テントの まわりは、みんなの えがおで いっぱいになりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.mp4", placeholderImage: "" },
            { id: "6-2", text: "「かみさま、すばらしい おくりものを ありがとうございます」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "6-3", text: "サラは うれしくて、もういちど わらいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg", is_video: true, videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/isaacs_birth/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4", placeholderImage: "" },
            { id: "6-4", text: "かみさまの やくそくは、かならず かなうのです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", is_video: false, placeholderImage: "" }
        ]
    },
    {
        id: "abraham_and_isaac",
        title: "アブラハムとイサク",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "アブラハムとイサク", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "むかしむかし、アブラハムという おじいさんが いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.mp4", placeholderImage: "..." },
            { id: "1-2", text: "おばあさんの サラと、なかよく くらして いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "ふたりには、イサクという かわいい おとこのこが いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.mp4", placeholderImage: "..." },
            { id: "1-4", text: "イサクは、かみさまから もらった、とても だいじな たからものです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "あるひ、かみさまが アブラハムに おはなしを しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "「アブラハムよ。あなたの だいじな イサクを、わたしに ささげなさい。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "2-3", text: "アブラハムは とても びっくりしましたが、かみさまを しんじて いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.mp4", placeholderImage: "..." },
            { id: "3-1", text: "つぎのあさ、アブラハムと イサクは おやまへ しゅっぱつ しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "3-2", text: "イサクは たきぎを しょって、てくてく あるきます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.mp4", placeholderImage: "..." },
            { id: "3-3", text: "「おとうさん、ひ と たきぎは あるけれど、ささげる ひつじは どこ？」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "3-4", text: "「かみさまが、きっと よういして くださるよ」と アブラハムは こたえました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.mp4", placeholderImage: "..." },
            { id: "4-1", text: "おやまの うえに つきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.mp4", placeholderImage: "..." },
            { id: "4-2", text: "アブラハムは、いしを つんで さいだんを つくりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "4-3", text: "そのうえに たきぎを ならべて、イサクを のせました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.mp4", placeholderImage: "..." },
            { id: "4-4", text: "アブラハムは、かみさまの いうとおりに しようと します。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "そのとき、てんしが おおきな こえで よびました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.mp4", placeholderImage: "..." },
            { id: "5-2", text: "「アブラハムよ！ こどもに てを かけてはいけない。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "「あなたが、かみさまを ほんとうに しんじている ことが わかりました。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "5-4", text: "うしろを ふりむくと、やぶに つのが ひっかかった ひつじが いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.mp4", placeholderImage: "..." },
            { id: "5-5", text: "アブラハムは、イサクの かわりに、その ひつじを かみさまに ささげました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%925.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%925.mp4", placeholderImage: "..." },
            { id: "6-1", text: "かみさまは、アブラハムが とても すきに なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "「わたしは、あなたを たくさん しゅくふく します。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "「あなたから、ほしのように たくさんの こどもたちが うまれるでしょう。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4", placeholderImage: "..." },
            { id: "6-4", text: "アブラハムと イサクは、にこにこ えがおで おうちへ かえりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.mp4", placeholderImage: "..." },
            { id: "6-5", text: "かみさまの やくそくは、ずっと ずっと つづいて いきます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/abraham_and_isaac/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.mp4", placeholderImage: "..." }
        ]
    },
    {
        id: "jacob_and_esau_1",
        title: "ヤコブとエサウ①",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { 
                id: "0-1", 
                text: "ふたごのきょうだい、<br>ヤコブと エサウ。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg" 
            },
            { 
                id: "1-1", 
                text: "むかしむかし、イサクと リベカという<br>ふうふが いました。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg" 
            },
            { 
                id: "1-2", 
                text: "かみさまは ふたりに<br>あかちゃんを さずけました。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" 
            },
            { 
                id: "1-3", 
                text: "なんと、<br>ふたごの あかちゃんです！", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.mp4" 
            },
            { 
                id: "1-4", 
                text: "お兄ちゃんは けぶかい エサウ、<br>弟は ヤコブです。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg" 
            },
            { 
                id: "2-1", 
                text: "お兄ちゃんの エサウは、<br>そとを はしりまわるのが だいすき。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.mp4" 
            },
            { 
                id: "2-2", 
                text: "ゆみを もって どうぶつを つかまえる、<br>つよい 男の子です。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg" 
            },
            { 
                id: "2-3", 
                text: "弟の ヤコブは、<br>テントの なかで すごすのが だいすき。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg" 
            },
            { 
                id: "2-4", 
                text: "おうちで おりょうりや<br>おてつだいを しています。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.mp4" 
            },
            { 
                id: "3-1", 
                text: "エサウは お兄ちゃんなので、<br>とくべつな おくりものを もらえます。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg" 
            },
            { 
                id: "3-2", 
                text: "それは かみさまからの<br>たくさんの しゅくふくです。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" 
            },
            { 
                id: "3-3", 
                text: "ヤコブは、「ぼくも かみさまの<br>しゅくふくが ほしいなぁ」と おもいました。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.mp4" 
            },
            { 
                id: "4-1", 
                text: "ある日、ヤコブが おいしそうな<br>赤い スープを つくっていました。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.mp4" 
            },
            { 
                id: "4-2", 
                text: "ぐつぐつ ぐつぐつ、<br>とっても いい においが します。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4" 
            },
            { 
                id: "4-3", 
                text: "そこへ、エサウが<br>かりから かえってきました。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.mp4" 
            },
            { 
                id: "4-4", 
                text: "「あぁ おなかが ぺこぺこだ！<br>たおれそうだよ」", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg" 
            },
            { 
                id: "4-5", 
                text: "エサウは スープを 見て、<br>「それを たべさせてくれ！」と いいました。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%925.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%925.mp4" 
            },
            { 
                id: "5-1", 
                text: "ヤコブは いいました。「じゃあ、お兄ちゃんの<br>とくべつな おくりものと こうかんして！」", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg" 
            },
            { 
                id: "5-2", 
                text: "エサウは おなかが すきすぎて、<br>「いいから はやく スープを くれ！」と いいました。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.mp4" 
            },
            { 
                id: "5-3", 
                text: "エサウは かみさまの おくりものより、<br>スープを えらんでしまいました。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg" 
            },
            { 
                id: "5-4", 
                text: "むしゃむしゃ ごくごく。<br>エサウは スープを たいらげました。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.mp4" 
            },
            { 
                id: "6-1", 
                text: "こうして、とくべつな おくりものは<br>ヤコブの ものに なりました。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg" 
            },
            { 
                id: "6-2", 
                text: "かみさまは、おそらから<br>そっと 見ておられます。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" 
            },
            { 
                id: "6-3", 
                text: "かみさまの おくりものは、<br>とっても たいせつに しましょうね。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4" 
            },
            { 
                id: "6-4", 
                text: "ふたりの おはなしは、<br>まだまだ つづきます。", 
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg",
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_1/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.mp4" 
            }
        ]
    },
    {
        id: "jacob_and_esau_2",
        title: "ヤコブとエサウ②",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "やこぶと えさう ２", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=0-1" },
            { id: "1-1", text: "やこぶと えさうの おとうさん、イサクは とても おじいちゃんに なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=1-1" },
            { id: "1-2", text: "おめめが よく みえなく なって しまいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=1-2" },
            { id: "1-3", text: "イサクは、お兄さんの えさうを よびました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=1-3" },
            { id: "1-4", text: "「えさうや、おいしい ごはんを つくっておくれ。<br>とくべつな おいのりを してあげよう」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=1-4" },
            { id: "2-1", text: "えさうは おとうさんの ために、弓をもって おでかけします。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=2-1" },
            { id: "2-2", text: "「おいしい お肉を とってくるぞ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=2-2" },
            { id: "2-3", text: "お母さんの リベカは、その おはなしを こっそり きいていました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=2-3" },
            { id: "2-4", text: "リベカは、おとうと の やこぶが だいすき でした。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=2-4" },
            { id: "3-1", text: "リベカは、やこぶに いいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=3-1" },
            { id: "3-2", text: "「やこぶ、えさうの かわりに、とくべつな おいのりを してもらうのよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=3-2" },
            { id: "3-3", text: "でも、やこぶは しんぱい です。<br>「えさう お兄ちゃんは けむくじゃら だよ。ぼくは つるつる だよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=3-3" },
            { id: "3-4", text: "「おとうさんに バレたら、おこられちゃうよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=3-4" },
            { id: "4-1", text: "お母さんは、えさうの ふくを やこぶに きせました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=4-1" },
            { id: "4-2", text: "そして、やぎの 毛皮を やこぶの うでと 首に まきつけました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=4-2" },
            { id: "4-3", text: "「これで、さわっても えさう お兄ちゃんと おなじ けむくじゃら よ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=4-3" },
            { id: "4-4", text: "やこぶは、お母さんが つくった おいしい ごはんを 持ちました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=4-4" },
            { id: "5-1", text: "やこぶは、おとうさん イサクの おへやに いきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=5-1" },
            { id: "5-2", text: "「おとうさん、えさう です。ごはんを もってきました」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=5-2" },
            { id: "5-3", text: "イサクは やこぶの うでを さわりました。<br>「うむ、毛皮の ような うでだ。えさう だね」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=5-3" },
            { id: "5-4", text: "おとうさんは やこぶに、とくべつな おいのりを してくれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=5-4" },
            { id: "5-5", text: "神様が やこぶを しゅくふく します。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=5-5" },
            { id: "6-1", text: "やこぶが でていった あと、えさうが 帰ってきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=6-1" },
            { id: "6-2", text: "えさうは、やこぶに だまされた ことを 知って、とっても おこりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=6-2" },
            { id: "6-3", text: "「やこぶ め！ ゆるさないぞ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=6-3" },
            { id: "6-4", text: "やこぶは こわくなって、とおくの 街へ おひっこし することに なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.mp4", is_video: true, placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=6-4" },
            { id: "6-5", text: "さあ、やこぶの あたらしい 旅の はじまり です。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_2/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.jpeg", placeholderImage: "https://placehold.co/1920x1080/e2e8f0/64748b?text=6-5" }
        ]
    },
    {
        id: "jacob_and_esau_3",
        title: "ヤコブとエサウ③",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "ヤコブとエサウの なかなおり", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg" },
            { id: "1-1", text: "やこぶは、とおくに すんでいました。<br>かぞくや どうぶつが、たくさん ふえました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg" },
            { id: "1-2", text: "あるひ、かみさまが やこぶに いいました。<br>「ふるさとに かえりなさい。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "1-3", text: "「わたしが あなたを まもります。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "1-4", text: "やこぶは、ふるさとに かえることに しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg" },
            { id: "2-1", text: "でも、やこぶは とても こわくなりました。<br>「おにいさんの えさうは、まだ おこっているかな？」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg" },
            { id: "2-2", text: "そこで、えさうに たくさんの プレゼントを おくることに しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg" },
            { id: "2-3", text: "やぎや ひつじなどを あつめました。<br>「これを おにいさんに わたしてください。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg" },
            { id: "3-1", text: "よるに なりました。<br>やこぶは ひとりで おいのりを します。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg" },
            { id: "3-2", text: "「かみさま、どうか わたしを たすけてください。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg" },
            { id: "3-3", text: "そのとき、ふしぎな ひとが あらわれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg" },
            { id: "3-4", text: "やこぶは、あさまで すもうを とり、「わたしを しゅくふくしてください！」と おねがいしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg" },
            { id: "3-5", text: "かみさまは やこぶを しゅくふくしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "4-1", text: "つぎのあさ、とおくから えさうが やってきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg" },
            { id: "4-2", text: "やこぶは ドキドキしながら、まえに すすみます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg" },
            { id: "4-3", text: "そして、えさうの まえで ７かい おじぎを しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg" },
            { id: "5-1", text: "すると、えさうは はしってきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg" },
            { id: "5-2", text: "えさうは やこぶを ギュッと だきしめました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg" },
            { id: "5-3", text: "ふたりは なきながら、よろこびあいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg" },
            { id: "5-4", text: "「やこぶ、よく かえってきたね。」<br>えさうは やこぶを ゆるして くれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg" },
            { id: "6-1", text: "やこぶは、えさうに プレゼントを わたしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg" },
            { id: "6-2", text: "えさうは よろこんで うけとりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg" },
            { id: "6-3", text: "かみさまが、ふたりを なかよしに してくれたのです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "6-4", text: "やこぶの かぞくも みんな ニコニコです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg" },
            { id: "6-5", text: "ふたりは また なかよく なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/jacob_and_esau_3/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.jpeg" }
        ]
    },
    {
        id: "dreaming_joseph",
        title: "夢見るヨセフと兄たち",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg",
        scenes: [
            { id: "0-1", text: "ゆめみるヨセフと<br>あにたち", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Cover" },
            { id: "1-1", text: "むかしむかし、ヨセフという<br>おとこのこが いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B31-1.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B31-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+1-1" },
            { id: "1-2", text: "おとうさんのヤコブは、<br>ヨセフが だいすきでした。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+1-2" },
            { id: "1-3", text: "おとうさんは ヨセフに、<br>カラフルで きれいな ふくを<br>つくってあげました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B31-3.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B31-3.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+1-3" },
            { id: "1-4", text: "おにいさんたちは、それを見て<br>すこし やきもちを やきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B31-4.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+1-4" },
            { id: "2-1", text: "あるよる、ヨセフは<br>ふしぎな ゆめを みました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B32-1.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B32-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+2-1" },
            { id: "2-2", text: "かみさまが、ヨセフに<br>とくべつな ゆめを<br>みせてくれたのです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=God+Scene" },
            { id: "2-3", text: "「ぼくの むぎのたばに、<br>みんなの たばが おじぎをしたんだよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B32-3.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+2-3" },
            { id: "2-4", text: "ほしの ゆめも みました。<br>「おほしさまが ぼくに おじぎをしたよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B32-4.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B32-4.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+2-4" },
            { id: "2-5", text: "おにいさんたちは、<br>もっと ぷんぷん<br>おこってしまいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B32-5.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+2-5" },
            { id: "3-1", text: "あるひ、おにいさんたちは<br>はたけで おしごとをしていました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B33-1.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B33-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+3-1" },
            { id: "3-2", text: "ヨセフが おべんとうを<br>とどけに きました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B33-2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+3-2" },
            { id: "3-3", text: "おにいさんたちは、ヨセフを<br>とおくからきた しょうにんに<br>つれていかせてしまいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B33-3.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B33-3.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+3-3" },
            { id: "3-4", text: "ヨセフは エジプトという<br>とおくの くにへ<br>いくことに なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B33-4.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+3-4" },
            { id: "3-5", text: "でも、かみさまは いつも<br>ヨセフと いっしょでした。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=God+Scene" },
            { id: "4-1", text: "エジプトで、ヨセフは<br>いっしょうけんめい はたらきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B34-1.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B34-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+4-1" },
            { id: "4-2", text: "どんなときも、かみさまに<br>おいのりを しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B34-2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+4-2" },
            { id: "4-3", text: "かみさまは、ヨセフを<br>たくさん たすけてくれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=God+Scene" },
            { id: "4-4", text: "ヨセフは エジプトの<br>えらいひとに なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B34-4.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B34-4.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+4-4" },
            { id: "5-1", text: "ずっと あとになって、<br>おにいさんたちが エジプトへ<br>やってきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B35-1.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B35-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+5-1" },
            { id: "5-2", text: "食べものが なくて、<br>こまっていたのです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B35-2.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+5-2" },
            { id: "5-3", text: "「ヨセフ、あのときは<br>ごめんなさい」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B35-3.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B35-3.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+5-3" },
            { id: "5-4", text: "ヨセフは、おにいさんたちを<br>ゆるしてあげました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B35-4.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+5-4" },
            { id: "5-5", text: "「かみさまが、みんなを たすけるために<br>ぼくを ここへ よんだんだね」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B35-5.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B35-5.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+5-5" },
            { id: "6-1", text: "ヨセフと おにいさんたちは、<br>なかなおりを しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B36-1.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B36-1.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+6-1" },
            { id: "6-2", text: "おとうさんの ヤコブも<br>エジプトへ やってきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B36-2.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B36-2.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+6-2" },
            { id: "6-3", text: "かぞく みんなで、ずっと<br>なかよく くらしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/images/%E3%82%B7%E3%83%BC%E3%83%B36-3.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/dreaming_joseph/videos/%E3%82%B7%E3%83%BC%E3%83%B36-3.mp4", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=Scene+6-3" },
            { id: "6-4", text: "かみさま、いつも まもってくれて<br>ありがとう。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://placehold.co/600x400/e0f7fa/006064?text=God+Scene" }
        ]
    },
    {
        id: "joseph_in_egypt",
        title: "エジプトのヨセフ",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg",
        scenes: [
            {
                id: "0-1",
                text: "えジプトの ヨセフ",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B30-1_thumb.jpeg",
                isVideo: false
            },
            {
                id: "1-1",
                text: "ヨセフは おとうさんに とても あいされて いました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B31-1.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B31-1_thumb.jpeg",
                isVideo: false
            },
            {
                id: "1-2",
                text: "きれいな いろの ふくを もらって<br>とても うれしそうです。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B31-2_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B31-2.mp4"
            },
            {
                id: "1-3",
                text: "ヨセフは ふしぎな ゆめを みました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B31-3.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B31-3_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B31-3.mp4"
            },
            {
                id: "1-4",
                text: "おにいさんたちは ヨセフに<br>やきもちを やいて いました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B31-4.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B31-4_thumb.jpeg",
                isVideo: false
            },
            {
                id: "1-5",
                text: "そして ヨセフを とおくの えジプトへ<br>うって しまいました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B31-5.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B31-5_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B31-5.mp4"
            },
            {
                id: "2-1",
                text: "かみさまは いつも ヨセフと いっしょに いて<br>まもって くれました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31-2_thumb.jpeg",
                isVideo: false
            },
            {
                id: "2-2",
                text: "ヨセフは えジプトで<br>いっしょうけんめい はたらきました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B32-2.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B32-2_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B32-2.mp4"
            },
            {
                id: "2-3",
                text: "でも わるい ひとに うそを つかれて<br>ろうやに いれられて しまいます。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B32-3.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B32-3_thumb.jpeg",
                isVideo: false
            },
            {
                id: "2-4",
                text: "ろうやの なかでも ヨセフは<br>かみさまを しんじて いました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B32-4.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B32-4_thumb.jpeg",
                isVideo: false
            },
            {
                id: "2-5",
                text: "かみさまが ともに いるので<br>ろうやでも だいかつやく です。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B32-5.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B32-5_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B32-5.mp4"
            },
            {
                id: "3-1",
                text: "あるひ えジプトの おうさまが<br>ふしぎな ゆめを みました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B33-1.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B33-1_thumb.jpeg",
                isVideo: false
            },
            {
                id: "3-2",
                text: "ふとった うしと やせた うしの<br>ゆめ です。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B33-2.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B33-2_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B33-2.mp4"
            },
            {
                id: "3-3",
                text: "おうさまは ゆめの いみが わからなくて<br>こまって いました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B33-3.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B33-3_thumb.jpeg",
                isVideo: false
            },
            {
                id: "3-4",
                text: "ろうやに いる ヨセフが<br>ゆめの いみが わかる と ききました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B33-4.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B33-4_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B33-4.mp4"
            },
            {
                id: "3-5",
                text: "ヨセフは おうさまの まえに<br>よばれました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B33-5.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B33-5_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B33-5.mp4"
            },
            {
                id: "4-1",
                text: "おうさまは ヨセフに<br>ゆめの はなしを しました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B34-1.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B34-1_thumb.jpeg",
                isVideo: false
            },
            {
                id: "4-2",
                text: "かみさまが ヨセフに<br>ゆめの いみを おしえて くれました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31-2_thumb.jpeg",
                isVideo: false
            },
            {
                id: "4-3",
                text: "ヨセフは おうさまに いいました。<br>「これから 7ねんかん たべものが たくさん とれます」",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B34-3.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B34-3_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B34-3.mp4"
            },
            {
                id: "4-4",
                text: "「そのあとの 7ねんかんは<br>たべものが なくなって しまいます」",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B34-4.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B34-4_thumb.jpeg",
                isVideo: false
            },
            {
                id: "4-5",
                text: "「だから たくさん ある ときに<br>たべものを あつめて おきましょう」",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B34-5.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B34-5_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B34-5.mp4"
            },
            {
                id: "5-1",
                text: "おうさまは ヨセフの かしこさに<br>びっくり しました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B35-1.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B35-1_thumb.jpeg",
                isVideo: false
            },
            {
                id: "5-2",
                text: "そして ヨセフを えジプトで<br>1ばん えらい ひとに しました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B35-2.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B35-2_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B35-2.mp4"
            },
            {
                id: "5-3",
                text: "ヨセフは たくさんの たべものを<br>くらに あつめました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B35-3.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B35-3_thumb.jpeg",
                isVideo: false
            },
            {
                id: "5-4",
                text: "たべものが なくなった とき<br>ヨセフは みんなに たべものを わけました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B35-4.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B35-4_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B35-4.mp4"
            },
            {
                id: "5-5",
                text: "かみさまの おかげで<br>たくさんの ひとが たすかりました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B35-5.jpeg",
                placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/images/%E3%82%B7%E3%83%BC%E3%83%B35-5_thumb.jpeg",
                isVideo: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/joseph_in_egypt/videos/%E3%82%B7%E3%83%BC%E3%83%B35-5.mp4"
            }
        ]
    },
    {
        "id": "josephs_reunion",
        "title": "ヨセフと兄弟の再会",
        "cover": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        "scenes": [
            {
                "id": "0-1",
                "text": "ヨセフと きょうだいたち",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "1-1",
                "text": "むかしむかし、せかいじゅうで たべものが なくなって しまいました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "1-2",
                "text": "ヨセフの おにいさんたちも、おなかが ぺこぺこです。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.mp4"
            },
            {
                "id": "1-3",
                "text": "「エジプトという くにには、パンが あるらしいぞ。」",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "1-4",
                "text": "おにいさんたちは、エジプトへ しゅっぱつ しました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.mp4"
            },
            {
                "id": "2-1",
                "text": "エジプトには、とっても えらい ひとが いました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "2-2",
                "text": "それは、むかし わかれわかれに なった、おとうと の ヨセフ でした。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.mp4"
            },
            {
                "id": "2-3",
                "text": "おにいさんたちは、ヨセフの まえで おじぎを しました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.mp4"
            },
            {
                "id": "2-4",
                "text": "でも、えらいひとが ヨセフだとは、ぜんぜん きづきません。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "3-1",
                "text": "ヨセフは、おにいさんたちが やさしく なったか、テストを することに しました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "3-2",
                "text": "いちばん したの おとうと、ベニヤミンを つかまえようと しました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.mp4"
            },
            {
                "id": "3-3",
                "text": "「このこは おいていきなさい。」と ヨセフは いいました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "4-1",
                "text": "すると、おにいさんの ユダが まえに でました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.mp4"
            },
            {
                "id": "4-2",
                "text": "「おねがいです。このこは わたしが まもります！」",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4"
            },
            {
                "id": "4-3",
                "text": "「どうか ゆるして ください。」と いっしょうけんめい おねがい しました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "4-4",
                "text": "おにいさんたちは、もう むかしの いじわるな ひとでは ありません。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "5-1",
                "text": "ヨセフは なみだが とまらなく なりました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.mp4"
            },
            {
                "id": "5-2",
                "text": "「みんな、ぼくです。おとうとの ヨセフです！」",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "5-3",
                "text": "おにいさんたちは びっくりして、なきだしました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.mp4"
            },
            {
                "id": "5-4",
                "text": "「ごめんね、ヨセフ。」「もう だいじょうぶだよ。」",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "5-5",
                "text": "みんなで ぎゅっと だきしめ あいました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%925.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%925.mp4"
            },
            {
                "id": "6-1",
                "text": "かみさまは、ずっと ヨセフたちを みまもって いました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "6-2",
                "text": "かなしい ことも、かみさまが えがおに してくれました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg",
                "placeholderImage": "..."
            },
            {
                "id": "6-3",
                "text": "かぞく みんなで、エジプトで くらす ことに なりました。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4"
            },
            {
                "id": "6-4",
                "text": "みんな いっしょで、とっても しあわせ です。",
                "imagePath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg",
                "placeholderImage": "...",
                "videoPath": "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/josephs_reunion/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.mp4"
            }
        ]
    },
    {
        id: "baby_moses",
        title: "かごの中の赤ちゃんモーセ",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg",
        scenes: [
            {
                id: "0-1",
                text: "かごの なかの あかちゃん モーセ",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg",
                is_video: false
            },
            {
                id: "1-1",
                text: "むかしむかし、イスラエルの ひとたちは<br>エジプトという くにに いました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B31-1.jpeg",
                is_video: false
            },
            {
                id: "1-2",
                text: "けれども、エジプトの おうさまは、<br>みんなを むりやり はたらかせました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg",
                is_video: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/videos/%E3%82%B7%E3%83%BC%E3%83%B31-2.mp4"
            },
            {
                id: "1-3",
                text: "「イスラエルの おとこの あかちゃんを<br>なくしてしまえ！」と おうさまは いいました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B31-3.jpeg",
                is_video: false
            },
            {
                id: "1-4",
                text: "みんな とても かなしくて、<br>かみさまに おいのりを します。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg",
                is_video: false
            },
            {
                id: "2-1",
                text: "そのころ、ある かぞくに<br>かわいい おとこの あかちゃんが うまれました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B32-1.jpeg",
                is_video: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/videos/%E3%82%B7%E3%83%BC%E3%83%B32-1.mp4"
            },
            {
                id: "2-2",
                text: "おかあさんは、あかちゃんを<br>ずっと かくして そだてました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B32-2.jpeg",
                is_video: false
            },
            {
                id: "2-3",
                text: "でも、あかちゃんが おおきくなって<br>もう かくせなくなって しまいました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B32-3.jpeg",
                is_video: false
            },
            {
                id: "2-4",
                text: "「かみさま、このこを おまもり ください」と<br>おかあさんは おいのりしました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg",
                is_video: false
            },
            {
                id: "3-1",
                text: "おかあさんは、あかちゃんを<br>パピルスの かごに いれました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B33-1.jpeg",
                is_video: false
            },
            {
                id: "3-2",
                text: "そして、ナイルがわの くさの なかに<br>そっと おきました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B33-2.jpeg",
                is_video: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/videos/%E3%82%B7%E3%83%BC%E3%83%B33-2.mp4"
            },
            {
                id: "3-3",
                text: "おねえさんの ミリアムが、とおくから<br>あかちゃんを みまもって います。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B33-3.jpeg",
                is_video: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/videos/%E3%82%B7%E3%83%BC%E3%83%B33-3.mp4"
            },
            {
                id: "3-4",
                text: "「どうか ぶじで いてね」と、<br>ミリアムは しんぱいそうに みています。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B33-4.jpeg",
                is_video: false
            },
            {
                id: "4-1",
                text: "そこへ、エジプトの おうじょさまが<br>もくよくに やってきました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B34-1.jpeg",
                is_video: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/videos/%E3%82%B7%E3%83%BC%E3%83%B34-1.mp4"
            },
            {
                id: "4-2",
                text: "「あれは なにかしら？」<br>おうじょさまは かごを みつけました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B34-2.jpeg",
                is_video: false
            },
            {
                id: "4-3",
                text: "かごを あけると、<br>あかちゃんが ないて いました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B34-3.jpeg",
                is_video: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/videos/%E3%82%B7%E3%83%BC%E3%83%B34-3.mp4"
            },
            {
                id: "4-4",
                text: "「かわいそうに。わたしが そだてましょう」<br>おうじょさまは いいました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B34-4.jpeg",
                is_video: false
            },
            {
                id: "5-1",
                text: "ミリアムが とびだして、<br>おうじょさまに いいました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B35-1.jpeg",
                is_video: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/videos/%E3%82%B7%E3%83%BC%E3%83%B35-1.mp4"
            },
            {
                id: "5-2",
                text: "「あかちゃんに おっぱいを あげる ひとを、<br>よんで きましょうか？」",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B35-2.jpeg",
                is_video: false
            },
            {
                id: "5-3",
                text: "「ええ、おねがいね」と、<br>おうじょさまは こたえました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B35-3.jpeg",
                is_video: false
            },
            {
                id: "5-4",
                text: "ミリアムは、あかちゃんの<br>ほんとうの おかあさんを つれて きました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B35-4.jpeg",
                is_video: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/videos/%E3%82%B7%E3%83%BC%E3%83%B35-4.mp4"
            },
            {
                id: "6-1",
                text: "おかあさんは、かみさまに「ありがとう」と いいながら<br>あかちゃんを そだてました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg",
                is_video: false
            },
            {
                id: "6-2",
                text: "おおきくなると、あかちゃんは<br>おうじょさまの ところへ いきました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B36-2.jpeg",
                is_video: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/videos/%E3%82%B7%E3%83%BC%E3%83%B36-2.mp4"
            },
            {
                id: "6-3",
                text: "おうじょさまは、あかちゃんに<br>「モーセ」という なまえを つけました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/images/%E3%82%B7%E3%83%BC%E3%83%B36-3.jpeg",
                is_video: true,
                videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/baby_moses/videos/%E3%82%B7%E3%83%BC%E3%83%B36-3.mp4"
            },
            {
                id: "6-4",
                text: "モーセは、かみさまに まもられて<br>つよく やさしく そだちました。",
                imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg",
                is_video: false
            }
        ]
    },
    {
        id: "exodus",
        title: "エジプトからの脱出",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "えじぷとからの だっしゅつ", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg" },
            { id: "1-1", text: "むかしむかし、えじぷとという くにに、いすらえるの ひとたちが いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg" },
            { id: "1-2", text: "いすらえるの ひとたちは、まいにち つらい おしごとを していました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "1-3", text: "そのころ、もーせという おとこのこが うまれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg" },
            { id: "1-4", text: "もーせは おおきくなって、ひつじかいに なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg" },
            { id: "2-1", text: "あるひ、もーせの まえで、きの えだが もえあがりました。<br>ふしぎな ひ です。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg" },
            { id: "2-2", text: "ひの なかから、かみさまの こえが きこえました。<br>「もーせよ、わたしの ひとたちを たすけなさい。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "2-3", text: "もーせは びっくりしました。<br>「ぼくが えじぷとの おうさまの ところへ いくのですか？」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg" },
            { id: "2-4", text: "かみさまは やさしく いいました。<br>「わたしが いっしょに いるから だいじょうぶです。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg" },
            { id: "3-1", text: "もーせは えじぷとの おうさま、ふぁらおの ところへ いきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg" },
            { id: "3-2", text: "「かみさまが、いすらえるの ひとたちを はなすように いっています。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg" },
            { id: "3-3", text: "ふぁらおは おこって いいました。<br>「そんなこと できない！もっと はたらかせろ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg" },
            { id: "3-4", text: "もーせは 悲しみました。でも、かみさまを しんじました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg" },
            { id: "4-1", text: "かみさまは、ふぁらおに 10この ふしぎな ことを おこしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "4-2", text: "かえるが たくさん でてきたり、そらが まっくらになったり しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg" },
            { id: "4-3", text: "ふぁらおは とても びっくりして、こわがりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg" },
            { id: "4-4", text: "とうとう、ふぁらおは いいました。<br>「でていって いいぞ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg" },
            { id: "5-1", text: "いすらえるの ひとたちは とても よろこびました。<br>「やったー！おうちに かえることができる！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg" },
            { id: "5-2", text: "みんなで いそいで にもつを もちました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg" },
            { id: "5-3", text: "もーせを せんとうにして、えじぷとを しゅっぱつ しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg" },
            { id: "5-4", text: "かみさまは、ひるは くもで、よるは ひの はしらで みちびきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg" },
            { id: "6-1", text: "みんなが うみの まえに つくと、えじぷとの へいたいが おいかけて きました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg" },
            { id: "6-2", text: "みんなは こわがって、なきだしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg" },
            { id: "6-3", text: "もーせが うみに つえを のばすと、うみが ふたつに わかれました！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg" },
            { id: "6-4", text: "みんなは、うみの なかの みちを あるいて わたりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg" },
            { id: "6-5", text: "かみさまが まもって くれたので、みんな ぶ事に たすかりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg" },
            { id: "6-6", text: "みんなで かみさまに ありがとうを いいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%926.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/exodus/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%926.jpeg" }
        ]
    },
    {
        id: "parting_of_the_sea",
        title: "海が割れる奇跡",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "うみが われる きせき", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Cover" },
            { id: "1-1", text: "もーせと ひとびとは えじぷとを 出発しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+1-1" },
            { id: "1-2", text: "「かみさまが まもってくださるよ」<br>もーせは みんなに いいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+1-2" },
            { id: "1-3", text: "ひるは くもの はしらが あんない してくれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+1-3" },
            { id: "1-4", text: "よるは ほのおの はしらが てらしてくれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+1-4" },
            { id: "2-1", text: "ひとびとが あるいていくと、<br>おおきな うみに ぶつかりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+2-1" },
            { id: "2-2", text: "そのとき、うしろから えじぷとの ぐんたいが おってきました！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+2-2" },
            { id: "2-3", text: "「どうしよう！ にげみちが ないよ！」<br>ひとびとは こわがって なきだしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+2-3" },
            { id: "2-4", text: "もーせは 「しんぱい しないで。かみさまが たすけてくれる」と いいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+2-4" },
            { id: "3-1", text: "かみさまは もーせに おはなしされました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+3-1" },
            { id: "3-2", text: "「つえを あげて、うみに むかって のばしなさい」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+3-2" },
            { id: "3-3", text: "もーせは かみさまの いうとおりに しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+3-3" },
            { id: "3-4", text: "つえを うみに むけて たかく あげました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+3-4" },
            { id: "4-1", text: "すると、つよい かぜが ふいてきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+4-1" },
            { id: "4-2", text: "ごーっ！ という おとと ともに、<br>うみの みずが 動きはじめました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+4-2" },
            { id: "4-3", text: "なんと、おおきな うみが まっぷたつに われたのです！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+4-3" },
            { id: "4-4", text: "うみの なかに、かわいた みちが できました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+4-4" },
            { id: "4-5", text: "みぎと ひだりには、みずの かべが できました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%925.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+4-5" },
            { id: "5-1", text: "「さあ、みんな いそいで わたろう！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+5-1" },
            { id: "5-2", text: "ひとびとは びっくりしながらも、<br>うみの なかの みちを あるきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+5-2" },
            { id: "5-3", text: "おとなも こどもも、<br>どうぶつたちも いっしょです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+5-3" },
            { id: "5-4", text: "むこうの きしまで、<br>みんな ぶじに わたることが できました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+5-4" },
            { id: "6-1", text: "えじぷとの ぐんたいも うみの みちを おってきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+6-1" },
            { id: "6-2", text: "でも、かみさまが うみの みずを もとに もどしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+6-2" },
            { id: "6-3", text: "ざぶーん！<br>えじぷとの ぐんたいは なみに のまれて しまいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+6-3" },
            { id: "6-4", text: "「わあ、かみさま ありがとう！」<br>みんなは よろこんで うたいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+6-4" },
            { id: "6-5", text: "かみさまは いつでも みんなを<br>まもって くださるのです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/parting_of_the_sea/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.jpeg", placeholderImage: "https://placehold.co/800x450/e0f7fa/006064?text=Scene+6-5" }
        ]
    },
    {
        id: "birth_of_jesus",
        title: "イエス様の誕生",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg",
        scenes: [
            { id: "0-1", text: "いえすさまの おたんじょう", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "むかしむかし、まりあという やさしい おんなの人が いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B31-1.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B31-1.mp4", placeholderImage: "..." },
            { id: "1-2", text: "ある日、てんしが やってきて 言いました。<br>「かみさまの こどもが うまれますよ。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "まりあと よせふは、とおくの まちへ おでかけを しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B31-3.jpeg", placeholderImage: "..." },
            { id: "1-4", text: "ろばさんに のって、ことこと。<br>よるの みちを すすみます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B31-4.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B31-4.mp4", placeholderImage: "..." },
            { id: "1-5", text: "やっとの おもいで、べつれへむ という まちに つきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B31-5.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "まちは 人で いっぱいで、とまる おうちが ありません。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B32-1.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B32-1.mp4", placeholderImage: "..." },
            { id: "2-2", text: "「どうしよう、あかちゃんが うまれそうなのに。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B32-2.jpeg", placeholderImage: "..." },
            { id: "2-3", text: "やどやの 人が 言いました。<br>「うまごや なら、あいていますよ。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B32-3.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "２人は ほっとして、うまごやへ むかいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B32-4.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B32-4.mp4", placeholderImage: "..." },
            { id: "3-1", text: "よるに なりました。<br>おほしさまが きらきら ひかっています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B33-1.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B33-1.mp4", placeholderImage: "..." },
            { id: "3-2", text: "うまごやで、かわいい あかちゃんが うまれました。<br>おなまえは「いえすさま」です。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B33-2.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "まりあは、いえすさまを やさしく だっこしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B33-3.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B33-3.mp4", placeholderImage: "..." },
            { id: "3-4", text: "べっどが ないので、かいばおけの わらの 上に ねかせました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B33-4.jpeg", placeholderImage: "..." },
            { id: "3-5", text: "うしさんや ろばさんも、あかちゃんを みまもっています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B33-5.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B33-5.mp4", placeholderImage: "..." },
            { id: "4-1", text: "そのころ、のっぱらで ひつじかいたちが ひつじの おせわを していました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B34-1.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "すると、ぴかーっと ひかって、てんしが あらわれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B34-2.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B34-2.mp4", placeholderImage: "..." },
            { id: "4-3", text: "「きょう、いえすさまが うまれましたよ。<br>おほしさまを みて ごらん。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B34-3.jpeg", placeholderImage: "..." },
            { id: "4-4", text: "ひつじかいたちは びっくりして、あかちゃんに あいに いきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B34-4.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B34-4.mp4", placeholderImage: "..." },
            { id: "5-1", text: "とおくの くにの、はかせたちも おおきな ほしを みつけました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B35-1.jpeg", placeholderImage: "..." },
            { id: "5-2", text: "「すばらしい あかちゃんが うまれたんだ！」<br>らくだに のって、しゅっぱつです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B35-2.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B35-2.mp4", placeholderImage: "..." },
            { id: "5-3", text: "おほしさまは、いえすさまの いる うまごやを おしえてくれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B35-3.jpeg", placeholderImage: "..." },
            { id: "6-1", text: "みんな、うまごやに あつまりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B36-1.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "はかせたちは、たいせつな たからものを ぷれぜんと しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B36-2.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B36-2.mp4", placeholderImage: "..." },
            { id: "6-3", text: "「いえすさま、おめでとう！」<br>みんな ほっこり えがおです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B36-3.jpeg", placeholderImage: "..." },
            { id: "6-4", text: "かみさまは、みんなを あいして いえすさまを おくって くれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "6-5", text: "みんなの こころが、あたたかい ひかりで いっぱいになりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/images/%E3%82%B7%E3%83%BC%E3%83%B36-5.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/birth_of_jesus/videos/%E3%82%B7%E3%83%BC%E3%83%B36-5.mp4", placeholderImage: "..." }
        ]
    },
    {
        id: "calling_disciples",
        title: "弟子たちを招く",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "イエスさまと\n12にんの でしたち", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "かみさまは、おそらから<br>せかいを みて いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "1-2", text: "「せかいの みんなに、<br>たいせつな ことを つたえよう」と おもいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "そこで、イエスさまは<br>うみの ほとりを あるき はじめました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "1-4", text: "おてつだいを してくれる<br>おともだちを さがして いるのです。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "うみには、ペテロと アンデレという<br>きょうだいが いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "ふたりは いっしょうけんめい、<br>あみを なげて います。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "2-3", text: "おさかなを とる おしごとを<br>して いるのです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "だけど、きょうは<br>なかなか おさかなが とれません。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "3-1", text: "イエスさまは、<br>ふたりに こえを かけました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "3-2", text: "「わたしに ついて きなさい。」", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "「にんげんを とる りょうしに<br>して あげよう。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "3-4", text: "すると ふたりは、すぐに あみを おいて、<br>イエスさまに ついて いきました。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "4-1", text: "すこし あるくと、<br>また べつの ふねが ありました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "ヤコブと ヨハネという<br>きょうだいが いました。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "4-3", text: "ふたりは、やぶれた あみを<br>きれいに なおして います。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "4-4", text: "とても しんせつで、<br>げんきな おとこのこたち です。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "イエスさまは、この ふたりにも<br>こえを かけました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "5-2", text: "ヤコブと ヨハネは、イエスさまの<br>やさしい かおを みて うれしく なりました。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "おとうさんに 「いってきます！」と いって、<br>ふねを おりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "5-4", text: "イエスさまと いっしょに、<br>とことこ あるき はじめました。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "6-1", text: "こうして、イエスさまの まわりに<br>おともだちが ふえて いきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "ぜんぶで 12にんの たいせつな<br>おともだちが あつまりました。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "みんな、イエスさまの ことが<br>だいすきです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "6-4", text: "みんなで いっしょに、かみさまの<br>おはなしを つたえに いきます。", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.mp4", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "6-5", text: "さあ、どんな わくわくする<br>おはなしが はじまるのかな？", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/calling_disciples/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.jpeg", placeholderImage: "..." }
        ]
    },
    {
        id: "five_loaves",
        title: "5つのパンと2匹の魚",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "5つの パンと<br>2ひきの さかな", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "あるひ、イエスさまが<br>おはなしを していました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.mp4", placeholderImage: "..." },
            { id: "1-2", text: "「みんな、かみさまは<br>いつも みてくれていますよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "たくさん の ひとが<br>あつまって きました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.mp4", placeholderImage: "..." },
            { id: "1-4", text: "おとなも こどもも<br>みんな むちゅう です。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "おひさまが しずんで<br>ゆうがたに なりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.mp4", placeholderImage: "..." },
            { id: "2-2", text: "ぐうう。<br>みんな おなかが すいてきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "2-3", text: "「イエスさま、みんな<br>おなかが ぺこぺこ です」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.mp4", placeholderImage: "..." },
            { id: "2-4", text: "おでしたちが<br>しんぱい して いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "3-1", text: "そのとき、ひとりの<br>おとこのこが きました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.mp4", placeholderImage: "..." },
            { id: "3-2", text: "「ぼくの おべんとう、<br>つかってください！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "かごの なかには<br>5つの パンが ありました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.mp4", placeholderImage: "..." },
            { id: "3-4", text: "そして、ちいさな さかなが<br>2ひき ありました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "3-5", text: "「でも、こんなに たくさんの<br>ひとには たりないよ…」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%925.mp4", placeholderImage: "..." },
            { id: "4-1", text: "イエスさまは<br>にっこり ほほえみました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "「ありがとう。<br>さあ、みんな すわりなさい」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4", placeholderImage: "..." },
            { id: "4-3", text: "イエスさまは パンと さかなを<br>てに とりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "4-4", text: "そして、おそらを みあげて<br>かみさまに おいのり しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.mp4", placeholderImage: "..." },
            { id: "4-5", text: "かみさまは いつも<br>みんなを まもっています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "イエスさまが パンを<br>ちぎって わたすと…", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.mp4", placeholderImage: "..." },
            { id: "5-2", text: "ふしぎな ことに<br>パンが どんどん ふえていきます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "さかなも たくさん<br>ふえて いきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.mp4", placeholderImage: "..." },
            { id: "5-4", text: "おでしたちが<br>みんなに くばりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "6-1", text: "「わあ、おいしい！」<br>みんな えがお です。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.mp4", placeholderImage: "..." },
            { id: "6-2", text: "5せん にん も の ひとが<br>おなかいっぱい たべました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "あまった パンを<br>かごに あつめると…", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4", placeholderImage: "..." },
            { id: "6-4", text: "なんと、12こ の かごが<br>いっぱい に なりました！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "6-5", text: "かみさま、イエスさま、<br>ありがとう。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/five_loaves/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.mp4", placeholderImage: "..." }
        ]
    },
    {
        id: "good_samaritan",
        title: "善きサマリア人",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "1-2", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "1-4", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "2-3", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "3-1", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "3-2", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "3-4", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "4-1", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "4-3", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "4-4", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "5-2", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "5-4", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "6-1", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg", placeholderImage: "..." },
            { id: "6-4", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "6-5", text: "...", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/good_samaritan/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%925.jpeg", placeholderImage: "..." }
        ]
    },
    {
        id: "lost_sheep",
        title: "迷子の羊",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg",
        scenes: [
            { id: "0-1", text: "まいごの ひつじ", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B30-1.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "あるところに、やさしい ひつじかいさんが いました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B31-1.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B31-1.mp4", placeholderImage: "..." },
            { id: "1-2", text: "ひつじかいさんは、ひつじを １００ぴき かっていました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B31-2.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "ひつじたちは、みんな なかよしです。<br>みどりの のはらで あそびます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B31-3.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B31-3.mp4", placeholderImage: "..." },
            { id: "1-4", text: "「さあ、おいしい くさを おたべ」<br>ひつじかいさんは、いつも みまもっています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B31-4.jpeg", placeholderImage: "..." },
            { id: "1-5", text: "ひつじたちは、ひつじかいさんが だいすきです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B31-5.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B31-5.mp4", placeholderImage: "..." },
            { id: "2-1", text: "ゆうぐれに なりました。<br>おうちへ かえる じかんです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B32-1.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "「１、２、３… ９９」<br>あれ？ １ぴき たりません。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B32-2.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B32-2.mp4", placeholderImage: "..." },
            { id: "2-3", text: "ちいさな ひつじが、まいごに なって しまったのです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B32-3.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "ひつじかいさんは、びっくりして あたりを みまわしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B32-4.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B32-4.mp4", placeholderImage: "..." },
            { id: "3-1", text: "「たいへんだ！ さがしに いかなくちゃ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B33-1.jpeg", placeholderImage: "..." },
            { id: "3-2", text: "ひつじかいさんは、９９ぴきを のはらに のこして、はしりだしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B33-2.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B33-2.mp4", placeholderImage: "..." },
            { id: "3-3", text: "くらい もりの なかや、けわしい やまみちを さがします。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B33-3.jpeg", placeholderImage: "..." },
            { id: "3-4", text: "「どこに いるんだい？ でておいで！」<br>いっしょうけんめい よびかけます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B33-4.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B33-4.mp4", placeholderImage: "..." },
            { id: "4-1", text: "そのころ、まいごの ひつじは ひとりぼっちで ないていました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B34-1.jpeg", placeholderImage: "..." },
            { id: "4-2", text: "「メェー、メェー」<br>こわくて、さみしくて、ふるえています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B34-2.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B34-2.mp4", placeholderImage: "..." },
            { id: "4-3", text: "あしもとが わるくて、とげとげの きに ひっかかって しまいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B34-3.jpeg", placeholderImage: "..." },
            { id: "4-4", text: "「だれか たすけて…」<br>ひつじは、ちいさな こえで なきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B34-4.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B34-4.mp4", placeholderImage: "..." },
            { id: "5-1", text: "そのときです！<br>「みつけたぞ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B35-1.jpeg", placeholderImage: "..." },
            { id: "5-2", text: "ひつじかいさんが、かけつけて くれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B35-2.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B35-2.mp4", placeholderImage: "..." },
            { id: "5-3", text: "「よかった、ケガは ないかい？」<br>やさしく だきしめて くれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B35-3.jpeg", placeholderImage: "..." },
            { id: "5-4", text: "ひつじかいさんは、ひつじを かたに かついで、うれしそうに あるきだしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B35-4.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B35-4.mp4", placeholderImage: "..." },
            { id: "6-1", text: "おうちへ かえると、みんなに おしえました。<br>「まいごの ひつじが みつかったよ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B36-1.jpeg", placeholderImage: "..." },
            { id: "6-2", text: "おともだちも よんで、みんなで パーティーです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B36-2.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B36-2.mp4", placeholderImage: "..." },
            { id: "6-3", text: "かみさまは、わたしたちの ことを この ひつじの ように だいじに してくれます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "6-4", text: "１ぴきでも まいごに なったら、かならず さがしだして くれるのです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/images/%E3%82%B7%E3%83%BC%E3%83%B36-4.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/lost_sheep/videos/%E3%82%B7%E3%83%BC%E3%83%B36-4.mp4", placeholderImage: "..." }
        ]
    },
    {
        id: "crucifixion",
        title: "十字架と復活",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "じゅうじかと ふっかつ", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg" },
            { id: "1-1", text: "イエスさまと おともだちが<br>ごはんを たべています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg", is_video: false, placeholderImage: "" },
            { id: "1-2", text: "「これは わたしの からだと ちです。<br>みんなを あいしているよ。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "1-3", text: "イエスさまは おやまの うえで<br>おいのりしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg" },
            { id: "1-4", text: "かみさまは そらから<br>イエスさまを みまもっていました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "1-5", text: "そこへ、わるいひとたちが<br>イエスさまを つかまえに きました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%925.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%925.jpeg" },
            { id: "2-1", text: "「このひとは わるいひとだ！」と<br>ひとびとが おこっています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg", is_video: false, placeholderImage: "" },
            { id: "2-2", text: "イエスさまは わるいことを していないのに、<br>じっと がまんしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "2-3", text: "イエスさまは おもい じゅうじかを<br>せおって あるきます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg" },
            { id: "2-4", text: "とても いたいけれど、<br>みんなの ために がんばりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg", is_video: false, placeholderImage: "" },
            { id: "3-1", text: "イエスさまは じゅうじかに<br>かけられました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg", is_video: false, placeholderImage: "" },
            { id: "3-2", text: "「かみさま、このひとたちを<br>ゆるしてあげて。」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "3-3", text: "イエスさまは みんなの わるいこころを<br>ぜんぶ せおってくれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg" },
            { id: "3-4", text: "そして、イエスさまは<br>いきを ひきとりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-1", text: "おともだちが イエスさまを<br>どうくつの おはかに いれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-2", text: "おおきな いしで<br>ぴたりと ふたを しました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg" },
            { id: "4-3", text: "みんな とても かなしくて、<br>たくさん ないています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", is_video: false, placeholderImage: "" },
            { id: "4-4", text: "１にち、２にちと<br>じかんが すぎました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-1", text: "３っかめの あさ、かみさまの ちからで<br>ひかりが さしました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-2", text: "なんと、おはかの いしが<br>ころがり あいています！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg" },
            { id: "5-3", text: "「イエスさまが いない！」<br>おんなのひとたちが びっくりしています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg", is_video: false, placeholderImage: "" },
            { id: "5-4", text: "てんしが あらわれて 言いました。<br>「イエスさまは いきかえりましたよ！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg" },
            { id: "6-1", text: "イエスさまが みんなの まえに<br>あらわれました！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg" },
            { id: "6-2", text: "「イエスさま！<br>いきかえったのですね！」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg", is_video: false, placeholderImage: "" },
            { id: "6-3", text: "イエスさまの おかげで、<br>みんなの こころは きれいになりました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg" },
            { id: "6-4", text: "イエスさまは いつまでも<br>わたしたちと いっしょです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.mp4", is_video: true, placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/crucifixion/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg" }
        ]
    },
    {
        id: "ascension",
        title: "天に昇るイエス様",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "イエスさまが おそらに<br>のぼっていくよ。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg" },
            { id: "1-1", text: "イエスさまが じゅうじかに かかった あと、<br>ふしぎな ことが おきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg" },
            { id: "1-2", text: "イエスさまが、おはかから<br>よみがえったのです！", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" },
            { id: "1-3", text: "イエスさまは、おでしさんたちの<br>ところに きました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg" },
            { id: "1-4", text: "みんな、イエスさまに あえて<br>とっても よろこびました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg" },
            { id: "2-1", text: "イエスさまは、みんなと いっしょに<br>ごはんを たべました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg" },
            { id: "2-2", text: "そして、かみさまの くにの ことを<br>たくさん おしえてくれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg" },
            { id: "2-3", text: "「わたしは いつも<br>みんなと いっしょに いるよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.jpeg" },
            { id: "2-4", text: "イエスさまの おはなしは、<br>とっても あたたかくて やさしいです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg" },
            { id: "3-1", text: "ある日、イエスさまは みんなを<br>おやまに あつめました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg" },
            { id: "3-2", text: "そして、たいせつな ことを<br>お話ししました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg" },
            { id: "3-3", text: "「せかいじゅうの 人に、<br>かみさまの あいを つたえなさい」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg" },
            { id: "3-4", text: "「みんなを わたしの おでしさんに<br>しなさい」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg" },
            { id: "4-1", text: "おはなしが おわると、<br>ふしぎな ことが おきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg" },
            { id: "4-2", text: "イエスさまのからだが、<br>ふわっと ちゅうに うきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg" },
            { id: "4-3", text: "イエスさまは、すこしずつ<br>おそらに のぼっていきます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg" },
            { id: "4-4", text: "「イエスさま、どこに<br>いっちゃうの？」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg" },
            { id: "5-1", text: "やさしい ひかりに つつまれて、<br>イエスさまは どんどん のぼります。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg" },
            { id: "5-2", text: "白い くもが、イエスさまを<br>やさしく つつみました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg" },
            { id: "5-3", text: "みんなは、ずっと ずっと<br>おそらを みあげていました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg" },
            { id: "5-4", text: "みんなの こころは、<br>イエスさまの あいで いっぱいです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg" },
            { id: "6-1", text: "すると、しろい ふくを きた<br>てんしが あらわれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg" },
            { id: "6-2", text: "「イエスさまは、また いつか<br>おなじように かえってきますよ」", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg" },
            { id: "6-3", text: "てんしは、みんなに<br>そう おしえてくれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg" },
            { id: "6-4", text: "みんなは よろこんで、<br>かみさまの あいを つたえに いきました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.mp4", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/ascension/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg" },
            { id: "6-5", text: "イエスさまは、おそらの かみさまの<br>ところで みんなを みまもっています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg" }
        ]
    },
    {
        id: "pentecost",
        title: "ペンテコステの日",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", text: "ペンテコステの ひ", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "1-1", text: "イエスさまが おそらに のぼっていくよ。", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.mp4", placeholderImage: "..." },
            { id: "1-2", text: "「わたしは いつも いっしょに いるよ。」", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "1-3", text: "「かみさまの ちからを おくるから、まっていてね。」", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%923.mp4", placeholderImage: "..." },
            { id: "1-4", text: "おでしたちは、そらを みあげて おみおくりをしたよ。", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "2-1", text: "おでしたちは おへやに あつまったよ。", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "2-2", text: "みんなで おいのりをして まっていたんだ。", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.mp4", placeholderImage: "..." },
            { id: "2-3", text: "「かみさま、イエスさまの おやくそくは いつかな？」", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "2-4", text: "みんな なかよく、おいのり していたよ。", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "3-1", text: "あるひ、とつぜん つよい かぜが ふいてきた！", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.mp4", placeholderImage: "..." },
            { id: "3-2", text: "ビューッ！ おへやの なかに かぜの おとが ひびくよ。", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "3-3", text: "すると、ちいさな ほのおが みえてきたよ。", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.mp4", placeholderImage: "..." },
            { id: "3-4", text: "ほのおは、みんなの あたまの うえに おりてきたんだ。", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "3-5", text: "でも、あつくないよ。<br>これは「せいれい」という かみさまの ちからだよ。", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "4-1", text: "みんなの こころが ぽかぽか あたたかくなったよ。", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%921.mp4", placeholderImage: "..." },
            { id: "4-2", text: "こわがりだった おでしたちも、ゆうきが わいてきたんだ。", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "4-3", text: "「かみさま、ありがとう！」", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.mp4", placeholderImage: "..." },
            { id: "4-4", text: "みんな、とっても うれしそう！", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "5-1", text: "おでしたちは、おそとに でて おはなしを はじめたよ。", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.mp4", placeholderImage: "..." },
            { id: "5-2", text: "あれ？ いろんな くにの ことばで おはなし しているよ！", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "5-3", text: "まちの ひとたちは、びっくり！", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.mp4", placeholderImage: "..." },
            { id: "5-4", text: "「ぼくたちの くにの ことばで おはなし している！」", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "5-5", text: "かみさまの ちからって、すごいね！", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%925.jpeg", placeholderImage: "..." },
            { id: "6-1", text: "ペテロさんが、みんなに イエスさまの ことを おはなししたよ。", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.mp4", placeholderImage: "..." },
            { id: "6-2", text: "「イエスさまは、みんなの ことを あいしているよ！」", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "6-3", text: "たくさんの ひとが、かみさまを だいすきに なったよ。", is_video: true, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.jpeg", videoPath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4", placeholderImage: "..." },
            { id: "6-4", text: "こうして、はじめの きょうかいが できたんだ。<br>みんな えがおだね！", is_video: false, imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/pentecost/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%924.jpeg", placeholderImage: "..." }
        ]
    },
    {
        id: "new_heaven_and_earth",
        title: "新しい天と地",
        cover: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg",
        scenes: [
            { id: "0-1", is_video: false, text: "あたらしい てんと ち", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/images/%E3%82%B7%E3%83%BC%E3%83%B30%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "1-1", is_video: false, text: "わたしたちの すんでいる せかいには、<br>ときどき かなしいことや いたいことがあります。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "1-2", is_video: false, text: "でも、かみさまは とっても すてきな<br>おやくそくを してくれました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "1-3", is_video: false, text: "「いつか、すべてを あたらしく するよ」<br>かみさまは そう おっしゃいました。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "1-4", is_video: true, text: "それは どんな せかい なんでしょう？", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%924.mp4", placeholderImage: "..." },
            { id: "2-1", is_video: true, text: "あるひ、おそらから イエスさまが<br>もどって こられます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%921.mp4", placeholderImage: "..." },
            { id: "2-2", is_video: false, text: "イエスさまは ピカピカ ひかる<br>きれいないろに つつまれています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/images/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "2-3", is_video: true, text: "「みんな、おまたせ！」<br>イエスさまは やさしく わらいます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%923.mp4", placeholderImage: "..." },
            { id: "2-4", is_video: true, text: "どうぶつたちも こどもたちも、<br>みんな イエスさまの ところへ あつまります。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B32%E2%88%924.mp4", placeholderImage: "..." },
            { id: "3-1", is_video: true, text: "そして、かみさまが つくった<br>「あたらしい せかい」が はじまります。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%921.mp4", placeholderImage: "..." },
            { id: "3-2", is_video: false, text: "きらきら ひかる きれいな おみずや、<br>おいしい くだものが たくさん あります。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "3-3", is_video: true, text: "くらい よるは もう ありません。<br>かみさまの ひかりが ずっと てらしているからです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%923.mp4", placeholderImage: "..." },
            { id: "3-4", is_video: false, text: "らいおんさんと ひつじさんが、<br>いっしょに なかよく おひるね しています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/images/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "3-5", is_video: true, text: "おおかみさんも うさぎさんも、<br>みんな ずっと おともだち です。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B33%E2%88%925.mp4", placeholderImage: "..." },
            { id: "4-1", is_video: false, text: "かみさまは やさしく<br>なみだを ふいてくださいます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "4-2", is_video: false, text: "「もう なくことは ないんだよ」<br>かみさまは やさしく おっしゃいます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "4-3", is_video: true, text: "いたいことも、かなしいことも、<br>びょうきも ぜんぶ なくなります。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%923.mp4", placeholderImage: "..." },
            { id: "4-4", is_video: false, text: "みんなの おかおは、<br>にこにこ えがおで いっぱいです。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/images/%E3%82%B7%E3%83%BC%E3%83%B34%E2%88%924.jpeg", placeholderImage: "..." },
            { id: "5-1", is_video: false, text: "かみさまは、わたしたちと いっしょに<br>すんでくださいます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/adam_and_eve/images/%E3%82%B7%E3%83%BC%E3%83%B31%E2%88%922.jpeg", placeholderImage: "..." },
            { id: "5-2", is_video: true, text: "わたしたちは かみさまの こどもとして、<br>ずっと ずっと なかよく くらします。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%922.mp4", placeholderImage: "..." },
            { id: "5-3", is_video: true, text: "おててを つないで、<br>うたを うたって あそびます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%923.mp4", placeholderImage: "..." },
            { id: "5-4", is_video: true, text: "ほんとうに とっても すてきな<br>あたらしい せかい です。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B35%E2%88%924.mp4", placeholderImage: "..." },
            { id: "6-1", is_video: false, text: "かみさま、すてきな おやくそくを<br>ありがとうございます。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/images/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%921.jpeg", placeholderImage: "..." },
            { id: "6-2", is_video: true, text: "イエスさまが きてくれる ひを、<br>みんなで たのしみに まっています。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%922.mp4", placeholderImage: "..." },
            { id: "6-3", is_video: true, text: "アーメン。", imagePath: "https://pub-9d4682437ab9432099b49a1bcbb44fb2.r2.dev/new_heaven_and_earth/videos/%E3%82%B7%E3%83%BC%E3%83%B36%E2%88%923.mp4", placeholderImage: "..." }
        ]
    }
];

// 全ての絵本の最後に「おしまい」のシーンを自動追加
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

    startInitialUIHideTimer();

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
    clearUITimeout();
    if (typeof appContainerEl !== 'undefined' && appContainerEl) {
        appContainerEl.classList.remove('ui-hidden');
    }

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
    if (typeof appContainerEl !== 'undefined' && appContainerEl) {
        appContainerEl.classList.remove('ui-hidden');
    }
    bookshelfContainer.classList.remove('hidden');
    bookContainer.classList.add('hidden');
    headerEl.classList.add('hidden');
    topControlsEl.classList.add('hidden');
    controlsEl.classList.add('hidden');
    progressContainerEl.classList.add('hidden');
});

// ====== UI 表示/非表示 トグル機能 ======
const appContainerEl = document.getElementById('app-container');
let initialHideTimeout = null;

// 絵本を開いた直後に一度だけ自動で隠すタイマーを開始する関数
function startInitialUIHideTimer() {
    appContainerEl.classList.remove('ui-hidden');
    if (initialHideTimeout) {
        clearTimeout(initialHideTimeout);
    }
    initialHideTimeout = setTimeout(() => {
        appContainerEl.classList.add('ui-hidden');
    }, 3000);
}

function clearUITimeout() {
    if (initialHideTimeout) {
        clearTimeout(initialHideTimeout);
    }
    appContainerEl.classList.remove('ui-hidden');
}

// 絵本の画面中央をクリック/タップした時にUIをトグルする
bookContainer.addEventListener('click', (e) => {
    // 操作ボタンやテキストエリアを押した場合は反応させない
    if (e.target.closest('.controls') || e.target.closest('#top-controls') || e.target.closest('#header') || e.target.closest('.glass-panel')) {
        return;
    }
    
    // 手動でタップした場合は自動隠しタイマーをキャンセル
    if (initialHideTimeout) {
        clearTimeout(initialHideTimeout);
    }
    
    // UIの表示/非表示を切り替え
    appContainerEl.classList.toggle('ui-hidden');
});
