import type { Lesson } from '../../../types/lesson'

export const lesson03: Lesson = {
  id: 'L3',
  number: 3,
  titleTraditional: '外套帶了沒有？',
  titleSimplified: '外套带了没有？',
  titlePinyin: 'Wàitào dài le méiyǒu?',
  titleVi: 'Cậu mang áo khoác theo chưa?',
  status: 'available',

  dialogues: [
    [
      { speaker: '', traditional: '（在火鍋店門口）', simplified: '（在火锅店门口）', pinyin: '(Zài huǒguō diàn ménkǒu)', english: '(At the entrance to a hotpot restaurant)', vietnamese: '(Trước cửa quán lẩu)' },
      { speaker: '陳敏萱', traditional: '妳怎麼現在才來？我們等妳等半天了。', simplified: '妳怎么现在才来？我们等妳等半天了。', pinyin: 'Nǐ zěnme xiànzài cái lái? Wǒmen děng nǐ děng bàntiān le.', english: 'What took you so long to get here? We’ve been waiting for you for a long time.', vietnamese: 'Sao giờ cậu mới đến? Bọn mình đợi cậu mãi rồi.' },
      { speaker: '羅珊蒂', traditional: '對不起，我來晚了。我走到半路下起雨來了，只好又回去拿傘。台灣的天氣真奇怪，說變就變。', simplified: '对不起，我来晚了。我走到半路下起雨来了，只好又回去拿伞。台湾的天气真奇怪，说变就变。', pinyin: 'Duìbùqǐ, wǒ lái wǎn le. Wǒ zǒu dào bànlù xià qǐ yǔ lái le, zhǐhǎo yòu huíqù ná sǎn. Táiwān de tiānqì zhēn qíguài, shuō biàn jiù biàn.', english: 'Sorry, I’ve come late. I walked half way here and it started raining, so I had to go back again and get my umbrella. Taiwan’s weather is strange. It can change just like that.', vietnamese: 'Xin lỗi, mình đến muộn rồi. Mình đi được nửa đường thì trời đổ mưa, đành phải quay về lấy ô. Thời tiết Đài Loan lạ thật, nói thay đổi là thay đổi ngay.' },
      { speaker: '陳敏萱', traditional: '就是啊。昨天還出大太陽，今天就又颳風又下雨。', simplified: '就是啊。昨天还出大太阳，今天就又刮风又下雨。', pinyin: 'Jiùshì a. Zuótiān hái chū dà tàiyáng, jīntiān jiù yòu guāfēng yòu xiàyǔ.', english: 'Quite right. Yesterday, the sun was out; today, it’s windy and rainy.', vietnamese: 'Đúng vậy. Hôm qua còn nắng chang chang, hôm nay đã vừa có gió vừa mưa rồi.' },
      { speaker: '高橋健太', traditional: '台灣是個海島，冬天的時候，受到北方來的冷空氣的影響，天氣很不穩定。', simplified: '台湾是个海岛，冬天的时候，受到北方来的冷空气的影响，天气很不稳定。', pinyin: 'Táiwān shì ge hǎidǎo, dōngtiān de shíhòu, shòudào běifāng lái de lěng kōngqì de yǐngxiǎng, tiānqì hěn bù wěndìng.', english: 'Taiwan is a sea island. In the winter, it is influenced by cold air from the north. The weather is very unstable.', vietnamese: 'Đài Loan là một hòn đảo, vào mùa đông, chịu ảnh hưởng của không khí lạnh từ phương Bắc, thời tiết rất bất ổn.' },
      { speaker: '羅珊蒂', traditional: '幸虧我買了外套，要不然就只好躲在家裡了。', simplified: '幸亏我买了外套，要不然就只好躲在家里了。', pinyin: 'Xìngkuī wǒ mǎi le wàitào, yàobùrán jiù zhǐhǎo duǒ zài jiālǐ le.', english: 'Fortunately, I bought a coat; otherwise, I would have no choice but to hide in my house.', vietnamese: 'May mà mình đã mua áo khoác, không thì chỉ còn cách trốn ở nhà thôi.' },
      { speaker: '陳敏萱', traditional: '沒那麼嚴重吧，今天還有18度。這樣的溫度在荷蘭只能算是夏天。荷蘭的冬天還常常到零下呢。', simplified: '没那么严重吧，今天还有18度。这样的温度在荷兰只能算是夏天。荷兰的冬天还常常到零下呢。', pinyin: 'Méi nàme yánzhòng ba, jīntiān hái yǒu shíbā dù. Zhèyàng de wēndù zài Hélán zhǐ néng suànshì xiàtiān. Hélán de dōngtiān hái chángcháng dào língxià ne.', english: 'It’s not that serious. It even got up to 18 degrees today. This kind of temperature in the Netherlands would only be regarded as summer. In the winter, it often goes below zero in the Netherlands.', vietnamese: 'Không nghiêm trọng đến thế đâu, hôm nay còn tận 18 độ. Nhiệt độ này ở Hà Lan chỉ tính là mùa hè thôi. Mùa đông ở Hà Lan còn thường xuống dưới 0 độ nữa cơ.' },
      { speaker: '高橋健太', traditional: '今天溫度是不低，不過因為下雨，感覺比實際溫度低得多，難怪羅珊蒂受不了。', simplified: '今天温度是不低，不过因为下雨，感觉比实际温度低得多，难怪罗珊蒂受不了。', pinyin: 'Jīntiān wēndù shì bù dī, búguò yīnwèi xiàyǔ, gǎnjué bǐ shíjì wēndù dī de duō, nánguài Luó Shāndì shòu bù liǎo.', english: 'Today’s temperature actually isn’t that low, but because it’s raining, it feels much colder than it really is. It’s no wonder Luo Shandi can’t stand it.', vietnamese: 'Nhiệt độ hôm nay đúng là không thấp, nhưng vì trời mưa nên cảm giác lạnh hơn nhiều so với nhiệt độ thực tế, thảo nào La San Đế chịu không nổi.' },
      { speaker: '', traditional: '（他們走進火鍋店坐下）', simplified: '（他们走进火锅店坐下）', pinyin: '(Tāmen zǒujìn huǒguō diàn zuòxià)', english: '(They enter the hotpot restaurant and sit down.)', vietnamese: '(Họ bước vào quán lẩu và ngồi xuống)' },
      { speaker: '羅珊蒂', traditional: '我餓死了，我們趕快點菜吧。天氣這麼冷，吃牛肉最好。你們呢？想吃點什麼？', simplified: '我饿死了，我们赶快点菜吧。天气这么冷，吃牛肉最好。你们呢？想吃点什么？', pinyin: 'Wǒ è sǐle, wǒmen gǎnkuài diǎncài ba. Tiānqì zhème lěng, chī niúròu zuì hǎo. Nǐmen ne? Xiǎng chī diǎn shénme?', english: 'I’m starving to death. Let’s order right away. With the weather this cold, eating beef would be best. And you guys? What would you like to eat?', vietnamese: 'Mình đói chết đi được, gọi món nhanh đi. Trời lạnh thế này, ăn bò là ngon nhất. Còn các cậu? Muốn ăn gì?' },
      { speaker: '陳敏萱', traditional: '我昨天剛吃過烤肉，今天就點素菜鍋吧。這個季節的大白菜最甜了。', simplified: '我昨天刚吃过烤肉，今天就点素菜锅吧。这个季节的大白菜最甜了。', pinyin: 'Wǒ zuótiān gāng chī guò kǎoròu, jīntiān jiù diǎn sùcài guō ba. Zhège jìjié de dàbáicài zuì tián le.', english: 'I just had barbecue yesterday. Today, I’ll go ahead and order a vegetarian pot. Chinese cabbage is sweetest this time of year.', vietnamese: 'Hôm qua mình vừa ăn thịt nướng rồi, hôm nay gọi lẩu chay đi. Cải thảo mùa này ngọt nhất.' },
      { speaker: '高橋健太', traditional: '聽說這家火鍋店的海鮮很新鮮。我要海鮮。', simplified: '听说这家火锅店的海鲜很新鲜。我要海鲜。', pinyin: 'Tīngshuō zhè jiā huǒguō diàn de hǎixiān hěn xīnxiān. Wǒ yào hǎixiān.', english: 'People say that this hotpot restaurant’s seafood is fresh. I want seafood.', vietnamese: 'Nghe nói hải sản của quán lẩu này rất tươi. Mình muốn ăn hải sản.' },
      { speaker: '羅珊蒂', traditional: '沒想到台灣的冬天這麼冷，看起來我得讓我男朋友春天的時候再來。', simplified: '没想到台湾的冬天这么冷，看起来我得让我男朋友春天的时候再来。', pinyin: 'Méi xiǎngdào Táiwān de dōngtiān zhème lěng, kàn qǐlái wǒ děi ràng wǒ nánpéngyǒu chūntiān de shíhòu zài lái.', english: 'I had no idea that Taiwan’s winter was this cold. It looks like I have to have my boyfriend come in spring.', vietnamese: 'Không ngờ mùa đông Đài Loan lạnh thế này, xem ra mình phải để bạn trai đến vào mùa xuân thôi.' },
      { speaker: '高橋健太', traditional: '春天真的很浪漫，到處都看得到櫻花，可是在台灣有句話說：「春天後母臉」。春天天氣變化比冬天更大，早晚的氣溫也差很多。', simplified: '春天真的很浪漫，到处都看得到樱花，可是在台湾有句话说：「春天后母脸」。春天天气变化比冬天更大，早晚的气温也差很多。', pinyin: 'Chūntiān zhēn de hěn làngmàn, dàochù dōu kàn de dào yīnghuā, kěshì zài Táiwān yǒu jù huà shuō: “Chūntiān hòumǔ liǎn”. Chūntiān tiānqì biànhuà bǐ dōngtiān gèng dà, zǎowǎn de qìwēn yě chà hěn duō.', english: 'Spring is really romantic. You can see cherry blossoms everywhere. But the Taiwanese have a saying, “Spring is like a stepmother’s face”. The weather in spring changes even more drastically. And there are big differences between temperatures in the mornings and evenings.', vietnamese: 'Mùa xuân thật sự rất lãng mạn, đâu đâu cũng thấy hoa anh đào, nhưng ở Đài Loan có câu: "Mùa xuân là mặt mẹ kế". Thời tiết mùa xuân thay đổi còn nhiều hơn mùa đông, nhiệt độ sáng tối cũng chênh lệch nhiều.' },
      { speaker: '陳敏萱', traditional: '高橋說的沒錯。我朋友告訴我，去年春天幾乎每天都下雨，衣服總是乾不了。', simplified: '高桥说的没错。我朋友告诉我，去年春天几乎每天都下雨，衣服总是干不了。', pinyin: 'Gāoqiáo shuō de méi cuò. Wǒ péngyǒu gàosù wǒ, qùnián chūntiān jīhū měitiān dōu xiàyǔ, yīfú zǒngshì gān bù liǎo.', english: 'Gaoqiao is not wrong in what he says. My friend told me that last spring, it rained almost every day. Clothes could never get dry.', vietnamese: 'Cao Kiều nói không sai. Bạn mình kể, mùa xuân năm ngoái hầu như ngày nào cũng mưa, quần áo lúc nào cũng không khô được.' },
      { speaker: '高橋健太', traditional: '是啊，衣服、鞋子都發霉了，所以我去年買了除濕機。', simplified: '是啊，衣服、鞋子都发霉了，所以我去年买了除湿机。', pinyin: 'Shì a, yīfú, xiézi dōu fāméi le, suǒyǐ wǒ qùnián mǎi le chúshījī.', english: 'That’s right. Clothes and shoes all mildewed, so I bought a dehumidifier last year.', vietnamese: 'Đúng vậy, quần áo, giày dép đều bị mốc, nên năm ngoái mình mua máy hút ẩm.' },
      { speaker: '羅珊蒂', traditional: '我們雖然也有雨季，可是下過雨以後晚上就涼快了。不像台北這麼潮濕。我六月來的時候，又悶又熱，又沒有冷氣，真受不了。', simplified: '我们虽然也有雨季，可是下过雨以后晚上就凉快了。不像台北这么潮湿。我六月来的时候，又闷又热，又没有冷气，真受不了。', pinyin: 'Wǒmen suīrán yě yǒu yǔjì, kěshì xià guò yǔ yǐhòu wǎnshàng jiù liángkuài le. Bú xiàng Táiběi zhème cháoshī. Wǒ liùyuè lái de shíhòu, yòu mēn yòu rè, yòu méiyǒu lěngqì, zhēn shòu bù liǎo.', english: 'We also have a rainy season, but after it rains, the evenings are cool. It’s not as humid as Taipei. When I arrived in June, it was stuffy and hot and I didn’t have an air conditioner. I really couldn’t stand it.', vietnamese: 'Chỗ mình tuy cũng có mùa mưa, nhưng mưa xong buổi tối là mát ngay. Không ẩm như Đài Bắc. Lúc mình đến vào tháng Sáu, vừa oi vừa nóng, lại không có máy lạnh, thật không chịu nổi.' },
      { speaker: '陳敏萱', traditional: '我是八月來的。我一來就去海邊曬太陽，朋友都羨慕死了。本來打算六月底回國，但是因為台灣的夏天可以玩很多水上活動，而且吃得到很多熱帶水果，所以我決定晚一點再回去。', simplified: '我是八月来的。我一来就去海边晒太阳，朋友都羡慕死了。本来打算六月底回国，但是因为台湾的夏天可以玩很多水上活动，而且吃得到很多热带水果，所以我决定晚一点再回去。', pinyin: 'Wǒ shì bāyuè lái de. Wǒ yì lái jiù qù hǎibiān shài tàiyáng, péngyǒu dōu xiànmù sǐle. Běnlái dǎsuàn liùyuè dǐ huíguó, dànshì yīnwèi Táiwān de xiàtiān kěyǐ wán hěn duō shuǐshàng huódòng, érqiě chī de dào hěn duō rèdài shuǐguǒ, suǒyǐ wǒ juédìng wǎn yìdiǎn zài huíqù.', english: 'I arrived in August. Right after I arrived, I went to the seaside to bask in the sun. My friends were beside themselves with envy. I originally planned to go home at the end of June, but because there are a lot of water activities to do in Taiwan in the summer and there is a lot of tropical fruit, I decided to go back a little later.', vietnamese: 'Mình đến vào tháng Tám. Vừa đến là mình đi biển tắm nắng ngay, bạn bè ghen tị chết đi được. Ban đầu định cuối tháng Sáu về nước, nhưng vì mùa hè Đài Loan có nhiều hoạt động dưới nước để chơi, lại còn ăn được nhiều trái cây nhiệt đới, nên mình quyết định về muộn hơn một chút.' },
      { speaker: '高橋健太', traditional: '快吃吧。肉煮久了就不好吃了。', simplified: '快吃吧。肉煮久了就不好吃了。', pinyin: 'Kuài chī ba. Ròu zhǔ jiǔ le jiù bù hǎochī le.', english: 'Eat up. Meat doesn’t taste good when it’s cooked too long.', vietnamese: 'Ăn nhanh đi. Thịt luộc lâu là hết ngon đấy.' },
      { speaker: '羅珊蒂', traditional: '真的很好吃。我男朋友來的時候，我們一定要再來這裡聚一聚。', simplified: '真的很好吃。我男朋友来的时候，我们一定要再来这里聚一聚。', pinyin: 'Zhēn de hěn hǎochī. Wǒ nánpéngyǒu lái de shíhòu, wǒmen yídìng yào zài lái zhèlǐ jù yi jù.', english: 'This is really good. When my boyfriend comes, we have got to have another get-together here.', vietnamese: 'Ngon thật đấy. Lúc bạn trai mình đến, chúng ta nhất định phải quay lại đây tụ tập lần nữa.' },
      { speaker: '陳敏萱、高橋健太', traditional: '那有什麼問題。', simplified: '那有什么问题。', pinyin: 'Nà yǒu shénme wèntí.', english: 'I have no problem with that.', vietnamese: 'Chuyện đó thì có vấn đề gì đâu.' }
    ]
  ],

  shortReading: {
    traditional:
      '華人的重要節日\n\n　　在台灣，除了原住民以外，大部分的人的祖先都是從中國移民來的，所以我們的傳統節日都跟中國一樣。一年當中，最重要的三個節日——春節、端午節跟中秋節——都是根據農曆來的。\n\n　　古時候，中國是一個農業國家，農人的生活和節日都跟季節的變化有關係。比方說，新年又叫春節，就是春天的開始。這時候，天氣還很冷，農人利用這段難得的休息時間，跟家人好好地聚聚。除夕這一天，在家除了祭祖，還要拜神。大年初一，全家人到廟裡拜拜，希望新的一年，神能讓他們一家人平安、健康。\n\n　　到了農曆五月，天氣越來越熱，蚊蟲慢慢多起來，人也容易生病。五月五號端午節這一天，古代的人戴香包、喝雄黃酒，還在門上掛一些植物。這些都是為了把瘟疫趕走。在現代，有人還按照傳統的做法過節，他們覺得這麼做多少有一點作用，有的人認為這是一種迷信。\n\n　　秋天是收成的季節，很多民族都有慶祝活動。農曆八月十五日的中秋節就是這樣來的。這一天，月亮又大又圓。雖然現在台灣已經不是農業社會了，但是離開家鄉的人，再遠也要回家團聚。晚餐以後，一家人吃著月餅、柚子，一邊給孩子說月亮的故事，過一個溫馨的節日。',
    simplified:
      '华人的重要节日\n\n　　在台湾，除了原住民以外，大部分的人的祖先都是从中国移民来的，所以我们的传统节日都跟中国一样。一年当中，最重要的三个节日——春节、端午节跟中秋节——都是根据农历来的。\n\n　　古时候，中国是一个农业国家，农人的生活和节日都跟季节的变化有关系。比方说，新年又叫春节，就是春天的开始。这时候，天气还很冷，农人利用这段难得的休息时间，跟家人好好地聚聚。除夕这一天，在家除了祭祖，还要拜神。大年初一，全家人到庙里拜拜，希望新的一年，神能让他们一家人平安、健康。\n\n　　到了农历五月，天气越来越热，蚊虫慢慢多起来，人也容易生病。五月五号端午节这一天，古代的人戴香包、喝雄黄酒，还在门上挂一些植物。这些都是为了把瘟疫赶走。在现代，有人还按照传统的做法过节，他们觉得这么做多少有一点作用，有的人认为这是一种迷信。\n\n　　秋天是收成的季节，很多民族都有庆祝活动。农历八月十五日的中秋节就是这样来的。这一天，月亮又大又圆。虽然现在台湾已经不是农业社会了，但是离开家乡的人，再远也要回家团聚。晚餐以后，一家人吃着月饼、柚子，一边给孩子说月亮的故事，过一个温馨的节日。',
    vietnamese:
      'Những ngày lễ quan trọng của người Hoa\n\nỞ Đài Loan, ngoại trừ người bản địa, tổ tiên của phần lớn mọi người đều di dân từ Trung Quốc đến, nên các ngày lễ truyền thống của chúng ta đều giống Trung Quốc. Trong một năm, ba ngày lễ quan trọng nhất — Tết Nguyên đán, Tết Đoan Ngọ và Tết Trung Thu — đều tính theo âm lịch.\n\nThời xưa, Trung Quốc là một quốc gia nông nghiệp, cuộc sống và các ngày lễ của nông dân đều liên quan đến sự thay đổi của mùa vụ. Ví dụ, năm mới còn gọi là Xuân Tiết (Tết Xuân), chính là khởi đầu của mùa xuân. Lúc này, thời tiết vẫn còn lạnh, nông dân tranh thủ khoảng thời gian nghỉ ngơi hiếm có này để sum họp cùng gia đình. Ngày giao thừa, ở nhà ngoài việc cúng tổ tiên, còn phải cúng thần linh. Mùng một Tết, cả nhà đến chùa miếu lễ bái, mong năm mới thần linh phù hộ cả nhà bình an, khỏe mạnh.\n\nĐến tháng Năm âm lịch, thời tiết ngày càng nóng, muỗi và côn trùng dần nhiều lên, người cũng dễ sinh bệnh. Ngày mùng 5 tháng 5, tức Tết Đoan Ngọ, người xưa đeo túi thơm, uống rượu hùng hoàng, còn treo một số loại cây trên cửa. Tất cả đều nhằm xua đuổi dịch bệnh. Ngày nay, có người vẫn làm theo cách truyền thống để đón lễ, họ cho rằng làm vậy ít nhiều cũng có tác dụng, cũng có người cho rằng đó là một kiểu mê tín.\n\nMùa thu là mùa thu hoạch, nhiều dân tộc đều có hoạt động ăn mừng. Tết Trung Thu ngày 15 tháng 8 âm lịch ra đời từ đó. Ngày này, trăng vừa to vừa tròn. Dù hiện nay Đài Loan không còn là xã hội nông nghiệp nữa, nhưng người xa quê, dù xa đến đâu cũng phải về nhà đoàn tụ. Sau bữa tối, cả nhà cùng ăn bánh trung thu, bưởi, vừa kể cho trẻ con nghe câu chuyện về mặt trăng, đón một cái Tết ấm cúng.'
  },

  phrases: [
    { phraseTraditional: '出大太陽', phraseSimplified: '出大太阳', pinyin: 'chū dà tàiyáng', meaningVi: 'nắng chang chang, trời nắng gắt' },
    { phraseTraditional: '颳風', phraseSimplified: '刮风', pinyin: 'guā fēng', meaningVi: 'có gió, nổi gió' },
    { phraseTraditional: '受到', phraseSimplified: '受到', pinyin: 'shòu dào', meaningVi: 'chịu, nhận (ảnh hưởng)' },
    { phraseTraditional: '受不了', phraseSimplified: '受不了', pinyin: 'shòu bù liǎo', meaningVi: 'không chịu nổi' },
    { phraseTraditional: '餓死了', phraseSimplified: '饿死了', pinyin: 'è sǐle', meaningVi: 'đói chết đi được (nói phóng đại)' },
    { phraseTraditional: '後母臉', phraseSimplified: '后母脸', pinyin: 'hòumǔ liǎn', meaningVi: 'mặt mẹ kế - ví thời tiết thất thường, khó lường' },
    { phraseTraditional: '古時候', phraseSimplified: '古时候', pinyin: 'gǔ shíhòu', meaningVi: 'thời xưa, ngày xưa' },
    { phraseTraditional: '趕走', phraseSimplified: '赶走', pinyin: 'gǎnzǒu', meaningVi: 'xua đuổi' },
    { phraseTraditional: '過節', phraseSimplified: '过节', pinyin: 'guò jié', meaningVi: 'đón lễ, ăn tết' }
  ],

  vocab: [
    { id: 'L3-001', lessonId: 'L3', order: 3, group: 'vocab1', traditional: '空氣', simplified: '空气', pinyin: 'kōngqì', wordClass: ['N'], meaningVi: 'không khí', meaningEn: 'air', tags: ['thoi-tiet'], examples: [{ traditional: '受到北方來的冷空氣的影響。', simplified: '受到北方来的冷空气的影响。', vietnamese: 'Chịu ảnh hưởng của không khí lạnh từ phương Bắc.' }] },
    { id: 'L3-002', lessonId: 'L3', order: 4, group: 'vocab1', traditional: '影響', simplified: '影响', pinyin: 'yǐngxiǎng', wordClass: ['N'], meaningVi: 'ảnh hưởng', meaningEn: 'influence', notes: 'Xem thêm ngữ pháp I: 受到（…的）影響 trong bài này.', examples: [{ traditional: '受到北方來的冷空氣的影響，天氣很不穩定。', simplified: '受到北方来的冷空气的影响，天气很不稳定。', vietnamese: 'Chịu ảnh hưởng của không khí lạnh từ phương Bắc, thời tiết rất bất ổn.' }] },
    { id: 'L3-003', lessonId: 'L3', order: 5, group: 'vocab1', traditional: '穩定', simplified: '稳定', pinyin: 'wěndìng', wordClass: ['Vs'], meaningVi: 'ổn định', meaningEn: 'stable', tags: ['thoi-tiet'], examples: [{ traditional: '天氣很不穩定。', simplified: '天气很不稳定。', vietnamese: 'Thời tiết rất bất ổn.' }] },
    { id: 'L3-004', lessonId: 'L3', order: 6, group: 'vocab1', traditional: '幸虧', simplified: '幸亏', pinyin: 'xìngkuī', wordClass: ['Adv'], meaningVi: 'may mà, may thay', meaningEn: 'fortunately', notes: 'Xem thêm ngữ pháp II: 幸虧… trong bài này.', examples: [{ traditional: '幸虧我買了外套，要不然就只好躲在家裡了。', simplified: '幸亏我买了外套，要不然就只好躲在家里了。', vietnamese: 'May mà mình đã mua áo khoác, không thì chỉ còn cách trốn ở nhà thôi.' }] },
    { id: 'L3-005', lessonId: 'L3', order: 7, group: 'vocab1', traditional: '躲', simplified: '躲', pinyin: 'duǒ', wordClass: ['Vi'], meaningVi: 'trốn, ẩn náu', meaningEn: 'to hide, to go into hiding', examples: [{ traditional: '就只好躲在家裡了。', simplified: '就只好躲在家里了。', vietnamese: 'Chỉ còn cách trốn ở nhà thôi.' }] },
    { id: 'L3-006', lessonId: 'L3', order: 8, group: 'vocab1', traditional: '度', simplified: '度', pinyin: 'dù', wordClass: ['M'], meaningVi: 'độ', meaningEn: 'degree', tags: ['thoi-tiet'], examples: [{ traditional: '今天還有18度。', simplified: '今天还有18度。', vietnamese: 'Hôm nay còn tận 18 độ.' }] },
    { id: 'L3-007', lessonId: 'L3', order: 9, group: 'vocab1', traditional: '溫度', simplified: '温度', pinyin: 'wēndù', wordClass: ['N'], meaningVi: 'nhiệt độ', meaningEn: 'temperature', tags: ['thoi-tiet'], examples: [{ traditional: '這樣的溫度在荷蘭只能算是夏天。', simplified: '这样的温度在荷兰只能算是夏天。', vietnamese: 'Nhiệt độ này ở Hà Lan chỉ tính là mùa hè thôi.' }] },
    { id: 'L3-008', lessonId: 'L3', order: 10, group: 'vocab1', traditional: '零下', simplified: '零下', pinyin: 'língxià', wordClass: ['Vs-attr'], meaningVi: 'dưới 0 độ, âm độ', meaningEn: 'below zero', tags: ['thoi-tiet'], examples: [{ traditional: '荷蘭的冬天還常常到零下呢。', simplified: '荷兰的冬天还常常到零下呢。', vietnamese: 'Mùa đông ở Hà Lan còn thường xuống dưới 0 độ nữa cơ.' }] },
    { id: 'L3-009', lessonId: 'L3', order: 11, group: 'vocab1', traditional: '感覺', simplified: '感觉', pinyin: 'gǎnjué', wordClass: ['Vst'], meaningVi: 'cảm thấy', meaningEn: 'to feel', examples: [{ traditional: '感覺比實際溫度低得多。', simplified: '感觉比实际温度低得多。', vietnamese: 'Cảm giác lạnh hơn nhiều so với nhiệt độ thực tế.' }] },
    { id: 'L3-010', lessonId: 'L3', order: 12, group: 'vocab1', traditional: '實際', simplified: '实际', pinyin: 'shíjì', wordClass: ['Vs'], meaningVi: 'thực tế', meaningEn: 'actual', examples: [{ traditional: '感覺比實際溫度低得多。', simplified: '感觉比实际温度低得多。', vietnamese: 'Cảm giác lạnh hơn nhiều so với nhiệt độ thực tế.' }] },
    { id: 'L3-011', lessonId: 'L3', order: 13, group: 'vocab1', traditional: '難怪', simplified: '难怪', pinyin: 'nánguài', wordClass: ['Adv'], meaningVi: 'thảo nào, chẳng trách', meaningEn: "it's no wonder, no wonder", notes: 'Xem thêm ngữ pháp V: 難怪 trong bài này.', examples: [{ traditional: '難怪羅珊蒂受不了。', simplified: '难怪罗珊蒂受不了。', vietnamese: 'Thảo nào La San Đế chịu không nổi.' }] },
    { id: 'L3-012', lessonId: 'L3', order: 14, group: 'vocab1', traditional: '季節', simplified: '季节', pinyin: 'jìjié', wordClass: ['N'], meaningVi: 'mùa', meaningEn: 'season', tags: ['thoi-tiet'], examples: [{ traditional: '這個季節的大白菜最甜了。', simplified: '这个季节的大白菜最甜了。', vietnamese: 'Cải thảo mùa này ngọt nhất.' }] },
    { id: 'L3-013', lessonId: 'L3', order: 15, group: 'vocab1', traditional: '火鍋', simplified: '火锅', pinyin: 'huǒguō', wordClass: ['N'], meaningVi: 'lẩu', meaningEn: 'hotpot', tags: ['am-thuc'], examples: [{ traditional: '聽說這家火鍋店的海鮮很新鮮。', simplified: '听说这家火锅店的海鲜很新鲜。', vietnamese: 'Nghe nói hải sản của quán lẩu này rất tươi.' }] },
    { id: 'L3-014', lessonId: 'L3', order: 16, group: 'vocab1', traditional: '海鮮', simplified: '海鲜', pinyin: 'hǎixiān', wordClass: ['N'], meaningVi: 'hải sản', meaningEn: 'seafood', tags: ['am-thuc'], examples: [{ traditional: '我要海鮮。', simplified: '我要海鲜。', vietnamese: 'Mình muốn ăn hải sản.' }] },
    { id: 'L3-015', lessonId: 'L3', order: 17, group: 'vocab1', traditional: '新鮮', simplified: '新鲜', pinyin: 'xīnxiān', wordClass: ['Vs'], meaningVi: 'tươi', meaningEn: 'fresh', tags: ['am-thuc'], examples: [{ traditional: '聽說這家火鍋店的海鮮很新鮮。', simplified: '听说这家火锅店的海鲜很新鲜。', vietnamese: 'Nghe nói hải sản của quán lẩu này rất tươi.' }] },
    { id: 'L3-016', lessonId: 'L3', order: 18, group: 'vocab1', traditional: '櫻花', simplified: '樱花', pinyin: 'yīnghuā', wordClass: ['N'], meaningVi: 'hoa anh đào', meaningEn: 'cherry blossom', examples: [{ traditional: '到處都看得到櫻花。', simplified: '到处都看得到樱花。', vietnamese: 'Đâu đâu cũng thấy hoa anh đào.' }] },
    { id: 'L3-017', lessonId: 'L3', order: 19, group: 'vocab1', traditional: '變化', simplified: '变化', pinyin: 'biànhuà', wordClass: ['N'], meaningVi: 'sự thay đổi, biến đổi', meaningEn: 'change', tags: ['thoi-tiet'], examples: [{ traditional: '春天天氣變化比冬天更大。', simplified: '春天天气变化比冬天更大。', vietnamese: 'Thời tiết mùa xuân thay đổi còn nhiều hơn mùa đông.' }] },
    { id: 'L3-018', lessonId: 'L3', order: 20, group: 'vocab1', traditional: '氣溫', simplified: '气温', pinyin: 'qìwēn', wordClass: ['N'], meaningVi: 'nhiệt độ (thời tiết)', meaningEn: 'temperature (weather)', tags: ['thoi-tiet'], examples: [{ traditional: '早晚的氣溫也差很多。', simplified: '早晚的气温也差很多。', vietnamese: 'Nhiệt độ sáng tối cũng chênh lệch nhiều.' }] },
    { id: 'L3-019', lessonId: 'L3', order: 21, group: 'vocab1', traditional: '差', simplified: '差', pinyin: 'chā', wordClass: ['Vst'], meaningVi: 'chênh lệch, khác nhau', meaningEn: 'to differ', examples: [{ traditional: '早晚的氣溫也差很多。', simplified: '早晚的气温也差很多。', vietnamese: 'Nhiệt độ sáng tối cũng chênh lệch nhiều.' }] },
    { id: 'L3-020', lessonId: 'L3', order: 22, group: 'vocab1', traditional: '幾乎', simplified: '几乎', pinyin: 'jīhū', wordClass: ['Adv'], meaningVi: 'hầu như, gần như', meaningEn: 'almost', notes: 'Xem thêm ngữ pháp VII: 幾乎 trong bài này.', examples: [{ traditional: '去年春天幾乎每天都下雨。', simplified: '去年春天几乎每天都下雨。', vietnamese: 'Mùa xuân năm ngoái hầu như ngày nào cũng mưa.' }] },
    { id: 'L3-021', lessonId: 'L3', order: 23, group: 'vocab1', traditional: '乾', simplified: '干', pinyin: 'gān', wordClass: ['Vs'], meaningVi: 'khô', meaningEn: 'dry', tags: ['thoi-tiet'], examples: [{ traditional: '衣服總是乾不了。', simplified: '衣服总是干不了。', vietnamese: 'Quần áo lúc nào cũng không khô được.' }] },
    { id: 'L3-022', lessonId: 'L3', order: 24, group: 'vocab1', traditional: '發霉', simplified: '发霉', pinyin: 'fāméi', wordClass: ['Vp-sep'], meaningVi: 'bị mốc, mọc mốc', meaningEn: 'to mildew', examples: [{ traditional: '衣服、鞋子都發霉了。', simplified: '衣服、鞋子都发霉了。', vietnamese: 'Quần áo, giày dép đều bị mốc.' }] },
    { id: 'L3-023', lessonId: 'L3', order: 25, group: 'vocab1', traditional: '除濕機', simplified: '除湿机', pinyin: 'chúshījī', wordClass: ['N'], meaningVi: 'máy hút ẩm', meaningEn: 'dehumidifier', examples: [{ traditional: '我去年買了除濕機。', simplified: '我去年买了除湿机。', vietnamese: 'Năm ngoái mình mua máy hút ẩm.' }] },
    { id: 'L3-024', lessonId: 'L3', order: 26, group: 'vocab1', traditional: '雨季', simplified: '雨季', pinyin: 'yǔjì', wordClass: ['N'], meaningVi: 'mùa mưa', meaningEn: 'rainy season', tags: ['thoi-tiet'], examples: [{ traditional: '我們雖然也有雨季。', simplified: '我们虽然也有雨季。', vietnamese: 'Chỗ mình tuy cũng có mùa mưa.' }] },
    { id: 'L3-025', lessonId: 'L3', order: 27, group: 'vocab1', traditional: '涼快', simplified: '凉快', pinyin: 'liángkuài', wordClass: ['Vs'], meaningVi: 'mát mẻ', meaningEn: 'cool', tags: ['thoi-tiet'], examples: [{ traditional: '下過雨以後晚上就涼快了。', simplified: '下过雨以后晚上就凉快了。', vietnamese: 'Mưa xong buổi tối là mát ngay.' }] },
    { id: 'L3-026', lessonId: 'L3', order: 28, group: 'vocab1', traditional: '潮濕', simplified: '潮湿', pinyin: 'cháoshī', wordClass: ['Vs'], meaningVi: 'ẩm ướt', meaningEn: 'humid', tags: ['thoi-tiet'], examples: [{ traditional: '不像台北這麼潮濕。', simplified: '不像台北这么潮湿。', vietnamese: 'Không ẩm như Đài Bắc.' }] },
    { id: 'L3-027', lessonId: 'L3', order: 29, group: 'vocab1', traditional: '悶', simplified: '闷', pinyin: 'mēn', wordClass: ['Vs'], meaningVi: 'oi bức, ngột ngạt', meaningEn: 'stuffy', tags: ['thoi-tiet'], examples: [{ traditional: '又悶又熱，又沒有冷氣，真受不了。', simplified: '又闷又热，又没有冷气，真受不了。', vietnamese: 'Vừa oi vừa nóng, lại không có máy lạnh, thật không chịu nổi.' }] },
    { id: 'L3-028', lessonId: 'L3', order: 30, group: 'vocab1', traditional: '冷氣', simplified: '冷气', pinyin: 'lěngqì', wordClass: ['N'], meaningVi: 'máy lạnh, điều hòa', meaningEn: 'air conditioning', examples: [{ traditional: '又沒有冷氣，真受不了。', simplified: '又没有冷气，真受不了。', vietnamese: 'Lại không có máy lạnh, thật không chịu nổi.' }] },

    { id: 'L3-029', lessonId: 'L3', order: 1, group: 'vocab2', traditional: '祖先', simplified: '祖先', pinyin: 'zǔxiān', wordClass: ['N'], meaningVi: 'tổ tiên', meaningEn: 'ancestor', tags: ['van-hoa'], examples: [{ traditional: '大部分的人的祖先都是從中國移民來的。', simplified: '大部分的人的祖先都是从中国移民来的。', vietnamese: 'Tổ tiên của phần lớn mọi người đều di dân từ Trung Quốc đến.' }] },
    { id: 'L3-030', lessonId: 'L3', order: 2, group: 'vocab2', traditional: '移民', simplified: '移民', pinyin: 'yímín', wordClass: ['Vi'], meaningVi: 'di dân, nhập cư', meaningEn: 'to immigrate, to emigrate', examples: [{ traditional: '大部分的人的祖先都是從中國移民來的。', simplified: '大部分的人的祖先都是从中国移民来的。', vietnamese: 'Tổ tiên của phần lớn mọi người đều di dân từ Trung Quốc đến.' }] },
    { id: 'L3-031', lessonId: 'L3', order: 3, group: 'vocab2', traditional: '當中', simplified: '当中', pinyin: 'dāngzhōng', wordClass: ['N'], meaningVi: 'trong số, ở giữa', meaningEn: 'of, amongst', examples: [{ traditional: '一年當中，最重要的三個節日。', simplified: '一年当中，最重要的三个节日。', vietnamese: 'Trong một năm, ba ngày lễ quan trọng nhất.' }] },
    { id: 'L3-032', lessonId: 'L3', order: 4, group: 'vocab2', traditional: '根據', simplified: '根据', pinyin: 'gēnjù', wordClass: ['Prep'], meaningVi: 'dựa theo, căn cứ vào', meaningEn: 'based on, in accordance with, according to', examples: [{ traditional: '都是根據農曆來的。', simplified: '都是根据农历来的。', vietnamese: 'Đều tính theo âm lịch.' }] },
    { id: 'L3-033', lessonId: 'L3', order: 5, group: 'vocab2', traditional: '農曆', simplified: '农历', pinyin: 'nónglì', wordClass: ['N'], meaningVi: 'âm lịch', meaningEn: 'the lunar calendar', tags: ['van-hoa'], examples: [{ traditional: '都是根據農曆來的。', simplified: '都是根据农历来的。', vietnamese: 'Đều tính theo âm lịch.' }] },
    { id: 'L3-034', lessonId: 'L3', order: 6, group: 'vocab2', traditional: '農業', simplified: '农业', pinyin: 'nóngyè', wordClass: ['N'], meaningVi: 'nông nghiệp', meaningEn: 'agriculture', examples: [{ traditional: '中國是一個農業國家。', simplified: '中国是一个农业国家。', vietnamese: 'Trung Quốc là một quốc gia nông nghiệp.' }] },
    { id: 'L3-035', lessonId: 'L3', order: 7, group: 'vocab2', traditional: '農人', simplified: '农人', pinyin: 'nóngrén', wordClass: ['N'], meaningVi: 'nông dân', meaningEn: 'farmer', examples: [{ traditional: '農人的生活和節日都跟季節的變化有關係。', simplified: '农人的生活和节日都跟季节的变化有关系。', vietnamese: 'Cuộc sống và các ngày lễ của nông dân đều liên quan đến sự thay đổi của mùa vụ.' }] },
    { id: 'L3-036', lessonId: 'L3', order: 8, group: 'vocab2', traditional: '難得', simplified: '难得', pinyin: 'nándé', wordClass: ['Vs'], meaningVi: 'hiếm có, khó có được', meaningEn: 'hard-to-come-by, rare', examples: [{ traditional: '農人利用這段難得的休息時間。', simplified: '农人利用这段难得的休息时间。', vietnamese: 'Nông dân tranh thủ khoảng thời gian nghỉ ngơi hiếm có này.' }] },
    { id: 'L3-037', lessonId: 'L3', order: 9, group: 'vocab2', traditional: '祭祖', simplified: '祭祖', pinyin: 'jìzǔ', wordClass: ['Vi'], meaningVi: 'cúng tổ tiên', meaningEn: 'to venerate ancestors', tags: ['van-hoa'], examples: [{ traditional: '除夕這一天，在家除了祭祖，還要拜神。', simplified: '除夕这一天，在家除了祭祖，还要拜神。', vietnamese: 'Ngày giao thừa, ở nhà ngoài việc cúng tổ tiên, còn phải cúng thần linh.' }] },
    { id: 'L3-038', lessonId: 'L3', order: 10, group: 'vocab2', traditional: '拜', simplified: '拜', pinyin: 'bài', wordClass: ['V'], meaningVi: 'cúng bái, lễ bái', meaningEn: 'to honor, to pay homage to', tags: ['van-hoa'], examples: [{ traditional: '還要拜神。', simplified: '还要拜神。', vietnamese: 'Còn phải cúng thần linh.' }] },
    { id: 'L3-039', lessonId: 'L3', order: 11, group: 'vocab2', traditional: '神', simplified: '神', pinyin: 'shén', wordClass: ['N'], meaningVi: 'thần linh', meaningEn: 'gods, divinities', tags: ['van-hoa'], examples: [{ traditional: '除了祭祖，還要拜神。', simplified: '除了祭祖，还要拜神。', vietnamese: 'Ngoài việc cúng tổ tiên, còn phải cúng thần linh.' }] },
    { id: 'L3-040', lessonId: 'L3', order: 12, group: 'vocab2', traditional: '拜拜', simplified: '拜拜', pinyin: 'bàibài', wordClass: ['Vi'], meaningVi: 'cúng bái', meaningEn: 'to present offerings to gods or ancestors', tags: ['van-hoa'], examples: [{ traditional: '全家人到廟裡拜拜。', simplified: '全家人到庙里拜拜。', vietnamese: 'Cả nhà đến chùa miếu lễ bái.' }] },
    { id: 'L3-041', lessonId: 'L3', order: 13, group: 'vocab2', traditional: '蚊蟲', simplified: '蚊虫', pinyin: 'wénchóng', wordClass: ['N'], meaningVi: 'muỗi và côn trùng', meaningEn: 'mosquitoes and other insects', examples: [{ traditional: '蚊蟲慢慢多起來。', simplified: '蚊虫慢慢多起来。', vietnamese: 'Muỗi và côn trùng dần nhiều lên.' }] },
    { id: 'L3-042', lessonId: 'L3', order: 14, group: 'vocab2', traditional: '戴', simplified: '戴', pinyin: 'dài', wordClass: ['V'], meaningVi: 'đeo, đội (đồ trang sức, phụ kiện)', meaningEn: 'to wear (accessories)', tags: ['van-hoa'], examples: [{ traditional: '古代的人戴香包、喝雄黃酒。', simplified: '古代的人戴香包、喝雄黄酒。', vietnamese: 'Người xưa đeo túi thơm, uống rượu hùng hoàng.' }] },
    { id: 'L3-043', lessonId: 'L3', order: 15, group: 'vocab2', traditional: '香包', simplified: '香包', pinyin: 'xiāngbāo', wordClass: ['N'], meaningVi: 'túi thơm', meaningEn: 'fragrant sachet', tags: ['van-hoa'], examples: [{ traditional: '古代的人戴香包。', simplified: '古代的人戴香包。', vietnamese: 'Người xưa đeo túi thơm.' }] },
    { id: 'L3-044', lessonId: 'L3', order: 16, group: 'vocab2', traditional: '掛', simplified: '挂', pinyin: 'guà', wordClass: ['V'], meaningVi: 'treo', meaningEn: 'to hang', examples: [{ traditional: '還在門上掛一些植物。', simplified: '还在门上挂一些植物。', vietnamese: 'Còn treo một số loại cây trên cửa.' }] },
    { id: 'L3-045', lessonId: 'L3', order: 17, group: 'vocab2', traditional: '瘟疫', simplified: '瘟疫', pinyin: 'wēnyì', wordClass: ['N'], meaningVi: 'dịch bệnh, ôn dịch', meaningEn: 'pestilence, plague', examples: [{ traditional: '這些都是為了把瘟疫趕走。', simplified: '这些都是为了把瘟疫赶走。', vietnamese: 'Tất cả đều nhằm xua đuổi dịch bệnh.' }] },
    { id: 'L3-046', lessonId: 'L3', order: 18, group: 'vocab2', traditional: '做法', simplified: '做法', pinyin: 'zuòfǎ', wordClass: ['N'], meaningVi: 'cách làm', meaningEn: 'method, way of doing something', examples: [{ traditional: '有人還按照傳統的做法過節。', simplified: '有人还按照传统的做法过节。', vietnamese: 'Có người vẫn làm theo cách truyền thống để đón lễ.' }] },
    { id: 'L3-047', lessonId: 'L3', order: 19, group: 'vocab2', traditional: '多少', simplified: '多少', pinyin: 'duōshǎo', wordClass: ['Adv'], meaningVi: 'ít nhiều, phần nào', meaningEn: 'somewhat', notes: 'Xem thêm ngữ pháp VIII: 多少 trong bài này.', examples: [{ traditional: '他們覺得這麼做多少有一點作用。', simplified: '他们觉得这么做多少有一点作用。', vietnamese: 'Họ cho rằng làm vậy ít nhiều cũng có tác dụng.' }] },
    { id: 'L3-048', lessonId: 'L3', order: 20, group: 'vocab2', traditional: '作用', simplified: '作用', pinyin: 'zuòyòng', wordClass: ['N'], meaningVi: 'tác dụng', meaningEn: 'effect', examples: [{ traditional: '他們覺得這麼做多少有一點作用。', simplified: '他们觉得这么做多少有一点作用。', vietnamese: 'Họ cho rằng làm vậy ít nhiều cũng có tác dụng.' }] },
    { id: 'L3-049', lessonId: 'L3', order: 21, group: 'vocab2', traditional: '迷信', simplified: '迷信', pinyin: 'míxìn', wordClass: ['N'], meaningVi: 'mê tín', meaningEn: 'superstition', examples: [{ traditional: '有的人認為這是一種迷信。', simplified: '有的人认为这是一种迷信。', vietnamese: 'Cũng có người cho rằng đó là một kiểu mê tín.' }] },
    { id: 'L3-050', lessonId: 'L3', order: 22, group: 'vocab2', traditional: '收成', simplified: '收成', pinyin: 'shōuchéng', wordClass: ['N'], meaningVi: 'thu hoạch, mùa màng', meaningEn: 'harvest', examples: [{ traditional: '秋天是收成的季節。', simplified: '秋天是收成的季节。', vietnamese: 'Mùa thu là mùa thu hoạch.' }] },
    { id: 'L3-051', lessonId: 'L3', order: 23, group: 'vocab2', traditional: '民族', simplified: '民族', pinyin: 'mínzú', wordClass: ['N'], meaningVi: 'dân tộc', meaningEn: 'ethnic group', examples: [{ traditional: '很多民族都有慶祝活動。', simplified: '很多民族都有庆祝活动。', vietnamese: 'Nhiều dân tộc đều có hoạt động ăn mừng.' }] },
    { id: 'L3-052', lessonId: 'L3', order: 24, group: 'vocab2', traditional: '月亮', simplified: '月亮', pinyin: 'yuèliàng', wordClass: ['N'], meaningVi: 'mặt trăng', meaningEn: 'moon', tags: ['van-hoa'], examples: [{ traditional: '這一天，月亮又大又圓。', simplified: '这一天，月亮又大又圆。', vietnamese: 'Ngày này, trăng vừa to vừa tròn.' }] },
    { id: 'L3-053', lessonId: 'L3', order: 25, group: 'vocab2', traditional: '圓', simplified: '圆', pinyin: 'yuán', wordClass: ['Vs'], meaningVi: 'tròn', meaningEn: 'round', examples: [{ traditional: '這一天，月亮又大又圓。', simplified: '这一天，月亮又大又圆。', vietnamese: 'Ngày này, trăng vừa to vừa tròn.' }] },
    { id: 'L3-054', lessonId: 'L3', order: 26, group: 'vocab2', traditional: '社會', simplified: '社会', pinyin: 'shèhuì', wordClass: ['N'], meaningVi: 'xã hội', meaningEn: 'society', examples: [{ traditional: '台灣已經不是農業社會了。', simplified: '台湾已经不是农业社会了。', vietnamese: 'Đài Loan không còn là xã hội nông nghiệp nữa.' }] },
    { id: 'L3-055', lessonId: 'L3', order: 27, group: 'vocab2', traditional: '團聚', simplified: '团聚', pinyin: 'tuánjù', wordClass: ['Vi'], meaningVi: 'đoàn tụ, sum họp', meaningEn: 'to get-together, to reunite', tags: ['van-hoa'], examples: [{ traditional: '離開家鄉的人，再遠也要回家團聚。', simplified: '离开家乡的人，再远也要回家团聚。', vietnamese: 'Người xa quê, dù xa đến đâu cũng phải về nhà đoàn tụ.' }] },
    { id: 'L3-056', lessonId: 'L3', order: 28, group: 'vocab2', traditional: '月餅', simplified: '月饼', pinyin: 'yuèbǐng', wordClass: ['N'], meaningVi: 'bánh trung thu', meaningEn: 'moon cake', tags: ['van-hoa', 'am-thuc'], examples: [{ traditional: '一家人吃著月餅、柚子。', simplified: '一家人吃着月饼、柚子。', vietnamese: 'Cả nhà cùng ăn bánh trung thu, bưởi.' }] },
    { id: 'L3-057', lessonId: 'L3', order: 29, group: 'vocab2', traditional: '柚子', simplified: '柚子', pinyin: 'yòuzi', wordClass: ['N'], meaningVi: 'bưởi', meaningEn: 'pomelo', tags: ['van-hoa', 'am-thuc'], examples: [{ traditional: '一家人吃著月餅、柚子。', simplified: '一家人吃着月饼、柚子。', vietnamese: 'Cả nhà cùng ăn bánh trung thu, bưởi.' }] },
    { id: 'L3-058', lessonId: 'L3', order: 30, group: 'vocab2', traditional: '故事', simplified: '故事', pinyin: 'gùshì', wordClass: ['N'], meaningVi: 'câu chuyện', meaningEn: 'story', examples: [{ traditional: '一邊給孩子說月亮的故事。', simplified: '一边给孩子说月亮的故事。', vietnamese: 'Vừa kể cho trẻ con nghe câu chuyện về mặt trăng.' }] },
    { id: 'L3-059', lessonId: 'L3', order: 31, group: 'vocab2', traditional: '溫馨', simplified: '温馨', pinyin: 'wēnxīn', wordClass: ['Vs'], meaningVi: 'ấm áp, ấm cúng', meaningEn: 'warm, heart-warming', examples: [{ traditional: '過一個溫馨的節日。', simplified: '过一个温馨的节日。', vietnamese: 'Đón một cái Tết ấm cúng.' }] },
    { id: 'L3-060', lessonId: 'L3', order: 32, group: 'vocab2', traditional: '端午節', simplified: '端午节', pinyin: 'Duānwǔ jié', wordClass: ['N'], meaningVi: 'Tết Đoan Ngọ (mùng 5 tháng 5 âm lịch)', meaningEn: 'the Dragon Boat Festival', tags: ['van-hoa'], examples: [{ traditional: '五月五號端午節這一天，古代的人戴香包、喝雄黃酒。', simplified: '五月五号端午节这一天，古代的人戴香包、喝雄黄酒。', vietnamese: 'Ngày mùng 5 tháng 5, tức Tết Đoan Ngọ, người xưa đeo túi thơm, uống rượu hùng hoàng.' }] },
    { id: 'L3-061', lessonId: 'L3', order: 33, group: 'vocab2', traditional: '中秋節', simplified: '中秋节', pinyin: 'Zhōngqiū jié', wordClass: ['N'], meaningVi: 'Tết Trung Thu (rằm tháng 8 âm lịch)', meaningEn: 'the Mid-Autumn Moon Festival', tags: ['van-hoa'], examples: [{ traditional: '農曆八月十五日的中秋節就是這樣來的。', simplified: '农历八月十五日的中秋节就是这样来的。', vietnamese: 'Tết Trung Thu ngày 15 tháng 8 âm lịch ra đời từ đó.' }] },
    { id: 'L3-062', lessonId: 'L3', order: 34, group: 'vocab2', traditional: '雄黃酒', simplified: '雄黄酒', pinyin: 'xiónghuáng jiǔ', wordClass: ['N'], meaningVi: 'rượu hùng hoàng (rượu pha thạch tín, theo truyền thống được coi là giải độc)', meaningEn: 'realgar liquor', tags: ['van-hoa'], examples: [{ traditional: '古代的人戴香包、喝雄黃酒。', simplified: '古代的人戴香包、喝雄黄酒。', vietnamese: 'Người xưa đeo túi thơm, uống rượu hùng hoàng.' }] }
  ],

  grammar: [
    {
      id: 'L3-G1', lessonId: 'L3', order: 1, pattern: '受到（…的）影響',
      functionVi: 'Trong câu theo mẫu này, chủ ngữ chịu ảnh hưởng bởi điều đứng sau 受到.',
      functionEn: 'In a sentence with this pattern, the subject is influenced by what comes after 受到.',
      examples: [
        { traditional: '小明受到父母的影響，也很喜歡音樂。', simplified: '小明受到父母的影响，也很喜欢音乐。', english: 'Xiaoming was influenced by his parents, and he too likes music.', vietnamese: 'Tiểu Minh chịu ảnh hưởng từ bố mẹ, cũng rất thích âm nhạc.' },
        { traditional: '台灣人受到西方文化的影響，喜歡喝咖啡的人越來越多了。', simplified: '台湾人受到西方文化的影响，喜欢喝咖啡的人越来越多了。', english: 'Taiwanese have been influenced by western culture and more and more of them like to drink coffee.', vietnamese: 'Người Đài Loan chịu ảnh hưởng từ văn hóa phương Tây, người thích uống cà phê ngày càng nhiều.' },
        { traditional: '他的公司受到經濟不好的影響，快要做不下去了。', simplified: '他的公司受到经济不好的影响，快要做不下去了。', english: "His company has been impacted by the bad economy and soon won't be able to continue operating.", vietnamese: 'Công ty anh ấy chịu ảnh hưởng từ kinh tế xấu, sắp không trụ nổi nữa.' },
        { traditional: '小孩子容易受到廣告的影響，總是要買一些對健康不好的東西。', simplified: '小孩子容易受到广告的影响，总是要买一些对健康不好的东西。', english: 'Kids are easily affected by advertisements and always want to buy things that are bad for their health.', vietnamese: 'Trẻ con dễ chịu ảnh hưởng từ quảng cáo, cứ đòi mua những thứ không tốt cho sức khỏe.' },
        { traditional: '颱風快要來了。天氣受到影響，變得很不穩定。', simplified: '台风快要来了。天气受到影响，变得很不稳定。', english: 'A typhoon is approaching. The weather is being influenced by it and has become very unstable.', vietnamese: 'Bão sắp đến rồi. Thời tiết chịu ảnh hưởng, trở nên rất bất ổn.' },
        { traditional: '今年的氣溫特別高，雨又下得特別少。柚子的收成受到影響，比去年少了很多。', simplified: '今年的气温特别高，雨又下得特别少。柚子的收成受到影响，比去年少了很多。', english: 'The temperatures have been especially high this year and there has been little rain. The pomelo harvest has been affected. There are a lot fewer than last year.', vietnamese: 'Năm nay nhiệt độ đặc biệt cao, mưa lại đặc biệt ít. Mùa bưởi bị ảnh hưởng, thu hoạch ít hơn năm ngoái nhiều.' },
        { traditional: '地球的汙染越來越嚴重，有的人的健康已經受到影響了。', simplified: '地球的污染越来越严重，有的人的健康已经受到影响了。', english: "Pollution is worsening globally. Some people's health is already being impacted.", vietnamese: 'Ô nhiễm trái đất ngày càng nghiêm trọng, sức khỏe của một số người đã bị ảnh hưởng rồi.' }
      ],
      usageNotesVi: '受到 hơi mang tính trang trọng nhưng vẫn được dùng phổ biến. Có thể kết hợp với nhiều danh từ khác ngoài 影響, ví dụ giáo dục, khích lệ, hướng dẫn (sẽ giới thiệu ở bài sau).',
      exercises: [
        { id: 'L3-G1-EX1', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說小美要到東部教原住民英文，你知道為什麼嗎？', textWithBlanks: 'B：電視新聞說東部的英文老師不夠，___，就到東部去教英文了。', blanks: [{ index: 0, acceptedAnswers: ['她受到新聞報導的影響'] }], targetPattern: 'L3-G1' },
        { id: 'L3-G1-EX2', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：珊珊有了孩子以後就一直打算搬到鄉下去，你知道為什麼嗎？（環境）', textWithBlanks: 'B：她認為孩子很容易___。', blanks: [{ index: 0, acceptedAnswers: ['受到環境的影響'] }], targetPattern: 'L3-G1' },
        { id: 'L3-G1-EX3', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：在台灣，很多人過年過節的時候為什麼一定要拜拜？（傳統）', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['他們受到傳統的影響，覺得拜拜可以帶來平安。'] }], targetPattern: 'L3-G1' },
        { id: 'L3-G1-EX4', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：台灣的春天為什麼這麼潮濕？（南方來的熱空氣）', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['台灣的春天受到南方來的熱空氣的影響，所以比較潮濕。'] }], targetPattern: 'L3-G1' },
        { id: 'L3-G1-EX5', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：台灣到了六月為什麼蚊蟲就多起來了？（氣溫高）', textWithBlanks: 'B：蚊蟲喜歡熱的天氣，___。', blanks: [{ index: 0, acceptedAnswers: ['六月的天氣受到氣溫高的影響，蚊蟲就多了起來。'] }], targetPattern: 'L3-G1' },
        { id: 'L3-G1-EX6', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：端午節大家都戴香包，還在門上掛植物，我認為是迷信。', textWithBlanks: 'B：我多少___。有的時候會戴香包，或是在門上掛植物。', blanks: [{ index: 0, acceptedAnswers: ['也受到這個傳統的影響'] }], targetPattern: 'L3-G1' },
        { id: 'L3-G1-EX7', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：我的朋友都喜歡吃辣的東西。', textWithBlanks: 'B：你越來越喜歡吃辣的，是___吧。', blanks: [{ index: 0, acceptedAnswers: ['受到朋友的影響'] }], targetPattern: 'L3-G1' }
      ]
    },
    {
      id: 'L3-G2', lessonId: 'L3', order: 2, pattern: '幸虧…',
      functionVi: 'Phó từ 幸虧 giới thiệu một sự việc may mắn giúp hóa giải/ngăn chặn hậu quả tiêu cực đã được nói ở mệnh đề trước đó. Thường theo sau bởi 要不然 hoặc 才.',
      functionEn: 'The adverb 幸虧 introduces an event that nullifies the negative content of the previous clause. 要不然 or 才 often follows.',
      examples: [
        { traditional: '這幾天天天下雨。幸虧我買了除濕機，要不然衣服都發霉了。', simplified: '这几天天天下雨。幸亏我买了除湿机，要不然衣服都发霉了。', english: "It has been raining every day over the last few days. Luckily, I bought a dehumidifier; otherwise, my clothes would mildew.", vietnamese: 'Mấy hôm nay ngày nào cũng mưa. May mà mình mua máy hút ẩm, không thì quần áo mốc hết rồi.' },
        { traditional: '我弄丟了報告。幸虧朋友撿到了，才不用再寫一次。', simplified: '我弄丢了报告。幸亏朋友捡到了，才不用再写一次。', english: "I lost my report. Fortunately, a friend picked it up (found it), so I don't have to rewrite it.", vietnamese: 'Mình làm mất bài báo cáo. May mà bạn nhặt được, mới không phải viết lại lần nữa.' },
        { traditional: '他爸爸常說幸虧這幾年生意還可以，才有錢付他的學費。', simplified: '他爸爸常说幸亏这几年生意还可以，才有钱付他的学费。', english: "His dad often says it's a good thing business has been OK in recent years; that's why he has the money to pay his tuition.", vietnamese: 'Bố anh ấy thường nói may mà mấy năm nay việc buôn bán còn ổn, mới có tiền đóng học phí cho anh.' },
        { traditional: '幸虧我一到車站，公車就來了，才沒有遲到。', simplified: '幸亏我一到车站，公车就来了，才没有迟到。', english: "Luckily, the bus arrived just as I got to the bus stop, so I wasn't late.", vietnamese: 'May mà mình vừa đến trạm là xe buýt đến ngay, mới không bị muộn.' },
        { traditional: '幸虧他有實際的經驗，才能這麼快地找到工作。', simplified: '幸亏他有实际的经验，才能这么快地找到工作。', english: 'Fortunately he has real-life experience; that is why he found a job so quickly.', vietnamese: 'May mà anh ấy có kinh nghiệm thực tế, mới tìm được việc nhanh như vậy.' }
      ],
      usageNotesVi: '幸虧 luôn đi kèm một hệ quả tích cực (nhờ điều may mắn đó mà tránh được điều xấu), khác với 好不容易 (đã học ở Bài 1, diễn tả việc khó khăn lắm mới đạt được điều mong muốn, không nhất thiết liên quan đến việc "tránh được điều xấu").',
      exercises: [
        { id: 'L3-G2-EX1', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：上個週末你去爬山。山上冷不冷？（我帶了外套）', textWithBlanks: 'B：冷極了。___。', blanks: [{ index: 0, acceptedAnswers: ['幸虧我帶了外套，要不然真的受不了。'] }], targetPattern: 'L3-G2' },
        { id: 'L3-G2-EX2', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：最近經濟不好。你的工作有沒有影響？（老闆對我們很好）', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['幸虧老闆對我們很好，要不然早就沒工作了。'] }], targetPattern: 'L3-G2' },
        { id: 'L3-G2-EX3', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：中秋節車票很難買，你還要回家團聚嗎？（我買到高鐵票）', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['幸虧我買到高鐵票，才能回家團聚。'] }], targetPattern: 'L3-G2' },
        { id: 'L3-G2-EX4', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：昨天你去電信公司門市買手機，店員的說明，你都懂嗎？（台灣朋友陪我去）', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['幸虧有台灣朋友陪我去，要不然我根本聽不懂。'] }], targetPattern: 'L3-G2' },
        { id: 'L3-G2-EX5', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：上星期六又颱風又下雨的，你還是去看電腦展了嗎？（朋友開車載我去）', textWithBlanks: 'B：還是去了。___。', blanks: [{ index: 0, acceptedAnswers: ['幸虧朋友開車載我去，才沒被雨淋濕。'] }], targetPattern: 'L3-G2' }
      ]
    },
    {
      id: 'L3-G3', lessonId: 'L3', order: 3, pattern: '算是…',
      functionVi: '算是 là động từ giới thiệu một sự đánh giá/ước lượng sau khi so sánh chủ ngữ với những điều khác có thể so sánh được.',
      functionEn: '算是 is a verb that introduces an estimate after comparing the subject with other (comparable) things.',
      examples: [
        { traditional: '教書算是穩定的工作。', simplified: '教书算是稳定的工作。', english: 'Teaching is considered a stable job.', vietnamese: 'Dạy học có thể coi là công việc ổn định.' },
        { traditional: '這裡的櫻花算是多的，所以來玩的人不少。', simplified: '这里的樱花算是多的，所以来玩的人不少。', english: 'You could say that there are a lot of cherry blossoms here, so many people have come to visit.', vietnamese: 'Hoa anh đào ở đây có thể coi là nhiều, nên khách đến chơi không ít.' },
        { traditional: '最近氣溫都很低，而且每天下雨。今天雨停了，天氣算是不錯的。', simplified: '最近气温都很低，而且每天下雨。今天雨停了，天气算是不错的。', english: 'It has been cold and rainy lately, but today the rain stopped so the weather is nice again.', vietnamese: 'Dạo này nhiệt độ đều thấp, lại còn ngày nào cũng mưa. Hôm nay mưa tạnh rồi, thời tiết có thể coi là khá tốt.' },
        { traditional: '台北的建築每一棟都差不多，101大樓算是有特色的。', simplified: '台北的建筑每一栋都差不多，101大楼算是有特色的。', english: 'The buildings in Taipei all look about the same. Taipei 101 is probably more distinctive.', vietnamese: 'Các tòa nhà ở Đài Bắc cái nào cũng gần giống nhau, tòa 101 có thể coi là có nét đặc trưng riêng.' },
        { traditional: '國際關係系算是熱門的科系嗎？', simplified: '国际关系系算是热门的科系吗？', english: 'Would the department of international relations be considered a popular department?', vietnamese: 'Ngành Quan hệ quốc tế có thể coi là ngành hot không?' }
      ],
      usageNotesVi: 'Dạng phủ định của 算是 là 不算, không phải 算是不. Vậy nên có thể nói 休學手續不算麻煩 ("thủ tục nghỉ học không tính là phiền phức") nhưng KHÔNG nói *休學手續算是不麻煩.\n\nVí dụ: 跟鄉下比起來，這裡的蚊蟲不算多。(So với nông thôn, muỗi ở đây không tính là nhiều.) 他只有一點發燒，感冒不算嚴重。(Anh ấy chỉ hơi sốt nhẹ, cảm cúm không tính là nặng.)',
      exercises: [
        { id: 'L3-G3-EX1', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：在你的國家，春天的氣溫變化大嗎？', textWithBlanks: 'B：跟台灣比起來___。', blanks: [{ index: 0, acceptedAnswers: ['跟台灣比起來，我們的春天氣溫變化不算大。'] }], targetPattern: 'L3-G3' },
        { id: 'L3-G3-EX2', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你的鞋子曬了一天的太陽，乾了沒有？', textWithBlanks: 'B：還有一點濕，___。', blanks: [{ index: 0, acceptedAnswers: ['還有一點濕，不算乾。'] }], targetPattern: 'L3-G3' },
        { id: 'L3-G3-EX3', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：今天雖然下雨了，可是還很悶。', textWithBlanks: 'B：今天有一點風，___。', blanks: [{ index: 0, acceptedAnswers: ['今天有一點風，不算悶。'] }], targetPattern: 'L3-G3' },
        { id: 'L3-G3-EX4', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：住在台北生活費高嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['跟其他城市比起來，台北的生活費算是高的。'] }], targetPattern: 'L3-G3' },
        { id: 'L3-G3-EX5', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這件衣服的樣子新嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這件衣服的樣子不算新，去年就流行過了。'] }], targetPattern: 'L3-G3' }
      ]
    },
    {
      id: 'L3-G4', lessonId: 'L3', order: 4, pattern: '是…',
      functionVi: '是 trong trường hợp này không phải là động từ đầy đủ nghĩa, mà là một từ đánh dấu sự đồng tình. Điều theo sau 是 là thông tin đã biết trước đó (do người nói trước nêu ra). Người nói dùng mẫu câu này để thể hiện quan điểm của mình giống với điều người trước đã nói.',
      functionEn: 'The 是 in this instance is not a full verb. Rather, it’s an agreement marker. What follows 是 is old information. The speaker uses this pattern to indicate that his view is the same as that of the previous speaker.',
      examples: [
        { traditional: '買鞋子是不是先試穿，才知道合適不合適？', simplified: '买鞋子是不是先试穿，才知道合适不合适？', english: 'Shall I try the shoes on before I buy them to know if they fit or not?', vietnamese: 'Mua giày có phải nên thử trước mới biết vừa hay không?' },
        { traditional: '是應該先試穿，而且還要穿著走一走。', simplified: '是应该先试穿，而且还要穿着走一走。', english: 'You should indeed try them on first and even walk around in them.', vietnamese: 'Đúng là nên thử trước, mà còn phải mang đi lại thử nữa.' },
        { traditional: '這位老師把語法解釋得很清楚，大家都很快地了解了。', simplified: '这位老师把语法解释得很清楚，大家都很快地了解了。', english: 'This teacher explains grammar very clearly. Everybody catches on quite quickly.', vietnamese: 'Cô giáo này giảng ngữ pháp rất rõ ràng, mọi người hiểu rất nhanh.' },
        { traditional: '她解釋得是很清楚，而且她說話很有趣。', simplified: '她解释得是很清楚，而且她说话很有趣。', english: 'She does explain very clearly and she’s an interesting speaker too.', vietnamese: 'Cô ấy giảng đúng là rất rõ ràng, mà nói chuyện cũng thú vị nữa.' },
        { traditional: '你有居留證，可以打工了吧？', simplified: '你有居留证，可以打工了吧？', english: 'You have an ARC, so you can work, right?', vietnamese: 'Cậu có thẻ cư trú rồi, đi làm thêm được rồi chứ?' },
        { traditional: '我是有居留證了，可是還不能打工，得再等八個月。', simplified: '我是有居留证了，可是还不能打工，得再等八个月。', english: 'I do have an ARC, but I can’t work. I have to wait another eight months.', vietnamese: 'Mình đúng là có thẻ cư trú rồi, nhưng vẫn chưa được đi làm thêm, phải đợi thêm tám tháng nữa.' },
        { traditional: '你說話的聲音不對。你感冒了嗎？', simplified: '你说话的声音不对。你感冒了吗？', english: 'Your voice sounds a bit off. Do you have a cold?', vietnamese: 'Giọng cậu nghe không ổn. Cậu bị cảm à?' },
        { traditional: '我是感冒了，今天喉嚨好痛。', simplified: '我是感冒了，今天喉咙好痛。', english: 'Yes, I do have a cold. My throat is really sore today.', vietnamese: 'Mình đúng là bị cảm rồi, hôm nay họng đau lắm.' },
        { traditional: '這個牌子的衣服品質很好。', simplified: '这个牌子的衣服品质很好。', english: 'The quality of this brand of clothing is good.', vietnamese: 'Quần áo nhãn hiệu này chất lượng rất tốt.' },
        { traditional: '他們的品質是很好，可是打八折以後還很貴。', simplified: '他们的品质是很好，可是打八折以后还很贵。', english: 'The quality is indeed good, but even with 20% off, it’s still expensive.', vietnamese: 'Chất lượng của họ đúng là rất tốt, nhưng giảm 20% rồi vẫn còn đắt.' }
      ],
      usageNotesVi: 'Khi đóng vai trò từ đánh dấu đồng tình, 是 được nhấn nhẹ khi nói, thường theo sau bởi 可是/不過/要不然 để nêu thêm một ý bổ sung/tương phản. Ví dụ: 百貨公司的東西是比其他的商店貴，可是都是有名的牌子，品質跟樣子都比較好。("Đồ trong bách hóa đúng là đắt hơn cửa hàng khác, nhưng đều là nhãn hiệu nổi tiếng, chất lượng và kiểu dáng đều tốt hơn.")',
      exercises: [
        { id: 'L3-G4-EX1', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小美最近的壓力很大。', textWithBlanks: 'B：___，因為___。', blanks: [{ index: 0, acceptedAnswers: ['她是壓力很大，因為她這學期選了太多課。'] }], targetPattern: 'L3-G4' },
        { id: 'L3-G4-EX2', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：買衣服一定要摸一摸。', textWithBlanks: 'B：___，要不然___。', blanks: [{ index: 0, acceptedAnswers: ['買衣服是要摸一摸，要不然不知道質料好不好。'] }], targetPattern: 'L3-G4' },
        { id: 'L3-G4-EX3', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這件外套很暖和。', textWithBlanks: 'B：___，不過___。', blanks: [{ index: 0, acceptedAnswers: ['這件外套是很暖和，不過樣子不太好看。'] }], targetPattern: 'L3-G4' },
        { id: 'L3-G4-EX4', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你不需要幫助嗎？為什麼不告訴我們？', textWithBlanks: 'B：___，可是___。', blanks: [{ index: 0, acceptedAnswers: ['我是需要幫助，可是不好意思麻煩你們。'] }], targetPattern: 'L3-G4' },
        { id: 'L3-G4-EX5', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：學期結束了，你可以輕鬆一點了吧？', textWithBlanks: 'B：___，可是___。', blanks: [{ index: 0, acceptedAnswers: ['學期是結束了，可是我還有暑期班要上。'] }], targetPattern: 'L3-G4' }
      ]
    },
    {
      id: 'L3-G5', lessonId: 'L3', order: 5, pattern: '難怪',
      functionVi: '難怪 là phó từ, giới thiệu mệnh đề thứ hai trong câu 2 mệnh đề. Mệnh đề thứ hai liên quan đến điều người nói trước đó thấy khó hiểu/thắc mắc, nay đã được làm rõ nhờ thông tin mới nêu ở mệnh đề đầu. Cấu trúc ngữ nghĩa: "sự thật mới" giải tỏa "thắc mắc cũ".',
      functionEn: 'The adverb 難怪 introduces a 2nd clause in a 2-clause sentence. The second clause is concerned with the speaker’s previous puzzlement, which has been clarified by a new observation presented in the first clause.',
      examples: [
        { traditional: '他家過年過節都要拜祖先，難怪那麼早回家幫忙。', simplified: '他家过年过节都要拜祖先，难怪那么早回家帮忙。', english: 'His family venerates ancestors during Chinese New Year and other holidays. No wonder, he goes home so early to help out.', vietnamese: 'Nhà anh ấy Tết lễ nào cũng phải cúng tổ tiên, thảo nào về nhà sớm thế để giúp đỡ.' },
        { traditional: '他下個星期有口頭報告，難怪這幾天都熬夜念書。', simplified: '他下个星期有口头报告，难怪这几天都熬夜念书。', english: 'He has an oral report next week. No wonder, he’s been burning the midnight oil lately.', vietnamese: 'Tuần sau anh ấy có thuyết trình miệng, thảo nào mấy hôm nay thức khuya học bài suốt.' },
        { traditional: '美美要申請獎學金，難怪她請教授寫推薦信。', simplified: '美美要申请奖学金，难怪她请教授写推荐信。', english: 'Meimei wants to apply for a scholarship. No wonder, she asked the professor to write a letter of recommendation.', vietnamese: 'Mỹ Mỹ định xin học bổng, thảo nào cô ấy nhờ giáo sư viết thư giới thiệu.' },
        { traditional: '他剛才跟店員發生了一點糾紛，難怪說話的聲音那麼大。', simplified: '他刚才跟店员发生了一点纠纷，难怪说话的声音那么大。', english: 'He had a little dispute with the store employee just now. No wonder, his voice was so loud.', vietnamese: 'Vừa nãy anh ấy có chút tranh chấp với nhân viên bán hàng, thảo nào nói to như vậy.' },
        { traditional: '美美的爸爸最近沒工作了，難怪她哥哥放棄去法國留學。', simplified: '美美的爸爸最近没工作了，难怪她哥哥放弃去法国留学。', english: 'Meimei’s dad has been out of work lately. No wonder, her brother gave up going to France to study.', vietnamese: 'Bố Mỹ Mỹ dạo này thất nghiệp, thảo nào anh trai cô ấy từ bỏ việc đi Pháp du học.' }
      ],
      usageNotesVi: '難怪 khác với 恐怕 (đã học ở Bài 1): 恐怕 dùng để suy đoán một điều CHƯA xảy ra, còn 難怪 dùng để giải thích một điều ĐÃ quan sát thấy nhưng trước đó chưa hiểu vì sao.',
      exercises: [
        {
          id: 'L3-G5-EX1', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank',
          prompt: 'Nối vế trái với vế phải dùng 難怪 cho hợp lý: 1.你不是這個學校的學生， 2.你弄丟了發票， 3.老師說很多台灣人的祖先是從中國移民來的， 4.最近氣溫變化很大， 5.美美是獨生女， — a.難怪重要的節日都跟中國一樣。 b.難怪她媽媽捨不得讓她去西班牙念書。 c.難怪小美又感冒了，喉嚨發炎，痛得說不出話來。 d.難怪不知道上課要簽名。 e.難怪店員不讓你退換。',
          textWithBlanks: 'Đáp án đúng: 1-___, 2-___, 3-___, 4-___, 5-___',
          blanks: [{ index: 0, acceptedAnswers: ['1-d, 2-e, 3-a, 4-c, 5-b'] }],
          targetPattern: 'L3-G5'
        }
      ]
    },
    {
      id: 'L3-G6', lessonId: 'L3', order: 6, pattern: '－死了',
      functionVi: 'Hậu tố -死了 đứng sau động từ/tính từ, diễn tả mức độ cực đoan, thường dùng để than phiền.',
      functionEn: 'The post-verbal -死了 indicates extreme degree and is usually used for complaining.',
      examples: [
        { traditional: '他念的是自己沒興趣的科系，痛苦死了。', simplified: '他念的是自己没兴趣的科系，痛苦死了。', english: "He's studying a major he has no interest in. He couldn't be more miserable.", vietnamese: 'Anh ấy học ngành mình chẳng có hứng thú gì, khổ sở chết đi được.' },
        { traditional: '申請居留證的手續麻煩死了，他不想辦居留證了。', simplified: '申请居留证的手续麻烦死了，他不想办居留证了。', english: "Applying for an ARC is a royal pain. He doesn't want to apply anymore.", vietnamese: 'Thủ tục xin thẻ cư trú phiền phức chết đi được, anh ấy không muốn làm thẻ cư trú nữa.' },
        { traditional: '這條路好長，走起來累死了。', simplified: '这条路好长，走起来累死了。', english: "This road is really long. It's exhausting to walk it.", vietnamese: 'Con đường này dài quá, đi bộ mệt chết đi được.' },
        { traditional: '檸檬酸死了。我的烤魚上面不要加檸檬。', simplified: '柠檬酸死了。我的烤鱼上面不要加柠檬。', english: "Lemon is way too tart. Don't put any on my grilled fish.", vietnamese: 'Chanh chua chết đi được. Cá nướng của mình đừng cho chanh vào.' },
        { traditional: '你別再打電腦了，吵死了。', simplified: '你别再打电脑了，吵死了。', english: 'Get off the computer. The noise is bugging the heck out of me.', vietnamese: 'Cậu đừng gõ máy tính nữa, ồn chết đi được.' }
      ],
      usageNotesVi: '-死了 tương tự -極了, -得不得了, -得很, đều diễn tả mức độ cao, nhưng -死了 mang sắc thái mạnh nhất. Phần lớn dùng cho nghĩa tiêu cực, than phiền; trừ một số ngoại lệ như 高興死了 (vui chết đi được), 羨慕死了 (ghen tị chết đi được), 樂死了 (sướng chết đi được).',
      exercises: [
        { id: 'L3-G6-EX1', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '我最近___，沒有時間跟朋友見面。（忙死了、累死了、擠死了、冷死了、擔心死了…）', blanks: [{ index: 0, acceptedAnswers: ['忙死了'] }], targetPattern: 'L3-G6' },
        { id: 'L3-G6-EX2', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '聽說那個牌子的鞋一雙要5000塊，___。', blanks: [{ index: 0, acceptedAnswers: ['貴死了'] }], targetPattern: 'L3-G6' },
        { id: 'L3-G6-EX3', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '電腦展人那麼多，___，我不去。我們去看電影吧。', blanks: [{ index: 0, acceptedAnswers: ['擠死了'] }], targetPattern: 'L3-G6' },
        { id: 'L3-G6-EX4', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '我哥哥昨天做菜，放了兩次鹽。那個菜___，沒人要吃。', blanks: [{ index: 0, acceptedAnswers: ['鹹死了'] }], targetPattern: 'L3-G6' },
        { id: 'L3-G6-EX5', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他申請到獎學金，___。', blanks: [{ index: 0, acceptedAnswers: ['高興死了'] }], targetPattern: 'L3-G6' }
      ]
    },
    {
      id: 'L3-G7', lessonId: 'L3', order: 7, pattern: '幾乎',
      functionVi: 'Phó từ 幾乎 diễn tả mức độ gần như toàn bộ/hoàn toàn, nghĩa tương tự "almost" trong tiếng Anh.',
      functionEn: 'The adverb 幾乎 indicates near totality. Its meaning is similar to ‘almost’ in English.',
      examples: [
        { traditional: '這幾天幾乎每天都下雨。', simplified: '这几天几乎每天都下雨。', english: 'It has rained almost every day lately.', vietnamese: 'Mấy hôm nay hầu như ngày nào cũng mưa.' },
        { traditional: '他為了省錢，幾乎每天都在學生餐廳吃飯。', simplified: '他为了省钱，几乎每天都在学生餐厅吃饭。', english: 'To save money, he has been eating in the student cafeteria almost every day.', vietnamese: 'Vì tiết kiệm tiền, anh ấy hầu như ngày nào cũng ăn ở căng-tin sinh viên.' },
        { traditional: '這裡的人，她幾乎都認識。', simplified: '这里的人，她几乎都认识。', english: 'She knows almost everybody here.', vietnamese: 'Người ở đây, cô ấy hầu như đều quen biết.' },
        { traditional: '他的婚禮幾乎花光了他所有的錢。', simplified: '他的婚礼几乎花光了他所有的钱。', english: 'He spent almost all of his money on his wedding.', vietnamese: 'Đám cưới của anh ấy gần như tiêu hết sạch tiền của anh ấy.' },
        { traditional: '他很節省。衣服幾乎都是朋友穿不下送他的。', simplified: '他很节省。衣服几乎都是朋友穿不下送他的。', english: "He's very frugal. Almost all of his clothes were given to him by friends after they could no longer wear them.", vietnamese: 'Anh ấy rất tiết kiệm. Quần áo hầu như đều là bạn bè mặc không vừa nữa nên cho anh ấy.' }
      ],
      usageNotesVi: 'Khi 差不多 mang nghĩa "gần như, hầu như" thì có thể thay thế qua lại với 幾乎 (vd 他差不多每天都運動 = 他幾乎每天都運動). Nhưng khi 差不多 đứng trước một con số thì mang nghĩa "khoảng chừng, xấp xỉ" (có thể nhiều hơn hoặc ít hơn), còn 幾乎 + số luôn có nghĩa "gần đạt tới nhưng chưa đạt tới" con số đó — 我吃了差不多二十個水餃 ("tôi ăn khoảng 20 cái", có thể hơn/kém), còn 我吃了幾乎二十個水餃 ("tôi ăn gần 20 cái", chắc chắn ăn ít hơn 20).',
      exercises: [
        { id: 'L3-G7-EX1', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：週年慶的時候，百貨公司的商品都打折嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['幾乎都打折。'] }], targetPattern: 'L3-G7' },
        { id: 'L3-G7-EX2', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：泰國菜有沒有不辣的？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['幾乎都是辣的，很少有不辣的。'] }], targetPattern: 'L3-G7' },
        { id: 'L3-G7-EX3', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：台灣有不少有名的風景區，你都去過嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['幾乎都去過了。'] }], targetPattern: 'L3-G7' },
        { id: 'L3-G7-EX4', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你看不看籃球比賽？', textWithBlanks: 'B：我對籃球比賽非常有興趣，___。', blanks: [{ index: 0, acceptedAnswers: ['幾乎每場都看。'] }], targetPattern: 'L3-G7' },
        { id: 'L3-G7-EX5', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：去便利商店買東西，有人刷卡嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['幾乎大家都刷卡。'] }], targetPattern: 'L3-G7' }
      ]
    },
    {
      id: 'L3-G8', lessonId: 'L3', order: 8, pattern: '多少',
      functionVi: 'Phó từ 多少 chỉ khả năng tồn tại một lượng nhỏ, mơ hồ, gần với "ít nhiều, phần nào" trong tiếng Việt.',
      functionEn: 'The adverb 多少 refers to the possibility of a vague and minimal amount, similar to English "at least, somewhat, a little".',
      examples: [
        { traditional: '你雖然不餓，可是美美準備了這麼多菜，你多少吃一點。', simplified: '你虽然不饿，可是美美准备了这么多菜，你多少吃一点。', english: 'Even though you’re not hungry, Meimei prepared a lot of dishes for you, so you should eat something.', vietnamese: 'Dù cậu không đói, nhưng Mỹ Mỹ đã chuẩn bị nhiều món thế này, cậu ăn ít nhiều một chút đi.' },
        { traditional: '你在西班牙住了半年，多少會說幾句西班牙文吧。', simplified: '你在西班牙住了半年，多少会说几句西班牙文吧。', english: 'You lived in Spain for half a year; you must be able to speak some Spanish.', vietnamese: 'Cậu sống ở Tây Ban Nha nửa năm rồi, chắc ít nhiều cũng biết nói vài câu tiếng Tây Ban Nha chứ.' },
        { traditional: '你買的電腦這麼便宜，多少會有一點問題吧。', simplified: '你买的电脑这么便宜，多少会有一点问题吧。', english: 'The computer you bought was so cheap. I reckon it’s got to have something wrong with it.', vietnamese: 'Máy tính cậu mua rẻ thế này, chắc ít nhiều cũng có chút vấn đề gì đó.' },
        { traditional: '那個店員是我朋友。我帶你去買東西，多少可以打一點折。', simplified: '那个店员是我朋友。我带你去买东西，多少可以打一点折。', english: 'That employee is my friend. If I take you to buy something, he’s going to give you some kind of discount.', vietnamese: 'Nhân viên đó là bạn mình. Mình dẫn cậu đi mua đồ thì ít nhiều cũng được giảm giá chút.' },
        { traditional: '我不常做飯，可是調味料多少準備了一點。', simplified: '我不常做饭，可是调味料多少准备了一点。', english: 'I don’t cook often, but I do have some spices ready.', vietnamese: 'Mình không hay nấu ăn, nhưng gia vị thì ít nhiều cũng chuẩn bị sẵn một chút.' }
      ],
      usageNotesVi: 'Dù lượng/mức độ mà 多少 chỉ ra không lớn, 多少 vẫn nhấn mạnh rằng tồn tại ít nhất một lượng/mức độ nhất định (chứ không phải hoàn toàn không có).',
      exercises: [
        { id: 'L3-G8-EX1', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你對食物的營養有研究嗎？', textWithBlanks: 'B：沒什麼研究，不過___。', blanks: [{ index: 0, acceptedAnswers: ['不過多少懂一點。'] }], targetPattern: 'L3-G8' },
        { id: 'L3-G8-EX2', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你在餐廳工作了兩年，學會做不少菜了吧？', textWithBlanks: 'B：會的不多，___。', blanks: [{ index: 0, acceptedAnswers: ['不過多少會做幾道。'] }], targetPattern: 'L3-G8' },
        { id: 'L3-G8-EX3', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：我最近常感冒。', textWithBlanks: 'B：那是因為你不愛曬太陽，人每天應該___。', blanks: [{ index: 0, acceptedAnswers: ['多少曬一點太陽。'] }], targetPattern: 'L3-G8' },
        { id: 'L3-G8-EX4', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: '孩子：我要出去玩了。', textWithBlanks: '媽媽：明天考試，___。', blanks: [{ index: 0, acceptedAnswers: ['你多少該念一點書吧。'] }], targetPattern: 'L3-G8' },
        { id: 'L3-G8-EX5', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：大學成績不好，對將來有沒有影響？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['多少會有一點影響。'] }], targetPattern: 'L3-G8' }
      ]
    },
    {
      id: 'L3-G9', lessonId: 'L3', order: 9, pattern: '再…也…',
      functionVi: 'Mẫu câu này diễn tả một tình huống vẫn đúng (theo sau 也) bất kể hoàn cảnh nêu ra (theo sau 再) cực đoan đến đâu.',
      functionEn: 'This pattern indicates that a situation still holds true (after 也) regardless of the circumstances (after 再).',
      examples: [
        { traditional: '學中文壓力再大，我也要繼續學。', simplified: '学中文压力再大，我也要继续学。', english: "No matter how much stress I get from studying Chinese, I'm going to keep studying.", vietnamese: 'Học tiếng Trung áp lực có lớn đến đâu, mình cũng vẫn tiếp tục học.' },
        { traditional: '你再生氣也不能罵人。', simplified: '你再生气也不能骂人。', english: "No matter how mad you get, you can't ream out other people.", vietnamese: 'Cậu có giận đến đâu cũng không được mắng người khác.' },
        { traditional: '豬腳麵線再好吃也不能天天吃。', simplified: '猪脚面线再好吃也不能天天吃。', english: "It doesn't matter how delicious pork knuckle rice threads are. You can't eat the dish every day.", vietnamese: 'Mì sợi chân giò có ngon đến đâu cũng không thể ăn hàng ngày.' },
        { traditional: '工作再穩定也可能發生變化。', simplified: '工作再稳定也可能发生变化。', english: 'No matter how stable a job is, changes can still happen.', vietnamese: 'Công việc có ổn định đến đâu cũng có thể xảy ra thay đổi.' },
        { traditional: '考試再簡單，也有人考不好。', simplified: '考试再简单，也有人考不好。', english: "Regardless of how easy a test is, there's always someone who does poorly.", vietnamese: 'Bài thi có dễ đến đâu, cũng vẫn có người làm không tốt.' }
      ],
      usageNotesVi: 'Mẫu này gần giống với 不管A，…都B (đã học ở Bài 1), nhưng 不管…都 cho thấy kết quả B luôn xảy ra bất kể điều kiện A là gì, còn 再…也 thường lấy A là tình huống cực đoan nhất để nhấn mạnh, sắc thái mạnh hơn. So sánh: 自己做的菜不管多麼難吃，都得吃光。 và 自己做的菜，再難吃也得吃光。 — hai câu gần giống nhau về nghĩa, nhưng 再…也 nhấn mạnh hơn.',
      exercises: [
        { id: 'L3-G9-EX1', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：臭豆腐很好吃，你要不要嚐一嚐？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['臭豆腐再好吃，我也不敢嚐。'] }], targetPattern: 'L3-G9' },
        { id: 'L3-G9-EX2', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：捷運很擠，你要上車嗎？', textWithBlanks: 'B：快遲到了，___。', blanks: [{ index: 0, acceptedAnswers: ['捷運再擠，我也得上車。'] }], targetPattern: 'L3-G9' },
        { id: 'L3-G9-EX3', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：水上摩托車很安全，要不要騎？', textWithBlanks: 'B：我不會游泳，___。', blanks: [{ index: 0, acceptedAnswers: ['水上摩托車再安全，我也不敢騎。'] }], targetPattern: 'L3-G9' },
        { id: 'L3-G9-EX4', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他很節省，每天只吃一餐。', textWithBlanks: 'B：___也要注意營養！', blanks: [{ index: 0, acceptedAnswers: ['再節省也要注意營養！'] }], targetPattern: 'L3-G9' },
        { id: 'L3-G9-EX5', lessonId: 'L3', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：最近百貨公司的商品都打折，東西都便宜很多。', textWithBlanks: 'B：我的錢快用光了，___。', blanks: [{ index: 0, acceptedAnswers: ['東西再便宜，我也不能買了。'] }], targetPattern: 'L3-G9' }
      ]
    }
  ],

  workbookExercises: [
    {
      id: 'L3-WB-match-festival', lessonId: 'L3', section: 'pairs', type: 'matching',
      prompt: 'Nối mỗi ngày lễ với các hoạt động phù hợp (1 ngày lễ có thể nối với nhiều hoạt động).',
      pairs: [
        { left: '春節', right: '圍爐 (quây quần ăn tất niên)' },
        { left: '春節', right: '祭祖 (cúng tổ tiên)' },
        { left: '春節', right: '給壓歲錢 (lì xì)' },
        { left: '端午節', right: '戴香包 (đeo túi thơm)' },
        { left: '端午節', right: '喝雄黃酒 (uống rượu hùng hoàng)' },
        { left: '中秋節', right: '吃月餅 (ăn bánh trung thu)' },
        { left: '中秋節', right: '慶祝收成 (mừng thu hoạch)' }
      ]
    },
    {
      id: 'L3-WB-match-collocation', lessonId: 'L3', section: 'pairs', type: 'matching',
      prompt: 'Ghép danh từ với tính từ thường đi cùng (collocation).',
      pairs: [
        { left: '外語', right: '流利 (lưu loát)' },
        { left: '時間', right: '長 (dài)' },
        { left: '馬路', right: '寬 (rộng)' },
        { left: '月亮', right: '圓 (tròn)' },
        { left: '氣氛', right: '溫馨 (ấm áp)' },
        { left: '食物', right: '新鮮 (tươi)' },
        { left: '生活費', right: '低 (thấp)' }
      ]
    },

    { id: 'L3-WB-fw-1', lessonId: 'L3', section: 'fill-write', type: 'fill-blank', textWithBlanks: '我在機場工作，過新年的時候，雖然是我們最忙的時候，但是看到很多人都能回家跟家人___(tuánjù)，我也覺得很___(wēnxīn)。', blanks: [{ index: 0, acceptedAnswers: ['團聚'] }, { index: 1, acceptedAnswers: ['溫馨'] }] },
    { id: 'L3-WB-fw-2', lessonId: 'L3', section: 'fill-write', type: 'fill-blank', textWithBlanks: '我的___(zǔxiān)是從歐洲來的。常聽我父母說起他們的___(gùshì)，所以我想有一天一定要到歐洲去看看。', blanks: [{ index: 0, acceptedAnswers: ['祖先'] }, { index: 1, acceptedAnswers: ['故事'] }] },
    { id: 'L3-WB-fw-3', lessonId: 'L3', section: 'fill-write', type: 'fill-blank', textWithBlanks: '我剛___(yímín)到台灣來，總是忘了這裡又熱又___(cháoshī)，食物沒吃完就放在桌上，沒想到那麼快就___(fāméi)了，只好都丟了。', blanks: [{ index: 0, acceptedAnswers: ['移民'] }, { index: 1, acceptedAnswers: ['潮濕'] }, { index: 2, acceptedAnswers: ['發霉'] }] },
    { id: 'L3-WB-fw-4', lessonId: 'L3', section: 'fill-write', type: 'fill-blank', textWithBlanks: '___(nónglì)七月是一年當中很特別的一個月，一般又叫做「鬼月」（鬼guǐ, ghost）。按照傳統的做法，家家都得___(bàibài)。而且，在這個月裡，有很多事不能做，比方說不能結婚、不能出去旅行什麼的。不過，在現代，這些都被認為是___(míxìn)。', blanks: [{ index: 0, acceptedAnswers: ['農曆'] }, { index: 1, acceptedAnswers: ['拜拜'] }, { index: 2, acceptedAnswers: ['迷信'] }] },

    {
      id: 'L3-WB-fb-1', lessonId: 'L3', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền từ thích hợp vào đoạn văn (mỗi từ chỉ dùng 1 lần).',
      wordBank: ['根據', '當中', '重要', '感覺', '實際', '影響'],
      textWithBlanks: '給名字，對中國人來說可以算是最1.___的事情了，因為好的名字才會有好的將來。一般來說，父母會先找人2.___孩子的生日想出幾個適合的名字，然後再從這些名字3.___，選擇一個他們自己4.___最合適的名字。不過，名字對一個人的發展真的有很大的5.___嗎？說真的，誰也不知道。有人覺得這種說法是迷信。他們認為，不管怎麼樣，6.___生活中，一個人只有一直充實自己，工作才可能順利。',
      blanks: [
        { index: 1, acceptedAnswers: ['重要'] },
        { index: 2, acceptedAnswers: ['根據'] },
        { index: 3, acceptedAnswers: ['當中'] },
        { index: 4, acceptedAnswers: ['感覺'] },
        { index: 5, acceptedAnswers: ['影響'] },
        { index: 6, acceptedAnswers: ['實際'] }
      ]
    },

    {
      id: 'L3-WB-read-a1', lessonId: 'L3', section: 'reading', type: 'multiple-choice',
      prompt: '阿德：真麻煩，醫生建議這麼多，油膩的、炸的、烤的，什麼都不能吃，痛苦死了。\n小羅：是很痛苦，但是為了身體健康，醫生的話多少得聽一點啊！',
      question: '小羅的意思是什麼？',
      options: [{ id: 'a', text: '再痛苦也應該聽醫生的建議。' }, { id: 'b', text: '差一點忘了醫生的建議。' }, { id: 'c', text: '醫生的建議恐怕不能聽。' }],
      correctOptionId: 'a',
      explanationVi: '"醫生的話多少得聽一點啊" cho thấy dù khổ sở đến đâu vẫn nên nghe theo lời khuyên của bác sĩ.'
    },
    {
      id: 'L3-WB-read-a2', lessonId: 'L3', section: 'reading', type: 'multiple-choice',
      prompt: '安同：上週末你去你女朋友家，見到她父母了嗎？怎麼樣？\n田中：還不錯。幸虧我女朋友告訴我要帶什麼禮物去，要不然我還真怕他們會不喜歡我。',
      question: '田中的意思是什麼？',
      options: [{ id: 'a', text: '他的女朋友忘了告訴他要帶禮物。' }, { id: 'b', text: '他沒帶禮物，所以他女朋友的父母不喜歡他。' }, { id: 'c', text: '他女朋友的父母應該不討厭他。' }],
      correctOptionId: 'c',
      explanationVi: '"還不錯" và nhờ mang đúng quà nên bố mẹ bạn gái chắc không ghét anh ấy.'
    },
    {
      id: 'L3-WB-read-a3', lessonId: 'L3', section: 'reading', type: 'multiple-choice',
      prompt: '怡君：一般來說，超市會在星期四買進很多新鮮的菜和水果，因為週末很多人會去超市。\n明華：難怪我媽媽和很多太太都喜歡星期四去超市。',
      question: '明華對他媽媽星期四去超市這件事：',
      options: [{ id: 'a', text: '他早就知道為什麼了。' }, { id: 'b', text: '他現在才知道為什麼。' }, { id: 'c', text: '他很難知道為什麼。' }],
      correctOptionId: 'b',
      explanationVi: '"難怪" cho thấy đây là thắc mắc cũ vừa được giải đáp bởi thông tin mới - tức là trước đó anh chưa biết lý do.'
    },

    {
      id: 'L3-WB-read-b1', lessonId: 'L3', section: 'reading', type: 'multiple-choice',
      prompt: '很多人聽過「六月新娘」，可是不一定知道為什麼這麼說，而且大概也會好奇，台灣的六月又熱又潮濕，怎麼會有人想當「六月新娘」？這原來是西方人的習慣。在西方，春天天氣不夠暖和，也常下雨。六月天氣穩定，所以最適合結婚。台灣現在受到西方的影響，也有很多人想在六月結婚。因為六月的時候，雨季剛過，天氣穩定，適合拍結婚的照片。六月可以說是一個結婚的季節。不過，以前在鄉下，結婚的季節是冬天。因為從春天到秋天，農人都很忙，到了冬天才能休息。那個時候才有時間好好地辦喜事，親戚朋友也才有空來吃喜酒。',
      question: '有的台灣人認為六月不適合結婚。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: 'Bài viết nói ngược lại: chịu ảnh hưởng phương Tây, nhiều người Đài Loan hiện nay lại muốn kết hôn vào tháng 6.'
    },
    {
      id: 'L3-WB-read-b2', lessonId: 'L3', section: 'reading', type: 'multiple-choice',
      prompt: '很多人聽過「六月新娘」，可是不一定知道為什麼這麼說，而且大概也會好奇，台灣的六月又熱又潮濕，怎麼會有人想當「六月新娘」？這原來是西方人的習慣。在西方，春天天氣不夠暖和，也常下雨。六月天氣穩定，所以最適合結婚。台灣現在受到西方的影響，也有很多人想在六月結婚。因為六月的時候，雨季剛過，天氣穩定，適合拍結婚的照片。六月可以說是一個結婚的季節。不過，以前在鄉下，結婚的季節是冬天。因為從春天到秋天，農人都很忙，到了冬天才能休息。那個時候才有時間好好地辦喜事，親戚朋友也才有空來吃喜酒。',
      question: '在六月結婚是中國的傳統。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"這原來是西方人的習慣" - đây là phong tục của phương Tây, không phải truyền thống Trung Quốc.'
    },
    {
      id: 'L3-WB-read-b3', lessonId: 'L3', section: 'reading', type: 'multiple-choice',
      prompt: '很多人聽過「六月新娘」，可是不一定知道為什麼這麼說，而且大概也會好奇，台灣的六月又熱又潮濕，怎麼會有人想當「六月新娘」？這原來是西方人的習慣。在西方，春天天氣不夠暖和，也常下雨。六月天氣穩定，所以最適合結婚。台灣現在受到西方的影響，也有很多人想在六月結婚。因為六月的時候，雨季剛過，天氣穩定，適合拍結婚的照片。六月可以說是一個結婚的季節。不過，以前在鄉下，結婚的季節是冬天。因為從春天到秋天，農人都很忙，到了冬天才能休息。那個時候才有時間好好地辦喜事，親戚朋友也才有空來吃喜酒。',
      question: '西方人在六月結婚是因為六月天氣好的關係。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"六月天氣穩定，所以最適合結婚" xác nhận điều này.'
    },
    {
      id: 'L3-WB-read-b4', lessonId: 'L3', section: 'reading', type: 'multiple-choice',
      prompt: '很多人聽過「六月新娘」，可是不一定知道為什麼這麼說，而且大概也會好奇，台灣的六月又熱又潮濕，怎麼會有人想當「六月新娘」？這原來是西方人的習慣。在西方，春天天氣不夠暖和，也常下雨。六月天氣穩定，所以最適合結婚。台灣現在受到西方的影響，也有很多人想在六月結婚。因為六月的時候，雨季剛過，天氣穩定，適合拍結婚的照片。六月可以說是一個結婚的季節。不過，以前在鄉下，結婚的季節是冬天。因為從春天到秋天，農人都很忙，到了冬天才能休息。那個時候才有時間好好地辦喜事，親戚朋友也才有空來吃喜酒。',
      question: '一般來說，以前在鄉下的人都喜歡在六月結婚。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"以前在鄉下，結婚的季節是冬天" - ngày xưa ở nông thôn mùa cưới là mùa đông, không phải tháng 6.'
    },
    {
      id: 'L3-WB-read-b5', lessonId: 'L3', section: 'reading', type: 'multiple-choice',
      prompt: '很多人聽過「六月新娘」，可是不一定知道為什麼這麼說，而且大概也會好奇，台灣的六月又熱又潮濕，怎麼會有人想當「六月新娘」？這原來是西方人的習慣。在西方，春天天氣不夠暖和，也常下雨。六月天氣穩定，所以最適合結婚。台灣現在受到西方的影響，也有很多人想在六月結婚。因為六月的時候，雨季剛過，天氣穩定，適合拍結婚的照片。六月可以說是一個結婚的季節。不過，以前在鄉下，結婚的季節是冬天。因為從春天到秋天，農人都很忙，到了冬天才能休息。那個時候才有時間好好地辦喜事，親戚朋友也才有空來吃喜酒。',
      question: '秋天是收成的季節，農人沒空參加婚禮。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"從春天到秋天，農人都很忙，到了冬天才能休息" cho thấy nông dân bận rộn xuyên suốt đến hết mùa thu, kết hợp với việc mùa thu là mùa thu hoạch (đã học trong 短文), nên không có thời gian tham dự tiệc cưới.'
    },

    { id: 'L3-WB-dc-1', lessonId: 'L3', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L3-G3', turns: [{ speaker: 'A', text: '這裡的蚊蟲好多啊，我快受不了了。', isBlank: false }, { speaker: 'B', text: '（算是）', isBlank: true }], sampleAnswer: '這裡的蚊蟲算是多的，尤其是晚上。' },
    { id: 'L3-WB-dc-2', lessonId: 'L3', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L3-G5', turns: [{ speaker: 'A', text: '他受到他父母很大的影響。', isBlank: false }, { speaker: 'B', text: '（難怪）', isBlank: true }], sampleAnswer: '難怪他這麼喜歡音樂，跟他爸爸一樣。' },
    { id: 'L3-WB-dc-3', lessonId: 'L3', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L3-G8', turns: [{ speaker: 'A', text: '你怎麼懂這麼多跟農業有關的事情啊？', isBlank: false }, { speaker: 'B', text: '（多少）', isBlank: true }], sampleAnswer: '我家以前是種田的，所以多少懂一點。' },
    { id: 'L3-WB-dc-4', lessonId: 'L3', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L3-G9', turns: [{ speaker: 'A', text: '我覺得小李個性很奇怪，我一定得跟他一起工作嗎？', isBlank: false }, { speaker: 'B', text: '（再…也…）', isBlank: true }], sampleAnswer: '他個性再奇怪，你也得跟他一起工作，這是公司的安排。' },
    { id: 'L3-WB-dc-5', lessonId: 'L3', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L3-G2', turns: [{ speaker: 'A', text: '申請手續這麼複雜，你知道怎麼辦嗎？', isBlank: false }, { speaker: 'B', text: '（幸虧…要不然…）', isBlank: true }], sampleAnswer: '幸虧我問過辦過的朋友，要不然真的不知道怎麼辦。' },

    {
      id: 'L3-WB-comp-1', lessonId: 'L3', section: 'composition', type: 'composition',
      topicVi: 'Bạn người Đài Loan muốn đi du lịch nước bạn, muốn hỏi nên đi vào lúc nào là tốt nhất? Cần chú ý những gì?',
      requiredWords: ['L3-020', 'L3-047', 'L3-028', 'L3-021', 'L3-027', 'L3-026', 'L3-017', 'L3-009', 'L3-032', 'L3-036', 'L3-003', 'L3-010'],
      requiredPatterns: ['L3-G2', 'L3-G6', 'L3-G9'],
      minLength: 200, maxLength: 250
    },
    {
      id: 'L3-WB-comp-2', lessonId: 'L3', section: 'composition', type: 'composition',
      topicVi: 'Ở nước bạn có thói quen sinh hoạt nào làm theo cách truyền thống không? Bạn có quan điểm gì về những thói quen này? Bạn đồng ý hay phản đối? Vì sao?',
      requiredWords: ['L3-011', 'L3-020', 'L3-047', 'L3-049', 'L3-048', 'L3-032', 'L3-036'],
      requiredPatterns: ['L3-G2', 'L3-G6', 'L3-G9'],
      minLength: 200, maxLength: 250
    }
  ]
}
