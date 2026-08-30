import type { Lesson } from '../../../types/lesson'

export const lesson12: Lesson = {
  id: 'L12',
  number: 12,
  titleTraditional: '我要去投票',
  titleSimplified: '我要去投票',
  titlePinyin: 'Wǒ yào qù tóupiào',
  titleVi: 'Tôi sẽ đi bỏ phiếu',
  status: 'available',

  dialogues: [
    [
      { speaker: '', traditional: '（在陳敏萱家看電視，螢幕上在報選舉新聞）', simplified: '（在陈敏萱家看电视，萤幕上在报选举新闻）', pinyin: '(Zài Chén Mǐnxuān jiā kàn diànshì, yíngmù shàng zài bào xuǎnjǔ xīnwén)', english: '(Watching TV at Chen Minxuan\'s home, election news on screen)', vietnamese: '(Xem tivi ở nhà Trần Mẫn Huyên, trên màn hình đang đưa tin bầu cử)' },
      { speaker: '羅珊蒂', traditional: '這幾天路上到處都是旗子和廣播車，好熱鬧。', simplified: '这几天路上到处都是旗子和广播车，好热闹。', pinyin: 'Zhè jǐ tiān lù shàng dàochù dōu shì qízi hé guǎngbò chē, hǎo rènào.', english: "These days the streets are full of flags and loudspeaker vans—so lively.", vietnamese: 'Mấy ngày nay trên đường đâu đâu cũng cờ và xe phát thanh, náo nhiệt thật.' },
      { speaker: '陳敏萱', traditional: '對啊，星期六就要投票了。這是我第一次能投，剛滿二十歲。', simplified: '对啊，星期六就要投票了。这是我第一次能投，刚满二十岁。', pinyin: 'Duì a, xīngqíliù jiù yào tóupiào le. Zhè shì wǒ dì-yī cì néng tóu, gāng mǎn èrshí suì.', english: "Yeah, we vote on Saturday. It's my first time able to vote—I just turned twenty.", vietnamese: 'Ừ, thứ Bảy là bỏ phiếu rồi. Đây là lần đầu tiên mình được bỏ, vừa đủ hai mươi tuổi.' },
      { speaker: '安德思', traditional: '在你們這裡，凡是滿二十歲的公民都可以投票嗎？', simplified: '在你们这里，凡是满二十岁的公民都可以投票吗？', pinyin: 'Zài nǐmen zhèlǐ, fánshì mǎn èrshí suì de gōngmín dōu kěyǐ tóupiào ma?', english: "Here, can any citizen who's turned twenty vote?", vietnamese: 'Ở chỗ các cậu, hễ là công dân đủ hai mươi tuổi đều được bỏ phiếu à?' },
      { speaker: '陳敏萱', traditional: '對，凡是有身分證、年滿二十歲的人都有投票權。這次除了選人，還有幾個公投的題目。', simplified: '对，凡是有身分证、年满二十岁的人都有投票权。这次除了选人，还有几个公投的题目。', pinyin: 'Duì, fánshì yǒu shēnfènzhèng, nián mǎn èrshí suì de rén dōu yǒu tóupiàoquán. Zhè cì chúle xuǎn rén, hái yǒu jǐ ge gōngtóu de tímù.', english: "Right, anyone with an ID card who's at least twenty has the right to vote. This time, besides electing people, there are also a few referendum questions.", vietnamese: 'Đúng, hễ là người có chứng minh thư, đủ hai mươi tuổi đều có quyền bỏ phiếu. Lần này ngoài bầu người, còn có vài câu hỏi trưng cầu dân ý.' },
      { speaker: '高橋健太', traditional: '就制度而言，台灣的選舉算是相當公開的。開票的時候，一票一票唱出來，大家都看得到。', simplified: '就制度而言，台湾的选举算是相当公开的。开票的时候，一票一票唱出来，大家都看得到。', pinyin: 'Jiù zhìdù ér yán, Táiwān de xuǎnjǔ suànshì xiāngdāng gōngkāi de. Kāipiào de shíhòu, yí piào yí piào chàng chūlái, dàjiā dōu kàn de dào.', english: "In terms of the system, Taiwan's elections are quite transparent. When counting votes, each ballot is read aloud one by one, and everyone can watch.", vietnamese: 'Xét về mặt chế độ, bầu cử Đài Loan tương đối công khai. Lúc kiểm phiếu, từng lá phiếu được xướng lên, ai cũng nhìn thấy.' },
      { speaker: '羅珊蒂', traditional: '可是我有點看不懂那些政見。每個候選人講的好像都差不多。', simplified: '可是我有点看不懂那些政见。每个候选人讲的好像都差不多。', pinyin: 'Kěshì wǒ yǒudiǎn kàn bù dǒng nàxiē zhèngjiàn. Měi ge hòuxuǎnrén jiǎng de hǎoxiàng dōu chàbùduō.', english: "But I can't quite make sense of those platforms. Every candidate seems to say more or less the same thing.", vietnamese: 'Nhưng mình hơi khó hiểu mấy cương lĩnh tranh cử đó. Ứng viên nào nói cũng na ná nhau.' },
      { speaker: '陳敏萱', traditional: '所以我打算週末以前，把幾個我在意的議題整理一下，換句話說，先想清楚我自己要什麼，再去看誰的主張比較接近。', simplified: '所以我打算周末以前，把几个我在意的议题整理一下，换句话说，先想清楚我自己要什么，再去看谁的主张比较接近。', pinyin: 'Suǒyǐ wǒ dǎsuàn zhōumò yǐqián, bǎ jǐ ge wǒ zàiyì de yìtí zhěnglǐ yíxià, huàn jù huà shuō, xiān xiǎng qīngchǔ wǒ zìjǐ yào shénme, zài qù kàn shéi de zhǔzhāng bǐjiào jiējìn.', english: "So before the weekend I'm going to sort out a few issues I care about—in other words, figure out what I want first, then see whose positions come closest.", vietnamese: 'Nên trước cuối tuần mình định sắp xếp lại vài vấn đề mình quan tâm, nói cách khác, nghĩ rõ mình muốn gì trước, rồi xem chủ trương của ai gần với mình hơn.' },
      { speaker: '安德思', traditional: '你會受家人影響嗎？', simplified: '你会受家人影响吗？', pinyin: 'Nǐ huì shòu jiārén yǐngxiǎng ma?', english: 'Will you be influenced by your family?', vietnamese: 'Cậu có bị người nhà ảnh hưởng không?' },
      { speaker: '陳敏萱', traditional: '多少會。可是我爸媽也說，這是我的一票，要我自己決定。', simplified: '多少会。可是我爸妈也说，这是我的一票，要我自己决定。', pinyin: 'Duōshǎo huì. Kěshì wǒ bàmā yě shuō, zhè shì wǒ de yí piào, yào wǒ zìjǐ juédìng.', english: "Somewhat. But my parents also said this is my vote and I should decide for myself.", vietnamese: 'Ít nhiều thì có. Nhưng bố mẹ mình cũng nói, đây là lá phiếu của mình, phải để mình tự quyết định.' },
      { speaker: '高橋健太', traditional: '從長遠的角度來看，年輕人願意去了解、去投票，是好事。就算這次選的人沒選上，你的聲音還是被算進去了。', simplified: '从长远的角度来看，年轻人愿意去了解、去投票，是好事。就算这次选的人没选上，你的声音还是被算进去了。', pinyin: 'Cóng chángyuǎn de jiǎodù lái kàn, niánqīng rén yuànyì qù liǎojiě, qù tóupiào, shì hǎoshì. Jiùsuàn zhè cì xuǎn de rén méi xuǎnshàng, nǐ de shēngyīn háishì bèi suàn jìnqù le.', english: "From a long-term perspective, young people being willing to inform themselves and vote is a good thing. Even if the person you voted for doesn't win, your voice still gets counted.", vietnamese: 'Nhìn từ góc độ lâu dài, người trẻ chịu tìm hiểu, chịu đi bỏ phiếu là điều tốt. Dù người mình bầu lần này không trúng, tiếng nói của cậu vẫn được tính vào.' },
      { speaker: '羅珊蒂', traditional: '我聽說有些人覺得「投不投都一樣」，就乾脆不去。', simplified: '我听说有些人觉得「投不投都一样」，就干脆不去。', pinyin: 'Wǒ tīngshuō yǒuxiē rén juéde "tóu bù tóu dōu yíyàng", jiù gāncuì bú qù.', english: "I've heard some people feel 'it makes no difference whether you vote,' so they just don't go.", vietnamese: 'Mình nghe nói có người thấy "bỏ hay không cũng như nhau", nên dứt khoát không đi.' },
      { speaker: '陳敏萱', traditional: '這種想法我能理解，可是儘管一票很小，如果大家都這樣想，結果就會由少數人決定。', simplified: '这种想法我能理解，可是尽管一票很小，如果大家都这样想，结果就会由少数人决定。', pinyin: 'Zhè zhǒng xiǎngfǎ wǒ néng lǐjiě, kěshì jǐnguǎn yí piào hěn xiǎo, rúguǒ dàjiā dōu zhèyàng xiǎng, jiéguǒ jiù huì yóu shǎoshù rén juédìng.', english: "I can understand that view, but although one vote is small, if everyone thinks that way, the outcome ends up decided by a few people.", vietnamese: 'Suy nghĩ này mình hiểu được, nhưng mặc dù một lá phiếu rất nhỏ, nếu ai cũng nghĩ vậy, kết quả sẽ do thiểu số quyết định.' },
      { speaker: '安德思', traditional: '為了不排太久的隊，那天要早點去嗎？', simplified: '为了不排太久的队，那天要早点去吗？', pinyin: 'Wèile bù pái tài jiǔ de duì, nà tiān yào zǎodiǎn qù ma?', english: "To avoid a long line, should we go early that day?", vietnamese: 'Để khỏi xếp hàng lâu, hôm đó phải đi sớm à?' },
      { speaker: '陳敏萱', traditional: '為了保險起見，我打算一早就去。而且投完票，還可以順便去吃早餐，很多店那天都有優惠。', simplified: '为了保险起见，我打算一早就去。而且投完票，还可以顺便去吃早餐，很多店那天都有优惠。', pinyin: 'Wèile bǎoxiǎn qǐjiàn, wǒ dǎsuàn yìzǎo jiù qù. Érqiě tóu wán piào, hái kěyǐ shùnbiàn qù chī zǎocān, hěn duō diàn nà tiān dōu yǒu yōuhuì.', english: "Just to be safe, I plan to go first thing in the morning. And after voting, we can grab breakfast—many shops have deals that day.", vietnamese: 'Cho chắc ăn, mình định sáng sớm đã đi. Với lại bỏ phiếu xong, còn tiện đi ăn sáng, nhiều quán hôm đó đều có ưu đãi.' },
      { speaker: '高橋健太', traditional: '這倒是台灣選舉日的另一個特色。', simplified: '这倒是台湾选举日的另一个特色。', pinyin: 'Zhè dào shì Táiwān xuǎnjǔ rì de lìng yí ge tèsè.', english: "That's another feature of Taiwan's election day, actually.", vietnamese: 'Cái đó đúng là một nét riêng khác của ngày bầu cử ở Đài Loan.' },
      { speaker: '羅珊蒂', traditional: '那我星期六陪妳去，我想看看投票所長什麼樣子。', simplified: '那我星期六陪妳去，我想看看投票所长什么样子。', pinyin: 'Nà wǒ xīngqíliù péi nǐ qù, wǒ xiǎng kànkan tóupiàosuǒ zhǎng shénme yàngzi.', english: "Then I'll go with you on Saturday—I want to see what a polling station looks like.", vietnamese: 'Vậy thứ Bảy mình đi cùng cậu, mình muốn xem điểm bỏ phiếu trông thế nào.' }
    ]
  ],

  shortReading: {
    traditional:
      '投票只是開始\n\n　　台灣從一九九〇年代開始，人民可以直接選出自己的領導人和民意代表，定期的選舉已經進行了三十幾年。對許多人來說，選舉日是很重要的一天：這一天，每一個滿二十歲的公民，不論身分、收入、教育程度，手上都只有一票，力量是一樣的。\n\n　　開票的時候，一票一票公開唱出來，結果大家都看得到。這種公開和平等，是很多地方的人所羨慕的。\n\n　　不過，近年來也有一些擔心。年輕人的投票率比其他年齡層低。有人認為這是政治冷漠；也有人認為，是年輕人覺得自己的聲音很難被聽見，久了就不想參與。\n\n　　專家提醒，投票只是參與公共事務的第一步。選完以後，持續去了解政策、監督政府、表達意見，才能讓自己的一票真正發揮作用。從長遠的角度來看，民主不是四年一次的活動，而是一種需要每個人一起、一直練習的生活方式。一個社會的進步，往往就是這樣一票一票、一次一次地累積出來的。',
    simplified:
      '投票只是开始\n\n　　台湾从一九九〇年代开始，人民可以直接选出自己的领导人和民意代表，定期的选举已经进行了三十几年。对许多人来说，选举日是很重要的一天：这一天，每一个满二十岁的公民，不论身分、收入、教育程度，手上都只有一票，力量是一样的。\n\n　　开票的时候，一票一票公开唱出来，结果大家都看得到。这种公开和平等，是很多地方的人所羡慕的。\n\n　　不过，近年来也有一些担心。年轻人的投票率比其他年龄层低。有人认为这是政治冷漠；也有人认为，是年轻人觉得自己的声音很难被听见，久了就不想参与。\n\n　　专家提醒，投票只是参与公共事务的第一步。选完以后，持续去了解政策、监督政府、表达意见，才能让自己的一票真正发挥作用。从长远的角度来看，民主不是四年一次的活动，而是一种需要每个人一起、一直练习的生活方式。一个社会的进步，往往就是这样一票一票、一次一次地累积出来的。',
    vietnamese:
      'Bỏ phiếu chỉ là bước khởi đầu\n\nTừ thập niên 1990, người dân Đài Loan có thể trực tiếp bầu ra lãnh đạo và đại biểu dân cử của mình, các cuộc bầu cử định kỳ đã diễn ra hơn ba mươi năm. Đối với nhiều người, ngày bầu cử là một ngày rất quan trọng: ngày này, mỗi công dân đủ hai mươi tuổi, bất kể thân phận, thu nhập, trình độ học vấn, trên tay đều chỉ có một lá phiếu, sức nặng là như nhau.\n\nLúc kiểm phiếu, từng lá phiếu được xướng lên công khai, kết quả ai cũng nhìn thấy. Sự công khai và bình đẳng này là điều người ở nhiều nơi ghen tị.\n\nTuy nhiên, những năm gần đây cũng có một số lo ngại. Tỷ lệ đi bầu của người trẻ thấp hơn các nhóm tuổi khác. Có người cho rằng đó là sự thờ ơ chính trị; cũng có người cho rằng, đó là vì người trẻ thấy tiếng nói của mình khó được lắng nghe, lâu dần thì không muốn tham gia.\n\nChuyên gia nhắc nhở, bỏ phiếu chỉ là bước đầu tiên của việc tham gia vào các vấn đề công. Sau khi bầu xong, tiếp tục tìm hiểu chính sách, giám sát chính phủ, bày tỏ ý kiến, thì lá phiếu của mình mới thật sự phát huy tác dụng. Nhìn từ góc độ lâu dài, dân chủ không phải là một hoạt động bốn năm một lần, mà là một lối sống cần mỗi người cùng nhau, liên tục thực hành. Sự tiến bộ của một xã hội thường chính là được tích lũy như vậy, từng lá phiếu, từng lần một.'
  },

  phrases: [
    { phraseTraditional: '滿二十歲', phraseSimplified: '满二十岁', pinyin: 'mǎn èrshí suì', meaningVi: 'đủ hai mươi tuổi' },
    { phraseTraditional: '一票一票唱出來', phraseSimplified: '一票一票唱出来', pinyin: 'yí piào yí piào chàng chūlái', meaningVi: 'xướng lên từng lá phiếu một' },
    { phraseTraditional: '投不投都一樣', phraseSimplified: '投不投都一样', pinyin: 'tóu bù tóu dōu yíyàng', meaningVi: 'bỏ hay không cũng như nhau' },
    { phraseTraditional: '你的一票', phraseSimplified: '你的一票', pinyin: 'nǐ de yí piào', meaningVi: 'lá phiếu của bạn' },
    { phraseTraditional: '為了保險起見', phraseSimplified: '为了保险起见', pinyin: 'wèile bǎoxiǎn qǐjiàn', meaningVi: 'cho chắc ăn, để cho chắc' },
    { phraseTraditional: '換句話說', phraseSimplified: '换句话说', pinyin: 'huàn jù huà shuō', meaningVi: 'nói cách khác' },
    { phraseTraditional: '你的聲音', phraseSimplified: '你的声音', pinyin: 'nǐ de shēngyīn', meaningVi: 'tiếng nói (ý kiến) của bạn' }
  ],

  vocab: [
    { id: 'L12-001', lessonId: 'L12', order: 1, group: 'vocab1', traditional: '投票', simplified: '投票', pinyin: 'tóupiào', wordClass: ['V-sep'], meaningVi: 'bỏ phiếu, đầu phiếu', meaningEn: 'to vote, to cast a ballot', tags: ['xa-hoi'], examples: [{ traditional: '星期六就要投票了。', simplified: '星期六就要投票了。', vietnamese: 'Thứ Bảy là bỏ phiếu rồi.' }] },
    { id: 'L12-002', lessonId: 'L12', order: 2, group: 'vocab1', traditional: '選舉', simplified: '选举', pinyin: 'xuǎnjǔ', wordClass: ['N', 'V'], meaningVi: 'bầu cử; bầu chọn', meaningEn: 'election; to elect', tags: ['xa-hoi'], examples: [{ traditional: '這幾天到處都是選舉的廣播車。', simplified: '这几天到处都是选举的广播车。', vietnamese: 'Mấy ngày nay đâu đâu cũng xe phát thanh bầu cử.' }] },
    { id: 'L12-003', lessonId: 'L12', order: 3, group: 'vocab1', traditional: '旗子', simplified: '旗子', pinyin: 'qízi', wordClass: ['N'], meaningVi: 'lá cờ', meaningEn: 'flag, banner', examples: [{ traditional: '路上到處都是候選人的旗子。', simplified: '路上到处都是候选人的旗子。', vietnamese: 'Trên đường đâu đâu cũng cờ của các ứng viên.' }] },
    { id: 'L12-004', lessonId: 'L12', order: 4, group: 'vocab1', traditional: '廣播', simplified: '广播', pinyin: 'guǎngbò', wordClass: ['N', 'V'], meaningVi: 'phát thanh, truyền thanh', meaningEn: 'broadcast; to broadcast', examples: [{ traditional: '廣播車開過來，聲音很大。', simplified: '广播车开过来，声音很大。', vietnamese: 'Xe phát thanh chạy tới, tiếng rất to.' }] },
    { id: 'L12-005', lessonId: 'L12', order: 5, group: 'vocab1', traditional: '公民', simplified: '公民', pinyin: 'gōngmín', wordClass: ['N'], meaningVi: 'công dân', meaningEn: 'citizen', tags: ['xa-hoi'], examples: [{ traditional: '凡是滿二十歲的公民都可以投票。', simplified: '凡是满二十岁的公民都可以投票。', vietnamese: 'Hễ là công dân đủ hai mươi tuổi đều được bỏ phiếu.' }] },
    { id: 'L12-006', lessonId: 'L12', order: 6, group: 'vocab1', traditional: '投票權', simplified: '投票权', pinyin: 'tóupiàoquán', wordClass: ['N'], meaningVi: 'quyền bỏ phiếu', meaningEn: 'the right to vote, suffrage', tags: ['xa-hoi'], examples: [{ traditional: '年滿二十歲的人才有投票權。', simplified: '年满二十岁的人才有投票权。', vietnamese: 'Người đủ hai mươi tuổi mới có quyền bỏ phiếu.' }] },
    { id: 'L12-007', lessonId: 'L12', order: 7, group: 'vocab1', traditional: '公投', simplified: '公投', pinyin: 'gōngtóu', wordClass: ['N'], meaningVi: 'trưng cầu dân ý (bỏ phiếu toàn dân)', meaningEn: 'referendum', tags: ['xa-hoi'], examples: [{ traditional: '這次除了選人，還有幾個公投的題目。', simplified: '这次除了选人，还有几个公投的题目。', vietnamese: 'Lần này ngoài bầu người, còn có vài câu hỏi trưng cầu dân ý.' }] },
    { id: 'L12-008', lessonId: 'L12', order: 8, group: 'vocab1', traditional: '議題', simplified: '议题', pinyin: 'yìtí', wordClass: ['N'], meaningVi: 'vấn đề, chủ đề (đưa ra thảo luận)', meaningEn: 'issue, topic for discussion', tags: ['xa-hoi'], examples: [{ traditional: '我想先整理幾個我在意的議題。', simplified: '我想先整理几个我在意的议题。', vietnamese: 'Mình muốn sắp xếp trước vài vấn đề mình quan tâm.' }] },
    { id: 'L12-009', lessonId: 'L12', order: 9, group: 'vocab1', traditional: '開票', simplified: '开票', pinyin: 'kāipiào', wordClass: ['V-sep'], meaningVi: 'kiểm phiếu', meaningEn: 'to count the votes', tags: ['xa-hoi'], examples: [{ traditional: '開票的過程是公開的。', simplified: '开票的过程是公开的。', vietnamese: 'Quá trình kiểm phiếu là công khai.' }] },
    { id: 'L12-010', lessonId: 'L12', order: 10, group: 'vocab1', traditional: '唱票', simplified: '唱票', pinyin: 'chàngpiào', wordClass: ['V-sep'], meaningVi: 'xướng phiếu (đọc to từng phiếu khi kiểm)', meaningEn: 'to read out ballots aloud during counting', tags: ['xa-hoi'], examples: [{ traditional: '開票的時候，一票一票唱出來。', simplified: '开票的时候，一票一票唱出来。', vietnamese: 'Lúc kiểm phiếu, từng lá phiếu được xướng lên.' }] },
    { id: 'L12-011', lessonId: 'L12', order: 11, group: 'vocab1', traditional: '政見', simplified: '政见', pinyin: 'zhèngjiàn', wordClass: ['N'], meaningVi: 'chính kiến, cương lĩnh tranh cử', meaningEn: 'political platform, campaign position', tags: ['xa-hoi'], examples: [{ traditional: '我有點看不懂那些政見。', simplified: '我有点看不懂那些政见。', vietnamese: 'Mình hơi khó hiểu mấy cương lĩnh tranh cử đó.' }] },
    { id: 'L12-012', lessonId: 'L12', order: 12, group: 'vocab1', traditional: '候選人', simplified: '候选人', pinyin: 'hòuxuǎnrén', wordClass: ['N'], meaningVi: 'ứng cử viên', meaningEn: 'candidate', tags: ['xa-hoi'], examples: [{ traditional: '每個候選人講的好像都差不多。', simplified: '每个候选人讲的好像都差不多。', vietnamese: 'Ứng viên nào nói cũng na ná nhau.' }] },
    { id: 'L12-013', lessonId: 'L12', order: 13, group: 'vocab1', traditional: '主張', simplified: '主张', pinyin: 'zhǔzhāng', wordClass: ['N', 'V'], meaningVi: 'chủ trương, quan điểm; chủ trương (làm gì)', meaningEn: 'position, stance; to advocate', examples: [{ traditional: '先想清楚我要什麼，再看誰的主張比較接近。', simplified: '先想清楚我要什么，再看谁的主张比较接近。', vietnamese: 'Nghĩ rõ mình muốn gì trước, rồi xem chủ trương của ai gần với mình hơn.' }] },
    { id: 'L12-014', lessonId: 'L12', order: 14, group: 'vocab1', traditional: '少數', simplified: '少数', pinyin: 'shǎoshù', wordClass: ['N'], meaningVi: 'thiểu số', meaningEn: 'minority, the few', examples: [{ traditional: '如果大家都不投，結果就會由少數人決定。', simplified: '如果大家都不投，结果就会由少数人决定。', vietnamese: 'Nếu ai cũng không bỏ, kết quả sẽ do thiểu số quyết định.' }] },
    { id: 'L12-015', lessonId: 'L12', order: 15, group: 'vocab1', traditional: '多數', simplified: '多数', pinyin: 'duōshù', wordClass: ['N'], meaningVi: 'đa số', meaningEn: 'majority, the many', examples: [{ traditional: '在選舉裡，多數人的意見會決定結果。', simplified: '在选举里，多数人的意见会决定结果。', vietnamese: 'Trong bầu cử, ý kiến của đa số sẽ quyết định kết quả.' }] },
    { id: 'L12-016', lessonId: 'L12', order: 16, group: 'vocab1', traditional: '投票所', simplified: '投票所', pinyin: 'tóupiàosuǒ', wordClass: ['N'], meaningVi: 'điểm bỏ phiếu', meaningEn: 'polling station', tags: ['xa-hoi'], examples: [{ traditional: '我想看看投票所長什麼樣子。', simplified: '我想看看投票所长什么样子。', vietnamese: 'Mình muốn xem điểm bỏ phiếu trông thế nào.' }] },
    { id: 'L12-017', lessonId: 'L12', order: 17, group: 'vocab1', traditional: '優惠', simplified: '优惠', pinyin: 'yōuhuì', wordClass: ['N', 'Vs'], meaningVi: 'ưu đãi; có ưu đãi', meaningEn: 'discount, special offer', tags: ['mua-sam'], examples: [{ traditional: '投票日很多店都有優惠。', simplified: '投票日很多店都有优惠。', vietnamese: 'Ngày bầu cử nhiều quán đều có ưu đãi.' }] },
    { id: 'L12-018', lessonId: 'L12', order: 18, group: 'vocab1', traditional: '整理', simplified: '整理', pinyin: 'zhěnglǐ', wordClass: ['V'], meaningVi: 'sắp xếp, chỉnh lý, dọn dẹp', meaningEn: 'to sort out, to organize, to tidy up', examples: [{ traditional: '我打算把我在意的議題整理一下。', simplified: '我打算把我在意的议题整理一下。', vietnamese: 'Mình định sắp xếp lại những vấn đề mình quan tâm.' }] },
    { id: 'L12-019', lessonId: 'L12', order: 19, group: 'vocab1', traditional: '長遠', simplified: '长远', pinyin: 'chángyuǎn', wordClass: ['Vs'], meaningVi: 'lâu dài, dài hạn', meaningEn: 'long-term, far-reaching', examples: [{ traditional: '從長遠的角度來看，這是一件好事。', simplified: '从长远的角度来看，这是一件好事。', vietnamese: 'Nhìn từ góc độ lâu dài, đây là một điều tốt.' }] },
    { id: 'L12-020', lessonId: 'L12', order: 20, group: 'vocab1', traditional: '理解', simplified: '理解', pinyin: 'lǐjiě', wordClass: ['V'], meaningVi: 'thấu hiểu, lý giải', meaningEn: 'to understand, to comprehend', examples: [{ traditional: '這種想法我能理解，可是我不同意。', simplified: '这种想法我能理解，可是我不同意。', vietnamese: 'Suy nghĩ này mình hiểu được, nhưng mình không đồng ý.' }] },
    { id: 'L12-021', lessonId: 'L12', order: 21, group: 'vocab1', traditional: '權利', simplified: '权利', pinyin: 'quánlì', wordClass: ['N'], meaningVi: 'quyền lợi, quyền', meaningEn: 'right (entitlement)', tags: ['xa-hoi'], examples: [{ traditional: '投票是每個公民的權利。', simplified: '投票是每个公民的权利。', vietnamese: 'Bỏ phiếu là quyền của mỗi công dân.' }] },
    { id: 'L12-022', lessonId: 'L12', order: 22, group: 'vocab1', traditional: '義務', simplified: '义务', pinyin: 'yìwù', wordClass: ['N'], meaningVi: 'nghĩa vụ', meaningEn: 'obligation, duty', tags: ['xa-hoi'], examples: [{ traditional: '有人認為投票不只是權利，也是一種義務。', simplified: '有人认为投票不只是权利，也是一种义务。', vietnamese: 'Có người cho rằng bỏ phiếu không chỉ là quyền lợi, mà còn là một nghĩa vụ.' }] },
    { id: 'L12-023', lessonId: 'L12', order: 23, group: 'vocab1', traditional: '參與', simplified: '参与', pinyin: 'cānyù', wordClass: ['V'], meaningVi: 'tham gia, tham dự', meaningEn: 'to participate, to take part in', tags: ['xa-hoi'], examples: [{ traditional: '年輕人願意參與公共事務是好事。', simplified: '年轻人愿意参与公共事务是好事。', vietnamese: 'Người trẻ chịu tham gia vào các vấn đề công là điều tốt.' }] },
    { id: 'L12-024', lessonId: 'L12', order: 24, group: 'vocab1', traditional: '民主', simplified: '民主', pinyin: 'mínzhǔ', wordClass: ['N', 'Vs'], meaningVi: 'dân chủ', meaningEn: 'democracy; democratic', tags: ['xa-hoi'], examples: [{ traditional: '民主是一種需要一直練習的生活方式。', simplified: '民主是一种需要一直练习的生活方式。', vietnamese: 'Dân chủ là một lối sống cần liên tục thực hành.' }] },
    { id: 'L12-025', lessonId: 'L12', order: 25, group: 'vocab1', traditional: '早餐', simplified: '早餐', pinyin: 'zǎocān', wordClass: ['N'], meaningVi: 'bữa sáng', meaningEn: 'breakfast', tags: ['am-thuc'], examples: [{ traditional: '投完票，順便去吃個早餐。', simplified: '投完票，顺便去吃个早餐。', vietnamese: 'Bỏ phiếu xong, tiện đi ăn sáng.' }] },
    { id: 'L12-026', lessonId: 'L12', order: 26, group: 'vocab1', traditional: '聲音', simplified: '声音', pinyin: 'shēngyīn', wordClass: ['N'], meaningVi: 'tiếng, âm thanh; (ẩn dụ) tiếng nói, ý kiến', meaningEn: 'sound, voice; (figuratively) opinion', examples: [{ traditional: '就算沒選上，你的聲音還是被算進去了。', simplified: '就算没选上，你的声音还是被算进去了。', vietnamese: 'Dù không trúng, tiếng nói của bạn vẫn được tính vào.' }] },

    { id: 'L12-027', lessonId: 'L12', order: 1, group: 'vocab2', traditional: '政治', simplified: '政治', pinyin: 'zhèngzhì', wordClass: ['N'], meaningVi: 'chính trị', meaningEn: 'politics', tags: ['xa-hoi'], examples: [{ traditional: '有人說年輕人對政治不感興趣。', simplified: '有人说年轻人对政治不感兴趣。', vietnamese: 'Có người nói người trẻ không quan tâm đến chính trị.' }] },
    { id: 'L12-028', lessonId: 'L12', order: 2, group: 'vocab2', traditional: '政黨', simplified: '政党', pinyin: 'zhèngdǎng', wordClass: ['N'], meaningVi: 'đảng phái, chính đảng', meaningEn: 'political party', tags: ['xa-hoi'], examples: [{ traditional: '不同的政黨對這個議題有不同的主張。', simplified: '不同的政党对这个议题有不同的主张。', vietnamese: 'Các đảng phái khác nhau có chủ trương khác nhau về vấn đề này.' }] },
    { id: 'L12-029', lessonId: 'L12', order: 3, group: 'vocab2', traditional: '選民', simplified: '选民', pinyin: 'xuǎnmín', wordClass: ['N'], meaningVi: 'cử tri', meaningEn: 'voter, the electorate', tags: ['xa-hoi'], examples: [{ traditional: '候選人希望得到更多選民的支持。', simplified: '候选人希望得到更多选民的支持。', vietnamese: 'Ứng viên mong nhận được sự ủng hộ của nhiều cử tri hơn.' }] },
    { id: 'L12-030', lessonId: 'L12', order: 4, group: 'vocab2', traditional: '投票率', simplified: '投票率', pinyin: 'tóupiàolǜ', wordClass: ['N'], meaningVi: 'tỷ lệ đi bầu', meaningEn: 'voter turnout', tags: ['xa-hoi'], examples: [{ traditional: '年輕人的投票率比其他年齡層低。', simplified: '年轻人的投票率比其他年龄层低。', vietnamese: 'Tỷ lệ đi bầu của người trẻ thấp hơn các nhóm tuổi khác.' }] },
    { id: 'L12-031', lessonId: 'L12', order: 5, group: 'vocab2', traditional: '政策', simplified: '政策', pinyin: 'zhèngcè', wordClass: ['N'], meaningVi: 'chính sách', meaningEn: 'policy', tags: ['xa-hoi'], examples: [{ traditional: '選完以後也要繼續去了解政策。', simplified: '选完以后也要继续去了解政策。', vietnamese: 'Bầu xong cũng phải tiếp tục tìm hiểu chính sách.' }] },
    { id: 'L12-032', lessonId: 'L12', order: 6, group: 'vocab2', traditional: '監督', simplified: '监督', pinyin: 'jiāndū', wordClass: ['V'], meaningVi: 'giám sát', meaningEn: 'to supervise, to oversee', tags: ['xa-hoi'], examples: [{ traditional: '人民有權利監督政府。', simplified: '人民有权利监督政府。', vietnamese: 'Người dân có quyền giám sát chính phủ.' }] },
    { id: 'L12-033', lessonId: 'L12', order: 7, group: 'vocab2', traditional: '政府', simplified: '政府', pinyin: 'zhèngfǔ', wordClass: ['N'], meaningVi: 'chính phủ', meaningEn: 'government', tags: ['xa-hoi'], examples: [{ traditional: '選民希望政府能解決這些問題。', simplified: '选民希望政府能解决这些问题。', vietnamese: 'Cử tri mong chính phủ có thể giải quyết những vấn đề này.' }] },
    { id: 'L12-034', lessonId: 'L12', order: 8, group: 'vocab2', traditional: '執政', simplified: '执政', pinyin: 'zhízhèng', wordClass: ['Vi'], meaningVi: 'cầm quyền, chấp chính', meaningEn: 'to be in power, to govern', tags: ['xa-hoi'], examples: [{ traditional: '選舉決定接下來四年由誰執政。', simplified: '选举决定接下来四年由谁执政。', vietnamese: 'Bầu cử quyết định bốn năm tới ai cầm quyền.' }] },
    { id: 'L12-035', lessonId: 'L12', order: 9, group: 'vocab2', traditional: '任期', simplified: '任期', pinyin: 'rènqī', wordClass: ['N'], meaningVi: 'nhiệm kỳ', meaningEn: 'term of office', tags: ['xa-hoi'], examples: [{ traditional: '一個任期通常是四年。', simplified: '一个任期通常是四年。', vietnamese: 'Một nhiệm kỳ thường là bốn năm.' }] },
    { id: 'L12-036', lessonId: 'L12', order: 10, group: 'vocab2', traditional: '表達', simplified: '表达', pinyin: 'biǎodá', wordClass: ['V'], meaningVi: 'biểu đạt, bày tỏ', meaningEn: 'to express', examples: [{ traditional: '投票是表達自己意見最直接的方式。', simplified: '投票是表达自己意见最直接的方式。', vietnamese: 'Bỏ phiếu là cách trực tiếp nhất để bày tỏ ý kiến của mình.' }] },
    { id: 'L12-037', lessonId: 'L12', order: 11, group: 'vocab2', traditional: '意見', simplified: '意见', pinyin: 'yìjiàn', wordClass: ['N'], meaningVi: 'ý kiến', meaningEn: 'opinion, view', examples: [{ traditional: '沒去投票，等於沒有表達意見。', simplified: '没去投票，等于没有表达意见。', vietnamese: 'Không đi bỏ phiếu, coi như không bày tỏ ý kiến.' }] },
    { id: 'L12-038', lessonId: 'L12', order: 12, group: 'vocab2', traditional: '冷漠', simplified: '冷漠', pinyin: 'lěngmò', wordClass: ['Vs'], meaningVi: 'thờ ơ, lãnh đạm', meaningEn: 'indifferent, apathetic', examples: [{ traditional: '有人認為低投票率是一種政治冷漠。', simplified: '有人认为低投票率是一种政治冷漠。', vietnamese: 'Có người cho rằng tỷ lệ đi bầu thấp là một kiểu thờ ơ chính trị.' }] },
    { id: 'L12-039', lessonId: 'L12', order: 13, group: 'vocab2', traditional: '議員', simplified: '议员', pinyin: 'yìyuán', wordClass: ['N'], meaningVi: 'nghị viên, đại biểu (hội đồng)', meaningEn: 'councilor, member of a legislature', tags: ['xa-hoi'], examples: [{ traditional: '這次也要選出地方議員。', simplified: '这次也要选出地方议员。', vietnamese: 'Lần này cũng bầu ra đại biểu hội đồng địa phương.' }] },
    { id: 'L12-040', lessonId: 'L12', order: 14, group: 'vocab2', traditional: '累積', simplified: '累积', pinyin: 'lěijī', wordClass: ['V'], meaningVi: 'tích lũy, dồn góp', meaningEn: 'to accumulate, to build up', examples: [{ traditional: '社會的進步是一次一次累積出來的。', simplified: '社会的进步是一次一次累积出来的。', vietnamese: 'Sự tiến bộ của xã hội được tích lũy qua từng lần.' }] },
    { id: 'L12-041', lessonId: 'L12', order: 15, group: 'vocab2', traditional: '民意', simplified: '民意', pinyin: 'mínyì', wordClass: ['N'], meaningVi: 'dân ý, ý dân', meaningEn: 'public opinion, the will of the people', tags: ['xa-hoi'], examples: [{ traditional: '選舉的結果反映了民意。', simplified: '选举的结果反映了民意。', vietnamese: 'Kết quả bầu cử phản ánh ý dân.' }] },
    { id: 'L12-042', lessonId: 'L12', order: 16, group: 'vocab2', traditional: '進步', simplified: '进步', pinyin: 'jìnbù', wordClass: ['N', 'Vi'], meaningVi: 'tiến bộ; tiến bộ (lên)', meaningEn: 'progress; to progress', examples: [{ traditional: '一個社會的進步需要很多人一起努力。', simplified: '一个社会的进步需要很多人一起努力。', vietnamese: 'Sự tiến bộ của một xã hội cần nhiều người cùng cố gắng.' }] },
    { id: 'L12-043', lessonId: 'L12', order: 17, group: 'vocab2', traditional: '教育', simplified: '教育', pinyin: 'jiàoyù', wordClass: ['N'], meaningVi: 'giáo dục', meaningEn: 'education', tags: ['giao-duc'], examples: [{ traditional: '學校的公民教育會教學生怎麼看政見。', simplified: '学校的公民教育会教学生怎么看政见。', vietnamese: 'Giáo dục công dân ở trường dạy học sinh cách đọc cương lĩnh tranh cử.' }] },
    { id: 'L12-044', lessonId: 'L12', order: 18, group: 'vocab2', traditional: '過程', simplified: '过程', pinyin: 'guòchéng', wordClass: ['N'], meaningVi: 'quá trình', meaningEn: 'process, course', examples: [{ traditional: '選完以後怎麼監督政府，是一個更長的過程。', simplified: '选完以后怎么监督政府，是一个更长的过程。', vietnamese: 'Bầu xong rồi giám sát chính phủ thế nào là một quá trình dài hơn.' }] },
    { id: 'L12-045', lessonId: 'L12', order: 19, group: 'vocab2', traditional: '共識', simplified: '共识', pinyin: 'gòngshì', wordClass: ['N'], meaningVi: 'sự đồng thuận, nhận thức chung', meaningEn: 'consensus', examples: [{ traditional: '很多議題需要慢慢討論才能有共識。', simplified: '很多议题需要慢慢讨论才能有共识。', vietnamese: 'Nhiều vấn đề cần thảo luận từ từ mới có được sự đồng thuận.' }] }
  ],

  grammar: [
    {
      id: 'L12-G1', lessonId: 'L12', order: 1, pattern: '凡是…，都…',
      functionVi: '"凡是 A，都 B" nghĩa là hễ là A (bất kỳ cái hoặc người nào thuộc loại A), thì đều B. Nhấn mạnh tính bao quát không ngoại lệ. A thường là một loại người hoặc vật.',
      functionEn: '"凡是 A，都 B" means whatever or whoever is A, all B. It stresses that there are no exceptions. A is usually a category of people or things.',
      examples: [
        { traditional: '凡是有身分證、年滿二十歲的人，都有投票權。', simplified: '凡是有身分证、年满二十岁的人，都有投票权。', english: 'Anyone with an ID card who is at least twenty has the right to vote.', vietnamese: 'Hễ là người có chứng minh thư, đủ hai mươi tuổi, đều có quyền bỏ phiếu.' },
        { traditional: '凡是這家出版社的書，品質都很不錯。', simplified: '凡是这家出版社的书，品质都很不错。', english: 'Every book from this publisher is of good quality.', vietnamese: 'Hễ là sách của nhà xuất bản này, chất lượng đều khá tốt.' },
        { traditional: '凡是報名的人，都會收到一封確認信。', simplified: '凡是报名的人，都会收到一封确认信。', english: 'Everyone who registers will receive a confirmation email.', vietnamese: 'Hễ là người đăng ký, đều nhận được một email xác nhận.' },
        { traditional: '凡是他答應過的事，一定會做到。', simplified: '凡是他答应过的事，一定会做到。', english: "Whatever he's promised, he always follows through.", vietnamese: 'Hễ là việc anh ấy đã hứa, nhất định sẽ làm.' },
        { traditional: '凡是跟健康有關的問題，都應該先問醫生。', simplified: '凡是跟健康有关的问题，都应该先问医生。', english: 'Any question about health should first be asked of a doctor.', vietnamese: 'Hễ là vấn đề liên quan đến sức khỏe, đều nên hỏi bác sĩ trước.' }
      ],
      usageNotesVi: '"凡是" trang trọng hơn "只要是". Vế sau bắt buộc có "都 / 一律 / 一定". A là điều kiện bao gồm mọi trường hợp cùng loại; câu mang tính quy tắc, khái quát.',
      exercises: [
        { id: 'L12-G1-EX1', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：什麼人可以參加這個活動？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['凡是對這個題目有興趣的人，都可以參加。'] }], targetPattern: 'L12-G1' },
        { id: 'L12-G1-EX2', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這張卡在哪些店可以用？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['凡是門口有這個標誌的店，都可以用。'] }], targetPattern: 'L12-G1' },
        { id: 'L12-G1-EX3', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：新來的同事需要做這個訓練嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['要，凡是新進人員，都要先上兩天的課。'] }], targetPattern: 'L12-G1' },
        { id: 'L12-G1-EX4', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個優惠有限制嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['凡是當天投過票的人，出示證明都可以打折。'] }], targetPattern: 'L12-G1' },
        { id: 'L12-G1-EX5', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他對朋友怎麼樣？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['凡是朋友開口的忙，他都盡量幫。'] }], targetPattern: 'L12-G1' }
      ]
    },
    {
      id: 'L12-G2', lessonId: 'L12', order: 2, pattern: '就…而言 / 就…來說',
      functionVi: '"就 A 而言，B" nghĩa là xét về mặt A (một phương diện cụ thể), thì B. Dùng để giới hạn phạm vi đánh giá. "而言" trang trọng, "來說" khẩu ngữ hơn.',
      functionEn: '"就 A 而言，B" means as far as A is concerned / in terms of A, B. It limits the scope of an assessment. "而言" is formal; "來說" is more colloquial.',
      examples: [
        { traditional: '就制度而言，台灣的選舉算是相當公開的。', simplified: '就制度而言，台湾的选举算是相当公开的。', english: "In terms of the system, Taiwan's elections are quite transparent.", vietnamese: 'Xét về mặt chế độ, bầu cử Đài Loan tương đối công khai.' },
        { traditional: '就價錢而言，這家民宿算是便宜的。', simplified: '就价钱而言，这家民宿算是便宜的。', english: 'In terms of price, this homestay is on the cheap side.', vietnamese: 'Xét về giá cả, homestay này tính là rẻ.' },
        { traditional: '就我個人而言，我比較支持第二個方案。', simplified: '就我个人而言，我比较支持第二个方案。', english: 'Personally speaking, I prefer the second option.', vietnamese: 'Về phần cá nhân tôi, tôi ủng hộ phương án thứ hai hơn.' },
        { traditional: '就經驗而言，他是我們裡面最適合的人選。', simplified: '就经验而言，他是我们里面最适合的人选。', english: "In terms of experience, he's the most suitable candidate among us.", vietnamese: 'Xét về kinh nghiệm, anh ấy là ứng viên phù hợp nhất trong chúng ta.' },
        { traditional: '就這件事而言，我覺得雙方都有責任。', simplified: '就这件事而言，我觉得双方都有责任。', english: 'As far as this matter goes, I think both sides bear responsibility.', vietnamese: 'Xét riêng chuyện này, tôi thấy cả hai bên đều có trách nhiệm.' }
      ],
      usageNotesVi: '"就…而言" đứng đầu câu hoặc đầu mệnh đề, khoanh vùng góc nhìn. Gần với "從…來看" nhưng "就…而言" thiên về "nếu chỉ xét mặt này". "就我而言" = "về phần tôi".',
      exercises: [
        { id: 'L12-G2-EX1', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這兩份工作你會選哪個？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['就薪水而言，第一份比較好，可是第二份學得到的東西多。'] }], targetPattern: 'L12-G2' },
        { id: 'L12-G2-EX2', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你覺得這次活動辦得成功嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['就參加的人數而言，算是很成功。'] }], targetPattern: 'L12-G2' },
        { id: 'L12-G2-EX3', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這台舊車還能開嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['就安全而言，我覺得該換了。'] }], targetPattern: 'L12-G2' },
        { id: 'L12-G2-EX4', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你贊成這個政策嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['就長遠而言，我覺得方向是對的。'] }], targetPattern: 'L12-G2' },
        { id: 'L12-G2-EX5', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他適合當班代表嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['就個性而言，他很願意為大家服務，滿適合的。'] }], targetPattern: 'L12-G2' }
      ]
    },
    {
      id: 'L12-G3', lessonId: 'L12', order: 3, pattern: '以…的身分',
      functionVi: '"以 A 的身分 + V" nghĩa là với tư cách hoặc thân phận là A mà làm việc gì. Nhấn mạnh vai trò hoặc danh nghĩa của người thực hiện hành động.',
      functionEn: '"以 A 的身分 + V" means to do something in the capacity or role of A. It stresses the doer\'s role or standing.',
      examples: [
        { traditional: '這是我第一次以公民的身分去投票。', simplified: '这是我第一次以公民的身分去投票。', english: 'This is my first time voting as a citizen.', vietnamese: 'Đây là lần đầu tiên tôi đi bỏ phiếu với tư cách công dân.' },
        { traditional: '他以志工的身分參加了這次的服務。', simplified: '他以志工的身分参加了这次的服务。', english: 'He took part in the service as a volunteer.', vietnamese: 'Anh ấy tham gia đợt phục vụ này với tư cách tình nguyện viên.' },
        { traditional: '我今天不是以老師的身分，而是以朋友的身分跟你說這些話。', simplified: '我今天不是以老师的身分，而是以朋友的身分跟你说这些话。', english: "I'm saying this to you today not as a teacher but as a friend.", vietnamese: 'Hôm nay tôi nói những lời này với cậu không phải với tư cách giáo viên, mà với tư cách bạn bè.' },
        { traditional: '她以家屬的身分留在醫院陪病人。', simplified: '她以家属的身分留在医院陪病人。', english: 'She stayed at the hospital with the patient as a family member.', vietnamese: 'Cô ấy ở lại bệnh viện chăm bệnh nhân với tư cách người nhà.' },
        { traditional: '他以代表的身分上台說了幾句話。', simplified: '他以代表的身分上台说了几句话。', english: 'He went on stage and spoke a few words as a representative.', vietnamese: 'Anh ấy lên sân khấu nói vài câu với tư cách đại diện.' }
      ],
      usageNotesVi: '"以…的身分" thường đứng trước động từ chính. Gần với "作為 A" nhưng "以…的身分" nhấn vào việc "nhân danh hoặc dựa trên vai trò đó" mà hành động. "身分" cũng viết "身份".',
      exercises: [
        { id: 'L12-G3-EX1', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼會去參加那個會議？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我是以學生代表的身分去的。'] }], targetPattern: 'L12-G3' },
        { id: 'L12-G3-EX2', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這次比賽你也下場了？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['沒有，我這次是以裁判的身分參加。'] }], targetPattern: 'L12-G3' },
        { id: 'L12-G3-EX3', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他為什麼可以進去後台？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['他以工作人員的身分進去的，有掛證。'] }], targetPattern: 'L12-G3' },
        { id: 'L12-G3-EX4', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你要跟他說這件事嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['要，不過我會以同事的身分好好跟他談，不會太嚴肅。'] }], targetPattern: 'L12-G3' },
        { id: 'L12-G3-EX5', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：那位老先生上台領獎，是得獎人嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不是，他是以家屬的身分代替過世的作家上台的。'] }], targetPattern: 'L12-G3' }
      ]
    },
    {
      id: 'L12-G4', lessonId: 'L12', order: 4, pattern: '為（了）…起見',
      functionVi: '"為（了）A 起見，B" nghĩa là vì mục đích A (thường là để bảo đảm điều gì tốt hoặc an toàn), nên làm B. "起見" luôn đứng cuối cụm mục đích.',
      functionEn: '"為（了）A 起見，B" means for the sake of A (usually to ensure something good or safe), do B. "起見" always comes at the end of the purpose phrase.',
      examples: [
        { traditional: '為了保險起見，我打算一早就去投票。', simplified: '为了保险起见，我打算一早就去投票。', english: 'Just to be safe, I plan to go vote first thing in the morning.', vietnamese: 'Cho chắc ăn, tôi định sáng sớm đã đi bỏ phiếu.' },
        { traditional: '為了公平起見，我們用抽籤決定順序。', simplified: '为了公平起见，我们用抽签决定顺序。', english: "For fairness, we'll decide the order by drawing lots.", vietnamese: 'Cho công bằng, chúng ta rút thăm quyết định thứ tự.' },
        { traditional: '為了安全起見，這條步道晚上不開放。', simplified: '为了安全起见，这条步道晚上不开放。', english: 'For safety reasons, this trail is closed at night.', vietnamese: 'Vì lý do an toàn, con đường mòn này không mở ban đêm.' },
        { traditional: '為了方便大家討論起見，我先把資料印出來。', simplified: '为了方便大家讨论起见，我先把资料印出来。', english: 'To make discussion easier for everyone, I printed out the materials first.', vietnamese: 'Để tiện cho mọi người thảo luận, tôi in tài liệu ra trước.' },
        { traditional: '為了慎重起見，這個決定我們想再多聽幾個人的意見。', simplified: '为了慎重起见，这个决定我们想再多听几个人的意见。', english: 'To be prudent, we want to hear a few more opinions on this decision.', vietnamese: 'Cho thận trọng, quyết định này chúng tôi muốn nghe thêm ý kiến vài người nữa.' }
      ],
      usageNotesVi: '"為…起見" hơi trang trọng, hay dùng trong thông báo, văn viết. A thường là danh từ trừu tượng hai âm tiết (公平、安全、保險、慎重、方便). Không nói "為了…的緣故起見".',
      exercises: [
        { id: 'L12-G4-EX1', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：報名為什麼要附身分證影本？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['為了確認身分起見，主辦單位要求大家附上。'] }], targetPattern: 'L12-G4' },
        { id: 'L12-G4-EX2', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這麼近的路，還要戴安全帽嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['要，為了安全起見，再近都要戴。'] }], targetPattern: 'L12-G4' },
        { id: 'L12-G4-EX3', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：東西不是已經檢查過了嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['檢查過了，可是為了保險起見，出門前我再看一次。'] }], targetPattern: 'L12-G4' },
        { id: 'L12-G4-EX4', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：會議記錄一定要兩個人簽名嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對，為了公正起見，記錄要有兩個人一起確認。'] }], targetPattern: 'L12-G4' },
        { id: 'L12-G4-EX5', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼提早一個小時到機場？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['為了不趕時間起見，我習慣早一點到。'] }], targetPattern: 'L12-G4' }
      ]
    },
    {
      id: 'L12-G5', lessonId: 'L12', order: 5, pattern: '儘管…，（還是 / 卻）…',
      functionVi: '"儘管 A，B" nghĩa là mặc dù A (một sự thật), B vẫn xảy ra (trái với dự đoán). Gần "雖然…可是…" nhưng "儘管" nhấn mạnh sự thật A hơn. Vế sau hay có "還是 / 仍然 / 卻".',
      functionEn: '"儘管 A，B" means although A (a fact), B still happens (contrary to expectation). Close to "雖然…可是…" but "儘管" emphasizes fact A more. The second clause often has "還是 / 仍然 / 卻".',
      examples: [
        { traditional: '儘管一票很小，如果大家都覺得沒用，結果就會由少數人決定。', simplified: '尽管一票很小，如果大家都觉得没用，结果就会由少数人决定。', english: "Although one vote is small, if everyone thinks it's useless, the outcome ends up decided by a few.", vietnamese: 'Mặc dù một lá phiếu rất nhỏ, nếu ai cũng nghĩ vô ích, kết quả sẽ do thiểu số quyết định.' },
        { traditional: '儘管下著大雨，還是有很多人出來投票。', simplified: '尽管下着大雨，还是有很多人出来投票。', english: 'Despite the heavy rain, many people still came out to vote.', vietnamese: 'Mặc dù mưa to, vẫn có nhiều người ra bỏ phiếu.' },
        { traditional: '儘管他反對，最後大家還是照原計畫做了。', simplified: '尽管他反对，最后大家还是照原计划做了。', english: 'Although he objected, in the end everyone went ahead with the original plan.', vietnamese: 'Mặc dù anh ấy phản đối, cuối cùng mọi người vẫn làm theo kế hoạch ban đầu.' },
        { traditional: '儘管準備了很久，上台的時候他還是很緊張。', simplified: '尽管准备了很久，上台的时候他还是很紧张。', english: 'Although he\'d prepared for a long time, he was still nervous on stage.', vietnamese: 'Mặc dù đã chuẩn bị rất lâu, khi lên sân khấu anh ấy vẫn rất căng thẳng.' },
        { traditional: '儘管費用不低，這個健康檢查還是很值得做。', simplified: '尽管费用不低，这个健康检查还是很值得做。', english: "Although it's not cheap, this health check is still well worth doing.", vietnamese: 'Mặc dù chi phí không thấp, đợt kiểm tra sức khỏe này vẫn rất đáng làm.' }
      ],
      usageNotesVi: '"儘管" (chữ 儘) đứng đầu mệnh đề nhượng bộ. Khác nghĩa "儘管 + V" (= cứ việc V, thoải mái V): 有問題儘管問. Phân biệt qua kết cấu: đứng trước mệnh đề = "mặc dù"; đứng trước động từ đơn = "cứ việc".',
      exercises: [
        { id: 'L12-G5-EX1', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他都不理你，你還要幫他？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['儘管他態度不好，我還是覺得該幫的時候要幫。'] }], targetPattern: 'L12-G5' },
        { id: 'L12-G5-EX2', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：那家店這麼貴，怎麼還這麼多人？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['儘管貴，東西真的好，大家還是願意排隊。'] }], targetPattern: 'L12-G5' },
        { id: 'L12-G5-EX3', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你不是很累嗎？怎麼還去？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['儘管很累，答應人家的事還是要做到。'] }], targetPattern: 'L12-G5' },
        { id: 'L12-G5-EX4', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個題目很難，大家都做不出來吧？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['儘管很難，還是有兩三個同學想出了辦法。'] }], targetPattern: 'L12-G5' },
        { id: 'L12-G5-EX5', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：颱風天航班應該都取消了。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['儘管風雨很大，這班飛機還是照常起飛了。'] }], targetPattern: 'L12-G5' }
      ]
    },
    {
      id: 'L12-G6', lessonId: 'L12', order: 6, pattern: '換句話說…',
      functionVi: '"換句話說" (= nói cách khác) dùng để diễn đạt lại ý vừa nói bằng cách khác, thường để làm rõ hoặc rút ra kết luận. Đứng đầu câu.',
      functionEn: '"換句話說" (in other words) restates what was just said in another way, usually to clarify or draw a conclusion. It opens the sentence.',
      examples: [
        { traditional: '先想清楚我要什麼，換句話說，先確定我在意的議題，再去看誰的主張比較接近。', simplified: '先想清楚我要什么，换句话说，先确定我在意的议题，再去看谁的主张比较接近。', english: "Figure out what I want first—in other words, settle on the issues I care about, then see whose positions are closest.", vietnamese: 'Nghĩ rõ mình muốn gì trước, nói cách khác, xác định vấn đề mình quan tâm, rồi xem chủ trương của ai gần với mình hơn.' },
        { traditional: '這個位子交通不方便，換句話說，開店以後客人不會太多。', simplified: '这个位子交通不方便，换句话说，开店以后客人不会太多。', english: "This spot has poor transport access—in other words, there won't be many customers after opening.", vietnamese: 'Chỗ này giao thông bất tiện, nói cách khác, mở tiệm rồi khách sẽ không đông.' },
        { traditional: '他一句話都沒說就走了，換句話說，他其實不同意。', simplified: '他一句话都没说就走了，换句话说，他其实不同意。', english: 'He left without a word—in other words, he actually disagrees.', vietnamese: 'Anh ấy chẳng nói lời nào đã bỏ đi, nói cách khác, thật ra anh ấy không đồng ý.' },
        { traditional: '報名的人只有十個，換句話說，這門課這學期開不成。', simplified: '报名的人只有十个，换句话说，这门课这学期开不成。', english: "Only ten people signed up—in other words, this class won't run this semester.", vietnamese: 'Chỉ có mười người đăng ký, nói cách khác, môn này học kỳ này không mở được.' },
        { traditional: '每個人都不想負責，換句話說，這件事最後沒有人做。', simplified: '每个人都不想负责，换句话说，这件事最后没有人做。', english: 'Nobody wants to take responsibility—in other words, in the end no one does it.', vietnamese: 'Ai cũng không muốn chịu trách nhiệm, nói cách khác, cuối cùng chẳng ai làm.' }
      ],
      usageNotesVi: '"換句話說" luôn đứng đầu câu hoặc mệnh đề, theo sau là cách diễn đạt tương đương hoặc hệ quả logic của câu trước. Gần với "也就是說". Không dùng giữa câu như một liên từ nối.',
      exercises: [
        { id: 'L12-G6-EX1', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個計畫需要三個月。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['換句話說，暑假結束以前是做不完的。'] }], targetPattern: 'L12-G6' },
        { id: 'L12-G6-EX2', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他每天都最早到、最晚走。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['換句話說，他把大部分的時間都給了工作。'] }], targetPattern: 'L12-G6' },
        { id: 'L12-G6-EX3', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這裡冬天平均只有十度。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['換句話說，你冬天來的話一定要帶厚外套。'] }], targetPattern: 'L12-G6' },
        { id: 'L12-G6-EX4', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：投票率只有五成。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['換句話說，有一半的人沒有表達意見。'] }], targetPattern: 'L12-G6' },
        { id: 'L12-G6-EX5', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：房租加水電要佔他收入的一半。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['換句話說，他每個月能存的錢其實很少。'] }], targetPattern: 'L12-G6' }
      ]
    },
    {
      id: 'L12-G7', lessonId: 'L12', order: 7, pattern: '從…的角度來看',
      functionVi: '"從 A 的角度來看，B" nghĩa là nhìn từ góc độ hoặc lập trường A, thì B. Dùng để giới thiệu một cách nhìn nhận vấn đề. Gần "就…而言" nhưng "從…角度" nhấn vào "đứng ở vị trí nào để nhìn".',
      functionEn: '"從 A 的角度來看，B" means looking from the angle or standpoint of A, B. It introduces a perspective on an issue. Close to "就…而言" but "從…角度" stresses the vantage point.',
      examples: [
        { traditional: '從長遠的角度來看，年輕人願意去投票是好事。', simplified: '从长远的角度来看，年轻人愿意去投票是好事。', english: "From a long-term perspective, young people's willingness to vote is a good thing.", vietnamese: 'Nhìn từ góc độ lâu dài, việc người trẻ chịu đi bỏ phiếu là điều tốt.' },
        { traditional: '從店家的角度來看，網購搶走了不少客人。', simplified: '从店家的角度来看，网购抢走了不少客人。', english: "From the shops' point of view, online shopping has taken away many customers.", vietnamese: 'Nhìn từ góc độ của các cửa hàng, mua sắm online đã cướp đi không ít khách.' },
        { traditional: '從學生的角度來看，這樣的作業量太多了。', simplified: '从学生的角度来看，这样的作业量太多了。', english: "From the students' perspective, this workload is too much.", vietnamese: 'Nhìn từ góc độ của học sinh, khối lượng bài tập như vậy là quá nhiều.' },
        { traditional: '從環境的角度來看，過多的包裝是個大問題。', simplified: '从环境的角度来看，过多的包装是个大问题。', english: 'From an environmental standpoint, excessive packaging is a big problem.', vietnamese: 'Nhìn từ góc độ môi trường, bao bì quá nhiều là một vấn đề lớn.' },
        { traditional: '換個角度來看，這次失敗其實讓他學到很多。', simplified: '换个角度来看，这次失败其实让他学到很多。', english: 'Looking at it another way, this failure actually taught him a lot.', vietnamese: 'Nhìn từ góc độ khác, lần thất bại này thật ra dạy anh ấy nhiều điều.' }
      ],
      usageNotesVi: '"從…的角度來看" đứng đầu câu. Có thể rút gọn "從 N 來看" hoặc nói "換個角度（來）看". A thường là người hoặc nhóm người, hoặc một phương diện (長遠、環境、經濟).',
      exercises: [
        { id: 'L12-G7-EX1', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個決定對公司好嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['從省錢的角度來看是好的，可是從員工的角度來看不太公平。'] }], targetPattern: 'L12-G7' },
        { id: 'L12-G7-EX2', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：搬到郊區是不是比較不方便？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['從交通的角度來看的確不方便，可是從生活品質來看好很多。'] }], targetPattern: 'L12-G7' },
        { id: 'L12-G7-EX3', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你為什麼支持這個公投題目？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['從下一代的角度來看，現在做這個改變是值得的。'] }], targetPattern: 'L12-G7' },
        { id: 'L12-G7-EX4', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這次比賽輸了，是不是很糟？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['換個角度來看，我們發現了很多可以改進的地方。'] }], targetPattern: 'L12-G7' },
        { id: 'L12-G7-EX5', lessonId: 'L12', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：老闆為什麼不同意我們的提議？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['從成本的角度來看，我們的方案短期內花的錢太多了。'] }], targetPattern: 'L12-G7' }
      ]
    }
  ],

  workbookExercises: [
    {
      id: 'L12-WB-match-collocation', lessonId: 'L12', section: 'pairs', type: 'matching',
      prompt: 'Ghép danh từ với vị ngữ thường đi cùng (collocation).',
      pairs: [
        { left: '票', right: '投 (bỏ)' },
        { left: '票（結果）', right: '開 (kiểm)' },
        { left: '意見', right: '表達 (bày tỏ)' },
        { left: '政府', right: '監督 (giám sát)' },
        { left: '義務', right: '盡 (làm tròn)' },
        { left: '共識', right: '達成 (đạt được)' }
      ]
    },
    {
      id: 'L12-WB-match-response', lessonId: 'L12', section: 'pairs', type: 'matching',
      prompt: 'Nối mỗi tình huống (cột trái) với cách phản ứng phù hợp (cột phải).',
      pairs: [
        { left: '第一次要去投票', right: '先整理自己在意的議題再看政見' },
        { left: '看不懂候選人的政見', right: '找比較中立的整理來看' },
        { left: '覺得「一票沒用」', right: '想想如果大家都這樣想會怎樣' },
        { left: '選舉日不想排太久的隊', right: '為了保險起見，一早就去' },
        { left: '想關心公共事務又沒時間', right: '至少投票日去投一票' },
        { left: '選完想繼續參與', right: '平常也去了解、監督政策' }
      ]
    },

    { id: 'L12-WB-fw-1', lessonId: 'L12', section: 'fill-write', type: 'fill-blank', textWithBlanks: '星期六就要___(tóupiào)了，這次的___(xuǎnjǔ)除了選人，還有幾個___(gōngtóu)的題目。', blanks: [{ index: 0, acceptedAnswers: ['投票'] }, { index: 1, acceptedAnswers: ['選舉'] }, { index: 2, acceptedAnswers: ['公投'] }] },
    { id: 'L12-WB-fw-2', lessonId: 'L12', section: 'fill-write', type: 'fill-blank', textWithBlanks: '凡是有身分證、年滿二十歲的___(gōngmín)，都有___(tóupiàoquán)。', blanks: [{ index: 0, acceptedAnswers: ['公民'] }, { index: 1, acceptedAnswers: ['投票權'] }] },
    { id: 'L12-WB-fw-3', lessonId: 'L12', section: 'fill-write', type: 'fill-blank', textWithBlanks: '___(kāipiào)的時候，一票一票___(chàngpiào)出來，大家都看得到。', blanks: [{ index: 0, acceptedAnswers: ['開票'] }, { index: 1, acceptedAnswers: ['唱票'] }] },
    { id: 'L12-WB-fw-4', lessonId: 'L12', section: 'fill-write', type: 'fill-blank', textWithBlanks: '我看不太懂那些___(zhèngjiàn)，打算先___(zhěnglǐ)自己在意的___(yìtí)，再看誰的___(zhǔzhāng)比較接近。', blanks: [{ index: 0, acceptedAnswers: ['政見'] }, { index: 1, acceptedAnswers: ['整理'] }, { index: 2, acceptedAnswers: ['議題'] }, { index: 3, acceptedAnswers: ['主張'] }] },
    { id: 'L12-WB-fw-5', lessonId: 'L12', section: 'fill-write', type: 'fill-blank', textWithBlanks: '儘管一票很小，如果大家都不去，結果就會由___(shǎoshù)人決定。投票是我的___(quánlì)，也是一種___(yìwù)。', blanks: [{ index: 0, acceptedAnswers: ['少數'] }, { index: 1, acceptedAnswers: ['權利'] }, { index: 2, acceptedAnswers: ['義務'] }] },
    { id: 'L12-WB-fw-6', lessonId: 'L12', section: 'fill-write', type: 'fill-blank', textWithBlanks: '從___(chángyuǎn)的角度來看，年輕人願意___(cānyù)、去了解，對___(mínzhǔ)是好事。', blanks: [{ index: 0, acceptedAnswers: ['長遠'] }, { index: 1, acceptedAnswers: ['參與'] }, { index: 2, acceptedAnswers: ['民主'] }] },

    {
      id: 'L12-WB-fb-1', lessonId: 'L12', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền từ thích hợp vào đoạn văn (mỗi từ chỉ dùng 1 lần).',
      wordBank: ['政治', '投票率', '表達', '冷漠', '民意', '過程'],
      textWithBlanks: '台灣的定期選舉已經進行了三十幾年。對很多人來說，投票是1.___自己意見最直接的方式。可是近年來，年輕人的2.___比其他年齡層低。有人說這是因為年輕人對3.___不感興趣；也有人說，是因為他們覺得自己的聲音不會被聽見，久了就變得4.___。其實，選舉只是一個開始。選完以後，怎麼監督政府、怎麼讓5.___持續被聽到，是一個更長的6.___。民主不只是四年投一次票，而是一種需要一直練習的生活方式。',
      blanks: [
        { index: 1, acceptedAnswers: ['表達'] },
        { index: 2, acceptedAnswers: ['投票率'] },
        { index: 3, acceptedAnswers: ['政治'] },
        { index: 4, acceptedAnswers: ['冷漠'] },
        { index: 5, acceptedAnswers: ['民意'] },
        { index: 6, acceptedAnswers: ['過程'] }
      ]
    },

    {
      id: 'L12-WB-read-a1', lessonId: 'L12', section: 'reading', type: 'multiple-choice',
      prompt: '玉真：你決定要投給誰了嗎？\n安同：還沒。我打算把三個我最在意的議題列出來，看哪個候選人的主張最接近。',
      question: '安同打算怎麼決定投票對象？',
      options: [{ id: 'a', text: '聽爸媽的意見。' }, { id: 'b', text: '根據自己在意的議題來比較候選人的主張。' }, { id: 'c', text: '看哪個候選人比較有名。' }],
      correctOptionId: 'b',
      explanationVi: '"把三個我最在意的議題列出來，看哪個候選人的主張最接近".'
    },
    {
      id: 'L12-WB-read-a2', lessonId: 'L12', section: 'reading', type: 'multiple-choice',
      prompt: '高橋：我朋友說「反正一票也改變不了什麼」，就不去投了。\n陳敏萱：我懂他的想法。可是如果大家都這樣想，最後就會由少數願意去的人決定。',
      question: '陳敏萱的意思是：',
      options: [{ id: 'a', text: '她也覺得一票沒有用。' }, { id: 'b', text: '每個人放棄投票，反而讓少數人決定結果。' }, { id: 'c', text: '大家都應該投給同一個人。' }],
      correctOptionId: 'b',
      explanationVi: '"如果大家都這樣想，最後就會由少數願意去的人決定".'
    },
    {
      id: 'L12-WB-read-a3', lessonId: 'L12', section: 'reading', type: 'multiple-choice',
      prompt: '羅珊蒂：投票所裡面可以拍照嗎？\n陳敏萱：不行喔，圈選的地方不能拍，這是為了保護每個人投票的祕密。',
      question: '為什麼投票的地方不能拍照？',
      options: [{ id: 'a', text: '因為裡面光線不好。' }, { id: 'b', text: '為了保護每個人投票的祕密。' }, { id: 'c', text: '因為工作人員很忙。' }],
      correctOptionId: 'b',
      explanationVi: '"這是為了保護每個人投票的祕密".'
    },

    {
      id: 'L12-WB-read-b1', lessonId: 'L12', section: 'reading', type: 'multiple-choice',
      prompt: '台灣從一九九〇年代開始，人民可以直接選出自己的領導人和民意代表，定期的選舉已經進行了三十幾年。對許多人來說，選舉日是很重要的一天：這一天，每個滿二十歲的公民，不論身分、收入、教育程度，手上都只有一票，力量是一樣的。開票的時候，一票一票公開唱出來，結果大家都看得到。不過，近年來也有一些擔心。年輕人的投票率比其他年齡層低，有人認為這是政治冷漠，也有人認為是年輕人覺得自己的聲音很難被聽見。專家提醒，投票只是參與公共事務的第一步。選完以後，持續去了解政策、監督政府，才能讓自己的一票真正發揮作用。',
      question: '台灣人民從一九九〇年代開始可以直接選出自己的領導人。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"台灣從一九九〇年代開始，人民可以直接選出自己的領導人和民意代表".'
    },
    {
      id: 'L12-WB-read-b2', lessonId: 'L12', section: 'reading', type: 'multiple-choice',
      prompt: '台灣從一九九〇年代開始，人民可以直接選出自己的領導人和民意代表，定期的選舉已經進行了三十幾年。對許多人來說，選舉日是很重要的一天：這一天，每個滿二十歲的公民，不論身分、收入、教育程度，手上都只有一票，力量是一樣的。開票的時候，一票一票公開唱出來，結果大家都看得到。不過，近年來也有一些擔心。年輕人的投票率比其他年齡層低，有人認為這是政治冷漠，也有人認為是年輕人覺得自己的聲音很難被聽見。專家提醒，投票只是參與公共事務的第一步。選完以後，持續去了解政策、監督政府，才能讓自己的一票真正發揮作用。',
      question: '在選舉日，收入高的人手上的票比較多。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"不論身分、收入、教育程度，手上都只有一票，力量是一樣的".'
    },
    {
      id: 'L12-WB-read-b3', lessonId: 'L12', section: 'reading', type: 'multiple-choice',
      prompt: '台灣從一九九〇年代開始，人民可以直接選出自己的領導人和民意代表，定期的選舉已經進行了三十幾年。對許多人來說，選舉日是很重要的一天：這一天，每個滿二十歲的公民，不論身分、收入、教育程度，手上都只有一票，力量是一樣的。開票的時候，一票一票公開唱出來，結果大家都看得到。不過，近年來也有一些擔心。年輕人的投票率比其他年齡層低，有人認為這是政治冷漠，也有人認為是年輕人覺得自己的聲音很難被聽見。專家提醒，投票只是參與公共事務的第一步。選完以後，持續去了解政策、監督政府，才能讓自己的一票真正發揮作用。',
      question: '開票的過程是不公開的，一般人看不到。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"一票一票公開唱出來，結果大家都看得到".'
    },
    {
      id: 'L12-WB-read-b4', lessonId: 'L12', section: 'reading', type: 'multiple-choice',
      prompt: '台灣從一九九〇年代開始，人民可以直接選出自己的領導人和民意代表，定期的選舉已經進行了三十幾年。對許多人來說，選舉日是很重要的一天：這一天，每個滿二十歲的公民，不論身分、收入、教育程度，手上都只有一票，力量是一樣的。開票的時候，一票一票公開唱出來，結果大家都看得到。不過，近年來也有一些擔心。年輕人的投票率比其他年齡層低，有人認為這是政治冷漠，也有人認為是年輕人覺得自己的聲音很難被聽見。專家提醒，投票只是參與公共事務的第一步。選完以後，持續去了解政策、監督政府，才能讓自己的一票真正發揮作用。',
      question: '近年來年輕人的投票率比其他年齡層低。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"年輕人的投票率比其他年齡層低".'
    },
    {
      id: 'L12-WB-read-b5', lessonId: 'L12', section: 'reading', type: 'multiple-choice',
      prompt: '台灣從一九九〇年代開始，人民可以直接選出自己的領導人和民意代表，定期的選舉已經進行了三十幾年。對許多人來說，選舉日是很重要的一天：這一天，每個滿二十歲的公民，不論身分、收入、教育程度，手上都只有一票，力量是一樣的。開票的時候，一票一票公開唱出來，結果大家都看得到。不過，近年來也有一些擔心。年輕人的投票率比其他年齡層低，有人認為這是政治冷漠，也有人認為是年輕人覺得自己的聲音很難被聽見。專家提醒，投票只是參與公共事務的第一步。選完以後，持續去了解政策、監督政府，才能讓自己的一票真正發揮作用。',
      question: '專家認為投票就是參與公共事務的全部。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"投票只是參與公共事務的第一步".'
    },

    {
      id: 'L12-WB-read-c1', lessonId: 'L12', section: 'reading', type: 'multiple-choice',
      prompt: '【選舉日 溫馨提醒】投票時間為上午八點到下午四點。請攜帶身分證、印章和投票通知單。投票所內請保持安靜，圈選處禁止拍照及使用手機。另外，本區多家早餐店、咖啡廳於當日推出「憑投票紀念章享九折」的活動，歡迎大家投完票順便吃頓早餐，把民主變成一件輕鬆的事。',
      question: '去投票要帶哪些東西？',
      options: [{ id: 'a', text: '只要帶身分證就好。' }, { id: 'b', text: '身分證、印章和投票通知單。' }, { id: 'c', text: '帶投票通知單和一支手機就好。' }],
      correctOptionId: 'b',
      explanationVi: '"請攜帶身分證、印章和投票通知單".'
    },
    {
      id: 'L12-WB-read-c2', lessonId: 'L12', section: 'reading', type: 'multiple-choice',
      prompt: '【選舉日 溫馨提醒】投票時間為上午八點到下午四點。請攜帶身分證、印章和投票通知單。投票所內請保持安靜，圈選處禁止拍照及使用手機。另外，本區多家早餐店、咖啡廳於當日推出「憑投票紀念章享九折」的活動，歡迎大家投完票順便吃頓早餐，把民主變成一件輕鬆的事。',
      question: '當天早餐店的優惠是給誰的？',
      options: [{ id: 'a', text: '所有客人。' }, { id: 'b', text: '憑投票紀念章的人。' }, { id: 'c', text: '只有第一次投票的人。' }],
      correctOptionId: 'b',
      explanationVi: '"憑投票紀念章享九折".'
    },

    { id: 'L12-WB-dc-1', lessonId: 'L12', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L12-G1', turns: [{ speaker: 'A', text: '什麼人可以投票？', isBlank: false }, { speaker: 'B', text: '（凡是…都…）', isBlank: true }], sampleAnswer: '凡是有身分證、年滿二十歲的人，都可以去投票。' },
    { id: 'L12-WB-dc-2', lessonId: 'L12', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L12-G2', turns: [{ speaker: 'A', text: '你覺得這次的選舉辦得怎麼樣？', isBlank: false }, { speaker: 'B', text: '（就…而言）', isBlank: true }], sampleAnswer: '就開票的公開程度而言，我覺得辦得很好。' },
    { id: 'L12-WB-dc-3', lessonId: 'L12', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L12-G4', turns: [{ speaker: 'A', text: '你怎麼一早就要去投票？', isBlank: false }, { speaker: 'B', text: '（為…起見）', isBlank: true }], sampleAnswer: '為了保險起見，我想早點去，免得下午排太久。' },
    { id: 'L12-WB-dc-4', lessonId: 'L12', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L12-G5', turns: [{ speaker: 'A', text: '反正一票也不會改變結果吧？', isBlank: false }, { speaker: 'B', text: '（儘管…還是…）', isBlank: true }], sampleAnswer: '儘管一票很小，我還是想把自己的意見表達出來。' },
    { id: 'L12-WB-dc-5', lessonId: 'L12', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L12-G7', turns: [{ speaker: 'A', text: '年輕人不投票，有這麼嚴重嗎？', isBlank: false }, { speaker: 'B', text: '（從…的角度來看）', isBlank: true }], sampleAnswer: '從長遠的角度來看，如果一整代人都不參與，政策就很難照顧到他們。' },

    {
      id: 'L12-WB-comp-1', lessonId: 'L12', section: 'composition', type: 'composition',
      topicVi: 'Ở nước bạn, người dân tham gia vào các vấn đề công cộng (bầu cử, ý kiến chính sách...) như thế nào? Bạn từng tham gia chưa, hoặc bạn nghĩ vì sao việc đó quan trọng hay không?',
      requiredWords: ['L12-001', 'L12-002', 'L12-005', 'L12-008', 'L12-021', 'L12-022', 'L12-023', 'L12-024'],
      requiredPatterns: ['L12-G1', 'L12-G3', 'L12-G4'],
      minLength: 200, maxLength: 250
    },
    {
      id: 'L12-WB-comp-2', lessonId: 'L12', section: 'composition', type: 'composition',
      topicVi: 'Có ý kiến cho rằng "một lá phiếu chẳng thay đổi được gì" nên nhiều người trẻ không đi bầu. Bạn đồng ý hay phản đối? Vì sao?',
      requiredWords: ['L12-014', 'L12-015', 'L12-029', 'L12-030', 'L12-036', 'L12-038', 'L12-041', 'L12-044'],
      requiredPatterns: ['L12-G2', 'L12-G5', 'L12-G7'],
      minLength: 200, maxLength: 250
    }
  ]
}
