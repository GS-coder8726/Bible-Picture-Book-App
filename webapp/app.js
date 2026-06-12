const books = [
    {
        id: "creation",
        title: "天地創造",
        cover: "./assets/images/creation/image9-8.jpeg",
        scenes: [
            { id: "c-1", text: "むかしむかし、せかいは なーんにも なかった。<br>まっくら で、とっても しずかな ばしょ。<br>でも、だいじょうぶ！ かみさま が いたよ。<br>かみさまは とっても やさしくて、 みんなの ことが だいすき。", imagePath: "./assets/images/creation/posterImage-52.png", videoPath: "./assets/images/creation/video-51.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1" },
            { id: "c-2", text: "『そうだ！ みんなと いっしょに あそべる、 すてきな せかい を つくろう！』<br>かみさまは わくわく しました。<br>まっくらな やみのなか で しあわせな せかい を つくるため たくさん かんがえました。<br>さあ、かみさま の すごい おしごと、 はじまり はじまり！", imagePath: "./assets/images/creation/posterImage-69.png", videoPath: "./assets/images/creation/video (2)-68.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2" },
            { id: "c-3", text: "かみさまは、まず、こう いいました。<br>『ひかり あれ！』", imagePath: "./assets/images/creation/image5-12.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3" },
            { id: "c-4", text: "すると、どうでしょう！ まっくらだった せかい が、 ぴかーっ！ と あかるく なりました。<br>かみさまは、あかるい じかん を 『おひる』、 くらい じかん を 『よる』 と よぶことに しました。", imagePath: "./assets/images/creation/posterImage-73.png", videoPath: "./assets/images/creation/video (3)-72.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4" },
            { id: "c-5", text: "つぎに、かみさまは、 あおくて ひろーい 『そら』 を つくりました。<br>みず を ぐぐーっと あつめて、 ざぶーん！ 『うみ』 に しました。", imagePath: "./assets/images/creation/posterImage-97.png", videoPath: "./assets/images/creation/video (4)-96.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5" },
            { id: "c-6", text: "かわいた ところ は、 しっかりとした 『だいち』 に なりました。<br>かみさまは これ を みて、 『うん、とっても よし！』と、 にっこり わらって いいました。", imagePath: "./assets/images/creation/posterImage-100.png", videoPath: "./assets/images/creation/Aerial_photography_timelapse_202512011346-99.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6" },
            { id: "c-7", text: "そして かみさまは、だいち に やさしく こえ を かけました。<br>さあ、げんきな き や くさ や おはなたち でてきなさい！", imagePath: "./assets/images/creation/posterImage-106.png", videoPath: "./assets/images/creation/The_character_is_202512011440-105.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+7" },
            { id: "c-8", text: "すると、 にょき！ にょきにょき！ ちいさな くさ が うまれました。<br>ぐんぐん ぐーん！ おおきな き も そだちました。<br>かわいい おはな も、いっぱい！ あかい りんご や、きいろい バナナ、 おいしい くだもの も、たくさん なりました。<br>せかいは きれいな みどり で いっぱいです！<br>かみさまは これ を みて、 『うん、とっても よし！』と、 またまた にっこり しました。", imagePath: "./assets/images/creation/posterImage-114.png", videoPath: "./assets/images/creation/Green_grass_sprouts_202512011447-113.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+8" },
            { id: "c-9", text: "さあ、つぎは げんきな おともだち の ばんだ！<br>かみさまは、つぎつぎに おともだち を よびました。<br>『うみの ともだち、おいで！』<br>すいすい～っ と おさかなたち。 おおきな くじら も ぷはーっ！<br>『そら の ともだち、おいで！』<br>ぱたぱた～っ と とりたちが、 おおぞら へ とんで いきます。<br>『だいち の ともだち、おいで！』<br>とことこ うさぎさん、どっしん ぞうさん！ みんな げんきに かけだしました。<br>かみさまは、みんなが げんき いっぱい なのを みて、 とっても うれしく なりました。<br>『うん、みんな とっても よし！』", imagePath: "./assets/images/creation/posterImage-117.png", videoPath: "./assets/images/creation/The_yellow_character_202512011501-116.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+9" },
            { id: "c-10", text: "さあ、いよいよ、 いちばん だいじな、 かみさま の 『こども』 を つくります。<br>かみさまは、じぶん に そっくりな、 とくべつな こども を つくろう と おもいました。<br>だいち の つち を あつめて、 やさしく、からだ を つくりました。 『おとこのこ』 です。<br>かみさまが、そーっと いき を ふーっ と ふきかけると、 あったかい こころ が ぽっ と うまれました。<br>かみさまは、もうひとり、 なかよしの ともだち も つくりました。 『おんなのこ』 です。<br>かみさま は みんな の ことが だいすき 。みんなと おはなし できるように しました。", imagePath: "./assets/images/creation/posterImage-127.png", videoPath: "./assets/images/creation/video (6)-126.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+10" },
            { id: "c-11", text: "かみさまは、うまれた ふたり を みて、 いままで で いちばん おおきな こえ で いいました。<br>『とっても よかった！』<br>かみさまは、ふたり を やさしく みつめて、 おはなし しました。<br>『ふたり とも、なかよく くらしなさい』<br>『そして、この せかい の どうぶつ や おはな たち は すべて あなたたち のために つくったんだよ』<br>みんな を たいせつ に してね。", imagePath: "./assets/images/creation/posterImage-160.png", videoPath: "./assets/images/creation/video (2)-159.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+11" },
            { id: "c-12", text: "こうして かみさまは この うつくしい せかい を ぜーんぶ つくり おえました。<br>おはな も とり も どうぶつ も みんな なかよく くらす すてきな せかい が はじまりました。<br>この えほん を よんでいる みんな も かみさまが つくった だいじな だいじな 『こども』 です。<br>かみさまが つくった この せかい と まわりの ひと どうぶつたち みんなを たいせつ に しようね。", imagePath: "./assets/images/creation/posterImage-135.png", videoPath: "./assets/images/creation/video-134.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+12" }
        ]
    },
    {
        id: "adam_and_eve",
        title: "三大祝福",
        cover: "./assets/adam_and_eve/images/シーン0−1.jpeg",
        scenes: [
            { id: "0-1", text: "かみさまの こども アダムと エバ 〜かみさまとの おやくそく〜", imagePath: "./assets/adam_and_eve/images/シーン0−1.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+0-1" },
            { id: "1-1", text: "広い広い エデンの園で、アダムと エバは 生まれました。", videoPath: "./assets/adam_and_eve/videos/シーン1−1.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-1" },
            { id: "1-2", text: "「アダム、エバ。はじめまして！ ずっと いっしょだよ」", imagePath: "./assets/adam_and_eve/images/シーン1−2.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-2" },
            { id: "1-3", text: "かみさまは、ふたりの おとうさんで、おかあさんです。", imagePath: "./assets/adam_and_eve/images/シーン1−3.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-3" },
            { id: "1-4", text: "ふたりは、かみさまの 手を ぎゅっと にぎって、おさんぽ するのが 大好き！", videoPath: "./assets/adam_and_eve/videos/シーン1−4.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1-4" },
            { id: "2-1", text: "アダムと エバは、かみさま みたいに、おたがいに たすけあい みんなを よろこばせたいと おもいました。", imagePath: "./assets/adam_and_eve/images/シーン2−1.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-1" },
            { id: "2-2", text: "そんな ふたりも、ときには ころんで 泣いてしまう ことが ありました。すると かみさまは、心配して、急いで かけよりました。", videoPath: "./assets/adam_and_eve/videos/シーン2−2.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-2" },
            { id: "2-3", text: "ふたりが きれいな お花を 見つけて 笑うと、かみさまも いっしょに にっこり わらいました。", imagePath: "./assets/adam_and_eve/images/シーン2−3.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-3" },
            { id: "2-4", text: "かみさまと おなじ 気持ちを しって、ふたりの こころは「愛」で ぽかぽかに なりました。", imagePath: "./assets/adam_and_eve/images/シーン2−5.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-4" },
            { id: "2-5", text: "「ねえねえ、みんなは どんな ときに うれしくなるの？」", videoPath: "./assets/adam_and_eve/videos/シーン2−4.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2-5" },
            { id: "3-1", text: "キラキラした 時間が 流れて、ふたりは すてきな お兄さんと お姉さんに なりました。", videoPath: "./assets/adam_and_eve/videos/シーン3−1.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-1" },
            { id: "3-2", text: "「アダム、エバ。おめでとう。ふたりは、もう 立派な 大人だね」", imagePath: "./assets/adam_and_eve/images/シーン3−2.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-2" },
            { id: "3-3", text: "アダムと エバは、たがいを 大切に 想い、かみさまの 前で 手を つなぎました。", imagePath: "./assets/adam_and_eve/images/シーン3−3.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-3" },
            { id: "3-4", text: "「ずっとずっと、かみさまといっしょだね。ふたりでしあわせになろう」", videoPath: "./assets/adam_and_eve/videos/シーン3−4.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3-4" },
            { id: "4-1", text: "ふたりは、かみさまとの おやくそく どおり、ずっと なかよく くらしました。", imagePath: "./assets/adam_and_eve/images/シーン4−1.jpeg?v=2", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-1" },
            { id: "4-2", text: "やがて、ふたりの もとに かわいい 赤ちゃんたちが うまれました。", videoPath: "./assets/adam_and_eve/videos/シーン4−2.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-2" },
            { id: "4-3", text: "「みんな、生まれてきてくれて ありがとう！」", imagePath: "./assets/adam_and_eve/images/シーン4−3.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-3" },
            { id: "4-4", text: "かみさまも いっしょに、笑顔が あふれる「しあわせな おうち」が できました。", videoPath: "./assets/adam_and_eve/videos/シーン4−4.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4-4" },
            { id: "5-1", text: "「アダム、エバ。この 広い 世界を、みんなで 守っていこうね」", imagePath: "./assets/adam_and_eve/images/シーン5−1.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-1" },
            { id: "5-2", text: "ふたりは、どうぶつたちと おはなしをして、お花や 木を やさしく なでてあげました。", videoPath: "./assets/adam_and_eve/videos/シーン5−2.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-2" },
            { id: "5-3", text: "「きみたちは、神様の 大切な 宝物だよ」", videoPath: "./assets/adam_and_eve/videos/シーン5−3.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-3" },
            { id: "5-4", text: "せかいじゅうの すべての ものが、ふたりの 愛に つつまれて、キラキラ 輝きだしました。", imagePath: "./assets/adam_and_eve/images/シーン5−4.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5-4" },
            { id: "6-1", text: "「かみさま、わたしたち が いっしょに 幸せな世界を つくっていくよ！」", videoPath: "./assets/adam_and_eve/videos/シーン6−1.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-1" },
            { id: "6-2", text: "アダムと エバ、そして たくさんの 子どもたち。", imagePath: "./assets/adam_and_eve/images/シーン6−2.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-2" },
            { id: "6-3", text: "みんなが、おたがいの 笑顔の ために、何かを してあげるのが 大好き！", imagePath: "./assets/adam_and_eve/images/シーン6−3.jpeg", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-3" },
            { id: "6-4", text: "だれかの ために 優しく すると、せかいじゅうが、かみさまの「愛」で、ふわふわ ぽっかぽかに なりました。", videoPath: "./assets/adam_and_eve/videos/シーン6−4.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-4" },
            { id: "6-5", text: "「みんなも、まわりの お友だちに たくさん 優しく してあげてね！」", videoPath: "./assets/adam_and_eve/videos/シーン6−5.mp4", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6-5" }
        ]
    },
    {
        id: "paradise-lost",
        title: "失楽園（アダムとエバ）",
        cover: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Cover",
        scenes: [
            { id: "pl-1", text: "アダム と エバ は、キラキラの 「エデンのその」で なかよく くらしていました。<br>おいしい くだもの が たくさん！<br>「かみさま、すてきな おにわ を ありがとう！」", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+1" },
            { id: "pl-2", text: "かみさまは、ふたりに ひとつだけ 【おやくそく】 を しました。<br>「おにわの まんなかに ある き の み は、たべないでね。」<br>ふたりは げんきに こたえました。「はーい！」", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+2" },
            { id: "pl-3", text: "あるひ、するする〜っと ヘビ が やってきました。<br>「ねえねえ、あの み、とっても おいしいよ。たべてみない？」", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+3" },
            { id: "pl-4", text: "エバ は じーっと みつめました。<br>アダム も じーっと みつめました。<br>「だめだよ、かみさまとの おやくそく だから…」<br>「でも、すこしだけなら いいかな？」", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+4" },
            { id: "pl-5", text: "あむっ！<br>ふたりは、おやくそく を やぶって、き の み を たべてしまいました。<br>「ああ、どうしよう…！」<br>ふたりは どきどき して、かくれて しまいました。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+5" },
            { id: "pl-6", text: "かみさまは、とっても かなしい おかお を しました。<br>「おやくそく を やぶってしまったから、ここには もう いられません。」", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+6" },
            { id: "pl-7", text: "ふたりは、おにわ から でていく ことに なりました。<br>とぼとぼ、とぼとぼ。<br>とっても さみしい きもち です。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+7" },
            { id: "pl-8", text: "でもね、かみさまは ふたりの ことが、いまも だいすき です。<br>「いつか また、みんなで なかよく くらせる ように…」<br>かみさま は、ふたり が かえってくるのを ずっと ずっと まっています。", imagePath: "", videoPath: "", placeholderImage: "https://placehold.co/1280x720/F7E8C3/4A4036?text=Scene+8" }
        ]
    },
    { id: "cain_and_abel", title: "カインとアベル", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "noahs_ark", title: "ノアの箱舟", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "abrahams_departure", title: "アブラハムの旅立ち", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "isaacs_birth", title: "イサクの誕生", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "abraham_and_isaac", title: "アブラハムとイサク", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "jacob_and_esau_1", title: "ヤコブとエサウ①", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "jacob_and_esau_2", title: "ヤコブとエサウ②", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "jacob_and_esau_3", title: "ヤコブとエサウ③", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "dreaming_joseph", title: "夢見るヨセフと兄たち", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "joseph_in_egypt", title: "エジプトのヨセフ", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "josephs_reunion", title: "ヨセフと兄弟の再会", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "baby_moses", title: "かごの中の赤ちゃんモーセ", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "exodus", title: "エジプトからの脱出", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "parting_of_the_sea", title: "海が割れる奇跡", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "birth_of_jesus", title: "イエス様の誕生", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "calling_disciples", title: "弟子たちを招く", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "five_loaves", title: "5つのパンと2匹の魚", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "good_samaritan", title: "善きサマリア人", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "lost_sheep", title: "迷子の羊", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] },
    { id: "crucifixion", title: "十字架と復活", cover: "https://placehold.co/1280x720/F7E8C3/F7E8C3", scenes: [] }
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

function checkImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
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
        sceneVideoEl.src = scene.videoPath;
        sceneVideoEl.muted = isGlobalMuted; // グローバルミュート設定を反映
        sceneVideoEl.play().catch(e => console.log("Video autoplay blocked", e));
    } else {
        sceneVideoEl.classList.add('hidden');
        sceneVideoEl.pause();
        sceneImageEl.classList.remove('hidden');
        
        const hasRealImage = await checkImage(scene.imagePath);
        const bgUrl = hasRealImage ? scene.imagePath : scene.placeholderImage;
        sceneImageEl.style.backgroundImage = `url('${bgUrl}')`;
    }

    const progressPercent = ((index + 1) / scenes.length) * 100;
    progressEl.style.width = `${progressPercent}%`;

    // 最初のシーンの最初の文ならprevを無効化
    prevBtn.disabled = index === 0 && currentSentenceIndex === 0;
    // 最後のシーンの最後の文ならnextを無効化
    nextBtn.disabled = index === scenes.length - 1 && currentSentenceIndex === currentSceneSentences.length - 1;
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
