import type { Lesson } from '../../../types/lesson'

export const lesson11: Lesson = {
  id: 'L11',
  number: 11,
  titleTraditional: '台灣故事',
  titleSimplified: '台湾故事',
  titlePinyin: 'Táiwān gùshì',
  titleVi: 'Câu chuyện Đài Loan',
  status: 'available',

  dialogues: [
    [
      { speaker: '', traditional: '（在一間地方歷史博物館裡）', simplified: '（在一间地方历史博物馆里）', pinyin: '(Zài yì jiān dìfāng lìshǐ bówùguǎn lǐ)', english: '(Inside a local history museum)', vietnamese: '(Trong một bảo tàng lịch sử địa phương)' },
      { speaker: '羅珊蒂', traditional: '這張老照片上寫「一八九五」，那時候的台灣是什麼樣子？', simplified: '这张老照片上写「一八九五」，那时候的台湾是什么样子？', pinyin: 'Zhè zhāng lǎo zhàopiàn shàng xiě "yībājiǔwǔ", nà shíhòu de Táiwān shì shénme yàngzi?', english: "This old photo says '1895.' What was Taiwan like back then?", vietnamese: 'Tấm ảnh cũ này ghi "1895", Đài Loan thời đó trông thế nào?' },
      { speaker: '高橋健太', traditional: '那一年台灣被割讓給日本，開始了五十年的日本時代。你看那些建築，很多到現在還在用。', simplified: '那一年台湾被割让给日本，开始了五十年的日本时代。你看那些建筑，很多到现在还在用。', pinyin: 'Nà yì nián Táiwān bèi gēràng gěi Rìběn, kāishǐ le wǔshí nián de Rìběn shídài. Nǐ kàn nàxiē jiànzhú, hěn duō dào xiànzài hái zài yòng.', english: "That year Taiwan was ceded to Japan, beginning fifty years of the Japanese era. Look at those buildings—many are still in use today.", vietnamese: 'Năm đó Đài Loan bị cắt nhượng cho Nhật, bắt đầu năm mươi năm thời kỳ Nhật. Cậu xem mấy công trình đó, nhiều cái đến giờ vẫn còn dùng.' },
      { speaker: '陳敏萱', traditional: '其實在那之前，台灣的居民就已經由很多不同的族群組成了。最早是原住民，後來有從福建、廣東渡海來的漢人。', simplified: '其实在那之前，台湾的居民就已经由很多不同的族群组成了。最早是原住民，后来有从福建、广东渡海来的汉人。', pinyin: 'Qíshí zài nà zhīqián, Táiwān de jūmín jiù yǐjīng yóu hěn duō bùtóng de zúqún zǔchéng le. Zuì zǎo shì yuánzhùmín, hòulái yǒu cóng Fújiàn, Guǎngdōng dùhǎi lái de hànrén.', english: "Actually, even before that, Taiwan's population was already made up of many different ethnic groups. First the Aborigines, then Han Chinese who crossed the sea from Fujian and Guangdong.", vietnamese: 'Thật ra trước đó, cư dân Đài Loan đã do nhiều tộc người khác nhau tạo thành. Sớm nhất là người bản địa, sau đó có người Hán vượt biển từ Phúc Kiến, Quảng Đông sang.' },
      { speaker: '安德思', traditional: '所以「台灣人」從一開始就不是單一的。', simplified: '所以「台湾人」从一开始就不是单一的。', pinyin: 'Suǒyǐ "Táiwān rén" cóng yì kāishǐ jiù búshì dānyī de.', english: "So 'Taiwanese' was never a single thing from the start.", vietnamese: 'Vậy "người Đài Loan" ngay từ đầu đã không phải là đơn nhất.' },
      { speaker: '陳敏萱', traditional: '對。原來我一直以為大家都說一樣的話，來了以後才知道，有人在家說台語，有人說客家話，長輩之間還有人說日語。', simplified: '对。原来我一直以为大家都说一样的话，来了以后才知道，有人在家说台语，有人说客家话，长辈之间还有人说日语。', pinyin: 'Duì. Yuánlái wǒ yìzhí yǐwéi dàjiā dōu shuō yíyàng de huà, lái le yǐhòu cái zhīdào, yǒu rén zài jiā shuō táiyǔ, yǒu rén shuō kèjiāhuà, zhǎngbèi zhī jiān hái yǒu rén shuō Rìyǔ.', english: "Right. I used to think everyone spoke the same language; after coming here I realized some speak Taiwanese at home, some Hakka, and among the elders some even speak Japanese.", vietnamese: 'Đúng. Hóa ra mình cứ tưởng ai cũng nói cùng một thứ tiếng, đến rồi mới biết có người ở nhà nói tiếng Đài, có người nói tiếng Khách Gia, giữa các cụ còn có người nói tiếng Nhật.' },
      { speaker: '羅珊蒂', traditional: '這些不同的族群，是怎麼慢慢變成「一起的」？', simplified: '这些不同的族群，是怎么慢慢变成「一起的」？', pinyin: 'Zhèxiē bùtóng de zúqún, shì zěnme mànmàn biànchéng "yìqǐ de"?', english: "How did these different groups gradually become 'one'?", vietnamese: 'Những tộc người khác nhau này, làm sao dần trở thành "một khối"?' },
      { speaker: '高橋健太', traditional: '靠的是時間，也靠一起經歷過的事。無論是早來的還是晚到的，大家都在這塊土地上生活、工作，慢慢就有了共同的記憶。', simplified: '靠的是时间，也靠一起经历过的事。无论是早来的还是晚到的，大家都在这块土地上生活、工作，慢慢就有了共同的记忆。', pinyin: 'Kào de shì shíjiān, yě kào yìqǐ jīnglì guò de shì. Wúlùn shì zǎo lái de háishì wǎn dào de, dàjiā dōu zài zhè kuài tǔdì shàng shēnghuó, gōngzuò, mànmàn jiù yǒu le gòngtóng de jìyì.', english: "It took time, and shared experiences. Whether they came early or late, everyone lived and worked on this land, and gradually built shared memories.", vietnamese: 'Nhờ thời gian, cũng nhờ những chuyện cùng trải qua. Bất kể là người đến sớm hay đến muộn, mọi người đều sống, làm việc trên mảnh đất này, dần dần có ký ức chung.' },
      { speaker: '安德思', traditional: '這面牆上的地名很有意思。「打狗」、「艋舺」，聽起來不像中文。', simplified: '这面墙上的地名很有意思。「打狗」、「艋舺」，听起来不像中文。', pinyin: 'Zhè miàn qiáng shàng de dìmíng hěn yǒuyìsi. "Dǎgǒu", "Mǎngjiǎ", tīng qǐlái bú xiàng zhōngwén.', english: "The place names on this wall are interesting. 'Dagou,' 'Mengjia'—they don't sound like Chinese.", vietnamese: 'Các địa danh trên bức tường này rất thú vị. "Đả Cẩu", "Mãnh Giáp", nghe không giống tiếng Trung.' },
      { speaker: '陳敏萱', traditional: '那些是原住民語或台語的發音，後來用漢字寫下來的。據說「打狗」就是後來的高雄。', simplified: '那些是原住民语或台语的发音，后来用汉字写下来的。据说「打狗」就是后来的高雄。', pinyin: 'Nàxiē shì yuánzhùmín yǔ huò táiyǔ de fāyīn, hòulái yòng hànzì xiě xiàlái de. Jùshuō "Dǎgǒu" jiùshì hòulái de Gāoxióng.', english: "Those are Aboriginal or Taiwanese pronunciations later written in Chinese characters. It's said 'Dagou' is what later became Kaohsiung.", vietnamese: 'Đó là cách phát âm của tiếng thổ dân hoặc tiếng Đài, sau này viết lại bằng chữ Hán. Nghe nói "Đả Cẩu" chính là Cao Hùng sau này.' },
      { speaker: '羅珊蒂', traditional: '正因為有這麼多來源，台灣的食物、廟宇、節日才這麼多樣。', simplified: '正因为有这么多来源，台湾的食物、庙宇、节日才这么多样。', pinyin: 'Zhèng yīnwèi yǒu zhème duō láiyuán, Táiwān de shíwù, miàoyǔ, jiérì cái zhème duōyàng.', english: 'Precisely because there are so many sources, Taiwan\'s food, temples, and festivals are so diverse.', vietnamese: 'Chính vì có nhiều nguồn gốc như vậy, ẩm thực, đền miếu, lễ hội của Đài Loan mới đa dạng đến thế.' },
      { speaker: '高橋健太', traditional: '這幾十年又多了新住民。從東南亞來的媽媽們，把她們家鄉的菜和語言也帶了進來。', simplified: '这几十年又多了新住民。从东南亚来的妈妈们，把她们家乡的菜和语言也带了进来。', pinyin: 'Zhè jǐshí nián yòu duō le xīnzhùmín. Cóng Dōngnányà lái de māmāmen, bǎ tāmen jiāxiāng de cài hé yǔyán yě dài le jìnlái.', english: "In recent decades there are new immigrants too. Mothers from Southeast Asia have brought in their hometown food and languages.", vietnamese: 'Mấy chục năm nay lại có thêm cư dân mới. Các bà mẹ đến từ Đông Nam Á đã mang cả món ăn và ngôn ngữ quê hương họ vào.' },
      { speaker: '安德思', traditional: '這些新的故事，也會變成「台灣故事」的一部分。', simplified: '这些新的故事，也会变成「台湾故事」的一部分。', pinyin: 'Zhèxiē xīn de gùshì, yě huì biànchéng "Táiwān gùshì" de yí bùfèn.', english: "These new stories will also become part of the 'Taiwan story.'", vietnamese: 'Những câu chuyện mới này cũng sẽ trở thành một phần của "câu chuyện Đài Loan".' },
      { speaker: '陳敏萱', traditional: '博物館最後一區就是在講這個。他們訪問了幾百個家庭，把每個人的移民故事都記下來。', simplified: '博物馆最后一区就是在讲这个。他们访问了几百个家庭，把每个人的移民故事都记下来。', pinyin: 'Bówùguǎn zuìhòu yí qū jiùshì zài jiǎng zhège. Tāmen fǎngwèn le jǐbǎi ge jiātíng, bǎ měi ge rén de yímín gùshì dōu jì xiàlái.', english: "The last section of the museum is about exactly this. They interviewed several hundred families and recorded everyone's immigration story.", vietnamese: 'Khu cuối cùng của bảo tàng chính là nói về điều này. Họ phỏng vấn mấy trăm gia đình, ghi lại câu chuyện di dân của từng người.' },
      { speaker: '羅珊蒂', traditional: '一個地方的歷史，說到底就是很多普通人的故事加起來的。', simplified: '一个地方的历史，说到底就是很多普通人的故事加起来的。', pinyin: 'Yí ge dìfāng de lìshǐ, shuō dàodǐ jiùshì hěn duō pǔtōng rén de gùshì jiā qǐlái de.', english: "A place's history, in the end, is just many ordinary people's stories added together.", vietnamese: 'Lịch sử của một nơi, nói cho cùng chính là câu chuyện của rất nhiều người bình thường cộng lại.' },
      { speaker: '高橋健太', traditional: '所以我很喜歡這種小型的地方博物館，比課本上的大歷史更讓人記得住。', simplified: '所以我很喜欢这种小型的地方博物馆，比课本上的大历史更让人记得住。', pinyin: 'Suǒyǐ wǒ hěn xǐhuān zhè zhǒng xiǎoxíng de dìfāng bówùguǎn, bǐ kèběn shàng de dà lìshǐ gèng ràng rén jì de zhù.', english: "That's why I like these small local museums—they're more memorable than the grand history in textbooks.", vietnamese: 'Nên mình rất thích loại bảo tàng địa phương nhỏ thế này, dễ nhớ hơn lịch sử lớn trong sách giáo khoa.' },
      { speaker: '安德思', traditional: '走吧，我想再去看看那區的訪問影片。', simplified: '走吧，我想再去看看那区的访问影片。', pinyin: 'Zǒu ba, wǒ xiǎng zài qù kànkan nà qū de fǎngwèn yǐngpiàn.', english: "Let's go—I want to watch the interview videos in that section again.", vietnamese: 'Đi thôi, mình muốn quay lại xem video phỏng vấn ở khu đó.' }
    ]
  ],

  shortReading: {
    traditional:
      '移民之島\n\n　　有人說，台灣是一座「移民之島」。從幾百年前到今天，一批又一批的人渡海來到這裡：最早的原住民、明清時期從福建和廣東來的漢人、一九四九年前後從中國各地來的「外省人」，還有近幾十年來自東南亞的新住民。\n\n　　這些族群帶來不同的語言、食物和信仰。一開始，彼此並不熟悉，甚至因為土地和資源有過衝突。可是經過長時間在同一塊土地上生活、工作、通婚，這些差異慢慢融合，形成了今天多元的台灣文化。\n\n　　走在街上，你可能同時聽到台語、客家話、原住民語和越南話；一條街上可能有媽祖廟，也有東南亞的小吃店。很多地名，像「打狗」、「艋舺」，其實是原住民語或台語的發音，用漢字寫下來的，至今還提醒著我們這塊土地的來源。\n\n　　對現在大部分的人來說，不管祖先來自哪裡，這裡就是家。所謂「台灣故事」，說到底，就是這許多普通家庭的移民故事加起來的結果。學會用包容的態度看待彼此的不同，正是這座島一直在上的一課。',
    simplified:
      '移民之岛\n\n　　有人说，台湾是一座「移民之岛」。从几百年前到今天，一批又一批的人渡海来到这里：最早的原住民、明清时期从福建和广东来的汉人、一九四九年前后从中国各地来的「外省人」，还有近几十年来自东南亚的新住民。\n\n　　这些族群带来不同的语言、食物和信仰。一开始，彼此并不熟悉，甚至因为土地和资源有过冲突。可是经过长时间在同一块土地上生活、工作、通婚，这些差异慢慢融合，形成了今天多元的台湾文化。\n\n　　走在街上，你可能同时听到台语、客家话、原住民语和越南话；一条街上可能有妈祖庙，也有东南亚的小吃店。很多地名，像「打狗」、「艋舺」，其实是原住民语或台语的发音，用汉字写下来的，至今还提醒着我们这块土地的来源。\n\n　　对现在大部分的人来说，不管祖先来自哪里，这里就是家。所谓「台湾故事」，说到底，就是这许多普通家庭的移民故事加起来的结果。学会用包容的态度看待彼此的不同，正是这座岛一直在上的一课。',
    vietnamese:
      'Hòn đảo của người di dân\n\nCó người nói, Đài Loan là một "hòn đảo của người di dân". Từ mấy trăm năm trước đến nay, hết đợt người này đến đợt người khác vượt biển đến đây: người bản địa sớm nhất, người Hán từ Phúc Kiến và Quảng Đông thời Minh Thanh, những "người ngoại tỉnh" đến từ khắp nơi ở Trung Quốc quanh năm 1949, và những cư dân mới đến từ Đông Nam Á trong vài chục năm gần đây.\n\nCác tộc người này mang đến những ngôn ngữ, món ăn và tín ngưỡng khác nhau. Lúc đầu, hai bên không quen thuộc nhau, thậm chí vì đất đai và tài nguyên mà từng có xung đột. Nhưng qua thời gian dài cùng sống, làm việc, kết hôn trên cùng một mảnh đất, những khác biệt đó dần hòa hợp, hình thành nên văn hóa Đài Loan đa nguyên như ngày nay.\n\nĐi trên phố, bạn có thể cùng lúc nghe thấy tiếng Đài, tiếng Khách Gia, tiếng thổ dân và tiếng Việt; trên một con phố có thể có miếu Mã Tổ, cũng có quán ăn vặt Đông Nam Á. Nhiều địa danh, như "Đả Cẩu", "Mãnh Giáp", thật ra là cách phát âm của tiếng thổ dân hoặc tiếng Đài, viết lại bằng chữ Hán, đến nay vẫn nhắc chúng ta về nguồn cội của mảnh đất này.\n\nĐối với phần lớn mọi người hiện nay, bất kể tổ tiên đến từ đâu, nơi đây chính là nhà. Cái gọi là "câu chuyện Đài Loan", nói cho cùng, chính là kết quả của rất nhiều câu chuyện di dân của những gia đình bình thường cộng lại. Học được cách nhìn nhận sự khác biệt của nhau bằng thái độ bao dung, chính là bài học mà hòn đảo này luôn phải học.'
  },

  phrases: [
    { phraseTraditional: '渡海來台', phraseSimplified: '渡海来台', pinyin: 'dùhǎi lái tái', meaningVi: 'vượt biển đến Đài Loan' },
    { phraseTraditional: '這塊土地', phraseSimplified: '这块土地', pinyin: 'zhè kuài tǔdì', meaningVi: 'mảnh đất này' },
    { phraseTraditional: '共同的記憶', phraseSimplified: '共同的记忆', pinyin: 'gòngtóng de jìyì', meaningVi: 'ký ức chung' },
    { phraseTraditional: '說到底', phraseSimplified: '说到底', pinyin: 'shuō dàodǐ', meaningVi: 'nói cho cùng, suy cho cùng' },
    { phraseTraditional: '一部分', phraseSimplified: '一部分', pinyin: 'yí bùfèn', meaningVi: 'một phần' },
    { phraseTraditional: '加起來', phraseSimplified: '加起来', pinyin: 'jiā qǐlái', meaningVi: 'cộng lại, gộp lại' },
    { phraseTraditional: '記得住', phraseSimplified: '记得住', pinyin: 'jì de zhù', meaningVi: 'nhớ được (khắc sâu trong trí)' }
  ],

  vocab: [
    { id: 'L11-001', lessonId: 'L11', order: 1, group: 'vocab1', traditional: '割讓', simplified: '割让', pinyin: 'gēràng', wordClass: ['V'], meaningVi: 'cắt nhượng (lãnh thổ)', meaningEn: 'to cede (territory)', tags: ['lich-su'], examples: [{ traditional: '一八九五年，台灣被割讓給日本。', simplified: '一八九五年，台湾被割让给日本。', vietnamese: 'Năm 1895, Đài Loan bị cắt nhượng cho Nhật.' }] },
    { id: 'L11-002', lessonId: 'L11', order: 2, group: 'vocab1', traditional: '時代', simplified: '时代', pinyin: 'shídài', wordClass: ['N'], meaningVi: 'thời đại, thời kỳ', meaningEn: 'era, period', tags: ['lich-su'], examples: [{ traditional: '那是五十年的日本時代。', simplified: '那是五十年的日本时代。', vietnamese: 'Đó là năm mươi năm thời kỳ Nhật.' }] },
    { id: 'L11-003', lessonId: 'L11', order: 3, group: 'vocab1', traditional: '建築', simplified: '建筑', pinyin: 'jiànzhú', wordClass: ['N'], meaningVi: 'kiến trúc, công trình xây dựng', meaningEn: 'building, architecture', examples: [{ traditional: '那時候蓋的建築，很多到現在還在用。', simplified: '那时候盖的建筑，很多到现在还在用。', vietnamese: 'Những công trình xây thời đó, nhiều cái đến giờ vẫn còn dùng.' }] },
    { id: 'L11-004', lessonId: 'L11', order: 4, group: 'vocab1', traditional: '居民', simplified: '居民', pinyin: 'jūmín', wordClass: ['N'], meaningVi: 'cư dân, dân cư', meaningEn: 'resident, inhabitant', examples: [{ traditional: '台灣的居民由很多族群組成。', simplified: '台湾的居民由很多族群组成。', vietnamese: 'Cư dân Đài Loan do nhiều tộc người tạo thành.' }] },
    { id: 'L11-005', lessonId: 'L11', order: 5, group: 'vocab1', traditional: '族群', simplified: '族群', pinyin: 'zúqún', wordClass: ['N'], meaningVi: 'nhóm sắc tộc, tộc người', meaningEn: 'ethnic group', tags: ['van-hoa'], examples: [{ traditional: '不同的族群帶來不同的語言和食物。', simplified: '不同的族群带来不同的语言和食物。', vietnamese: 'Các tộc người khác nhau mang đến ngôn ngữ và món ăn khác nhau.' }] },
    { id: 'L11-006', lessonId: 'L11', order: 6, group: 'vocab1', traditional: '原住民', simplified: '原住民', pinyin: 'yuánzhùmín', wordClass: ['N'], meaningVi: 'người bản địa, thổ dân', meaningEn: 'indigenous people, Aborigines', tags: ['van-hoa'], examples: [{ traditional: '台灣最早的居民是原住民。', simplified: '台湾最早的居民是原住民。', vietnamese: 'Cư dân sớm nhất của Đài Loan là người bản địa.' }] },
    { id: 'L11-007', lessonId: 'L11', order: 7, group: 'vocab1', traditional: '渡海', simplified: '渡海', pinyin: 'dùhǎi', wordClass: ['V-sep'], meaningVi: 'vượt biển', meaningEn: 'to cross the sea', examples: [{ traditional: '有很多從福建、廣東渡海來的漢人。', simplified: '有很多从福建、广东渡海来的汉人。', vietnamese: 'Có nhiều người Hán vượt biển từ Phúc Kiến, Quảng Đông sang.' }] },
    { id: 'L11-008', lessonId: 'L11', order: 8, group: 'vocab1', traditional: '漢人', simplified: '汉人', pinyin: 'hànrén', wordClass: ['N'], meaningVi: 'người Hán', meaningEn: 'Han Chinese', examples: [{ traditional: '漢人大多是明清時期來的。', simplified: '汉人大多是明清时期来的。', vietnamese: 'Người Hán phần lớn đến vào thời Minh Thanh.' }] },
    { id: 'L11-009', lessonId: 'L11', order: 9, group: 'vocab1', traditional: '單一', simplified: '单一', pinyin: 'dānyī', wordClass: ['Vs-attr'], meaningVi: 'đơn nhất, đơn thuần', meaningEn: 'single, homogeneous', examples: [{ traditional: '「台灣人」從一開始就不是單一的。', simplified: '「台湾人」从一开始就不是单一的。', vietnamese: '"Người Đài Loan" ngay từ đầu đã không phải là đơn nhất.' }] },
    { id: 'L11-010', lessonId: 'L11', order: 10, group: 'vocab1', traditional: '台語', simplified: '台语', pinyin: 'táiyǔ', wordClass: ['N'], meaningVi: 'tiếng Đài (tiếng Mân Nam Đài Loan)', meaningEn: 'Taiwanese (Hokkien)', tags: ['van-hoa'], examples: [{ traditional: '有人在家說台語。', simplified: '有人在家说台语。', vietnamese: 'Có người ở nhà nói tiếng Đài.' }] },
    { id: 'L11-011', lessonId: 'L11', order: 11, group: 'vocab1', traditional: '客家話', simplified: '客家话', pinyin: 'kèjiāhuà', wordClass: ['N'], meaningVi: 'tiếng Khách Gia (Hakka)', meaningEn: 'Hakka (language)', tags: ['van-hoa'], examples: [{ traditional: '有人說客家話，也有人說原住民語。', simplified: '有人说客家话，也有人说原住民语。', vietnamese: 'Có người nói tiếng Khách Gia, cũng có người nói tiếng thổ dân.' }] },
    { id: 'L11-012', lessonId: 'L11', order: 12, group: 'vocab1', traditional: '經歷', simplified: '经历', pinyin: 'jīnglì', wordClass: ['V', 'N'], meaningVi: 'trải qua; trải nghiệm, kinh nghiệm', meaningEn: 'to go through; experience', examples: [{ traditional: '大家靠一起經歷過的事，慢慢變成一體。', simplified: '大家靠一起经历过的事，慢慢变成一体。', vietnamese: 'Mọi người nhờ những chuyện cùng trải qua, dần trở thành một khối.' }] },
    { id: 'L11-013', lessonId: 'L11', order: 13, group: 'vocab1', traditional: '土地', simplified: '土地', pinyin: 'tǔdì', wordClass: ['N'], meaningVi: 'đất đai, mảnh đất', meaningEn: 'land, soil', examples: [{ traditional: '大家都在這塊土地上生活、工作。', simplified: '大家都在这块土地上生活、工作。', vietnamese: 'Mọi người đều sống, làm việc trên mảnh đất này.' }] },
    { id: 'L11-014', lessonId: 'L11', order: 14, group: 'vocab1', traditional: '共同', simplified: '共同', pinyin: 'gòngtóng', wordClass: ['Vs-attr', 'Adv'], meaningVi: 'chung, cùng', meaningEn: 'common, shared; jointly', examples: [{ traditional: '慢慢就有了共同的記憶。', simplified: '慢慢就有了共同的记忆。', vietnamese: 'Dần dần có ký ức chung.' }] },
    { id: 'L11-015', lessonId: 'L11', order: 15, group: 'vocab1', traditional: '記憶', simplified: '记忆', pinyin: 'jìyì', wordClass: ['N'], meaningVi: 'ký ức', meaningEn: 'memory', examples: [{ traditional: '共同的記憶讓不同的族群變成「我們」。', simplified: '共同的记忆让不同的族群变成「我们」。', vietnamese: 'Ký ức chung khiến các tộc người khác nhau trở thành "chúng ta".' }] },
    { id: 'L11-016', lessonId: 'L11', order: 16, group: 'vocab1', traditional: '地名', simplified: '地名', pinyin: 'dìmíng', wordClass: ['N'], meaningVi: 'địa danh, tên đất', meaningEn: 'place name', examples: [{ traditional: '這面牆上的地名很有意思。', simplified: '这面墙上的地名很有意思。', vietnamese: 'Các địa danh trên bức tường này rất thú vị.' }] },
    { id: 'L11-017', lessonId: 'L11', order: 17, group: 'vocab1', traditional: '發音', simplified: '发音', pinyin: 'fāyīn', wordClass: ['N'], meaningVi: 'cách phát âm, âm đọc', meaningEn: 'pronunciation', examples: [{ traditional: '「打狗」是台語的發音，用漢字寫下來的。', simplified: '「打狗」是台语的发音，用汉字写下来的。', vietnamese: '"Đả Cẩu" là cách phát âm tiếng Đài, viết lại bằng chữ Hán.' }] },
    { id: 'L11-018', lessonId: 'L11', order: 18, group: 'vocab1', traditional: '廟宇', simplified: '庙宇', pinyin: 'miàoyǔ', wordClass: ['N'], meaningVi: 'đền, miếu, chùa', meaningEn: 'temple', tags: ['van-hoa'], examples: [{ traditional: '一條街上可能有媽祖廟，也有東南亞的小吃店。', simplified: '一条街上可能有妈祖庙，也有东南亚的小吃店。', vietnamese: 'Trên một con phố có thể có miếu Mã Tổ, cũng có quán ăn vặt Đông Nam Á.' }] },
    { id: 'L11-019', lessonId: 'L11', order: 19, group: 'vocab1', traditional: '多樣', simplified: '多样', pinyin: 'duōyàng', wordClass: ['Vs'], meaningVi: 'đa dạng', meaningEn: 'diverse, varied', examples: [{ traditional: '台灣的食物和節日很多樣。', simplified: '台湾的食物和节日很多样。', vietnamese: 'Món ăn và lễ hội của Đài Loan rất đa dạng.' }] },
    { id: 'L11-020', lessonId: 'L11', order: 20, group: 'vocab1', traditional: '新住民', simplified: '新住民', pinyin: 'xīnzhùmín', wordClass: ['N'], meaningVi: 'cư dân mới (thường là người kết hôn nhập cư)', meaningEn: 'new immigrant', tags: ['van-hoa'], examples: [{ traditional: '這幾十年又多了很多新住民。', simplified: '这几十年又多了很多新住民。', vietnamese: 'Mấy chục năm nay lại có thêm nhiều cư dân mới.' }] },
    { id: 'L11-021', lessonId: 'L11', order: 21, group: 'vocab1', traditional: '家鄉', simplified: '家乡', pinyin: 'jiāxiāng', wordClass: ['N'], meaningVi: 'quê hương', meaningEn: 'hometown, native place', examples: [{ traditional: '她們把家鄉的菜和語言帶了進來。', simplified: '她们把家乡的菜和语言带了进来。', vietnamese: 'Họ mang cả món ăn và ngôn ngữ quê hương vào.' }] },
    { id: 'L11-022', lessonId: 'L11', order: 22, group: 'vocab1', traditional: '訪問', simplified: '访问', pinyin: 'fǎngwèn', wordClass: ['V'], meaningVi: 'phỏng vấn; thăm hỏi', meaningEn: 'to interview; to visit', examples: [{ traditional: '他們訪問了幾百個家庭。', simplified: '他们访问了几百个家庭。', vietnamese: 'Họ phỏng vấn mấy trăm gia đình.' }] },
    { id: 'L11-023', lessonId: 'L11', order: 23, group: 'vocab1', traditional: '移民', simplified: '移民', pinyin: 'yímín', wordClass: ['N', 'Vi'], meaningVi: 'di dân, người nhập cư; đi nhập cư', meaningEn: 'immigrant; to immigrate', tags: ['van-hoa'], examples: [{ traditional: '他們把每個人的移民故事都記下來。', simplified: '他们把每个人的移民故事都记下来。', vietnamese: 'Họ ghi lại câu chuyện di dân của từng người.' }] },
    { id: 'L11-024', lessonId: 'L11', order: 24, group: 'vocab1', traditional: '普通', simplified: '普通', pinyin: 'pǔtōng', wordClass: ['Vs'], meaningVi: 'bình thường, phổ thông', meaningEn: 'ordinary, common', examples: [{ traditional: '歷史說到底就是很多普通人的故事。', simplified: '历史说到底就是很多普通人的故事。', vietnamese: 'Lịch sử nói cho cùng chính là câu chuyện của rất nhiều người bình thường.' }] },
    { id: 'L11-025', lessonId: 'L11', order: 25, group: 'vocab1', traditional: '課本', simplified: '课本', pinyin: 'kèběn', wordClass: ['N'], meaningVi: 'sách giáo khoa', meaningEn: 'textbook', tags: ['giao-duc'], examples: [{ traditional: '這種博物館比課本上的大歷史更讓人記得住。', simplified: '这种博物馆比课本上的大历史更让人记得住。', vietnamese: 'Loại bảo tàng này dễ nhớ hơn lịch sử lớn trong sách giáo khoa.' }] },
    { id: 'L11-026', lessonId: 'L11', order: 26, group: 'vocab1', traditional: '來源', simplified: '来源', pinyin: 'láiyuán', wordClass: ['N'], meaningVi: 'nguồn gốc, xuất xứ', meaningEn: 'source, origin', examples: [{ traditional: '正因為有這麼多來源，台灣文化才這麼多樣。', simplified: '正因为有这么多来源，台湾文化才这么多样。', vietnamese: 'Chính vì có nhiều nguồn gốc như vậy, văn hóa Đài Loan mới đa dạng.' }] },

    { id: 'L11-027', lessonId: 'L11', order: 1, group: 'vocab2', traditional: '島嶼', simplified: '岛屿', pinyin: 'dǎoyǔ', wordClass: ['N'], meaningVi: 'hòn đảo, đảo', meaningEn: 'island', examples: [{ traditional: '台灣是一座移民的島嶼。', simplified: '台湾是一座移民的岛屿。', vietnamese: 'Đài Loan là một hòn đảo của người di dân.' }] },
    { id: 'L11-028', lessonId: 'L11', order: 2, group: 'vocab2', traditional: '統治', simplified: '统治', pinyin: 'tǒngzhì', wordClass: ['V', 'N'], meaningVi: 'thống trị, cai trị; sự cai trị', meaningEn: 'to rule, to govern; rule', tags: ['lich-su'], examples: [{ traditional: '台灣曾經被不同的政權統治過。', simplified: '台湾曾经被不同的政权统治过。', vietnamese: 'Đài Loan từng bị các chính quyền khác nhau cai trị.' }] },
    { id: 'L11-029', lessonId: 'L11', order: 3, group: 'vocab2', traditional: '政權', simplified: '政权', pinyin: 'zhèngquán', wordClass: ['N'], meaningVi: 'chính quyền, quyền lực nhà nước', meaningEn: 'regime, political power', tags: ['lich-su'], examples: [{ traditional: '不同的政權留下了不同的建築和制度。', simplified: '不同的政权留下了不同的建筑和制度。', vietnamese: 'Các chính quyền khác nhau để lại những công trình và chế độ khác nhau.' }] },
    { id: 'L11-030', lessonId: 'L11', order: 4, group: 'vocab2', traditional: '融合', simplified: '融合', pinyin: 'rónghé', wordClass: ['V'], meaningVi: 'hòa hợp, dung hợp', meaningEn: 'to blend, to merge', examples: [{ traditional: '這些不同的文化慢慢融合在一起。', simplified: '这些不同的文化慢慢融合在一起。', vietnamese: 'Những nền văn hóa khác nhau này dần hòa hợp với nhau.' }] },
    { id: 'L11-031', lessonId: 'L11', order: 5, group: 'vocab2', traditional: '文化', simplified: '文化', pinyin: 'wénhuà', wordClass: ['N'], meaningVi: 'văn hóa', meaningEn: 'culture', tags: ['van-hoa'], examples: [{ traditional: '多元的文化是台灣的特色。', simplified: '多元的文化是台湾的特色。', vietnamese: 'Văn hóa đa nguyên là nét đặc sắc của Đài Loan.' }] },
    { id: 'L11-032', lessonId: 'L11', order: 6, group: 'vocab2', traditional: '保存', simplified: '保存', pinyin: 'bǎocún', wordClass: ['V'], meaningVi: 'bảo tồn, lưu giữ', meaningEn: 'to preserve, to keep', examples: [{ traditional: '博物館想把長輩的記憶保存下來。', simplified: '博物馆想把长辈的记忆保存下来。', vietnamese: 'Bảo tàng muốn lưu giữ lại ký ức của các cụ.' }] },
    { id: 'L11-033', lessonId: 'L11', order: 7, group: 'vocab2', traditional: '語言', simplified: '语言', pinyin: 'yǔyán', wordClass: ['N'], meaningVi: 'ngôn ngữ', meaningEn: 'language', tags: ['van-hoa'], examples: [{ traditional: '在台灣可以聽到好幾種語言。', simplified: '在台湾可以听到好几种语言。', vietnamese: 'Ở Đài Loan có thể nghe thấy mấy loại ngôn ngữ.' }] },
    { id: 'L11-034', lessonId: 'L11', order: 8, group: 'vocab2', traditional: '認同', simplified: '认同', pinyin: 'rèntóng', wordClass: ['N', 'V'], meaningVi: 'bản sắc, sự đồng nhất (về danh tính); công nhận, đồng tình', meaningEn: 'identity; identification; to identify with', examples: [{ traditional: '大部分的人都對這塊土地有一種認同。', simplified: '大部分的人都对这块土地有一种认同。', vietnamese: 'Phần lớn mọi người đều có một sự gắn bó với mảnh đất này.' }] },
    { id: 'L11-035', lessonId: 'L11', order: 9, group: 'vocab2', traditional: '後代', simplified: '后代', pinyin: 'hòudài', wordClass: ['N'], meaningVi: 'hậu duệ, đời sau', meaningEn: 'descendants, later generations', examples: [{ traditional: '這些移民的後代，現在都是台灣人。', simplified: '这些移民的后代，现在都是台湾人。', vietnamese: 'Hậu duệ của những người di dân này, giờ đều là người Đài Loan.' }] },
    { id: 'L11-036', lessonId: 'L11', order: 10, group: 'vocab2', traditional: '通婚', simplified: '通婚', pinyin: 'tōnghūn', wordClass: ['Vi'], meaningVi: 'thông hôn, kết hôn giữa các nhóm khác nhau', meaningEn: 'to intermarry', examples: [{ traditional: '長時間的相處和通婚讓族群的界線越來越淡。', simplified: '长时间的相处和通婚让族群的界线越来越淡。', vietnamese: 'Việc chung sống lâu dài và thông hôn khiến ranh giới giữa các tộc người ngày càng mờ.' }] },
    { id: 'L11-037', lessonId: 'L11', order: 11, group: 'vocab2', traditional: '差異', simplified: '差异', pinyin: 'chāyì', wordClass: ['N'], meaningVi: 'sự khác biệt', meaningEn: 'difference, disparity', examples: [{ traditional: '不同族群的習慣有很大的差異。', simplified: '不同族群的习惯有很大的差异。', vietnamese: 'Thói quen của các tộc người khác nhau có sự khác biệt lớn.' }] },
    { id: 'L11-038', lessonId: 'L11', order: 12, group: 'vocab2', traditional: '包容', simplified: '包容', pinyin: 'bāoróng', wordClass: ['V'], meaningVi: 'bao dung, khoan dung', meaningEn: 'to be tolerant of, to embrace', examples: [{ traditional: '學會用包容的態度看待彼此的不同。', simplified: '学会用包容的态度看待彼此的不同。', vietnamese: 'Học được cách nhìn nhận sự khác biệt của nhau bằng thái độ bao dung.' }] },
    { id: 'L11-039', lessonId: 'L11', order: 13, group: 'vocab2', traditional: '貢獻', simplified: '贡献', pinyin: 'gòngxiàn', wordClass: ['N', 'V'], meaningVi: 'cống hiến, đóng góp', meaningEn: 'contribution; to contribute', examples: [{ traditional: '每一個族群都對台灣有貢獻。', simplified: '每一个族群都对台湾有贡献。', vietnamese: 'Mỗi tộc người đều có đóng góp cho Đài Loan.' }] },
    { id: 'L11-040', lessonId: 'L11', order: 14, group: 'vocab2', traditional: '身分', simplified: '身分', pinyin: 'shēnfèn', wordClass: ['N'], meaningVi: 'thân phận, danh tính', meaningEn: 'identity, status', examples: [{ traditional: '很多人同時有好幾種文化的身分。', simplified: '很多人同时有好几种文化的身分。', vietnamese: 'Nhiều người cùng lúc mang danh tính của mấy nền văn hóa.' }] },
    { id: 'L11-041', lessonId: 'L11', order: 15, group: 'vocab2', traditional: '歸屬感', simplified: '归属感', pinyin: 'guīshǔgǎn', wordClass: ['N'], meaningVi: 'cảm giác thuộc về', meaningEn: 'a sense of belonging', examples: [{ traditional: '在同一塊土地上生活久了，就有了歸屬感。', simplified: '在同一块土地上生活久了，就有了归属感。', vietnamese: 'Sống lâu trên cùng một mảnh đất thì có cảm giác thuộc về.' }] },
    { id: 'L11-042', lessonId: 'L11', order: 16, group: 'vocab2', traditional: '背景', simplified: '背景', pinyin: 'bèijǐng', wordClass: ['N'], meaningVi: 'bối cảnh, xuất thân, hoàn cảnh', meaningEn: 'background', examples: [{ traditional: '這個社區的人來自各種不同的背景。', simplified: '这个社区的人来自各种不同的背景。', vietnamese: 'Người trong khu này đến từ đủ loại xuất thân khác nhau.' }] },
    { id: 'L11-043', lessonId: 'L11', order: 17, group: 'vocab2', traditional: '開墾', simplified: '开垦', pinyin: 'kāikěn', wordClass: ['V'], meaningVi: 'khai khẩn, khai hoang', meaningEn: 'to open up (land) for cultivation', tags: ['lich-su'], examples: [{ traditional: '很多地名是以前開墾的時候留下來的。', simplified: '很多地名是以前开垦的时候留下来的。', vietnamese: 'Nhiều địa danh là do thời khai khẩn trước kia để lại.' }] },
    { id: 'L11-044', lessonId: 'L11', order: 18, group: 'vocab2', traditional: '遷移', simplified: '迁移', pinyin: 'qiānyí', wordClass: ['V'], meaningVi: 'di chuyển, dời đi, di cư', meaningEn: 'to migrate, to move', examples: [{ traditional: '一批又一批的人從不同的地方遷移過來。', simplified: '一批又一批的人从不同的地方迁移过来。', vietnamese: 'Hết đợt người này đến đợt người khác di cư từ các nơi khác nhau sang.' }] },
    { id: 'L11-045', lessonId: 'L11', order: 19, group: 'vocab2', traditional: '多元', simplified: '多元', pinyin: 'duōyuán', wordClass: ['Vs'], meaningVi: 'đa nguyên, đa dạng (nhiều thành phần)', meaningEn: 'pluralistic, diverse', examples: [{ traditional: '這些差異融合成今天多元的台灣文化。', simplified: '这些差异融合成今天多元的台湾文化。', vietnamese: 'Những khác biệt đó hòa hợp thành văn hóa Đài Loan đa nguyên ngày nay.' }] }
  ],

  grammar: [
    {
      id: 'L11-G1', lessonId: 'L11', order: 1, pattern: '原來…',
      functionVi: '"原來 + sự thật" dùng khi người nói phát hiện ra một sự thật mà trước đây không biết hoặc hiểu sai (bừng tỉnh, vỡ lẽ). Cũng có nghĩa "vốn dĩ, ban đầu" (chỉ trạng thái trước đây).',
      functionEn: '"原來 + fact" is used when the speaker realizes something previously unknown or misunderstood (a moment of realization). It also means "originally" (a former state).',
      examples: [
        { traditional: '原來我一直以為大家都說一樣的話，來了以後才知道有很多種語言。', simplified: '原来我一直以为大家都说一样的话，来了以后才知道有很多种语言。', english: "I'd always thought everyone spoke the same language; after coming here I realized there are many.", vietnamese: 'Hóa ra tôi cứ tưởng ai cũng nói cùng một thứ tiếng, đến rồi mới biết có nhiều ngôn ngữ.' },
        { traditional: '我還在找鑰匙，原來一直在我口袋裡。', simplified: '我还在找钥匙，原来一直在我口袋里。', english: 'I was looking for my keys, and it turns out they were in my pocket the whole time.', vietnamese: 'Tôi đang tìm chìa khóa, hóa ra nó ở trong túi tôi suốt.' },
        { traditional: '難怪他這麼熟悉這裡，原來他小時候住過。', simplified: '难怪他这么熟悉这里，原来他小时候住过。', english: 'No wonder he knows this place so well—turns out he lived here as a child.', vietnamese: 'Thảo nào anh ấy thuộc chỗ này thế, hóa ra hồi nhỏ từng sống ở đây.' },
        { traditional: '「打狗」原來是台語的發音，後來才改叫高雄。', simplified: '「打狗」原来是台语的发音，后来才改叫高雄。', english: '"Dagou" was originally a Taiwanese pronunciation; it was later renamed Kaohsiung.', vietnamese: '"Đả Cẩu" vốn là cách phát âm tiếng Đài, sau này mới đổi gọi là Cao Hùng.' },
        { traditional: '我以為他在生氣，原來他只是累了。', simplified: '我以为他在生气，原来他只是累了。', english: 'I thought he was angry; it turns out he was just tired.', vietnamese: 'Tôi tưởng anh ấy đang giận, hóa ra chỉ là mệt.' }
      ],
      usageNotesVi: '"原來" ở nghĩa "vỡ lẽ" thường đi với "才知道 / 難怪 / 以為". Ở nghĩa "ban đầu, vốn dĩ" (原來的計畫 = kế hoạch ban đầu) thì trung tính, chỉ trạng thái quá khứ. Phân biệt qua ngữ cảnh.',
      exercises: [
        { id: 'L11-G1-EX1', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼突然懂這麼多台灣歷史？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我上個月去了地方博物館，原來我以前知道的都太表面了。'] }], targetPattern: 'L11-G1' },
        { id: 'L11-G1-EX2', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這條路我走過好幾次，今天怎麼覺得不一樣？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['原來旁邊的舊房子拆掉了，難怪你覺得怪。'] }], targetPattern: 'L11-G1' },
        { id: 'L11-G1-EX3', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他中文說得跟本地人一樣。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['原來他媽媽是台灣人，他從小就會說。'] }], targetPattern: 'L11-G1' },
        { id: 'L11-G1-EX4', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這道菜的味道好特別。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['原來是新住民阿姨用她家鄉的做法煮的。'] }], targetPattern: 'L11-G1' },
        { id: 'L11-G1-EX5', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你昨天怎麼沒接電話？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不好意思，原來我手機一直開靜音。'] }], targetPattern: 'L11-G1' }
      ]
    },
    {
      id: 'L11-G2', lessonId: 'L11', order: 2, pattern: '…之一',
      functionVi: '"A 是 …之一" nghĩa là A là một trong số (một tập hợp). "…之一" đứng cuối cụm danh từ, cụm phía trước thường là "N 中 / 裡" hoặc "最… 的 N".',
      functionEn: '"A 是 …之一" means A is one of (a set). "…之一" comes at the end of the noun phrase; the phrase before is usually "N 中 / 裡" or "最… 的 N".',
      examples: [
        { traditional: '這些新的故事，也是台灣歷史的來源之一。', simplified: '这些新的故事，也是台湾历史的来源之一。', english: "These new stories are also one of the sources of Taiwan's history.", vietnamese: 'Những câu chuyện mới này cũng là một trong những nguồn cội của lịch sử Đài Loan.' },
        { traditional: '客家人是台灣最主要的族群之一。', simplified: '客家人是台湾最主要的族群之一。', english: "Hakka people are one of Taiwan's major ethnic groups.", vietnamese: 'Người Khách Gia là một trong những tộc người chủ yếu ở Đài Loan.' },
        { traditional: '這座廟是全台灣最老的廟宇之一。', simplified: '这座庙是全台湾最老的庙宇之一。', english: 'This temple is one of the oldest in all of Taiwan.', vietnamese: 'Ngôi miếu này là một trong những ngôi miếu cổ nhất toàn Đài Loan.' },
        { traditional: '語言的多樣，是這個島最迷人的特色之一。', simplified: '语言的多样，是这个岛最迷人的特色之一。', english: "Linguistic diversity is one of the island's most charming features.", vietnamese: 'Sự đa dạng ngôn ngữ là một trong những nét quyến rũ nhất của hòn đảo này.' },
        { traditional: '他是這次受訪的幾百個家庭之一。', simplified: '他是这次受访的几百个家庭之一。', english: 'He is one of the several hundred families interviewed.', vietnamese: 'Anh ấy là một trong mấy trăm gia đình được phỏng vấn lần này.' }
      ],
      usageNotesVi: '"…之一" hàm ý còn có những cái khác cùng loại; do đó danh từ trung tâm phải là số nhiều hoặc tập hợp. Không nói "唯一的…之一". Có thể nói "原因之一" (một trong những lý do), "方法之一".',
      exercises: [
        { id: 'L11-G2-EX1', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你為什麼喜歡這個城市？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['食物多樣是原因之一，人也很友善。'] }], targetPattern: 'L11-G2' },
        { id: 'L11-G2-EX2', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這位作家有名嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['他是台灣最重要的作家之一，很多課本都選過他的文章。'] }], targetPattern: 'L11-G2' },
        { id: 'L11-G2-EX3', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個節日只有這裡在過嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不是，它是華人世界最重要的節日之一。'] }], targetPattern: 'L11-G2' },
        { id: 'L11-G2-EX4', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你參加過那個訪問計畫？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對，我是他們訪問的移民家庭之一。'] }], targetPattern: 'L11-G2' },
        { id: 'L11-G2-EX5', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：學中文最難的是什麼？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['聲調大概是最大的困難之一。'] }], targetPattern: 'L11-G2' }
      ]
    },
    {
      id: 'L11-G3', lessonId: 'L11', order: 3, pattern: '由…組成 / 由…（而）來',
      functionVi: '"A 由 B 組成" nghĩa là A được tạo thành từ B (các thành phần). "A 由 B 而來" nghĩa là A bắt nguồn từ B. "由" ở đây gần với "從 / 被".',
      functionEn: '"A 由 B 組成" means A is made up of B (components). "A 由 B 而來" means A originates from B. Here "由" is close to "從 / 被".',
      examples: [
        { traditional: '台灣的居民由很多不同的族群組成。', simplified: '台湾的居民由很多不同的族群组成。', english: "Taiwan's population is made up of many different ethnic groups.", vietnamese: 'Cư dân Đài Loan do nhiều tộc người khác nhau tạo thành.' },
        { traditional: '這個地名由原住民語的發音而來。', simplified: '这个地名由原住民语的发音而来。', english: 'This place name comes from an Aboriginal-language pronunciation.', vietnamese: 'Địa danh này bắt nguồn từ cách phát âm của tiếng thổ dân.' },
        { traditional: '這頓飯由三道台灣菜和一道越南菜組成。', simplified: '这顿饭由三道台湾菜和一道越南菜组成。', english: 'This meal consists of three Taiwanese dishes and one Vietnamese dish.', vietnamese: 'Bữa cơm này gồm ba món Đài Loan và một món Việt Nam.' },
        { traditional: '展覽由幾百個家庭的訪問影片組成。', simplified: '展览由几百个家庭的访问影片组成。', english: 'The exhibition is made up of interview videos from several hundred families.', vietnamese: 'Triển lãm do video phỏng vấn của mấy trăm gia đình tạo thành.' },
        { traditional: '「台灣人」的認同，是由許多共同的記憶慢慢組成的。', simplified: '「台湾人」的认同，是由许多共同的记忆慢慢组成的。', english: 'The Taiwanese identity was gradually formed from many shared memories.', vietnamese: 'Bản sắc "người Đài Loan" dần được tạo thành từ nhiều ký ức chung.' }
      ],
      usageNotesVi: '"由…組成" trang trọng, thường dùng trong văn viết hoặc thuyết minh. "由 A 而來" chỉ nguồn gốc (= 從 A 來的). "由" cũng dùng chỉ người phụ trách: "這件事由我負責".',
      exercises: [
        { id: 'L11-G3-EX1', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個委員會有哪些人？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['它由老師、家長和學生代表組成。'] }], targetPattern: 'L11-G3' },
        { id: 'L11-G3-EX2', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個字怎麼寫？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這個字由「木」和「子」兩個部分組成。'] }], targetPattern: 'L11-G3' },
        { id: 'L11-G3-EX3', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這道湯裡有什麼？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['主要由排骨、白菜和一點薑組成。'] }], targetPattern: 'L11-G3' },
        { id: 'L11-G3-EX4', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：「艋舺」這個名字是怎麼來的？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['據說是由原住民語「獨木舟」的發音而來的。'] }], targetPattern: 'L11-G3' },
        { id: 'L11-G3-EX5', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你們的報告怎麼分工？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['資料的部分由我負責，上台報告由他負責。'] }], targetPattern: 'L11-G3' }
      ]
    },
    {
      id: 'L11-G4', lessonId: 'L11', order: 4, pattern: '至今…',
      functionVi: '"至今" nghĩa là cho đến nay, đến tận bây giờ. Nhấn mạnh một tình trạng hoặc hành động kéo dài từ quá khứ đến hiện tại vẫn còn.',
      functionEn: '"至今" means up to now, until today. It stresses that a state or action from the past continues to the present.',
      examples: [
        { traditional: '那時候蓋的建築，很多至今還在用。', simplified: '那时候盖的建筑，很多至今还在用。', english: 'Many buildings built back then are still in use today.', vietnamese: 'Những công trình xây thời đó, nhiều cái đến nay vẫn còn dùng.' },
        { traditional: '這個習俗從清朝流傳至今。', simplified: '这个习俗从清朝流传至今。', english: 'This custom has been passed down from the Qing dynasty to the present.', vietnamese: 'Phong tục này lưu truyền từ thời Thanh đến nay.' },
        { traditional: '他二十年前搬到這裡，至今沒再離開過。', simplified: '他二十年前搬到这里，至今没再离开过。', english: "He moved here twenty years ago and hasn't left since.", vietnamese: 'Anh ấy chuyển đến đây hai mươi năm trước, đến nay chưa từng rời đi.' },
        { traditional: '這件事的真相至今還沒有人知道。', simplified: '这件事的真相至今还没有人知道。', english: 'The truth of this matter is still unknown to this day.', vietnamese: 'Sự thật của chuyện này đến nay vẫn chưa ai biết.' },
        { traditional: '這座廟建於一七四〇年，至今已經快三百年了。', simplified: '这座庙建于一七四〇年，至今已经快三百年了。', english: "This temple was built in 1740; it's now almost 300 years old.", vietnamese: 'Ngôi miếu này xây năm 1740, đến nay đã gần ba trăm năm.' }
      ],
      usageNotesVi: '"至今" là văn viết hơn "到現在". Thường đi với "還 / 仍 / 仍然" (vẫn) hoặc "已經". Không dùng cho tương lai. Cụm "至今為止" = "cho đến nay" (nhấn mạnh mốc kết thúc).',
      exercises: [
        { id: 'L11-G4-EX1', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個傳統還有人遵守嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['有，這個做法從我阿公那一代延續至今。'] }], targetPattern: 'L11-G4' },
        { id: 'L11-G4-EX2', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你們還有聯絡嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['有，我們從高中認識，至今還是好朋友。'] }], targetPattern: 'L11-G4' },
        { id: 'L11-G4-EX3', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個問題解決了嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['沒有，至今還沒有一個大家都能接受的答案。'] }], targetPattern: 'L11-G4' },
        { id: 'L11-G4-EX4', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：那家老店還開著嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['開著，從日本時代開到現在，至今已經傳了四代。'] }], targetPattern: 'L11-G4' },
        { id: 'L11-G4-EX5', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你搬走以後有回去過嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['說來慚愧，我離開十年了，至今一次都沒回去過。'] }], targetPattern: 'L11-G4' }
      ]
    },
    {
      id: 'L11-G5', lessonId: 'L11', order: 5, pattern: '無論是…還是…，都…',
      functionVi: '"無論是 A 還是 B，都…" nêu bất kể là A hay là B (liệt kê các khả năng), kết quả C không đổi. Tương tự "不管…都" (Bài 1) nhưng thường dùng để liệt kê hai hoặc nhiều lựa chọn cụ thể.',
      functionEn: '"無論是 A 還是 B，都…" means whether A or B (listing possibilities), the result C is unchanged. Similar to "不管…都" (Lesson 1) but usually lists two or more specific options.',
      examples: [
        { traditional: '無論是早來的還是晚到的，大家都在這塊土地上生活。', simplified: '无论是早来的还是晚到的，大家都在这块土地上生活。', english: 'Whether they came early or late, everyone lives on this land.', vietnamese: 'Bất kể là người đến sớm hay đến muộn, mọi người đều sống trên mảnh đất này.' },
        { traditional: '無論是台語、客家話還是原住民語，都是台灣的語言。', simplified: '无论是台语、客家话还是原住民语，都是台湾的语言。', english: "Whether it's Taiwanese, Hakka, or an Aboriginal language, they're all languages of Taiwan.", vietnamese: 'Bất kể là tiếng Đài, tiếng Khách Gia hay tiếng thổ dân, đều là ngôn ngữ của Đài Loan.' },
        { traditional: '無論是大人還是小孩，看了那部影片都很感動。', simplified: '无论是大人还是小孩，看了那部影片都很感动。', english: 'Whether adults or children, everyone was moved by that film.', vietnamese: 'Bất kể người lớn hay trẻ con, xem bộ phim đó đều rất cảm động.' },
        { traditional: '無論是搭高鐵還是開車，到台南都要兩個小時左右。', simplified: '无论是搭高铁还是开车，到台南都要两个小时左右。', english: 'Whether by high-speed rail or by car, it takes about two hours to Tainan.', vietnamese: 'Bất kể đi tàu cao tốc hay lái xe, đến Đài Nam đều mất khoảng hai tiếng.' },
        { traditional: '這件事無論是誰做的，都應該負責。', simplified: '这件事无论是谁做的，都应该负责。', english: 'Whoever did this should take responsibility.', vietnamese: 'Chuyện này bất kể ai làm cũng phải chịu trách nhiệm.' }
      ],
      usageNotesVi: '"無論" trang trọng hơn "不管". Sau "無論" thường có "是…還是…", "…不…", hoặc từ để hỏi (誰 / 什麼 / 多). Vế sau bắt buộc có "都 / 也". Không đặt câu hỏi "嗎" sau "無論".',
      exercises: [
        { id: 'L11-G5-EX1', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個博物館適合什麼人去？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['無論是本地人還是觀光客，都可以在裡面找到有意思的東西。'] }], targetPattern: 'L11-G5' },
        { id: 'L11-G5-EX2', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：報名要收費嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['無論是學生還是社會人士，都可以免費參加。'] }], targetPattern: 'L11-G5' },
        { id: 'L11-G5-EX3', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這種節日只有南部在過嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不是，無論是北部還是南部，都有人這樣過。'] }], targetPattern: 'L11-G5' },
        { id: 'L11-G5-EX4', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他到底喜歡吃什麼？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['他不挑，無論是台灣菜還是東南亞菜，都吃得很開心。'] }], targetPattern: 'L11-G5' },
        { id: 'L11-G5-EX5', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：如果颱風來，活動還辦嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['無論是晴天還是下雨，室內的活動都照常舉行。'] }], targetPattern: 'L11-G5' }
      ]
    },
    {
      id: 'L11-G6', lessonId: 'L11', order: 6, pattern: '正因為…，（所以 / 才）…',
      functionVi: '"正因為 A，（所以 / 才）B" nhấn mạnh A chính là nguyên nhân của B (không phải nguyên nhân khác). "正" làm cho lý do nổi bật hơn "因為" thường; vế sau hay dùng "才".',
      functionEn: '"正因為 A，（所以 / 才）B" emphasizes that A is precisely the reason for B (not some other reason). "正" makes the reason stand out; the second clause often uses "才".',
      examples: [
        { traditional: '正因為有這麼多來源，台灣的食物、廟宇、節日才這麼多樣。', simplified: '正因为有这么多来源，台湾的食物、庙宇、节日才这么多样。', english: "Precisely because there are so many sources, Taiwan's food, temples, and festivals are so diverse.", vietnamese: 'Chính vì có nhiều nguồn gốc như vậy, ẩm thực, đền miếu, lễ hội của Đài Loan mới đa dạng đến thế.' },
        { traditional: '正因為他自己吃過苦，所以特別願意幫助新來的人。', simplified: '正因为他自己吃过苦，所以特别愿意帮助新来的人。', english: "Precisely because he's been through hardship himself, he's especially willing to help newcomers.", vietnamese: 'Chính vì bản thân từng nếm khổ, anh ấy đặc biệt sẵn lòng giúp người mới đến.' },
        { traditional: '正因為時間不多，我們更應該好好利用。', simplified: '正因为时间不多，我们更应该好好利用。', english: 'Precisely because time is short, we should make good use of it.', vietnamese: 'Chính vì thời gian không nhiều, chúng ta càng phải tận dụng cho tốt.' },
        { traditional: '正因為這段歷史很複雜，才更需要好好認識。', simplified: '正因为这段历史很复杂，才更需要好好认识。', english: 'Precisely because this history is complex, it needs to be understood carefully.', vietnamese: 'Chính vì đoạn lịch sử này phức tạp, mới càng cần tìm hiểu kỹ.' },
        { traditional: '正因為大家背景不同，這個社區才這麼有意思。', simplified: '正因为大家背景不同，这个社区才这么有意思。', english: "Precisely because everyone has a different background, this community is so interesting.", vietnamese: 'Chính vì mọi người xuất thân khác nhau, cộng đồng này mới thú vị như vậy.' }
      ],
      usageNotesVi: '"正因為…才…" là kết cấu rất thường gặp (vế sau dùng "才" để nhấn mạnh). "正" ở đây = "chính, đúng là". Khác "因為" đơn thuần, "正因為" ngầm bác bỏ các lý do khác.',
      exercises: [
        { id: 'L11-G6-EX1', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼對這個題目這麼有興趣？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['正因為以前都沒人好好跟我講過，我才更想弄清楚。'] }], targetPattern: 'L11-G6' },
        { id: 'L11-G6-EX2', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這麼熱的天，你還去做志工？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['正因為天氣不好，去的人少，他們才更需要人手。'] }], targetPattern: 'L11-G6' },
        { id: 'L11-G6-EX3', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他經驗這麼少，你放心讓他做？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['正因為他還年輕，才要多給他機會練習。'] }], targetPattern: 'L11-G6' },
        { id: 'L11-G6-EX4', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這條老街為什麼要保留？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['正因為這種房子越來越少，留下來才有意義。'] }], targetPattern: 'L11-G6' },
        { id: 'L11-G6-EX5', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你們為什麼選在鄉下開店？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['正因為鄉下沒有這樣的店，我們才想試試看。'] }], targetPattern: 'L11-G6' }
      ]
    },
    {
      id: 'L11-G7', lessonId: 'L11', order: 7, pattern: '據說… / 據…（所）說',
      functionVi: '"據說 + tin tức" nghĩa là nghe nói, theo lời đồn hoặc tương truyền (người nói không tự mình xác nhận). "據 + nguồn + 說" nêu rõ nguồn tin: "據他說" (theo lời anh ấy).',
      functionEn: '"據說 + information" means it is said, according to hearsay or tradition (the speaker doesn\'t personally confirm it). "據 + source + 說" names the source: "據他說" (according to him).',
      examples: [
        { traditional: '據說「打狗」就是後來的高雄。', simplified: '据说「打狗」就是后来的高雄。', english: 'It\'s said that "Dagou" is what later became Kaohsiung.', vietnamese: 'Nghe nói "Đả Cẩu" chính là Cao Hùng sau này.' },
        { traditional: '據說這座廟已經有兩百多年的歷史。', simplified: '据说这座庙已经有两百多年的历史。', english: 'This temple is said to be over two hundred years old.', vietnamese: 'Nghe nói ngôi miếu này đã có hơn hai trăm năm lịch sử.' },
        { traditional: '據當地人說，這口井的水從來沒乾過。', simplified: '据当地人说，这口井的水从来没干过。', english: 'According to locals, this well has never run dry.', vietnamese: 'Theo lời người dân địa phương, giếng nước này chưa bao giờ cạn.' },
        { traditional: '據新聞說，那條老街下個月要整修。', simplified: '据新闻说，那条老街下个月要整修。', english: 'According to the news, that old street will be renovated next month.', vietnamese: 'Theo tin tức, con phố cổ đó tháng sau sẽ tu sửa.' },
        { traditional: '據說他們家三代都是廚師。', simplified: '据说他们家三代都是厨师。', english: "It's said that three generations of their family have been chefs.", vietnamese: 'Nghe nói nhà họ ba đời đều làm đầu bếp.' }
      ],
      usageNotesVi: '"據說" thường đứng đầu câu, không có chủ ngữ. Muốn nêu nguồn thì dùng "據 + N + 說" hoặc "聽 + N + 說". "據說" khách quan hơn "聽說" một chút và hay dùng cho truyền thuyết, lịch sử.',
      exercises: [
        { id: 'L11-G7-EX1', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個地名很奇怪，是怎麼來的？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['據說是以前這裡有很多鹿，才叫「鹿港」。'] }], targetPattern: 'L11-G7' },
        { id: 'L11-G7-EX2', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：那家餐廳真的那麼好吃嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['據說老闆的手藝是跟他阿嬤學的，很多人專程去吃。'] }], targetPattern: 'L11-G7' },
        { id: 'L11-G7-EX3', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這棟房子看起來很有年紀。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['據住在這裡的老先生說，它是日本時代蓋的。'] }], targetPattern: 'L11-G7' },
        { id: 'L11-G7-EX4', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說今年報名的人特別多？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對，據主辦單位說，比去年多了一倍。'] }], targetPattern: 'L11-G7' },
        { id: 'L11-G7-EX5', lessonId: 'L11', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個傳說是真的嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['誰也不知道，據說是這樣，可是沒有文字記錄。'] }], targetPattern: 'L11-G7' }
      ]
    }
  ],

  workbookExercises: [
    {
      id: 'L11-WB-match-collocation', lessonId: 'L11', section: 'pairs', type: 'matching',
      prompt: 'Ghép danh từ với vị ngữ thường đi cùng (collocation).',
      pairs: [
        { left: '海', right: '渡 (vượt)' },
        { left: '記憶', right: '共同 (chung)' },
        { left: '文化', right: '保存 (bảo tồn)' },
        { left: '語言', right: '多元 (đa dạng)' },
        { left: '故事', right: '訪問 (phỏng vấn)' },
        { left: '土地', right: '開墾 (khai khẩn)' }
      ]
    },
    {
      id: 'L11-WB-match-response', lessonId: 'L11', section: 'pairs', type: 'matching',
      prompt: 'Nối mỗi tình huống (cột trái) với cách phản ứng phù hợp (cột phải).',
      pairs: [
        { left: '想了解一個地方的歷史', right: '去看地方的小型博物館' },
        { left: '聽到不熟悉的地名', right: '查查看它的發音來源' },
        { left: '家裡長輩說不同的語言', right: '把它當成一種文化資產' },
        { left: '社區裡有很多不同背景的人', right: '用包容的態度互相認識' },
        { left: '想保存老一輩的移民故事', right: '幫他們錄下口述訪問' },
        { left: '新住民媽媽帶來家鄉菜', right: '把它看成台灣飲食的一部分' }
      ]
    },

    { id: 'L11-WB-fw-1', lessonId: 'L11', section: 'fill-write', type: 'fill-blank', textWithBlanks: '一八九五年，台灣被___(gēràng)給日本，開始了五十年的日本___(shídài)。', blanks: [{ index: 0, acceptedAnswers: ['割讓'] }, { index: 1, acceptedAnswers: ['時代'] }] },
    { id: 'L11-WB-fw-2', lessonId: 'L11', section: 'fill-write', type: 'fill-blank', textWithBlanks: '台灣的___(jūmín)由很多不同的___(zúqún)組成，最早是___(yuánzhùmín)。', blanks: [{ index: 0, acceptedAnswers: ['居民'] }, { index: 1, acceptedAnswers: ['族群'] }, { index: 2, acceptedAnswers: ['原住民'] }] },
    { id: 'L11-WB-fw-3', lessonId: 'L11', section: 'fill-write', type: 'fill-blank', textWithBlanks: '後來有從福建、廣東___(dùhǎi)來的___(hànrén)。', blanks: [{ index: 0, acceptedAnswers: ['渡海'] }, { index: 1, acceptedAnswers: ['漢人'] }] },
    { id: 'L11-WB-fw-4', lessonId: 'L11', section: 'fill-write', type: 'fill-blank', textWithBlanks: '有人在家說___(táiyǔ)，有人說___(kèjiāhuà)，長輩之間還有人說日語。', blanks: [{ index: 0, acceptedAnswers: ['台語'] }, { index: 1, acceptedAnswers: ['客家話'] }] },
    { id: 'L11-WB-fw-5', lessonId: 'L11', section: 'fill-write', type: 'fill-blank', textWithBlanks: '大家在這塊___(tǔdì)上一起生活，慢慢有了___(gòngtóng)的___(jìyì)。', blanks: [{ index: 0, acceptedAnswers: ['土地'] }, { index: 1, acceptedAnswers: ['共同'] }, { index: 2, acceptedAnswers: ['記憶'] }] },
    { id: 'L11-WB-fw-6', lessonId: 'L11', section: 'fill-write', type: 'fill-blank', textWithBlanks: '這幾十年又多了___(xīnzhùmín)，他們把___(jiāxiāng)的菜和語言也帶了進來，讓台灣文化更___(duōyàng)。', blanks: [{ index: 0, acceptedAnswers: ['新住民'] }, { index: 1, acceptedAnswers: ['家鄉'] }, { index: 2, acceptedAnswers: ['多樣'] }] },

    {
      id: 'L11-WB-fb-1', lessonId: 'L11', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền từ thích hợp vào đoạn văn (mỗi từ chỉ dùng 1 lần).',
      wordBank: ['島嶼', '遷移', '融合', '差異', '認同', '包容'],
      textWithBlanks: '台灣是一個移民的1.___。幾百年來，一批又一批的人從不同的地方2.___過來：原住民、閩南人、客家人、外省人，還有近幾十年的新住民。這些族群的語言、習慣、信仰都有很大的3.___。可是經過長時間的相處和通婚，這些不同的文化慢慢4.___在一起，形成了現在多元的台灣。今天大部分的人，不管祖先來自哪裡，都對這塊土地有一種5.___。學會用6.___的態度看待彼此的不同，正是台灣故事最重要的一課。',
      blanks: [
        { index: 1, acceptedAnswers: ['島嶼'] },
        { index: 2, acceptedAnswers: ['遷移'] },
        { index: 3, acceptedAnswers: ['差異'] },
        { index: 4, acceptedAnswers: ['融合'] },
        { index: 5, acceptedAnswers: ['認同'] },
        { index: 6, acceptedAnswers: ['包容'] }
      ]
    },

    {
      id: 'L11-WB-read-a1', lessonId: 'L11', section: 'reading', type: 'multiple-choice',
      prompt: '羅珊蒂：為什麼台灣有些地方叫「XX 寮」、「XX 埔」，聽起來很特別？\n陳敏萱：那些大多是以前開墾的時候留下來的名字，「寮」是小房子，「埔」是平地。看地名就能猜到以前那裡發生過什麼。',
      question: '陳敏萱的意思是：',
      options: [{ id: 'a', text: '這些地名沒有什麼意思。' }, { id: 'b', text: '從地名可以看出過去的開墾歷史。' }, { id: 'c', text: '這些地名是最近才取的。' }],
      correctOptionId: 'b',
      explanationVi: '"那些大多是以前開墾的時候留下來的名字…看地名就能猜到以前那裡發生過什麼".'
    },
    {
      id: 'L11-WB-read-a2', lessonId: 'L11', section: 'reading', type: 'multiple-choice',
      prompt: '高橋：你阿嬤平常說台語，可是我聽她跟隔壁老先生講的又不太一樣。\n陳敏萱：對，她跟隔壁講的是日語。他們那一代小時候上的是日本學校。',
      question: '陳敏萱的阿嬤為什麼會說日語？',
      options: [{ id: 'a', text: '她去日本留學過。' }, { id: 'b', text: '她那一代小時候上日本學校。' }, { id: 'c', text: '她在跟日本客人做生意。' }],
      correctOptionId: 'b',
      explanationVi: '"他們那一代小時候上的是日本學校".'
    },
    {
      id: 'L11-WB-read-a3', lessonId: 'L11', section: 'reading', type: 'multiple-choice',
      prompt: '安同：博物館裡那些普通人的訪問，我覺得比課本好看。\n玉真：我也是。課本講的是大事件，可是這些影片講的是一個一個真實的人怎麼在這裡活下來。',
      question: '玉真為什麼喜歡那些訪問影片？',
      options: [{ id: 'a', text: '因為影片比較短。' }, { id: 'b', text: '因為影片講的是真實的個人故事，比課本的大事件更貼近人。' }, { id: 'c', text: '因為影片裡有明星。' }],
      correctOptionId: 'b',
      explanationVi: '"這些影片講的是一個一個真實的人怎麼在這裡活下來".'
    },

    {
      id: 'L11-WB-read-b1', lessonId: 'L11', section: 'reading', type: 'multiple-choice',
      prompt: '有人說，台灣是一座「移民之島」。從幾百年前到今天，一批又一批的人渡海來到這裡：最早的原住民、明清時期從福建和廣東來的漢人、一九四九年前後從中國各地來的「外省人」，還有近幾十年來自東南亞的新住民。這些族群帶來不同的語言、食物和信仰，一開始彼此並不熟悉，甚至有過衝突。可是經過長時間在同一塊土地上生活、工作、通婚，這些差異慢慢融合，形成了今天多元的台灣文化。走在街上，你可能同時聽到台語、客家話、原住民語和越南話。對現在大部分的人來說，不管祖先來自哪裡，這裡就是家。所謂「台灣故事」，其實就是這許多普通家庭的移民故事加起來的結果。',
      question: '「移民之島」是指台灣的居民主要來自不同的移民族群。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"一批又一批的人渡海來到這裡…這些族群".'
    },
    {
      id: 'L11-WB-read-b2', lessonId: 'L11', section: 'reading', type: 'multiple-choice',
      prompt: '有人說，台灣是一座「移民之島」。從幾百年前到今天，一批又一批的人渡海來到這裡：最早的原住民、明清時期從福建和廣東來的漢人、一九四九年前後從中國各地來的「外省人」，還有近幾十年來自東南亞的新住民。這些族群帶來不同的語言、食物和信仰，一開始彼此並不熟悉，甚至有過衝突。可是經過長時間在同一塊土地上生活、工作、通婚，這些差異慢慢融合，形成了今天多元的台灣文化。走在街上，你可能同時聽到台語、客家話、原住民語和越南話。對現在大部分的人來說，不管祖先來自哪裡，這裡就是家。所謂「台灣故事」，其實就是這許多普通家庭的移民故事加起來的結果。',
      question: '這些族群一開始就相處得很好，從來沒有過衝突。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"一開始彼此並不熟悉，甚至有過衝突".'
    },
    {
      id: 'L11-WB-read-b3', lessonId: 'L11', section: 'reading', type: 'multiple-choice',
      prompt: '有人說，台灣是一座「移民之島」。從幾百年前到今天，一批又一批的人渡海來到這裡：最早的原住民、明清時期從福建和廣東來的漢人、一九四九年前後從中國各地來的「外省人」，還有近幾十年來自東南亞的新住民。這些族群帶來不同的語言、食物和信仰，一開始彼此並不熟悉，甚至有過衝突。可是經過長時間在同一塊土地上生活、工作、通婚，這些差異慢慢融合，形成了今天多元的台灣文化。走在街上，你可能同時聽到台語、客家話、原住民語和越南話。對現在大部分的人來說，不管祖先來自哪裡，這裡就是家。所謂「台灣故事」，其實就是這許多普通家庭的移民故事加起來的結果。',
      question: '不同的文化是透過長時間的相處和通婚慢慢融合的。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"經過長時間在同一塊土地上生活、工作、通婚，這些差異慢慢融合".'
    },
    {
      id: 'L11-WB-read-b4', lessonId: 'L11', section: 'reading', type: 'multiple-choice',
      prompt: '有人說，台灣是一座「移民之島」。從幾百年前到今天，一批又一批的人渡海來到這裡：最早的原住民、明清時期從福建和廣東來的漢人、一九四九年前後從中國各地來的「外省人」，還有近幾十年來自東南亞的新住民。這些族群帶來不同的語言、食物和信仰，一開始彼此並不熟悉，甚至有過衝突。可是經過長時間在同一塊土地上生活、工作、通婚，這些差異慢慢融合，形成了今天多元的台灣文化。走在街上，你可能同時聽到台語、客家話、原住民語和越南話。對現在大部分的人來說，不管祖先來自哪裡，這裡就是家。所謂「台灣故事」，其實就是這許多普通家庭的移民故事加起來的結果。',
      question: '現在在台灣的街上只聽得到一種語言。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"你可能同時聽到台語、客家話、原住民語和越南話".'
    },
    {
      id: 'L11-WB-read-b5', lessonId: 'L11', section: 'reading', type: 'multiple-choice',
      prompt: '有人說，台灣是一座「移民之島」。從幾百年前到今天，一批又一批的人渡海來到這裡：最早的原住民、明清時期從福建和廣東來的漢人、一九四九年前後從中國各地來的「外省人」，還有近幾十年來自東南亞的新住民。這些族群帶來不同的語言、食物和信仰，一開始彼此並不熟悉，甚至有過衝突。可是經過長時間在同一塊土地上生活、工作、通婚，這些差異慢慢融合，形成了今天多元的台灣文化。走在街上，你可能同時聽到台語、客家話、原住民語和越南話。對現在大部分的人來說，不管祖先來自哪裡，這裡就是家。所謂「台灣故事」，其實就是這許多普通家庭的移民故事加起來的結果。',
      question: '作者認為「台灣故事」就是很多普通家庭移民故事的總和。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"所謂「台灣故事」，其實就是這許多普通家庭的移民故事加起來的結果".'
    },

    {
      id: 'L11-WB-read-c1', lessonId: 'L11', section: 'reading', type: 'multiple-choice',
      prompt: '【口述歷史工作坊】你家的長輩是從哪裡來的？他們年輕時經歷過什麼？本館邀請你帶著阿公阿嬤，一起來參加「家族故事」工作坊。我們會教你怎麼提問、怎麼錄音，把長輩的記憶好好保存下來。完成的故事，經過同意後，會成為本館「台灣故事」常設展的一部分。名額有限，需事先報名。',
      question: '這個工作坊主要要做什麼？',
      options: [{ id: 'a', text: '教大家畫自己的家族樹。' }, { id: 'b', text: '教大家訪問家中長輩、把他們的故事錄下來保存。' }, { id: 'c', text: '帶大家去長輩的家鄉旅行。' }],
      correctOptionId: 'b',
      explanationVi: '"教你怎麼提問、怎麼錄音，把長輩的記憶好好保存下來".'
    },
    {
      id: 'L11-WB-read-c2', lessonId: 'L11', section: 'reading', type: 'multiple-choice',
      prompt: '【口述歷史工作坊】你家的長輩是從哪裡來的？他們年輕時經歷過什麼？本館邀請你帶著阿公阿嬤，一起來參加「家族故事」工作坊。我們會教你怎麼提問、怎麼錄音，把長輩的記憶好好保存下來。完成的故事，經過同意後，會成為本館「台灣故事」常設展的一部分。名額有限，需事先報名。',
      question: '完成的故事之後可能會怎麼樣？',
      options: [{ id: 'a', text: '一定會出版成一本書。' }, { id: 'b', text: '經過同意後，成為博物館常設展的一部分。' }, { id: 'c', text: '只會留在自己家裡，不會給別人看。' }],
      correctOptionId: 'b',
      explanationVi: '"經過同意後，會成為本館「台灣故事」常設展的一部分".'
    },

    { id: 'L11-WB-dc-1', lessonId: 'L11', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L11-G1', turns: [{ speaker: 'A', text: '你怎麼突然那麼了解客家文化？', isBlank: false }, { speaker: 'B', text: '（原來）', isBlank: true }], sampleAnswer: '我最近才知道我外婆是客家人，原來我身上也有客家的背景。' },
    { id: 'L11-WB-dc-2', lessonId: 'L11', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L11-G3', turns: [{ speaker: 'A', text: '這個展覽的內容是什麼？', isBlank: false }, { speaker: 'B', text: '（由…組成）', isBlank: true }], sampleAnswer: '整個展覽由幾百個移民家庭的訪問影片組成。' },
    { id: 'L11-WB-dc-3', lessonId: 'L11', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L11-G4', turns: [{ speaker: 'A', text: '這種老房子還看得到嗎？', isBlank: false }, { speaker: 'B', text: '（至今）', isBlank: true }], sampleAnswer: '看得到，這一帶有幾棟從日本時代留到至今，還有人住。' },
    { id: 'L11-WB-dc-4', lessonId: 'L11', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L11-G5', turns: [{ speaker: 'A', text: '這個博物館適合帶小孩去嗎？', isBlank: false }, { speaker: 'B', text: '（無論是…還是…）', isBlank: true }], sampleAnswer: '適合，無論是大人還是小孩，都能在裡面找到有興趣的東西。' },
    { id: 'L11-WB-dc-5', lessonId: 'L11', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L11-G6', turns: [{ speaker: 'A', text: '這段歷史這麼複雜，一般人聽得懂嗎？', isBlank: false }, { speaker: 'B', text: '（正因為…）', isBlank: true }], sampleAnswer: '正因為複雜，才更需要用普通人的故事來講，大家才記得住。' },

    {
      id: 'L11-WB-comp-1', lessonId: 'L11', section: 'composition', type: 'composition',
      topicVi: 'Hãy giới thiệu nguồn gốc gia đình bạn (hoặc một gia đình bạn biết): tổ tiên đến từ đâu, đã trải qua những gì, và điều đó ảnh hưởng thế nào đến bạn hôm nay?',
      requiredWords: ['L11-004', 'L11-005', 'L11-007', 'L11-012', 'L11-013', 'L11-015', 'L11-021', 'L11-023'],
      requiredPatterns: ['L11-G1', 'L11-G3', 'L11-G4'],
      minLength: 200, maxLength: 250
    },
    {
      id: 'L11-WB-comp-2', lessonId: 'L11', section: 'composition', type: 'composition',
      topicVi: 'Đài Loan thường được gọi là "hòn đảo của người di dân" với văn hóa đa nguyên. Theo bạn, một xã hội nhiều nền văn hóa có những lợi ích và thách thức gì? Làm thế nào để các nhóm chung sống tốt?',
      requiredWords: ['L11-030', 'L11-031', 'L11-034', 'L11-037', 'L11-038', 'L11-039', 'L11-041', 'L11-045'],
      requiredPatterns: ['L11-G2', 'L11-G5', 'L11-G7'],
      minLength: 200, maxLength: 250
    }
  ]
}
