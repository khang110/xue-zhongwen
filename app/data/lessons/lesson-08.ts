import type { Lesson } from '../../../types/lesson'

export const lesson08: Lesson = {
  id: 'L8',
  number: 8,
  titleTraditional: '我想做自己',
  titleSimplified: '我想做自己',
  titlePinyin: 'Wǒ xiǎng zuò zìjǐ',
  titleVi: 'Tôi muốn là chính mình',
  status: 'available',

  dialogues: [
    [
      { speaker: '陳敏萱', traditional: '早，李文彥。欸？你怎麼看起來不太有精神？怎麼回事？', simplified: '早，李文彦。欸？你怎么看起来不太有精神？怎么回事？', pinyin: 'Zǎo, Lǐ Wényàn. Éi? Nǐ zěnme kàn qǐlái bú tài yǒu jīngshén? Zěnme huíshì?', english: "Good morning, Li Wenyan. Hey? Why do you look so listless? What's the problem?", vietnamese: 'Chào buổi sáng, Lý Văn Ngạn. Ơ? Sao cậu trông không được tinh thần lắm vậy? Có chuyện gì thế?' },
      { speaker: '李文彥', traditional: '別說了。我那個室友，最近不是整夜開著燈打電玩，就是熬夜看球賽，激動的時候，還大喊大叫，害我睡不著覺。', simplified: '别说了。我那个室友，最近不是整夜开着灯打电玩，就是熬夜看球赛，激动的时候，还大喊大叫，害我睡不着觉。', pinyin: 'Bié shuō le. Wǒ nàge shìyǒu, zuìjìn bú shì zhěngyè kāizhe dēng dǎ diànwán, jiùshì áoyè kàn qiúsài, jīdòng de shíhòu, hái dàhǎn dàjiào, hài wǒ shuì bù zháo jiào.', english: "Don't get me started. That roommate of mine… Lately, if he's not playing video games all night with the lights on, then he's up all night watching ball games. When he gets real excited he even cheers at the top of his lungs, keeping me from falling asleep.", vietnamese: 'Đừng nhắc nữa. Bạn cùng phòng mình gần đây không chơi điện tử suốt đêm bật đèn sáng, thì cũng thức khuya xem trận đấu, lúc kích động còn la hét ầm ĩ, hại mình không ngủ được.' },
      { speaker: '陳敏萱', traditional: '他不是在準備公職人員考試嗎？怎麼有時間打電玩？', simplified: '他不是在准备公职人员考试吗？怎么有时间打电玩？', pinyin: 'Tā bú shì zài zhǔnbèi gōngzhí rényuán kǎoshì ma? Zěnme yǒu shíjiān dǎ diànwán?', english: "Isn't he preparing for the civil servants exam? How does he have time to play computer games?", vietnamese: 'Cậu ấy chẳng phải đang chuẩn bị thi công chức à? Sao có thời gian chơi điện tử vậy?' },
      { speaker: '李文彥', traditional: '其實他對當公務員一點興趣都沒有，是他媽媽叫他去考的。他覺得很煩，所以最近常打電玩。', simplified: '其实他对当公务员一点兴趣都没有，是他妈妈叫他去考的。他觉得很烦，所以最近常打电玩。', pinyin: 'Qíshí tā duì dāng gōngwùyuán yìdiǎn xìngqù dōu méiyǒu, shì tā māma jiào tā qù kǎo de. Tā juéde hěn fán, suǒyǐ zuìjìn cháng dǎ diànwán.', english: 'He actually has no interest in the civil servants exam at all. It was his mother who wanted him to take it. He finds the whole situation a drag, so he\'s been playing a lot of video games lately.', vietnamese: 'Thật ra cậu ấy chẳng có hứng thú gì với việc làm công chức cả, là mẹ cậu ấy bắt đi thi. Cậu ấy thấy bực bội, nên gần đây hay chơi điện tử.' },
      { speaker: '陳敏萱', traditional: '既然沒興趣就別去考啊。為什麼要那麼聽話？', simplified: '既然没兴趣就别去考啊。为什么要那么听话？', pinyin: 'Jìrán méi xìngqù jiù bié qù kǎo a. Wèishénme yào nàme tīnghuà?', english: "Since he's not interested, then he shouldn't go take it. Why does he do what he's told like that?", vietnamese: 'Đã không có hứng thú thì đừng đi thi nữa. Sao phải nghe lời đến thế?' },
      { speaker: '李文彥', traditional: '因為他媽媽說，現在大學生的失業率很高。考上公職的話，薪水不錯，工作又穩定。這樣父母才放心。算了，算了，不說這個。妳最近怎麼樣？', simplified: '因为他妈妈说，现在大学生的失业率很高。考上公职的话，薪水不错，工作又稳定。这样父母才放心。算了，算了，不说这个。妳最近怎么样？', pinyin: 'Yīnwèi tā māma shuō, xiànzài dàxuéshēng de shīyèlǜ hěn gāo. Kǎoshàng gōngzhí dehuà, xīnshuǐ búcuò, gōngzuò yòu wěndìng. Zhèyàng fùmǔ cái fàngxīn. Suàn le, suàn le, bù shuō zhège. Nǐ zuìjìn zěnmeyàng?', english: "Because his mom says the unemployment rate among university students today is high. If he can test into the civil service, the salary isn't bad and the work is stable. Doing so would put his parents' minds at ease. Forget it. Let's not talk about it. How have you been?", vietnamese: 'Vì mẹ cậu ấy nói, bây giờ tỷ lệ thất nghiệp của sinh viên đại học rất cao. Nếu thi đỗ công chức thì lương khá, công việc lại ổn định. Như vậy cha mẹ mới yên tâm. Thôi, thôi, không nói chuyện này nữa. Dạo này cậu thế nào?' },
      { speaker: '陳敏萱', traditional: '快要期中考了，我壓力好大啊！這學期我在大學選了好幾門課，還在語言中心上密集班，每天忙得連睡覺的時間都不夠。', simplified: '快要期中考了，我压力好大啊！这学期我在大学选了好几门课，还在语言中心上密集班，每天忙得连睡觉的时间都不够。', pinyin: 'Kuàiyào qízhōng kǎo le, wǒ yālì hǎo dà a! Zhè xuéqí wǒ zài dàxué xuǎn le hǎo jǐ mén kè, hái zài yǔyán zhōngxīn shàng mìjí bān, měitiān máng de lián shuìjiào de shíjiān dōu bú gòu.', english: "Mid-terms are almost here. I'm under a great deal of stress. This semester, I am taking a number of courses at the university and I'm taking an intensive class at the language center. Every day, I'm so busy that I don't get enough sleep.", vietnamese: 'Sắp thi giữa kỳ rồi, mình áp lực quá! Học kỳ này mình chọn mấy môn ở đại học, còn học lớp cấp tốc ở trung tâm ngôn ngữ, ngày nào cũng bận đến mức thời gian ngủ cũng không đủ.' },
      { speaker: '李文彥', traditional: '這樣一來，妳不是就沒時間參加學校的社團活動了嗎？', simplified: '这样一来，妳不是就没时间参加学校的社团活动了吗？', pinyin: 'Zhèyàng yì lái, nǐ bú shì jiù méi shíjiān cānjiā xuéxiào de shètuán huódòng le ma?', english: "If that's the case, you don't have time to take part in school club activities, right?", vietnamese: 'Vậy thì chẳng phải cậu sẽ không có thời gian tham gia hoạt động câu lạc bộ của trường sao?' },
      { speaker: '陳敏萱', traditional: '那有什麼關係。我來台灣是來讀書的，不是來玩的。我希望早一點把中文系的學分修完，回國以後專心修輔系的課，這樣明年才能畢業。', simplified: '那有什么关系。我来台湾是来读书的，不是来玩的。我希望早一点把中文系的学分修完，回国以后专心修辅系的课，这样明年才能毕业。', pinyin: 'Nà yǒu shénme guānxi. Wǒ lái Táiwān shì lái dúshū de, bú shì lái wán de. Wǒ xīwàng zǎo yìdiǎn bǎ Zhōngwén xì de xuéfēn xiū wán, huíguó yǐhòu zhuānxīn xiū fǔxì de kè, zhèyàng míngnián cái néng bìyè.', english: "That doesn't matter. I came to Taiwan to study, not to have fun. I hope to finish taking all the credits in the Chinese department as soon as possible and after I go back to my home country, I'll focus on classes in my minor. That way I can graduate next year.", vietnamese: 'Thế thì có sao đâu. Mình đến Đài Loan là để học, không phải để chơi. Mình mong sớm học xong tín chỉ khoa Trung văn, về nước rồi tập trung học môn ngành phụ, như vậy sang năm mới tốt nghiệp được.' },
      { speaker: '李文彥', traditional: '妳還修輔系啊？為什麼要把自己弄得這麼累？如果我是妳，恐怕早就瘋了。', simplified: '妳还修辅系啊？为什么要把自己弄得这么累？如果我是妳，恐怕早就疯了。', pinyin: 'Nǐ hái xiū fǔxì a? Wèishénme yào bǎ zìjǐ nòng de zhème lèi? Rúguǒ wǒ shì nǐ, kǒngpà zǎo jiù fēng le.', english: "You have a minor? Why do you want to wear yourself out like that? If I were you, I'm afraid I would have gone crazy long ago.", vietnamese: 'Cậu còn học ngành phụ nữa à? Sao phải làm bản thân mệt mỏi thế? Nếu mình là cậu, chắc điên từ lâu rồi.' },
      { speaker: '陳敏萱', traditional: '你太誇張了。沒那麼嚴重吧。', simplified: '你太夸张了。没那么严重吧。', pinyin: 'Nǐ tài kuāzhāng le. Méi nàme yánzhòng ba.', english: "You're making it sound worse than it is. It's not that big a deal.", vietnamese: 'Cậu nói quá rồi. Đâu đến mức nghiêm trọng vậy.' },
      { speaker: '李文彥', traditional: '妳應該趁著在台灣的時候，到處走走，多了解這裡的文化。', simplified: '妳应该趁着在台湾的时候，到处走走，多了解这里的文化。', pinyin: 'Nǐ yīnggāi chènzhe zài Táiwān de shíhòu, dàochù zǒuzǒu, duō liǎojiě zhèlǐ de wénhuà.', english: 'You should use your time in Taiwan to go around and learn more about the culture here.', vietnamese: 'Cậu nên tranh thủ lúc còn ở Đài Loan, đi khắp nơi, tìm hiểu nhiều hơn về văn hóa ở đây.' },
      { speaker: '陳敏萱', traditional: '旅行的機會以後還很多。為了將來的發展，現在我應該好好利用時間，充實自己。', simplified: '旅行的机会以后还很多。为了将来的发展，现在我应该好好利用时间，充实自己。', pinyin: 'Lǚxíng de jīhuì yǐhòu hái hěn duō. Wèile jiānglái de fāzhǎn, xiànzài wǒ yīnggāi hǎohǎo lìyòng shíjiān, chōngshí zìjǐ.', english: "There'll be more opportunities to travel later. For the sake of my future career, for now, I should make good use of this time to improve myself.", vietnamese: 'Cơ hội đi du lịch sau này còn nhiều. Vì sự phát triển trong tương lai, bây giờ mình nên tận dụng thời gian thật tốt, trau dồi bản thân.' },
      { speaker: '', traditional: '（何雅婷走過來）', simplified: '（何雅婷走过来）', pinyin: '(Hé Yǎtíng zǒu guòlái)', english: '(He Yating walks over)', vietnamese: '(Hà Nhã Đình đi tới)' },
      { speaker: '何雅婷', traditional: '你們都在這裡啊？在聊什麼？', simplified: '你们都在这里啊？在聊什么？', pinyin: 'Nǐmen dōu zài zhèlǐ a? Zài liáo shénme?', english: 'Here you are!! What are you chatting about?', vietnamese: 'Mọi người đều ở đây à? Đang nói chuyện gì vậy?' },
      { speaker: '李文彥', traditional: '我們在聊畢業以後的計畫。對了，妳男朋友的畢業展什麼時候舉行？', simplified: '我们在聊毕业以后的计划。对了，妳男朋友的毕业展什么时候举行？', pinyin: 'Wǒmen zài liáo bìyè yǐhòu de jìhuà. Duì le, nǐ nánpéngyǒu de bìyè zhǎn shénme shíhòu jǔxíng?', english: "We're talking about our plans after graduation. By the way, when is your boyfriend holding his graduation exhibition?", vietnamese: 'Bọn mình đang nói về kế hoạch sau khi tốt nghiệp. À đúng rồi, triển lãm tốt nghiệp của bạn trai cậu khi nào tổ chức vậy?' },
      { speaker: '何雅婷', traditional: '下個月五號。到時候歡迎大家來看。', simplified: '下个月五号。到时候欢迎大家来看。', pinyin: 'Xià ge yuè wǔ hào. Dào shíhòu huānyíng dàjiā lái kàn.', english: "The fifth of next month. When the time comes, you're all welcome to come check it out.", vietnamese: 'Mùng năm tháng sau. Đến lúc đó hoan nghênh mọi người đến xem.' },
      { speaker: '陳敏萱', traditional: '他爸媽會去嗎？我聽妳說過，他爸媽很反對他念服裝設計。現在還是這樣嗎？', simplified: '他爸妈会去吗？我听妳说过，他爸妈很反对他念服装设计。现在还是这样吗？', pinyin: 'Tā bàmā huì qù ma? Wǒ tīng nǐ shuō guò, tā bàmā hěn fǎnduì tā niàn fúzhuāng shèjì. Xiànzài háishì zhèyàng ma?', english: 'Are his parents going? I heard you say that his parents are really against his studying fashion design. Is that still the case?', vietnamese: 'Bố mẹ anh ấy có đến không? Mình nghe cậu kể, bố mẹ anh ấy rất phản đối anh ấy học thiết kế thời trang. Bây giờ vẫn vậy à?' },
      { speaker: '何雅婷', traditional: '他父母到現在還覺得很遺憾，兒子沒去念醫學系。他從小功課就很好，父母對他的期望一直很高，選服裝設計讓他們很失望。', simplified: '他父母到现在还觉得很遗憾，儿子没去念医学系。他从小功课就很好，父母对他的期望一直很高，选服装设计让他们很失望。', pinyin: 'Tā fùmǔ dào xiànzài hái juéde hěn yíhàn, érzi méi qù niàn yīxué xì. Tā cóngxiǎo gōngkè jiù hěn hǎo, fùmǔ duì tā de qīwàng yìzhí hěn gāo, xuǎn fúzhuāng shèjì ràng tāmen hěn shīwàng.', english: "His parents still think it's a shame that their son didn't study in the department of medicine. He has always done well in school, so his parents have always had high expectations for him. His choice of fashion design was a big letdown for them.", vietnamese: 'Bố mẹ anh ấy đến giờ vẫn thấy rất tiếc, vì con trai không học khoa y. Anh ấy từ nhỏ học đã giỏi, cha mẹ kỳ vọng ở anh ấy luôn rất cao, chọn thiết kế thời trang khiến họ rất thất vọng.' },
      { speaker: '李文彥', traditional: '為什麼要失望？行行出狀元。不管做什麼，只要有興趣，願意努力就好了。', simplified: '为什么要失望？行行出状元。不管做什么，只要有兴趣，愿意努力就好了。', pinyin: 'Wèishénme yào shīwàng? Hángháng chū zhuàngyuán. Bùguǎn zuò shénme, zhǐyào yǒu xìngqù, yuànyì nǔlì jiù hǎo le.', english: "Why would they be disappointed? There are leaders in every industry. It doesn't matter what a person does. As long as they are interested and apply themselves, that's all that matters.", vietnamese: 'Sao phải thất vọng chứ? Nghề nào cũng có trạng nguyên. Dù làm gì, chỉ cần có hứng thú, sẵn lòng nỗ lực là được rồi.' }
    ]
  ],

  shortReading: {
    traditional:
      '麵包冠軍吳寶春\n\n　　2013年三月，世界麵包大賽冠軍吳寶春通過新加坡大學EMBA（高級管理人員工商管理碩士）研究所的面試，準備從七月起，開始他的學生生活。吳寶春也申請過台灣的EMBA，卻因為只有國中畢業，學歷太低而被拒絕。「吳寶春要念研究所」在台灣引起了很多人的討論。有人認為學校太沒有彈性。時代已經改變了，制度也應該隨著改變。但是也有人認為他的基礎不夠，如果讓他念研究所，對認真念書的人不公平。\n\n　　吳寶春出生在台灣南部鄉下，他是家裡最小的孩子。他家很窮。父親很早就過世了。母親為了養八個孩子，每天辛苦地工作。吳寶春小時候不了解讀書的重要，不喜歡念書。按照他自己的說法，國中畢業的時候，他認識的字還不到五百個。\n\n　　17歲那一年，他離開家鄉，一個人到台北一家麵包店當學徒。工作的時候因為書念得不多，吃了很多苦。這時候他才明白讀書的重要。當兵的時候，他利用時間看電視認字。後來他因為想看懂日文烘焙書，去學日文。幾年以後，更因為工作的關係到日本學習，讓他大開眼界，了解到烘焙麵包不但是專業技術，也是一門藝術。\n\n　　吳寶春經過20多年的努力，終於在2010年拿到世界麵包大賽冠軍。回台灣以後，他開了自己的麵包店，一年能做兩億的生意。他的夢想是成為企業家，能在亞洲各國開分店。新加坡大學也因為這個原因錄取了他。吳寶春成功的故事鼓勵了很多人做自己。可是，是不是每個人都能像他在碰到機會以前，做好了百分之百的準備？',
    simplified:
      '面包冠军吴宝春\n\n　　2013年三月，世界面包大赛冠军吴宝春通过新加坡大学EMBA（高级管理人员工商管理硕士）研究所的面试，准备从七月起，开始他的学生生活。吴宝春也申请过台湾的EMBA，却因为只有国中毕业，学历太低而被拒绝。「吴宝春要念研究所」在台湾引起了很多人的讨论。有人认为学校太没有弹性。时代已经改变了，制度也应该随着改变。但是也有人认为他的基础不够，如果让他念研究所，对认真念书的人不公平。\n\n　　吴宝春出生在台湾南部乡下，他是家里最小的孩子。他家很穷。父亲很早就过世了。母亲为了养八个孩子，每天辛苦地工作。吴宝春小时候不了解读书的重要，不喜欢念书。按照他自己的说法，国中毕业的时候，他认识的字还不到五百个。\n\n　　17岁那一年，他离开家乡，一个人到台北一家面包店当学徒。工作的时候因为书念得不多，吃了很多苦。这时候他才明白读书的重要。当兵的时候，他利用时间看电视认字。后来他因为想看懂日文烘焙书，去学日文。几年以后，更因为工作的关系到日本学习，让他大开眼界，了解到烘焙面包不但是专业技术，也是一门艺术。\n\n　　吴宝春经过20多年的努力，终于在2010年拿到世界面包大赛冠军。回台湾以后，他开了自己的面包店，一年能做两亿的生意。他的梦想是成为企业家，能在亚洲各国开分店。新加坡大学也因为这个原因录取了他。吴宝春成功的故事鼓励了很多人做自己。可是，是不是每个人都能像他在碰到机会以前，做好了百分之百的准备？',
    vietnamese:
      'Nhà vô địch bánh mì Ngô Bảo Xuân\n\nTháng 3 năm 2013, nhà vô địch Cuộc thi bánh mì thế giới Ngô Bảo Xuân vượt qua vòng phỏng vấn chương trình thạc sĩ EMBA (Thạc sĩ Quản trị Kinh doanh cấp cao) của Đại học Quốc gia Singapore, chuẩn bị từ tháng 7 bắt đầu cuộc sống sinh viên. Ngô Bảo Xuân cũng từng nộp đơn EMBA ở Đài Loan, nhưng vì chỉ tốt nghiệp trung học cơ sở, trình độ học vấn quá thấp nên bị từ chối. Việc "Ngô Bảo Xuân muốn học cao học" đã gây ra nhiều cuộc thảo luận ở Đài Loan. Có người cho rằng trường học quá thiếu linh hoạt. Thời đại đã thay đổi, thể chế cũng nên thay đổi theo. Nhưng cũng có người cho rằng nền tảng của anh không đủ, nếu để anh học cao học thì không công bằng với những người học hành nghiêm túc.\n\nNgô Bảo Xuân sinh ra ở vùng quê miền nam Đài Loan, là con út trong nhà. Nhà anh rất nghèo. Cha mất sớm. Mẹ vì nuôi tám người con, ngày nào cũng làm việc vất vả. Hồi nhỏ Ngô Bảo Xuân không hiểu tầm quan trọng của việc học, không thích học. Theo lời anh kể, lúc tốt nghiệp trung học cơ sở, số chữ anh biết còn chưa đến năm trăm.\n\nNăm 17 tuổi, anh rời quê nhà, một mình lên Đài Bắc làm học việc ở một tiệm bánh mì. Vì học ít nên trong công việc anh gặp rất nhiều khó khăn, chịu nhiều khổ cực. Lúc này anh mới hiểu rõ tầm quan trọng của việc đọc sách. Khi đi lính, anh tận dụng thời gian xem ti vi có phụ đề để học nhận mặt chữ. Sau đó vì muốn đọc hiểu sách làm bánh tiếng Nhật, anh đi học tiếng Nhật. Vài năm sau, vì công việc anh còn sang Nhật học tập, điều này khiến anh mở mang tầm mắt, hiểu ra làm bánh không chỉ là kỹ thuật chuyên môn, mà còn là một môn nghệ thuật.\n\nTrải qua hơn 20 năm nỗ lực, cuối cùng Ngô Bảo Xuân đã giành chức vô địch Cuộc thi bánh mì thế giới vào năm 2010. Sau khi về Đài Loan, anh mở tiệm bánh của riêng mình, một năm làm ăn được hai trăm triệu Đài tệ. Ước mơ của anh là trở thành doanh nhân, có thể mở chi nhánh ở các nước châu Á. Đại học Singapore cũng vì lý do này mà nhận anh vào học. Câu chuyện thành công của Ngô Bảo Xuân đã khích lệ rất nhiều người sống là chính mình. Nhưng liệu có phải ai cũng có thể, giống như anh trước khi gặp cơ hội, đã chuẩn bị sẵn sàng một trăm phần trăm?'
  },

  phrases: [
    { phraseTraditional: '怎麼回事', phraseSimplified: '怎么回事', pinyin: 'zěnme huíshì', meaningVi: 'có chuyện gì vậy, sao vậy' },
    { phraseTraditional: '大喊大叫', phraseSimplified: '大喊大叫', pinyin: 'dàhǎn dàjiào', meaningVi: 'la hét ầm ĩ' },
    { phraseTraditional: '期中考', phraseSimplified: '期中考', pinyin: 'qízhōng kǎo', meaningVi: 'thi giữa kỳ' },
    { phraseTraditional: '密集班', phraseSimplified: '密集班', pinyin: 'mìjí bān', meaningVi: 'lớp học cấp tốc' },
    { phraseTraditional: '畢業展', phraseSimplified: '毕业展', pinyin: 'bìyè zhǎn', meaningVi: 'triển lãm tốt nghiệp' },
    { phraseTraditional: '服裝設計', phraseSimplified: '服装设计', pinyin: 'fúzhuāng shèjì', meaningVi: 'thiết kế thời trang' },
    { phraseTraditional: '醫學系', phraseSimplified: '医学系', pinyin: 'yīxué xì', meaningVi: 'khoa y' },
    { phraseTraditional: '行行出狀元', phraseSimplified: '行行出状元', pinyin: 'hángháng chū zhuàngyuán', meaningVi: 'nghề nào cũng có người giỏi nhất' },
    { phraseTraditional: '小時候', phraseSimplified: '小时候', pinyin: 'xiǎo shíhòu', meaningVi: 'hồi nhỏ' },
    { phraseTraditional: '大開眼界', phraseSimplified: '大开眼界', pinyin: 'dàkāi yǎnjiè', meaningVi: 'mở mang tầm mắt' },
    { phraseTraditional: '世界麵包大賽', phraseSimplified: '世界面包大赛', pinyin: 'shìjiè miànbāo dàsài', meaningVi: 'Cuộc thi bánh mì thế giới' },
    { phraseTraditional: '睡不著覺', phraseSimplified: '睡不着觉', pinyin: 'shuì bù zháo jiào', meaningVi: 'không ngủ được' },
    { phraseTraditional: '趁著', phraseSimplified: '趁着', pinyin: 'chènzhe', meaningVi: 'tranh thủ lúc' },
    { phraseTraditional: '充實自己', phraseSimplified: '充实自己', pinyin: 'chōngshí zìjǐ', meaningVi: 'trau dồi bản thân' },
    { phraseTraditional: '算了', phraseSimplified: '算了', pinyin: 'suàn le', meaningVi: 'thôi bỏ đi' }
  ],

  vocab: [
    { id: 'L8-001', lessonId: 'L8', order: 1, group: 'vocab1', traditional: '整夜', simplified: '整夜', pinyin: 'zhěngyè', wordClass: ['N'], meaningVi: 'cả đêm, suốt đêm', meaningEn: 'all night', examples: [{ traditional: '我室友最近整夜開著燈打電玩。', simplified: '我室友最近整夜开着灯打电玩。', vietnamese: 'Bạn cùng phòng mình gần đây chơi điện tử suốt đêm, bật đèn sáng.' }] },
    { id: 'L8-002', lessonId: 'L8', order: 2, group: 'vocab1', traditional: '開', simplified: '开', pinyin: 'kāi', wordClass: ['V'], meaningVi: 'bật, mở', meaningEn: 'to turn on, to power on', examples: [{ traditional: '他整夜開著燈打電玩。', simplified: '他整夜开着灯打电玩。', vietnamese: 'Cậu ấy chơi điện tử suốt đêm, bật đèn sáng.' }] },
    { id: 'L8-003', lessonId: 'L8', order: 3, group: 'vocab1', traditional: '燈', simplified: '灯', pinyin: 'dēng', wordClass: ['N'], meaningVi: 'đèn', meaningEn: 'light, lamp', examples: [{ traditional: '他整夜開著燈打電玩。', simplified: '他整夜开着灯打电玩。', vietnamese: 'Cậu ấy chơi điện tử suốt đêm, bật đèn sáng.' }] },
    { id: 'L8-004', lessonId: 'L8', order: 4, group: 'vocab1', traditional: '電玩', simplified: '电玩', pinyin: 'diànwán', wordClass: ['N'], meaningVi: 'trò chơi điện tử', meaningEn: 'video game', examples: [{ traditional: '他整夜開著燈打電玩。', simplified: '他整夜开着灯打电玩。', vietnamese: 'Cậu ấy chơi điện tử suốt đêm, bật đèn sáng.' }] },
    { id: 'L8-005', lessonId: 'L8', order: 5, group: 'vocab1', traditional: '球賽', simplified: '球赛', pinyin: 'qiúsài', wordClass: ['N'], meaningVi: 'trận bóng', meaningEn: 'ball game', examples: [{ traditional: '就是熬夜看球賽。', simplified: '就是熬夜看球赛。', vietnamese: 'Thì cũng thức khuya xem bóng đá.' }] },
    { id: 'L8-006', lessonId: 'L8', order: 6, group: 'vocab1', traditional: '激動', simplified: '激动', pinyin: 'jīdòng', wordClass: ['Vs'], meaningVi: 'kích động, phấn khích', meaningEn: 'to be excited', examples: [{ traditional: '激動的時候，還大喊大叫。', simplified: '激动的时候，还大喊大叫。', vietnamese: 'Lúc kích động còn la hét ầm ĩ.' }] },
    { id: 'L8-007', lessonId: 'L8', order: 7, group: 'vocab1', traditional: '喊', simplified: '喊', pinyin: 'hǎn', wordClass: ['Vi'], meaningVi: 'hét, la', meaningEn: 'to yell, to shout', examples: [{ traditional: '激動的時候，還大喊大叫。', simplified: '激动的时候，还大喊大叫。', vietnamese: 'Lúc kích động còn la hét ầm ĩ.' }] },
    { id: 'L8-008', lessonId: 'L8', order: 8, group: 'vocab1', traditional: '公職', simplified: '公职', pinyin: 'gōngzhí', wordClass: ['N'], meaningVi: 'công chức (chức vụ nhà nước)', meaningEn: 'government posts', examples: [{ traditional: '他不是在準備公職人員考試嗎？', simplified: '他不是在准备公职人员考试吗？', vietnamese: 'Cậu ấy chẳng phải đang chuẩn bị thi công chức à?' }] },
    { id: 'L8-009', lessonId: 'L8', order: 9, group: 'vocab1', traditional: '其實', simplified: '其实', pinyin: 'qíshí', wordClass: ['Adv'], meaningVi: 'thực ra', meaningEn: 'in fact, actually', examples: [{ traditional: '其實他對當公務員一點興趣都沒有。', simplified: '其实他对当公务员一点兴趣都没有。', vietnamese: 'Thật ra cậu ấy chẳng có hứng thú gì với việc làm công chức cả.' }] },
    { id: 'L8-010', lessonId: 'L8', order: 10, group: 'vocab1', traditional: '公務員', simplified: '公务员', pinyin: 'gōngwùyuán', wordClass: ['N'], meaningVi: 'công chức, viên chức nhà nước', meaningEn: 'civil servant', examples: [{ traditional: '他對當公務員一點興趣都沒有。', simplified: '他对当公务员一点兴趣都没有。', vietnamese: 'Cậu ấy chẳng có hứng thú gì với việc làm công chức cả.' }] },
    { id: 'L8-011', lessonId: 'L8', order: 11, group: 'vocab1', traditional: '煩', simplified: '烦', pinyin: 'fán', wordClass: ['Vs'], meaningVi: 'phiền, bực', meaningEn: 'a "drag", a pain in the neck', examples: [{ traditional: '他覺得很煩，所以最近常打電玩。', simplified: '他觉得很烦，所以最近常打电玩。', vietnamese: 'Cậu ấy thấy bực bội, nên gần đây hay chơi điện tử.' }] },
    { id: 'L8-012', lessonId: 'L8', order: 12, group: 'vocab1', traditional: '聽話', simplified: '听话', pinyin: 'tīnghuà', wordClass: ['V-sep'], meaningVi: 'nghe lời', meaningEn: 'to listen, to obey', notes: 'Sách ghi loại từ Vs-sep (động từ trạng thái ly hợp).', examples: [{ traditional: '為什麼要那麼聽話？', simplified: '为什么要那么听话？', vietnamese: 'Sao phải nghe lời đến thế?' }] },
    { id: 'L8-013', lessonId: 'L8', order: 13, group: 'vocab1', traditional: '失業率', simplified: '失业率', pinyin: 'shīyèlǜ', wordClass: ['N'], meaningVi: 'tỷ lệ thất nghiệp', meaningEn: 'unemployment rate', examples: [{ traditional: '現在大學生的失業率很高。', simplified: '现在大学生的失业率很高。', vietnamese: 'Bây giờ tỷ lệ thất nghiệp của sinh viên đại học rất cao.' }] },
    { id: 'L8-014', lessonId: 'L8', order: 14, group: 'vocab1', traditional: '門', simplified: '门', pinyin: 'mén', wordClass: ['M'], meaningVi: 'lượng từ cho môn học', meaningEn: 'measure word for academic courses', examples: [{ traditional: '這學期我在大學選了好幾門課。', simplified: '这学期我在大学选了好几门课。', vietnamese: 'Học kỳ này mình chọn mấy môn ở đại học.' }] },
    { id: 'L8-015', lessonId: 'L8', order: 15, group: 'vocab1', traditional: '讀書', simplified: '读书', pinyin: 'dúshū', wordClass: ['V-sep'], meaningVi: 'học, đọc sách', meaningEn: 'to study', tags: ['giao-duc'], examples: [{ traditional: '我來台灣是來讀書的，不是來玩的。', simplified: '我来台湾是来读书的，不是来玩的。', vietnamese: 'Mình đến Đài Loan là để học, không phải để chơi.' }] },
    { id: 'L8-016', lessonId: 'L8', order: 16, group: 'vocab1', traditional: '學分', simplified: '学分', pinyin: 'xuéfēn', wordClass: ['N'], meaningVi: 'tín chỉ', meaningEn: 'academic credits', tags: ['giao-duc'], examples: [{ traditional: '我希望早一點把中文系的學分修完。', simplified: '我希望早一点把中文系的学分修完。', vietnamese: 'Mình mong sớm học xong tín chỉ khoa Trung văn.' }] },
    { id: 'L8-017', lessonId: 'L8', order: 17, group: 'vocab1', traditional: '修', simplified: '修', pinyin: 'xiū', wordClass: ['V'], meaningVi: 'học, lấy (tín chỉ)', meaningEn: 'to take (courses)', examples: [{ traditional: '回國以後專心修輔系的課。', simplified: '回国以后专心修辅系的课。', vietnamese: 'Về nước rồi tập trung học môn ngành phụ.' }] },
    { id: 'L8-018', lessonId: 'L8', order: 18, group: 'vocab1', traditional: '專心', simplified: '专心', pinyin: 'zhuānxīn', wordClass: ['Vs'], meaningVi: 'tập trung, chuyên tâm', meaningEn: 'to focus on, to concentrate', examples: [{ traditional: '回國以後專心修輔系的課。', simplified: '回国以后专心修辅系的课。', vietnamese: 'Về nước rồi tập trung học môn ngành phụ.' }] },
    { id: 'L8-019', lessonId: 'L8', order: 19, group: 'vocab1', traditional: '修課', simplified: '修课', pinyin: 'xiūkè', wordClass: ['V-sep'], meaningVi: 'học môn, đăng ký học', meaningEn: 'to take a class', examples: [{ traditional: '妳還修輔系啊？', simplified: '妳还修辅系啊？', vietnamese: 'Cậu còn học ngành phụ nữa à?' }] },
    { id: 'L8-020', lessonId: 'L8', order: 20, group: 'vocab1', traditional: '輔系', simplified: '辅系', pinyin: 'fǔxì', wordClass: ['N'], meaningVi: 'ngành phụ (đại học)', meaningEn: 'minor (in college)', tags: ['giao-duc'], examples: [{ traditional: '妳還修輔系啊？', simplified: '妳还修辅系啊？', vietnamese: 'Cậu còn học ngành phụ nữa à?' }] },
    { id: 'L8-021', lessonId: 'L8', order: 21, group: 'vocab1', traditional: '瘋', simplified: '疯', pinyin: 'fēng', wordClass: ['Vp'], meaningVi: 'điên, phát điên', meaningEn: 'to go crazy, to be insane', examples: [{ traditional: '如果我是妳，恐怕早就瘋了。', simplified: '如果我是妳，恐怕早就疯了。', vietnamese: 'Nếu mình là cậu, chắc điên từ lâu rồi.' }] },
    { id: 'L8-022', lessonId: 'L8', order: 22, group: 'vocab1', traditional: '誇張', simplified: '夸张', pinyin: 'kuāzhāng', wordClass: ['Vs'], meaningVi: 'phóng đại, cường điệu', meaningEn: 'to be exaggerated', examples: [{ traditional: '你太誇張了。沒那麼嚴重吧。', simplified: '你太夸张了。没那么严重吧。', vietnamese: 'Cậu nói quá rồi. Đâu đến mức nghiêm trọng vậy.' }] },
    { id: 'L8-023', lessonId: 'L8', order: 23, group: 'vocab1', traditional: '舉行', simplified: '举行', pinyin: 'jǔxíng', wordClass: ['V'], meaningVi: 'tổ chức (hội nghị, triển lãm)', meaningEn: 'to hold (a conference, exhibition)', examples: [{ traditional: '妳男朋友的畢業展什麼時候舉行？', simplified: '妳男朋友的毕业展什么时候举行？', vietnamese: 'Triển lãm tốt nghiệp của bạn trai cậu khi nào tổ chức?' }] },
    { id: 'L8-024', lessonId: 'L8', order: 24, group: 'vocab1', traditional: '遺憾', simplified: '遗憾', pinyin: 'yíhàn', wordClass: ['Vs'], meaningVi: 'tiếc nuối, đáng tiếc', meaningEn: 'regretful (that something undesirable happened), a pity, a shame', examples: [{ traditional: '他父母到現在還覺得很遺憾。', simplified: '他父母到现在还觉得很遗憾。', vietnamese: 'Bố mẹ anh ấy đến giờ vẫn thấy rất tiếc.' }] },
    { id: 'L8-025', lessonId: 'L8', order: 25, group: 'vocab1', traditional: '兒子', simplified: '儿子', pinyin: 'érzi', wordClass: ['N'], meaningVi: 'con trai', meaningEn: 'son', tags: ['gia-dinh'], examples: [{ traditional: '兒子沒去念醫學系。', simplified: '儿子没去念医学系。', vietnamese: 'Con trai không học khoa y.' }] },
    { id: 'L8-026', lessonId: 'L8', order: 26, group: 'vocab1', traditional: '期望', simplified: '期望', pinyin: 'qīwàng', wordClass: ['N'], meaningVi: 'kỳ vọng', meaningEn: 'expectations', examples: [{ traditional: '父母對他的期望一直很高。', simplified: '父母对他的期望一直很高。', vietnamese: 'Cha mẹ kỳ vọng ở anh ấy luôn rất cao.' }] },
    { id: 'L8-027', lessonId: 'L8', order: 27, group: 'vocab1', traditional: '狀元', simplified: '状元', pinyin: 'zhuàngyuán', wordClass: ['N'], meaningVi: 'trạng nguyên (đỗ đầu kỳ thi)', meaningEn: 'top-ranking in a public exam (originally the person with the highest marks on the imperial test)', examples: [{ traditional: '行行出狀元。', simplified: '行行出状元。', vietnamese: 'Nghề nào cũng có trạng nguyên.' }] },
    { id: 'L8-028', lessonId: 'L8', order: 28, group: 'vocab1', traditional: '努力', simplified: '努力', pinyin: 'nǔlì', wordClass: ['Vs'], meaningVi: 'nỗ lực, chăm chỉ', meaningEn: 'diligent in', examples: [{ traditional: '只要有興趣，願意努力就好了。', simplified: '只要有兴趣，愿意努力就好了。', vietnamese: 'Chỉ cần có hứng thú, sẵn lòng nỗ lực là được rồi.' }] },
    { id: 'L8-029', lessonId: 'L8', order: 29, group: 'vocab1', traditional: '怎麼回事', simplified: '怎么回事', pinyin: 'zěnme huíshì', wordClass: ['Other'], meaningVi: 'chuyện gì vậy, sao vậy', meaningEn: "What's wrong?", examples: [{ traditional: '你怎麼看起來不太有精神？怎麼回事？', simplified: '你怎么看起来不太有精神？怎么回事？', vietnamese: 'Sao cậu trông không được tinh thần lắm vậy? Có chuyện gì thế?' }] },
    { id: 'L8-030', lessonId: 'L8', order: 30, group: 'vocab1', traditional: '大喊大叫', simplified: '大喊大叫', pinyin: 'dàhǎn dàjiào', wordClass: ['Other'], meaningVi: 'la hét ầm ĩ', meaningEn: 'to yell, yelling, shouting', examples: [{ traditional: '激動的時候，還大喊大叫。', simplified: '激动的时候，还大喊大叫。', vietnamese: 'Lúc kích động còn la hét ầm ĩ.' }] },
    { id: 'L8-031', lessonId: 'L8', order: 31, group: 'vocab1', traditional: '期中考', simplified: '期中考', pinyin: 'qízhōng kǎo', wordClass: ['Other'], meaningVi: 'thi giữa kỳ', meaningEn: 'mid-term exam', tags: ['giao-duc'], examples: [{ traditional: '快要期中考了，我壓力好大啊！', simplified: '快要期中考了，我压力好大啊！', vietnamese: 'Sắp thi giữa kỳ rồi, mình áp lực quá!' }] },
    { id: 'L8-032', lessonId: 'L8', order: 32, group: 'vocab1', traditional: '密集班', simplified: '密集班', pinyin: 'mìjí bān', wordClass: ['Other'], meaningVi: 'lớp học cấp tốc', meaningEn: 'intensive course', examples: [{ traditional: '還在語言中心上密集班。', simplified: '还在语言中心上密集班。', vietnamese: 'Còn học lớp cấp tốc ở trung tâm ngôn ngữ.' }] },
    { id: 'L8-033', lessonId: 'L8', order: 33, group: 'vocab1', traditional: '畢業展', simplified: '毕业展', pinyin: 'bìyè zhǎn', wordClass: ['Other'], meaningVi: 'triển lãm tốt nghiệp', meaningEn: 'graduation exhibition', examples: [{ traditional: '妳男朋友的畢業展什麼時候舉行？', simplified: '妳男朋友的毕业展什么时候举行？', vietnamese: 'Triển lãm tốt nghiệp của bạn trai cậu khi nào tổ chức?' }] },
    { id: 'L8-034', lessonId: 'L8', order: 34, group: 'vocab1', traditional: '服裝設計', simplified: '服装设计', pinyin: 'fúzhuāng shèjì', wordClass: ['Other'], meaningVi: 'thiết kế thời trang', meaningEn: 'fashion design', examples: [{ traditional: '他爸媽很反對他念服裝設計。', simplified: '他爸妈很反对他念服装设计。', vietnamese: 'Bố mẹ anh ấy rất phản đối anh ấy học thiết kế thời trang.' }] },
    { id: 'L8-035', lessonId: 'L8', order: 35, group: 'vocab1', traditional: '醫學系', simplified: '医学系', pinyin: 'yīxué xì', wordClass: ['Other'], meaningVi: 'khoa y', meaningEn: 'department of medicine', tags: ['giao-duc'], examples: [{ traditional: '兒子沒去念醫學系。', simplified: '儿子没去念医学系。', vietnamese: 'Con trai không học khoa y.' }] },
    { id: 'L8-036', lessonId: 'L8', order: 36, group: 'vocab1', traditional: '行行出狀元', simplified: '行行出状元', pinyin: 'hángháng chū zhuàngyuán', wordClass: ['Other'], meaningVi: 'nghề nào cũng có người giỏi nhất', meaningEn: 'there is a leader in every industry', examples: [{ traditional: '為什麼要失望？行行出狀元。', simplified: '为什么要失望？行行出状元。', vietnamese: 'Sao phải thất vọng chứ? Nghề nào cũng có trạng nguyên.' }] },

    { id: 'L8-037', lessonId: 'L8', order: 1, group: 'vocab2', traditional: '冠軍', simplified: '冠军', pinyin: 'guànjūn', wordClass: ['N'], meaningVi: 'nhà vô địch', meaningEn: 'champion, championship', examples: [{ traditional: '世界麵包大賽冠軍吳寶春。', simplified: '世界面包大赛冠军吴宝春。', vietnamese: 'Nhà vô địch Cuộc thi bánh mì thế giới Ngô Bảo Xuân.' }] },
    { id: 'L8-038', lessonId: 'L8', order: 2, group: 'vocab2', traditional: '大賽', simplified: '大赛', pinyin: 'dàsài', wordClass: ['N'], meaningVi: 'giải đấu lớn (quốc tế)', meaningEn: 'a major, usually international, competition', examples: [{ traditional: '世界麵包大賽冠軍吳寶春。', simplified: '世界面包大赛冠军吴宝春。', vietnamese: 'Nhà vô địch Cuộc thi bánh mì thế giới Ngô Bảo Xuân.' }] },
    { id: 'L8-039', lessonId: 'L8', order: 3, group: 'vocab2', traditional: '通過', simplified: '通过', pinyin: 'tōngguò', wordClass: ['Vp'], meaningVi: 'vượt qua, thông qua', meaningEn: 'to pass', notes: 'Sách ghi loại từ Vpt (động từ quá trình có tân ngữ).', examples: [{ traditional: '吳寶春通過新加坡大學EMBA研究所的面試。', simplified: '吴宝春通过新加坡大学EMBA研究所的面试。', vietnamese: 'Ngô Bảo Xuân vượt qua vòng phỏng vấn chương trình thạc sĩ EMBA của Đại học Singapore.' }] },
    { id: 'L8-040', lessonId: 'L8', order: 4, group: 'vocab2', traditional: '高級', simplified: '高级', pinyin: 'gāojí', wordClass: ['Vs-attr'], meaningVi: 'cao cấp', meaningEn: 'high level, advanced', examples: [{ traditional: 'EMBA是高級管理人員工商管理碩士。', simplified: 'EMBA是高级管理人员工商管理硕士。', vietnamese: 'EMBA là Thạc sĩ Quản trị Kinh doanh cấp cao.' }] },
    { id: 'L8-041', lessonId: 'L8', order: 5, group: 'vocab2', traditional: '碩士', simplified: '硕士', pinyin: 'shuòshì', wordClass: ['N'], meaningVi: 'thạc sĩ', meaningEn: "master's degree", tags: ['giao-duc'], examples: [{ traditional: 'EMBA是高級管理人員工商管理碩士。', simplified: 'EMBA是高级管理人员工商管理硕士。', vietnamese: 'EMBA là Thạc sĩ Quản trị Kinh doanh cấp cao.' }] },
    { id: 'L8-042', lessonId: 'L8', order: 6, group: 'vocab2', traditional: '面試', simplified: '面试', pinyin: 'miànshì', wordClass: ['N'], meaningVi: 'phỏng vấn', meaningEn: 'interview', examples: [{ traditional: '吳寶春通過新加坡大學EMBA研究所的面試。', simplified: '吴宝春通过新加坡大学EMBA研究所的面试。', vietnamese: 'Ngô Bảo Xuân vượt qua vòng phỏng vấn chương trình thạc sĩ EMBA.' }] },
    { id: 'L8-043', lessonId: 'L8', order: 7, group: 'vocab2', traditional: '卻', simplified: '却', pinyin: 'què', wordClass: ['Adv'], meaningVi: 'nhưng, lại', meaningEn: 'but, yet', notes: 'Xem ngữ pháp VI: 卻.', examples: [{ traditional: '吳寶春也申請過台灣的EMBA，卻因為學歷太低而被拒絕。', simplified: '吴宝春也申请过台湾的EMBA，却因为学历太低而被拒绝。', vietnamese: 'Ngô Bảo Xuân cũng từng nộp đơn EMBA ở Đài Loan, nhưng vì trình độ học vấn quá thấp nên bị từ chối.' }] },
    { id: 'L8-044', lessonId: 'L8', order: 8, group: 'vocab2', traditional: '國中', simplified: '国中', pinyin: 'guózhōng', wordClass: ['N'], meaningVi: 'trung học cơ sở', meaningEn: 'junior middle school', tags: ['giao-duc'], examples: [{ traditional: '他只有國中畢業，學歷太低而被拒絕。', simplified: '他只有国中毕业，学历太低而被拒绝。', vietnamese: 'Anh chỉ tốt nghiệp trung học cơ sở, trình độ học vấn quá thấp nên bị từ chối.' }] },
    { id: 'L8-045', lessonId: 'L8', order: 9, group: 'vocab2', traditional: '學歷', simplified: '学历', pinyin: 'xuélì', wordClass: ['N'], meaningVi: 'trình độ học vấn', meaningEn: 'educational background', examples: [{ traditional: '只有國中畢業，學歷太低而被拒絕。', simplified: '只有国中毕业，学历太低而被拒绝。', vietnamese: 'Chỉ tốt nghiệp trung học cơ sở, trình độ học vấn quá thấp nên bị từ chối.' }] },
    { id: 'L8-046', lessonId: 'L8', order: 10, group: 'vocab2', traditional: '拒絕', simplified: '拒绝', pinyin: 'jùjué', wordClass: ['V'], meaningVi: 'từ chối', meaningEn: 'to reject', examples: [{ traditional: '學歷太低而被拒絕。', simplified: '学历太低而被拒绝。', vietnamese: 'Trình độ học vấn quá thấp nên bị từ chối.' }] },
    { id: 'L8-047', lessonId: 'L8', order: 11, group: 'vocab2', traditional: '引起', simplified: '引起', pinyin: 'yǐnqǐ', wordClass: ['Vp'], meaningVi: 'gây ra, dấy lên', meaningEn: 'to stir up, generate, cause', notes: 'Sách ghi loại từ Vpt (động từ quá trình có tân ngữ).', examples: [{ traditional: '「吳寶春要念研究所」在台灣引起了很多人的討論。', simplified: '「吴宝春要念研究所」在台湾引起了很多人的讨论。', vietnamese: 'Việc "Ngô Bảo Xuân muốn học cao học" đã gây ra nhiều cuộc thảo luận ở Đài Loan.' }] },
    { id: 'L8-048', lessonId: 'L8', order: 12, group: 'vocab2', traditional: '彈性', simplified: '弹性', pinyin: 'tánxìng', wordClass: ['N'], meaningVi: 'tính linh hoạt', meaningEn: 'flexibility', examples: [{ traditional: '有人認為學校太沒有彈性。', simplified: '有人认为学校太没有弹性。', vietnamese: 'Có người cho rằng trường học quá thiếu linh hoạt.' }] },
    { id: 'L8-049', lessonId: 'L8', order: 13, group: 'vocab2', traditional: '改變', simplified: '改变', pinyin: 'gǎibiàn', wordClass: ['V'], meaningVi: 'thay đổi', meaningEn: 'to undergo change', examples: [{ traditional: '時代已經改變了，制度也應該隨著改變。', simplified: '时代已经改变了，制度也应该随着改变。', vietnamese: 'Thời đại đã thay đổi, thể chế cũng nên thay đổi theo.' }] },
    { id: 'L8-050', lessonId: 'L8', order: 14, group: 'vocab2', traditional: '制度', simplified: '制度', pinyin: 'zhìdù', wordClass: ['N'], meaningVi: 'chế độ, thể chế', meaningEn: 'system', examples: [{ traditional: '制度也應該隨著改變。', simplified: '制度也应该随着改变。', vietnamese: 'Thể chế cũng nên thay đổi theo.' }] },
    { id: 'L8-051', lessonId: 'L8', order: 15, group: 'vocab2', traditional: '基礎', simplified: '基础', pinyin: 'jīchǔ', wordClass: ['N'], meaningVi: 'nền tảng, cơ sở', meaningEn: 'foundation, fundamentals', examples: [{ traditional: '他的基礎不夠。', simplified: '他的基础不够。', vietnamese: 'Nền tảng của anh không đủ.' }] },
    { id: 'L8-052', lessonId: 'L8', order: 16, group: 'vocab2', traditional: '認真', simplified: '认真', pinyin: 'rènzhēn', wordClass: ['Vs'], meaningVi: 'nghiêm túc', meaningEn: 'earnest, serious', examples: [{ traditional: '對認真念書的人不公平。', simplified: '对认真念书的人不公平。', vietnamese: 'Không công bằng với những người học hành nghiêm túc.' }] },
    { id: 'L8-053', lessonId: 'L8', order: 17, group: 'vocab2', traditional: '公平', simplified: '公平', pinyin: 'gōngpíng', wordClass: ['Vs'], meaningVi: 'công bằng', meaningEn: 'fair', examples: [{ traditional: '對認真念書的人不公平。', simplified: '对认真念书的人不公平。', vietnamese: 'Không công bằng với những người học hành nghiêm túc.' }] },
    { id: 'L8-054', lessonId: 'L8', order: 18, group: 'vocab2', traditional: '出生', simplified: '出生', pinyin: 'chūshēng', wordClass: ['Vp'], meaningVi: 'sinh ra', meaningEn: 'to be born', examples: [{ traditional: '吳寶春出生在台灣南部鄉下。', simplified: '吴宝春出生在台湾南部乡下。', vietnamese: 'Ngô Bảo Xuân sinh ra ở vùng quê miền nam Đài Loan.' }] },
    { id: 'L8-055', lessonId: 'L8', order: 19, group: 'vocab2', traditional: '窮', simplified: '穷', pinyin: 'qióng', wordClass: ['Vs'], meaningVi: 'nghèo', meaningEn: 'poor', examples: [{ traditional: '他家很窮。', simplified: '他家很穷。', vietnamese: 'Nhà anh rất nghèo.' }] },
    { id: 'L8-056', lessonId: 'L8', order: 20, group: 'vocab2', traditional: '父親', simplified: '父亲', pinyin: 'fùqīn', wordClass: ['N'], meaningVi: 'cha', meaningEn: 'father', tags: ['gia-dinh'], examples: [{ traditional: '父親很早就過世了。', simplified: '父亲很早就过世了。', vietnamese: 'Cha mất sớm.' }] },
    { id: 'L8-057', lessonId: 'L8', order: 21, group: 'vocab2', traditional: '母親', simplified: '母亲', pinyin: 'mǔqīn', wordClass: ['N'], meaningVi: 'mẹ', meaningEn: 'mother', tags: ['gia-dinh'], examples: [{ traditional: '母親為了養八個孩子，每天辛苦地工作。', simplified: '母亲为了养八个孩子，每天辛苦地工作。', vietnamese: 'Mẹ vì nuôi tám người con, ngày nào cũng làm việc vất vả.' }] },
    { id: 'L8-058', lessonId: 'L8', order: 22, group: 'vocab2', traditional: '學徒', simplified: '学徒', pinyin: 'xuétú', wordClass: ['N'], meaningVi: 'học việc', meaningEn: 'apprentice', examples: [{ traditional: '一個人到台北一家麵包店當學徒。', simplified: '一个人到台北一家面包店当学徒。', vietnamese: 'Một mình lên Đài Bắc làm học việc ở một tiệm bánh mì.' }] },
    { id: 'L8-059', lessonId: 'L8', order: 23, group: 'vocab2', traditional: '吃苦', simplified: '吃苦', pinyin: 'chīkǔ', wordClass: ['V-sep'], meaningVi: 'chịu khổ', meaningEn: 'experience tough times', notes: 'Sách ghi loại từ Vs-sep (động từ trạng thái ly hợp).', examples: [{ traditional: '工作的時候因為書念得不多，吃了很多苦。', simplified: '工作的时候因为书念得不多，吃了很多苦。', vietnamese: 'Vì học ít nên trong công việc anh chịu nhiều khổ cực.' }] },
    { id: 'L8-060', lessonId: 'L8', order: 24, group: 'vocab2', traditional: '明白', simplified: '明白', pinyin: 'míngbái', wordClass: ['Vst'], meaningVi: 'hiểu rõ', meaningEn: 'to understand', examples: [{ traditional: '這時候他才明白讀書的重要。', simplified: '这时候他才明白读书的重要。', vietnamese: 'Lúc này anh mới hiểu rõ tầm quan trọng của việc đọc sách.' }] },
    { id: 'L8-061', lessonId: 'L8', order: 25, group: 'vocab2', traditional: '當兵', simplified: '当兵', pinyin: 'dāngbīng', wordClass: ['V-sep'], meaningVi: 'đi lính', meaningEn: 'to be a soldier, to do military service', examples: [{ traditional: '當兵的時候，他利用時間看電視認字。', simplified: '当兵的时候，他利用时间看电视认字。', vietnamese: 'Khi đi lính, anh tận dụng thời gian xem ti vi để học nhận mặt chữ.' }] },
    { id: 'L8-062', lessonId: 'L8', order: 26, group: 'vocab2', traditional: '認字', simplified: '认字', pinyin: 'rènzì', wordClass: ['Vi'], meaningVi: 'học chữ, biết chữ', meaningEn: 'to learn characters', examples: [{ traditional: '他利用時間看電視認字。', simplified: '他利用时间看电视认字。', vietnamese: 'Anh tận dụng thời gian xem ti vi để học nhận mặt chữ.' }] },
    { id: 'L8-063', lessonId: 'L8', order: 27, group: 'vocab2', traditional: '烘焙', simplified: '烘焙', pinyin: 'hōngbèi', wordClass: ['V'], meaningVi: 'nướng bánh, làm bánh', meaningEn: 'to bake', examples: [{ traditional: '他想看懂日文烘焙書，去學日文。', simplified: '他想看懂日文烘焙书，去学日文。', vietnamese: 'Vì muốn đọc hiểu sách làm bánh tiếng Nhật, anh đi học tiếng Nhật.' }] },
    { id: 'L8-064', lessonId: 'L8', order: 28, group: 'vocab2', traditional: '學習', simplified: '学习', pinyin: 'xuéxí', wordClass: ['V'], meaningVi: 'học tập', meaningEn: 'to study', examples: [{ traditional: '因為工作的關係到日本學習。', simplified: '因为工作的关系到日本学习。', vietnamese: 'Vì công việc anh sang Nhật học tập.' }] },
    { id: 'L8-065', lessonId: 'L8', order: 29, group: 'vocab2', traditional: '技術', simplified: '技术', pinyin: 'jìshù', wordClass: ['N'], meaningVi: 'kỹ thuật', meaningEn: 'skills', examples: [{ traditional: '烘焙麵包不但是專業技術，也是一門藝術。', simplified: '烘焙面包不但是专业技术，也是一门艺术。', vietnamese: 'Làm bánh không chỉ là kỹ thuật chuyên môn, mà còn là một môn nghệ thuật.' }] },
    { id: 'L8-066', lessonId: 'L8', order: 30, group: 'vocab2', traditional: '藝術', simplified: '艺术', pinyin: 'yìshù', wordClass: ['N'], meaningVi: 'nghệ thuật', meaningEn: 'art', examples: [{ traditional: '烘焙麵包不但是專業技術，也是一門藝術。', simplified: '烘焙面包不但是专业技术，也是一门艺术。', vietnamese: 'Làm bánh không chỉ là kỹ thuật chuyên môn, mà còn là một môn nghệ thuật.' }] },
    { id: 'L8-067', lessonId: 'L8', order: 31, group: 'vocab2', traditional: '經過', simplified: '经过', pinyin: 'jīngguò', wordClass: ['Prep'], meaningVi: 'trải qua, sau khi', meaningEn: 'after', notes: 'Xem ngữ pháp VIII: 經過.', examples: [{ traditional: '吳寶春經過20多年的努力，終於拿到冠軍。', simplified: '吴宝春经过20多年的努力，终于拿到冠军。', vietnamese: 'Trải qua hơn 20 năm nỗ lực, Ngô Bảo Xuân cuối cùng giành được chức vô địch.' }] },
    { id: 'L8-068', lessonId: 'L8', order: 32, group: 'vocab2', traditional: '終於', simplified: '终于', pinyin: 'zhōngyú', wordClass: ['Adv'], meaningVi: 'cuối cùng', meaningEn: 'finally', examples: [{ traditional: '終於在2010年拿到世界麵包大賽冠軍。', simplified: '终于在2010年拿到世界面包大赛冠军。', vietnamese: 'Cuối cùng đã giành chức vô địch Cuộc thi bánh mì thế giới vào năm 2010.' }] },
    { id: 'L8-069', lessonId: 'L8', order: 33, group: 'vocab2', traditional: '億', simplified: '亿', pinyin: 'yì', wordClass: ['N'], meaningVi: '100 triệu (đơn vị)', meaningEn: '100 million', examples: [{ traditional: '一年能做兩億的生意。', simplified: '一年能做两亿的生意。', vietnamese: 'Một năm làm ăn được hai trăm triệu Đài tệ.' }] },
    { id: 'L8-070', lessonId: 'L8', order: 34, group: 'vocab2', traditional: '夢想', simplified: '梦想', pinyin: 'mèngxiǎng', wordClass: ['N'], meaningVi: 'ước mơ', meaningEn: 'dream, ideals (not during sleep)', examples: [{ traditional: '他的夢想是成為企業家。', simplified: '他的梦想是成为企业家。', vietnamese: 'Ước mơ của anh là trở thành doanh nhân.' }] },
    { id: 'L8-071', lessonId: 'L8', order: 35, group: 'vocab2', traditional: '成為', simplified: '成为', pinyin: 'chéngwéi', wordClass: ['Vp'], meaningVi: 'trở thành', meaningEn: 'to become', notes: 'Sách ghi loại từ Vpt (động từ quá trình có tân ngữ).', examples: [{ traditional: '他的夢想是成為企業家。', simplified: '他的梦想是成为企业家。', vietnamese: 'Ước mơ của anh là trở thành doanh nhân.' }] },
    { id: 'L8-072', lessonId: 'L8', order: 36, group: 'vocab2', traditional: '企業家', simplified: '企业家', pinyin: 'qìyèjiā', wordClass: ['N'], meaningVi: 'doanh nhân', meaningEn: 'entrepreneur', examples: [{ traditional: '他的夢想是成為企業家。', simplified: '他的梦想是成为企业家。', vietnamese: 'Ước mơ của anh là trở thành doanh nhân.' }] },
    { id: 'L8-073', lessonId: 'L8', order: 37, group: 'vocab2', traditional: '分店', simplified: '分店', pinyin: 'fēndiàn', wordClass: ['N'], meaningVi: 'chi nhánh', meaningEn: 'branch store, branch office', examples: [{ traditional: '能在亞洲各國開分店。', simplified: '能在亚洲各国开分店。', vietnamese: 'Có thể mở chi nhánh ở các nước châu Á.' }] },
    { id: 'L8-074', lessonId: 'L8', order: 38, group: 'vocab2', traditional: '原因', simplified: '原因', pinyin: 'yuányīn', wordClass: ['N'], meaningVi: 'nguyên nhân', meaningEn: 'reason', examples: [{ traditional: '新加坡大學也因為這個原因錄取了他。', simplified: '新加坡大学也因为这个原因录取了他。', vietnamese: 'Đại học Singapore cũng vì lý do này mà nhận anh vào học.' }] },
    { id: 'L8-075', lessonId: 'L8', order: 39, group: 'vocab2', traditional: '錄取', simplified: '录取', pinyin: 'lùqǔ', wordClass: ['V'], meaningVi: 'tuyển nhận, nhận vào', meaningEn: 'to accept (application), to admit', examples: [{ traditional: '新加坡大學也因為這個原因錄取了他。', simplified: '新加坡大学也因为这个原因录取了他。', vietnamese: 'Đại học Singapore cũng vì lý do này mà nhận anh vào học.' }] },
    { id: 'L8-076', lessonId: 'L8', order: 40, group: 'vocab2', traditional: '成功', simplified: '成功', pinyin: 'chénggōng', wordClass: ['Vs'], meaningVi: 'thành công', meaningEn: 'successful', examples: [{ traditional: '吳寶春成功的故事鼓勵了很多人做自己。', simplified: '吴宝春成功的故事鼓励了很多人做自己。', vietnamese: 'Câu chuyện thành công của Ngô Bảo Xuân đã khích lệ rất nhiều người sống là chính mình.' }] },
    { id: 'L8-077', lessonId: 'L8', order: 41, group: 'vocab2', traditional: '鼓勵', simplified: '鼓励', pinyin: 'gǔlì', wordClass: ['V'], meaningVi: 'khích lệ, động viên', meaningEn: 'to encourage', examples: [{ traditional: '吳寶春成功的故事鼓勵了很多人做自己。', simplified: '吴宝春成功的故事鼓励了很多人做自己。', vietnamese: 'Câu chuyện thành công của Ngô Bảo Xuân đã khích lệ rất nhiều người sống là chính mình.' }] },
    { id: 'L8-078', lessonId: 'L8', order: 42, group: 'vocab2', traditional: '世界麵包大賽', simplified: '世界面包大赛', pinyin: 'shìjiè miànbāo dàsài', wordClass: ['Other'], meaningVi: 'Cuộc thi bánh mì thế giới', meaningEn: 'The Bakery World Cup', examples: [{ traditional: '世界麵包大賽冠軍吳寶春。', simplified: '世界面包大赛冠军吴宝春。', vietnamese: 'Nhà vô địch Cuộc thi bánh mì thế giới Ngô Bảo Xuân.' }] },
    { id: 'L8-079', lessonId: 'L8', order: 43, group: 'vocab2', traditional: 'EMBA', simplified: 'EMBA', pinyin: 'EMBA (gāojí guǎnlǐ rényuán gōngshāng guǎnlǐ shuòshì)', wordClass: ['Other'], meaningVi: 'EMBA (thạc sĩ quản trị kinh doanh điều hành)', meaningEn: 'EMBA (Executive Master of Business Administration)', examples: [{ traditional: '吳寶春通過新加坡大學EMBA研究所的面試。', simplified: '吴宝春通过新加坡大学EMBA研究所的面试。', vietnamese: 'Ngô Bảo Xuân vượt qua vòng phỏng vấn chương trình thạc sĩ EMBA.' }] },
    { id: 'L8-080', lessonId: 'L8', order: 44, group: 'vocab2', traditional: '小時候', simplified: '小时候', pinyin: 'xiǎo shíhòu', wordClass: ['Other'], meaningVi: 'hồi nhỏ', meaningEn: "in one's childhood", examples: [{ traditional: '吳寶春小時候不了解讀書的重要。', simplified: '吴宝春小时候不了解读书的重要。', vietnamese: 'Hồi nhỏ Ngô Bảo Xuân không hiểu tầm quan trọng của việc học.' }] },
    { id: 'L8-081', lessonId: 'L8', order: 45, group: 'vocab2', traditional: '大開眼界', simplified: '大开眼界', pinyin: 'dàkāi yǎnjiè', wordClass: ['Other'], meaningVi: 'mở mang tầm mắt', meaningEn: "to have one's eyes opened", examples: [{ traditional: '到日本學習，讓他大開眼界。', simplified: '到日本学习，让他大开眼界。', vietnamese: 'Sang Nhật học tập khiến anh mở mang tầm mắt.' }] },
    { id: 'L8-082', lessonId: 'L8', order: 46, group: 'vocab2', traditional: 'X分之Y', simplified: 'X分之Y', pinyin: 'X fēn zhī Y', wordClass: ['Other'], meaningVi: 'mẫu câu chỉ phần trăm/phân số', meaningEn: 'pattern for indicating percentages or fractions', examples: [{ traditional: '是不是每個人都能做好百分之百的準備？', simplified: '是不是每个人都能做好百分之百的准备？', vietnamese: 'Liệu có phải ai cũng có thể chuẩn bị sẵn sàng một trăm phần trăm?' }] }
  ],

  grammar: [
    {
      id: 'L8-G1', lessonId: 'L8', order: 1, pattern: '不是…就是…',
      functionVi: 'Mẫu câu này, dùng theo nghĩa đen, diễn tả rằng một trong hai khả năng được nêu phải đúng, không có khả năng nào khác. Cũng có thể dùng để phóng đại khi mô tả một tình huống, thường nói ra khi bực mình.',
      functionEn: 'This construction, when used literally, indicates that one of two options offered must be true, and there are no other possibilities. It can also be used for hyperbole when describing a situation, often spoken out of frustration.',
      examples: [
        { traditional: '我新買的手機不是收不到訊號，就是自動關機，我非拿去門市退換不可。', simplified: '我新买的手机不是收不到讯号，就是自动关机，我非拿去门市退换不可。', english: "If my new cell phone isn't having problems getting a signal, it's shutting itself off. I'm going to take it back to the store and exchange it if it's the last thing I do.", vietnamese: 'Điện thoại mới mua của tôi không phải không bắt được sóng, thì cũng tự tắt máy, tôi nhất định phải đem ra cửa hàng đổi mới được.' },
        { traditional: '桌上這件外套我想不是敏萱的，就是雅婷的。', simplified: '桌上这件外套我想不是敏萱的，就是雅婷的。', english: "I think that the coat on the table is either Minxuan's or Yating's.", vietnamese: 'Chiếc áo khoác trên bàn tôi nghĩ không phải của Mẫn Huyên thì cũng của Nhã Đình.' },
        { traditional: '放假的時候，他不是上網玩遊戲，就是在家看漫畫，放鬆心情。', simplified: '放假的时候，他不是上网玩游戏，就是在家看漫画，放松心情。', english: "When he's on break, he's either online playing games or reading comic books to relax.", vietnamese: 'Lúc nghỉ, cậu ấy không lên mạng chơi game thì cũng ở nhà đọc truyện tranh để thư giãn.' },
        { traditional: '他整天不是抱怨工作太多，就是抱怨薪水太少，讓人聽得好煩。', simplified: '他整天不是抱怨工作太多，就是抱怨薪水太少，让人听得好烦。', english: "All day long, he's either complaining that he's overworked or underpaid. It's irritating to listen to.", vietnamese: 'Cậu ấy suốt ngày không than việc nhiều thì cũng than lương ít, nghe mà thấy phiền.' },
        { traditional: '暑假，他不是去打工，就是回家照顧爺爺，所以沒時間跟我們玩。', simplified: '暑假，他不是去打工，就是回家照顾爷爷，所以没时间跟我们玩。', english: "He didn't have any time to go out with us during summer vacation. He was either working or at home taking care of his grandfather.", vietnamese: 'Hè, cậu ấy không đi làm thêm thì cũng về nhà chăm ông, nên không có thời gian chơi với bọn mình.' }
      ],
      usageNotesVi: 'Mẫu "不是 A，就是 B" nêu hai khả năng duy nhất; dùng để diễn tả sự lặp đi lặp lại (phóng đại) cũng rất thông dụng trong khẩu ngữ, thường kèm cảm xúc than phiền.',
      exercises: [
        { id: 'L8-G1-EX1', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說小王要參加公職人員考試。', textWithBlanks: 'B：他整天___，怎麼考得上？', blanks: [{ index: 0, acceptedAnswers: ['不是打電玩，就是看球賽'] }], targetPattern: 'L8-G1' },
        { id: 'L8-G1-EX2', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小王怎麼又遲到了？真討厭。', textWithBlanks: 'B：你別生氣。我想___。', blanks: [{ index: 0, acceptedAnswers: ['他不是忘了時間，就是路上塞車了'] }], targetPattern: 'L8-G1' },
        { id: 'L8-G1-EX3', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這些豬肉餡兒的水餃樣子很特別，都是雅婷包的嗎？', textWithBlanks: 'B：不清楚。我想___。', blanks: [{ index: 0, acceptedAnswers: ['不是雅婷包的，就是她媽媽包的'] }], targetPattern: 'L8-G1' },
        { id: 'L8-G1-EX4', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：現在有些年輕人結婚以後，不想生孩子。你知道為什麼嗎？', textWithBlanks: 'B：我想___。', blanks: [{ index: 0, acceptedAnswers: ['不是擔心經濟壓力，就是想多享受兩個人的生活'] }], targetPattern: 'L8-G1' },
        { id: 'L8-G1-EX5', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：為什麼他最近看起來那麼沒有精神？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['他最近不是忙著準備考試，就是晚上睡不好，所以看起來沒有精神'] }], targetPattern: 'L8-G1' }
      ]
    },
    {
      id: 'L8-G2', lessonId: 'L8', order: 2, pattern: '算了',
      functionVi: 'Động từ mang tính thành ngữ 算了 diễn tả mong muốn của người nói là bỏ qua, không để ý đến một sự việc không hay nữa.',
      functionEn: 'Use of the idiomatic verb 算了 indicates the speaker\'s desire to disregard an unpleasant fact.',
      examples: [
        { traditional: '你不是要跟女朋友去聽五月天的演唱會嗎？怎麼還在這裡？\n氣死我了。她說要準備明天的報告，不去了。\n她不去算了，你不要生氣了。', simplified: '你不是要跟女朋友去听五月天的演唱会吗？怎么还在这里？\n气死我了。她说要准备明天的报告，不去了。\n她不去算了，你不要生气了。', english: "A: Aren't you going with your girlfriend to the May Day concert? Why are you still here?\nB: I'm so mad. She said she has to prepare a report for tomorrow, so she's not going.\nA: If she's not going then just forget about it. Don't be upset.", vietnamese: 'A: Cậu chẳng phải định đi nghe hòa nhạc Mayday với bạn gái à? Sao còn ở đây?\nB: Tức chết đi được. Cô ấy nói phải chuẩn bị báo cáo ngày mai, không đi nữa.\nA: Không đi thì thôi, cậu đừng giận nữa.' },
        { traditional: '妳昨天會計的考試，成績怎麼樣？\n真不好。算了，算了。今天不說這個。', simplified: '妳昨天会计的考试，成绩怎么样？\n真不好。算了，算了。今天不说这个。', english: 'A: How did you do on the accounting test yesterday?\nB: I did really poorly. Drop it. Let\'s not talk about it today.', vietnamese: 'A: Bài thi kế toán hôm qua cậu làm thế nào?\nB: Tệ lắm. Thôi, thôi. Hôm nay không nói chuyện này nữa.' },
        { traditional: '小王說他對唱歌沒興趣，晚上不去KTV了。\n那就算了。我自己去。', simplified: '小王说他对唱歌没兴趣，晚上不去KTV了。\n那就算了。我自己去。', english: "A: Xiao Wang says that he's not a big fan of singing. He's not going to go to KTV tonight.\nB: Then, forget it. I'll go myself.", vietnamese: 'A: Tiểu Vương nói cậu ấy không thích hát, tối nay không đi KTV nữa.\nB: Vậy thì thôi. Mình tự đi.' },
        { traditional: '沒想到我最喜歡的羊毛外套破了一個大洞。\n既然破了一個大洞，就丟了算了。', simplified: '没想到我最喜欢的羊毛外套破了一个大洞。\n既然破了一个大洞，就丢了算了。', english: "A: I had no idea that my favorite wool coat would get a big hole in it.\nB: Since it's got a big hole in it, just toss it and forget about it.", vietnamese: 'A: Không ngờ chiếc áo khoác len mình thích nhất lại bị thủng một lỗ to.\nB: Đã thủng lỗ to rồi thì vứt luôn đi.' },
        { traditional: '我告訴小明炸的東西對身體不好，不要常吃，他總是不聽。\n他不聽算了，你別難過了。', simplified: '我告诉小明炸的东西对身体不好，不要常吃，他总是不听。\n他不听算了，你别难过了。', english: "A: I told Xiaoming that fried food is bad for his health, he shouldn't eat it so often, but he never listens.\nB: If he doesn't want to listen then just forget it. Don't be upset about it.", vietnamese: 'A: Mình bảo Tiểu Minh đồ chiên không tốt cho sức khỏe, đừng ăn nhiều, cậu ấy cứ không nghe.\nB: Cậu ấy không nghe thì thôi, cậu đừng buồn nữa.' }
      ],
      usageNotesVi: '算了 có thể đứng ở đầu, giữa hoặc cuối câu — tính linh hoạt về vị trí này khá hiếm trong tiếng Trung hiện đại.',
      exercises: [
        { id: 'L8-G2-EX1', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：氣死了，我孩子又把手機弄壞了。', textWithBlanks: 'B：算了，別氣了，___。', blanks: [{ index: 0, acceptedAnswers: ['買新的就好了，生氣對身體不好'] }], targetPattern: 'L8-G2' },
        { id: 'L8-G2-EX2', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你不是說週末要去海邊曬太陽，怎麼不去了？', textWithBlanks: 'B：算了，___。', blanks: [{ index: 0, acceptedAnswers: ['天氣突然變了，不去也沒關係'] }], targetPattern: 'L8-G2' },
        { id: 'L8-G2-EX3', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：雖然念會計系比較容易找到工作，但是我一點興趣都沒有。', textWithBlanks: 'B：既然沒興趣，就___。', blanks: [{ index: 0, acceptedAnswers: ['算了，別勉強自己念不喜歡的科系'] }], targetPattern: 'L8-G2' },
        { id: 'L8-G2-EX4', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：去美國念書是難得的機會，妳怎麼不去呢？\nB：我是家裡的獨生女，恐怕爸媽捨不得我去那麼遠的地方。', textWithBlanks: 'A：要是妳父母捨不得妳去，就___。', blanks: [{ index: 0, acceptedAnswers: ['算了，那就別去了，以後還有別的機會'] }], targetPattern: 'L8-G2' },
        { id: 'L8-G2-EX5', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小陳說下星期有考試，所以今天晚上不能來和我們一起過中秋節。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['算了，中秋節我們改天再找時間一起過吧'] }], targetPattern: 'L8-G2' }
      ]
    },
    {
      id: 'L8-G3', lessonId: 'L8', order: 3, pattern: '這樣一來',
      functionVi: 'Người nói dùng mẫu câu này để nêu một hệ quả có thể xảy ra từ điều vừa được nói đến.',
      functionEn: 'The speaker uses this pattern to present a consequence that could result from the previous statement.',
      examples: [
        { traditional: '聽說陳平這個學期有好幾門課被當。\n這樣一來，他明年恐怕沒辦法畢業了。', simplified: '听说陈平这个学期有好几门课被当。\n这样一来，他明年恐怕没办法毕业了。', english: "A: I heard Chen Ping flunked a number of his classes this semester.\nB: That being the case, there's probably no way he'll be able to graduate next year.", vietnamese: 'A: Nghe nói học kỳ này Trần Bình bị rớt mấy môn.\nB: Vậy thì sang năm chắc cậu ấy không tốt nghiệp được rồi.' },
        { traditional: '我先生下星期要帶孩子去美國旅行一個月。\n真的啊。這樣一來，妳就不必天天做飯了。', simplified: '我先生下星期要带孩子去美国旅行一个月。\n真的啊。这样一来，妳就不必天天做饭了。', english: "A: Next week, my husband is taking the kids to the US for a one-month trip.\nB: Really? So I guess you don't have to cook every day.", vietnamese: 'A: Tuần sau chồng mình dẫn con đi Mỹ chơi một tháng.\nB: Thật à. Vậy thì cậu không cần nấu cơm hằng ngày nữa.' },
        { traditional: '電視新聞說這個週末有颱風要來。\n這樣一來，我們就不能去海邊玩了。', simplified: '电视新闻说这个周末有台风要来。\n这样一来，我们就不能去海边玩了。', english: "A: The news on TV said that a typhoon is coming this weekend.\nB: In that case, we can't go to the seaside.", vietnamese: 'A: Tin tức nói cuối tuần này có bão đến.\nB: Vậy thì bọn mình không đi biển chơi được rồi.' },
        { traditional: '媽媽建議讓弟弟下課以後去學游泳、書法跟網球。\n太好了。這樣一來，他就不會整天在家看電視、打電玩了。', simplified: '妈妈建议让弟弟下课以后去学游泳、书法跟网球。\n太好了。这样一来，他就不会整天在家看电视、打电玩了。', english: "A: Mom suggested having my kid brother go to swimming, calligraphy, and tennis classes after school.\nB: Great. That way, he won't be in the house all day watching TV and playing video games.", vietnamese: 'A: Mẹ đề nghị để em trai tan học xong đi học bơi, thư pháp với quần vợt.\nB: Tốt quá. Vậy thì em sẽ không ở nhà cả ngày xem ti vi, chơi điện tử nữa.' },
        { traditional: '最近三個星期，我住的城市幾乎天天下雨。而且新聞還說，下個禮拜雨還不會停。\n這樣一來，你的衣服、鞋子不是就都發霉了嗎？', simplified: '最近三个星期，我住的城市几乎天天下雨。而且新闻还说，下个礼拜雨还不会停。\n这样一来，你的衣服、鞋子不是就都发霉了吗？', english: "A: Over the past three weeks, it has rained almost every day in the city I live in. And the news says that it's not going to stop next week either.\nB: If that's the case, aren't your clothes and shoes going to mildew?", vietnamese: 'A: Ba tuần nay, thành phố mình sống gần như ngày nào cũng mưa. Mà tin tức còn nói tuần sau mưa vẫn chưa dứt.\nB: Vậy thì quần áo, giày dép của cậu chẳng phải đều mốc hết rồi sao?' }
      ],
      usageNotesVi: '這樣一來 thường mở đầu câu nói tiếp theo, dùng để suy ra kết quả logic hoặc hệ quả thực tế từ tình huống vừa nêu; gần nghĩa "vậy thì, như thế thì".',
      exercises: [
        { id: 'L8-G3-EX1', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小明的爸爸說，如果他要修輔系，就得自己付學費。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這樣一來，他就得自己打工賺學費了'] }], targetPattern: 'L8-G3' },
        { id: 'L8-G3-EX2', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：我打算今年暑假參加公職人員考試。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這樣一來，你暑假大概沒辦法打工了吧'] }], targetPattern: 'L8-G3' },
        { id: 'L8-G3-EX3', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說從這個學期起，成功的企業家不必參加筆試，只要通過口試就能上研究所。', textWithBlanks: 'B：這怎麼可以呢？這樣一來，___。', blanks: [{ index: 0, acceptedAnswers: ['認真準備考試的人不是太不公平了嗎'] }], targetPattern: 'L8-G3' },
        { id: 'L8-G3-EX4', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小王已經決定念服裝設計系，不念醫學系了。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這樣一來，他父母恐怕會更失望了'] }], targetPattern: 'L8-G3' },
        { id: 'L8-G3-EX5', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：爸爸答應我，下個月開始，每個月多給我兩千塊錢生活費。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這樣一來，你就可以多存一點錢了'] }], targetPattern: 'L8-G3' }
      ]
    },
    {
      id: 'L8-G4', lessonId: 'L8', order: 4, pattern: '早就…了',
      functionVi: 'Mẫu câu này nhấn mạnh (có phần phóng đại) một sự việc đã xảy ra từ lâu trong quá khứ.',
      functionEn: 'This construction presents an exaggerated reference to the time in the past that an event took place.',
      examples: [
        { traditional: '我只見過陳平幾次面，早就對他沒印象了。', simplified: '我只见过陈平几次面，早就对他没印象了。', english: "I only met Chen Ping a few times. I have long since forgotten everything about him.", vietnamese: 'Mình chỉ gặp Trần Bình vài lần, sớm đã chẳng còn ấn tượng gì về cậu ấy.' },
        { traditional: '五月天演唱會的票，我早就買了，你不必擔心。', simplified: '五月天演唱会的票，我早就买了，你不必担心。', english: "I bought Mayday concert tickets ages ago. No need to worry.", vietnamese: 'Vé hòa nhạc Mayday mình mua từ đời nào rồi, cậu không cần lo.' },
        { traditional: '那條路上早就沒有日本人留下來的木造房子了。我們還要去嗎？', simplified: '那条路上早就没有日本人留下来的木造房子了。我们还要去吗？', english: "It's been forever since there were any Japanese style wooden houses left on that street. Are we still going to go?", vietnamese: 'Con đường đó sớm đã không còn nhà gỗ người Nhật để lại nữa. Bọn mình còn đi không?' },
        { traditional: '你的平板電腦我早就修理好了，你怎麼不記得呢？', simplified: '你的平板电脑我早就修理好了，你怎么不记得呢？', english: "I fixed your tablet computer a long time ago. How is it you don't remember?", vietnamese: 'Máy tính bảng của cậu mình sửa xong từ lâu rồi, sao cậu không nhớ vậy?' },
        { traditional: '媽媽煮的水餃，早就被弟弟吃光了。你吃別的吧！', simplified: '妈妈煮的水饺，早就被弟弟吃光了。你吃别的吧！', english: "Little brother ate all the dumplings Mom made a long time ago. Go ahead and eat something else.", vietnamese: 'Sủi cảo mẹ nấu, em trai đã ăn sạch từ lâu rồi. Cậu ăn món khác đi!' }
      ],
      usageNotesVi: '早就…了 nhấn mạnh thời điểm xảy ra sự việc rất sớm so với hiện tại hoặc so với kỳ vọng của người nghe, mang sắc thái phóng đại nhẹ.',
      exercises: [
        { id: 'L8-G4-EX1', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小李住在台灣一年了，還沒拿到居留證嗎？', textWithBlanks: 'B：他___。', blanks: [{ index: 0, acceptedAnswers: ['早就拿到居留證了'] }], targetPattern: 'L8-G4' },
        { id: 'L8-G4-EX2', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你轉系的手續辦得怎麼樣？', textWithBlanks: 'B：沒想到轉系的手續那麼麻煩，我___。', blanks: [{ index: 0, acceptedAnswers: ['早就辦好了'] }], targetPattern: 'L8-G4' },
        { id: 'L8-G4-EX3', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你不是很喜歡王美美嗎？怎麼不追她？', textWithBlanks: 'B：追她的人這麼多，我___。', blanks: [{ index: 0, acceptedAnswers: ['早就不想追她了'] }], targetPattern: 'L8-G4' },
        { id: 'L8-G4-EX4', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你爺爺還在鄉下種水果嗎？', textWithBlanks: 'B：小農的利潤那麼低，我爺爺___。', blanks: [{ index: 0, acceptedAnswers: ['早就不種了'] }], targetPattern: 'L8-G4' },
        { id: 'L8-G4-EX5', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：王明跟他女朋友同居了好幾年了，怎麼不結婚呢？', textWithBlanks: 'B：誰說的。他們___，而且還生了一個孩子。', blanks: [{ index: 0, acceptedAnswers: ['早就結婚了'] }], targetPattern: 'L8-G4' }
      ]
    },
    {
      id: 'L8-G5', lessonId: 'L8', order: 5, pattern: '從…起',
      functionVi: 'Mẫu câu này xác định điểm bắt đầu của một sự việc.',
      functionEn: 'This pattern specifies the beginning point of an event.',
      examples: [
        { traditional: '學生總是說從明天起，我要好好地念書，不讓父母失望。', simplified: '学生总是说从明天起，我要好好地念书，不让父母失望。', english: 'Students always say, "I\'ll study hard starting tomorrow. I don\'t want my parents to be disappointed."', vietnamese: 'Học sinh luôn nói từ ngày mai, mình sẽ học hành chăm chỉ, không để bố mẹ thất vọng.' },
        { traditional: '那個語言中心規定從今年秋天起，申請獎學金的學生，成績要有85分。', simplified: '那个语言中心规定从今年秋天起，申请奖学金的学生，成绩要有85分。', english: 'The language center has stipulated that starting this fall, students applying for scholarships must have a grade average of at least 85.', vietnamese: 'Trung tâm ngôn ngữ đó quy định từ mùa thu năm nay, sinh viên xin học bổng điểm phải đạt 85.' },
        { traditional: '因為放暑假的關係，學校的圖書館從後天起，上午九點才開門。', simplified: '因为放暑假的关系，学校的图书馆从后天起，上午九点才开门。', english: "Due to summer vacation, starting tomorrow, the school library won't open until 9:00 in the morning.", vietnamese: 'Vì được nghỉ hè, thư viện trường từ ngày kia sẽ chín giờ sáng mới mở cửa.' },
        { traditional: '你弄錯了。百貨公司打折活動是從十月十號起，不是十月一號。', simplified: '你弄错了。百货公司打折活动是从十月十号起，不是十月一号。', english: "You've got it wrong. The department store sales start from October 10th, not from October 1st.", vietnamese: 'Cậu nhầm rồi. Đợt giảm giá của trung tâm thương mại là từ ngày mười tháng mười, không phải mùng một.' },
        { traditional: '那個展覽館從下星期一起到下個月三十一號，要舉行電腦展。', simplified: '那个展览馆从下星期一起到下个月三十一号，要举行电脑展。', english: 'That exhibition hall will be holding a computer exhibition starting next Monday, until the 31st of next month.', vietnamese: 'Trung tâm triển lãm đó từ thứ Hai tuần sau đến ngày 31 tháng sau sẽ tổ chức triển lãm máy tính.' }
      ],
      usageNotesVi: '從…起 mang tính văn viết, trang trọng hơn. Khẩu ngữ thường dùng 從…開始, ví dụ: 從明天開始，我不再吃炸的東西了。',
      exercises: [
        { id: 'L8-G5-EX1', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：她是什麼時候開始在餐廳打工的？', textWithBlanks: 'B：___，她就在餐廳打工了。', blanks: [{ index: 0, acceptedAnswers: ['從高中起'] }], targetPattern: 'L8-G5' },
        { id: 'L8-G5-EX2', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小王決定去日本念研究所了嗎？', textWithBlanks: 'B：是啊。他終於決定___去日本念三年的書。', blanks: [{ index: 0, acceptedAnswers: ['從明年起'] }], targetPattern: 'L8-G5' },
        { id: 'L8-G5-EX3', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你是什麼時候開始學做飯的？', textWithBlanks: 'B：___，就開始學做飯了。', blanks: [{ index: 0, acceptedAnswers: ['從上大學起'] }], targetPattern: 'L8-G5' },
        { id: 'L8-G5-EX4', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小美網球怎麼打得那麼好？', textWithBlanks: 'B：因為她___，就學打網球了。', blanks: [{ index: 0, acceptedAnswers: ['從五歲起'] }], targetPattern: 'L8-G5' },
        { id: 'L8-G5-EX5', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：玉真，妳這次的口頭報告做得不太好。', textWithBlanks: 'B：我知道了。___，我會認真一點。', blanks: [{ index: 0, acceptedAnswers: ['從下次起'] }], targetPattern: 'L8-G5' }
      ]
    },
    {
      id: 'L8-G6', lessonId: 'L8', order: 6, pattern: '卻',
      functionVi: 'Trong câu diễn tả sự việc trái với dự đoán, phó từ 卻 thường đứng trước cụm động từ ở mệnh đề thứ hai.',
      functionEn: 'In sentences indicating events that are contrary to expectation, the adverb 卻 frequently occurs before the verb phrase in the second clause.',
      examples: [
        { traditional: '他的成績不錯，可是卻沒通過研究所的面試。', simplified: '他的成绩不错，可是却没通过研究所的面试。', english: "His grades are good, but he didn't pass the interview for grad school. (Everyone expected him to pass.)", vietnamese: 'Thành tích anh ấy không tệ, nhưng lại không qua được vòng phỏng vấn cao học.' },
        { traditional: '在那家麵包店當學徒，雖然辛苦，卻讓他大開眼界。', simplified: '在那家面包店当学徒，虽然辛苦，却让他大开眼界。', english: 'He served as an apprentice in that bakery. It was tough, but it really opened his eyes.', vietnamese: 'Làm học việc ở tiệm bánh mì đó, tuy vất vả, nhưng lại khiến anh mở mang tầm mắt.' },
        { traditional: '我昨天買的外套，裡面破了一個洞，但是店員卻不讓我退換。', simplified: '我昨天买的外套，里面破了一个洞，但是店员却不让我退换。', english: "The coat I bought yesterday has a hole on the inside, but the store employee wouldn't let me exchange it.", vietnamese: 'Áo khoác mình mua hôm qua, bên trong rách một lỗ, nhưng nhân viên lại không cho đổi.' },
        { traditional: '早上出門的時候還出太陽，沒想到現在卻下起雨來了。', simplified: '早上出门的时候还出太阳，没想到现在却下起雨来了。', english: 'It was sunny when I left the house this morning. I never expected it would rain now.', vietnamese: 'Sáng ra khỏi nhà còn nắng, không ngờ giờ lại đổ mưa.' },
        { traditional: '那家小吃店雖然沒有招牌，生意卻好得不得了。', simplified: '那家小吃店虽然没有招牌，生意却好得不得了。', english: "That small eatery doesn't even have a sign, but its business is booming.", vietnamese: 'Quán ăn vặt đó tuy không có biển hiệu, nhưng buôn bán lại tốt kinh khủng.' }
      ],
      usageNotesVi: '卻 thường dùng cùng 可是、但是 hoặc 沒想到 để nhấn mạnh sự tương phản, bất ngờ.',
      exercises: [
        { id: 'L8-G6-EX1', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他想買的鞋子是有名的牌子，可是___。', blanks: [{ index: 0, acceptedAnswers: ['可是價錢卻貴得不得了'] }], targetPattern: 'L8-G6' },
        { id: 'L8-G6-EX2', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '我以為媽媽已經答應讓我養寵物了，沒想到___。', blanks: [{ index: 0, acceptedAnswers: ['沒想到她卻還是不同意'] }], targetPattern: 'L8-G6' },
        { id: 'L8-G6-EX3', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '李明雖然從小在農村長大，___。', blanks: [{ index: 0, acceptedAnswers: ['卻一點都不會種田'] }], targetPattern: 'L8-G6' },
        { id: 'L8-G6-EX4', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他穿的那件藍色外套，看起來跟我買的一模一樣，但是___。', blanks: [{ index: 0, acceptedAnswers: ['但是價錢卻便宜很多'] }], targetPattern: 'L8-G6' },
        { id: 'L8-G6-EX5', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '美真不但長得美，而且能力強，追她的人很多，她___。', blanks: [{ index: 0, acceptedAnswers: ['她卻一直不想結婚'] }], targetPattern: 'L8-G6' }
      ]
    },
    {
      id: 'L8-G7', lessonId: 'L8', order: 7, pattern: '因為…而…',
      functionVi: 'Phó từ 而 chỉ một hệ quả xuất phát từ nguyên nhân được nêu ở phần khác trong câu.',
      functionEn: 'The adverb 而 refers to a consequence resulting from a cause given elsewhere in the sentence.',
      examples: [
        { traditional: '我奶奶一個人住，因為怕孤單而養了兩隻狗。', simplified: '我奶奶一个人住，因为怕孤单而养了两只狗。', english: 'My grandma lives by herself. She\'s afraid of being alone, so she has two dogs.', vietnamese: 'Bà mình sống một mình, vì sợ cô đơn nên nuôi hai con chó.' },
        { traditional: '很多人因為想學道地的西班牙文而去西班牙。', simplified: '很多人因为想学道地的西班牙文而去西班牙。', english: 'Many people want to learn authentic Spanish, so they go to Spain.', vietnamese: 'Nhiều người vì muốn học tiếng Tây Ban Nha chuẩn mà sang Tây Ban Nha.' },
        { traditional: '那個小鎮因為今年芒果收成很好而打算舉行慶祝活動。', simplified: '那个小镇因为今年芒果收成很好而打算举行庆祝活动。', english: 'Because it had a good harvest this year, that town plans to put on some activities in celebration.', vietnamese: 'Thị trấn đó vì năm nay xoài được mùa nên định tổ chức hoạt động ăn mừng.' },
        { traditional: '她因為衣服、鞋子都發霉了而決定去買除濕機。', simplified: '她因为衣服、鞋子都发霉了而决定去买除湿机。', english: 'Because her clothes and shoes mildewed, she decided to go buy a dehumidifier.', vietnamese: 'Cô ấy vì quần áo, giày dép đều bị mốc nên quyết định đi mua máy hút ẩm.' },
        { traditional: '王小姐因為男朋友忘了送她生日禮物而氣得不想跟他說話。', simplified: '王小姐因为男朋友忘了送她生日礼物而气得不想跟他说话。', english: "Because her boyfriend forgot to give her a birthday present, Miss Wang is so angry that she doesn't want to talk to him.", vietnamese: 'Cô Vương vì bạn trai quên tặng quà sinh nhật nên giận đến mức không muốn nói chuyện với anh ta.' }
      ],
      usageNotesVi: 'Cấu trúc 因為…而… thường dùng trong văn viết hoặc các văn bản, bối cảnh trang trọng.',
      exercises: [
        { id: 'L8-G7-EX1', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他因為爺爺跌倒而___。', blanks: [{ index: 0, acceptedAnswers: ['他因為爺爺跌倒而擔心得睡不著覺'] }], targetPattern: 'L8-G7' },
        { id: 'L8-G7-EX2', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他因為想接近自然而___。', blanks: [{ index: 0, acceptedAnswers: ['他因為想接近自然而決定搬到鄉下住'] }], targetPattern: 'L8-G7' },
        { id: 'L8-G7-EX3', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '小陳今天因為上課不專心而___。', blanks: [{ index: 0, acceptedAnswers: ['小陳今天因為上課不專心而被老師罵了一頓'] }], targetPattern: 'L8-G7' },
        { id: 'L8-G7-EX4', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '何真真因為想減輕父母的負擔而打算___。', blanks: [{ index: 0, acceptedAnswers: ['何真真因為想減輕父母的負擔而打算一邊讀書一邊打工'] }], targetPattern: 'L8-G7' },
        { id: 'L8-G7-EX5', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '王老闆因為明美的口才好而___。', blanks: [{ index: 0, acceptedAnswers: ['王老闆因為明美的口才好而決定讓她負責銷售'] }], targetPattern: 'L8-G7' }
      ]
    },
    {
      id: 'L8-G8', lessonId: 'L8', order: 8, pattern: '經過',
      functionVi: '經過 ở cách dùng này là giới từ, mang nghĩa "sau khi, trải qua".',
      functionEn: "經過 in this usage is a preposition meaning 'after' or 'subsequent to'.",
      examples: [
        { traditional: '經過父母多次的說明，她才明白要成功非努力不可。', simplified: '经过父母多次的说明，她才明白要成功非努力不可。', english: "She didn't really understand that to succeed, you must work hard, until after her parents explained it to her numerous times.", vietnamese: 'Trải qua nhiều lần cha mẹ giải thích, cô ấy mới hiểu muốn thành công phải nỗ lực mới được.' },
        { traditional: '他的喉嚨經過多天的休息，最近好一點了。', simplified: '他的喉咙经过多天的休息，最近好一点了。', english: "After several days of rest, his throat has gotten a bit better.", vietnamese: 'Sau nhiều ngày nghỉ ngơi, cổ họng anh ấy gần đây đỡ hơn chút rồi.' },
        { traditional: '你並沒有經過學校的同意，怎麼可以使用體育館？', simplified: '你并没有经过学校的同意，怎么可以使用体育馆？', english: "You didn't receive permission from the school; thus, you should not be using the gymnasium.", vietnamese: 'Cậu đâu có được nhà trường đồng ý, sao có thể dùng nhà thi đấu được?' },
        { traditional: '我是經過兩年的準備，才考上公務員的。', simplified: '我是经过两年的准备，才考上公务员的。', english: 'I passed the civil service test only after two years of preparation.', vietnamese: 'Mình trải qua hai năm chuẩn bị mới thi đỗ công chức.' }
      ],
      usageNotesVi: '經過 ở nghĩa này theo sau bởi một danh từ hoặc một mệnh đề. 經過 cũng có thể là động từ nghĩa "đi qua một điểm nào đó", ví dụ: 從台北去高雄，要經過台南。"Từ Đài Bắc đi Cao Hùng, phải đi qua Đài Nam."',
      exercises: [
        { id: 'L8-G8-EX1', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：那件藍色外套不便宜，何雅婷怎麼就買了？（考慮）', textWithBlanks: 'B：___才買的。', blanks: [{ index: 0, acceptedAnswers: ['經過仔細考慮，'] }], targetPattern: 'L8-G8' },
        { id: 'L8-G8-EX2', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這份合約，你都看懂了嗎？（說明）', textWithBlanks: 'B：___，我終於懂了。', blanks: [{ index: 0, acceptedAnswers: ['經過老闆多次說明'] }], targetPattern: 'L8-G8' },
        { id: 'L8-G8-EX3', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你們班畢業旅行要去哪裡？決定了嗎？（討論）', textWithBlanks: 'B：___，我們決定去泰國四天。', blanks: [{ index: 0, acceptedAnswers: ['經過大家討論'] }], targetPattern: 'L8-G8' },
        { id: 'L8-G8-EX4', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小明的太極拳怎麼打得這麼好？（練習）', textWithBlanks: 'B：___，才打得這麼好的。', blanks: [{ index: 0, acceptedAnswers: ['經過好幾年的練習'] }], targetPattern: 'L8-G8' },
        { id: 'L8-G8-EX5', lessonId: 'L8', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你是怎麼見到王老闆的？（陳先生的安排）', textWithBlanks: 'B：我___，才見到王老闆的。', blanks: [{ index: 0, acceptedAnswers: ['經過陳先生的安排'] }], targetPattern: 'L8-G8' }
      ]
    }
  ],
  workbookExercises: [
    {
      id: 'L8-WB-pairs-1', lessonId: 'L8', section: 'pairs', type: 'matching',
      prompt: 'Ghép động từ với danh từ thường đi cùng (collocation).',
      pairs: [
        { left: '通過', right: '面試' },
        { left: '修', right: '學分' },
        { left: '舉行', right: '畢業展' },
        { left: '引起', right: '討論' },
        { left: '考上', right: '公職' },
        { left: '成為', right: '企業家' },
        { left: '利用', right: '時間' },
        { left: '改變', right: '制度' }
      ]
    },

    { id: 'L8-WB-fw-1', lessonId: 'L8', section: 'fill-write', type: 'fill-blank', textWithBlanks: '我的父母總是___(gǔlì)我做自己想做的事，他們不希望我老了以後才覺得___(yíhàn)。', blanks: [{ index: 0, acceptedAnswers: ['鼓勵'] }, { index: 1, acceptedAnswers: ['遺憾'] }] },
    { id: 'L8-WB-fw-2', lessonId: 'L8', section: 'fill-write', type: 'fill-blank', textWithBlanks: '我大學的時候學過法文，可是沒好好學，___(jīchǔ)不好，現在都忘了。', blanks: [{ index: 0, acceptedAnswers: ['基礎'] }] },
    { id: 'L8-WB-fw-3', lessonId: 'L8', section: 'fill-write', type: 'fill-blank', textWithBlanks: '我以為他一直都很順利，最近我才知道，___(qíshí)他小時候___(chī)過很多___(kǔ)。', blanks: [{ index: 0, acceptedAnswers: ['其實'] }, { index: 1, acceptedAnswers: ['吃'] }, { index: 2, acceptedAnswers: ['苦'] }] },
    { id: 'L8-WB-fw-4', lessonId: 'L8', section: 'fill-write', type: 'fill-blank', textWithBlanks: '這家公司的___(zhìdù)跟我們公司不太一樣，他們上班的時間比較有___(tánxìng)，不像我們公司，一定得九點到。', blanks: [{ index: 0, acceptedAnswers: ['制度'] }, { index: 1, acceptedAnswers: ['彈性'] }] },
    { id: 'L8-WB-fw-5', lessonId: 'L8', section: 'fill-write', type: 'fill-blank', textWithBlanks: '父母對他的___(qíwàng)很高，一直希望他念___(yīxué xì)。可是這不是他的興趣，他覺得自己快___(fēng)了。', blanks: [{ index: 0, acceptedAnswers: ['期望'] }, { index: 1, acceptedAnswers: ['醫學系'] }, { index: 2, acceptedAnswers: ['瘋'] }] },

    {
      id: 'L8-WB-fb-1', lessonId: 'L8', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền từ thích hợp vào đoạn văn về Messi (mỗi từ chỉ dùng 1 lần).',
      wordBank: ['成為', '藝術', '認真', '遺憾', '專心', '引起', '舉行', '出生', '卻', '窮', '技術', '冠軍'],
      textWithBlanks: '不管你喜歡不喜歡足球，你可能都聽過梅西（Lionel Andrés Messi Cuccittini）。\n\n梅西1.___在阿根廷（Argentina）。從小他的夢想就是2.___一個有名的足球員。他每天都很3.___地練習。可是他11歲的時候，醫生發現他如果不接受治療就不會再長高了。他家很4.___，付不起醫藥費，可是他的父親不放棄，到處找人幫忙。梅西的故事5.___了巴塞隆納（Barcelona）球團的注意，答應幫他付醫藥費，讓他可以6.___踢球。\n\n梅西踢球的7.___很好。許多人認為梅西踢球是一種8.___。2014年在巴西（Brazil）9.___的世界杯（World Cup），梅西拿到了金球獎，可是他10.___一點都不開心，因為阿根廷沒拿到11.___，讓他覺得很12.___。',
      blanks: [
        { index: 1, acceptedAnswers: ['出生'] },
        { index: 2, acceptedAnswers: ['成為'] },
        { index: 3, acceptedAnswers: ['認真'] },
        { index: 4, acceptedAnswers: ['窮'] },
        { index: 5, acceptedAnswers: ['引起'] },
        { index: 6, acceptedAnswers: ['專心'] },
        { index: 7, acceptedAnswers: ['技術'] },
        { index: 8, acceptedAnswers: ['藝術'] },
        { index: 9, acceptedAnswers: ['舉行'] },
        { index: 10, acceptedAnswers: ['卻'] },
        { index: 11, acceptedAnswers: ['冠軍'] },
        { index: 12, acceptedAnswers: ['遺憾'] }
      ]
    },

    {
      id: 'L8-WB-read-a1', lessonId: 'L8', section: 'reading', type: 'multiple-choice',
      prompt: '小美：你怎麼了？看起來不太有精神。\n阿德：我昨天熬夜看球賽。\n小美：期末考不是快到了嗎？你居然有時間看球賽？',
      question: '小美的意思是？',
      options: [{ id: 'a', text: '球賽不值得阿德熬夜看。' }, { id: 'b', text: '期末考還沒到，阿德當然有時間看球賽。' }, { id: 'c', text: '期末考快到了，阿德不應該熬夜看球賽。' }],
      correctOptionId: 'c',
      explanationVi: '"期末考不是快到了嗎？你居然有時間看球賽？" 暗示阿德不應該在這個時候熬夜看球賽。'
    },
    {
      id: 'L8-WB-read-a2', lessonId: 'L8', section: 'reading', type: 'multiple-choice',
      prompt: '小美：我父母到現在都很遺憾，因為我沒去念醫學系，而是選了藝術系。\n阿德：我真羨慕妳。我為了不讓父母失望，選了沒有興趣的科系。',
      question: '根據這個對話，哪一個對？',
      options: [{ id: 'a', text: '阿德跟小美的父母都希望孩子念醫學系。' }, { id: 'b', text: '因為父母的關係，阿德選了他不喜歡的科系。' }, { id: 'c', text: '阿德羨慕小美沒去念藝術系。' }],
      correctOptionId: 'b',
      explanationVi: '"我為了不讓父母失望，選了沒有興趣的科系"，說明阿德是因為父母才選了自己不喜歡的科系。'
    },
    {
      id: 'L8-WB-read-a3', lessonId: 'L8', section: 'reading', type: 'multiple-choice',
      prompt: '小美：小王跟他太太經過多年的努力，終於有孩子了。\n阿德：是啊，聽說他太太吃了很多苦，才有孩子的。',
      question: '根據這個對話，哪一個對？',
      options: [{ id: 'a', text: '小王跟太太一結婚就有孩子了。' }, { id: 'b', text: '小王的太太吃了很多苦的食物，終於有了孩子。' }, { id: 'c', text: '小王跟太太好不容易有了孩子。' }],
      correctOptionId: 'c',
      explanationVi: '"經過多年的努力，終於有孩子了"、"吃了很多苦，才有孩子的"，表示過程很不容易。'
    },

    {
      id: 'L8-WB-read-b1', lessonId: 'L8', section: 'reading', type: 'multiple-choice',
      prompt: '阿德大學四年級的時候參加公職考試。他運氣很好，一次就考上了。對許多大學畢業生來說，公職是最理想的工作。因為當公務員，不但工作穩定，薪水也比一般公司高得多。因此，雖然錄取率只有百分之一左右，每年還是吸引了許多人去考。\n\n阿德一考上就決定放棄學位，立刻去工作。可是他去辦休學手續的時候，教授跟他說，還是應該先把課修完，拿到學位，再去工作比較好。因為我們的社會非常重視學歷，如果有一天，他不想當公務員了，還可以有其他的選擇。',
      question: '一般公司的薪水並不比公務員低。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '文章說公務員"薪水也比一般公司高得多"，表示一般公司的薪水其實比公務員低。'
    },
    {
      id: 'L8-WB-read-b2', lessonId: 'L8', section: 'reading', type: 'multiple-choice',
      prompt: '阿德大學四年級的時候參加公職考試。他運氣很好，一次就考上了。對許多大學畢業生來說，公職是最理想的工作。因為當公務員，不但工作穩定，薪水也比一般公司高得多。因此，雖然錄取率只有百分之一左右，每年還是吸引了許多人去考。\n\n阿德一考上就決定放棄學位，立刻去工作。可是他去辦休學手續的時候，教授跟他說，還是應該先把課修完，拿到學位，再去工作比較好。因為我們的社會非常重視學歷，如果有一天，他不想當公務員了，還可以有其他的選擇。',
      question: '阿德好不容易才考上公職的。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '文章說"他運氣很好，一次就考上了"，並不是好不容易才考上的。'
    },
    {
      id: 'L8-WB-read-b3', lessonId: 'L8', section: 'reading', type: 'multiple-choice',
      prompt: '阿德大學四年級的時候參加公職考試。他運氣很好，一次就考上了。對許多大學畢業生來說，公職是最理想的工作。因為當公務員，不但工作穩定，薪水也比一般公司高得多。因此，雖然錄取率只有百分之一左右，每年還是吸引了許多人去考。\n\n阿德一考上就決定放棄學位，立刻去工作。可是他去辦休學手續的時候，教授跟他說，還是應該先把課修完，拿到學位，再去工作比較好。因為我們的社會非常重視學歷，如果有一天，他不想當公務員了，還可以有其他的選擇。',
      question: '教授同意阿德的決定。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '教授勸阿德"還是應該先把課修完，拿到學位，再去工作比較好"，並不同意他立刻放棄學位去工作。'
    },
    {
      id: 'L8-WB-read-b4', lessonId: 'L8', section: 'reading', type: 'multiple-choice',
      prompt: '阿德大學四年級的時候參加公職考試。他運氣很好，一次就考上了。對許多大學畢業生來說，公職是最理想的工作。因為當公務員，不但工作穩定，薪水也比一般公司高得多。因此，雖然錄取率只有百分之一左右，每年還是吸引了許多人去考。\n\n阿德一考上就決定放棄學位，立刻去工作。可是他去辦休學手續的時候，教授跟他說，還是應該先把課修完，拿到學位，再去工作比較好。因為我們的社會非常重視學歷，如果有一天，他不想當公務員了，還可以有其他的選擇。',
      question: '根據文章內容，當公務員不一定要有大學學位。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '阿德大四（學位還沒拿到）就已經考上公職了，可見考上公職本身不需要先拿到大學學位；教授是勸他為了將來多一個選擇，才建議他把學位拿完。'
    },
    {
      id: 'L8-WB-read-b5', lessonId: 'L8', section: 'reading', type: 'multiple-choice',
      prompt: '阿德大學四年級的時候參加公職考試。他運氣很好，一次就考上了。對許多大學畢業生來說，公職是最理想的工作。因為當公務員，不但工作穩定，薪水也比一般公司高得多。因此，雖然錄取率只有百分之一左右，每年還是吸引了許多人去考。\n\n阿德一考上就決定放棄學位，立刻去工作。可是他去辦休學手續的時候，教授跟他說，還是應該先把課修完，拿到學位，再去工作比較好。因為我們的社會非常重視學歷，如果有一天，他不想當公務員了，還可以有其他的選擇。',
      question: '阿德已經修完所有的學分了。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '阿德是去辦"休學"手續，教授勸他"先把課修完"，可見他當時還沒修完所有學分。'
    },

    { id: 'L8-WB-dc-1', lessonId: 'L8', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L8-G1', turns: [{ speaker: 'A', text: '小明每天花那麼多時間上網。他都在做什麼？', isBlank: false }, { speaker: 'B', text: '（不是…就是…）', isBlank: true }], sampleAnswer: '他不是在打電玩，就是在看影片，很少在做功課。' },
    { id: 'L8-WB-dc-2', lessonId: 'L8', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L8-G5', turns: [{ speaker: 'A', text: '你們的畢業展什麼時候舉行？', isBlank: false }, { speaker: 'B', text: '（從…起）', isBlank: true }], sampleAnswer: '從下個月五號起，一連舉行三天。' },
    { id: 'L8-WB-dc-3', lessonId: 'L8', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L8-G8', turns: [{ speaker: 'A', text: '他的生意一開始就這麼好嗎？', isBlank: false }, { speaker: 'B', text: '（經過…才…）', isBlank: true }], sampleAnswer: '不是，經過好幾年的努力，生意才慢慢變好的。' },
    { id: 'L8-WB-dc-4', lessonId: 'L8', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L8-G7', turns: [{ speaker: 'A', text: '他為什麼要轉系？', isBlank: false }, { speaker: 'B', text: '（因為…而…）', isBlank: true }], sampleAnswer: '他因為對原來的科系沒興趣而決定轉系。' },
    { id: 'L8-WB-dc-5', lessonId: 'L8', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L8-G3', turns: [{ speaker: 'A', text: '聽說現在想考公職的大學生越來越多。', isBlank: false }, { speaker: 'B', text: '（這樣一來）', isBlank: true }], sampleAnswer: '這樣一來，公職考試的錄取率恐怕會變得更低。' },
    { id: 'L8-WB-dc-6', lessonId: 'L8', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L8-G6', turns: [{ speaker: 'A', text: '小張每天不是打電玩，就是看電影，從來沒看見他把書拿出來過。沒想到他居然考得那麼好。', isBlank: false }, { speaker: 'B', text: '（卻）', isBlank: true }], sampleAnswer: '唉，我每天熬夜念書，成績卻沒有他好，真不公平。' },

    {
      id: 'L8-WB-comp-1', lessonId: 'L8', section: 'composition', type: 'composition',
      topicVi: 'Ở nước bạn, mọi người nhìn nhận thế nào về việc "làm công chức"? Mọi người có cho rằng công chức là một công việc tốt không? Còn bạn thì sao? Bạn có muốn thi công chức không? Hãy nói lên suy nghĩ của bạn.',
      requiredWords: ['L8-008', 'L8-010', 'L8-013', 'L8-026', 'L8-048', 'L8-050', 'L8-052', 'L8-053'],
      requiredPatterns: ['L8-G1', 'L8-G2', 'L8-G3', 'L8-G4'],
      minLength: 200, maxLength: 250
    },
    {
      id: 'L8-WB-comp-2', lessonId: 'L8', section: 'composition', type: 'composition',
      topicVi: 'Hãy kể một chuyện khiến bạn cảm thấy tiếc nuối.',
      requiredWords: ['L8-021', 'L8-022', 'L8-024', 'L8-027', 'L8-028', 'L8-059', 'L8-060', 'L8-076'],
      requiredPatterns: ['L8-G5', 'L8-G6', 'L8-G7', 'L8-G8'],
      minLength: 200, maxLength: 250
    }
  ]
}
