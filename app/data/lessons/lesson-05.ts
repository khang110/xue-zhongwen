import type { Lesson } from '../../../types/lesson'

export const lesson05: Lesson = {
  id: 'L5',
  number: 5,
  titleTraditional: '現在流行什麼？',
  titleSimplified: '现在流行什么？',
  titlePinyin: 'Xiànzài liúxíng shénme?',
  titleVi: 'Bây giờ đang thịnh hành gì?',
  status: 'available',

  dialogues: [
    [
      { speaker: '', traditional: '（在宿舍交誼廳）', simplified: '（在宿舍交谊厅）', pinyin: '(Zài sùshè jiāoyì tīng)', english: '(In the dorm common room)', vietnamese: '(Tại phòng sinh hoạt chung của ký túc xá)' },
      { speaker: '高橋健太', traditional: '敏萱，妳排了兩個小時的隊，就為了買這杯飲料？', simplified: '敏萱，妳排了两个小时的队，就为了买这杯饮料？', pinyin: 'Mǐnxuān, nǐ pái le liǎng ge xiǎoshí de duì, jiù wèile mǎi zhè bēi yǐnliào?', english: 'Minxuan, you stood in line for two hours just to buy this drink?', vietnamese: 'Mẫn Huyên, cậu xếp hàng hai tiếng chỉ để mua ly nước này thôi à?' },
      { speaker: '陳敏萱', traditional: '對啊，這家店最近超紅的，每個人的社群上都是這杯。我也想拍一張照片。', simplified: '对啊，这家店最近超红的，每个人的社群上都是这杯。我也想拍一张照片。', pinyin: 'Duì a, zhè jiā diàn zuìjìn chāo hóng de, měi ge rén de shèqún shàng dōu shì zhè bēi. Wǒ yě xiǎng pāi yì zhāng zhàopiàn.', english: "Yeah, this place is super hot right now—it's all over everyone's social media. I want a photo too.", vietnamese: 'Ừ, tiệm này dạo này nổi lắm, mạng xã hội của ai cũng thấy ly này. Mình cũng muốn chụp một tấm.' },
      { speaker: '安德思', traditional: '我不懂，一杯奶茶而已，有必要這樣嗎？', simplified: '我不懂，一杯奶茶而已，有必要这样吗？', pinyin: "Wǒ bù dǒng, yì bēi nǎichá éryǐ, yǒu bìyào zhèyàng ma?", english: "I don't get it. It's just a cup of milk tea—is all this necessary?", vietnamese: 'Mình không hiểu, chỉ là một ly trà sữa thôi, có cần thiết vậy không?' },
      { speaker: '陳敏萱', traditional: '你不懂啦。這叫「跟上流行」。過了這個月，可能就沒人在乎了。', simplified: '你不懂啦。这叫「跟上流行」。过了这个月，可能就没人在乎了。', pinyin: "Nǐ bù dǒng la. Zhè jiào 'gēnshàng liúxíng'. Guò le zhège yuè, kěnéng jiù méi rén zàihu le.", english: "You don't get it. This is called 'keeping up with the trend.' After this month, no one will care anymore.", vietnamese: 'Cậu không hiểu đâu. Cái này gọi là "bắt kịp mốt". Qua tháng này, có khi chẳng ai còn quan tâm nữa.' },
      { speaker: '羅珊蒂', traditional: '說到流行，我覺得台灣的流行變得特別快。上個月大家還在玩那個手機遊戲，這個月就換成拍短影片了。', simplified: '说到流行，我觉得台湾的流行变得特别快。上个月大家还在玩那个手机游戏，这个月就换成拍短影片了。', pinyin: 'Shuō dào liúxíng, wǒ juéde Táiwān de liúxíng biàn de tèbié kuài. Shàng ge yuè dàjiā hái zài wán nàge shǒujī yóuxì, zhège yuè jiù huàn chéng pāi duǎnyǐngpiàn le.', english: "Speaking of trends, I think trends in Taiwan change really fast. Last month everyone was playing that phone game; this month it's switched to making short videos.", vietnamese: 'Nói đến mốt, mình thấy mốt ở Đài Loan thay đổi đặc biệt nhanh. Tháng trước mọi người còn chơi game điện thoại kia, tháng này đã chuyển sang quay video ngắn.' },
      { speaker: '高橋健太', traditional: '這跟社群媒體有很大的關係。一個網紅推薦，東西馬上就賣光。', simplified: '这跟社群媒体有很大的关系。一个网红推荐，东西马上就卖光。', pinyin: 'Zhè gēn shèqún méitǐ yǒu hěn dà de guānxì. Yí ge wǎnghóng tuījiàn, dōngxi mǎshàng jiù màiguāng.', english: 'That has a lot to do with social media. One influencer recommends something and it sells out immediately.', vietnamese: 'Cái này liên quan lớn đến mạng xã hội. Một KOL giới thiệu là hàng lập tức cháy.' },
      { speaker: '安德思', traditional: '我媽常說，越是大家都在搶的東西，她越不想買。', simplified: '我妈常说，越是大家都在抢的东西，她越不想买。', pinyin: 'Wǒ mā cháng shuō, yuè shì dàjiā dōu zài qiǎng de dōngxi, tā yuè bù xiǎng mǎi.', english: 'My mom always says the more everyone is scrambling for something, the less she wants to buy it.', vietnamese: 'Mẹ mình hay nói, cái gì mọi người càng tranh nhau mua, mẹ càng không muốn mua.' },
      { speaker: '陳敏萱', traditional: '可是有些流行是好的啊。像現在很多人開始自己帶環保杯，這個習慣就很值得跟。', simplified: '可是有些流行是好的啊。像现在很多人开始自己带环保杯，这个习惯就很值得跟。', pinyin: 'Kěshì yǒuxiē liúxíng shì hǎo de a. Xiàng xiànzài hěn duō rén kāishǐ zìjǐ dài huánbǎobēi, zhège xíguàn jiù hěn zhídé gēn.', english: "But some trends are good. Like now many people bring their own reusable cups—that habit is worth following.", vietnamese: 'Nhưng có những mốt tốt mà. Như bây giờ nhiều người bắt đầu tự mang cốc tái sử dụng, thói quen đó rất đáng theo.' },
      { speaker: '羅珊蒂', traditional: '這倒是真的。流行並不都是壞事，重點是你有沒有想清楚為什麼要跟。', simplified: '这倒是真的。流行并不都是坏事，重点是你有没有想清楚为什么要跟。', pinyin: 'Zhè dào shì zhēn de. Liúxíng bìng bù dōu shì huàishì, zhòngdiǎn shì nǐ yǒu méiyǒu xiǎng qīngchǔ wèishénme yào gēn.', english: "That's true. Trends aren't all bad things; the point is whether you've thought clearly about why you're following them.", vietnamese: 'Cái đó thì đúng thật. Mốt không phải đều là chuyện xấu, điểm mấu chốt là bạn có nghĩ rõ vì sao mình chạy theo hay không.' },
      { speaker: '高橋健太', traditional: '我之所以不太追流行，是因為我覺得那樣很累。剛買的東西，過幾個月就過時了。', simplified: '我之所以不太追流行，是因为我觉得那样很累。刚买的东西，过几个月就过时了。', pinyin: 'Wǒ zhī suǒyǐ bú tài zhuī liúxíng, shì yīnwèi wǒ juéde nàyàng hěn lèi. Gāng mǎi de dōngxi, guò jǐ ge yuè jiù guòshí le.', english: "The reason I don't really chase trends is that I find it exhausting. Something you just bought is out of style a few months later.", vietnamese: 'Sở dĩ mình không mấy khi chạy theo mốt là vì mình thấy như vậy rất mệt. Đồ vừa mua, qua vài tháng là lỗi mốt.' },
      { speaker: '陳敏萱', traditional: '你們男生就是這樣。隨著年紀變大，越來越不在乎別人的看法。', simplified: '你们男生就是这样。随着年纪变大，越来越不在乎别人的看法。', pinyin: 'Nǐmen nánshēng jiùshì zhèyàng. Suízhe niánjì biàn dà, yuè lái yuè bú zàihu biérén de kànfǎ.', english: "You guys are all like this. As you get older, you care less and less about what others think.", vietnamese: 'Con trai các cậu là vậy đấy. Cùng với tuổi tác, càng ngày càng không bận tâm cách nhìn của người khác.' },
      { speaker: '安德思', traditional: '這不是壞事吧？我倒覺得能做自己比較重要。', simplified: '这不是坏事吧？我倒觉得能做自己比较重要。', pinyin: 'Zhè búshì huàishì ba? Wǒ dào juéde néng zuò zìjǐ bǐjiào zhòngyào.', english: "That's not a bad thing, is it? I'd say being yourself matters more.", vietnamese: 'Đó đâu phải chuyện xấu? Mình lại thấy sống là chính mình quan trọng hơn.' },
      { speaker: '羅珊蒂', traditional: '其實我發現，真正有自己風格的人，反而不太受流行影響。', simplified: '其实我发现，真正有自己风格的人，反而不太受流行影响。', pinyin: 'Qíshí wǒ fāxiàn, zhēnzhèng yǒu zìjǐ fēnggé de rén, fǎn’ér bú tài shòu liúxíng yǐngxiǎng.', english: "Actually I've noticed that people with real personal style are the ones least affected by trends.", vietnamese: 'Thật ra mình nhận thấy, người thật sự có phong cách riêng lại ít bị mốt ảnh hưởng.' },
      { speaker: '陳敏萱', traditional: '好啦好啦，你們說得都對。可是這杯我還是要喝，而且要趁它還沒退流行的時候拍照。', simplified: '好啦好啦，你们说得都对。可是这杯我还是要喝，而且要趁它还没退流行的时候拍照。', pinyin: 'Hǎo la hǎo la, nǐmen shuō de dōu duì. Kěshì zhè bēi wǒ háishì yào hē, érqiě yào chèn tā hái méi tuì liúxíng de shíhòu pāizhào.', english: "Fine, fine, you're all right. But I'm still drinking this, and I'm taking the photo while it's still in fashion.", vietnamese: 'Thôi được rồi, các cậu nói đều đúng. Nhưng ly này mình vẫn uống, mà còn phải chụp ảnh lúc nó chưa lỗi mốt.' },
      { speaker: '高橋健太', traditional: '那妳快喝吧，冰都要化了。', simplified: '那妳快喝吧，冰都要化了。', pinyin: 'Nà nǐ kuài hē ba, bīng dōu yào huà le.', english: "Then drink up—the ice is about to melt.", vietnamese: 'Vậy cậu uống nhanh đi, đá sắp tan hết rồi.' },
      { speaker: '陳敏萱', traditional: '哎呀，光顧著聊天，我都忘了。', simplified: '哎呀，光顾着聊天，我都忘了。', pinyin: 'Āiyā, guāng gùzhe liáotiān, wǒ dōu wàng le.', english: "Oh no, I was so busy chatting I forgot.", vietnamese: 'Ôi, mải lo nói chuyện, mình quên mất.' }
    ]
  ],

  shortReading: {
    traditional:
      '流行是怎麼來的？\n\n　　這幾年，只要打開手機，就會看到大家都在討論同一家店、同一個東西。一個新的潮流，常常幾天之內就傳遍全國。這種傳播的速度，在網路還不發達的時候是很難想像的。\n\n　　流行為什麼傳得這麼快？這跟社群媒體有很大的關係。一個網紅或一支短影片，就可能帶動一整個話題。廣告公司也發現，找對人推薦，比花大錢打廣告更有效。於是，一個品牌紅起來，往往只需要很短的時間。\n\n　　不過，跟著潮流走也有問題。看到大家一窩蜂去買，很多人也跟著買，卻沒想過自己是不是真的需要。等到熱潮過去，家裡就多了一堆用不到的東西。專家建議，消費以前先問自己三個問題：我需要嗎？我用得到嗎？沒有它會怎麼樣？\n\n　　其實，流行本身沒有好壞。有些風潮，像自己帶環保杯、假日去做運動，如果能逐漸變成長久的習慣，就是好的改變。重點不是跟不跟流行，而是我們有沒有理性的判斷，和自己的觀念。',
    simplified:
      '流行是怎么来的？\n\n　　这几年，只要打开手机，就会看到大家都在讨论同一家店、同一个东西。一个新的潮流，常常几天之内就传遍全国。这种传播的速度，在网络还不发达的时候是很难想象的。\n\n　　流行为什么传得这么快？这跟社群媒体有很大的关系。一个网红或一支短影片，就可能带动一整个话题。广告公司也发现，找对人推荐，比花大钱打广告更有效。于是，一个品牌红起来，往往只需要很短的时间。\n\n　　不过，跟着潮流走也有问题。看到大家一窝蜂去买，很多人也跟着买，却没想过自己是不是真的需要。等到热潮过去，家里就多了一堆用不到的东西。专家建议，消费以前先问自己三个问题：我需要吗？我用得到吗？没有它会怎么样？\n\n　　其实，流行本身没有好坏。有些风潮，像自己带环保杯、假日去做运动，如果能逐渐变成长久的习惯，就是好的改变。重点不是跟不跟流行，而是我们有没有理性的判断，和自己的观念。',
    vietnamese:
      'Mốt từ đâu mà ra?\n\nMấy năm nay, chỉ cần mở điện thoại là thấy mọi người đều bàn về cùng một quán, cùng một món đồ. Một trào lưu mới thường chỉ trong vài ngày là lan khắp cả nước. Tốc độ lan truyền này, vào thời mạng internet còn chưa phát triển thì rất khó tưởng tượng.\n\nVì sao mốt lan nhanh đến vậy? Chuyện này liên quan lớn đến mạng xã hội. Một KOL hay một video ngắn có thể kéo theo cả một chủ đề. Các công ty quảng cáo cũng nhận ra, tìm đúng người để giới thiệu còn hiệu quả hơn bỏ nhiều tiền chạy quảng cáo. Thế là, một thương hiệu nổi lên thường chỉ cần một khoảng thời gian rất ngắn.\n\nTuy nhiên, chạy theo trào lưu cũng có vấn đề. Thấy mọi người đổ xô đi mua, nhiều người cũng mua theo, mà chẳng nghĩ mình có thật sự cần hay không. Đến khi cơn sốt qua đi, trong nhà lại thừa ra một đống đồ không dùng tới. Chuyên gia khuyên, trước khi tiêu dùng hãy tự hỏi ba câu: Mình có cần không? Mình có dùng tới không? Không có nó thì sao?\n\nThật ra, bản thân mốt không tốt cũng không xấu. Có những làn sóng, như tự mang cốc tái sử dụng, ngày nghỉ đi tập thể dục, nếu dần trở thành thói quen lâu dài thì là một thay đổi tốt. Điểm mấu chốt không phải là có chạy theo mốt hay không, mà là chúng ta có sự phán đoán lý trí và quan niệm của riêng mình hay không.'
  },

  phrases: [
    { phraseTraditional: '跟上流行', phraseSimplified: '跟上流行', pinyin: 'gēnshàng liúxíng', meaningVi: 'bắt kịp mốt, theo kịp xu hướng' },
    { phraseTraditional: '退流行', phraseSimplified: '退流行', pinyin: 'tuì liúxíng', meaningVi: 'hết mốt, lỗi mốt' },
    { phraseTraditional: '賣光', phraseSimplified: '卖光', pinyin: 'màiguāng', meaningVi: 'bán sạch, cháy hàng' },
    { phraseTraditional: '這倒是真的', phraseSimplified: '这倒是真的', pinyin: 'zhè dào shì zhēn de', meaningVi: 'điều đó thì đúng thật' },
    { phraseTraditional: '做自己', phraseSimplified: '做自己', pinyin: 'zuò zìjǐ', meaningVi: 'sống là chính mình' },
    { phraseTraditional: '光顧著…', phraseSimplified: '光顾着…', pinyin: 'guāng gùzhe…', meaningVi: 'mải lo (làm gì) mà quên mất' },
    { phraseTraditional: '一窩蜂', phraseSimplified: '一窝蜂', pinyin: 'yì wō fēng', meaningVi: 'đổ xô, ùn ùn (như ong vỡ tổ)' }
  ],

  vocab: [
    { id: 'L5-001', lessonId: 'L5', order: 1, group: 'vocab1', traditional: '流行', simplified: '流行', pinyin: 'liúxíng', wordClass: ['Vs', 'N'], meaningVi: 'thịnh hành, mốt; xu hướng', meaningEn: 'to be popular; trend, fashion', tags: ['mua-sam'], examples: [{ traditional: '這家店最近超紅，因為社群上很流行。', simplified: '这家店最近超红，因为社群上很流行。', vietnamese: 'Tiệm này dạo này rất nổi vì đang thịnh hành trên mạng xã hội.' }] },
    { id: 'L5-002', lessonId: 'L5', order: 2, group: 'vocab1', traditional: '排隊', simplified: '排队', pinyin: 'páiduì', wordClass: ['V-sep'], meaningVi: 'xếp hàng', meaningEn: 'to line up, to queue', notes: 'Động từ ly hợp: 排了兩個小時的隊。', examples: [{ traditional: '為了買這杯飲料，她排了兩個小時的隊。', simplified: '为了买这杯饮料，她排了两个小时的队。', vietnamese: 'Để mua ly nước này, cô ấy đã xếp hàng hai tiếng.' }] },
    { id: 'L5-003', lessonId: 'L5', order: 3, group: 'vocab1', traditional: '社群', simplified: '社群', pinyin: 'shèqún', wordClass: ['N'], meaningVi: 'mạng xã hội; cộng đồng mạng', meaningEn: 'social media; online community', examples: [{ traditional: '每個人的社群上都是這家店的照片。', simplified: '每个人的社群上都是这家店的照片。', vietnamese: 'Mạng xã hội của ai cũng đầy ảnh của tiệm này.' }] },
    { id: 'L5-004', lessonId: 'L5', order: 4, group: 'vocab1', traditional: '拍照', simplified: '拍照', pinyin: 'pāizhào', wordClass: ['V-sep'], meaningVi: 'chụp ảnh', meaningEn: 'to take a photo', examples: [{ traditional: '很多人排隊只是為了拍照放上社群。', simplified: '很多人排队只是为了拍照放上社群。', vietnamese: 'Nhiều người xếp hàng chỉ để chụp ảnh đăng lên mạng xã hội.' }] },
    { id: 'L5-005', lessonId: 'L5', order: 5, group: 'vocab1', traditional: '跟上', simplified: '跟上', pinyin: 'gēnshàng', wordClass: ['V'], meaningVi: 'theo kịp, bắt kịp', meaningEn: 'to keep up with', examples: [{ traditional: '她排隊就是為了跟上最新的流行。', simplified: '她排队就是为了跟上最新的流行。', vietnamese: 'Cô ấy xếp hàng chính là để bắt kịp mốt mới nhất.' }] },
    { id: 'L5-006', lessonId: 'L5', order: 6, group: 'vocab1', traditional: '在乎', simplified: '在乎', pinyin: 'zàihu', wordClass: ['Vst'], meaningVi: 'bận tâm, để ý, quan tâm', meaningEn: 'to care about, to mind', examples: [{ traditional: '過了這個月，可能就沒人在乎了。', simplified: '过了这个月，可能就没人在乎了。', vietnamese: 'Qua tháng này, có khi chẳng ai còn bận tâm nữa.' }] },
    { id: 'L5-007', lessonId: 'L5', order: 7, group: 'vocab1', traditional: '遊戲', simplified: '游戏', pinyin: 'yóuxì', wordClass: ['N'], meaningVi: 'trò chơi', meaningEn: 'game', examples: [{ traditional: '上個月大家還在玩那個手機遊戲。', simplified: '上个月大家还在玩那个手机游戏。', vietnamese: 'Tháng trước mọi người còn chơi game điện thoại kia.' }] },
    { id: 'L5-008', lessonId: 'L5', order: 8, group: 'vocab1', traditional: '短影片', simplified: '短影片', pinyin: 'duǎnyǐngpiàn', wordClass: ['N'], meaningVi: 'video ngắn', meaningEn: 'short video', examples: [{ traditional: '這個月大家又換成拍短影片了。', simplified: '这个月大家又换成拍短影片了。', vietnamese: 'Tháng này mọi người lại chuyển sang quay video ngắn.' }] },
    { id: 'L5-009', lessonId: 'L5', order: 9, group: 'vocab1', traditional: '媒體', simplified: '媒体', pinyin: 'méitǐ', wordClass: ['N'], meaningVi: 'truyền thông, phương tiện truyền thông', meaningEn: 'media', examples: [{ traditional: '流行傳得快，跟社群媒體有很大的關係。', simplified: '流行传得快，跟社群媒体有很大的关系。', vietnamese: 'Mốt lan nhanh, liên quan lớn đến mạng xã hội.' }] },
    { id: 'L5-010', lessonId: 'L5', order: 10, group: 'vocab1', traditional: '網紅', simplified: '网红', pinyin: 'wǎnghóng', wordClass: ['N'], meaningVi: 'người nổi tiếng trên mạng, KOL', meaningEn: 'internet celebrity, influencer', examples: [{ traditional: '一個網紅推薦，東西馬上就賣光。', simplified: '一个网红推荐，东西马上就卖光。', vietnamese: 'Một KOL giới thiệu là hàng lập tức cháy.' }] },
    { id: 'L5-011', lessonId: 'L5', order: 11, group: 'vocab1', traditional: '推薦', simplified: '推荐', pinyin: 'tuījiàn', wordClass: ['V'], meaningVi: 'giới thiệu, đề xuất', meaningEn: 'to recommend', examples: [{ traditional: '找對人推薦，比花大錢打廣告更有效。', simplified: '找对人推荐，比花大钱打广告更有效。', vietnamese: 'Tìm đúng người giới thiệu còn hiệu quả hơn bỏ nhiều tiền chạy quảng cáo.' }] },
    { id: 'L5-012', lessonId: 'L5', order: 12, group: 'vocab1', traditional: '搶', simplified: '抢', pinyin: 'qiǎng', wordClass: ['V'], meaningVi: 'giành, tranh (mua); cướp', meaningEn: 'to snatch, to scramble for', examples: [{ traditional: '越是大家都在搶的東西，她越不想買。', simplified: '越是大家都在抢的东西，她越不想买。', vietnamese: 'Cái gì mọi người càng tranh nhau mua, cô ấy càng không muốn mua.' }] },
    { id: 'L5-013', lessonId: 'L5', order: 13, group: 'vocab1', traditional: '環保', simplified: '环保', pinyin: 'huánbǎo', wordClass: ['Vs-attr', 'N'], meaningVi: 'bảo vệ môi trường; thân thiện môi trường', meaningEn: 'environmental protection; eco-friendly', tags: ['moi-truong'], examples: [{ traditional: '很多人開始自己帶環保杯。', simplified: '很多人开始自己带环保杯。', vietnamese: 'Nhiều người bắt đầu tự mang cốc tái sử dụng.' }] },
    { id: 'L5-014', lessonId: 'L5', order: 14, group: 'vocab1', traditional: '值得', simplified: '值得', pinyin: 'zhídé', wordClass: ['Vst', 'Vaux'], meaningVi: 'đáng, xứng đáng', meaningEn: 'to be worth', examples: [{ traditional: '這個習慣很值得跟。', simplified: '这个习惯很值得跟。', vietnamese: 'Thói quen này rất đáng để theo.' }] },
    { id: 'L5-015', lessonId: 'L5', order: 15, group: 'vocab1', traditional: '重點', simplified: '重点', pinyin: 'zhòngdiǎn', wordClass: ['N'], meaningVi: 'điểm mấu chốt, trọng điểm', meaningEn: 'main point, focus', examples: [{ traditional: '重點是你有沒有想清楚為什麼要跟。', simplified: '重点是你有没有想清楚为什么要跟。', vietnamese: 'Điểm mấu chốt là bạn có nghĩ rõ vì sao mình chạy theo hay không.' }] },
    { id: 'L5-016', lessonId: 'L5', order: 16, group: 'vocab1', traditional: '追', simplified: '追', pinyin: 'zhuī', wordClass: ['V'], meaningVi: 'đuổi theo, chạy theo, theo dõi (phim...)', meaningEn: 'to chase, to follow closely', examples: [{ traditional: '我之所以不追流行，是因為那樣很累。', simplified: '我之所以不追流行，是因为那样很累。', vietnamese: 'Sở dĩ mình không chạy theo mốt là vì như vậy rất mệt.' }] },
    { id: 'L5-017', lessonId: 'L5', order: 17, group: 'vocab1', traditional: '過時', simplified: '过时', pinyin: 'guòshí', wordClass: ['Vs'], meaningVi: 'lỗi thời, lỗi mốt', meaningEn: 'outdated, out of fashion', examples: [{ traditional: '剛買的東西，過幾個月就過時了。', simplified: '刚买的东西，过几个月就过时了。', vietnamese: 'Đồ vừa mua, qua vài tháng là lỗi mốt.' }] },
    { id: 'L5-018', lessonId: 'L5', order: 18, group: 'vocab1', traditional: '年紀', simplified: '年纪', pinyin: 'niánjì', wordClass: ['N'], meaningVi: 'tuổi tác', meaningEn: 'age', examples: [{ traditional: '隨著年紀變大，他越來越不在乎別人的看法。', simplified: '随着年纪变大，他越来越不在乎别人的看法。', vietnamese: 'Cùng với tuổi tác, anh ấy càng ngày càng không bận tâm cách nhìn của người khác.' }] },
    { id: 'L5-019', lessonId: 'L5', order: 19, group: 'vocab1', traditional: '看法', simplified: '看法', pinyin: 'kànfǎ', wordClass: ['N'], meaningVi: 'cách nhìn, quan điểm', meaningEn: 'view, opinion', examples: [{ traditional: '他不太在乎別人的看法。', simplified: '他不太在乎别人的看法。', vietnamese: 'Anh ấy không mấy bận tâm cách nhìn của người khác.' }] },
    { id: 'L5-020', lessonId: 'L5', order: 20, group: 'vocab1', traditional: '風格', simplified: '风格', pinyin: 'fēnggé', wordClass: ['N'], meaningVi: 'phong cách', meaningEn: 'style', examples: [{ traditional: '真正有自己風格的人，反而不太受流行影響。', simplified: '真正有自己风格的人，反而不太受流行影响。', vietnamese: 'Người thật sự có phong cách riêng lại ít bị mốt ảnh hưởng.' }] },
    { id: 'L5-021', lessonId: 'L5', order: 21, group: 'vocab1', traditional: '發現', simplified: '发现', pinyin: 'fāxiàn', wordClass: ['V'], meaningVi: 'phát hiện, nhận ra', meaningEn: 'to discover, to find', examples: [{ traditional: '我發現，真正有風格的人不太跟流行。', simplified: '我发现，真正有风格的人不太跟流行。', vietnamese: 'Mình nhận ra, người thật sự có phong cách không mấy khi chạy theo mốt.' }] },
    { id: 'L5-022', lessonId: 'L5', order: 22, group: 'vocab1', traditional: '趁', simplified: '趁', pinyin: 'chèn', wordClass: ['Prep'], meaningVi: 'nhân lúc, tranh thủ khi', meaningEn: 'to take advantage of (a time/chance)', examples: [{ traditional: '要趁它還沒退流行的時候拍照。', simplified: '要趁它还没退流行的时候拍照。', vietnamese: 'Phải chụp ảnh lúc nó chưa lỗi mốt.' }] },
    { id: 'L5-023', lessonId: 'L5', order: 23, group: 'vocab1', traditional: '化', simplified: '化', pinyin: 'huà', wordClass: ['Vp'], meaningVi: 'tan (chảy), hóa', meaningEn: 'to melt, to dissolve', examples: [{ traditional: '妳快喝吧，冰都要化了。', simplified: '妳快喝吧，冰都要化了。', vietnamese: 'Cậu uống nhanh đi, đá sắp tan hết rồi.' }] },
    { id: 'L5-024', lessonId: 'L5', order: 24, group: 'vocab1', traditional: '顧', simplified: '顾', pinyin: 'gù', wordClass: ['V'], meaningVi: 'lo, mải chú tâm vào; trông nom', meaningEn: 'to attend to, to be preoccupied with', examples: [{ traditional: '光顧著聊天，我都忘了喝。', simplified: '光顾着聊天，我都忘了喝。', vietnamese: 'Mải lo nói chuyện, mình quên cả uống.' }] },
    { id: 'L5-025', lessonId: 'L5', order: 25, group: 'vocab1', traditional: '奶茶', simplified: '奶茶', pinyin: 'nǎichá', wordClass: ['N'], meaningVi: 'trà sữa', meaningEn: 'milk tea', tags: ['am-thuc'], examples: [{ traditional: '一杯奶茶而已，有必要排這麼久嗎？', simplified: '一杯奶茶而已，有必要排这么久吗？', vietnamese: 'Chỉ là một ly trà sữa, có cần xếp hàng lâu vậy không?' }] },
    { id: 'L5-026', lessonId: 'L5', order: 26, group: 'vocab1', traditional: '環保杯', simplified: '环保杯', pinyin: 'huánbǎobēi', wordClass: ['N'], meaningVi: 'cốc tái sử dụng, ly thân thiện môi trường', meaningEn: 'reusable cup', tags: ['moi-truong'], examples: [{ traditional: '自己帶環保杯，很多店還會給折扣。', simplified: '自己带环保杯，很多店还会给折扣。', vietnamese: 'Tự mang cốc tái sử dụng, nhiều quán còn giảm giá.' }] },

    { id: 'L5-027', lessonId: 'L5', order: 1, group: 'vocab2', traditional: '潮流', simplified: '潮流', pinyin: 'cháoliú', wordClass: ['N'], meaningVi: 'trào lưu, xu thế', meaningEn: 'trend, current', examples: [{ traditional: '一個新的潮流，常常幾天之內就傳遍全國。', simplified: '一个新的潮流，常常几天之内就传遍全国。', vietnamese: 'Một trào lưu mới thường chỉ trong vài ngày là lan khắp cả nước.' }] },
    { id: 'L5-028', lessonId: 'L5', order: 2, group: 'vocab2', traditional: '傳播', simplified: '传播', pinyin: 'chuánbò', wordClass: ['V'], meaningVi: 'lan truyền, truyền bá', meaningEn: 'to spread, to disseminate', examples: [{ traditional: '這種傳播的速度，以前很難想像。', simplified: '这种传播的速度，以前很难想象。', vietnamese: 'Tốc độ lan truyền này, trước đây rất khó tưởng tượng.' }] },
    { id: 'L5-029', lessonId: 'L5', order: 3, group: 'vocab2', traditional: '速度', simplified: '速度', pinyin: 'sùdù', wordClass: ['N'], meaningVi: 'tốc độ', meaningEn: 'speed', examples: [{ traditional: '流行傳播的速度越來越快。', simplified: '流行传播的速度越来越快。', vietnamese: 'Tốc độ lan truyền của mốt ngày càng nhanh.' }] },
    { id: 'L5-030', lessonId: 'L5', order: 4, group: 'vocab2', traditional: '跟風', simplified: '跟风', pinyin: 'gēnfēng', wordClass: ['V-sep'], meaningVi: 'chạy theo phong trào, a dua', meaningEn: 'to follow the crowd', examples: [{ traditional: '有人只是為了拍照跟風。', simplified: '有人只是为了拍照跟风。', vietnamese: 'Có người chỉ chạy theo phong trào để chụp ảnh.' }] },
    { id: 'L5-031', lessonId: 'L5', order: 5, group: 'vocab2', traditional: '現象', simplified: '现象', pinyin: 'xiànxiàng', wordClass: ['N'], meaningVi: 'hiện tượng', meaningEn: 'phenomenon', examples: [{ traditional: '一窩蜂消費是一個常見的社會現象。', simplified: '一窝蜂消费是一个常见的社会现象。', vietnamese: 'Tiêu dùng đổ xô là một hiện tượng xã hội thường gặp.' }] },
    { id: 'L5-032', lessonId: 'L5', order: 6, group: 'vocab2', traditional: '消費', simplified: '消费', pinyin: 'xiāofèi', wordClass: ['V', 'N'], meaningVi: 'tiêu dùng; sự tiêu dùng', meaningEn: 'to consume; consumption', tags: ['mua-sam'], examples: [{ traditional: '消費以前先問自己是不是真的需要。', simplified: '消费以前先问自己是不是真的需要。', vietnamese: 'Trước khi tiêu dùng hãy tự hỏi mình có thật sự cần không.' }] },
    { id: 'L5-033', lessonId: 'L5', order: 7, group: 'vocab2', traditional: '廣告', simplified: '广告', pinyin: 'guǎnggào', wordClass: ['N'], meaningVi: 'quảng cáo', meaningEn: 'advertisement', tags: ['mua-sam'], examples: [{ traditional: '找對人推薦，比花大錢打廣告更有效。', simplified: '找对人推荐，比花大钱打广告更有效。', vietnamese: 'Tìm đúng người giới thiệu còn hiệu quả hơn bỏ nhiều tiền chạy quảng cáo.' }] },
    { id: 'L5-034', lessonId: 'L5', order: 8, group: 'vocab2', traditional: '品牌', simplified: '品牌', pinyin: 'pǐnpái', wordClass: ['N'], meaningVi: 'thương hiệu, nhãn hiệu', meaningEn: 'brand', tags: ['mua-sam'], examples: [{ traditional: '一個品牌紅起來，往往只需要很短的時間。', simplified: '一个品牌红起来，往往只需要很短的时间。', vietnamese: 'Một thương hiệu nổi lên thường chỉ cần một khoảng thời gian rất ngắn.' }] },
    { id: 'L5-035', lessonId: 'L5', order: 9, group: 'vocab2', traditional: '帶動', simplified: '带动', pinyin: 'dàidòng', wordClass: ['V'], meaningVi: 'thúc đẩy, kéo theo', meaningEn: 'to drive, to spur', examples: [{ traditional: '一支短影片就可能帶動一整個話題。', simplified: '一支短影片就可能带动一整个话题。', vietnamese: 'Một video ngắn có thể kéo theo cả một chủ đề.' }] },
    { id: 'L5-036', lessonId: 'L5', order: 10, group: 'vocab2', traditional: '話題', simplified: '话题', pinyin: 'huàtí', wordClass: ['N'], meaningVi: 'chủ đề, đề tài (bàn tán)', meaningEn: 'topic (of conversation)', examples: [{ traditional: '這件事最近是大家的話題。', simplified: '这件事最近是大家的话题。', vietnamese: 'Chuyện này dạo gần đây là đề tài của mọi người.' }] },
    { id: 'L5-037', lessonId: 'L5', order: 11, group: 'vocab2', traditional: '一窩蜂', simplified: '一窝蜂', pinyin: 'yìwōfēng', wordClass: ['Adv'], meaningVi: 'ùn ùn, đổ xô (như ong vỡ tổ)', meaningEn: 'in a swarm, like a herd', examples: [{ traditional: '看到大家一窩蜂去買，很多人也跟著買。', simplified: '看到大家一窝蜂去买，很多人也跟着买。', vietnamese: 'Thấy mọi người đổ xô đi mua, nhiều người cũng mua theo.' }] },
    { id: 'L5-038', lessonId: 'L5', order: 12, group: 'vocab2', traditional: '理性', simplified: '理性', pinyin: 'lǐxìng', wordClass: ['Vs', 'N'], meaningVi: 'lý trí; sự lý trí', meaningEn: 'rational; reason', examples: [{ traditional: '消費的時候要多一點理性，少一點衝動。', simplified: '消费的时候要多一点理性，少一点冲动。', vietnamese: 'Khi tiêu dùng cần lý trí hơn một chút, bốc đồng ít đi một chút.' }] },
    { id: 'L5-039', lessonId: 'L5', order: 13, group: 'vocab2', traditional: '判斷', simplified: '判断', pinyin: 'pànduàn', wordClass: ['V', 'N'], meaningVi: 'phán đoán, đánh giá', meaningEn: 'to judge; judgment', examples: [{ traditional: '想清楚自己的需求，再做判斷。', simplified: '想清楚自己的需求，再做判断。', vietnamese: 'Nghĩ rõ nhu cầu của mình, rồi hãy đưa ra phán đoán.' }] },
    { id: 'L5-040', lessonId: 'L5', order: 14, group: 'vocab2', traditional: '需求', simplified: '需求', pinyin: 'xūqiú', wordClass: ['N'], meaningVi: 'nhu cầu', meaningEn: 'need, demand', examples: [{ traditional: '這是不是自己真正的需求？', simplified: '这是不是自己真正的需求？', vietnamese: 'Đây có phải là nhu cầu thật sự của mình không?' }] },
    { id: 'L5-041', lessonId: 'L5', order: 15, group: 'vocab2', traditional: '風潮', simplified: '风潮', pinyin: 'fēngcháo', wordClass: ['N'], meaningVi: 'làn sóng, phong trào', meaningEn: 'wave, craze', examples: [{ traditional: '這幾年台灣掀起了一股運動風潮。', simplified: '这几年台湾掀起了一股运动风潮。', vietnamese: 'Mấy năm nay Đài Loan dấy lên một làn sóng thể thao.' }] },
    { id: 'L5-042', lessonId: 'L5', order: 16, group: 'vocab2', traditional: '逐漸', simplified: '逐渐', pinyin: 'zhújiàn', wordClass: ['Adv'], meaningVi: 'dần dần, từ từ', meaningEn: 'gradually', examples: [{ traditional: '有些風潮逐漸變成了長久的習慣。', simplified: '有些风潮逐渐变成了长久的习惯。', vietnamese: 'Một số phong trào dần trở thành thói quen lâu dài.' }] },
    { id: 'L5-043', lessonId: 'L5', order: 17, group: 'vocab2', traditional: '培養', simplified: '培养', pinyin: 'péiyǎng', wordClass: ['V'], meaningVi: 'bồi dưỡng, nuôi dưỡng (thói quen, năng lực)', meaningEn: 'to cultivate, to develop', examples: [{ traditional: '自己帶環保杯這個習慣很值得培養。', simplified: '自己带环保杯这个习惯很值得培养。', vietnamese: 'Thói quen tự mang cốc tái sử dụng rất đáng để nuôi dưỡng.' }] },
    { id: 'L5-044', lessonId: 'L5', order: 18, group: 'vocab2', traditional: '觀念', simplified: '观念', pinyin: 'guānniàn', wordClass: ['N'], meaningVi: 'quan niệm', meaningEn: 'concept, idea, notion', examples: [{ traditional: '重點是我們有沒有自己的觀念。', simplified: '重点是我们有没有自己的观念。', vietnamese: 'Điểm mấu chốt là chúng ta có quan niệm của riêng mình hay không.' }] },
    { id: 'L5-045', lessonId: 'L5', order: 19, group: 'vocab2', traditional: '影響力', simplified: '影响力', pinyin: 'yǐngxiǎnglì', wordClass: ['N'], meaningVi: 'sức ảnh hưởng', meaningEn: 'influence, clout', examples: [{ traditional: '有些網紅的影響力比電視廣告還大。', simplified: '有些网红的影响力比电视广告还大。', vietnamese: 'Sức ảnh hưởng của một số KOL còn lớn hơn quảng cáo truyền hình.' }] }
  ],

  grammar: [
    {
      id: 'L5-G1', lessonId: 'L5', order: 1, pattern: '越 A 越 B / 越來越…',
      functionVi: 'Mẫu "越 A 越 B" diễn tả B thay đổi theo mức độ tăng của A (A tăng thì B cũng tăng theo). Nếu chỉ có một yếu tố tăng dần theo thời gian, dùng "越來越 + Vs/V".',
      functionEn: '"越 A 越 B" expresses that B changes in step with A: the more A, the more B. For a single quality increasing over time, use "越來越 + Vs/V".',
      examples: [
        { traditional: '這家店越紅，排隊的人就越多。', simplified: '这家店越红，排队的人就越多。', english: 'The more popular this shop gets, the longer the line.', vietnamese: 'Tiệm này càng nổi, người xếp hàng càng đông.' },
        { traditional: '東西越難買，大家越想買。', simplified: '东西越难买，大家越想买。', english: 'The harder something is to get, the more everyone wants it.', vietnamese: 'Đồ càng khó mua, mọi người càng muốn mua.' },
        { traditional: '他年紀越大，越不在乎別人的看法。', simplified: '他年纪越大，越不在乎别人的看法。', english: 'The older he gets, the less he cares what others think.', vietnamese: 'Anh ấy càng lớn tuổi, càng không bận tâm cách nhìn của người khác.' },
        { traditional: '短影片越拍越短，內容也越來越簡單。', simplified: '短影片越拍越短，内容也越来越简单。', english: 'Short videos keep getting shorter, and the content simpler and simpler.', vietnamese: 'Video ngắn quay càng ngày càng ngắn, nội dung cũng ngày càng đơn giản.' },
        { traditional: '我越了解這個流行，越覺得沒有必要跟。', simplified: '我越了解这个流行，越觉得没有必要跟。', english: "The more I understand this trend, the more I feel there's no need to follow it.", vietnamese: 'Tôi càng hiểu về mốt này, càng thấy không cần chạy theo.' }
      ],
      usageNotesVi: '"越來越" chỉ một sự thay đổi tăng dần một chiều theo thời gian; "越 A 越 B" cần hai vế, thể hiện quan hệ tỉ lệ thuận giữa hai yếu tố. Không nói "很越來越".',
      exercises: [
        { id: 'L5-G1-EX1', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個手機遊戲怎麼樣？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['越玩越有意思，我已經玩了一個下午了。'] }], targetPattern: 'L5-G1' },
        { id: 'L5-G1-EX2', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你最近是不是很少上社群了？', textWithBlanks: 'B：對，___。', blanks: [{ index: 0, acceptedAnswers: ['我發現社群看越多，心情越差，所以就少看了。'] }], targetPattern: 'L5-G1' },
        { id: 'L5-G1-EX3', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：天氣好像變了。', textWithBlanks: 'B：對啊，___。', blanks: [{ index: 0, acceptedAnswers: ['越到晚上越冷，你多穿一點。'] }], targetPattern: 'L5-G1' },
        { id: 'L5-G1-EX4', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他中文進步了嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['進步很多，現在越說越流利。'] }], targetPattern: 'L5-G1' },
        { id: 'L5-G1-EX5', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個網紅推薦的東西你要買嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['越是大家都在搶的，我越不想買。'] }], targetPattern: 'L5-G1' }
      ]
    },
    {
      id: 'L5-G2', lessonId: 'L5', order: 2, pattern: '說到…',
      functionVi: '"說到 X" dùng để đưa ra hoặc chuyển sang một chủ đề X mà cuộc trò chuyện vừa nhắc tới, rồi người nói phát biểu ý kiến về X. Thường đứng đầu câu.',
      functionEn: '"說到 X" ("speaking of X / as for X") picks up a topic X just mentioned and leads into the speaker\'s comment on it; it opens the sentence.',
      examples: [
        { traditional: '說到流行，台灣的流行變得特別快。', simplified: '说到流行，台湾的流行变得特别快。', english: 'Speaking of trends, trends in Taiwan change especially fast.', vietnamese: 'Nói đến mốt, mốt ở Đài Loan thay đổi đặc biệt nhanh.' },
        { traditional: '說到網購，我上個月買的東西到現在還沒到。', simplified: '说到网购，我上个月买的东西到现在还没到。', english: "Speaking of online shopping, the thing I bought last month still hasn't arrived.", vietnamese: 'Nói đến mua sắm online, món tôi mua tháng trước đến giờ vẫn chưa tới.' },
        { traditional: '說到他，他最近好像換工作了。', simplified: '说到他，他最近好像换工作了。', english: 'Speaking of him, he seems to have changed jobs recently.', vietnamese: 'Nhắc đến anh ấy, dạo này hình như anh ấy đổi việc rồi.' },
        { traditional: '說到環保，其實從自己帶杯子開始就可以了。', simplified: '说到环保，其实从自己带杯子开始就可以了。', english: 'As for being eco-friendly, you can start just by bringing your own cup.', vietnamese: 'Nói về bảo vệ môi trường, thật ra chỉ cần bắt đầu từ việc tự mang cốc là được.' },
        { traditional: '說到吃的，這附近我最推薦那家牛肉麵。', simplified: '说到吃的，这附近我最推荐那家牛肉面。', english: 'When it comes to food, the beef noodles nearby is what I recommend most.', vietnamese: 'Nói đến chuyện ăn uống, quanh đây tôi giới thiệu nhất là quán mì bò kia.' }
      ],
      usageNotesVi: '"說到" gần với "提到" nhưng "說到" thường dẫn vào nhận xét/bình luận của người nói; "談到、講到" dùng tương tự. Đừng nhầm với "說到做到" (nói được làm được).',
      exercises: [
        { id: 'L5-G2-EX1', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：我最近迷上了拍短影片。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['說到短影片，你有沒有看過那個很紅的做菜頻道？'] }], targetPattern: 'L5-G2' },
        { id: 'L5-G2-EX2', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個週末想做什麼？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['說到週末，我一直想去那家新開的書店看看。'] }], targetPattern: 'L5-G2' },
        { id: 'L5-G2-EX3', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼對咖啡這麼了解？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['說到咖啡，我以前在咖啡店打過兩年工。'] }], targetPattern: 'L5-G2' },
        { id: 'L5-G2-EX4', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說物價又漲了。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['說到物價，我覺得影響最大的還是租金。'] }], targetPattern: 'L5-G2' },
        { id: 'L5-G2-EX5', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小林這個人很有想法。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['說到小林，他上次的報告真的讓大家很佩服。'] }], targetPattern: 'L5-G2' }
      ]
    },
    {
      id: 'L5-G3', lessonId: 'L5', order: 3, pattern: '動不動就…',
      functionVi: '"動不動就 + V" chê trách rằng một hành động hoặc tình huống (thường không mong muốn) xảy ra quá thường xuyên, chỉ cần một lý do nhỏ là xảy ra.',
      functionEn: '"動不動就 + V" complains that something (usually undesirable) happens far too often, at the slightest excuse.',
      examples: [
        { traditional: '這種便宜的耳機，動不動就壞。', simplified: '这种便宜的耳机，动不动就坏。', english: 'Cheap earphones like these break all the time.', vietnamese: 'Loại tai nghe rẻ này động một tí là hỏng.' },
        { traditional: '他動不動就換手機，其實舊的還能用。', simplified: '他动不动就换手机，其实旧的还能用。', english: 'He changes phones at the drop of a hat; the old one still works.', vietnamese: 'Anh ấy động tí là đổi điện thoại, thật ra cái cũ vẫn dùng được.' },
        { traditional: '現在的人動不動就上網罵人。', simplified: '现在的人动不动就上网骂人。', english: 'People nowadays go online to bash others over nothing.', vietnamese: 'Người bây giờ động một tí là lên mạng chửi người khác.' },
        { traditional: '網路動不動就斷，我沒辦法好好上課。', simplified: '网络动不动就断，我没办法好好上课。', english: "The internet keeps dropping; I can't attend class properly.", vietnamese: 'Mạng động tí là rớt, tôi chẳng học hành gì được.' },
        { traditional: '你別動不動就說要放棄。', simplified: '你别动不动就说要放弃。', english: 'Stop saying you want to give up at every little thing.', vietnamese: 'Cậu đừng động một tí là đòi bỏ cuộc.' }
      ],
      usageNotesVi: '"動不動就" luôn mang sắc thái phàn nàn, chê trách. Khác với "常常" (chỉ tần suất, trung tính), "動不動就" nhấn mạnh rằng việc đó xảy ra vì lý do quá nhỏ nhặt.',
      exercises: [
        { id: 'L5-G3-EX1', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼不用那個 app 了？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['它動不動就當機，用起來太麻煩了。'] }], targetPattern: 'L5-G3' },
        { id: 'L5-G3-EX2', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你弟弟很愛哭嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對啊，動不動就哭，一點小事也受不了。'] }], targetPattern: 'L5-G3' },
        { id: 'L5-G3-EX3', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個牌子的衣服你還會買嗎？', textWithBlanks: 'B：不會了，___。', blanks: [{ index: 0, acceptedAnswers: ['洗一次就變形，動不動就破。'] }], targetPattern: 'L5-G3' },
        { id: 'L5-G3-EX4', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他為什麼常常請假？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['他身體不太好，動不動就感冒。'] }], targetPattern: 'L5-G3' },
        { id: 'L5-G3-EX5', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你們老闆好相處嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不太好，他動不動就生氣，大家都很緊張。'] }], targetPattern: 'L5-G3' }
      ]
    },
    {
      id: 'L5-G4', lessonId: 'L5', order: 4, pattern: '跟…有關（係）',
      functionVi: '"A 跟 B 有關（係）" nghĩa là A và B có liên quan với nhau; dạng phủ định "A 跟 B 沒（有）關係". Có thể nói "跟 B 有很大的關係" (liên quan mật thiết).',
      functionEn: '"A 跟 B 有關（係）" means A is related to B; negative "A 跟 B 沒（有）關係". "跟 B 有很大的關係" = closely related to B.',
      examples: [
        { traditional: '流行傳得這麼快，跟社群媒體有很大的關係。', simplified: '流行传得这么快，跟社群媒体有很大的关系。', english: 'Trends spread so fast because of social media.', vietnamese: 'Mốt lan nhanh thế này liên quan lớn đến mạng xã hội.' },
        { traditional: '他睡不好，可能跟壓力太大有關。', simplified: '他睡不好，可能跟压力太大有关。', english: 'His poor sleep may be related to too much stress.', vietnamese: 'Anh ấy ngủ không ngon, có thể liên quan đến áp lực quá lớn.' },
        { traditional: '這件事跟你沒有關係，你別擔心。', simplified: '这件事跟你没有关系，你别担心。', english: "This has nothing to do with you; don't worry.", vietnamese: 'Việc này không liên quan gì đến cậu, đừng lo.' },
        { traditional: '一個地方的飲食習慣，常常跟氣候有關。', simplified: '一个地方的饮食习惯，常常跟气候有关。', english: "A region's eating habits are often tied to its climate.", vietnamese: 'Thói quen ăn uống của một nơi thường liên quan đến khí hậu.' },
        { traditional: '他成功跟他肯努力有很大的關係。', simplified: '他成功跟他肯努力有很大的关系。', english: 'His success has a lot to do with his willingness to work hard.', vietnamese: 'Thành công của anh ấy liên quan nhiều đến việc anh ấy chịu cố gắng.' }
      ],
      usageNotesVi: '"有關" có thể làm định ngữ: "跟環保有關的新聞" (tin liên quan đến môi trường). "跟…沒關係" còn dùng để đáp lại lời xin lỗi hoặc cảm ơn với nghĩa "không sao".',
      exercises: [
        { id: 'L5-G4-EX1', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你為什麼突然對做菜有興趣了？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這跟我最近看的一個短影片頻道有關。'] }], targetPattern: 'L5-G4' },
        { id: 'L5-G4-EX2', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他的中文怎麼進步得這麼快？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['跟他交了一個台灣女朋友有很大的關係。'] }], targetPattern: 'L5-G4' },
        { id: 'L5-G4-EX3', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這次考壞了，是不是我不夠聰明？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這跟聰不聰明沒關係，是你準備的時間太少了。'] }], targetPattern: 'L5-G4' },
        { id: 'L5-G4-EX4', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：最近大家都在討論這個話題。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['因為它跟每個人的生活都有關係。'] }], targetPattern: 'L5-G4' },
        { id: 'L5-G4-EX5', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼知道這麼多歷史？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我大學念的科系就跟歷史有關。'] }], targetPattern: 'L5-G4' }
      ]
    },
    {
      id: 'L5-G5', lessonId: 'L5', order: 5, pattern: '並不 / 並沒（有）…',
      functionVi: '"並" đặt trước 不 / 沒（有）để nhấn mạnh sự phủ định, thường dùng để bác lại một suy nghĩ hoặc kỳ vọng mà người nghe (hay số đông) có sẵn.',
      functionEn: '"並" before 不 / 沒（有）strengthens the negation, typically to refute an assumption the listener (or people in general) hold.',
      examples: [
        { traditional: '流行的東西並不一定適合每個人。', simplified: '流行的东西并不一定适合每个人。', english: "What's trendy isn't necessarily right for everyone.", vietnamese: 'Đồ đang mốt chưa chắc hợp với mọi người.' },
        { traditional: '我並沒有說你錯，只是想聽聽別的看法。', simplified: '我并没有说你错，只是想听听别的看法。', english: "I didn't say you were wrong; I just wanted to hear other views.", vietnamese: 'Tôi đâu có nói cậu sai, chỉ muốn nghe thêm ý kiến khác thôi.' },
        { traditional: '這家餐廳雖然很紅，可是東西並不好吃。', simplified: '这家餐厅虽然很红，可是东西并不好吃。', english: "This restaurant is popular, but the food really isn't good.", vietnamese: 'Quán này tuy rất nổi, nhưng đồ ăn thật ra không ngon.' },
        { traditional: '他看起來很兇，其實人並不壞。', simplified: '他看起来很凶，其实人并不坏。', english: "He looks fierce, but he's actually not a bad person.", vietnamese: 'Anh ấy trông dữ, thật ra người không xấu.' },
        { traditional: '東西貴並不表示品質就一定好。', simplified: '东西贵并不表示品质就一定好。', english: "Expensive doesn't necessarily mean good quality.", vietnamese: 'Đắt tiền không có nghĩa là chất lượng chắc chắn tốt.' }
      ],
      usageNotesVi: '"並" chỉ dùng trước phủ định (不 / 沒 / 未 / 非), không dùng trước khẳng định. Nó thêm sắc thái "trái với điều (bạn) nghĩ". So với 不 đơn thuần, "並不" mang tính phản bác rõ hơn.',
      exercises: [
        { id: 'L5-G5-EX1', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你一定很喜歡這個網紅吧？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['其實我並不特別喜歡，只是常常看到而已。'] }], targetPattern: 'L5-G5' },
        { id: 'L5-G5-EX2', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說那個科系很好念。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['並沒有大家想的那麼輕鬆，作業很多。'] }], targetPattern: 'L5-G5' },
        { id: 'L5-G5-EX3', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你搬到市中心，生活一定方便多了。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['方便是方便，可是我並不覺得比較快樂。'] }], targetPattern: 'L5-G5' },
        { id: 'L5-G5-EX4', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這麼多人買，應該很好用吧？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我用過，並沒有廣告說的那麼神奇。'] }], targetPattern: 'L5-G5' },
        { id: 'L5-G5-EX5', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你是不是在生我的氣？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我並沒有生氣，只是有點累。'] }], targetPattern: 'L5-G5' }
      ]
    },
    {
      id: 'L5-G6', lessonId: 'L5', order: 6, pattern: '之所以…，是因為…',
      functionVi: 'Mẫu "A 之所以 B，是因為 C" đưa kết quả hoặc hiện tượng B lên trước, rồi mới giải thích nguyên nhân C. Dùng khi kết quả đã được biết và người nói muốn nhấn mạnh phần lý do.',
      functionEn: '"A 之所以 B, 是因為 C" fronts the result B and then gives the reason C; used when the result is already known and the speaker wants to stress the cause.',
      examples: [
        { traditional: '我之所以不追流行，是因為覺得那樣太累了。', simplified: '我之所以不追流行，是因为觉得那样太累了。', english: "The reason I don't chase trends is that it's exhausting.", vietnamese: 'Sở dĩ tôi không chạy theo mốt là vì thấy như vậy quá mệt.' },
        { traditional: '這杯飲料之所以這麼紅，是因為很多網紅推薦過。', simplified: '这杯饮料之所以这么红，是因为很多网红推荐过。', english: 'This drink got so popular because many influencers recommended it.', vietnamese: 'Sở dĩ ly nước này nổi như vậy là vì nhiều KOL đã giới thiệu.' },
        { traditional: '他之所以沒來，是因為臨時有事。', simplified: '他之所以没来，是因为临时有事。', english: 'He didn\'t come because something came up.', vietnamese: 'Sở dĩ anh ấy không đến là vì có việc đột xuất.' },
        { traditional: '我之所以選這個科系，是因為將來的工作機會比較多。', simplified: '我之所以选这个科系，是因为将来的工作机会比较多。', english: 'I chose this major because it offers more job opportunities.', vietnamese: 'Sở dĩ tôi chọn ngành này là vì cơ hội việc làm sau này nhiều hơn.' },
        { traditional: '台灣的夜市之所以有名，是因為又便宜又熱鬧。', simplified: '台湾的夜市之所以有名，是因为又便宜又热闹。', english: "Taiwan's night markets are famous because they're cheap and lively.", vietnamese: 'Sở dĩ chợ đêm Đài Loan nổi tiếng là vì vừa rẻ vừa náo nhiệt.' }
      ],
      usageNotesVi: 'Vế "是因為" không thể lược bỏ chữ "是" trong văn viết trang trọng. So với "因為…所以…" (nêu nguyên nhân trước), "之所以…是因為…" nêu kết quả trước, thích hợp khi kết quả là điều đôi bên đã biết.',
      exercises: [
        { id: 'L5-G6-EX1', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼突然開始運動了？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我之所以開始運動，是因為健康檢查的結果不太好。'] }], targetPattern: 'L5-G6' },
        { id: 'L5-G6-EX2', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這本書為什麼賣得這麼好？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['它之所以賣得好，是因為改編成電視劇了。'] }], targetPattern: 'L5-G6' },
        { id: 'L5-G6-EX3', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你為什麼不用信用卡？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我之所以只用現金，是因為這樣比較能控制花費。'] }], targetPattern: 'L5-G6' },
        { id: 'L5-G6-EX4', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他們公司為什麼決定搬到南部？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['之所以搬到南部，是因為那裡的租金和人力都比較便宜。'] }], targetPattern: 'L5-G6' },
        { id: 'L5-G6-EX5', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼對這個城市這麼熟？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我之所以這麼熟，是因為我在這裡住了快十年了。'] }], targetPattern: 'L5-G6' }
      ]
    },
    {
      id: 'L5-G7', lessonId: 'L5', order: 7, pattern: '隨著…',
      functionVi: '"隨著 A，B" diễn tả B thay đổi hoặc phát triển cùng với sự thay đổi của A. A thường là một quá trình hoặc yếu tố biến đổi theo thời gian.',
      functionEn: '"隨著 A, B" expresses that B changes or develops along with A; A is usually a process or factor that changes over time.',
      examples: [
        { traditional: '隨著社群媒體越來越發達，流行傳播的速度也越來越快。', simplified: '随着社群媒体越来越发达，流行传播的速度也越来越快。', english: 'As social media grows, trends spread faster and faster.', vietnamese: 'Cùng với sự phát triển của mạng xã hội, tốc độ lan truyền của mốt cũng ngày càng nhanh.' },
        { traditional: '隨著年紀變大，他慢慢不那麼在乎別人的看法了。', simplified: '随着年纪变大，他慢慢不那么在乎别人的看法了。', english: "As he got older, he gradually stopped caring so much about others' opinions.", vietnamese: 'Cùng với tuổi tác, anh ấy dần không còn bận tâm cách nhìn của người khác.' },
        { traditional: '隨著天氣變冷，來這家火鍋店的人多了起來。', simplified: '随着天气变冷，来这家火锅店的人多了起来。', english: 'As the weather turned cold, more people came to this hotpot place.', vietnamese: 'Trời càng lạnh, khách đến quán lẩu này càng đông.' },
        { traditional: '隨著網購越來越方便，逛街的人越來越少了。', simplified: '随着网购越来越方便，逛街的人越来越少了。', english: 'As online shopping got more convenient, fewer people go to the shops.', vietnamese: 'Mua sắm online càng tiện, người đi dạo phố càng ít.' },
        { traditional: '隨著時間過去，這件事大家慢慢就忘了。', simplified: '随着时间过去，这件事大家慢慢就忘了。', english: 'As time passed, people gradually forgot about it.', vietnamese: 'Thời gian trôi qua, dần dần mọi người quên chuyện đó.' }
      ],
      usageNotesVi: '"隨著" mang tính văn viết hơn "跟著". Sau "隨著" thường là danh từ hoặc cụm chủ-vị chỉ quá trình biến đổi (…的發展、…的增加、…變大). Vế B thường có "也 / 就" và các từ như "慢慢、逐漸".',
      exercises: [
        { id: 'L5-G7-EX1', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你們鄉下這幾年變化大嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['隨著高鐵通車，來玩的人越來越多了。'] }], targetPattern: 'L5-G7' },
        { id: 'L5-G7-EX2', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：現在的小孩跟以前很不一樣。', textWithBlanks: 'B：對，___。', blanks: [{ index: 0, acceptedAnswers: ['隨著網路越來越普遍，他們得到資訊的方式完全不同了。'] }], targetPattern: 'L5-G7' },
        { id: 'L5-G7-EX3', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他的想法怎麼變了這麼多？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['隨著出國念書的經驗，他看事情的角度也改變了。'] }], targetPattern: 'L5-G7' },
        { id: 'L5-G7-EX4', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個地區的房子怎麼越來越貴？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['隨著捷運站蓋好，附近的房價就一直漲。'] }], targetPattern: 'L5-G7' },
        { id: 'L5-G7-EX5', lessonId: 'L5', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你對這份工作還有熱情嗎？', textWithBlanks: 'B：說實話，___。', blanks: [{ index: 0, acceptedAnswers: ['隨著時間過去，我的熱情的確少了一些。'] }], targetPattern: 'L5-G7' }
      ]
    }
  ],

  workbookExercises: [
    {
      id: 'L5-WB-match-collocation', lessonId: 'L5', section: 'pairs', type: 'matching',
      prompt: 'Ghép danh từ với vị ngữ thường đi cùng (collocation).',
      pairs: [
        { left: '流行', right: '退 (hết mốt)' },
        { left: '隊', right: '排 (xếp hàng)' },
        { left: '照片', right: '拍 (chụp)' },
        { left: '網紅', right: '推薦 (giới thiệu)' },
        { left: '習慣', right: '培養 (nuôi dưỡng)' },
        { left: '影響力', right: '大 (lớn)' }
      ]
    },
    {
      id: 'L5-WB-match-response', lessonId: 'L5', section: 'pairs', type: 'matching',
      prompt: 'Nối mỗi tình huống (cột trái) với cách phản ứng phù hợp (cột phải).',
      pairs: [
        { left: '想跟上最新的流行', right: '多看社群和短影片' },
        { left: '不想一窩蜂跟風', right: '先想清楚自己要不要' },
        { left: '東西快退流行了', right: '趕快拍張照片' },
        { left: '想養成環保習慣', right: '自己帶環保杯' },
        { left: '網紅推薦的東西賣光了', right: '等下一批貨或找別家' },
        { left: '朋友一直勸你買', right: '謝謝他，但按自己的需求決定' }
      ]
    },

    { id: 'L5-WB-fw-1', lessonId: 'L5', section: 'fill-write', type: 'fill-blank', textWithBlanks: '這家店最近超紅，門口每天都有人___(páiduì)，很多人只是為了___(pāizhào)。', blanks: [{ index: 0, acceptedAnswers: ['排隊'] }, { index: 1, acceptedAnswers: ['拍照'] }] },
    { id: 'L5-WB-fw-2', lessonId: 'L5', section: 'fill-write', type: 'fill-blank', textWithBlanks: '一個___(wǎnghóng)___(tuījiàn)，那個牌子的鞋子馬上就賣光了。', blanks: [{ index: 0, acceptedAnswers: ['網紅'] }, { index: 1, acceptedAnswers: ['推薦'] }] },
    { id: 'L5-WB-fw-3', lessonId: 'L5', section: 'fill-write', type: 'fill-blank', textWithBlanks: '買東西之前應該想清楚自己的___(xūqiú)，不要看到大家在___(qiǎng)就跟著買。', blanks: [{ index: 0, acceptedAnswers: ['需求'] }, { index: 1, acceptedAnswers: ['搶'] }] },
    { id: 'L5-WB-fw-4', lessonId: 'L5', section: 'fill-write', type: 'fill-blank', textWithBlanks: '自己帶___(huánbǎobēi)這個習慣很值得___(péiyǎng)。', blanks: [{ index: 0, acceptedAnswers: ['環保杯'] }, { index: 1, acceptedAnswers: ['培養'] }] },
    { id: 'L5-WB-fw-5', lessonId: 'L5', section: 'fill-write', type: 'fill-blank', textWithBlanks: '流行的東西過幾個月常常就___(guòshí)了，所以他從來不___(zhuī)流行。', blanks: [{ index: 0, acceptedAnswers: ['過時'] }, { index: 1, acceptedAnswers: ['追'] }] },
    { id: 'L5-WB-fw-6', lessonId: 'L5', section: 'fill-write', type: 'fill-blank', textWithBlanks: '隨著社群___(méitǐ)越來越發達，一個___(huàtí)可以在一天之內傳遍全國。', blanks: [{ index: 0, acceptedAnswers: ['媒體'] }, { index: 1, acceptedAnswers: ['話題'] }] },

    {
      id: 'L5-WB-fb-1', lessonId: 'L5', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền từ thích hợp vào đoạn văn (mỗi từ chỉ dùng 1 lần).',
      wordBank: ['潮流', '一窩蜂', '理性', '判斷', '需求', '影響'],
      textWithBlanks: '現在資訊傳得很快，只要一個東西紅了，大家就1.___地去買。這種跟著2.___走的習慣，其實不一定對自己有好處。買東西以前，我們應該先想想這是不是自己真正的3.___，再做4.___。廣告和網紅的話多少會有一點5.___，可是最後決定的還是自己。多一點6.___，少一點衝動，才不會買了一堆用不到的東西。',
      blanks: [
        { index: 1, acceptedAnswers: ['一窩蜂'] },
        { index: 2, acceptedAnswers: ['潮流'] },
        { index: 3, acceptedAnswers: ['需求'] },
        { index: 4, acceptedAnswers: ['判斷'] },
        { index: 5, acceptedAnswers: ['影響'] },
        { index: 6, acceptedAnswers: ['理性'] }
      ]
    },

    {
      id: 'L5-WB-read-a1', lessonId: 'L5', section: 'reading', type: 'multiple-choice',
      prompt: '小美：你也買了那個限量的杯子？\n阿明：沒有。我本來想買，可是想一想，我家已經有五六個杯子了，就算再好看也用不完。',
      question: '阿明最後為什麼沒買？',
      options: [{ id: 'a', text: '那個杯子已經賣光了。' }, { id: 'b', text: '他覺得家裡的杯子夠用了。' }, { id: 'c', text: '他不喜歡那個顏色。' }],
      correctOptionId: 'b',
      explanationVi: '"我家已經有五六個杯子…用不完" nghĩa là anh ấy thấy cốc ở nhà đã đủ dùng.'
    },
    {
      id: 'L5-WB-read-a2', lessonId: 'L5', section: 'reading', type: 'multiple-choice',
      prompt: '玉真：這件外套上個月還很流行，怎麼現在打對折了？\n店員：流行過得很快，這一季大家又開始穿別的款式了。',
      question: '這件外套為什麼降價？',
      options: [{ id: 'a', text: '品質有問題。' }, { id: 'b', text: '已經退流行了。' }, { id: 'c', text: '店要關門了。' }],
      correctOptionId: 'b',
      explanationVi: '"流行過得很快…開始穿別的款式" cho thấy áo đã lỗi mốt.'
    },
    {
      id: 'L5-WB-read-a3', lessonId: 'L5', section: 'reading', type: 'multiple-choice',
      prompt: '高橋：你怎麼知道這家店的？我以為只有我知道。\n安同：拜託，這家店的短影片在社群上有好幾萬個讚，現在誰不知道。',
      question: '安同的意思是：',
      options: [{ id: 'a', text: '這家店其實沒什麼人知道。' }, { id: 'b', text: '這家店因為社群已經很有名了。' }, { id: 'c', text: '他也是剛剛才知道這家店。' }],
      correctOptionId: 'b',
      explanationVi: '"短影片…好幾萬個讚，現在誰不知道" nghĩa là nhờ mạng xã hội quán đã rất nổi.'
    },

    {
      id: 'L5-WB-read-b1', lessonId: 'L5', section: 'reading', type: 'multiple-choice',
      prompt: '這幾年，台灣掀起了一股運動風潮。走在路上，常常看得到揹著瑜伽墊的人；很多公司也開始為員工辦運動課。這股風潮一開始也是從社群媒體來的：一些網紅分享自己運動的照片和影片，讓運動看起來很酷。剛開始，有人只是為了拍照跟風，可是運動一段時間以後，不少人真的養成了習慣，就算沒有人看，也繼續做下去。專家說，流行本身沒有好壞，重點是它有沒有帶動一個對大家有好處的改變。運動風潮就是一個例子：它從一個看起來很表面的流行，慢慢變成了一種生活方式。',
      question: '這股運動風潮一開始是從電視廣告來的。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"這股風潮一開始也是從社群媒體來的".'
    },
    {
      id: 'L5-WB-read-b2', lessonId: 'L5', section: 'reading', type: 'multiple-choice',
      prompt: '這幾年，台灣掀起了一股運動風潮。走在路上，常常看得到揹著瑜伽墊的人；很多公司也開始為員工辦運動課。這股風潮一開始也是從社群媒體來的：一些網紅分享自己運動的照片和影片，讓運動看起來很酷。剛開始，有人只是為了拍照跟風，可是運動一段時間以後，不少人真的養成了習慣，就算沒有人看，也繼續做下去。專家說，流行本身沒有好壞，重點是它有沒有帶動一個對大家有好處的改變。運動風潮就是一個例子：它從一個看起來很表面的流行，慢慢變成了一種生活方式。',
      question: '有些人一開始運動只是為了拍照。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"有人只是為了拍照跟風".'
    },
    {
      id: 'L5-WB-read-b3', lessonId: 'L5', section: 'reading', type: 'multiple-choice',
      prompt: '這幾年，台灣掀起了一股運動風潮。走在路上，常常看得到揹著瑜伽墊的人；很多公司也開始為員工辦運動課。這股風潮一開始也是從社群媒體來的：一些網紅分享自己運動的照片和影片，讓運動看起來很酷。剛開始，有人只是為了拍照跟風，可是運動一段時間以後，不少人真的養成了習慣，就算沒有人看，也繼續做下去。專家說，流行本身沒有好壞，重點是它有沒有帶動一個對大家有好處的改變。運動風潮就是一個例子：它從一個看起來很表面的流行，慢慢變成了一種生活方式。',
      question: '專家認為所有的流行都是不好的。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"流行本身沒有好壞".'
    },
    {
      id: 'L5-WB-read-b4', lessonId: 'L5', section: 'reading', type: 'multiple-choice',
      prompt: '這幾年，台灣掀起了一股運動風潮。走在路上，常常看得到揹著瑜伽墊的人；很多公司也開始為員工辦運動課。這股風潮一開始也是從社群媒體來的：一些網紅分享自己運動的照片和影片，讓運動看起來很酷。剛開始，有人只是為了拍照跟風，可是運動一段時間以後，不少人真的養成了習慣，就算沒有人看，也繼續做下去。專家說，流行本身沒有好壞，重點是它有沒有帶動一個對大家有好處的改變。運動風潮就是一個例子：它從一個看起來很表面的流行，慢慢變成了一種生活方式。',
      question: '有些人後來就算沒有人看，也繼續運動。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"就算沒有人看，也繼續做下去".'
    },
    {
      id: 'L5-WB-read-b5', lessonId: 'L5', section: 'reading', type: 'multiple-choice',
      prompt: '這幾年，台灣掀起了一股運動風潮。走在路上，常常看得到揹著瑜伽墊的人；很多公司也開始為員工辦運動課。這股風潮一開始也是從社群媒體來的：一些網紅分享自己運動的照片和影片，讓運動看起來很酷。剛開始，有人只是為了拍照跟風，可是運動一段時間以後，不少人真的養成了習慣，就算沒有人看，也繼續做下去。專家說，流行本身沒有好壞，重點是它有沒有帶動一個對大家有好處的改變。運動風潮就是一個例子：它從一個看起來很表面的流行，慢慢變成了一種生活方式。',
      question: '作者認為運動風潮最後變成了一種生活方式。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"慢慢變成了一種生活方式".'
    },

    {
      id: 'L5-WB-read-c1', lessonId: 'L5', section: 'reading', type: 'multiple-choice',
      prompt: '【動起來 App】還在為了跟上流行而運動嗎？我們希望你為了自己。下載「動起來」，每天只要十五分鐘，在家就能練。前一個月免費，不滿意隨時取消。現在加入，還能參加線上社團，跟幾萬個一起努力的人互相加油。健康不是一時的流行，是一輩子的習慣。',
      question: '這個 App 主要希望使用者為了什麼運動？',
      options: [{ id: 'a', text: '為了跟上流行。' }, { id: 'b', text: '為了自己的健康。' }, { id: 'c', text: '為了拍照放上社群。' }],
      correctOptionId: 'b',
      explanationVi: '"我們希望你為了自己" và "健康不是一時的流行，是一輩子的習慣".'
    },
    {
      id: 'L5-WB-read-c2', lessonId: 'L5', section: 'reading', type: 'multiple-choice',
      prompt: '【動起來 App】還在為了跟上流行而運動嗎？我們希望你為了自己。下載「動起來」，每天只要十五分鐘，在家就能練。前一個月免費，不滿意隨時取消。現在加入，還能參加線上社團，跟幾萬個一起努力的人互相加油。健康不是一時的流行，是一輩子的習慣。',
      question: '關於這個 App，下面哪個正確？',
      options: [{ id: 'a', text: '一定要到健身房才能用。' }, { id: 'b', text: '前一個月不用付錢，可以隨時取消。' }, { id: 'c', text: '只能一個人使用，沒有社團功能。' }],
      correctOptionId: 'b',
      explanationVi: '"前一個月免費，不滿意隨時取消" + "參加線上社團".'
    },

    { id: 'L5-WB-dc-1', lessonId: 'L5', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L5-G1', turns: [{ speaker: 'A', text: '這個遊戲你不是說很無聊嗎？', isBlank: false }, { speaker: 'B', text: '（越…越…）', isBlank: true }], sampleAnswer: '一開始覺得無聊，可是越玩越有意思，停不下來。' },
    { id: 'L5-WB-dc-2', lessonId: 'L5', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L5-G6', turns: [{ speaker: 'A', text: '你怎麼都不跟流行？', isBlank: false }, { speaker: 'B', text: '（之所以…是因為…）', isBlank: true }], sampleAnswer: '我之所以不跟流行，是因為東西買回來沒多久就退流行了，太浪費。' },
    { id: 'L5-WB-dc-3', lessonId: 'L5', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L5-G3', turns: [{ speaker: 'A', text: '你的舊手機呢？怎麼又換了？', isBlank: false }, { speaker: 'B', text: '（動不動就）', isBlank: true }], sampleAnswer: '別提了，那支動不動就當機，我實在受不了才換的。' },
    { id: 'L5-WB-dc-4', lessonId: 'L5', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L5-G7', turns: [{ speaker: 'A', text: '你們鄉下這幾年觀光客變多了嗎？', isBlank: false }, { speaker: 'B', text: '（隨著）', isBlank: true }], sampleAnswer: '隨著社群上分享的人變多，週末來拍照的觀光客越來越多。' },
    { id: 'L5-WB-dc-5', lessonId: 'L5', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L5-G5', turns: [{ speaker: 'A', text: '這家餐廳這麼多人排隊，一定很好吃吧？', isBlank: false }, { speaker: 'B', text: '（並不 / 並沒有）', isBlank: true }], sampleAnswer: '我上次吃過，並沒有想像中好吃，可能大家只是為了拍照。' },

    {
      id: 'L5-WB-comp-1', lessonId: 'L5', section: 'composition', type: 'composition',
      topicVi: 'Hãy viết về một "mốt" (流行) mà bạn từng chạy theo hoặc cố tình không chạy theo. Đó là gì, vì sao bạn quyết định như vậy, và bây giờ nhìn lại bạn nghĩ sao?',
      requiredWords: ['L5-001', 'L5-016', 'L5-019', 'L5-020', 'L5-014', 'L5-021', 'L5-006', 'L5-030'],
      requiredPatterns: ['L5-G1', 'L5-G5', 'L5-G6'],
      minLength: 200, maxLength: 250
    },
    {
      id: 'L5-WB-comp-2', lessonId: 'L5', section: 'composition', type: 'composition',
      topicVi: 'Có người nói mạng xã hội khiến mốt lan quá nhanh và khiến người ta mua sắm thiếu suy nghĩ. Bạn đồng ý hay không? Vì sao?',
      requiredWords: ['L5-003', 'L5-009', 'L5-010', 'L5-028', 'L5-032', 'L5-037', 'L5-038', 'L5-040'],
      requiredPatterns: ['L5-G3', 'L5-G4', 'L5-G7'],
      minLength: 200, maxLength: 250
    }
  ]
}
