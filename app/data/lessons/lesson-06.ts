import type { Lesson } from '../../../types/lesson'

export const lesson06: Lesson = {
  id: 'L6',
  number: 6,
  titleTraditional: '到鄉下住一晚！',
  titleSimplified: '到乡下住一晚！',
  titlePinyin: 'Dào xiāngxià zhù yì wǎn!',
  titleVi: 'Về nông thôn ở một đêm!',
  status: 'available',

  dialogues: [
    [
      { speaker: '', traditional: '（李文彥帶朋友安德思、羅珊蒂去鄉下表哥家）', simplified: '（李文彦带朋友安德思、罗珊蒂去乡下表哥家）', pinyin: '(Lǐ Wényàn dài péngyǒu Āndésī, Luó Shāndì qù xiāngxià biǎogē jiā)', english: "(Li Wenyan takes his friends An Desi and Luo Shandi to his cousin's house in the country)", vietnamese: '(Lý Văn Ngạn dẫn bạn An Đức Tư, La San Đế về nhà anh họ ở quê)' },
      { speaker: '表哥', traditional: '歡迎、歡迎。大家隨便坐。這是剛摘下來的芒果，大家嚐嚐。', simplified: '欢迎、欢迎。大家随便坐。这是刚摘下来的芒果，大家尝尝。', pinyin: 'Huānyíng, huānyíng. Dàjiā suíbiàn zuò. Zhè shì gāng zhāi xiàlái de mángguǒ, dàjiā chángcháng.', english: 'Welcome, welcome. Sit wherever you like. These are freshly picked mangoes. Have a taste.', vietnamese: 'Hoan nghênh, hoan nghênh. Mọi người cứ ngồi thoải mái. Đây là xoài vừa mới hái, mọi người nếm thử đi.' },
      { speaker: '李文彥', traditional: '很好吃吧？我表哥除了芒果以外，還種了很多有機蔬菜。他是現代農夫。', simplified: '很好吃吧？我表哥除了芒果以外，还种了很多有机蔬菜。他是现代农夫。', pinyin: 'Hěn hǎochī ba? Wǒ biǎogē chúle mángguǒ yǐwài, hái zhòng le hěn duō yǒujī shūcài. Tā shì xiàndài nóngfū.', english: "Really tasty, right? In addition to mangoes, my cousin has planted a lot of organic vegetables. He's a modern farmer.", vietnamese: 'Ngon đúng không? Anh họ mình ngoài xoài ra còn trồng rất nhiều rau hữu cơ. Anh ấy là nông dân hiện đại.' },
      { speaker: '安德思', traditional: '為什麼說他是現代農夫？', simplified: '为什么说他是现代农夫？', pinyin: 'Wèishénme shuō tā shì xiàndài nóngfū?', english: "Why do you say he's a modern farmer?", vietnamese: 'Sao lại nói anh ấy là nông dân hiện đại?' },
      { speaker: '李文彥', traditional: '因為他跟傳統農夫很不一樣。為了減少對環境的汙染，他不用農藥，而且只用天然堆肥，大家可以放心地吃。', simplified: '因为他跟传统农夫很不一样。为了减少对环境的污染，他不用农药，而且只用天然堆肥，大家可以放心地吃。', pinyin: 'Yīnwèi tā gēn chuántǒng nóngfū hěn bù yíyàng. Wèile jiǎnshǎo duì huánjìng de wūrǎn, tā bú yòng nóngyào, érqiě zhǐ yòng tiānrán duīféi, dàjiā kěyǐ fàngxīn de chī.', english: "Because he's very different from traditional farmers. In order to reduce environmental pollution, he doesn't use pesticides and only uses natural compost. People can eat with their minds at ease.", vietnamese: 'Vì anh ấy rất khác với nông dân truyền thống. Để giảm ô nhiễm môi trường, anh ấy không dùng thuốc trừ sâu, mà chỉ dùng phân hữu cơ tự nhiên, mọi người có thể yên tâm ăn.' },
      { speaker: '安德思', traditional: '當農夫不是很辛苦嗎？你為什麼要當農夫？', simplified: '当农夫不是很辛苦吗？你为什么要当农夫？', pinyin: 'Dāng nóngfū bú shì hěn xīnkǔ ma? Nǐ wèishénme yào dāng nóngfū?', english: "Isn't being a farmer tough? Why did you want to become a farmer?", vietnamese: 'Làm nông dân chẳng phải rất vất vả sao? Sao anh lại muốn làm nông dân?' },
      { speaker: '表哥', traditional: '我本來在大學教書，因為看到父母年紀大了，做不動了，才決定回來幫忙的。', simplified: '我本来在大学教书，因为看到父母年纪大了，做不动了，才决定回来帮忙的。', pinyin: 'Wǒ běnlái zài dàxué jiāoshū, yīnwèi kàndào fùmǔ niánjì dà le, zuò bú dòng le, cái juédìng huílái bāngmáng de.', english: "I used to teach in university. It was only because I saw that my parents were old and couldn't work that I decided to come back and help out.", vietnamese: 'Anh vốn dạy học ở đại học, vì thấy cha mẹ đã lớn tuổi, làm không nổi nữa, nên mới quyết định về giúp đỡ.' },
      { speaker: '羅珊蒂', traditional: '你家人不反對你回來嗎？', simplified: '你家人不反对你回来吗？', pinyin: 'Nǐ jiārén bù fǎnduì nǐ huílái ma?', english: "Your family didn't oppose you returning?", vietnamese: 'Người nhà anh không phản đối anh về à?' },
      { speaker: '表哥', traditional: '當然反對。農夫在台灣的社會地位不高，工作辛苦不說，收入也不穩定，父母都希望孩子有更好的發展。', simplified: '当然反对。农夫在台湾的社会地位不高，工作辛苦不说，收入也不稳定，父母都希望孩子有更好的发展。', pinyin: 'Dāngrán fǎnduì. Nóngfū zài Táiwān de shèhuì dìwèi bù gāo, gōngzuò xīnkǔ bù shuō, shōurù yě bù wěndìng, fùmǔ dōu xīwàng háizi yǒu gèng hǎo de fāzhǎn.', english: "Of course they were against it. The social status of farmers in Taiwan isn't high. The hard work aside, you don't have a stable income. Parents all hope that their children have better careers than themselves.", vietnamese: 'Đương nhiên là phản đối. Vị thế xã hội của nông dân ở Đài Loan không cao, công việc vất vả đã đành, thu nhập còn không ổn định, cha mẹ nào cũng mong con cái có tương lai tốt hơn.' },
      { speaker: '羅珊蒂', traditional: '怎麼會呢？超市的有機蔬菜都貴得不得了。', simplified: '怎么会呢？超市的有机蔬菜都贵得不得了。', pinyin: 'Zěnme huì ne? Chāoshì de yǒujī shūcài dōu guì de bùdéliǎo.', english: 'How is that possible? Organic vegetables in the supermarket are all incredibly expensive.', vietnamese: 'Sao lại thế được? Rau hữu cơ ở siêu thị đắt kinh khủng mà.' },
      { speaker: '表哥', traditional: '賣給超市，農夫的利潤很低，可是自己賣的話，問題更多。今天不談這個。天氣這麼好，別一直待在屋子裡，我們出去走走吧。', simplified: '卖给超市，农夫的利润很低，可是自己卖的话，问题更多。今天不谈这个。天气这么好，别一直待在屋子里，我们出去走走吧。', pinyin: 'Mài gěi chāoshì, nóngfū de lìrùn hěn dī, kěshì zìjǐ mài dehuà, wèntí gèng duō. Jīntiān bù tán zhège. Tiānqì zhème hǎo, bié yìzhí dāi zài wūzi lǐ, wǒmen chūqù zǒuzǒu ba.', english: "Farmers' profits are low when they sell to supermarkets, but if you sell them yourself, you have even more problems. Let's not talk about this today. The weather is so good; we shouldn't stay inside all day. Let's go out and walk around.", vietnamese: 'Bán cho siêu thị thì lợi nhuận nông dân rất thấp, nhưng tự bán thì vấn đề lại càng nhiều. Hôm nay không nói chuyện này nữa. Trời đẹp thế này, đừng cứ ở mãi trong nhà, mình ra ngoài đi dạo đi.' },
      { speaker: '', traditional: '（到了屋外）', simplified: '（到了屋外）', pinyin: '(Dào le wūwài)', english: '(Outside)', vietnamese: '(Ra đến ngoài sân)' },
      { speaker: '安德思', traditional: '這些番茄真漂亮！', simplified: '这些番茄真漂亮！', pinyin: 'Zhèxiē fānqié zhēn piàoliang!', english: 'These tomatoes are really pretty!', vietnamese: 'Mấy quả cà chua này đẹp thật!' },
      { speaker: '表哥', traditional: '這不是基因改造的，是新品種。今年氣候特別好，再加上沒有颱風，所以青菜水果都長得很好。', simplified: '这不是基因改造的，是新品种。今年气候特别好，再加上没有台风，所以青菜水果都长得很好。', pinyin: 'Zhè bú shì jīyīn gǎizào de, shì xīn pǐnzhǒng. Jīnnián qìhòu tèbié hǎo, zài jiāshàng méiyǒu táifēng, suǒyǐ qīngcài shuǐguǒ dōu zhǎng de hěn hǎo.', english: "These aren't genetically modified. It's a new variety. The climate has been especially good this year, plus there haven't been any typhoons, so the vegetables and fruit have grown really well.", vietnamese: 'Đây không phải loại biến đổi gen, mà là giống mới. Năm nay khí hậu đặc biệt tốt, lại thêm không có bão, nên rau củ quả đều lớn rất tốt.' },
      { speaker: '安德思', traditional: '這些番茄熟了嗎？', simplified: '这些番茄熟了吗？', pinyin: 'Zhèxiē fānqié shóu le ma?', english: 'Are these tomatoes ripe?', vietnamese: 'Mấy quả cà chua này chín chưa?' },
      { speaker: '表哥', traditional: '熟了，熟了，摘下來就可以吃。這些番茄都是有機的，不必洗。', simplified: '熟了，熟了，摘下来就可以吃。这些番茄都是有机的，不必洗。', pinyin: 'Shóu le, shóu le, zhāi xiàlái jiù kěyǐ chī. Zhèxiē fānqié dōu shì yǒujī de, búbì xǐ.', english: "Yes, they're ripe. You can eat them right off the plant. These tomatoes are organic, no need to wash them.", vietnamese: 'Chín rồi, chín rồi, hái xuống là ăn được luôn. Mấy quả cà chua này đều hữu cơ, không cần rửa.' },
      { speaker: '安德思', traditional: '這麼大的一片田，你一個人照顧，忙得過來嗎？', simplified: '这么大的一片田，你一个人照顾，忙得过来吗？', pinyin: 'Zhème dà de yí piàn tián, nǐ yí ge rén zhàogù, máng de guòlái ma?', english: "Such a large plot of land. Can you manage it all alone?", vietnamese: 'Thửa ruộng rộng thế này, một mình anh chăm sóc, xoay xở nổi không?' },
      { speaker: '表哥', traditional: '平常還好，可是收成的時候，很難找到人幫忙。', simplified: '平常还好，可是收成的时候，很难找到人帮忙。', pinyin: 'Píngcháng hái hǎo, kěshì shōuchéng de shíhòu, hěn nán zhǎodào rén bāngmáng.', english: "Generally, it's not a problem, but during harvest time, it's hard to find people to help.", vietnamese: 'Bình thường thì ổn, nhưng đến mùa thu hoạch thì rất khó tìm người giúp.' },
      { speaker: '李文彥', traditional: '這幾年，回鄉下種田的年輕人不是很多嗎？', simplified: '这几年，回乡下种田的年轻人不是很多吗？', pinyin: 'Zhè jǐ nián, huí xiāngxià zhòngtián de niánqīngrén bú shì hěn duō ma?', english: "Over the past few years, haven't a lot of young people been returning to the countryside to till the land?", vietnamese: 'Mấy năm nay, chẳng phải có nhiều người trẻ về quê làm ruộng hay sao?' },
      { speaker: '表哥', traditional: '忙的時候，大家都一樣，連自己的事都做不完，怎麼有時間幫別人的忙？', simplified: '忙的时候，大家都一样，连自己的事都做不完，怎么有时间帮别人的忙？', pinyin: 'Máng de shíhòu, dàjiā dōu yíyàng, lián zìjǐ de shì dōu zuò bù wán, zěnme yǒu shíjiān bāng biérén de máng?', english: "When it's busy, everybody's the same. You can't even finish your own work. How can you have time to help others?", vietnamese: 'Lúc bận rộn, ai cũng như ai, đến việc của mình còn làm không xong, lấy đâu thời gian giúp người khác?' },
      { speaker: '羅珊蒂', traditional: '你怎麼不找個太太來幫你？', simplified: '你怎么不找个太太来帮你？', pinyin: 'Nǐ zěnme bù zhǎo ge tàitai lái bāng nǐ?', english: "Why don't you get married and have your wife help you?", vietnamese: 'Sao anh không tìm một bà vợ để giúp anh?' },
      { speaker: '李文彥', traditional: '妳這問題問得真好。我表哥什麼都有，就是少了一個太太。', simplified: '妳这问题问得真好。我表哥什么都有，就是少了一个太太。', pinyin: 'Nǐ zhè wèntí wèn de zhēn hǎo. Wǒ biǎogē shénme dōu yǒu, jiùshì shǎo le yí ge tàitai.', english: 'This is a really good question. My cousin has everything, except a wife.', vietnamese: 'Câu hỏi của cậu hay thật đấy. Anh họ mình cái gì cũng có, chỉ thiếu mỗi một bà vợ thôi.' },
      { speaker: '表哥', traditional: '別開玩笑了。農夫看天吃飯，收入這麼不穩定，怎麼敢結婚？', simplified: '别开玩笑了。农夫看天吃饭，收入这么不稳定，怎么敢结婚？', pinyin: 'Bié kāi wánxiào le. Nóngfū kàntiān chīfàn, shōurù zhème bù wěndìng, zěnme gǎn jiéhūn?', english: "Kidding aside, a farmer's livelihood depends on the whims of nature and the income is so unpredictable. How can one even think about getting married?", vietnamese: 'Đừng đùa nữa. Nông dân sống nhờ trời, thu nhập bấp bênh thế này, làm sao dám cưới vợ?' },
      { speaker: '羅珊蒂', traditional: '表哥，你條件這麼好，我給你介紹一個，怎麼樣？', simplified: '表哥，你条件这么好，我给你介绍一个，怎么样？', pinyin: 'Biǎogē, nǐ tiáojiàn zhème hǎo, wǒ gěi nǐ jièshào yí ge, zěnmeyàng?', english: "Cousin, you've got so much going for you. I'll introduce a girl to you. What do you think?", vietnamese: 'Anh họ ơi, điều kiện anh tốt vậy, em giới thiệu cho anh một cô, được không?' },
      { speaker: '表哥', traditional: '以後再說吧！天黑了，我們快回去吃飯。', simplified: '以后再说吧！天黑了，我们快回去吃饭。', pinyin: 'Yǐhòu zài shuō ba! Tiān hēi le, wǒmen kuài huíqù chīfàn.', english: "Maybe later. It's getting dark. Let's go back and eat.", vietnamese: 'Để sau hẵng tính! Trời tối rồi, mình mau về ăn cơm thôi.' }
    ]
  ],

  shortReading: {
    traditional:
      '現代小農\n\n　　星期天一大早，何雅婷就陪著媽媽到農夫市集去買菜。最近食品安全出了好幾次問題，何雅婷的媽媽為了家人的健康，開始注意食材的產地，也盡量到有機商店和農夫市集買菜。雖然這些地方賣的東西種類沒有市場那麼多，價錢也比較高，可是媽媽常跟農夫聊天，了解小農用友善的方式對待土地和環境，很信任他們，所以寧可每個星期跑一趟，多花一點錢，也要支持小農。\n\n　　像何雅婷媽媽這樣關心小農的人越來越多。有人寫文章介紹小農種的蔬菜水果，有人到處幫小農推銷，其中最有名的是一位麵包師傅。他從小在農村長大，了解農夫的辛苦。為了幫助小農，也為了幫自己的產品找更好的食材，他常常拜訪小農，用他們出產的食材做出受歡迎的麵包。\n\n　　由於報紙、網路的介紹，許多住在城市裡的人開始羨慕小農的生活。他們利用放假的時候，帶著孩子到農村去，一方面可以讓孩子在田裡跑跑跳跳，接近自然，一方面自己也可以放鬆心情。到鄉下住一晚變成了現在熱門的休閒活動。\n\n　　隨著小農越來越受重視，到農村來觀光的人也慢慢地多起來了，連便利商店都來了。以前當地人習慣自己做飯，或是到傳統的小商店和小吃店消費，現在便利商店更方便也更吸引他們。傳統的小店生意受到了影響，原來安靜的農村有了很大的變化。現在農人擔心的是傳統的生活方式會不會消失。',
    simplified:
      '现代小农\n\n　　星期天一大早，何雅婷就陪着妈妈到农夫市集去买菜。最近食品安全出了好几次问题，何雅婷的妈妈为了家人的健康，开始注意食材的产地，也尽量到有机商店和农夫市集买菜。虽然这些地方卖的东西种类没有市场那么多，价钱也比较高，可是妈妈常跟农夫聊天，了解小农用友善的方式对待土地和环境，很信任他们，所以宁可每个星期跑一趟，多花一点钱，也要支持小农。\n\n　　像何雅婷妈妈这样关心小农的人越来越多。有人写文章介绍小农种的蔬菜水果，有人到处帮小农推销，其中最有名的是一位面包师傅。他从小在农村长大，了解农夫的辛苦。为了帮助小农，也为了帮自己的产品找更好的食材，他常常拜访小农，用他们出产的食材做出受欢迎的面包。\n\n　　由于报纸、网路的介绍，许多住在城市里的人开始羡慕小农的生活。他们利用放假的时候，带着孩子到农村去，一方面可以让孩子在田里跑跑跳跳，接近自然，一方面自己也可以放松心情。到乡下住一晚变成了现在热门的休闲活动。\n\n　　随着小农越来越受重视，到农村来观光的人也慢慢地多起来了，连便利商店都来了。以前当地人习惯自己做饭，或是到传统的小商店和小吃店消费，现在便利商店更方便也更吸引他们。传统的小店生意受到了影响，原来安静的农村有了很大的变化。现在农人担心的是传统的生活方式会不会消失。',
    vietnamese:
      'Tiểu nông hiện đại\n\nSáng sớm chủ nhật, Hà Nhã Đình cùng mẹ đến chợ nông dân mua rau. Gần đây thực phẩm liên tục gặp vấn đề về an toàn, vì sức khỏe gia đình, mẹ của Nhã Đình bắt đầu chú ý đến nguồn gốc thực phẩm, cũng cố gắng đến các cửa hàng hữu cơ và chợ nông dân để mua đồ. Tuy những nơi này không có nhiều chủng loại như chợ thường, giá cả cũng cao hơn, nhưng mẹ cô thích trò chuyện với nông dân, tìm hiểu cách họ đối xử thân thiện với đất đai và môi trường, rất tin tưởng họ, nên thà mỗi tuần chạy một chuyến, tốn thêm chút tiền, cũng muốn ủng hộ tiểu nông.\n\nNhững người quan tâm đến tiểu nông như mẹ của Nhã Đình ngày càng nhiều. Có người viết bài giới thiệu rau quả do tiểu nông trồng, có người đi khắp nơi giúp tiểu nông quảng bá sản phẩm, trong đó nổi tiếng nhất là một người thợ làm bánh mì. Anh lớn lên ở nông thôn, hiểu rõ nỗi vất vả của nông dân. Để giúp đỡ tiểu nông, đồng thời tìm nguyên liệu tốt hơn cho sản phẩm của mình, anh thường xuyên đến thăm các tiểu nông, dùng nông sản của họ làm ra những ổ bánh mì được yêu thích.\n\nNhờ báo chí và mạng internet giới thiệu, nhiều người sống ở thành phố bắt đầu ngưỡng mộ cuộc sống của tiểu nông. Họ tận dụng ngày nghỉ, đưa con về nông thôn, một mặt để con chạy nhảy ngoài ruộng, gần gũi thiên nhiên, mặt khác bản thân cũng được thư giãn tinh thần. Về quê ở một đêm đã trở thành hoạt động giải trí thịnh hành hiện nay.\n\nCùng với việc tiểu nông ngày càng được coi trọng, số người đến nông thôn tham quan cũng dần dần tăng lên, thậm chí cả cửa hàng tiện lợi cũng xuất hiện. Trước đây người địa phương quen tự nấu ăn, hoặc tiêu dùng ở các tiệm nhỏ và quán ăn truyền thống, nay cửa hàng tiện lợi tiện dụng hơn nên thu hút họ nhiều hơn. Việc buôn bán của các tiệm nhỏ truyền thống bị ảnh hưởng, vùng nông thôn vốn yên tĩnh đã có nhiều thay đổi lớn. Giờ đây điều nông dân lo lắng là liệu lối sống truyền thống có biến mất hay không.'
  },

  phrases: [
    { phraseTraditional: '摘下來', phraseSimplified: '摘下来', pinyin: 'zhāi xiàlái', meaningVi: 'hái xuống' },
    { phraseTraditional: '做不動', phraseSimplified: '做不动', pinyin: 'zuò bú dòng', meaningVi: 'không còn sức làm (do già yếu)' },
    { phraseTraditional: '基因改造', phraseSimplified: '基因改造', pinyin: 'jīyīn gǎizào', meaningVi: 'biến đổi gen (GMO)' },
    { phraseTraditional: '忙得過來', phraseSimplified: '忙得过来', pinyin: 'máng de guòlái', meaningVi: 'bận mà vẫn xoay xở kịp' },
    { phraseTraditional: '開玩笑', phraseSimplified: '开玩笑', pinyin: 'kāi wánxiào', meaningVi: 'nói đùa, giỡn chơi' },
    { phraseTraditional: '看天吃飯', phraseSimplified: '看天吃饭', pinyin: 'kàntiān chīfàn', meaningVi: 'sống nhờ trời, thu nhập bấp bênh theo thời tiết' },
    { phraseTraditional: '出問題', phraseSimplified: '出问题', pinyin: 'chū wèntí', meaningVi: 'gặp vấn đề, trục trặc' },
    { phraseTraditional: '一方面…一方面', phraseSimplified: '一方面…一方面', pinyin: 'yì fāngmiàn… yì fāngmiàn', meaningVi: 'một mặt… mặt khác…' },
    { phraseTraditional: '社會地位', phraseSimplified: '社会地位', pinyin: 'shèhuì dìwèi', meaningVi: 'địa vị / vị thế xã hội' },
    { phraseTraditional: '貴得不得了', phraseSimplified: '贵得不得了', pinyin: 'guì de bùdéliǎo', meaningVi: 'đắt kinh khủng' },
    { phraseTraditional: '天然堆肥', phraseSimplified: '天然堆肥', pinyin: 'tiānrán duīféi', meaningVi: 'phân bón hữu cơ tự nhiên' },
    { phraseTraditional: '隨便坐', phraseSimplified: '随便坐', pinyin: 'suíbiàn zuò', meaningVi: 'ngồi tùy ý, cứ tự nhiên' },
    { phraseTraditional: '小農', phraseSimplified: '小农', pinyin: 'xiǎonóng', meaningVi: 'tiểu nông, nông dân quy mô nhỏ' },
    { phraseTraditional: '盡量', phraseSimplified: '尽量', pinyin: 'jìnliàng', meaningVi: 'cố gắng hết sức' },
    { phraseTraditional: '友善對待', phraseSimplified: '友善对待', pinyin: 'yǒushàn duìdài', meaningVi: 'đối xử thân thiện' }
  ],

  vocab: [
    { id: 'L6-001', lessonId: 'L6', order: 1, group: 'vocab1', traditional: '表哥', simplified: '表哥', pinyin: 'biǎogē', wordClass: ['N'], meaningVi: 'anh họ (con trai của cô, dì, chú hoặc bác bên ngoại, lớn tuổi hơn)', meaningEn: 'cousin (older male cousin, from a female lineage)', examples: [{ traditional: '我表哥除了芒果以外，還種了很多有機蔬菜。', simplified: '我表哥除了芒果以外，还种了很多有机蔬菜。', vietnamese: 'Anh họ mình ngoài xoài ra còn trồng rất nhiều rau hữu cơ.' }] },
    { id: 'L6-002', lessonId: 'L6', order: 2, group: 'vocab1', traditional: '隨便', simplified: '随便', pinyin: 'suíbiàn', wordClass: ['Adv'], meaningVi: 'tùy ý, tự nhiên, thoải mái', meaningEn: 'as one pleases, freely', examples: [{ traditional: '歡迎、歡迎。大家隨便坐。', simplified: '欢迎、欢迎。大家随便坐。', vietnamese: 'Hoan nghênh, hoan nghênh. Mọi người cứ ngồi thoải mái.' }] },
    { id: 'L6-003', lessonId: 'L6', order: 3, group: 'vocab1', traditional: '種', simplified: '种', pinyin: 'zhòng', wordClass: ['V'], meaningVi: 'trồng', meaningEn: 'to plant, to grow', examples: [{ traditional: '我表哥除了芒果以外，還種了很多有機蔬菜。', simplified: '我表哥除了芒果以外，还种了很多有机蔬菜。', vietnamese: 'Anh họ mình ngoài xoài ra còn trồng rất nhiều rau hữu cơ.' }] },
    { id: 'L6-004', lessonId: 'L6', order: 4, group: 'vocab1', traditional: '蔬菜', simplified: '蔬菜', pinyin: 'shūcài', wordClass: ['N'], meaningVi: 'rau củ', meaningEn: 'vegetable', tags: ['am-thuc'], examples: [{ traditional: '我表哥還種了很多有機蔬菜。', simplified: '我表哥还种了很多有机蔬菜。', vietnamese: 'Anh họ mình còn trồng rất nhiều rau hữu cơ.' }] },
    { id: 'L6-005', lessonId: 'L6', order: 5, group: 'vocab1', traditional: '農夫', simplified: '农夫', pinyin: 'nóngfū', wordClass: ['N'], meaningVi: 'nông dân', meaningEn: 'farmer', tags: ['nong-nghiep'], examples: [{ traditional: '他是現代農夫。', simplified: '他是现代农夫。', vietnamese: 'Anh ấy là nông dân hiện đại.' }] },
    { id: 'L6-006', lessonId: 'L6', order: 6, group: 'vocab1', traditional: '減少', simplified: '减少', pinyin: 'jiǎnshǎo', wordClass: ['V'], meaningVi: 'giảm bớt', meaningEn: 'to reduce, to decrease', examples: [{ traditional: '為了減少對環境的汙染，他不用農藥。', simplified: '为了减少对环境的污染，他不用农药。', vietnamese: 'Để giảm ô nhiễm môi trường, anh ấy không dùng thuốc trừ sâu.' }] },
    { id: 'L6-007', lessonId: 'L6', order: 7, group: 'vocab1', traditional: '農藥', simplified: '农药', pinyin: 'nóngyào', wordClass: ['N'], meaningVi: 'thuốc trừ sâu', meaningEn: 'pesticide', tags: ['nong-nghiep'], examples: [{ traditional: '他不用農藥，而且只用天然堆肥。', simplified: '他不用农药，而且只用天然堆肥。', vietnamese: 'Anh ấy không dùng thuốc trừ sâu, mà chỉ dùng phân hữu cơ tự nhiên.' }] },
    { id: 'L6-008', lessonId: 'L6', order: 8, group: 'vocab1', traditional: '天然', simplified: '天然', pinyin: 'tiānrán', wordClass: ['Vs-attr'], meaningVi: 'tự nhiên, thiên nhiên', meaningEn: 'natural', examples: [{ traditional: '他只用天然堆肥。', simplified: '他只用天然堆肥。', vietnamese: 'Anh ấy chỉ dùng phân hữu cơ tự nhiên.' }] },
    { id: 'L6-009', lessonId: 'L6', order: 9, group: 'vocab1', traditional: '堆肥', simplified: '堆肥', pinyin: 'duīféi', wordClass: ['N'], meaningVi: 'phân hữu cơ, phân ủ', meaningEn: 'compost', tags: ['nong-nghiep'], examples: [{ traditional: '他只用天然堆肥，大家可以放心地吃。', simplified: '他只用天然堆肥，大家可以放心地吃。', vietnamese: 'Anh ấy chỉ dùng phân hữu cơ tự nhiên, mọi người có thể yên tâm ăn.' }] },
    { id: 'L6-010', lessonId: 'L6', order: 10, group: 'vocab1', traditional: '辛苦', simplified: '辛苦', pinyin: 'xīnkǔ', wordClass: ['Vs'], meaningVi: 'vất vả, cực khổ', meaningEn: 'tough, hard, bitter (life, work)', examples: [{ traditional: '當農夫不是很辛苦嗎？', simplified: '当农夫不是很辛苦吗？', vietnamese: 'Làm nông dân chẳng phải rất vất vả sao?' }] },
    { id: 'L6-011', lessonId: 'L6', order: 11, group: 'vocab1', traditional: '地位', simplified: '地位', pinyin: 'dìwèi', wordClass: ['N'], meaningVi: 'địa vị, vị thế', meaningEn: 'position, status', examples: [{ traditional: '農夫在台灣的社會地位不高。', simplified: '农夫在台湾的社会地位不高。', vietnamese: 'Vị thế xã hội của nông dân ở Đài Loan không cao.' }] },
    { id: 'L6-012', lessonId: 'L6', order: 12, group: 'vocab1', traditional: '收入', simplified: '收入', pinyin: 'shōurù', wordClass: ['N'], meaningVi: 'thu nhập', meaningEn: 'income', examples: [{ traditional: '工作辛苦不說，收入也不穩定。', simplified: '工作辛苦不说，收入也不稳定。', vietnamese: 'Công việc vất vả đã đành, thu nhập còn không ổn định.' }] },
    { id: 'L6-013', lessonId: 'L6', order: 13, group: 'vocab1', traditional: '利潤', simplified: '利润', pinyin: 'lìrùn', wordClass: ['N'], meaningVi: 'lợi nhuận', meaningEn: 'profit', examples: [{ traditional: '賣給超市，農夫的利潤很低。', simplified: '卖给超市，农夫的利润很低。', vietnamese: 'Bán cho siêu thị thì lợi nhuận nông dân rất thấp.' }] },
    { id: 'L6-014', lessonId: 'L6', order: 14, group: 'vocab1', traditional: '屋子', simplified: '屋子', pinyin: 'wūzi', wordClass: ['N'], meaningVi: 'nhà, căn nhà', meaningEn: 'house', examples: [{ traditional: '別一直待在屋子裡，我們出去走走吧。', simplified: '别一直待在屋子里，我们出去走走吧。', vietnamese: 'Đừng cứ ở mãi trong nhà, mình ra ngoài đi dạo đi.' }] },
    { id: 'L6-015', lessonId: 'L6', order: 15, group: 'vocab1', traditional: '番茄', simplified: '番茄', pinyin: 'fānqié', wordClass: ['N'], meaningVi: 'cà chua', meaningEn: 'tomato', tags: ['am-thuc'], notes: '番茄 mang bộ 番 (không phải bộ cỏ) vì là loại cây du nhập từ nước ngoài vào Trung Quốc.', examples: [{ traditional: '這些番茄真漂亮！', simplified: '这些番茄真漂亮！', vietnamese: 'Mấy quả cà chua này đẹp thật!' }] },
    { id: 'L6-016', lessonId: 'L6', order: 16, group: 'vocab1', traditional: '品種', simplified: '品种', pinyin: 'pǐnzhǒng', wordClass: ['N'], meaningVi: 'giống, chủng loại', meaningEn: 'variety, species', examples: [{ traditional: '這不是基因改造的，是新品種。', simplified: '这不是基因改造的，是新品种。', vietnamese: 'Đây không phải loại biến đổi gen, mà là giống mới.' }] },
    { id: 'L6-017', lessonId: 'L6', order: 17, group: 'vocab1', traditional: '氣候', simplified: '气候', pinyin: 'qìhòu', wordClass: ['N'], meaningVi: 'khí hậu', meaningEn: 'climate', examples: [{ traditional: '今年氣候特別好，再加上沒有颱風。', simplified: '今年气候特别好，再加上没有台风。', vietnamese: 'Năm nay khí hậu đặc biệt tốt, lại thêm không có bão.' }] },
    { id: 'L6-018', lessonId: 'L6', order: 18, group: 'vocab1', traditional: '長', simplified: '长', pinyin: 'zhǎng', wordClass: ['Vi'], meaningVi: 'lớn lên, phát triển (cây cối)', meaningEn: 'to grow', examples: [{ traditional: '青菜水果都長得很好。', simplified: '青菜水果都长得很好。', vietnamese: 'Rau củ quả đều lớn rất tốt.' }] },
    { id: 'L6-019', lessonId: 'L6', order: 19, group: 'vocab1', traditional: '熟', simplified: '熟', pinyin: 'shóu', wordClass: ['Vp'], meaningVi: 'chín', meaningEn: 'to be ripe', examples: [{ traditional: '這些番茄熟了嗎？', simplified: '这些番茄熟了吗？', vietnamese: 'Mấy quả cà chua này chín chưa?' }] },
    { id: 'L6-020', lessonId: 'L6', order: 20, group: 'vocab1', traditional: '片', simplified: '片', pinyin: 'piàn', wordClass: ['M'], meaningVi: 'lượng từ chỉ mảnh, thửa (đất)', meaningEn: 'measure word for a stretch, swath (of land)', examples: [{ traditional: '這麼大的一片田，你一個人照顧，忙得過來嗎？', simplified: '这么大的一片田，你一个人照顾，忙得过来吗？', vietnamese: 'Thửa ruộng rộng thế này, một mình anh chăm sóc, xoay xở nổi không?' }] },
    { id: 'L6-021', lessonId: 'L6', order: 21, group: 'vocab1', traditional: '田', simplified: '田', pinyin: 'tián', wordClass: ['N'], meaningVi: 'ruộng, đồng', meaningEn: 'field, plot of land, paddy', tags: ['nong-nghiep'], examples: [{ traditional: '這麼大的一片田，你一個人照顧，忙得過來嗎？', simplified: '这么大的一片田，你一个人照顾，忙得过来吗？', vietnamese: 'Thửa ruộng rộng thế này, một mình anh chăm sóc, xoay xở nổi không?' }] },
    { id: 'L6-022', lessonId: 'L6', order: 22, group: 'vocab1', traditional: '照顧', simplified: '照顾', pinyin: 'zhàogù', wordClass: ['V'], meaningVi: 'chăm sóc', meaningEn: 'to take care of', examples: [{ traditional: '這麼大的一片田，你一個人照顧，忙得過來嗎？', simplified: '这么大的一片田，你一个人照顾，忙得过来吗？', vietnamese: 'Thửa ruộng rộng thế này, một mình anh chăm sóc, xoay xở nổi không?' }] },
    { id: 'L6-023', lessonId: 'L6', order: 23, group: 'vocab1', traditional: '敢', simplified: '敢', pinyin: 'gǎn', wordClass: ['Vaux'], meaningVi: 'dám', meaningEn: 'to dare', examples: [{ traditional: '收入這麼不穩定，怎麼敢結婚？', simplified: '收入这么不稳定，怎么敢结婚？', vietnamese: 'Thu nhập bấp bênh thế này, làm sao dám cưới vợ?' }] },
    { id: 'L6-024', lessonId: 'L6', order: 24, group: 'vocab1', traditional: '條件', simplified: '条件', pinyin: 'tiáojiàn', wordClass: ['N'], meaningVi: 'điều kiện (ở đây: ưu điểm, điều kiện tốt của một người)', meaningEn: 'terms, conditions (here: good qualities in a prospective spouse)', examples: [{ traditional: '表哥，你條件這麼好，我給你介紹一個，怎麼樣？', simplified: '表哥，你条件这么好，我给你介绍一个，怎么样？', vietnamese: 'Anh họ ơi, điều kiện anh tốt vậy, em giới thiệu cho anh một cô, được không?' }] },
    { id: 'L6-025', lessonId: 'L6', order: 25, group: 'vocab1', traditional: '黑', simplified: '黑', pinyin: 'hēi', wordClass: ['Vp'], meaningVi: 'tối, đen', meaningEn: 'dark, black', examples: [{ traditional: '天黑了，我們快回去吃飯。', simplified: '天黑了，我们快回去吃饭。', vietnamese: 'Trời tối rồi, mình mau về ăn cơm thôi.' }] },
    { id: 'L6-026', lessonId: 'L6', order: 26, group: 'vocab1', traditional: '摘下來', simplified: '摘下来', pinyin: 'zhāi xiàlái', wordClass: ['Other'], meaningVi: 'hái xuống, ngắt xuống', meaningEn: 'to pluck, to pick (e.g. fruit from a tree)', examples: [{ traditional: '熟了，熟了，摘下來就可以吃。', simplified: '熟了，熟了，摘下来就可以吃。', vietnamese: 'Chín rồi, chín rồi, hái xuống là ăn được luôn.' }] },
    { id: 'L6-027', lessonId: 'L6', order: 27, group: 'vocab1', traditional: '做不動', simplified: '做不动', pinyin: 'zuò bú dòng', wordClass: ['Other'], meaningVi: 'không còn sức làm nổi (do tuổi già)', meaningEn: 'to be unable to physically function due to old age', examples: [{ traditional: '因為看到父母年紀大了，做不動了，才決定回來幫忙的。', simplified: '因为看到父母年纪大了，做不动了，才决定回来帮忙的。', vietnamese: 'Vì thấy cha mẹ đã lớn tuổi, làm không nổi nữa, nên mới quyết định về giúp đỡ.' }] },
    { id: 'L6-028', lessonId: 'L6', order: 28, group: 'vocab1', traditional: '基因改造', simplified: '基因改造', pinyin: 'jīyīn gǎizào', wordClass: ['Other'], meaningVi: 'biến đổi gen', meaningEn: 'genetically modified', examples: [{ traditional: '這不是基因改造的，是新品種。', simplified: '这不是基因改造的，是新品种。', vietnamese: 'Đây không phải loại biến đổi gen, mà là giống mới.' }] },
    { id: 'L6-029', lessonId: 'L6', order: 29, group: 'vocab1', traditional: '忙得過來', simplified: '忙得过来', pinyin: 'máng de guòlái', wordClass: ['Other'], meaningVi: 'bận mà vẫn xoay xở kịp', meaningEn: 'to be able to manage everything', examples: [{ traditional: '這麼大的一片田，你一個人照顧，忙得過來嗎？', simplified: '这么大的一片田，你一个人照顾，忙得过来吗？', vietnamese: 'Thửa ruộng rộng thế này, một mình anh chăm sóc, xoay xở nổi không?' }] },
    { id: 'L6-030', lessonId: 'L6', order: 30, group: 'vocab1', traditional: '開玩笑', simplified: '开玩笑', pinyin: 'kāi wánxiào', wordClass: ['Other'], meaningVi: 'nói đùa, giỡn chơi', meaningEn: 'to joke, to kid', examples: [{ traditional: '別開玩笑了。', simplified: '别开玩笑了。', vietnamese: 'Đừng đùa nữa.' }] },
    { id: 'L6-031', lessonId: 'L6', order: 31, group: 'vocab1', traditional: '看天吃飯', simplified: '看天吃饭', pinyin: 'kàntiān chīfàn', wordClass: ['Other'], meaningVi: 'sống nhờ trời, thu nhập bấp bênh theo thời tiết', meaningEn: "livelihood depends on the whims of nature", examples: [{ traditional: '農夫看天吃飯，收入這麼不穩定，怎麼敢結婚？', simplified: '农夫看天吃饭，收入这么不稳定，怎么敢结婚？', vietnamese: 'Nông dân sống nhờ trời, thu nhập bấp bênh thế này, làm sao dám cưới vợ?' }] },

    { id: 'L6-032', lessonId: 'L6', order: 1, group: 'vocab2', traditional: '小農', simplified: '小农', pinyin: 'xiǎonóng', wordClass: ['N'], meaningVi: 'tiểu nông, nông dân quy mô nhỏ', meaningEn: 'small farmer', tags: ['nong-nghiep'], examples: [{ traditional: '像何雅婷媽媽這樣關心小農的人越來越多。', simplified: '像何雅婷妈妈这样关心小农的人越来越多。', vietnamese: 'Những người quan tâm đến tiểu nông như mẹ của Nhã Đình ngày càng nhiều.' }] },
    { id: 'L6-033', lessonId: 'L6', order: 2, group: 'vocab2', traditional: '市集', simplified: '市集', pinyin: 'shìjí', wordClass: ['N'], meaningVi: 'chợ phiên', meaningEn: 'bazaar, market', examples: [{ traditional: '何雅婷就陪著媽媽到農夫市集去買菜。', simplified: '何雅婷就陪着妈妈到农夫市集去买菜。', vietnamese: 'Nhã Đình cùng mẹ đến chợ nông dân mua rau.' }] },
    { id: 'L6-034', lessonId: 'L6', order: 3, group: 'vocab2', traditional: '食材', simplified: '食材', pinyin: 'shícái', wordClass: ['N'], meaningVi: 'nguyên liệu thực phẩm', meaningEn: 'food materials, ingredients', tags: ['am-thuc'], examples: [{ traditional: '媽媽開始注意食材的產地。', simplified: '妈妈开始注意食材的产地。', vietnamese: 'Mẹ cô bắt đầu chú ý đến nguồn gốc thực phẩm.' }] },
    { id: 'L6-035', lessonId: 'L6', order: 4, group: 'vocab2', traditional: '產地', simplified: '产地', pinyin: 'chǎndì', wordClass: ['N'], meaningVi: 'nơi sản xuất, xuất xứ', meaningEn: 'place of origin', examples: [{ traditional: '媽媽開始注意食材的產地。', simplified: '妈妈开始注意食材的产地。', vietnamese: 'Mẹ cô bắt đầu chú ý đến nguồn gốc thực phẩm.' }] },
    { id: 'L6-036', lessonId: 'L6', order: 5, group: 'vocab2', traditional: '盡量', simplified: '尽量', pinyin: 'jìnliàng', wordClass: ['Adv'], meaningVi: 'cố gắng hết sức', meaningEn: "to do one's best to", examples: [{ traditional: '也盡量到有機商店和農夫市集買菜。', simplified: '也尽量到有机商店和农夫市集买菜。', vietnamese: 'Cũng cố gắng đến các cửa hàng hữu cơ và chợ nông dân để mua đồ.' }] },
    { id: 'L6-037', lessonId: 'L6', order: 6, group: 'vocab2', traditional: '友善', simplified: '友善', pinyin: 'yǒushàn', wordClass: ['Vs'], meaningVi: 'thân thiện', meaningEn: 'friendly', tags: ['moi-truong'], examples: [{ traditional: '了解小農用友善的方式對待土地和環境。', simplified: '了解小农用友善的方式对待土地和环境。', vietnamese: 'Tìm hiểu cách họ đối xử thân thiện với đất đai và môi trường.' }] },
    { id: 'L6-038', lessonId: 'L6', order: 7, group: 'vocab2', traditional: '對待', simplified: '对待', pinyin: 'duìdài', wordClass: ['V'], meaningVi: 'đối xử', meaningEn: 'to treat', examples: [{ traditional: '小農用友善的方式對待土地和環境。', simplified: '小农用友善的方式对待土地和环境。', vietnamese: 'Tiểu nông đối xử thân thiện với đất đai và môi trường.' }] },
    { id: 'L6-039', lessonId: 'L6', order: 8, group: 'vocab2', traditional: '土地', simplified: '土地', pinyin: 'tǔdì', wordClass: ['N'], meaningVi: 'đất đai', meaningEn: 'land', tags: ['moi-truong'], examples: [{ traditional: '小農用友善的方式對待土地和環境。', simplified: '小农用友善的方式对待土地和环境。', vietnamese: 'Tiểu nông đối xử thân thiện với đất đai và môi trường.' }] },
    { id: 'L6-040', lessonId: 'L6', order: 9, group: 'vocab2', traditional: '信任', simplified: '信任', pinyin: 'xìnrèn', wordClass: ['Vst'], meaningVi: 'tin tưởng', meaningEn: 'to trust', examples: [{ traditional: '媽媽很信任他們，所以寧可每個星期跑一趟。', simplified: '妈妈很信任他们，所以宁可每个星期跑一趟。', vietnamese: 'Mẹ cô rất tin tưởng họ, nên thà mỗi tuần chạy một chuyến.' }] },
    { id: 'L6-041', lessonId: 'L6', order: 10, group: 'vocab2', traditional: '寧可', simplified: '宁可', pinyin: 'níngkě', wordClass: ['Vst'], meaningVi: 'thà, thà rằng', meaningEn: 'would rather', notes: 'Xem ngữ pháp V: 寧可…，也要…', examples: [{ traditional: '寧可每個星期跑一趟，多花一點錢，也要支持小農。', simplified: '宁可每个星期跑一趟，多花一点钱，也要支持小农。', vietnamese: 'Thà mỗi tuần chạy một chuyến, tốn thêm chút tiền, cũng muốn ủng hộ tiểu nông.' }] },
    { id: 'L6-042', lessonId: 'L6', order: 11, group: 'vocab2', traditional: '跑', simplified: '跑', pinyin: 'pǎo', wordClass: ['Vi'], meaningVi: 'chạy (ở đây: chạy một chuyến đi lại)', meaningEn: 'to run', examples: [{ traditional: '寧可每個星期跑一趟，也要支持小農。', simplified: '宁可每个星期跑一趟，也要支持小农。', vietnamese: 'Thà mỗi tuần chạy một chuyến, cũng muốn ủng hộ tiểu nông.' }] },
    { id: 'L6-043', lessonId: 'L6', order: 12, group: 'vocab2', traditional: '支持', simplified: '支持', pinyin: 'zhīchí', wordClass: ['V'], meaningVi: 'ủng hộ', meaningEn: 'to support', examples: [{ traditional: '也要支持小農。', simplified: '也要支持小农。', vietnamese: 'Cũng muốn ủng hộ tiểu nông.' }] },
    { id: 'L6-044', lessonId: 'L6', order: 13, group: 'vocab2', traditional: '文章', simplified: '文章', pinyin: 'wénzhāng', wordClass: ['N'], meaningVi: 'bài viết', meaningEn: 'article', examples: [{ traditional: '有人寫文章介紹小農種的蔬菜水果。', simplified: '有人写文章介绍小农种的蔬菜水果。', vietnamese: 'Có người viết bài giới thiệu rau quả do tiểu nông trồng.' }] },
    { id: 'L6-045', lessonId: 'L6', order: 14, group: 'vocab2', traditional: '推銷', simplified: '推销', pinyin: 'tuīxiāo', wordClass: ['V'], meaningVi: 'quảng bá, tiếp thị', meaningEn: 'to promote, to market', examples: [{ traditional: '有人到處幫小農推銷。', simplified: '有人到处帮小农推销。', vietnamese: 'Có người đi khắp nơi giúp tiểu nông quảng bá sản phẩm.' }] },
    { id: 'L6-046', lessonId: 'L6', order: 15, group: 'vocab2', traditional: '其中', simplified: '其中', pinyin: 'qízhōng', wordClass: ['N'], meaningVi: 'trong số đó', meaningEn: 'of these, amongst which', examples: [{ traditional: '其中最有名的是一位麵包師傅。', simplified: '其中最有名的是一位面包师傅。', vietnamese: 'Trong số đó nổi tiếng nhất là một người thợ làm bánh mì.' }] },
    { id: 'L6-047', lessonId: 'L6', order: 16, group: 'vocab2', traditional: '師傅', simplified: '师傅', pinyin: 'shīfù', wordClass: ['N'], meaningVi: 'sư phụ, thợ cả', meaningEn: 'master (of a trade)', examples: [{ traditional: '其中最有名的是一位麵包師傅。', simplified: '其中最有名的是一位面包师傅。', vietnamese: 'Trong số đó nổi tiếng nhất là một người thợ làm bánh mì.' }] },
    { id: 'L6-048', lessonId: 'L6', order: 17, group: 'vocab2', traditional: '農村', simplified: '农村', pinyin: 'nóngcūn', wordClass: ['N'], meaningVi: 'nông thôn, làng quê', meaningEn: 'farming village, countryside', examples: [{ traditional: '他從小在農村長大，了解農夫的辛苦。', simplified: '他从小在农村长大，了解农夫的辛苦。', vietnamese: 'Anh lớn lên ở nông thôn, hiểu rõ nỗi vất vả của nông dân.' }] },
    { id: 'L6-049', lessonId: 'L6', order: 18, group: 'vocab2', traditional: '長大', simplified: '长大', pinyin: 'zhǎngdà', wordClass: ['Vi'], meaningVi: 'lớn lên, trưởng thành', meaningEn: 'to grow up', examples: [{ traditional: '他從小在農村長大。', simplified: '他从小在农村长大。', vietnamese: 'Anh lớn lên ở nông thôn.' }] },
    { id: 'L6-050', lessonId: 'L6', order: 19, group: 'vocab2', traditional: '幫助', simplified: '帮助', pinyin: 'bāngzhù', wordClass: ['V'], meaningVi: 'giúp đỡ', meaningEn: 'to help', examples: [{ traditional: '為了幫助小農，他常常拜訪他們。', simplified: '为了帮助小农，他常常拜访他们。', vietnamese: 'Để giúp đỡ tiểu nông, anh thường xuyên đến thăm họ.' }] },
    { id: 'L6-051', lessonId: 'L6', order: 20, group: 'vocab2', traditional: '拜訪', simplified: '拜访', pinyin: 'bàifǎng', wordClass: ['V'], meaningVi: 'đến thăm', meaningEn: 'to pay someone a visit', examples: [{ traditional: '他常常拜訪小農。', simplified: '他常常拜访小农。', vietnamese: 'Anh thường xuyên đến thăm các tiểu nông.' }] },
    { id: 'L6-052', lessonId: 'L6', order: 21, group: 'vocab2', traditional: '出產', simplified: '出产', pinyin: 'chūchǎn', wordClass: ['V'], meaningVi: 'sản xuất, sản sinh', meaningEn: 'to produce', examples: [{ traditional: '用他們出產的食材做出受歡迎的麵包。', simplified: '用他们出产的食材做出受欢迎的面包。', vietnamese: 'Dùng nông sản của họ làm ra những ổ bánh mì được yêu thích.' }] },
    { id: 'L6-053', lessonId: 'L6', order: 22, group: 'vocab2', traditional: '由於', simplified: '由于', pinyin: 'yóuyú', wordClass: ['Conj'], meaningVi: 'do, bởi vì', meaningEn: 'due to, because of', examples: [{ traditional: '由於報紙、網路的介紹，許多人開始羨慕小農的生活。', simplified: '由于报纸、网路的介绍，许多人开始羡慕小农的生活。', vietnamese: 'Nhờ báo chí và mạng internet giới thiệu, nhiều người bắt đầu ngưỡng mộ cuộc sống của tiểu nông.' }] },
    { id: 'L6-054', lessonId: 'L6', order: 23, group: 'vocab2', traditional: '許多', simplified: '许多', pinyin: 'xǔduō', wordClass: ['Det'], meaningVi: 'nhiều', meaningEn: 'many', examples: [{ traditional: '許多住在城市裡的人開始羨慕小農的生活。', simplified: '许多住在城市里的人开始羡慕小农的生活。', vietnamese: 'Nhiều người sống ở thành phố bắt đầu ngưỡng mộ cuộc sống của tiểu nông.' }] },
    { id: 'L6-055', lessonId: 'L6', order: 24, group: 'vocab2', traditional: '接近', simplified: '接近', pinyin: 'jiējìn', wordClass: ['Vst'], meaningVi: 'gần gũi, tiếp cận', meaningEn: 'to come close to, to approach', tags: ['moi-truong'], examples: [{ traditional: '讓孩子在田裡跑跑跳跳，接近自然。', simplified: '让孩子在田里跑跑跳跳，接近自然。', vietnamese: 'Để con chạy nhảy ngoài ruộng, gần gũi thiên nhiên.' }] },
    { id: 'L6-056', lessonId: 'L6', order: 25, group: 'vocab2', traditional: '自然', simplified: '自然', pinyin: 'zìrán', wordClass: ['N'], meaningVi: 'thiên nhiên', meaningEn: 'nature', tags: ['moi-truong'], examples: [{ traditional: '讓孩子在田裡跑跑跳跳，接近自然。', simplified: '让孩子在田里跑跑跳跳，接近自然。', vietnamese: 'Để con chạy nhảy ngoài ruộng, gần gũi thiên nhiên.' }] },
    { id: 'L6-057', lessonId: 'L6', order: 26, group: 'vocab2', traditional: '變成', simplified: '变成', pinyin: 'biànchéng', wordClass: ['Vp'], meaningVi: 'trở thành', meaningEn: 'to become', examples: [{ traditional: '到鄉下住一晚變成了現在熱門的休閒活動。', simplified: '到乡下住一晚变成了现在热门的休闲活动。', vietnamese: 'Về quê ở một đêm đã trở thành hoạt động giải trí thịnh hành hiện nay.' }] },
    { id: 'L6-058', lessonId: 'L6', order: 27, group: 'vocab2', traditional: '休閒', simplified: '休闲', pinyin: 'xiūxián', wordClass: ['Vs'], meaningVi: 'nghỉ ngơi giải trí', meaningEn: 'leisure', examples: [{ traditional: '到鄉下住一晚變成了現在熱門的休閒活動。', simplified: '到乡下住一晚变成了现在热门的休闲活动。', vietnamese: 'Về quê ở một đêm đã trở thành hoạt động giải trí thịnh hành hiện nay.' }] },
    { id: 'L6-059', lessonId: 'L6', order: 28, group: 'vocab2', traditional: '隨著', simplified: '随着', pinyin: 'suízhe', wordClass: ['Prep'], meaningVi: 'theo cùng với, cùng với', meaningEn: 'along with, with the happening of', notes: 'Xem ngữ pháp VIII: 隨著S1…，S2也…', examples: [{ traditional: '隨著小農越來越受重視，到農村來觀光的人也慢慢地多起來了。', simplified: '随着小农越来越受重视，到农村来观光的人也慢慢地多起来了。', vietnamese: 'Cùng với việc tiểu nông ngày càng được coi trọng, số người đến nông thôn tham quan cũng dần dần tăng lên.' }] },
    { id: 'L6-060', lessonId: 'L6', order: 29, group: 'vocab2', traditional: '觀光', simplified: '观光', pinyin: 'guānguāng', wordClass: ['Vi'], meaningVi: 'tham quan, du lịch', meaningEn: 'to tour, to sightsee', tags: ['du-lich'], examples: [{ traditional: '到農村來觀光的人也慢慢地多起來了。', simplified: '到农村来观光的人也慢慢地多起来了。', vietnamese: 'Số người đến nông thôn tham quan cũng dần dần tăng lên.' }] },
    { id: 'L6-061', lessonId: 'L6', order: 30, group: 'vocab2', traditional: '消費', simplified: '消费', pinyin: 'xiāofèi', wordClass: ['Vi'], meaningVi: 'tiêu dùng, chi tiêu', meaningEn: 'to be a consumer, to purchase things', examples: [{ traditional: '以前當地人習慣到傳統的小商店和小吃店消費。', simplified: '以前当地人习惯到传统的小商店和小吃店消费。', vietnamese: 'Trước đây người địa phương quen tiêu dùng ở các tiệm nhỏ và quán ăn truyền thống.' }] },
    { id: 'L6-062', lessonId: 'L6', order: 31, group: 'vocab2', traditional: '安靜', simplified: '安静', pinyin: 'ānjìng', wordClass: ['Vs'], meaningVi: 'yên tĩnh', meaningEn: 'quiet', examples: [{ traditional: '原來安靜的農村有了很大的變化。', simplified: '原来安静的农村有了很大的变化。', vietnamese: 'Vùng nông thôn vốn yên tĩnh đã có nhiều thay đổi lớn.' }] },
    { id: 'L6-063', lessonId: 'L6', order: 32, group: 'vocab2', traditional: '消失', simplified: '消失', pinyin: 'xiāoshī', wordClass: ['Vp'], meaningVi: 'biến mất', meaningEn: 'to disappear', examples: [{ traditional: '現在農人擔心的是傳統的生活方式會不會消失。', simplified: '现在农人担心的是传统的生活方式会不会消失。', vietnamese: 'Giờ đây điều nông dân lo lắng là liệu lối sống truyền thống có biến mất hay không.' }] },
    { id: 'L6-064', lessonId: 'L6', order: 33, group: 'vocab2', traditional: '出問題', simplified: '出问题', pinyin: 'chū wèntí', wordClass: ['Other'], meaningVi: 'gặp vấn đề, trục trặc', meaningEn: 'to go wrong, to have problems', examples: [{ traditional: '最近食品安全出了好幾次問題。', simplified: '最近食品安全出了好几次问题。', vietnamese: 'Gần đây thực phẩm liên tục gặp vấn đề về an toàn.' }] },
    { id: 'L6-065', lessonId: 'L6', order: 34, group: 'vocab2', traditional: '一方面', simplified: '一方面', pinyin: 'yì fāngmiàn', wordClass: ['Other'], meaningVi: 'một mặt', meaningEn: 'on the one hand', notes: 'Xem ngữ pháp VII: 一方面…，一方面…', examples: [{ traditional: '一方面可以讓孩子接近自然，一方面自己也可以放鬆心情。', simplified: '一方面可以让孩子接近自然，一方面自己也可以放松心情。', vietnamese: 'Một mặt để con gần gũi thiên nhiên, mặt khác bản thân cũng được thư giãn tinh thần.' }] }
  ],

  grammar: [
    {
      id: 'L6-G1', lessonId: 'L6', order: 1, pattern: '因為…才…',
      functionVi: 'Mẫu câu nhấn mạnh rằng một sự việc xảy ra chỉ vì một lý do cụ thể nào đó. Đây là cấu trúc nhân-quả điển hình.',
      functionEn: 'This pattern stresses that an event happened only because of a particular reason. This is a typical cause-effect construction.',
      examples: [
        { traditional: '因為看到父母年紀大了，做不動了，才決定回來幫忙的。', simplified: '因为看到父母年纪大了，做不动了，才决定回来帮忙的。', english: 'It was only because I saw that my parents were old and couldn\'t work that I decided to come back and help out.', vietnamese: 'Vì thấy cha mẹ đã lớn tuổi, làm không nổi nữa, nên mới quyết định về giúp đỡ.' },
        { traditional: '因為賣保險，收入不穩定，她才想換工作的。', simplified: '因为卖保险，收入不稳定，她才想换工作的。', english: 'She only wants to change jobs because she sells insurance and her income isn\'t stable.', vietnamese: 'Vì bán bảo hiểm, thu nhập không ổn định, cô ấy mới muốn đổi việc.' },
        { traditional: '因為這個沙拉是用表哥種的有機蔬菜做的，我才吃的。', simplified: '因为这个沙拉是用表哥种的有机蔬菜做的，我才吃的。', english: 'I\'m only eating this salad because it\'s made from organic vegetables raised by my cousin.', vietnamese: 'Vì món salad này làm từ rau hữu cơ anh họ mình trồng, mình mới ăn đấy.' },
        { traditional: '因為工作壓力太大，健康出了問題，他才決定回鄉下種田的。', simplified: '因为工作压力太大，健康出了问题，他才决定回乡下种田的。', english: 'Stress from work caused him to have health issues, so he decided to go back to his village and work the fields.', vietnamese: 'Vì áp lực công việc quá lớn, sức khỏe gặp vấn đề, anh ấy mới quyết định về quê làm ruộng.' },
        { traditional: '因為他不但熱心，而且成績好，才拿到獎學金的。', simplified: '因为他不但热心，而且成绩好，才拿到奖学金的。', english: 'He got a scholarship because he is both enthusiastic and has good grades.', vietnamese: 'Vì anh ấy vừa nhiệt tình vừa học giỏi, nên mới nhận được học bổng.' }
      ],
      usageNotesVi: '才 chỉ dùng trong câu diễn tả sự việc đã xảy ra (quá khứ). Khác với mẫu 因為…所以…(chỉ quan hệ nhân quả nói chung, không nhất thiết là việc đã xảy ra), 因為…才… nhấn mạnh "chỉ vì lý do đó" sự việc mới xảy ra.',
      exercises: [
        { id: 'L6-G1-EX1', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼沒去聽五月天的跨年演唱會？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['因為我感冒了，才沒去聽的。'] }], targetPattern: 'L6-G1' },
        { id: 'L6-G1-EX2', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你為什麼不買基因改造的食品？不是比較便宜嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['因為擔心對健康不好，我才不買基因改造的食品的。'] }], targetPattern: 'L6-G1' },
        { id: 'L6-G1-EX3', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：為什麼很多人喜歡到農夫市集買菜？價錢不是比較貴嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['因為想支持小農、吃得安心，他們才願意多花一點錢去農夫市集買菜的。'] }], targetPattern: 'L6-G1' },
        { id: 'L6-G1-EX4', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你為什麼要買他推銷的產品？你信任他嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['因為信任他，我才買他推銷的產品的。'] }], targetPattern: 'L6-G1' },
        { id: 'L6-G1-EX5', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你為什麼喜歡去古老的城市？現代城市不吸引你嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['因為喜歡純樸、慢步調的感覺，我才喜歡去古老的城市的。'] }], targetPattern: 'L6-G1' }
      ]
    },
    {
      id: 'L6-G2', lessonId: 'L6', order: 2, pattern: '…S1…不說，S2也…',
      functionVi: 'Mẫu câu dùng để than phiền về hai vấn đề, trong đó vấn đề thứ hai nghiêm trọng hơn vấn đề thứ nhất.',
      functionEn: 'This pattern is used to indicate a complaint about two issues, the second of which is more serious than the first.',
      examples: [
        { traditional: '工作辛苦不說，收入也不穩定，父母都希望孩子有更好的發展。', simplified: '工作辛苦不说，收入也不稳定，父母都希望孩子有更好的发展。', english: 'The hard work aside, you don\'t have a stable income. Parents all hope that their children have better careers than themselves.', vietnamese: 'Công việc vất vả đã đành, thu nhập còn không ổn định, cha mẹ nào cũng mong con cái có tương lai tốt hơn.' },
        { traditional: '那個地方吵不說，環境也很複雜。', simplified: '那个地方吵不说，环境也很复杂。', english: 'Aside from the fact that the place is noisy, it\'s also a bit seedy.', vietnamese: 'Chỗ đó ồn đã đành, môi trường còn phức tạp.' },
        { traditional: '他現在的工作是推銷產品。薪水低不說，也很辛苦。', simplified: '他现在的工作是推销产品。薪水低不说，也很辛苦。', english: 'His current job is selling products. The low salary aside, it\'s hard work.', vietnamese: 'Công việc hiện tại của anh ấy là bán hàng. Lương thấp đã đành, còn vất vả.' },
        { traditional: '那家店賣的商品種類少不說，價錢也很貴，難怪客人不多。', simplified: '那家店卖的商品种类少不说，价钱也很贵，难怪客人不多。', english: 'That shop has poor selection, not to mention high prices. It\'s no wonder they don\'t have many customers.', vietnamese: 'Tiệm đó hàng ít loại đã đành, giá còn đắt, chẳng trách khách không đông.' },
        { traditional: '小林最近常遲到不說，功課也不寫。他怎麼了？', simplified: '小林最近常迟到不说，功课也不写。他怎么了？', english: 'Xiao Lin has been late a lot recently; not to mention, he hasn\'t been doing his homework. What\'s up with him?', vietnamese: 'Tiểu Lâm gần đây hay đi trễ đã đành, còn không làm bài tập. Cậu ấy làm sao vậy?' }
      ],
      usageNotesVi: 'Cả …不說，也… và 不但…，還… (Bài 4) đều mang tính tăng tiến, thêm một sự việc vào sự việc trước. Nhưng 不但…，還… có thể dùng cho cả việc tích cực lẫn tiêu cực, còn …不說，也… chỉ dùng cho việc tiêu cực (than phiền).',
      exercises: [
        { id: 'L6-G2-EX1', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你為什麼不想租那間房子？（光線不好；很舊）', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['那間房子光線不好不說，也很舊。'] }], targetPattern: 'L6-G2' },
        { id: 'L6-G2-EX2', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你新買的手機為什麼要拿回去退換？（聽不清楚；常常自動關機）', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這支手機聽不清楚不說，也常常自動關機。'] }], targetPattern: 'L6-G2' },
        { id: 'L6-G2-EX3', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你喜歡吃薯條嗎？（太鹹；太油膩）', textWithBlanks: 'B：不喜歡。___。', blanks: [{ index: 0, acceptedAnswers: ['薯條太鹹不說，也太油膩。'] }], targetPattern: 'L6-G2' },
        { id: 'L6-G2-EX4', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你想當翻譯嗎？（辛苦；收入不穩定）', textWithBlanks: 'B：不想，___。', blanks: [{ index: 0, acceptedAnswers: ['當翻譯辛苦不說，收入也不穩定。'] }], targetPattern: 'L6-G2' },
        { id: 'L6-G2-EX5', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你喜歡住在鄉下嗎？（蚊蟲多；生活不方便）', textWithBlanks: 'B：不喜歡。___。', blanks: [{ index: 0, acceptedAnswers: ['鄉下蚊蟲多不說，生活也不方便。'] }], targetPattern: 'L6-G2' }
      ]
    },
    {
      id: 'L6-G3', lessonId: 'L6', order: 3, pattern: '再加上',
      functionVi: 'Cụm 再加上 dùng để thêm một yếu tố hoặc lý do nữa vào câu. Câu có thể mang ý khen hoặc chê, tùy người nói.',
      functionEn: 'The phrase 再加上 adds a further item. The sentence can be an approval or a criticism, on the part of the speaker.',
      examples: [
        { traditional: '今年氣候特別好，再加上沒有颱風，所以青菜水果都長得很好。', simplified: '今年气候特别好，再加上没有台风，所以青菜水果都长得很好。', english: 'The climate has been especially good this year, plus there haven\'t been any typhoons, so the vegetables and fruit have grown really well.', vietnamese: 'Năm nay khí hậu đặc biệt tốt, lại thêm không có bão, nên rau củ quả đều lớn rất tốt.' },
        { traditional: '那件衣服的款式比較舊，顏色也太淺，再加上穿起來不舒服，所以雖然打五折，我也沒買。', simplified: '那件衣服的款式比较旧，颜色也太浅，再加上穿起来不舒服，所以虽然打五折，我也没买。', english: 'The style of that garment was relatively old and the color too light. In addition, it was uncomfortable, so even though it was half off, I didn\'t buy it.', vietnamese: 'Mẫu áo đó hơi cũ, màu cũng quá nhạt, lại thêm mặc không thoải mái, nên dù giảm nửa giá mình cũng không mua.' },
        { traditional: '陽明山上有很多很好的餐廳，再加上夜景很美，他決定帶女朋友上陽明山吃晚飯。', simplified: '阳明山上有很多很好的餐厅，再加上夜景很美，他决定带女朋友上阳明山吃晚饭。', english: 'Yangming Mountain has a lot of good restaurants. What\'s more, the view at night is beautiful, so he decided to take his girlfriend there for dinner.', vietnamese: 'Trên núi Dương Minh có nhiều nhà hàng ngon, lại thêm cảnh đêm đẹp, anh ấy quyết định đưa bạn gái lên đó ăn tối.' },
        { traditional: '在鄉下，孩子可以接近土地，在田裡跑跑跳跳，再加上可以吃到最新鮮的蔬菜，所以父母週末都喜歡帶孩子到鄉下去玩。', simplified: '在乡下，孩子可以接近土地，在田里跑跑跳跳，再加上可以吃到最新鲜的蔬菜，所以父母周末都喜欢带孩子到乡下去玩。', english: 'In the country, kids can be close to the land and they can run and jump about in the fields. Furthermore, the vegetables there are the freshest you can get. That\'s why parents like to take their children to the countryside on weekends.', vietnamese: 'Ở nông thôn, trẻ con có thể gần gũi đất đai, chạy nhảy ngoài ruộng, lại thêm được ăn rau tươi nhất, nên cha mẹ cuối tuần thích đưa con về quê chơi.' },
        { traditional: '大家都很信任他，再加上他的麵包都是用最好的食材做的，所以很多人住得再遠也要去他的店買麵包。', simplified: '大家都很信任他，再加上他的面包都是用最好的食材做的，所以很多人住得再远也要去他的店买面包。', english: 'Everybody trusts him. What\'s more, he uses the best ingredients in his bread, so a lot of people, no matter how far away they live, go to his shop to buy bread.', vietnamese: 'Mọi người đều tin tưởng anh, lại thêm bánh mì của anh đều làm từ nguyên liệu tốt nhất, nên dù ở xa đến đâu nhiều người vẫn tìm đến tiệm anh mua bánh.' }
      ],
      usageNotesVi: '再加上 thường đứng giữa câu, nối thêm một lý do hoặc đặc điểm bổ sung cho lý do đã nêu trước đó; kết quả ở vế sau thường là hệ quả của việc "cộng dồn" các yếu tố này.',
      exercises: [
        { id: 'L6-G3-EX1', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '表哥種的番茄是新品種，顏色很漂亮，再加上___，所以賣得很好。', blanks: [{ index: 0, acceptedAnswers: ['味道特別甜'] }], targetPattern: 'L6-G3' },
        { id: 'L6-G3-EX2', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '這件羊毛外套又輕又暖和，再加上___，我就買了。', blanks: [{ index: 0, acceptedAnswers: ['顏色也很好看'] }], targetPattern: 'L6-G3' },
        { id: 'L6-G3-EX3', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '王小姐很甜美，再加上___，所以喜歡她的人很多。', blanks: [{ index: 0, acceptedAnswers: ['個性又活潑'] }], targetPattern: 'L6-G3' },
        { id: 'L6-G3-EX4', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '這個款式的手機是最新型的，功能好，再加上___，買的人很多。', blanks: [{ index: 0, acceptedAnswers: ['價錢也不貴'] }], targetPattern: 'L6-G3' },
        { id: 'L6-G3-EX5', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '去台南可以看到很多台灣人傳統的風俗習慣，再加上___，所以我一有機會就去。', blanks: [{ index: 0, acceptedAnswers: ['小吃又多又好吃'] }], targetPattern: 'L6-G3' }
      ]
    },
    {
      id: 'L6-G4', lessonId: 'L6', order: 4, pattern: '什麼都…，就是…',
      functionVi: 'Mẫu câu nêu lên một ngoại lệ so với điều vừa nói ở trên: mọi thứ đều… nhưng chỉ có… là không.',
      functionEn: 'This pattern presents an exception to what has been said previously.',
      examples: [
        { traditional: '我表哥什麼都有，就是少了一個太太。', simplified: '我表哥什么都有，就是少了一个太太。', english: 'My cousin has everything, except a wife.', vietnamese: 'Anh họ mình cái gì cũng có, chỉ thiếu mỗi một bà vợ thôi.' },
        { traditional: '她什麼都買了，就是忘了買鹽。', simplified: '她什么都买了，就是忘了买盐。', english: 'He bought everything except for salt.', vietnamese: 'Cô ấy mua gì cũng có, chỉ quên mua muối.' },
        { traditional: '這家商店今天什麼都打八折，就是我要買的東西不打折。', simplified: '这家商店今天什么都打八折，就是我要买的东西不打折。', english: 'This shop has 20% off on everything except the things I want to buy today.', vietnamese: 'Cửa hàng này hôm nay cái gì cũng giảm 20%, chỉ có thứ mình muốn mua là không giảm.' },
        { traditional: '他對什麼都不講究，就是講究吃。', simplified: '他对什么都不讲究，就是讲究吃。', english: 'He\'s not fussy about anything except food.', vietnamese: 'Anh ấy chẳng cầu kỳ chuyện gì, chỉ cầu kỳ mỗi chuyện ăn uống.' },
        { traditional: '這條街上什麼店都有，就是沒有電信公司的門市。', simplified: '这条街上什么店都有，就是没有电信公司的门市。', english: 'This street has any kind of shop you could possibly need except a phone company retail outlet.', vietnamese: 'Con phố này tiệm gì cũng có, chỉ không có cửa hàng của công ty viễn thông.' }
      ],
      usageNotesVi: '什麼都 thường đi kèm khẳng định bao quát (有/好/準備好了…), 就是 sau đó nêu đúng một điểm ngoại lệ duy nhất đi ngược lại điều vừa nói.',
      exercises: [
        { id: 'L6-G4-EX1', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說墾丁有很多水上活動，你去潛水了嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我什麼活動都玩了，就是沒去潛水。'] }], targetPattern: 'L6-G4' },
        { id: 'L6-G4-EX2', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他對電子產品那麼有興趣，一定有平板電腦吧？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['他什麼電子產品都有，就是沒有平板電腦。'] }], targetPattern: 'L6-G4' },
        { id: 'L6-G4-EX3', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼不點海鮮呢？你吃素嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我什麼都吃，就是不吃海鮮。'] }], targetPattern: 'L6-G4' },
        { id: 'L6-G4-EX4', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你週末請客，飲料準備好了嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['什麼都準備好了，就是飲料還沒買。'] }], targetPattern: 'L6-G4' },
        { id: 'L6-G4-EX5', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你還留著買手機的發票嗎？沒丟掉吧。', textWithBlanks: 'B：丟掉了。___。', blanks: [{ index: 0, acceptedAnswers: ['別的東西什麼都留著，就是把發票丟掉了。'] }], targetPattern: 'L6-G4' }
      ]
    },
    {
      id: 'L6-G5', lessonId: 'L6', order: 5, pattern: '寧可…，也要…',
      functionVi: '寧可 nêu điều mà chủ ngữ sẵn sàng chấp nhận (dù không dễ chịu), để đạt được điều quan trọng hơn ở vế sau (也要).',
      functionEn: 'In this pattern, 寧可 presents what the subject is willing to put up with, so that something more important could be accomplished.',
      examples: [
        { traditional: '寧可每個星期跑一趟，多花一點錢，也要支持小農。', simplified: '宁可每个星期跑一趟，多花一点钱，也要支持小农。', english: 'She\'d rather go once a week and spend a little more money, to support the small farmer.', vietnamese: 'Thà mỗi tuần chạy một chuyến, tốn thêm chút tiền, cũng muốn ủng hộ tiểu nông.' },
        { traditional: '父母寧可自己辛苦一點，也要讓孩子快樂。', simplified: '父母宁可自己辛苦一点，也要让孩子快乐。', english: 'Parents would rather work a little harder, in order that their kids can be happy.', vietnamese: 'Cha mẹ thà bản thân vất vả hơn một chút, cũng muốn con cái được hạnh phúc.' },
        { traditional: '小農寧可收成少，也要種出安全、健康的食材。', simplified: '小农宁可收成少，也要种出安全、健康的食材。', english: 'Small farmers would rather the harvest be small, as long as they can raise safe and healthy food.', vietnamese: 'Tiểu nông thà thu hoạch ít hơn, cũng muốn trồng ra thực phẩm an toàn, lành mạnh.' },
        { traditional: '她寧可薪水少，也要做自己有興趣的工作。', simplified: '她宁可薪水少，也要做自己有兴趣的工作。', english: 'She would rather receive less money, if it means doing a job that she\'s interested in.', vietnamese: 'Cô ấy thà lương ít, cũng muốn làm công việc mình thích.' },
        { traditional: '表哥寧可不睡覺，也要把報告寫完。', simplified: '表哥宁可不睡觉，也要把报告写完。', english: 'My cousin would rather not sleep, so that he can finish writing his report.', vietnamese: 'Anh họ thà không ngủ, cũng muốn viết xong báo cáo.' }
      ],
      usageNotesVi: 'Khác với 與其…不如… (chỉ so sánh để chọn phương án tốt hơn), 寧可…也要… ngụ ý người nói chấp nhận một cái giá nào đó (dù không dễ chịu) để đạt mục đích quan trọng hơn.',
      exercises: [
        { id: 'L6-G5-EX1', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你不是沒時間睡覺嗎？為什麼還在玩電腦遊戲？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我寧可少睡一點，也要玩一下電腦遊戲。'] }], targetPattern: 'L6-G5' },
        { id: 'L6-G5-EX2', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你總是說錢不夠，不能跟我們去玩。為什麼買這麼貴的智慧型手機？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我寧可別的地方省一點，也要買這支手機。'] }], targetPattern: 'L6-G5' },
        { id: 'L6-G5-EX3', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你買不買有機產品？聽說有機的貴很多。', textWithBlanks: 'B：買啊！為了健康，___。', blanks: [{ index: 0, acceptedAnswers: ['我寧可多花一點錢，也要吃得安心。'] }], targetPattern: 'L6-G5' },
        { id: 'L6-G5-EX4', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他為什麼那麼熱心，熬夜幫朋友找資料。', textWithBlanks: 'B：他就是這樣的人，___。', blanks: [{ index: 0, acceptedAnswers: ['寧可自己少睡一點，也要幫朋友的忙。'] }], targetPattern: 'L6-G5' },
        { id: 'L6-G5-EX5', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他對吃真講究，可以為了一碗鹹粥跑一趟台南。', textWithBlanks: 'B：他喜歡美食，___。', blanks: [{ index: 0, acceptedAnswers: ['寧可多花時間跑一趟，也要吃到最道地的味道。'] }], targetPattern: 'L6-G5' }
      ]
    },
    {
      id: 'L6-G6', lessonId: 'L6', order: 6, pattern: '像…的 + 名詞',
      functionVi: 'Mẫu câu dùng để bổ sung đặc điểm cho chủ ngữ hoặc tân ngữ trong câu, kiểu "những [danh từ] như…".',
      functionEn: 'This pattern adds special properties to either the subject or object of a sentence.',
      examples: [
        { traditional: '像他這樣友善對待土地的小農越來越多。', simplified: '像他这样友善对待土地的小农越来越多。', english: 'Small farmers like him who work the land in an environmentally conscious way are increasing in number.', vietnamese: 'Tiểu nông đối xử thân thiện với đất đai như anh ấy ngày càng nhiều.' },
        { traditional: '像小籠包、炸雞排、擔仔麵這樣的小吃，他都喜歡。', simplified: '像小笼包、炸鸡排、担仔面这样的小吃，他都喜欢。', english: 'He likes all kinds of light snacks, like steamed dumplings, fried chicken fillet, and danzai noodles.', vietnamese: 'Những món ăn vặt như há cảo hấp, gà chiên, mì đảm tử, anh ấy đều thích.' },
        { traditional: '像你這樣喜歡古蹟的人，一定要去台南看看。', simplified: '像你这样喜欢古迹的人，一定要去台南看看。', english: 'A person like you who likes historical sites really must go check out Tainan.', vietnamese: 'Người thích di tích cổ như cậu nhất định phải đi Đài Nam xem.' },
        { traditional: '像她那樣有語言天分的人，一定能很快地學好中文。', simplified: '像她那样有语言天分的人，一定能很快地学好中文。', english: 'A person talented in languages like her will most certainly learn Chinese quickly.', vietnamese: 'Người có năng khiếu ngôn ngữ như cô ấy chắc chắn sẽ học giỏi tiếng Trung rất nhanh.' },
        { traditional: '像她這樣在農村長大的人都喜歡接近自然。', simplified: '像她这样在农村长大的人都喜欢接近自然。', english: 'People who, like her, grew up in a farming village all like to be close to nature.', vietnamese: 'Những người lớn lên ở nông thôn như cô ấy đều thích gần gũi thiên nhiên.' }
      ],
      usageNotesVi: 'Mẫu này khác với 像…一樣 (dùng để so sánh hai sự vật với nhau): 像…的+N dùng để mô tả, giới hạn phạm vi cho một danh từ, không phải để so sánh.',
      exercises: [
        { id: 'L6-G6-EX1', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '像___，美美都喜歡吃。', blanks: [{ index: 0, acceptedAnswers: ['芒果、番茄這樣新鮮的水果'] }], targetPattern: 'L6-G6' },
        { id: 'L6-G6-EX2', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '像手機、平板電腦___，她都要買最新型的。', blanks: [{ index: 0, acceptedAnswers: ['這樣的電子產品'] }], targetPattern: 'L6-G6' },
        { id: 'L6-G6-EX3', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '像___開演唱會的時候，美美都要去聽。', blanks: [{ index: 0, acceptedAnswers: ['五月天這樣受歡迎的樂團'] }], targetPattern: 'L6-G6' },
        { id: 'L6-G6-EX4', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '美美喜歡流行的東西，像___，她都要買當季款式。', blanks: [{ index: 0, acceptedAnswers: ['衣服、包包這樣的東西'] }], targetPattern: 'L6-G6' },
        { id: 'L6-G6-EX5', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '像___，都能讓我們放鬆心情。', blanks: [{ index: 0, acceptedAnswers: ['到鄉下看星星這樣的活動'] }], targetPattern: 'L6-G6' }
      ]
    },
    {
      id: 'L6-G7', lessonId: 'L6', order: 7, pattern: '一方面…，一方面…',
      functionVi: 'Mẫu câu trình bày hai khía cạnh hoặc góc nhìn khác nhau về cùng một sự việc.',
      functionEn: 'This pattern presents two different perspectives on an event.',
      examples: [
        { traditional: '一方面可以讓孩子在田裡跑跑跳跳，接近自然，一方面自己也可以放鬆心情。', simplified: '一方面可以让孩子在田里跑跑跳跳，接近自然，一方面自己也可以放松心情。', english: 'On the one hand, it lets kids run around in the fields and be close to nature, while on the other, they themselves can relax.', vietnamese: 'Một mặt để con chạy nhảy ngoài ruộng, gần gũi thiên nhiên, mặt khác bản thân cũng được thư giãn tinh thần.' },
        { traditional: '她去聽五月天的演唱會，一方面想放鬆心情，一方面也想了解為什麼五月天這麼受歡迎。', simplified: '她去听五月天的演唱会，一方面想放松心情，一方面也想了解为什么五月天这么受欢迎。', english: 'She went to the Mayday concert, on the one hand, to kick back and relax, on the other, to figure out why the band is so popular.', vietnamese: 'Cô ấy đi nghe hòa nhạc của Mayday, một mặt muốn thư giãn, mặt khác cũng muốn hiểu vì sao Mayday được yêu thích đến vậy.' },
        { traditional: '她暑假去打工，一方面想賺點錢，一方面也想學一些社會經驗。', simplified: '她暑假去打工，一方面想赚点钱，一方面也想学一些社会经验。', english: 'She\'s working part time during the summer, on the one hand, to make a little money, on the other, to get a little experience in society.', vietnamese: 'Cô ấy đi làm thêm hè, một mặt muốn kiếm chút tiền, mặt khác cũng muốn học hỏi kinh nghiệm xã hội.' },
        { traditional: '去農夫市集買菜，一方面可以吃到最新鮮的蔬菜、水果，一方面也可以幫助小農。', simplified: '去农夫市集买菜，一方面可以吃到最新鲜的蔬菜、水果，一方面也可以帮助小农。', english: 'Going to the farmer\'s market, on the one hand, allows you to eat really fresh vegetables and fruit; on the other, it helps the small farmer.', vietnamese: 'Đi chợ nông dân mua rau, một mặt được ăn rau quả tươi nhất, mặt khác cũng giúp được tiểu nông.' },
        { traditional: '過節的時候回家鄉，一方面可以跟家人團聚，一方面還可以看看老同學。', simplified: '过节的时候回家乡，一方面可以跟家人团聚，一方面还可以看看老同学。', english: 'Going back to your hometown during holidays allows you to, on the one hand, get together with your family, and on the other, see your old schoolmates.', vietnamese: 'Dịp lễ về quê, một mặt được đoàn tụ với gia đình, mặt khác còn gặp lại bạn học cũ.' }
      ],
      usageNotesVi: 'Đây là cấu trúc hơi mang tính văn viết, ít dùng trong khẩu ngữ hàng ngày.',
      exercises: [
        { id: 'L6-G7-EX1', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你為什麼不參加校外教學？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['一方面是因為我沒時間，一方面是對那個地方沒興趣。'] }], targetPattern: 'L6-G7' },
        { id: 'L6-G7-EX2', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：大明為什麼轉到會計系？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['一方面是因為工作機會比較多，一方面也是家人的建議。'] }], targetPattern: 'L6-G7' },
        { id: 'L6-G7-EX3', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：媽媽為什麼不讓孩子看漫畫？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['一方面擔心內容不適合，一方面也怕影響功課。'] }], targetPattern: 'L6-G7' },
        { id: 'L6-G7-EX4', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你表哥為什麼用天然堆肥種蔬菜？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['一方面可以減少對環境的汙染，一方面大家也可以吃得安心。'] }], targetPattern: 'L6-G7' },
        { id: 'L6-G7-EX5', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：父母為什麼不喜歡孩子當農夫？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['一方面覺得工作辛苦，一方面也擔心收入不穩定。'] }], targetPattern: 'L6-G7' }
      ]
    },
    {
      id: 'L6-G8', lessonId: 'L6', order: 8, pattern: '隨著S1…，S2也…',
      functionVi: 'Mẫu câu thể hiện rằng sự thay đổi ở S1 góp phần quan trọng dẫn đến sự thay đổi tương ứng ở S2.',
      functionEn: 'This pattern means that S1 contributes significantly to the realisation of S2.',
      examples: [
        { traditional: '隨著小農越來越受重視，到農村來觀光的人也慢慢地多起來了。', simplified: '随着小农越来越受重视，到农村来观光的人也慢慢地多起来了。', english: 'As more and more importance is placed on small farmers, a steadily increasing number of people are arriving in farming villages for sightseeing.', vietnamese: 'Cùng với việc tiểu nông ngày càng được coi trọng, số người đến nông thôn tham quan cũng dần dần tăng lên.' },
        { traditional: '隨著中國的經濟越來越好，中國在國際上的地位也越來越重要。', simplified: '随着中国的经济越来越好，中国在国际上的地位也越来越重要。', english: 'As a consequence of China\'s improving economy, the country\'s international position has been increasing in importance.', vietnamese: 'Cùng với việc kinh tế Trung Quốc ngày càng tốt lên, vị thế quốc tế của nước này cũng ngày càng quan trọng hơn.' },
        { traditional: '隨著她的中文越來越好，她參加的活動也越來越多。', simplified: '随着她的中文越来越好，她参加的活动也越来越多。', english: 'As her Chinese improves, she is taking part in more and more activities.', vietnamese: 'Cùng với việc tiếng Trung của cô ấy ngày càng tốt, hoạt động cô ấy tham gia cũng ngày càng nhiều.' },
        { traditional: '隨著大家對農藥越來越了解，買有機產品的人也越來越多了。', simplified: '随着大家对农药越来越了解，买有机产品的人也越来越多了。', english: 'As people come to better understand pesticides, an increasing number of people are buying organic products.', vietnamese: 'Cùng với việc mọi người ngày càng hiểu rõ về thuốc trừ sâu, số người mua sản phẩm hữu cơ cũng ngày càng nhiều.' },
        { traditional: '隨著研究所考試的時間越來越近，他的壓力也越來越大。', simplified: '随着研究所考试的时间越来越近，他的压力也越来越大。', english: 'As the date for the grad school entrance test drew nearer, he grew increasingly stressed out.', vietnamese: 'Cùng với việc ngày thi cao học càng đến gần, áp lực của anh ấy cũng càng lớn.' }
      ],
      usageNotesVi: 'Mẫu này không dùng trong hội thoại thường ngày, mang sắc thái trang trọng, thường gặp trong văn viết, báo chí.',
      exercises: [
        { id: 'L6-G8-EX1', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '隨著收入越來越高，___。', blanks: [{ index: 0, acceptedAnswers: ['大家願意花的錢也越來越多'] }], targetPattern: 'L6-G8' },
        { id: 'L6-G8-EX2', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '隨著大家越來越重視健康，___。', blanks: [{ index: 0, acceptedAnswers: ['買有機食品的人也越來越多'] }], targetPattern: 'L6-G8' },
        { id: 'L6-G8-EX3', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '隨著使用網路的人越來越多，___。', blanks: [{ index: 0, acceptedAnswers: ['在網路上買東西的人也越來越多'] }], targetPattern: 'L6-G8' },
        { id: 'L6-G8-EX4', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '隨著到農村來觀光的人越來越多，___。', blanks: [{ index: 0, acceptedAnswers: ['鄉下的民宿和店也越來越多'] }], targetPattern: 'L6-G8' },
        { id: 'L6-G8-EX5', lessonId: 'L6', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '隨著她推銷的經驗越來越多，___。', blanks: [{ index: 0, acceptedAnswers: ['她的業績也越來越好'] }], targetPattern: 'L6-G8' }
      ]
    }
  ],
  workbookExercises: [
    {
      id: 'L6-WB-fb-1', lessonId: 'L6', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền động từ thích hợp (a-j) vào mỗi danh từ cho sẵn, ghép thành một cụm quen dùng (câu mẫu "表" đã làm sẵn: 填表).',
      wordBank: ['填', '泡', '出', '種', '蓋', '省', '戴', '賺', '交', '放'],
      textWithBlanks: '例：填 表　　1.___錢　2.___時間　3.___朋友　4.___房子　5.___香包　6.___番茄　7.___溫泉　8.___天燈　9.___問題',
      blanks: [
        { index: 1, acceptedAnswers: ['賺'] },
        { index: 2, acceptedAnswers: ['省'] },
        { index: 3, acceptedAnswers: ['交'] },
        { index: 4, acceptedAnswers: ['蓋'] },
        { index: 5, acceptedAnswers: ['戴'] },
        { index: 6, acceptedAnswers: ['種'] },
        { index: 7, acceptedAnswers: ['泡'] },
        { index: 8, acceptedAnswers: ['放'] },
        { index: 9, acceptedAnswers: ['出'] }
      ]
    },
    {
      id: 'L6-WB-fb-2', lessonId: 'L6', section: 'fill-bank', type: 'multiple-choice',
      prompt: '我表哥花了很多時間＿＿＿這些西瓜，這些西瓜才會長得這麼漂亮。另外，他最近還研究出一個更香更甜的新＿＿＿。',
      question: '選出兩個空格都正確的詞：',
      options: [{ id: 'a', text: '關心／品種' }, { id: 'b', text: '照顧／品種' }, { id: 'c', text: '照顧／種類' }],
      correctOptionId: 'b',
      explanationVi: '"照顧"（chăm sóc）hợp với việc chăm cây hơn "關心"（quan tâm, thường dùng cho người）; "新品種"（giống mới）là cách nói đúng, còn "種類"（chủng loại）không hợp ngữ cảnh này.'
    },
    {
      id: 'L6-WB-fb-3', lessonId: 'L6', section: 'fill-bank', type: 'multiple-choice',
      prompt: '現在這個颱風慢慢地＿＿＿台灣，會讓這幾天的＿＿＿變得很不穩定。出門一定要記得帶傘。',
      question: '選出兩個空格都正確的詞：',
      options: [{ id: 'a', text: '近／天氣' }, { id: 'b', text: '接近／天氣' }, { id: 'c', text: '接近／氣候' }],
      correctOptionId: 'b',
      explanationVi: '"接近"（tiếp cận, đang đến gần）là động từ hoàn chỉnh hơn "近"; "天氣"（thời tiết, ngắn hạn）hợp với "mấy ngày này" hơn "氣候"（khí hậu, dài hạn）.'
    },
    {
      id: 'L6-WB-fb-4', lessonId: 'L6', section: 'fill-bank', type: 'multiple-choice',
      prompt: '我的朋友來找我玩，可是我現在有事不能陪他。他想去孔廟看看，請你＿＿＿我帶他去孔廟走一＿＿＿吧！',
      question: '選出兩個空格都正確的詞：',
      options: [{ id: 'a', text: '幫／趟' }, { id: 'b', text: '幫忙／趟' }, { id: 'c', text: '幫／頓' }],
      correctOptionId: 'a',
      explanationVi: '"幫" + động từ khác（幫我帶他去）đúng ngữ pháp, còn "幫忙" không đi trực tiếp với một động từ khác kiểu này; "一趟"（một chuyến đi）hợp hơn "一頓"（dùng cho bữa ăn）.'
    },
    {
      id: 'L6-WB-fb-5', lessonId: 'L6', section: 'fill-bank', type: 'multiple-choice',
      prompt: '在我認識的甜點師傅＿＿＿，她最＿＿＿顧客的想法。',
      question: '選出兩個空格都正確的詞：',
      options: [{ id: 'a', text: '其中／重視' }, { id: 'b', text: '當中／重視' }, { id: 'c', text: '當中／講究' }],
      correctOptionId: 'b',
      explanationVi: '"在…當中"（trong số…）tự nhiên hơn "其中" ở vị trí này; "重視"（coi trọng）hợp với "ý kiến khách hàng" hơn "講究"（cầu kỳ, kỹ tính, thường đi với ăn uống／trang phục）.'
    },
    {
      id: 'L6-WB-fb-6', lessonId: 'L6', section: 'fill-bank', type: 'multiple-choice',
      prompt: '雨越下越大，＿＿＿天也黑了，我們今天就別去山上那家火鍋店了。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '恐怕' }, { id: 'b', text: '再加上' }],
      correctOptionId: 'b',
      explanationVi: '"再加上"（thêm vào đó）dùng để nối thêm một lý do nữa（trời tối）vào lý do đã có（mưa to）; "恐怕"（e rằng）không hợp vì phía sau là sự việc chắc chắn, không phải phỏng đoán.'
    },

    { id: 'L6-WB-fw-1', lessonId: 'L6', section: 'fill-write', type: 'fill-blank', textWithBlanks: '根據研究，現在世界上大概有兩千五百種語言快要___(xiāoshī)了。有些教授正在透過各種辦法來保護這些語言，不過並不是所有的人都___(zhīchí)他們的做法。', blanks: [{ index: 0, acceptedAnswers: ['消失'] }, { index: 1, acceptedAnswers: ['支持'] }] },
    { id: 'L6-WB-fw-2', lessonId: 'L6', section: 'fill-write', type: 'fill-blank', textWithBlanks: '為了讓水果在市場上賣的時候看起來很漂亮，農夫會在水果還沒___(shóu)以前，就把水果___(zhāi)下來。', blanks: [{ index: 0, acceptedAnswers: ['熟'] }, { index: 1, acceptedAnswers: ['摘'] }] },
    { id: 'L6-WB-fw-3', lessonId: 'L6', section: 'fill-write', type: 'fill-blank', textWithBlanks: '很多商人都___(jìnliàng)想辦法，讓產品的___(lìrùn)變高，認為只有這樣才能賺錢。', blanks: [{ index: 0, acceptedAnswers: ['盡量'] }, { index: 1, acceptedAnswers: ['利潤'] }] },
    { id: 'L6-WB-fw-4', lessonId: 'L6', section: 'fill-write', type: 'fill-blank', textWithBlanks: '由於這裡沒有很多外面的人來，當地人___(duìdài)外面的人不太___(yǒushàn)。你剛搬來這裡，晚上最好不要___(suíbiàn)出去。', blanks: [{ index: 0, acceptedAnswers: ['對待'] }, { index: 1, acceptedAnswers: ['友善'] }, { index: 2, acceptedAnswers: ['隨便'] }] },
    { id: 'L6-WB-fw-5', lessonId: 'L6', section: 'fill-write', type: 'fill-blank', textWithBlanks: '放長假的時候，姐姐都會帶著她的孩子回我們南部鄉下的家，讓原來___(ānjìng)的老家變得熱鬧起來，順便也趁這個機會去___(bàifǎng)一些親戚。', blanks: [{ index: 0, acceptedAnswers: ['安靜'] }, { index: 1, acceptedAnswers: ['拜訪'] }] },

    {
      id: 'L6-WB-fb-7', lessonId: 'L6', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền từ thích hợp vào đoạn văn (mỗi từ chỉ dùng 1 lần).',
      wordBank: ['由於', '辛苦', '信任', '推銷', '消費', '減少'],
      textWithBlanks: '最近因為經濟不好，大家都不太願意多花錢來買有機食品，我們的顧客1.___了，所以我們店長居然想了一個奇怪的辦法：他打算帶所有的店員到農村去種田。2.___我們都是在城市長大的，都沒種過田，所以一開始都很反對這個活動，但是店長一定要我們參加。沒想到透過這個活動，我們一方面了解到農夫的3.___，一方面也讓我們好好地想土地和人的關係。我們也發現到，像這樣的實際經驗，讓我們更知道怎麼4.___有機食品。因為能跟顧客說明清楚這些食品是怎麼來的，顧客才會5.___我們；另外，也讓顧客了解有機食品對我們的身體健康、環境都比較好，這樣才能吸引更多的人來我們店裡6.___。',
      blanks: [
        { index: 1, acceptedAnswers: ['減少'] },
        { index: 2, acceptedAnswers: ['由於'] },
        { index: 3, acceptedAnswers: ['辛苦'] },
        { index: 4, acceptedAnswers: ['推銷'] },
        { index: 5, acceptedAnswers: ['信任'] },
        { index: 6, acceptedAnswers: ['消費'] }
      ]
    },

    {
      id: 'L6-WB-read-a1', lessonId: 'L6', section: 'reading', type: 'multiple-choice',
      prompt: '阿德：十幾年沒回來，以前的田都變成高樓了。\n雅婷：隨著經濟的發展，大樓一棟一棟地蓋起來了，古老的建築也一棟一棟地消失了。',
      question: '根據這個對話，下面哪一個是對的？',
      options: [{ id: 'a', text: '因為經濟發展，所以這裡有了很大的變化。' }, { id: 'b', text: '這裡以前就有大樓，不過現在更多了。' }, { id: 'c', text: '老房子並沒有因為經濟發展不見了。' }],
      correctOptionId: 'a',
      explanationVi: '"隨著經濟的發展…大樓一棟一棟地蓋起來了，古老的建築也…消失了"，確認因為經濟發展，這裡有了很大的變化。'
    },
    {
      id: 'L6-WB-read-a2', lessonId: 'L6', section: 'reading', type: 'multiple-choice',
      prompt: '小珊：修理機車的師傅薪水很高吧？怎麼你們機車店好像一直找不到人來做。\n阿明：修理機車的師傅很辛苦，再加上社會地位不高，雖然收入不錯，但是很多年輕人寧可穿得漂漂亮亮地去當店員，也不願意來做這個工作。',
      question: '根據這個對話，下面哪一個是對的？',
      options: [{ id: 'a', text: '只是因為社會地位低，所以沒有人想當修理機車的師傅。' }, { id: 'b', text: '年輕人比較喜歡在乾淨舒服的地方工作，薪水差也沒關係。' }, { id: 'c', text: '修理機車的師傅薪水不如店員的高。' }],
      correctOptionId: 'b',
      explanationVi: '"寧可穿得漂漂亮亮地去當店員，也不願意來做這個工作"顯示年輕人寧可選擇乾淨舒服的工作環境，即使薪水不一定更高。'
    },
    {
      id: 'L6-WB-read-a3', lessonId: 'L6', section: 'reading', type: 'multiple-choice',
      prompt: '敏萱：現代人越來越重視休閒活動。\n怡君：是啊。像我哥哥，雖然薪水不高，但是除了週末會帶孩子去山上跑跑跳跳、接近大自然以外，每年還會出國一次，一方面放鬆心情，一方面也讓孩子多認識不同的文化。',
      question: '根據這個對話，下面哪一個是對的？',
      options: [{ id: 'a', text: '他哥哥覺得接近自然不重要，認識不同的文化才重要。' }, { id: 'b', text: '哥哥收入不多，捨不得花錢做休閒活動。' }, { id: 'c', text: '他哥哥帶孩子出國是要孩子多了解不同的文化。' }],
      correctOptionId: 'c',
      explanationVi: '"一方面放鬆心情，一方面也讓孩子多認識不同的文化"，確認出國其中一個目的是讓孩子認識不同文化。'
    },

    {
      id: 'L6-WB-read-b1', lessonId: 'L6', section: 'reading', type: 'multiple-choice',
      prompt: '【美美化妝品　歡慶週年】單筆消費折扣：滿$5,000，現折$700。\n敏萱看了這張廣告以後，就想去這裡購物，而且還說一定要花五千多塊。',
      question: '敏萱為什麼說一定要花五千多塊？',
      options: [{ id: 'a', text: '因為滿5,000元才能折扣700元。' }, { id: 'b', text: '因為週年慶每個人都規定要花五千元。' }, { id: 'c', text: '因為她想買很多化妝品送朋友。' }],
      correctOptionId: 'a',
      explanationVi: '廣告寫"單筆消費滿$5,000，現折$700"，所以要花滿5,000元才能拿到700元的折扣。'
    },
    {
      id: 'L6-WB-read-b2', lessonId: 'L6', section: 'reading', type: 'multiple-choice',
      prompt: '【農夫市集　2017年春季】每週六、日14:30-20:30。驚喜活動：三月每週六、日在館內餐飲消費300元，即可拿農夫市集攤「當地出產」新鮮蔬果一份。',
      question: '如果我在四月的一個星期天下午去，市集會怎麼樣？',
      options: [{ id: 'a', text: '市集照常營業，但不一定能拿到驚喜禮物（因為驚喜活動只到三月）。' }, { id: 'b', text: '市集只在三月開放，四月不開放。' }, { id: 'c', text: '市集照常營業，而且四月也能拿到驚喜禮物。' }],
      correctOptionId: 'a',
      explanationVi: '市集本身是"2017年春季每週六、日"營業，四月仍算在春季內；但"驚喜活動"只限定"三月"，所以四月去不一定能拿到禮物。'
    },
    {
      id: 'L6-WB-read-b3', lessonId: 'L6', section: 'reading', type: 'multiple-choice',
      prompt: '【農夫市集　2017年春季】驚喜活動：三月每週六、日在館內餐飲消費300元，即可拿農夫市集攤「當地出產」新鮮蔬果一份。',
      question: '三月如果在館內用餐，要花多少錢才能拿到禮物？',
      options: [{ id: 'a', text: '消費滿300元。' }, { id: 'b', text: '消費滿500元。' }, { id: 'c', text: '不需要消費，只要去就有。' }],
      correctOptionId: 'a',
      explanationVi: '"消費300元，即可拿…新鮮蔬果一份"，所以要花滿300元才能拿到禮物。'
    },

    { id: 'L6-WB-dc-1', lessonId: 'L6', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L6-G1', turns: [{ speaker: 'A', text: '你怎麼突然決定要回鄉下種田？', isBlank: false }, { speaker: 'B', text: '（因為…才…）', isBlank: true }], sampleAnswer: '因為看到父母年紀大了、做不動了，我才決定回鄉下種田的。' },
    { id: 'L6-WB-dc-2', lessonId: 'L6', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L6-G2', turns: [{ speaker: 'A', text: '你為什麼那麼討厭他？', isBlank: false }, { speaker: 'B', text: '（…不說，…還…）', isBlank: true }], sampleAnswer: '他說話不客氣不說，還常常說別人的壞話，我當然討厭他。' },
    { id: 'L6-WB-dc-3', lessonId: 'L6', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L6-G3', turns: [{ speaker: 'A', text: '為什麼你說他是你的知音呢？', isBlank: false }, { speaker: 'B', text: '（再加上）', isBlank: true }], sampleAnswer: '因為他懂我說的每一句話，再加上我們的興趣也差不多，所以我說他是我的知音。' },
    { id: 'L6-WB-dc-4', lessonId: 'L6', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L6-G4', turns: [{ speaker: 'A', text: '你有沒有淺藍色的衣服？可以借我嗎？', isBlank: false }, { speaker: 'B', text: '沒有。（什麼都…就是…）', isBlank: true }], sampleAnswer: '我的衣服什麼顏色都有，就是沒有淺藍色的。' },
    { id: 'L6-WB-dc-5', lessonId: 'L6', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L6-G5', turns: [{ speaker: 'A', text: '他真的對穿很講究。', isBlank: false }, { speaker: 'B', text: '（寧可…也…）', isBlank: true }], sampleAnswer: '是啊，他寧可餐餐吃麵包，也要買一件好看的外套。' },
    { id: 'L6-WB-dc-6', lessonId: 'L6', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L6-G6', turns: [{ speaker: 'A', text: '你喜歡什麼樣的旅行方式？', isBlank: false }, { speaker: 'B', text: '（像…這樣…）', isBlank: true }], sampleAnswer: '像到鄉下住一晚、親手下田這樣的旅行，我都很喜歡。' },
    { id: 'L6-WB-dc-7', lessonId: 'L6', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L6-G7', turns: [{ speaker: 'A', text: '為什麼充實自己的專業能力那麼重要？', isBlank: false }, { speaker: 'B', text: '（一方面…，一方面（也）…）', isBlank: true }], sampleAnswer: '一方面可以讓工作更順利，一方面也能讓自己更有自信。' },
    { id: 'L6-WB-dc-8', lessonId: 'L6', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L6-G8', turns: [{ speaker: 'A', text: '最近來這裡欣賞櫻花的人多了起來。', isBlank: false }, { speaker: 'B', text: '（隨著）', isBlank: true }], sampleAnswer: '是啊，隨著社群媒體上分享照片的人越來越多，來拍照的遊客也跟著變多了。' },

    {
      id: 'L6-WB-comp-1', lessonId: 'L6', section: 'composition', type: 'composition',
      topicVi: 'Bạn của bạn vốn làm ở một công ty lớn, thu nhập khá tốt, nhưng gần đây anh ấy đang cân nhắc bỏ công việc đó để về quê làm nông dân. Anh ấy muốn nghe ý kiến của bạn. Bạn sẽ nói gì?',
      requiredWords: ['L6-006', 'L6-023', 'L6-043', 'L6-045', 'L6-013', 'L6-050', 'L6-058', 'L6-037'],
      requiredPatterns: ['L6-G1', 'L6-G2', 'L6-G3', 'L6-G4', 'L6-G5', 'L6-G6', 'L6-G7', 'L6-G8'],
      minLength: 200, maxLength: 250
    },
    {
      id: 'L6-WB-comp-2', lessonId: 'L6', section: 'composition', type: 'composition',
      topicVi: 'Phát triển du lịch ở nông thôn là tốt hay không tốt? Đối với người thành phố có thể là tốt, nhưng đối với người ở nông thôn thì chưa chắc. Hãy nêu suy nghĩ của bạn về việc phát triển du lịch ở nông thôn. Bạn đồng ý hay phản đối? Vì sao?',
      requiredWords: ['L6-061', 'L6-063', 'L6-056', 'L6-057', 'L6-002', 'L6-036', 'L6-039', 'L6-060'],
      requiredPatterns: ['L6-G1', 'L6-G2', 'L6-G3', 'L6-G4', 'L6-G5', 'L6-G6', 'L6-G7', 'L6-G8'],
      minLength: 200, maxLength: 250
    }
  ]
}
