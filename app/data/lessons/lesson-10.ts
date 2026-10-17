import type { Lesson } from '../../../types/lesson'

export const lesson10: Lesson = {
  id: 'L10',
  number: 10,
  titleTraditional: '我住院了',
  titleSimplified: '我住院了',
  titlePinyin: 'Wǒ zhùyuàn le',
  titleVi: 'Tôi nhập viện rồi',
  status: 'available',

  dialogues: [
    [
      { speaker: '', traditional: '（李文彥走過來）', simplified: '（李文彦走过来）', pinyin: '(Lǐ Wényàn zǒu guòlái)', english: '(Li Wenyan walks over)', vietnamese: '(Lý Văn Ngạn đi tới)' },
      { speaker: '羅珊蒂', traditional: '怎麼回事？你的手怎麼了？臉也受傷了。', simplified: '怎么回事？你的手怎么了？脸也受伤了。', pinyin: 'Zěnme huíshì? Nǐ de shǒu zěnme le? Liǎn yě shòushāng le.', english: "What happened? What happened to your hand? Your face is also injured.", vietnamese: 'Chuyện gì vậy? Tay cậu sao thế? Mặt cũng bị thương nữa.' },
      { speaker: '李文彥', traditional: '我出車禍了。我上個禮拜騎腳踏車來學校的路上被一輛車撞了。', simplified: '我出车祸了。我上个礼拜骑脚踏车来学校的路上被一辆车撞了。', pinyin: 'Wǒ chū chēhuò le. Wǒ shàng ge lǐbài qí jiǎotàchē lái xuéxiào de lùshàng bèi yí liàng chē zhuàng le.', english: "I was in an accident. Last week, when I was riding my bicycle on my way to school, I was hit by a car.", vietnamese: 'Mình gặp tai nạn xe rồi. Tuần trước trên đường đạp xe đến trường mình bị một chiếc xe tông.' },
      { speaker: '羅珊蒂', traditional: '你一定是為了趕時間，不遵守交通規則。', simplified: '你一定是为了赶时间，不遵守交通规则。', pinyin: 'Nǐ yídìng shì wèile gǎn shíjiān, bù zūnshǒu jiāotōng guīzé.', english: 'You must have been in a hurry and not following traffic regulations.', vietnamese: 'Chắc chắn cậu vội thời gian nên không tuân thủ luật giao thông rồi.' },
      { speaker: '李文彥', traditional: '哪裡是我的錯。我過馬路的時候，有一輛右轉車不讓我，把我撞倒了。我躺在地上，痛得起不來。', simplified: '哪里是我的错。我过马路的时候，有一辆右转车不让我，把我撞倒了。我躺在地上，痛得起不来。', pinyin: "Nǎlǐ shì wǒ de cuò. Wǒ guò mǎlù de shíhòu, yǒu yí liàng yòuzhuǎn chē bú ràng wǒ, bǎ wǒ zhuàng dǎo le. Wǒ tǎng zài dìshàng, tòng de qǐ bù lái.", english: "It wasn't my fault! When I was crossing the street, a car turning right didn't yield for me and knocked me down. I lay on the ground in so much pain that I couldn't get up.", vietnamese: 'Đâu phải lỗi của mình. Lúc mình băng qua đường, có một chiếc xe rẽ phải không nhường mình, tông mình ngã. Mình nằm trên đất, đau đến không đứng dậy nổi.' },
      { speaker: '羅珊蒂', traditional: '好可怕！當時有沒有人幫你？誰送你去醫院的？', simplified: '好可怕！当时有没有人帮你？谁送你去医院的？', pinyin: 'Hǎo kěpà! Dāngshí yǒu méiyǒu rén bāng nǐ? Shéi sòng nǐ qù yīyuàn de?', english: "That's terrible! Did anybody help you? Who took you to the hospital?", vietnamese: 'Đáng sợ quá! Lúc đó có ai giúp cậu không? Ai đưa cậu đến bệnh viện vậy?' },
      { speaker: '李文彥', traditional: '撞到我的人打電話報警。救護車馬上把我送到急診室去了。', simplified: '撞到我的人打电话报警。救护车马上把我送到急诊室去了。', pinyin: 'Zhuàng dào wǒ de rén dǎ diànhuà bàojǐng. Jiùhùchē mǎshàng bǎ wǒ sòng dào jízhěnshì qù le.', english: 'The person who hit me called the police. An ambulance took me to the emergency room right away.', vietnamese: 'Người tông mình gọi điện báo cảnh sát. Xe cứu thương đưa mình đến phòng cấp cứu ngay.' },
      { speaker: '陳敏萱', traditional: '你的傷嚴重嗎？（看著李文彥的手）是不是骨折了？', simplified: '你的伤严重吗？（看着李文彦的手）是不是骨折了？', pinyin: 'Nǐ de shāng yánzhòng ma? (Kànzhe Lǐ Wényàn de shǒu) Shì bú shì gǔzhé le?', english: "Were you hurt bad? (looking at Li Wenyan's hand) Is it broken?", vietnamese: 'Vết thương cậu nặng không? (nhìn tay Lý Văn Ngạn) Có phải gãy xương không?' },
      { speaker: '李文彥', traditional: '是啊，我一進急診室，醫生就讓我去照X光。', simplified: '是啊，我一进急诊室，医生就让我去照X光。', pinyin: 'Shì a, wǒ yí jìn jízhěnshì, yīshēng jiù ràng wǒ qù zhào X guāng.', english: 'Yes, the doctors sent me for X-Rays as soon as I got to the ER.', vietnamese: 'Ừ, vừa vào phòng cấp cứu bác sĩ đã cho mình đi chụp X-quang.' },
      { speaker: '陳敏萱', traditional: '後來呢？', simplified: '后来呢？', pinyin: 'Hòulái ne?', english: 'And then?', vietnamese: 'Sau đó thì sao?' },
      { speaker: '李文彥', traditional: '醫生看了片子，要我住院開刀。我住院住了五天呢。', simplified: '医生看了片子，要我住院开刀。我住院住了五天呢。', pinyin: 'Yīshēng kàn le piànzi, yào wǒ zhùyuàn kāidāo. Wǒ zhùyuàn zhù le wǔ tiān ne.', english: 'After looking at the X-ray, the doctor wanted me to stay in the hospital for an operation. I was hospitalized for five days.', vietnamese: 'Bác sĩ xem phim rồi, bảo mình nhập viện mổ. Mình nằm viện mất năm ngày đấy.' },
      { speaker: '羅珊蒂', traditional: '我聽說大醫院的急診室總是擠滿了病人。如果情況不是那麼緊急的話，有時候要等幾天才等得到病床，真的嗎？', simplified: '我听说大医院的急诊室总是挤满了病人。如果情况不是那么紧急的话，有时候要等几天才等得到病床，真的吗？', pinyin: "Wǒ tīngshuō dà yīyuàn de jízhěnshì zǒngshì jǐ mǎn le bìngrén. Rúguǒ qíngkuàng bú shì nàme jǐnjí dehuà, yǒu shíhòu yào děng jǐ tiān cái děng de dào bìngchuáng, zhēn de ma?", english: "I've heard that ERs at large hospitals are always packed with patients. If a patient's situation isn't all that urgent, sometimes you have to wait a few days for a hospital bed. Is that true?", vietnamese: 'Mình nghe nói phòng cấp cứu bệnh viện lớn lúc nào cũng chật kín bệnh nhân. Nếu tình trạng không khẩn cấp lắm thì có khi phải đợi mấy ngày mới có giường bệnh, có thật không?' },
      { speaker: '李文彥', traditional: '是啊，我那個時候痛得要命，醫生先給我打止痛針。可是他說還有更緊急的病人，讓我等一等。最快要到第二天才能動手術。', simplified: '是啊，我那个时候痛得要命，医生先给我打止痛针。可是他说还有更紧急的病人，让我等一等。最快要到第二天才能动手术。', pinyin: 'Shì a, wǒ nàge shíhòu tòng de yàomìng, yīshēng xiān gěi wǒ dǎ zhǐtòng zhēn. Kěshì tā shuō hái yǒu gèng jǐnjí de bìngrén, ràng wǒ děng yì děng. Zuì kuài yào dào dì-èr tiān cái néng dòng shǒushù.', english: 'Yes. I was in terrible pain at the time. The doctor gave me a shot for the pain, but he said that he had to tend to other more urgent patients for now and I had to wait. The earliest he could perform the surgery was the next day.', vietnamese: 'Đúng vậy, lúc đó mình đau chết đi được, bác sĩ cho mình tiêm thuốc giảm đau trước. Nhưng ông ấy nói còn có bệnh nhân khẩn cấp hơn, bảo mình đợi chút. Nhanh nhất cũng phải đến ngày hôm sau mới mổ được.' },
      { speaker: '陳敏萱', traditional: '出車禍的事，你家人知道嗎？', simplified: '出车祸的事，你家人知道吗？', pinyin: 'Chū chēhuò de shì, nǐ jiārén zhīdào ma?', english: 'Do your parents know about your accident?', vietnamese: 'Chuyện gặp tai nạn, người nhà cậu biết không?' },
      { speaker: '李文彥', traditional: '警察幫我打電話給我阿姨。她一聽說要開刀，緊張得一直問醫生，有沒有危險，以後動作會不會受到影響。', simplified: '警察帮我打电话给我阿姨。她一听说要开刀，紧张得一直问医生，有没有危险，以后动作会不会受到影响。', pinyin: 'Jǐngchá bāng wǒ dǎ diànhuà gěi wǒ āyí. Tā yì tīngshuō yào kāidāo, jǐnzhāng de yìzhí wèn yīshēng, yǒu méiyǒu wéixiǎn, yǐhòu dòngzuò huì bú huì shòudào yǐngxiǎng.', english: 'The police called my aunt for me. As soon as she heard that I had to have surgery, she was so anxious that she kept asking the doctor, is it serious? Will my movement be affected?', vietnamese: 'Cảnh sát gọi điện cho dì mình giúp. Vừa nghe nói phải mổ, dì căng thẳng cứ hỏi bác sĩ mãi, có nguy hiểm không, sau này cử động có bị ảnh hưởng không.' },
      { speaker: '羅珊蒂', traditional: '醫生怎麼說？', simplified: '医生怎么说？', pinyin: 'Yīshēng zěnme shuō?', english: 'What did the doctor say?', vietnamese: 'Bác sĩ nói sao?' },
      { speaker: '李文彥', traditional: '醫生說這不算大手術，可是開刀多少會有一些風險。至於動作會不會受到影響，得看受傷的部位。最好的情況大概可以恢復八成到九成。', simplified: '医生说这不算大手术，可是开刀多少会有一些风险。至于动作会不会受到影响，得看受伤的部位。最好的情况大概可以恢复八成到九成。', pinyin: 'Yīshēng shuō zhè bú suàn dà shǒushù, kěshì kāidāo duōshǎo huì yǒu yìxiē fēngxiǎn. Zhìyú dòngzuò huì bú huì shòudào yǐngxiǎng, děi kàn shòushāng de bùwèi. Zuì hǎo de qíngkuàng dàgài kěyǐ huīfù bā chéng dào jiǔ chéng.', english: "The doctor said that it wasn't considered a major operation, but that there is always some degree of risk with surgery. As to whether my movement would be affected, that would depend on where the injury is located. In the best case scenario I will recover 80 to 90 percent.", vietnamese: 'Bác sĩ nói đây không tính là ca mổ lớn, nhưng mổ thì ít nhiều cũng có rủi ro. Còn về việc cử động có bị ảnh hưởng không thì phải xem vị trí bị thương. Tình huống tốt nhất có thể hồi phục được khoảng tám đến chín thành.' },
      { speaker: '羅珊蒂', traditional: '你現在覺得怎麼樣了？', simplified: '你现在觉得怎么样了？', pinyin: 'Nǐ xiànzài juéde zěnmeyàng le?', english: 'How do you feel now?', vietnamese: 'Bây giờ cậu thấy thế nào rồi?' },
      { speaker: '李文彥', traditional: '我還好，不怎麼痛了。可是很不方便，連穿衣服都要別人幫忙。只好搬到阿姨家去住一段時間。', simplified: '我还好，不怎么痛了。可是很不方便，连穿衣服都要别人帮忙。只好搬到阿姨家去住一段时间。', pinyin: "Wǒ hái hǎo, bù zěnme tòng le. Kěshì hěn bù fāngbiàn, lián chuān yīfú dōu yào biérén bāngmáng. Zhǐhǎo bān dào āyí jiā qù zhù yí duàn shíjiān.", english: "I'm okay. It doesn't hurt so much, but it's very inconvenient. I even need other people's help to get dressed. I had no choice but to move into my aunt's house for a while.", vietnamese: 'Mình ổn, không đau mấy nữa. Nhưng bất tiện lắm, đến cả mặc quần áo cũng phải nhờ người khác giúp. Đành phải dọn đến nhà dì ở một thời gian.' },
      { speaker: '陳敏萱', traditional: '你在阿姨家還習慣嗎？', simplified: '你在阿姨家还习惯吗？', pinyin: 'Nǐ zài āyí jiā hái xíguàn ma?', english: "How is it going living in your aunt's home?", vietnamese: 'Cậu ở nhà dì có quen không?' },
      { speaker: '李文彥', traditional: '我跟阿姨很親，她像媽媽一樣地照顧我，每天都煮魚湯給我喝。你看我現在除了手不太方便以外，不是都很好嗎？', simplified: '我跟阿姨很亲，她像妈妈一样地照顾我，每天都煮鱼汤给我喝。你看我现在除了手不太方便以外，不是都很好吗？', pinyin: "Wǒ gēn āyí hěn qīn, tā xiàng māma yíyàng de zhàogù wǒ, měitiān dōu zhǔ yútāng gěi wǒ hē. Nǐ kàn wǒ xiànzài chúle shǒu bú tài fāngbiàn yǐwài, bú shì dōu hěn hǎo ma?", english: "I'm very close to my aunt. She takes care of me as if she were my mom. She cooks fish soup for me to drink every day. Look, except for my arm not being completely usable, everything else is fine, right?", vietnamese: 'Mình với dì rất thân, dì chăm sóc mình như mẹ vậy, ngày nào cũng nấu canh cá cho mình uống. Cậu xem, mình bây giờ ngoài tay hơi bất tiện ra, chẳng phải đều ổn cả sao?' },
      { speaker: '陳敏萱', traditional: '喝魚湯？你阿姨為什麼讓你每天喝魚湯？', simplified: '喝鱼汤？你阿姨为什么让你每天喝鱼汤？', pinyin: 'Hē yútāng? Nǐ āyí wèishénme ràng nǐ měitiān hē yútāng?', english: 'Drink fish soup? Why does your aunt have you drink fish soup every day?', vietnamese: 'Uống canh cá? Sao dì cậu lại bắt cậu uống canh cá mỗi ngày?' },
      { speaker: '李文彥', traditional: '阿姨說多喝魚湯，傷口會恢復得比較快。哎呀，我應該要走了。我得去看醫生。明天見。', simplified: '阿姨说多喝鱼汤，伤口会恢复得比较快。哎呀，我应该要走了。我得去看医生。明天见。', pinyin: 'Āyí shuō duō hē yútāng, shāngkǒu huì huīfù de bǐjiào kuài. Āiya, wǒ yīnggāi yào zǒu le. Wǒ děi qù kàn yīshēng. Míngtiān jiàn.', english: 'My aunt says having lots of fish soup will help the injury heal quicker. Yikes! I gotta go. I have to go see the doctor. See you tomorrow.', vietnamese: 'Dì nói uống nhiều canh cá, vết thương sẽ mau lành hơn. Ấy chà, mình phải đi rồi. Mình phải đi khám bác sĩ. Mai gặp lại.' }
    ]
  ],

  shortReading: {
    traditional:
      '醫病還是醫美\n\n　　何雅婷的香港朋友愛林聽說台灣的微整型技術在亞洲是數一數二的，而且價錢又合理，因此她趁休假到台灣來做微整型。有許多像愛林這樣的外國人利用假期來台灣做醫美手術。他們希望假期結束以後，能變得更迷人，在職場上更有競爭力。\n\n　　根據調查，百分之六十一的人認為整型除了可以增加自信，還可以改善職場的人際關係。另外，研究也發現，外表好看的人收入比外表普通的人多百分之十到十五。因為這樣，這幾年醫美成為很大的商機，一年有好幾百億的產值，而且一直在增加。也因此，全台灣44,000多位醫生，其中有12,000多位從事醫美。\n\n　　醫生的工作是醫治病人，社會地位一向很高，但是現在為什麼有這麼多的醫生選擇去做一般人認為不需要太多專業技術的微整型？主要原因有兩個：一個是在一般的醫院工作辛苦，待遇又不高，另外一個是社會環境改變了。\n\n　　就拿公立醫院外科醫生來說，每星期工作時間超過一百個小時，但是薪水只有十萬塊。可是當微整型醫生，每星期只要工作四十五個小時，薪水卻是兩、三倍。另一方面是價值觀的問題。以前醫生受人尊敬，可是現在的病人動不動就告醫生；平均每天最少有一位醫生被告；醫療糾紛也給醫生帶來很大的壓力。\n\n　　很多人擔心，我們的醫療品質會不會因為那麼多外科醫生去從事整型工作而受到影響？可是如果醫生的工作環境和待遇不能改善，我們怎麼能怪他們選擇醫美。再說，醫美也是幫助人找回自信，開始新生活的好方法，不是嗎？',
    simplified:
      '医病还是医美\n\n　　何雅婷的香港朋友爱林听说台湾的微整型技术在亚洲是数一数二的，而且价钱又合理，因此她趁休假到台湾来做微整型。有许多像爱林这样的外国人利用假期来台湾做医美手术。他们希望假期结束以后，能变得更迷人，在职场上更有竞争力。\n\n　　根据调查，百分之六十一的人认为整型除了可以增加自信，还可以改善职场的人际关系。另外，研究也发现，外表好看的人收入比外表普通的人多百分之十到十五。因为这样，这几年医美成为很大的商机，一年有好几百亿的产值，而且一直在增加。也因此，全台湾44,000多位医生，其中有12,000多位从事医美。\n\n　　医生的工作是医治病人，社会地位一向很高，但是现在为什么有这么多的医生选择去做一般人认为不需要太多专业技术的微整型？主要原因有两个：一个是在一般的医院工作辛苦，待遇又不高，另外一个是社会环境改变了。\n\n　　就拿公立医院外科医生来说，每星期工作时间超过一百个小时，但是薪水只有十万块。可是当微整型医生，每星期只要工作四十五个小时，薪水却是两、三倍。另一方面是价值观的问题。以前医生受人尊敬，可是现在的病人动不动就告医生；平均每天最少有一位医生被告；医疗纠纷也给医生带来很大的压力。\n\n　　很多人担心，我们的医疗品质会不会因为那么多外科医生去从事整型工作而受到影响？可是如果医生的工作环境和待遇不能改善，我们怎么能怪他们选择医美。再说，医美也是帮助人找回自信，开始新生活的好方法，不是吗？',
    vietnamese:
      'Chữa bệnh hay làm đẹp\n\nÁi Lâm, bạn Hồng Kông của Hà Nhã Đình, nghe nói kỹ thuật thẩm mỹ nội khoa của Đài Loan thuộc hàng đầu châu Á, mà giá cả lại hợp lý, nên nhân kỳ nghỉ cô đến Đài Loan làm thẩm mỹ. Có nhiều người nước ngoài giống Ái Lâm tận dụng kỳ nghỉ đến Đài Loan làm phẫu thuật thẩm mỹ y khoa. Họ mong sau khi kỳ nghỉ kết thúc, có thể trở nên quyến rũ hơn, có sức cạnh tranh hơn trong công việc.\n\nTheo khảo sát, 61% người cho rằng phẫu thuật thẩm mỹ ngoài việc tăng sự tự tin, còn có thể cải thiện quan hệ giữa người với người trong công việc. Ngoài ra, nghiên cứu cũng phát hiện, thu nhập của người có ngoại hình ưa nhìn cao hơn người ngoại hình bình thường từ 10% đến 15%. Vì vậy, mấy năm nay thẩm mỹ y khoa trở thành cơ hội kinh doanh rất lớn, một năm có giá trị sản xuất lên đến mấy trăm tỷ, mà còn tiếp tục tăng. Cũng vì thế, toàn Đài Loan có hơn 44.000 bác sĩ, trong đó có hơn 12.000 người làm trong lĩnh vực thẩm mỹ y khoa.\n\nCông việc của bác sĩ là chữa trị cho bệnh nhân, địa vị xã hội luôn rất cao, nhưng tại sao hiện nay lại có nhiều bác sĩ đến vậy chọn đi làm phẫu thuật thẩm mỹ nhỏ mà người ta thường nghĩ không cần quá nhiều kỹ thuật chuyên môn? Nguyên nhân chính có hai: một là làm việc ở bệnh viện thông thường vất vả, đãi ngộ lại không cao, hai là môi trường xã hội đã thay đổi.\n\nLấy bác sĩ khoa ngoại ở bệnh viện công làm ví dụ, mỗi tuần thời gian làm việc vượt quá một trăm tiếng, nhưng lương chỉ có mười vạn đồng. Nhưng làm bác sĩ thẩm mỹ nhỏ, mỗi tuần chỉ cần làm bốn mươi lăm tiếng, lương lại gấp hai, ba lần. Một mặt khác là vấn đề giá trị quan. Trước đây bác sĩ được người ta tôn kính, nhưng bệnh nhân hiện nay động một tí là kiện bác sĩ; bình quân mỗi ngày ít nhất có một bác sĩ bị kiện; tranh chấp y tế cũng mang lại áp lực rất lớn cho bác sĩ.\n\nRất nhiều người lo lắng, liệu chất lượng y tế của chúng ta có bị ảnh hưởng vì có quá nhiều bác sĩ khoa ngoại chuyển sang làm công việc thẩm mỹ hay không? Nhưng nếu môi trường làm việc và đãi ngộ của bác sĩ không thể cải thiện, chúng ta làm sao có thể trách họ chọn thẩm mỹ y khoa. Hơn nữa, thẩm mỹ y khoa cũng là cách tốt để giúp người ta tìm lại sự tự tin, bắt đầu cuộc sống mới, chẳng phải vậy sao?'
  },

  phrases: [
    { phraseTraditional: '微整型', phraseSimplified: '微整型', pinyin: 'wéi zhěngxíng', meaningVi: 'phẫu thuật thẩm mỹ nhỏ, chỉnh hình nhẹ' },
    { phraseTraditional: '數一數二', phraseSimplified: '数一数二', pinyin: 'shǔyī shǔ\'èr', meaningVi: 'đứng đầu, hàng đầu' },
    { phraseTraditional: '人際關係', phraseSimplified: '人际关系', pinyin: 'rénjì guānxì', meaningVi: 'quan hệ giữa người với người' },
    { phraseTraditional: '動不動就', phraseSimplified: '动不动就', pinyin: 'dòng bú dòng jiù', meaningVi: 'động một tí là, hễ tí là' },
    { phraseTraditional: '找回', phraseSimplified: '找回', pinyin: 'zhǎo huí', meaningVi: 'tìm lại được' },
    { phraseTraditional: '出車禍', phraseSimplified: '出车祸', pinyin: 'chū chēhuò', meaningVi: 'gặp tai nạn xe' },
    { phraseTraditional: '趕時間', phraseSimplified: '赶时间', pinyin: 'gǎn shíjiān', meaningVi: 'vội thời gian, gấp gáp' },
    { phraseTraditional: '撞倒', phraseSimplified: '撞倒', pinyin: 'zhuàng dǎo', meaningVi: 'tông ngã' },
    { phraseTraditional: '救護車', phraseSimplified: '救护车', pinyin: 'jiùhùchē', meaningVi: 'xe cứu thương' },
    { phraseTraditional: '照X光', phraseSimplified: '照X光', pinyin: 'zhào X guāng', meaningVi: 'chụp X-quang' },
    { phraseTraditional: '動手術', phraseSimplified: '动手术', pinyin: 'dòng shǒushù', meaningVi: 'tiến hành phẫu thuật' },
    { phraseTraditional: '痛得要命', phraseSimplified: '痛得要命', pinyin: 'tòng de yàomìng', meaningVi: 'đau chết đi được' },
    { phraseTraditional: '打止痛針', phraseSimplified: '打止痛针', pinyin: 'dǎ zhǐtòng zhēn', meaningVi: 'tiêm thuốc giảm đau' },
    { phraseTraditional: '像媽媽一樣地照顧', phraseSimplified: '像妈妈一样地照顾', pinyin: 'xiàng māma yíyàng de zhàogù', meaningVi: 'chăm sóc như mẹ' },
    { phraseTraditional: '找回自信', phraseSimplified: '找回自信', pinyin: 'zhǎo huí zìxìn', meaningVi: 'tìm lại sự tự tin' }
  ],

  vocab: [
    { id: 'L10-001', lessonId: 'L10', order: 1, group: 'vocab1', traditional: '住院', simplified: '住院', pinyin: 'zhùyuàn', wordClass: ['V-sep'], meaningVi: 'nhập viện, nằm viện', meaningEn: 'to stay in a hospital, be hospitalized', tags: ['suc-khoe'], examples: [{ traditional: '醫生看了片子，要我住院開刀。', simplified: '医生看了片子，要我住院开刀。', vietnamese: 'Bác sĩ xem phim rồi, bảo mình nhập viện mổ.' }] },
    { id: 'L10-002', lessonId: 'L10', order: 2, group: 'vocab1', traditional: '臉', simplified: '脸', pinyin: 'liǎn', wordClass: ['N'], meaningVi: 'mặt', meaningEn: 'face', examples: [{ traditional: '你的手怎麼了？臉也受傷了。', simplified: '你的手怎么了？脸也受伤了。', vietnamese: 'Tay cậu sao thế? Mặt cũng bị thương nữa.' }] },
    { id: 'L10-003', lessonId: 'L10', order: 3, group: 'vocab1', traditional: '受傷', simplified: '受伤', pinyin: 'shòushāng', wordClass: ['Vp-sep'], meaningVi: 'bị thương', meaningEn: 'to be injured', tags: ['suc-khoe'], examples: [{ traditional: '臉也受傷了。', simplified: '脸也受伤了。', vietnamese: 'Mặt cũng bị thương nữa.' }] },
    { id: 'L10-004', lessonId: 'L10', order: 4, group: 'vocab1', traditional: '撞', simplified: '撞', pinyin: 'zhuàng', wordClass: ['V'], meaningVi: 'va chạm, đâm', meaningEn: 'to hit, collide', examples: [{ traditional: '我上個禮拜騎腳踏車來學校的路上被一輛車撞了。', simplified: '我上个礼拜骑脚踏车来学校的路上被一辆车撞了。', vietnamese: 'Tuần trước trên đường đạp xe đến trường mình bị một chiếc xe tông.' }] },
    { id: 'L10-005', lessonId: 'L10', order: 5, group: 'vocab1', traditional: '遵守', simplified: '遵守', pinyin: 'zūnshǒu', wordClass: ['V'], meaningVi: 'tuân thủ', meaningEn: 'to obey, to follow, comply with', examples: [{ traditional: '你一定是為了趕時間，不遵守交通規則。', simplified: '你一定是为了赶时间，不遵守交通规则。', vietnamese: 'Chắc chắn cậu vội thời gian nên không tuân thủ luật giao thông rồi.' }] },
    { id: 'L10-006', lessonId: 'L10', order: 6, group: 'vocab1', traditional: '規則', simplified: '规则', pinyin: 'guīzé', wordClass: ['N'], meaningVi: 'quy tắc, quy định', meaningEn: 'rules, regulations', examples: [{ traditional: '不遵守交通規則。', simplified: '不遵守交通规则。', vietnamese: 'Không tuân thủ luật giao thông.' }] },
    { id: 'L10-007', lessonId: 'L10', order: 7, group: 'vocab1', traditional: '報警', simplified: '报警', pinyin: 'bàojǐng', wordClass: ['V-sep'], meaningVi: 'báo cảnh sát', meaningEn: 'to report to (or call) the police', examples: [{ traditional: '撞到我的人打電話報警。', simplified: '撞到我的人打电话报警。', vietnamese: 'Người tông mình gọi điện báo cảnh sát.' }] },
    { id: 'L10-008', lessonId: 'L10', order: 8, group: 'vocab1', traditional: '急診室', simplified: '急诊室', pinyin: 'jízhěnshì', wordClass: ['N'], meaningVi: 'phòng cấp cứu', meaningEn: 'emergency room', tags: ['suc-khoe'], examples: [{ traditional: '救護車馬上把我送到急診室去了。', simplified: '救护车马上把我送到急诊室去了。', vietnamese: 'Xe cứu thương đưa mình đến phòng cấp cứu ngay.' }] },
    { id: 'L10-009', lessonId: 'L10', order: 9, group: 'vocab1', traditional: '傷', simplified: '伤', pinyin: 'shāng', wordClass: ['N'], meaningVi: 'vết thương', meaningEn: 'injury', tags: ['suc-khoe'], examples: [{ traditional: '你的傷嚴重嗎？', simplified: '你的伤严重吗？', vietnamese: 'Vết thương cậu nặng không?' }] },
    { id: 'L10-010', lessonId: 'L10', order: 10, group: 'vocab1', traditional: '骨折', simplified: '骨折', pinyin: 'gǔzhé', wordClass: ['Vp'], meaningVi: 'gãy xương', meaningEn: 'to fracture, break a bone', tags: ['suc-khoe'], examples: [{ traditional: '是不是骨折了？', simplified: '是不是骨折了？', vietnamese: 'Có phải gãy xương không?' }] },
    { id: 'L10-011', lessonId: 'L10', order: 11, group: 'vocab1', traditional: '片子', simplified: '片子', pinyin: 'piànzi', wordClass: ['N'], meaningVi: 'phim (X-quang)', meaningEn: '(X-ray) film', examples: [{ traditional: '醫生看了片子，要我住院開刀。', simplified: '医生看了片子，要我住院开刀。', vietnamese: 'Bác sĩ xem phim rồi, bảo mình nhập viện mổ.' }] },
    { id: 'L10-012', lessonId: 'L10', order: 12, group: 'vocab1', traditional: '開刀', simplified: '开刀', pinyin: 'kāidāo', wordClass: ['V-sep'], meaningVi: 'mổ, phẫu thuật', meaningEn: 'to have surgery', tags: ['suc-khoe'], examples: [{ traditional: '醫生看了片子，要我住院開刀。', simplified: '医生看了片子，要我住院开刀。', vietnamese: 'Bác sĩ xem phim rồi, bảo mình nhập viện mổ.' }] },
    { id: 'L10-013', lessonId: 'L10', order: 13, group: 'vocab1', traditional: '病人', simplified: '病人', pinyin: 'bìngrén', wordClass: ['N'], meaningVi: 'bệnh nhân', meaningEn: 'patient', tags: ['suc-khoe'], examples: [{ traditional: '大醫院的急診室總是擠滿了病人。', simplified: '大医院的急诊室总是挤满了病人。', vietnamese: 'Phòng cấp cứu bệnh viện lớn lúc nào cũng chật kín bệnh nhân.' }] },
    { id: 'L10-014', lessonId: 'L10', order: 14, group: 'vocab1', traditional: '情況', simplified: '情况', pinyin: 'qíngkuàng', wordClass: ['N'], meaningVi: 'tình hình, tình trạng', meaningEn: 'situation', examples: [{ traditional: '如果情況不是那麼緊急的話，有時候要等幾天才等得到病床。', simplified: '如果情况不是那么紧急的话，有时候要等几天才等得到病床。', vietnamese: 'Nếu tình trạng không khẩn cấp lắm thì có khi phải đợi mấy ngày mới có giường bệnh.' }] },
    { id: 'L10-015', lessonId: 'L10', order: 15, group: 'vocab1', traditional: '緊急', simplified: '紧急', pinyin: 'jǐnjí', wordClass: ['Vs'], meaningVi: 'khẩn cấp', meaningEn: 'urgent', tags: ['suc-khoe'], examples: [{ traditional: '還有更緊急的病人，讓我等一等。', simplified: '还有更紧急的病人，让我等一等。', vietnamese: 'Còn có bệnh nhân khẩn cấp hơn, bảo mình đợi chút.' }] },
    { id: 'L10-016', lessonId: 'L10', order: 16, group: 'vocab1', traditional: '病床', simplified: '病床', pinyin: 'bìngchuáng', wordClass: ['N'], meaningVi: 'giường bệnh', meaningEn: 'hospital bed', tags: ['suc-khoe'], examples: [{ traditional: '有時候要等幾天才等得到病床。', simplified: '有时候要等几天才等得到病床。', vietnamese: 'Có khi phải đợi mấy ngày mới có giường bệnh.' }] },
    { id: 'L10-017', lessonId: 'L10', order: 17, group: 'vocab1', traditional: '要命', simplified: '要命', pinyin: 'yàomìng', wordClass: ['Vs'], meaningVi: 'chết đi được, kinh khủng', meaningEn: 'murderous, horrible', examples: [{ traditional: '我那個時候痛得要命。', simplified: '我那个时候痛得要命。', vietnamese: 'Lúc đó mình đau chết đi được.' }] },
    { id: 'L10-018', lessonId: 'L10', order: 18, group: 'vocab1', traditional: '打針', simplified: '打针', pinyin: 'dǎzhēn', wordClass: ['V-sep'], meaningVi: 'tiêm, chích', meaningEn: 'to inject, give a shot', tags: ['suc-khoe'], examples: [{ traditional: '醫生先給我打止痛針。', simplified: '医生先给我打止痛针。', vietnamese: 'Bác sĩ cho mình tiêm thuốc giảm đau trước.' }] },
    { id: 'L10-019', lessonId: 'L10', order: 19, group: 'vocab1', traditional: '止痛', simplified: '止痛', pinyin: 'zhǐtòng', wordClass: ['Vi'], meaningVi: 'giảm đau', meaningEn: 'to kill pain (lit. stop pain)', tags: ['suc-khoe'], examples: [{ traditional: '醫生先給我打止痛針。', simplified: '医生先给我打止痛针。', vietnamese: 'Bác sĩ cho mình tiêm thuốc giảm đau trước.' }] },
    { id: 'L10-020', lessonId: 'L10', order: 20, group: 'vocab1', traditional: '手術', simplified: '手术', pinyin: 'shǒushù', wordClass: ['N'], meaningVi: 'ca phẫu thuật', meaningEn: 'operation, surgery', tags: ['suc-khoe'], examples: [{ traditional: '最快要到第二天才能動手術。', simplified: '最快要到第二天才能动手术。', vietnamese: 'Nhanh nhất cũng phải đến ngày hôm sau mới mổ được.' }] },
    { id: 'L10-021', lessonId: 'L10', order: 21, group: 'vocab1', traditional: '警察', simplified: '警察', pinyin: 'jǐngchá', wordClass: ['N'], meaningVi: 'cảnh sát', meaningEn: 'police', examples: [{ traditional: '警察幫我打電話給我阿姨。', simplified: '警察帮我打电话给我阿姨。', vietnamese: 'Cảnh sát gọi điện cho dì mình giúp.' }] },
    { id: 'L10-022', lessonId: 'L10', order: 22, group: 'vocab1', traditional: '危險', simplified: '危险', pinyin: 'wéixiǎn', wordClass: ['N'], meaningVi: 'nguy hiểm', meaningEn: 'danger', examples: [{ traditional: '緊張得一直問醫生，有沒有危險。', simplified: '紧张得一直问医生，有没有危险。', vietnamese: 'Căng thẳng cứ hỏi bác sĩ mãi, có nguy hiểm không.' }] },
    { id: 'L10-023', lessonId: 'L10', order: 23, group: 'vocab1', traditional: '至於', simplified: '至于', pinyin: 'zhìyú', wordClass: ['Ptc'], meaningVi: 'còn về, đối với', meaningEn: 'as to, regarding', notes: 'Xem ngữ pháp I: 至於…', examples: [{ traditional: '至於動作會不會受到影響，得看受傷的部位。', simplified: '至于动作会不会受到影响，得看受伤的部位。', vietnamese: 'Còn về việc cử động có bị ảnh hưởng không thì phải xem vị trí bị thương.' }] },
    { id: 'L10-024', lessonId: 'L10', order: 24, group: 'vocab1', traditional: '部位', simplified: '部位', pinyin: 'bùwèi', wordClass: ['N'], meaningVi: 'vị trí (bộ phận cơ thể)', meaningEn: '(body) part, location', tags: ['suc-khoe'], examples: [{ traditional: '得看受傷的部位。', simplified: '得看受伤的部位。', vietnamese: 'Phải xem vị trí bị thương.' }] },
    { id: 'L10-025', lessonId: 'L10', order: 25, group: 'vocab1', traditional: '恢復', simplified: '恢复', pinyin: 'huīfù', wordClass: ['Vp'], meaningVi: 'hồi phục', meaningEn: 'to recover', tags: ['suc-khoe'], examples: [{ traditional: '最好的情況大概可以恢復八成到九成。', simplified: '最好的情况大概可以恢复八成到九成。', vietnamese: 'Tình huống tốt nhất có thể hồi phục được khoảng tám đến chín thành.' }] },
    { id: 'L10-026', lessonId: 'L10', order: 26, group: 'vocab1', traditional: '傷口', simplified: '伤口', pinyin: 'shāngkǒu', wordClass: ['N'], meaningVi: 'vết thương', meaningEn: 'wound', tags: ['suc-khoe'], examples: [{ traditional: '多喝魚湯，傷口會恢復得比較快。', simplified: '多喝鱼汤，伤口会恢复得比较快。', vietnamese: 'Uống nhiều canh cá, vết thương sẽ mau lành hơn.' }] },
    { id: 'L10-027', lessonId: 'L10', order: 27, group: 'vocab1', traditional: '哎呀', simplified: '哎呀', pinyin: 'āiya', wordClass: ['Ptc'], meaningVi: 'ôi, ấy chà', meaningEn: 'interjection for realization of something important, oh no, yikes', examples: [{ traditional: '哎呀，我應該要走了。', simplified: '哎呀，我应该要走了。', vietnamese: 'Ấy chà, mình phải đi rồi.' }] },
    { id: 'L10-028', lessonId: 'L10', order: 28, group: 'vocab1', traditional: '出車禍', simplified: '出车祸', pinyin: 'chū chēhuò', wordClass: ['Other'], meaningVi: 'gặp tai nạn xe', meaningEn: 'to have an automobile accident', examples: [{ traditional: '我出車禍了。', simplified: '我出车祸了。', vietnamese: 'Mình gặp tai nạn xe rồi.' }] },
    { id: 'L10-029', lessonId: 'L10', order: 29, group: 'vocab1', traditional: '趕時間', simplified: '赶时间', pinyin: 'gǎn shíjiān', wordClass: ['Other'], meaningVi: 'vội thời gian, gấp gáp', meaningEn: 'to be in a hurry', examples: [{ traditional: '你一定是為了趕時間，不遵守交通規則。', simplified: '你一定是为了赶时间，不遵守交通规则。', vietnamese: 'Chắc chắn cậu vội thời gian nên không tuân thủ luật giao thông rồi.' }] },
    { id: 'L10-030', lessonId: 'L10', order: 30, group: 'vocab1', traditional: '撞倒', simplified: '撞倒', pinyin: 'zhuàng dǎo', wordClass: ['Other'], meaningVi: 'tông ngã', meaningEn: 'to knock down, knock over', examples: [{ traditional: '有一輛右轉車不讓我，把我撞倒了。', simplified: '有一辆右转车不让我，把我撞倒了。', vietnamese: 'Có một chiếc xe rẽ phải không nhường mình, tông mình ngã.' }] },
    { id: 'L10-031', lessonId: 'L10', order: 31, group: 'vocab1', traditional: '救護車', simplified: '救护车', pinyin: 'jiùhùchē', wordClass: ['Other'], meaningVi: 'xe cứu thương', meaningEn: 'ambulance', tags: ['suc-khoe'], examples: [{ traditional: '救護車馬上把我送到急診室去了。', simplified: '救护车马上把我送到急诊室去了。', vietnamese: 'Xe cứu thương đưa mình đến phòng cấp cứu ngay.' }] },
    { id: 'L10-032', lessonId: 'L10', order: 32, group: 'vocab1', traditional: '照X光', simplified: '照X光', pinyin: 'zhào X guāng', wordClass: ['Other'], meaningVi: 'chụp X-quang', meaningEn: 'to take an X-ray', tags: ['suc-khoe'], examples: [{ traditional: '我一進急診室，醫生就讓我去照X光。', simplified: '我一进急诊室，医生就让我去照X光。', vietnamese: 'Vừa vào phòng cấp cứu bác sĩ đã cho mình đi chụp X-quang.' }] },
    { id: 'L10-033', lessonId: 'L10', order: 33, group: 'vocab1', traditional: '動手術', simplified: '动手术', pinyin: 'dòng shǒushù', wordClass: ['Other'], meaningVi: 'tiến hành phẫu thuật', meaningEn: 'to have/undergo a surgery', tags: ['suc-khoe'], examples: [{ traditional: '最快要到第二天才能動手術。', simplified: '最快要到第二天才能动手术。', vietnamese: 'Nhanh nhất cũng phải đến ngày hôm sau mới mổ được.' }] },

    { id: 'L10-034', lessonId: 'L10', order: 1, group: 'vocab2', traditional: '醫美', simplified: '医美', pinyin: 'yīměi', wordClass: ['N'], meaningVi: 'thẩm mỹ y khoa', meaningEn: 'cosmetic surgery', tags: ['suc-khoe'], examples: [{ traditional: '這幾年醫美成為很大的商機。', simplified: '这几年医美成为很大的商机。', vietnamese: 'Mấy năm nay thẩm mỹ y khoa trở thành cơ hội kinh doanh rất lớn.' }] },
    { id: 'L10-035', lessonId: 'L10', order: 2, group: 'vocab2', traditional: '合理', simplified: '合理', pinyin: 'hélǐ', wordClass: ['Vs'], meaningVi: 'hợp lý', meaningEn: 'reasonable', examples: [{ traditional: '台灣的微整型技術好，價錢又合理。', simplified: '台湾的微整型技术好，价钱又合理。', vietnamese: 'Kỹ thuật thẩm mỹ của Đài Loan tốt, giá cả lại hợp lý.' }] },
    { id: 'L10-036', lessonId: 'L10', order: 3, group: 'vocab2', traditional: '休假', simplified: '休假', pinyin: 'xiūjià', wordClass: ['V-sep'], meaningVi: 'nghỉ phép', meaningEn: 'to take time off', examples: [{ traditional: '她趁休假到台灣來做微整型。', simplified: '她趁休假到台湾来做微整型。', vietnamese: 'Nhân kỳ nghỉ cô đến Đài Loan làm thẩm mỹ.' }] },
    { id: 'L10-037', lessonId: 'L10', order: 4, group: 'vocab2', traditional: '迷人', simplified: '迷人', pinyin: 'mírén', wordClass: ['Vs'], meaningVi: 'quyến rũ', meaningEn: 'charming, attractive', examples: [{ traditional: '他們希望能變得更迷人。', simplified: '他们希望能变得更迷人。', vietnamese: 'Họ mong có thể trở nên quyến rũ hơn.' }] },
    { id: 'L10-038', lessonId: 'L10', order: 5, group: 'vocab2', traditional: '職場', simplified: '职场', pinyin: 'zhíchǎng', wordClass: ['N'], meaningVi: 'nơi làm việc', meaningEn: 'workplace', examples: [{ traditional: '在職場上更有競爭力。', simplified: '在职场上更有竞争力。', vietnamese: 'Có sức cạnh tranh hơn trong công việc.' }] },
    { id: 'L10-039', lessonId: 'L10', order: 6, group: 'vocab2', traditional: '競爭力', simplified: '竞争力', pinyin: 'jìngzhēnglì', wordClass: ['N'], meaningVi: 'năng lực cạnh tranh', meaningEn: 'competitive edge', examples: [{ traditional: '在職場上更有競爭力。', simplified: '在职场上更有竞争力。', vietnamese: 'Có sức cạnh tranh hơn trong công việc.' }] },
    { id: 'L10-040', lessonId: 'L10', order: 7, group: 'vocab2', traditional: '調查', simplified: '调查', pinyin: 'diàochá', wordClass: ['N'], meaningVi: 'khảo sát, điều tra', meaningEn: 'survey, investigation', examples: [{ traditional: '根據調查，百分之六十一的人認為整型可以增加自信。', simplified: '根据调查，百分之六十一的人认为整型可以增加自信。', vietnamese: 'Theo khảo sát, 61% người cho rằng phẫu thuật thẩm mỹ có thể tăng sự tự tin.' }] },
    { id: 'L10-041', lessonId: 'L10', order: 8, group: 'vocab2', traditional: '整型', simplified: '整型', pinyin: 'zhěngxíng', wordClass: ['V-sep'], meaningVi: 'phẫu thuật thẩm mỹ', meaningEn: 'plastic surgery', tags: ['suc-khoe'], examples: [{ traditional: '百分之六十一的人認為整型可以增加自信。', simplified: '百分之六十一的人认为整型可以增加自信。', vietnamese: '61% người cho rằng phẫu thuật thẩm mỹ có thể tăng sự tự tin.' }] },
    { id: 'L10-042', lessonId: 'L10', order: 9, group: 'vocab2', traditional: '增加', simplified: '增加', pinyin: 'zēngjiā', wordClass: ['V'], meaningVi: 'tăng thêm', meaningEn: 'to increase', examples: [{ traditional: '整型除了可以增加自信。', simplified: '整型除了可以增加自信。', vietnamese: 'Phẫu thuật thẩm mỹ ngoài việc tăng sự tự tin.' }] },
    { id: 'L10-043', lessonId: 'L10', order: 10, group: 'vocab2', traditional: '自信', simplified: '自信', pinyin: 'zìxìn', wordClass: ['N'], meaningVi: 'tự tin', meaningEn: 'self-confidence', examples: [{ traditional: '整型除了可以增加自信。', simplified: '整型除了可以增加自信。', vietnamese: 'Phẫu thuật thẩm mỹ ngoài việc tăng sự tự tin.' }] },
    { id: 'L10-044', lessonId: 'L10', order: 11, group: 'vocab2', traditional: '外表', simplified: '外表', pinyin: 'wàibiǎo', wordClass: ['N'], meaningVi: 'vẻ ngoài', meaningEn: 'appearance, exterior', examples: [{ traditional: '外表好看的人收入比外表普通的人多。', simplified: '外表好看的人收入比外表普通的人多。', vietnamese: 'Thu nhập của người có ngoại hình ưa nhìn cao hơn người ngoại hình bình thường.' }] },
    { id: 'L10-045', lessonId: 'L10', order: 12, group: 'vocab2', traditional: '普通', simplified: '普通', pinyin: 'pǔtōng', wordClass: ['Vs'], meaningVi: 'bình thường', meaningEn: 'common, ordinary', examples: [{ traditional: '外表好看的人收入比外表普通的人多。', simplified: '外表好看的人收入比外表普通的人多。', vietnamese: 'Thu nhập của người có ngoại hình ưa nhìn cao hơn người ngoại hình bình thường.' }] },
    { id: 'L10-046', lessonId: 'L10', order: 13, group: 'vocab2', traditional: '從事', simplified: '从事', pinyin: 'cóngshì', wordClass: ['V'], meaningVi: 'làm (nghề), tham gia (lĩnh vực)', meaningEn: 'to be engaged in, work in (a field of work)', examples: [{ traditional: '12,000多位從事醫美。', simplified: '12,000多位从事医美。', vietnamese: 'Hơn 12.000 người làm trong lĩnh vực thẩm mỹ y khoa.' }] },
    { id: 'L10-047', lessonId: 'L10', order: 14, group: 'vocab2', traditional: '醫治', simplified: '医治', pinyin: 'yīzhì', wordClass: ['V'], meaningVi: 'chữa trị', meaningEn: 'to heal, cure', tags: ['suc-khoe'], examples: [{ traditional: '醫生的工作是醫治病人。', simplified: '医生的工作是医治病人。', vietnamese: 'Công việc của bác sĩ là chữa trị cho bệnh nhân.' }] },
    { id: 'L10-048', lessonId: 'L10', order: 15, group: 'vocab2', traditional: '一向', simplified: '一向', pinyin: 'yíxiàng', wordClass: ['Adv'], meaningVi: 'luôn luôn, trước nay', meaningEn: 'have always', examples: [{ traditional: '社會地位一向很高。', simplified: '社会地位一向很高。', vietnamese: 'Địa vị xã hội luôn rất cao.' }] },
    { id: 'L10-049', lessonId: 'L10', order: 16, group: 'vocab2', traditional: '一般', simplified: '一般', pinyin: 'yìbān', wordClass: ['Vs-attr'], meaningVi: 'nói chung, thông thường', meaningEn: 'general, most', examples: [{ traditional: '一般人認為微整型不需要太多專業技術。', simplified: '一般人认为微整型不需要太多专业技术。', vietnamese: 'Người ta thường nghĩ thẩm mỹ nhỏ không cần quá nhiều kỹ thuật chuyên môn.' }] },
    { id: 'L10-050', lessonId: 'L10', order: 17, group: 'vocab2', traditional: '主要', simplified: '主要', pinyin: 'zhǔyào', wordClass: ['Vs-attr'], meaningVi: 'chủ yếu', meaningEn: 'primary, main', examples: [{ traditional: '主要原因有兩個。', simplified: '主要原因有两个。', vietnamese: 'Nguyên nhân chính có hai.' }] },
    { id: 'L10-051', lessonId: 'L10', order: 18, group: 'vocab2', traditional: '待遇', simplified: '待遇', pinyin: 'dàiyù', wordClass: ['N'], meaningVi: 'đãi ngộ', meaningEn: 'pay', examples: [{ traditional: '在一般的醫院工作辛苦，待遇又不高。', simplified: '在一般的医院工作辛苦，待遇又不高。', vietnamese: 'Làm việc ở bệnh viện thông thường vất vả, đãi ngộ lại không cao.' }] },
    { id: 'L10-052', lessonId: 'L10', order: 19, group: 'vocab2', traditional: '公立', simplified: '公立', pinyin: 'gōnglì', wordClass: ['Vs-attr'], meaningVi: 'công lập', meaningEn: 'public; government-run', examples: [{ traditional: '就拿公立醫院外科醫生來說。', simplified: '就拿公立医院外科医生来说。', vietnamese: 'Lấy bác sĩ khoa ngoại ở bệnh viện công làm ví dụ.' }] },
    { id: 'L10-053', lessonId: 'L10', order: 20, group: 'vocab2', traditional: '外科', simplified: '外科', pinyin: 'wàikē', wordClass: ['N'], meaningVi: 'khoa ngoại', meaningEn: 'department of surgery', tags: ['suc-khoe'], examples: [{ traditional: '就拿公立醫院外科醫生來說。', simplified: '就拿公立医院外科医生来说。', vietnamese: 'Lấy bác sĩ khoa ngoại ở bệnh viện công làm ví dụ.' }] },
    { id: 'L10-054', lessonId: 'L10', order: 21, group: 'vocab2', traditional: '超過', simplified: '超过', pinyin: 'chāoguò', wordClass: ['Vp'], meaningVi: 'vượt quá', meaningEn: 'to exceed', examples: [{ traditional: '每星期工作時間超過一百個小時。', simplified: '每星期工作时间超过一百个小时。', vietnamese: 'Mỗi tuần thời gian làm việc vượt quá một trăm tiếng.' }] },
    { id: 'L10-055', lessonId: 'L10', order: 22, group: 'vocab2', traditional: '倍', simplified: '倍', pinyin: 'bèi', wordClass: ['M'], meaningVi: 'lần, gấp', meaningEn: 'times, -fold', examples: [{ traditional: '薪水卻是兩、三倍。', simplified: '薪水却是两、三倍。', vietnamese: 'Lương lại gấp hai, ba lần.' }] },
    { id: 'L10-056', lessonId: 'L10', order: 23, group: 'vocab2', traditional: '另', simplified: '另', pinyin: 'lìng', wordClass: ['Det'], meaningVi: 'khác, còn một', meaningEn: 'another, additional', examples: [{ traditional: '另一方面是價值觀的問題。', simplified: '另一方面是价值观的问题。', vietnamese: 'Một mặt khác là vấn đề giá trị quan.' }] },
    { id: 'L10-057', lessonId: 'L10', order: 24, group: 'vocab2', traditional: '價值觀', simplified: '价值观', pinyin: 'jiàzhíguān', wordClass: ['N'], meaningVi: 'giá trị quan', meaningEn: 'values', examples: [{ traditional: '另一方面是價值觀的問題。', simplified: '另一方面是价值观的问题。', vietnamese: 'Một mặt khác là vấn đề giá trị quan.' }] },
    { id: 'L10-058', lessonId: 'L10', order: 25, group: 'vocab2', traditional: '尊敬', simplified: '尊敬', pinyin: 'zūnjìng', wordClass: ['Vst'], meaningVi: 'tôn kính', meaningEn: 'to respect, respectful of', examples: [{ traditional: '以前醫生受人尊敬。', simplified: '以前医生受人尊敬。', vietnamese: 'Trước đây bác sĩ được người ta tôn kính.' }] },
    { id: 'L10-059', lessonId: 'L10', order: 26, group: 'vocab2', traditional: '告', simplified: '告', pinyin: 'gào', wordClass: ['V'], meaningVi: 'kiện', meaningEn: 'to sue, bring suit against', examples: [{ traditional: '現在的病人動不動就告醫生。', simplified: '现在的病人动不动就告医生。', vietnamese: 'Bệnh nhân hiện nay động một tí là kiện bác sĩ.' }] },
    { id: 'L10-060', lessonId: 'L10', order: 27, group: 'vocab2', traditional: '平均', simplified: '平均', pinyin: 'píngjūn', wordClass: ['Adv'], meaningVi: 'bình quân', meaningEn: 'average', examples: [{ traditional: '平均每天最少有一位醫生被告。', simplified: '平均每天最少有一位医生被告。', vietnamese: 'Bình quân mỗi ngày ít nhất có một bác sĩ bị kiện.' }] },
    { id: 'L10-061', lessonId: 'L10', order: 28, group: 'vocab2', traditional: '醫療', simplified: '医疗', pinyin: 'yīliáo', wordClass: ['N'], meaningVi: 'y tế, chữa trị', meaningEn: 'medical treatment, health care', tags: ['suc-khoe'], examples: [{ traditional: '醫療糾紛也給醫生帶來很大的壓力。', simplified: '医疗纠纷也给医生带来很大的压力。', vietnamese: 'Tranh chấp y tế cũng mang lại áp lực rất lớn cho bác sĩ.' }] },
    { id: 'L10-062', lessonId: 'L10', order: 29, group: 'vocab2', traditional: '怪', simplified: '怪', pinyin: 'guài', wordClass: ['V'], meaningVi: 'trách', meaningEn: 'to blame', examples: [{ traditional: '我們怎麼能怪他們選擇醫美。', simplified: '我们怎么能怪他们选择医美。', vietnamese: 'Chúng ta làm sao có thể trách họ chọn thẩm mỹ y khoa.' }] },
    { id: 'L10-063', lessonId: 'L10', order: 30, group: 'vocab2', traditional: '微整型', simplified: '微整型', pinyin: 'wéi zhěngxíng', wordClass: ['Other'], meaningVi: 'phẫu thuật thẩm mỹ nhỏ', meaningEn: 'micro-cosmetic surgery, plastic surgery, face contouring', tags: ['suc-khoe'], examples: [{ traditional: '台灣的微整型技術在亞洲是數一數二的。', simplified: '台湾的微整型技术在亚洲是数一数二的。', vietnamese: 'Kỹ thuật thẩm mỹ nhỏ của Đài Loan thuộc hàng đầu châu Á.' }] },
    { id: 'L10-064', lessonId: 'L10', order: 31, group: 'vocab2', traditional: '數一數二', simplified: '数一数二', pinyin: 'shǔyī shǔ\'èr', wordClass: ['Other'], meaningVi: 'đứng đầu, hàng đầu', meaningEn: 'one of the top or best in..., leading…', examples: [{ traditional: '台灣的微整型技術在亞洲是數一數二的。', simplified: '台湾的微整型技术在亚洲是数一数二的。', vietnamese: 'Kỹ thuật thẩm mỹ nhỏ của Đài Loan thuộc hàng đầu châu Á.' }] },
    { id: 'L10-065', lessonId: 'L10', order: 32, group: 'vocab2', traditional: '人際關係', simplified: '人际关系', pinyin: 'rénjì guānxì', wordClass: ['Other'], meaningVi: 'quan hệ giữa người với người', meaningEn: 'interpersonal relations', examples: [{ traditional: '還可以改善職場的人際關係。', simplified: '还可以改善职场的人际关系。', vietnamese: 'Còn có thể cải thiện quan hệ giữa người với người trong công việc.' }] },
    { id: 'L10-066', lessonId: 'L10', order: 33, group: 'vocab2', traditional: '動不動就', simplified: '动不动就', pinyin: 'dòng bú dòng jiù', wordClass: ['Other'], meaningVi: 'động một tí là, hễ tí là', meaningEn: 'to do something impetuously', notes: 'Xem ngữ pháp VI: 動不動就…', examples: [{ traditional: '現在的病人動不動就告醫生。', simplified: '现在的病人动不动就告医生。', vietnamese: 'Bệnh nhân hiện nay động một tí là kiện bác sĩ.' }] },
    { id: 'L10-067', lessonId: 'L10', order: 34, group: 'vocab2', traditional: '找回', simplified: '找回', pinyin: 'zhǎo huí', wordClass: ['Other'], meaningVi: 'tìm lại được', meaningEn: 'to rediscover, to retrieve', examples: [{ traditional: '醫美也是幫助人找回自信的好方法。', simplified: '医美也是帮助人找回自信的好方法。', vietnamese: 'Thẩm mỹ y khoa cũng là cách tốt để giúp người ta tìm lại sự tự tin.' }] }
  ],

  grammar: [
    {
      id: 'L10-G1', lessonId: 'L10', order: 1, pattern: '至於…',
      functionVi: '至於 là từ đánh dấu chủ đề mới, dùng để dẫn vào hoặc chuyển sang một chủ đề mới có liên quan đến một danh từ đã nhắc đến trong câu trước.',
      functionEn: '至於 is a new-topic marker, introducing or shifting to a new topic that is related to a noun mentioned in a previous sentence.',
      examples: [
        { traditional: '聽說李文彥受傷了。至於傷得怎麼樣，我就不清楚了。', simplified: '听说李文彦受伤了。至于伤得怎么样，我就不清楚了。', english: "I hear that Li Wenyan was injured. As to how serious the injury is, I don't know.", vietnamese: 'Nghe nói Lý Văn Ngạn bị thương. Còn về mức độ nặng nhẹ thế nào thì mình không rõ.' },
        { traditional: '這件外套的大小、樣子都很合適。至於顏色，我覺得淺了一點。', simplified: '这件外套的大小、样子都很合适。至于颜色，我觉得浅了一点。', english: 'The size and style of this coat are both suitable. As for the color, I think it\'s a bit light.', vietnamese: 'Chiếc áo khoác này size và kiểu dáng đều vừa. Còn về màu sắc thì mình thấy hơi nhạt.' },
        { traditional: '我對醫學系完全沒興趣，我想當警察。至於我父母，他們當然反對。我也沒辦法，我要做自己。', simplified: '我对医学系完全没兴趣，我想当警察。至于我父母，他们当然反对。我也没办法，我要做自己。', english: "I have no interest in medical school, I want to be a policeman. As for my parents, they obviously oppose the idea. But I can't help that, I want to be true to myself.", vietnamese: 'Mình hoàn toàn không hứng thú với khoa y, mình muốn làm cảnh sát. Còn về bố mẹ mình, đương nhiên họ phản đối. Mình cũng chẳng làm gì được, mình phải sống là chính mình.' },
        { traditional: '我吃東西只講究營養。至於味道好不好，沒關係。', simplified: '我吃东西只讲究营养。至于味道好不好，没关系。', english: "I am only fastidious about nutritious food. As to whether the taste is good or not, that's irrelevant.", vietnamese: 'Mình ăn uống chỉ chú trọng dinh dưỡng. Còn về mùi vị có ngon hay không thì không quan trọng.' },
        { traditional: '她喜歡個性好的人。至於外表，她覺得不重要。', simplified: '她喜欢个性好的人。至于外表，她觉得不重要。', english: "She likes people with good personalities. As to looks, she thinks that's unimportant.", vietnamese: 'Cô ấy thích người tính cách tốt. Còn về ngoại hình thì cô ấy thấy không quan trọng.' }
      ],
      usageNotesVi: '至於 đánh dấu sự chuyển đổi sang một chủ đề mới liên quan nhưng khác với chủ đề vừa nói, thường dùng để đối lập hoặc bổ sung ý kiến về khía cạnh khác.',
      exercises: [
        { id: 'L10-G1-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說美美生病住院了，嚴重不嚴重？要住多久？', textWithBlanks: 'B：好像不太嚴重。至於___。', blanks: [{ index: 0, acceptedAnswers: ['要住多久，可能要等檢查結果出來才知道。'] }], targetPattern: 'L10-G1' },
        { id: 'L10-G1-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：我的女兒很怕打針，可不可以不打針？吃藥可以嗎？', textWithBlanks: 'B：打針好得比較快。至於___。', blanks: [{ index: 0, acceptedAnswers: ['要不要吃藥，你可以問問醫生的意見。'] }], targetPattern: 'L10-G1' },
        { id: 'L10-G1-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：外表好看的人比較受歡迎，收入也真的比外表普通的人多嗎？', textWithBlanks: 'B：一般來說外表好看的人是比較受歡迎。至於___。', blanks: [{ index: 0, acceptedAnswers: ['收入會不會比較多，就不一定了。'] }], targetPattern: 'L10-G1' },
        { id: 'L10-G1-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：根據調查，醫學系學生選外科的人比以前少了，是真的嗎？你覺得會不會影響醫療品質？', textWithBlanks: 'B：媒體都這樣說。至於___。', blanks: [{ index: 0, acceptedAnswers: ['會不會影響醫療品質，我就不清楚了。'] }], targetPattern: 'L10-G1' },
        { id: 'L10-G1-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你覺得為什麼會發生醫療糾紛？一定是醫生的錯嗎？', textWithBlanks: 'B：發生醫療糾紛的原因很多。至於___。', blanks: [{ index: 0, acceptedAnswers: ['是不是醫生的錯，還是要看情況而定。'] }], targetPattern: 'L10-G1' },
        { id: 'L10-G1-EX6', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說有的國家規定18歲才可以做微整型，你同意嗎？', textWithBlanks: 'B：我不反對做微整型。至於___。', blanks: [{ index: 0, acceptedAnswers: ['幾歲才能做，我覺得應該由父母決定。'] }], targetPattern: 'L10-G1' }
      ]
    },
    {
      id: 'L10-G2', lessonId: 'L10', order: 2, pattern: '看',
      functionVi: 'Động từ 看 có nhiều nghĩa. Trong bài này, nó nêu một yếu tố quyết định cho một vấn đề.',
      functionEn: 'The verb 看 has many meanings. In this lesson, it presents a factor, its object, that determines an issue.',
      examples: [
        { traditional: '考不考得上公職，除了努力以外，還得看運氣。', simplified: '考不考得上公职，除了努力以外，还得看运气。', english: "Whether or not you can pass the exam for the public service, in addition to studying hard, it also depends on luck.", vietnamese: 'Thi đỗ công chức hay không, ngoài nỗ lực ra, còn phải xem vận may.' },
        { traditional: '傷口多久會好，得看是哪裡受傷。', simplified: '伤口多久会好，得看是哪里受伤。', english: "How long it takes for an injury to heal depends on where the injury is.", vietnamese: 'Vết thương bao lâu lành, phải xem bị thương ở đâu.' },
        { traditional: '產品有沒有競爭力，要看價格。要是價格太高怎麼會有人想買？', simplified: '产品有没有竞争力，要看价格。要是价格太高怎么会有人想买？', english: "Whether or not a product is competitive depends on the price. If the price is too high, how is it going to want to buy it?", vietnamese: 'Sản phẩm có sức cạnh tranh hay không phải xem giá cả. Nếu giá quá cao thì sao có người muốn mua?' },
        { traditional: '在網路上賣東西生意好不好，要看賣家的信用好不好。', simplified: '在网路上卖东西生意好不好，要看卖家的信用好不好。', english: "Whether or not an online sales business will do well depends on the trustworthiness of the seller.", vietnamese: 'Bán hàng trên mạng buôn bán tốt hay không phải xem uy tín người bán tốt hay không.' },
        { traditional: '台灣的學費貴不貴，很難說，得看是私立的還是公立的學校。', simplified: '台湾的学费贵不贵，很难说，得看是私立的还是公立的学校。', english: "It's hard to say if tuition in Taiwan is high. It depends on whether the school is private or public.", vietnamese: 'Học phí Đài Loan đắt hay không rất khó nói, phải xem là trường tư hay trường công.' }
      ],
      usageNotesVi: 'Các ví dụ trên đều có phần "có... hay không", nhưng đây không phải yêu cầu bắt buộc. Ví dụ không có cấu trúc này: 微整型沒有傷口，什麼時候都可以做，不必看什麼時候放假 (thẩm mỹ nhỏ không có vết thương, lúc nào cũng làm được, không cần xem lúc nào được nghỉ). 這是一件小事，不必看老闆的意見吧 (chuyện nhỏ, không cần xem ý kiến sếp).',
      exercises: [
        { id: 'L10-G2-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：醫生，我馬上就能住院開刀嗎？', textWithBlanks: 'B：最近病人很多，___。', blanks: [{ index: 0, acceptedAnswers: ['要看有沒有空的病床才能決定。'] }], targetPattern: 'L10-G2' },
        { id: 'L10-G2-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：我的女兒腿被撞傷了，以後走路會不會不方便？', textWithBlanks: 'B：___，不過最好的情況只能恢復八成到九成。', blanks: [{ index: 0, acceptedAnswers: ['會不會不方便，要看受傷的部位'] }], targetPattern: 'L10-G2' },
        { id: 'L10-G2-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：微整型的價錢都一樣嗎？', textWithBlanks: 'B：不一樣吧。___。', blanks: [{ index: 0, acceptedAnswers: ['要看做哪個部位、技術好不好。'] }], targetPattern: 'L10-G2' },
        { id: 'L10-G2-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：整過型的人在結婚以前應該告訴要跟他/她結婚的人嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['要不要告訴對方，看個人怎麼想吧。'] }], targetPattern: 'L10-G2' },
        { id: 'L10-G2-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你覺得發生醫療糾紛的時候，一定是醫生的錯嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['是不是醫生的錯，要看實際的情況。'] }], targetPattern: 'L10-G2' }
      ]
    },
    {
      id: 'L10-G3', lessonId: 'L10', order: 3, pattern: '一向',
      functionVi: 'Phó từ 一向 nghĩa là "trước nay vẫn luôn như vậy", chỉ thói quen hoặc khuynh hướng cố định.',
      functionEn: "The adverb 一向 means 'it has always been the case that', referring to habits or aptitudes.",
      examples: [
        { traditional: '他一向很熱心，總是喜歡幫助人。', simplified: '他一向很热心，总是喜欢帮助人。', english: 'He has always been passionate and has always liked helping others.', vietnamese: 'Anh ấy trước nay luôn nhiệt tình, lúc nào cũng thích giúp người.' },
        { traditional: '他對自己的能力一向有自信；他不會放棄的。', simplified: '他对自己的能力一向有自信；他不会放弃的。', english: "He has always been confident in his abilities. He won't give up.", vietnamese: 'Anh ấy trước nay luôn tự tin vào năng lực của mình; anh ấy sẽ không bỏ cuộc đâu.' },
        { traditional: '這家公司一向重視品質。你可以放心買他們的產品。', simplified: '这家公司一向重视品质。你可以放心买他们的产品。', english: 'This company has always attached a great deal of importance to quality. You can set your mind at ease when you buy their products.', vietnamese: 'Công ty này trước nay luôn coi trọng chất lượng. Cậu có thể yên tâm mua sản phẩm của họ.' },
        { traditional: '他一向喜歡開玩笑。他說的話，都要打個折扣。', simplified: '他一向喜欢开玩笑。他说的话，都要打个折扣。', english: 'He has always loved to joke around. You need to take what he says with a grain of salt.', vietnamese: 'Anh ấy trước nay luôn thích nói đùa. Lời anh ấy nói phải bớt tin đi một phần.' },
        { traditional: '他一向很照顧學生。不管學生碰到什麼問題，他都盡量幫忙。', simplified: '他一向很照顾学生。不管学生碰到什么问题，他都尽量帮忙。', english: 'He has always looked after his students. No matter what problems they face, he does everything he can to help.', vietnamese: 'Thầy ấy trước nay luôn chăm lo cho học sinh. Dù học sinh gặp vấn đề gì, thầy đều cố gắng giúp đỡ.' }
      ],
      usageNotesVi: '1. Cả 一向 và 一直 đều chỉ sự tiếp diễn của một hành động hoặc trạng thái từ quá khứ đến hiện tại. Tuy nhiên, 一向 nhấn mạnh tính thói quen, còn 一直 nhấn mạnh sự liên tục; do đó không phải lúc nào cũng thay thế được cho nhau. Ví dụ: (1) (Từ hôm qua đến nay) 他一直不相信我說的話 — (2) 他一向不相信我說的話 — (3) 她一向不聽別人的建議，你別再說了 (*không dùng 一直) — (4) 他旅行以前，一向先計畫好 (*không dùng 一直). 2. Dù 一向 chỉ thói quen, thói quen đó vẫn có thể thay đổi: (1) 這裡的冬天一向很潮濕，今年卻變了。(2) 他一向不喜歡吃海鮮，昨天卻點了一道檸檬魚。3. 一向 chỉ dùng để nói về việc trong quá khứ, còn 一直 có thể dùng để diễn tả việc trong tương lai: 他會一直陪著你走到學校 (*không dùng 一向).',
      exercises: [
        { id: 'L10-G3-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '我___不喜歡打擾朋友。旅行的時候從來不住朋友家。', blanks: [{ index: 0, acceptedAnswers: ['一向'] }], targetPattern: 'L10-G3' },
        { id: 'L10-G3-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他頭痛了好久，可是醫生___找不出原因。只好吃止痛藥。', blanks: [{ index: 0, acceptedAnswers: ['一直'] }], targetPattern: 'L10-G3' },
        { id: 'L10-G3-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '大醫院的急診室裡___擠滿了病人，好不容易才能等到一張病床。', blanks: [{ index: 0, acceptedAnswers: ['一直'] }], targetPattern: 'L10-G3' },
        { id: 'L10-G3-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '外表迷人，在職場上___比較有競爭力。難怪做微整型的人越來越多。', blanks: [{ index: 0, acceptedAnswers: ['一向'] }], targetPattern: 'L10-G3' },
        { id: 'L10-G3-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他___怪父母，小時候不讓他學音樂；要不然現在可以靠音樂賺錢。', blanks: [{ index: 0, acceptedAnswers: ['一向'] }], targetPattern: 'L10-G3' },
        { id: 'L10-G3-EX6', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '醫生的待遇___比別的工作好，因此醫學系也是最難考上的科系。', blanks: [{ index: 0, acceptedAnswers: ['一向'] }], targetPattern: 'L10-G3' },
        { id: 'L10-G3-EX7', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他___愛著王小姐，可是不敢說出來。', blanks: [{ index: 0, acceptedAnswers: ['一直'] }], targetPattern: 'L10-G3' }
      ]
    },
    {
      id: 'L10-G4', lessonId: 'L10', order: 4, pattern: '拿…來說',
      functionVi: 'Người nói dùng mẫu câu này để trình bày một luận điểm từ một góc nhìn cụ thể được nêu ra.',
      functionEn: 'Function: With this pattern, the speaker presents a statement from a given perspective.',
      examples: [
        { traditional: '我們公司的產品最有競爭力。拿價錢來說，我們的產品是市場上最便宜的。', simplified: '我们公司的产品最有竞争力。拿价钱来说，我们的产品是市场上最便宜的。', english: "Our company's products are highly competitive. Take prices as an example; our products are the cheapest on the market.", vietnamese: 'Sản phẩm công ty chúng tôi cạnh tranh nhất. Xét về giá, sản phẩm của chúng tôi là rẻ nhất thị trường.' },
        { traditional: '我最怕參加比賽。拿上次演講比賽來說，我緊張得把要說的話全忘了。', simplified: '我最怕参加比赛。拿上次演讲比赛来说，我紧张得把要说的话全忘了。', english: "I hate taking part in competitions. Take the last speech contest for example; I was so nervous that I completely forgot everything I was going to say.", vietnamese: 'Tôi sợ nhất tham gia thi đấu. Lấy cuộc thi hùng biện lần trước làm ví dụ, tôi căng thẳng đến mức quên sạch những gì định nói.' },
        { traditional: '車禍的原因常常都是速度太快。拿王大明上次出車禍來說，他的速度幾乎超過規定的一倍。', simplified: '车祸的原因常常都是速度太快。拿王大明上次出车祸来说，他的速度几乎超过规定的一倍。', english: "Speeding is often the reason for car accidents. Take Wang Daming's accident earlier as an example. He was going almost twice the stipulated speed.", vietnamese: 'Nguyên nhân tai nạn xe thường là do chạy quá tốc độ. Lấy vụ tai nạn lần trước của Vương Đại Minh làm ví dụ, tốc độ của anh ấy gần gấp đôi quy định.' },
        { traditional: '這家公司的待遇真不錯。拿休假來說，只要工作兩年就能休十天的假。', simplified: '这家公司的待遇真不错。拿休假来说，只要工作两年就能休十天的假。', english: "This company's terms of employment are really good. Take paid vacation for example; you only need to work here two years to get ten days of vacation.", vietnamese: 'Đãi ngộ công ty này thật tốt. Lấy chuyện nghỉ phép làm ví dụ, chỉ cần làm hai năm là được nghỉ mười ngày.' },
        { traditional: '麗麗對穿很講究。拿外套來說，黑色的就有十件不同的款式。', simplified: '丽丽对穿很讲究。拿外套来说，黑色的就有十件不同的款式。', english: "Lili is very fussy about clothes. Take coats for example; she has ten different styles of coat that are all black.", vietnamese: 'Lệ Lệ rất kỹ tính chuyện ăn mặc. Lấy áo khoác làm ví dụ, riêng màu đen đã có mười kiểu khác nhau.' }
      ],
      usageNotesVi: '拿…來說 thường dùng để minh họa cho một nhận định tổng quát đã nêu trước đó bằng một ví dụ cụ thể, giúp người nghe dễ hình dung hơn.',
      exercises: [
        { id: 'L10-G4-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '這次考試全班成績都進步了。拿___來說。', blanks: [{ index: 0, acceptedAnswers: ['拿小明來說，他這次進步了二十分。'] }], targetPattern: 'L10-G4' },
        { id: 'L10-G4-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '最近連老人的購物習慣都改變了。拿___來說。', blanks: [{ index: 0, acceptedAnswers: ['拿我媽媽來說，她現在也會上網買菜了。'] }], targetPattern: 'L10-G4' },
        { id: 'L10-G4-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '網路真的給我們生活帶來很大的方便。拿___來說。', blanks: [{ index: 0, acceptedAnswers: ['拿網購來說，東西兩天內就能送到家。'] }], targetPattern: 'L10-G4' },
        { id: 'L10-G4-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '她做過好幾次微整型。拿___來說。', blanks: [{ index: 0, acceptedAnswers: ['拿她的鼻子來說，已經整了三次了。'] }], targetPattern: 'L10-G4' },
        { id: 'L10-G4-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '人際關係有的時候比能力還重要。拿___來說。', blanks: [{ index: 0, acceptedAnswers: ['拿找工作來說，有時候認識的人介紹比自己投履歷更有用。'] }], targetPattern: 'L10-G4' },
        { id: 'L10-G4-EX6', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '從事醫美的醫生外表都不錯。拿___來說。', blanks: [{ index: 0, acceptedAnswers: ['拿那位醫生來說，他本人就做過好幾次微整型。'] }], targetPattern: 'L10-G4' }
      ]
    },
    {
      id: 'L10-G5', lessonId: 'L10', order: 5, pattern: '受 + V（câu bị động với 受）',
      functionVi: 'Câu dùng động từ ngoại động 受 diễn tả nghĩa bị động "được/bị...".',
      functionEn: "Function: Sentences with the transitive verb 受 indicate a passive meaning, 'to be..., to get...'.",
      examples: [
        { traditional: '在台灣，教授是個受人尊敬的工作。', simplified: '在台湾，教授是个受人尊敬的工作。', english: 'In Taiwan, teaching in university is a respected line of work.', vietnamese: 'Ở Đài Loan, làm giáo sư là một nghề được người ta tôn kính.' },
        { traditional: '五月天的歌很受大學生喜愛，他們演唱會的票很快就賣完了。', simplified: '五月天的歌很受大学生喜爱，他们演唱会的票很快就卖完了。', english: "Mayday's songs are loved by the college crowd. Their concert tickets sell out quickly.", vietnamese: 'Bài hát của Mayday rất được sinh viên yêu thích, vé buổi hòa nhạc của họ bán hết rất nhanh.' },
        { traditional: '他的能力很強，老闆很喜歡他，所以他在公司裡越來越受重視。', simplified: '他的能力很强，老板很喜欢他，所以他在公司里越来越受重视。', english: "He is very capable and the boss likes him. He is valued more and more in the company.", vietnamese: 'Năng lực anh ấy rất giỏi, sếp rất thích anh ấy, nên anh ấy ngày càng được coi trọng trong công ty.' },
        { traditional: '那位醫生常上電視，她不但經驗多，而且口才好，非常受歡迎。', simplified: '那位医生常上电视，她不但经验多，而且口才好，非常受欢迎。', english: "The doctor frequently appears on television. She is not only highly experienced, she is also eloquent. She is very well received.", vietnamese: 'Vị bác sĩ đó thường lên truyền hình, bà không chỉ nhiều kinh nghiệm mà còn ăn nói giỏi, rất được yêu thích.' },
        { traditional: '他一向按照規定辦事情，今天不遵守規定，應該是受了很大的壓力。', simplified: '他一向按照规定办事情，今天不遵守规定，应该是受了很大的压力。', english: "He has always done things by the book. He didn't follow the rules today probably because he's under a lot of pressure.", vietnamese: 'Anh ấy trước nay luôn làm theo quy định, hôm nay không tuân thủ quy định chắc là vì chịu áp lực lớn.' }
      ],
      usageNotesVi: 'A. 受 có thể theo hai cấu trúc: 1. 受 + Tân ngữ, ví dụ: 她受過很好的教育 (giáo dục)；他選擇放棄，應該是受了很大的壓力。2. 受 + Chủ ngữ + Động từ, ví dụ: 他教書很活潑，很受學生（的）歡迎；她寫的歌很受大家（的）喜愛；他提出的想法很受店長（的）重視。\nB. So sánh câu bị động với 受 và câu bị động với 被: 1. 被 là trợ từ bị động, 受 là động từ. Các từ như 很、非常、大 có thể đặt trước 受 làm trạng ngữ, nhưng không đặt trước 被 được: 比賽的時候天氣不好，他的成績大受影響。聽了吳寶春的故事，他很受感動。他把學生當做孩子，非常受學生尊敬。2. Câu bị động với 被 thường liên quan đến sự việc không may mắn đối với chủ ngữ hoặc người nói, còn câu bị động với 受 không có khuynh hướng này: 她的手機被朋友弄壞了。這件事情被她發現就麻煩了。他偷東西的時候被人看見了。(ngược lại) 她很喜歡這個電影，看了以後很受感動。我喜歡接近自然，是受她影響。她念書很專心，不受別人打擾。3. 受 phần lớn dùng với động từ trạng thái ngoại động, còn 被 phần lớn dùng với động từ hành động: 他把賣菜賺的錢都給了窮人，很受人尊敬。他說話很有意思，很受朋友歡迎。這種遊戲很有意思，很受高中學生喜愛。(còn 被) 他沒把事情做好，被老闆罵了一頓。我的車上個週末停在路邊，結果被撞壞了。倒楣死了！他安靜地走進辦公室，不想被發現。',
      exercises: [
        { id: 'L10-G5-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '他昨天演講的時候說到他從小___。要是沒有他們，他不可能成功。（照顧）', textWithBlanks: '___', blanks: [{ index: 0, acceptedAnswers: ['受到家人的照顧'] }], targetPattern: 'L10-G5' },
        { id: 'L10-G5-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '他告訴老闆要用有機食材做麵包，沒想到會___。（支持）', textWithBlanks: '___', blanks: [{ index: 0, acceptedAnswers: ['受到老闆的支持'] }], targetPattern: 'L10-G5' },
        { id: 'L10-G5-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '他很努力地教書卻不___，讓他很難過。（受歡迎）', textWithBlanks: '___', blanks: [{ index: 0, acceptedAnswers: ['受學生歡迎'] }], targetPattern: 'L10-G5' },
        { id: 'L10-G5-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '老師說他的中文進步很多，說得越來越流利，他___就更用功了。（鼓勵）', textWithBlanks: '___', blanks: [{ index: 0, acceptedAnswers: ['受到鼓勵'] }], targetPattern: 'L10-G5' },
        { id: 'L10-G5-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '這個電影談的是狗跟人的關係。那隻狗好可愛，牠那麼愛主人，看的人都___。（感動）', textWithBlanks: '___', blanks: [{ index: 0, acceptedAnswers: ['很受感動'] }], targetPattern: 'L10-G5' }
      ]
    },
    {
      id: 'L10-G6', lessonId: 'L10', order: 6, pattern: '動不動就…',
      functionVi: 'Thành ngữ 動不動就 nói về việc làm một hành động hoặc rơi vào một trạng thái nào đó quá thường xuyên, không có lý do chính đáng. Mẫu câu này dùng để phê phán.',
      functionEn: 'The idiom 動不動就 refers to doing something or getting into some state quite often and without good reason. This pattern is used as a criticism.',
      examples: [
        { traditional: '現在年輕人動不動就換工作，怎麼能成功？', simplified: '现在年轻人动不动就换工作，怎么能成功？', english: 'Young people today change jobs at the drop of a hat. How are they going to succeed?', vietnamese: 'Người trẻ bây giờ động một tí là đổi việc, sao thành công được?' },
        { traditional: '這是你自己的問題，不要動不動就怪別人。', simplified: '这是你自己的问题，不要动不动就怪别人。', english: "This is your problem. Don't go blaming others at the drop of a hat.", vietnamese: 'Đây là vấn đề của chính cậu, đừng động một tí là đổ lỗi cho người khác.' },
        { traditional: '你別動不動就打擾別人工作，等他們有空的時候再去請教他們。', simplified: '你别动不动就打扰别人工作，等他们有空的时候再去请教他们。', english: "Don't interrupt others when they're working whenever you feel like it. Wait until they have time, and then ask them your questions.", vietnamese: 'Cậu đừng động một tí là làm phiền người khác lúc họ đang làm việc, đợi họ rảnh rồi hãy hỏi.' },
        { traditional: '你很健康，不要動不動就去醫院檢查身體。', simplified: '你很健康，不要动不动就去医院检查身体。', english: "You're very healthy. Don't go to the hospital for checkups at the drop of a hat.", vietnamese: 'Cậu khỏe mạnh lắm, đừng động một tí là chạy đi bệnh viện khám.' },
        { traditional: '最近高鐵動不動就出問題，讓搭高鐵的人很不放心。', simplified: '最近高铁动不动就出问题，让搭高铁的人很不放心。', english: 'The HSR has been having all kinds of problems lately, causing anxiety among people who take it.', vietnamese: 'Dạo này tàu cao tốc động một tí là gặp sự cố, khiến người đi tàu rất không yên tâm.' }
      ],
      usageNotesVi: '動不動就 luôn mang nghĩa phê phán, chê trách việc gì đó xảy ra quá thường xuyên và không có lý do xác đáng. Thường theo sau là một động từ hoặc cụm động từ.',
      exercises: [
        { id: 'L10-G6-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '她的身體不好，常常生病。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['她動不動就生病。'] }], targetPattern: 'L10-G6' },
        { id: 'L10-G6-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '他跟女朋友有問題的時候，他女朋友總是說「我們分手吧」，讓他很痛苦。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['他女朋友動不動就說要分手，讓他很痛苦。'] }], targetPattern: 'L10-G6' },
        { id: 'L10-G6-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '李大明不喜歡跟別人競爭，碰到有人跟他競爭的時候，總是說「我放棄」。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['李大明動不動就說要放棄，不喜歡跟別人競爭。'] }], targetPattern: 'L10-G6' },
        { id: 'L10-G6-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '最近我的電腦常常壞，送去修理，也找不出原因。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['我的電腦最近動不動就壞，送去修理也找不出原因。'] }], targetPattern: 'L10-G6' },
        { id: 'L10-G6-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '他總是罵人，大家才不喜歡他的。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['他動不動就罵人，大家才不喜歡他的。'] }], targetPattern: 'L10-G6' },
        { id: 'L10-G6-EX6', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: '她一有錢就去整型，這次是她第十次去整型了。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['她動不動就去整型，這次已經是第十次了。'] }], targetPattern: 'L10-G6' }
      ]
    }
  ],
  workbookExercises: [
    {
      id: 'L10-WB-fb-1', lessonId: 'L10', section: 'fill-bank', type: 'multiple-choice',
      prompt: '醫生說現在科技進步。開刀的（a.傷　b.傷口）都很小，很快就能恢復。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '傷' }, { id: 'b', text: '傷口' }],
      correctOptionId: 'b',
      explanationVi: '"傷口"（vết thương, danh từ cụ thể chỉ chỗ bị rạch/thương）hợp với "開刀的___都很小" hơn "傷"（chỉ sự tổn thương nói chung）。'
    },
    {
      id: 'L10-WB-fb-2', lessonId: 'L10', section: 'fill-bank', type: 'multiple-choice',
      prompt: '王小姐外表迷人，工作能力也強，在（a.職場　b.市場）上很有競爭力。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '職場' }, { id: 'b', text: '市場' }],
      correctOptionId: 'a',
      explanationVi: '"職場"（nơi làm việc）才符合"工作能力強、有競爭力"的語境，"市場"是買賣的地方，不合適。'
    },
    {
      id: 'L10-WB-fb-3', lessonId: 'L10', section: 'fill-bank', type: 'multiple-choice',
      prompt: '要遵守交通（a.規定　b.規則），開車的速度不能超過一小時60公里。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '規定' }, { id: 'b', text: '規則' }],
      correctOptionId: 'b',
      explanationVi: '"交通規則"（luật lệ giao thông）是固定搭配，"交通規定"不是常見用法。'
    },
    {
      id: 'L10-WB-fb-4', lessonId: 'L10', section: 'fill-bank', type: 'multiple-choice',
      prompt: '牛肉因為（a.部分　b.部位）不同，價錢也不同。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '部分' }, { id: 'b', text: '部位' }],
      correctOptionId: 'b',
      explanationVi: '"部位"專指身體或肉品的某個具體位置，"部分"是較籠統的一部分，牛肉的不同位置應用"部位"。'
    },
    {
      id: 'L10-WB-fb-5', lessonId: 'L10', section: 'fill-bank', type: 'multiple-choice',
      prompt: '這位醫生（a.開刀　b.動手術）的技術很好，所以他的病人特別多。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '開刀' }, { id: 'b', text: '動手術' }],
      correctOptionId: 'a',
      explanationVi: '"開刀的技術"是常見搭配（醫生開刀的技術），"動手術的技術"不自然。'
    },
    {
      id: 'L10-WB-fb-6', lessonId: 'L10', section: 'fill-bank', type: 'multiple-choice',
      prompt: '公務員除了工作穩定以外，（a.待遇　b.薪水）也不錯。像孩子念書都有獎學金，老了拿到的錢也比較多。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '待遇' }, { id: 'b', text: '薪水' }],
      correctOptionId: 'a',
      explanationVi: '"待遇"包含薪水以外的福利（如獎學金、退休金），而後面提到的內容不只是薪水，所以用"待遇"更全面。'
    },
    {
      id: 'L10-WB-fb-7', lessonId: 'L10', section: 'fill-bank', type: 'multiple-choice',
      prompt: '今天的比賽他的成績（a.普遍　b.普通），想拿冠軍恐怕不容易。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '普遍' }, { id: 'b', text: '普通' }],
      correctOptionId: 'b',
      explanationVi: '"普通"（bình thường）形容個人成績，"普遍"（phổ biến）用來形容某現象廣泛存在，這裡應該用"普通"。'
    },
    {
      id: 'L10-WB-fb-8', lessonId: 'L10', section: 'fill-bank', type: 'multiple-choice',
      prompt: '她的情況非常（a.緊張　b.緊急），必須馬上開刀，要不然會有危險。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '緊張' }, { id: 'b', text: '緊急' }],
      correctOptionId: 'b',
      explanationVi: '"緊急"（khẩn cấp）形容情況危急需要立刻處理，"緊張"（căng thẳng）是形容心理狀態，這裡應該用"緊急"。'
    },
    {
      id: 'L10-WB-fb-9', lessonId: 'L10', section: 'fill-bank', type: 'multiple-choice',
      prompt: '我覺得在網路上訂購，價錢比較（a.合理　b.適合），而且可以節省時間。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '合理' }, { id: 'b', text: '適合' }],
      correctOptionId: 'a',
      explanationVi: '"價錢合理"（giá cả hợp lý）是固定搭配，"價錢適合"不自然。'
    },
    {
      id: 'L10-WB-fb-10', lessonId: 'L10', section: 'fill-bank', type: 'multiple-choice',
      prompt: '小美（a.一向　b.一直）反對整型，可是聽說她最近也去做了微整型。',
      question: '選出正確的詞：',
      options: [{ id: 'a', text: '一向' }, { id: 'b', text: '一直' }],
      correctOptionId: 'a',
      explanationVi: '"一向"表示一貫的習慣或態度（但後面可以有例外改變），"一直"強調不間斷的連續性；這裡說她一貫反對、但最近卻破例，用"一向"更合適。'
    },

    { id: 'L10-WB-fw-1', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '美美要搭12點的高鐵，為了___(gǎn shíjiān)，只好坐計程車到高鐵站。', blanks: [{ index: 0, acceptedAnswers: ['趕時間'] }] },
    { id: 'L10-WB-fw-2', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '我們的產品品質好，價錢又不高，很有___(jìngzhēnglì)。', blanks: [{ index: 0, acceptedAnswers: ['競爭力'] }] },
    { id: 'L10-WB-fw-3', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '颱風來的時候出去太___(wéixiǎn)了，還是待在家裡吧。', blanks: [{ index: 0, acceptedAnswers: ['危險'] }] },
    { id: 'L10-WB-fw-4', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '根據市場___(diàochá)，味道酸一點的鳳梨酥比較受歡迎。', blanks: [{ index: 0, acceptedAnswers: ['調查'] }] },
    { id: 'L10-WB-fw-5', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '聽說舉辦鳳梨酥節以後，鳳梨酥的產值增加了兩、三___(bèi)。', blanks: [{ index: 0, acceptedAnswers: ['倍'] }] },
    { id: 'L10-WB-fw-6', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '小張這麼做是不___(zūnshǒu)法律，而是不懂法律。別再罵他了。', blanks: [{ index: 0, acceptedAnswers: ['遵守'] }] },
    { id: 'L10-WB-fw-7', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '小美上個星期吃了不新鮮的東西，肚子痛得___(yàomìng)，看了醫生才好的。', blanks: [{ index: 0, acceptedAnswers: ['要命'] }] },
    { id: 'L10-WB-fw-8', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '最近他的公司情況不錯，大家的薪水都___(zēngjiā)了。', blanks: [{ index: 0, acceptedAnswers: ['增加'] }] },
    { id: 'L10-WB-fw-9', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '這次比賽他終於又拿到冠軍，讓他___(zhǎo huí)了自信。', blanks: [{ index: 0, acceptedAnswers: ['找回'] }] },
    { id: 'L10-WB-fw-10', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '她這次到台灣來___(zhǔyào)的目的是做微整型。', blanks: [{ index: 0, acceptedAnswers: ['主要'] }] },

    {
      id: 'L10-WB-fb-11', lessonId: 'L10', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền từ thích hợp vào đoạn văn (mỗi từ chỉ dùng 1 lần, có từ thừa).',
      wordBank: ['遵守', '價值觀', '尊敬', '平均', '超過', '調查', '醫療', '醫治', '情況', '自信'],
      textWithBlanks: '醫生的工作是1.___病人，讓病人不受痛苦。他們在台灣的社會地位很高，受人2.___。可是醫生的工作非常辛苦，每星期看病的時間3.___100個小時。一個月的薪水只有十萬塊，4.___一個小時不到250塊，而且還有各種5.___糾紛。為什麼還有人當醫生呢？是6.___吧。讓人活得更久、更快樂是他們的理想。',
      blanks: [
        { index: 1, acceptedAnswers: ['醫治'] },
        { index: 2, acceptedAnswers: ['尊敬'] },
        { index: 3, acceptedAnswers: ['超過'] },
        { index: 4, acceptedAnswers: ['平均'] },
        { index: 5, acceptedAnswers: ['醫療'] },
        { index: 6, acceptedAnswers: ['價值觀'] }
      ]
    },

    {
      id: 'L10-WB-read-a1', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '王太太：你孩子上的是數一數二的大學，又是熱門的科系，找工作應該沒問題。\n林太太：我一向認為上什麼大學，念什麼科系不重要。我總是告訴孩子，要做好百分之百的準備，機會來了才不會錯過。',
      question: '林太太的意思是：',
      options: [{ id: 'a', text: '雖然只有百分之一的機會，也不能放棄。' }, { id: 'b', text: '機會來以前，要做好完全的準備。' }, { id: 'c', text: '要上數一數二的大學，而且要念熱門科系。' }],
      correctOptionId: 'b',
      explanationVi: '"要做好百分之百的準備，機會來了才不會錯過" 表示要在機會到來前先完全準備好。'
    },
    {
      id: 'L10-WB-read-a2', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '小張：你女朋友不但關心病人，也很熱心幫助同事。在醫院裡人際關係很好，很受重視。\n小林：受重視有什麼用？薪水沒有增加，工作時間還變長了。現在我們連見面的時間都沒有。',
      question: '小林的意思是：',
      options: [{ id: 'a', text: '人際關係不重要，受重視才重要。' }, { id: 'b', text: '他很高興他女朋友受老闆支持，工作時間增加了。' }, { id: 'c', text: '他抱怨醫院對女朋友不公平。' }],
      correctOptionId: 'c',
      explanationVi: '"受重視有什麼用？薪水沒有增加，工作時間還變長了" 表示小林覺得醫院讓女朋友做很多事卻沒有相對的回報，是在抱怨不公平。'
    },
    {
      id: 'L10-WB-read-a3', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '小麗：叔叔，我想去整型，我的臉太大了，不漂亮。可是爸媽不給我錢。你一定要幫我。\n叔叔：你需要多少錢？\n小麗：朋友說兩萬塊左右。\n叔叔：我現在只有一萬塊，你先拿去整右邊的臉。至於左邊的臉，等叔叔有錢的時候再給你。',
      question: '叔叔的意思是：',
      options: [{ id: 'a', text: '他也覺得小麗右邊的臉太大了。' }, { id: 'b', text: '叔叔很窮，只能給她一部分的錢。' }, { id: 'c', text: '叔叔不同意她整型。' }],
      correctOptionId: 'b',
      explanationVi: '叔叔手上只有一萬塊，不到小麗需要的兩萬塊，用開玩笑的方式說"先整右邊的臉"，表示他只能先給一部分的錢。'
    },

    {
      id: 'L10-WB-read-b1', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '張德明從小成績就很好，從來沒讓父母失望過。大學考上了跟電腦有關的科系。他成績很好，教授推薦他上研究所。沒想到念了一年，覺得興趣不合，就休學去當兵了。大家都覺得在數一數二的大學裡學了五年電腦，說放棄就放棄，真的很可惜。可是他覺得念電腦的人長時間使用電腦，沒時間建立跟人的關係，他不喜歡這樣的生活。他決定再考一次大學。他要念醫學系，他要用電腦幫助醫生醫治病人，讓醫生更了解病人，也希望能減少醫療糾紛，醫生不再有被告的壓力。他一邊當兵，一邊準備大學考試。經過一年多的努力，他終於考上了醫學系。',
      question: '張德明雖然念的是熱門的電腦科系，可是大學不太有名。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"在數一數二的大學裡學了五年電腦"，表示他念的是頂尖的大學。'
    },
    {
      id: 'L10-WB-read-b2', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '張德明從小成績就很好，從來沒讓父母失望過。大學考上了跟電腦有關的科系。他成績很好，教授推薦他上研究所。沒想到念了一年，覺得興趣不合，就休學去當兵了。大家都覺得在數一數二的大學裡學了五年電腦，說放棄就放棄，真的很可惜。可是他覺得念電腦的人長時間使用電腦，沒時間建立跟人的關係，他不喜歡這樣的生活。他決定再考一次大學。他要念醫學系，他要用電腦幫助醫生醫治病人，讓醫生更了解病人，也希望能減少醫療糾紛，醫生不再有被告的壓力。他一邊當兵，一邊準備大學考試。經過一年多的努力，他終於考上了醫學系。',
      question: '教授推薦他上研究所，可是他不接受。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"教授推薦他上研究所。沒想到念了一年，覺得興趣不合，就休學去當兵了"，表示他最終沒有繼續念研究所。'
    },
    {
      id: 'L10-WB-read-b3', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '張德明從小成績就很好，從來沒讓父母失望過。大學考上了跟電腦有關的科系。他成績很好，教授推薦他上研究所。沒想到念了一年，覺得興趣不合，就休學去當兵了。大家都覺得在數一數二的大學裡學了五年電腦，說放棄就放棄，真的很可惜。可是他覺得念電腦的人長時間使用電腦，沒時間建立跟人的關係，他不喜歡這樣的生活。他決定再考一次大學。他要念醫學系，他要用電腦幫助醫生醫治病人，讓醫生更了解病人，也希望能減少醫療糾紛，醫生不再有被告的壓力。他一邊當兵，一邊準備大學考試。經過一年多的努力，他終於考上了醫學系。',
      question: '因為興趣不合的關係，他休學了。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"覺得興趣不合，就休學去當兵了".'
    },
    {
      id: 'L10-WB-read-b4', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '張德明從小成績就很好，從來沒讓父母失望過。大學考上了跟電腦有關的科系。他成績很好，教授推薦他上研究所。沒想到念了一年，覺得興趣不合，就休學去當兵了。大家都覺得在數一數二的大學裡學了五年電腦，說放棄就放棄，真的很可惜。可是他覺得念電腦的人長時間使用電腦，沒時間建立跟人的關係，他不喜歡這樣的生活。他決定再考一次大學。他要念醫學系，他要用電腦幫助醫生醫治病人，讓醫生更了解病人，也希望能減少醫療糾紛，醫生不再有被告的壓力。他一邊當兵，一邊準備大學考試。經過一年多的努力，他終於考上了醫學系。',
      question: '大家都覺得他應該繼續念研究所。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"大家都覺得…說放棄就放棄，真的很可惜"，表示大家希望他繼續念下去。'
    },
    {
      id: 'L10-WB-read-b5', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '張德明從小成績就很好，從來沒讓父母失望過。大學考上了跟電腦有關的科系。他成績很好，教授推薦他上研究所。沒想到念了一年，覺得興趣不合，就休學去當兵了。大家都覺得在數一數二的大學裡學了五年電腦，說放棄就放棄，真的很可惜。可是他覺得念電腦的人長時間使用電腦，沒時間建立跟人的關係，他不喜歡這樣的生活。他決定再考一次大學。他要念醫學系，他要用電腦幫助醫生醫治病人，讓醫生更了解病人，也希望能減少醫療糾紛，醫生不再有被告的壓力。他一邊當兵，一邊準備大學考試。經過一年多的努力，他終於考上了醫學系。',
      question: '他比較喜歡跟人有關係的工作。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"沒時間建立跟人的關係，他不喜歡這樣的生活"，表示他重視與人的關係。'
    },
    {
      id: 'L10-WB-read-b6', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '張德明從小成績就很好，從來沒讓父母失望過。大學考上了跟電腦有關的科系。他成績很好，教授推薦他上研究所。沒想到念了一年，覺得興趣不合，就休學去當兵了。大家都覺得在數一數二的大學裡學了五年電腦，說放棄就放棄，真的很可惜。可是他覺得念電腦的人長時間使用電腦，沒時間建立跟人的關係，他不喜歡這樣的生活。他決定再考一次大學。他要念醫學系，他要用電腦幫助醫生醫治病人，讓醫生更了解病人，也希望能減少醫療糾紛，醫生不再有被告的壓力。他一邊當兵，一邊準備大學考試。經過一年多的努力，他終於考上了醫學系。',
      question: '他念醫學系，是希望有一份穩定的工作。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '他念醫學系是希望用電腦幫助醫生醫治病人、減少醫療糾紛，不是為了穩定的工作。'
    },
    {
      id: 'L10-WB-read-b7', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '張德明從小成績就很好，從來沒讓父母失望過。大學考上了跟電腦有關的科系。他成績很好，教授推薦他上研究所。沒想到念了一年，覺得興趣不合，就休學去當兵了。大家都覺得在數一數二的大學裡學了五年電腦，說放棄就放棄，真的很可惜。可是他覺得念電腦的人長時間使用電腦，沒時間建立跟人的關係，他不喜歡這樣的生活。他決定再考一次大學。他要念醫學系，他要用電腦幫助醫生醫治病人，讓醫生更了解病人，也希望能減少醫療糾紛，醫生不再有被告的壓力。他一邊當兵，一邊準備大學考試。經過一年多的努力，他終於考上了醫學系。',
      question: '他的理想是研究出透過電腦醫治病人的方法。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"他要用電腦幫助醫生醫治病人，讓醫生更了解病人".'
    },
    {
      id: 'L10-WB-read-b8', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '張德明從小成績就很好，從來沒讓父母失望過。大學考上了跟電腦有關的科系。他成績很好，教授推薦他上研究所。沒想到念了一年，覺得興趣不合，就休學去當兵了。大家都覺得在數一數二的大學裡學了五年電腦，說放棄就放棄，真的很可惜。可是他覺得念電腦的人長時間使用電腦，沒時間建立跟人的關係，他不喜歡這樣的生活。他決定再考一次大學。他要念醫學系，他要用電腦幫助醫生醫治病人，讓醫生更了解病人，也希望能減少醫療糾紛，醫生不再有被告的壓力。他一邊當兵，一邊準備大學考試。經過一年多的努力，他終於考上了醫學系。',
      question: '考上醫學系對他來說很容易。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"經過一年多的努力，他終於考上了醫學系"，表示他考得並不容易。'
    },

    { id: 'L10-WB-dc-1', lessonId: 'L10', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L10-G1', turns: [{ speaker: 'A', text: '現在失業率這麼高，念服裝設計，將來找工作容易嗎？', isBlank: false }, { speaker: 'B', text: '（至於）', isBlank: true }], sampleAnswer: '這很難說，至於服裝設計好不好找工作，還是要看個人的能力和機會。' },
    { id: 'L10-WB-dc-2', lessonId: 'L10', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L10-G4', turns: [{ speaker: 'A', text: '聽說有不少人寧可再考兩、三年，非考上台大醫學系不可，是真的嗎？', isBlank: false }, { speaker: 'B', text: '（拿…來說）', isBlank: true }], sampleAnswer: '拿今年考上台大醫學系的人來說，大部分都重考了兩、三次才成功。' },
    { id: 'L10-WB-dc-3', lessonId: 'L10', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L10-G2', turns: [{ speaker: 'A', text: '花那麼多時間念醫學系值得嗎？', isBlank: false }, { speaker: 'B', text: '（看）', isBlank: true }], sampleAnswer: '值不值得，要看你對醫學系有沒有真正的興趣。' },
    { id: 'L10-WB-dc-4', lessonId: 'L10', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L10-G6', turns: [{ speaker: 'A', text: '小美最近好像心情不好，怎麼回事？', isBlank: false }, { speaker: 'B', text: '我也不清楚，（動不動）', isBlank: true }], sampleAnswer: '我也不清楚，她最近動不動就發脾氣，可能是壓力太大了。' },
    { id: 'L10-WB-dc-5', lessonId: 'L10', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L10-G3', turns: [{ speaker: 'A', text: '大明最近搬回去跟父母一起住，是因為生活有問題嗎？', isBlank: false }, { speaker: 'B', text: '恐怕是他父母生病了。（一向）', isBlank: true }], sampleAnswer: '恐怕是他父母生病了。他一向很孝順，所以才搬回去照顧他們。' },

    {
      id: 'L10-WB-comp-1', lessonId: 'L10', section: 'composition', type: 'composition',
      topicVi: 'Hãy nói lên quan điểm của bạn về phẫu thuật thẩm mỹ. Bạn ủng hộ hay phản đối? Vì sao?',
      requiredWords: ['L10-020', 'L10-001', 'L10-014', 'L10-018', 'L10-022', 'L10-026', 'L10-039', 'L10-042', 'L10-043', 'L10-044', 'L10-045', 'L10-054', 'L10-055', 'L10-057', 'L10-062', 'L10-067'],
      requiredPatterns: ['L10-G1', 'L10-G3', 'L10-G2'],
      minLength: 200, maxLength: 250
    }
  ]
}
