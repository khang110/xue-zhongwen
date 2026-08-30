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
      { speaker: '', traditional: '（在醫院的病房，安德思躺在床上）', simplified: '（在医院的病房，安德思躺在床上）', pinyin: '(Zài yīyuàn de bìngfáng, Āndésī tǎng zài chuáng shàng)', english: "(In a hospital room, Andesi lying in bed)", vietnamese: '(Trong phòng bệnh, An Đức Tư nằm trên giường)' },
      { speaker: '陳敏萱', traditional: '你看起來好多了。到底怎麼回事？我們昨天接到電話都嚇死了。', simplified: '你看起来好多了。到底怎么回事？我们昨天接到电话都吓死了。', pinyin: 'Nǐ kàn qǐlái hǎo duō le. Dàodǐ zěnme huí shì? Wǒmen zuótiān jiēdào diànhuà dōu xià sǐ le.', english: "You look much better. What exactly happened? We were terrified when we got the call yesterday.", vietnamese: 'Trông cậu khá hơn nhiều rồi. Rốt cuộc là chuyện gì thế? Hôm qua bọn mình nhận điện thoại sợ chết khiếp.' },
      { speaker: '安德思', traditional: '前天半夜肚子突然很痛，痛到冒冷汗。室友叫了救護車，送來急診。醫生說是盲腸炎，差點就破掉了，非開刀不可。', simplified: '前天半夜肚子突然很痛，痛到冒冷汗。室友叫了救护车，送来急诊。医生说是盲肠炎，差点就破掉了，非开刀不可。', pinyin: 'Qiántiān bànyè dùzi tūrán hěn tòng, tòng dào mào lěnghàn. Shìyǒu jiào le jiùhùchē, sòng lái jízhěn. Yīshēng shuō shì mángchángyán, chàdiǎn jiù pò diào le, fēi kāidāo bùkě.', english: "The night before last my stomach suddenly hurt badly—so much I broke into a cold sweat. My roommate called an ambulance and I was brought to the ER. The doctor said it was appendicitis and it had almost burst; surgery was a must.", vietnamese: 'Nửa đêm hôm kia bụng bỗng đau dữ dội, đau đến toát mồ hôi lạnh. Bạn cùng phòng gọi xe cứu thương, đưa mình vào cấp cứu. Bác sĩ nói là viêm ruột thừa, suýt nữa thì vỡ, nhất định phải mổ.' },
      { speaker: '高橋健太', traditional: '這麼嚴重！那手術順利嗎？', simplified: '这么严重！那手术顺利吗？', pinyin: 'Zhème yánzhòng! Nà shǒushù shùnlì ma?', english: 'That serious! Did the surgery go well?', vietnamese: 'Nghiêm trọng vậy! Thế ca phẫu thuật có thuận lợi không?' },
      { speaker: '安德思', traditional: '還好，很小的手術。可是醒來以後又餓又痛，恨不得馬上出院。', simplified: '还好，很小的手术。可是醒来以后又饿又痛，恨不得马上出院。', pinyin: 'Hái hǎo, hěn xiǎo de shǒushù. Kěshì xǐng lái yǐhòu yòu è yòu tòng, hènbudé mǎshàng chūyuàn.', english: "It was OK, a minor operation. But after waking up, hungry and in pain, I couldn't wait to be discharged.", vietnamese: 'Cũng ổn, ca mổ nhỏ thôi. Nhưng tỉnh dậy vừa đói vừa đau, chỉ mong được ra viện ngay.' },
      { speaker: '羅珊蒂', traditional: '住院要住幾天？', simplified: '住院要住几天？', pinyin: 'Zhùyuàn yào zhù jǐ tiān?', english: 'How many days do you have to stay?', vietnamese: 'Nằm viện phải nằm mấy ngày?' },
      { speaker: '安德思', traditional: '醫生說要觀察到星期五為止，如果都沒發燒就可以走。', simplified: '医生说要观察到星期五为止，如果都没发烧就可以走。', pinyin: 'Yīshēng shuō yào guānchá dào xīngqíwǔ wéizhǐ, rúguǒ dōu méi fāshāo jiù kěyǐ zǒu.', english: "The doctor said they'll monitor me until Friday; if I don't run a fever, I can leave.", vietnamese: 'Bác sĩ nói phải theo dõi cho đến thứ Sáu, nếu không sốt thì được về.' },
      { speaker: '陳敏萱', traditional: '健保有給付吧？', simplified: '健保有给付吧？', pinyin: 'Jiànbǎo yǒu jǐfù ba?', english: 'Health insurance covers it, right?', vietnamese: 'Bảo hiểm y tế có chi trả chứ?' },
      { speaker: '安德思', traditional: '大部分有。我趁還在念書辦了學生保險，這次自己只付了一點點。要不然光是病房費就受不了。', simplified: '大部分有。我趁还在念书办了学生保险，这次自己只付了一点点。要不然光是病房费就受不了。', pinyin: 'Dà bùfèn yǒu. Wǒ chèn hái zài niànshū bàn le xuéshēng bǎoxiǎn, zhè cì zìjǐ zhǐ fù le yìdiǎndiǎn. Yàobùrán guāng shì bìngfáng fèi jiù shòu bù liǎo.', english: "Most of it. I got student insurance while I was still studying, so this time I only paid a tiny bit myself. Otherwise the room charges alone would be unbearable.", vietnamese: 'Phần lớn có. Mình tranh thủ lúc còn đi học đã làm bảo hiểm sinh viên, lần này tự trả rất ít. Không thì chỉ riêng tiền phòng bệnh đã chịu không nổi.' },
      { speaker: '高橋健太', traditional: '這就是台灣醫療好的地方。在我朋友的國家，一次盲腸手術可能要花好幾十萬。', simplified: '这就是台湾医疗好的地方。在我朋友的国家，一次盲肠手术可能要花好几十万。', pinyin: 'Zhè jiùshì Táiwān yīliáo hǎo de dìfāng. Zài wǒ péngyǒu de guójiā, yí cì mángcháng shǒushù kěnéng yào huā hǎojǐshíwàn.', english: "That's what's good about Taiwan's healthcare. In my friend's country, an appendix operation could cost several hundred thousand.", vietnamese: 'Đây chính là điểm hay của y tế Đài Loan. Ở nước bạn mình, một ca mổ ruột thừa có thể tốn mấy trăm nghìn.' },
      { speaker: '羅珊蒂', traditional: '對啊。你就安心養病，功課的事我們幫你跟老師說。', simplified: '对啊。你就安心养病，功课的事我们帮你跟老师说。', pinyin: 'Duì a. Nǐ jiù ānxīn yǎngbìng, gōngkè de shì wǒmen bāng nǐ gēn lǎoshī shuō.', english: "Right. Just focus on recovering; we'll tell the teacher about your coursework for you.", vietnamese: 'Đúng vậy. Cậu cứ yên tâm dưỡng bệnh, chuyện bài vở bọn mình nói với thầy cô giúp cậu.' },
      { speaker: '安德思', traditional: '謝謝。其實躺在這裡這幾天，我想了很多。以前總覺得年輕，身體怎麼操都沒關係。', simplified: '谢谢。其实躺在这里这几天，我想了很多。以前总觉得年轻，身体怎么操都没关系。', pinyin: 'Xièxie. Qíshí tǎng zài zhèlǐ zhè jǐ tiān, wǒ xiǎng le hěn duō. Yǐqián zǒng juéde niánqīng, shēntǐ zěnme cāo dōu méi guānxì.', english: "Thanks. Actually, lying here these few days, I've thought a lot. I always figured I was young and could push my body however I liked.", vietnamese: 'Cảm ơn. Thật ra nằm ở đây mấy ngày này, mình nghĩ nhiều lắm. Trước đây cứ nghĩ mình còn trẻ, hành hạ cơ thể thế nào cũng không sao.' },
      { speaker: '陳敏萱', traditional: '這次就當作提醒。出院以後別急著趕進度，慢慢把身體養回來，再繼續拚下去。', simplified: '这次就当作提醒。出院以后别急着赶进度，慢慢把身体养回来，再继续拼下去。', pinyin: 'Zhè cì jiù dàngzuò tíxǐng. Chūyuàn yǐhòu bié jízhe gǎn jìndù, mànmàn bǎ shēntǐ yǎng huílái, zài jìxù pàn xiàqù.', english: "Take this as a reminder. After you're discharged, don't rush to catch up—recover slowly, then keep pushing on.", vietnamese: 'Lần này coi như một lời nhắc nhở. Sau khi ra viện đừng vội chạy theo tiến độ, từ từ dưỡng cho khỏe lại, rồi tiếp tục dốc sức.' },
      { speaker: '安德思', traditional: '我知道了。醫生也說，這種病跟平常吃太油、又不運動有關。', simplified: '我知道了。医生也说，这种病跟平常吃太油、又不运动有关。', pinyin: 'Wǒ zhīdào le. Yīshēng yě shuō, zhè zhǒng bìng gēn píngcháng chī tài yóu, yòu bú yùndòng yǒuguān.', english: "I know. The doctor also said this kind of illness is linked to eating too greasy and not exercising.", vietnamese: 'Mình hiểu rồi. Bác sĩ cũng nói, loại bệnh này liên quan đến việc thường ngày ăn quá nhiều dầu mỡ lại không vận động.' },
      { speaker: '高橋健太', traditional: '那我們以後約你，就約去運動，不約吃到飽了。', simplified: '那我们以后约你，就约去运动，不约吃到饱了。', pinyin: 'Nà wǒmen yǐhòu yuē nǐ, jiù yuē qù yùndòng, bù yuē chīdàobǎo le.', english: "Then from now on when we invite you out, it'll be to exercise, not to a buffet.", vietnamese: 'Vậy sau này rủ cậu, bọn mình rủ đi tập thể dục, không rủ đi ăn buffet nữa.' },
      { speaker: '安德思', traditional: '好啊。不過等我出院，第一件事還是想先好好吃一頓熱的。', simplified: '好啊。不过等我出院，第一件事还是想先好好吃一顿热的。', pinyin: 'Hǎo a. Búguò děng wǒ chūyuàn, dì-yī jiàn shì háishì xiǎng xiān hǎohǎo chī yí dùn rè de.', english: "Sure. But when I get out, the first thing I want is a proper hot meal.", vietnamese: 'Được. Nhưng đợi mình ra viện, việc đầu tiên vẫn là muốn ăn cho đàng hoàng một bữa nóng.' },
      { speaker: '羅珊蒂', traditional: '哈，看來是真的好多了。', simplified: '哈，看来是真的好多了。', pinyin: 'Hā, kànlái shì zhēn de hǎo duō le.', english: 'Ha, looks like you really are much better.', vietnamese: 'Ha, xem ra là thật sự khá hơn nhiều rồi.' }
    ]
  ],

  shortReading: {
    traditional:
      '台灣的全民健保\n\n　　台灣的「全民健保」從一九九五年開始實施，到現在已經三十年。不管收入多少，每個人都要繳保費；生病看醫生的時候，大部分的費用由健保分擔，個人只付一小部分。\n\n　　因為這樣，即使得了大病、需要開刀住院，一般家庭的財務壓力也不會太大。很多住過院的外國人都說，這是台灣最讓他們安心的地方：不必先擔心錢，可以先安心養病。\n\n　　不過，健保也面臨挑戰。人口老化，使用醫療的人越來越多；有些人習慣小病也跑大醫院、隨便掛急診，讓有限的資源被濫用。長期下來，健保的財務壓力越來越大。\n\n　　專家建議，除了政府要想辦法讓制度走得長久、走得公平，民眾也可以幫忙：小病先看附近的門診、不隨便掛急診，並且透過定期檢查和規律的作息來預防疾病，特別是慢性病。健康的人越多，大家一起分擔的負擔就越輕，這個制度也才走得下去。',
    simplified:
      '台湾的全民健保\n\n　　台湾的「全民健保」从一九九五年开始实施，到现在已经三十年。不管收入多少，每个人都要缴保费；生病看医生的时候，大部分的费用由健保分担，个人只付一小部分。\n\n　　因为这样，即使得了大病、需要开刀住院，一般家庭的财务压力也不会太大。很多住过院的外国人都说，这是台湾最让他们安心的地方：不必先担心钱，可以先安心养病。\n\n　　不过，健保也面临挑战。人口老化，使用医疗的人越来越多；有些人习惯小病也跑大医院、随便挂急诊，让有限的资源被滥用。长期下来，健保的财务压力越来越大。\n\n　　专家建议，除了政府要想办法让制度走得长久、走得公平，民众也可以帮忙：小病先看附近的门诊、不随便挂急诊，并且透过定期检查和规律的作息来预防疾病，特别是慢性病。健康的人越多，大家一起分担的负担就越轻，这个制度也才走得下去。',
    vietnamese:
      'Bảo hiểm y tế toàn dân của Đài Loan\n\n"Bảo hiểm y tế toàn dân" của Đài Loan bắt đầu thực hiện từ năm 1995, đến nay đã ba mươi năm. Bất kể thu nhập bao nhiêu, mỗi người đều phải đóng phí bảo hiểm; khi ốm đi khám, phần lớn chi phí do bảo hiểm y tế cùng gánh, cá nhân chỉ trả một phần nhỏ.\n\nNhờ vậy, dù mắc bệnh nặng, cần mổ, nằm viện, áp lực tài chính của một gia đình bình thường cũng không quá lớn. Nhiều người nước ngoài từng nằm viện đều nói, đây là điều khiến họ yên tâm nhất ở Đài Loan: không phải lo tiền trước, có thể yên tâm dưỡng bệnh trước.\n\nTuy nhiên, bảo hiểm y tế cũng đối mặt với thách thức. Dân số già hóa, người sử dụng dịch vụ y tế ngày càng nhiều; một số người quen bệnh nhẹ cũng chạy đến bệnh viện lớn, tùy tiện vào cấp cứu, khiến nguồn lực hữu hạn bị lạm dụng. Về lâu dài, áp lực tài chính của bảo hiểm y tế ngày càng lớn.\n\nChuyên gia khuyến nghị, ngoài việc chính phủ phải tìm cách để hệ thống vận hành bền vững, công bằng, người dân cũng có thể góp sức: bệnh nhẹ trước tiên đi khám ngoại trú gần nhà, không tùy tiện vào cấp cứu, và thông qua kiểm tra định kỳ cùng giờ giấc sinh hoạt điều độ để phòng ngừa bệnh tật, đặc biệt là bệnh mãn tính. Càng nhiều người khỏe mạnh, gánh nặng mà mọi người cùng chia sẻ càng nhẹ, và hệ thống này mới đi tiếp được.'
  },

  phrases: [
    { phraseTraditional: '痛到冒冷汗', phraseSimplified: '痛到冒冷汗', pinyin: 'tòng dào mào lěnghàn', meaningVi: 'đau đến toát mồ hôi lạnh' },
    { phraseTraditional: '差點就破掉了', phraseSimplified: '差点就破掉了', pinyin: 'chàdiǎn jiù pò diào le', meaningVi: 'suýt nữa thì vỡ' },
    { phraseTraditional: '非…不可', phraseSimplified: '非…不可', pinyin: 'fēi… bùkě', meaningVi: 'nhất định phải…' },
    { phraseTraditional: '恨不得馬上出院', phraseSimplified: '恨不得马上出院', pinyin: 'hènbudé mǎshàng chūyuàn', meaningVi: 'chỉ mong ra viện ngay' },
    { phraseTraditional: '安心養病', phraseSimplified: '安心养病', pinyin: 'ānxīn yǎngbìng', meaningVi: 'yên tâm dưỡng bệnh' },
    { phraseTraditional: '趕進度', phraseSimplified: '赶进度', pinyin: 'gǎn jìndù', meaningVi: 'chạy theo tiến độ' },
    { phraseTraditional: '好好吃一頓熱的', phraseSimplified: '好好吃一顿热的', pinyin: 'hǎohǎo chī yí dùn rè de', meaningVi: 'ăn cho đàng hoàng một bữa nóng' }
  ],

  vocab: [
    { id: 'L10-001', lessonId: 'L10', order: 1, group: 'vocab1', traditional: '住院', simplified: '住院', pinyin: 'zhùyuàn', wordClass: ['V-sep'], meaningVi: 'nhập viện, nằm viện', meaningEn: 'to be hospitalized', tags: ['suc-khoe'], examples: [{ traditional: '這次盲腸炎，我住院住了一個星期。', simplified: '这次盲肠炎，我住院住了一个星期。', vietnamese: 'Lần viêm ruột thừa này, mình nằm viện một tuần.' }] },
    { id: 'L10-002', lessonId: 'L10', order: 2, group: 'vocab1', traditional: '病房', simplified: '病房', pinyin: 'bìngfáng', wordClass: ['N'], meaningVi: 'phòng bệnh', meaningEn: 'hospital ward, patient room', tags: ['suc-khoe'], examples: [{ traditional: '光是病房費就受不了。', simplified: '光是病房费就受不了。', vietnamese: 'Chỉ riêng tiền phòng bệnh đã chịu không nổi.' }] },
    { id: 'L10-003', lessonId: 'L10', order: 3, group: 'vocab1', traditional: '冒', simplified: '冒', pinyin: 'mào', wordClass: ['V'], meaningVi: 'toát ra, bốc lên (mồ hôi, khói)', meaningEn: 'to give off, to break out in', examples: [{ traditional: '肚子痛到冒冷汗。', simplified: '肚子痛到冒冷汗。', vietnamese: 'Bụng đau đến toát mồ hôi lạnh.' }] },
    { id: 'L10-004', lessonId: 'L10', order: 4, group: 'vocab1', traditional: '室友', simplified: '室友', pinyin: 'shìyǒu', wordClass: ['N'], meaningVi: 'bạn cùng phòng', meaningEn: 'roommate', examples: [{ traditional: '室友幫我叫了救護車。', simplified: '室友帮我叫了救护车。', vietnamese: 'Bạn cùng phòng gọi xe cứu thương giúp mình.' }] },
    { id: 'L10-005', lessonId: 'L10', order: 5, group: 'vocab1', traditional: '救護車', simplified: '救护车', pinyin: 'jiùhùchē', wordClass: ['N'], meaningVi: 'xe cứu thương', meaningEn: 'ambulance', tags: ['suc-khoe'], examples: [{ traditional: '半夜叫了救護車送我去急診。', simplified: '半夜叫了救护车送我去急诊。', vietnamese: 'Nửa đêm gọi xe cứu thương đưa mình đi cấp cứu.' }] },
    { id: 'L10-006', lessonId: 'L10', order: 6, group: 'vocab1', traditional: '急診', simplified: '急诊', pinyin: 'jízhěn', wordClass: ['N'], meaningVi: 'cấp cứu, khám cấp cứu', meaningEn: 'emergency (room), ER', tags: ['suc-khoe'], examples: [{ traditional: '小病最好別隨便掛急診。', simplified: '小病最好别随便挂急诊。', vietnamese: 'Bệnh nhẹ tốt nhất đừng tùy tiện vào cấp cứu.' }] },
    { id: 'L10-007', lessonId: 'L10', order: 7, group: 'vocab1', traditional: '盲腸炎', simplified: '盲肠炎', pinyin: 'mángchángyán', wordClass: ['N'], meaningVi: 'viêm ruột thừa', meaningEn: 'appendicitis', tags: ['suc-khoe'], examples: [{ traditional: '醫生說是盲腸炎，差點就破掉了。', simplified: '医生说是盲肠炎，差点就破掉了。', vietnamese: 'Bác sĩ nói là viêm ruột thừa, suýt nữa thì vỡ.' }] },
    { id: 'L10-008', lessonId: 'L10', order: 8, group: 'vocab1', traditional: '開刀', simplified: '开刀', pinyin: 'kāidāo', wordClass: ['V-sep'], meaningVi: 'mổ, phẫu thuật', meaningEn: 'to have an operation, to operate', tags: ['suc-khoe'], examples: [{ traditional: '這種情況非開刀不可。', simplified: '这种情况非开刀不可。', vietnamese: 'Tình huống này nhất định phải mổ.' }] },
    { id: 'L10-009', lessonId: 'L10', order: 9, group: 'vocab1', traditional: '手術', simplified: '手术', pinyin: 'shǒushù', wordClass: ['N'], meaningVi: 'ca phẫu thuật', meaningEn: 'surgery, operation', tags: ['suc-khoe'], examples: [{ traditional: '還好只是很小的手術。', simplified: '还好只是很小的手术。', vietnamese: 'May mà chỉ là ca mổ nhỏ.' }] },
    { id: 'L10-010', lessonId: 'L10', order: 10, group: 'vocab1', traditional: '醒', simplified: '醒', pinyin: 'xǐng', wordClass: ['Vp'], meaningVi: 'tỉnh (dậy), tỉnh lại', meaningEn: 'to wake up, to regain consciousness', examples: [{ traditional: '手術後醒過來，又餓又痛。', simplified: '手术后醒过来，又饿又痛。', vietnamese: 'Sau ca mổ tỉnh lại, vừa đói vừa đau.' }] },
    { id: 'L10-011', lessonId: 'L10', order: 11, group: 'vocab1', traditional: '出院', simplified: '出院', pinyin: 'chūyuàn', wordClass: ['V-sep'], meaningVi: 'xuất viện, ra viện', meaningEn: 'to be discharged from hospital', tags: ['suc-khoe'], examples: [{ traditional: '如果都沒發燒，星期五就可以出院。', simplified: '如果都没发烧，星期五就可以出院。', vietnamese: 'Nếu không sốt, thứ Sáu là được ra viện.' }] },
    { id: 'L10-012', lessonId: 'L10', order: 12, group: 'vocab1', traditional: '觀察', simplified: '观察', pinyin: 'guānchá', wordClass: ['V'], meaningVi: 'quan sát, theo dõi', meaningEn: 'to observe, to monitor', examples: [{ traditional: '醫生說要再觀察兩天。', simplified: '医生说要再观察两天。', vietnamese: 'Bác sĩ nói phải theo dõi thêm hai ngày.' }] },
    { id: 'L10-013', lessonId: 'L10', order: 13, group: 'vocab1', traditional: '發燒', simplified: '发烧', pinyin: 'fāshāo', wordClass: ['V-sep'], meaningVi: 'sốt, lên cơn sốt', meaningEn: 'to have a fever', tags: ['suc-khoe'], examples: [{ traditional: '只要不再發燒就可以走。', simplified: '只要不再发烧就可以走。', vietnamese: 'Chỉ cần không sốt nữa là được về.' }] },
    { id: 'L10-014', lessonId: 'L10', order: 14, group: 'vocab1', traditional: '健保', simplified: '健保', pinyin: 'jiànbǎo', wordClass: ['N'], meaningVi: 'bảo hiểm y tế (toàn dân)', meaningEn: 'National Health Insurance', tags: ['suc-khoe'], examples: [{ traditional: '大部分的費用健保都有給付。', simplified: '大部分的费用健保都有给付。', vietnamese: 'Phần lớn chi phí bảo hiểm y tế đều chi trả.' }] },
    { id: 'L10-015', lessonId: 'L10', order: 15, group: 'vocab1', traditional: '給付', simplified: '给付', pinyin: 'jǐfù', wordClass: ['V', 'N'], meaningVi: 'chi trả (bảo hiểm)', meaningEn: '(of insurance) to pay out; payment', examples: [{ traditional: '這項檢查健保沒有給付，要自費。', simplified: '这项检查健保没有给付，要自费。', vietnamese: 'Khoản kiểm tra này bảo hiểm không chi trả, phải tự trả.' }] },
    { id: 'L10-016', lessonId: 'L10', order: 16, group: 'vocab1', traditional: '保險', simplified: '保险', pinyin: 'bǎoxiǎn', wordClass: ['N'], meaningVi: 'bảo hiểm', meaningEn: 'insurance', examples: [{ traditional: '我趁還在念書辦了學生保險。', simplified: '我趁还在念书办了学生保险。', vietnamese: 'Mình tranh thủ lúc còn đi học đã làm bảo hiểm sinh viên.' }] },
    { id: 'L10-017', lessonId: 'L10', order: 17, group: 'vocab1', traditional: '養病', simplified: '养病', pinyin: 'yǎngbìng', wordClass: ['V-sep'], meaningVi: 'dưỡng bệnh, tĩnh dưỡng', meaningEn: 'to recuperate, to convalesce', tags: ['suc-khoe'], examples: [{ traditional: '你就安心養病，別的事我們處理。', simplified: '你就安心养病，别的事我们处理。', vietnamese: 'Cậu cứ yên tâm dưỡng bệnh, việc khác bọn mình lo.' }] },
    { id: 'L10-018', lessonId: 'L10', order: 18, group: 'vocab1', traditional: '進度', simplified: '进度', pinyin: 'jìndù', wordClass: ['N'], meaningVi: 'tiến độ', meaningEn: 'progress, pace', tags: ['giao-duc'], examples: [{ traditional: '出院以後別急著趕進度。', simplified: '出院以后别急着赶进度。', vietnamese: 'Sau khi ra viện đừng vội chạy theo tiến độ.' }] },
    { id: 'L10-019', lessonId: 'L10', order: 19, group: 'vocab1', traditional: '拚', simplified: '拼', pinyin: 'pàn', wordClass: ['V'], meaningVi: 'nỗ lực hết sức, dốc sức, liều', meaningEn: 'to go all out, to strive hard', examples: [{ traditional: '把身體養好，再繼續拚下去。', simplified: '把身体养好，再继续拼下去。', vietnamese: 'Dưỡng cho khỏe rồi tiếp tục dốc sức.' }] },
    { id: 'L10-020', lessonId: 'L10', order: 20, group: 'vocab1', traditional: '操', simplified: '操', pinyin: 'cāo', wordClass: ['V'], meaningVi: 'hành hạ, vắt kiệt sức (cơ thể)', meaningEn: 'to overwork, to drive (the body) hard', examples: [{ traditional: '以前總覺得年輕，身體怎麼操都沒關係。', simplified: '以前总觉得年轻，身体怎么操都没关系。', vietnamese: 'Trước đây cứ nghĩ mình trẻ, hành hạ cơ thể thế nào cũng không sao.' }] },
    { id: 'L10-021', lessonId: 'L10', order: 21, group: 'vocab1', traditional: '復原', simplified: '复原', pinyin: 'fùyuán', wordClass: ['Vi'], meaningVi: 'hồi phục, bình phục', meaningEn: 'to recover, to be restored', tags: ['suc-khoe'], examples: [{ traditional: '這種手術復原得很快。', simplified: '这种手术复原得很快。', vietnamese: 'Loại phẫu thuật này hồi phục rất nhanh.' }] },
    { id: 'L10-022', lessonId: 'L10', order: 22, group: 'vocab1', traditional: '吃到飽', simplified: '吃到饱', pinyin: 'chīdàobǎo', wordClass: ['N'], meaningVi: 'buffet ăn thả ga', meaningEn: 'all-you-can-eat buffet', tags: ['am-thuc'], examples: [{ traditional: '以後別再約他去吃到飽了。', simplified: '以后别再约他去吃到饱了。', vietnamese: 'Sau này đừng rủ anh ấy đi ăn buffet nữa.' }] },
    { id: 'L10-023', lessonId: 'L10', order: 23, group: 'vocab1', traditional: '病人', simplified: '病人', pinyin: 'bìngrén', wordClass: ['N'], meaningVi: 'bệnh nhân, người bệnh', meaningEn: 'patient', tags: ['suc-khoe'], examples: [{ traditional: '急診分級是為了讓緊急的病人先看。', simplified: '急诊分级是为了让紧急的病人先看。', vietnamese: 'Phân loại cấp cứu là để bệnh nhân nguy cấp được khám trước.' }] },
    { id: 'L10-024', lessonId: 'L10', order: 24, group: 'vocab1', traditional: '檢查', simplified: '检查', pinyin: 'jiǎnchá', wordClass: ['V', 'N'], meaningVi: 'kiểm tra, khám (sức khỏe)', meaningEn: 'to examine, to check up; examination', tags: ['suc-khoe'], examples: [{ traditional: '定期做健康檢查，可以早點發現問題。', simplified: '定期做健康检查，可以早点发现问题。', vietnamese: 'Kiểm tra sức khỏe định kỳ giúp phát hiện vấn đề sớm.' }] },
    { id: 'L10-025', lessonId: 'L10', order: 25, group: 'vocab1', traditional: '打針', simplified: '打针', pinyin: 'dǎzhēn', wordClass: ['V-sep'], meaningVi: 'tiêm, chích', meaningEn: 'to get an injection', tags: ['suc-khoe'], examples: [{ traditional: '住院這幾天每天都要打針。', simplified: '住院这几天每天都要打针。', vietnamese: 'Mấy ngày nằm viện ngày nào cũng phải tiêm.' }] },
    { id: 'L10-026', lessonId: 'L10', order: 26, group: 'vocab1', traditional: '難受', simplified: '难受', pinyin: 'nánshòu', wordClass: ['Vs'], meaningVi: 'khó chịu (trong người), khổ sở', meaningEn: 'to feel unwell, uncomfortable', examples: [{ traditional: '剛醒來的時候全身都很難受。', simplified: '刚醒来的时候全身都很难受。', vietnamese: 'Lúc mới tỉnh dậy toàn thân đều rất khó chịu.' }] },

    { id: 'L10-027', lessonId: 'L10', order: 1, group: 'vocab2', traditional: '全民', simplified: '全民', pinyin: 'quánmín', wordClass: ['N'], meaningVi: 'toàn dân', meaningEn: 'the whole population, all citizens', examples: [{ traditional: '台灣的全民健保被很多國家研究。', simplified: '台湾的全民健保被很多国家研究。', vietnamese: 'Bảo hiểm y tế toàn dân của Đài Loan được nhiều nước nghiên cứu.' }] },
    { id: 'L10-028', lessonId: 'L10', order: 2, group: 'vocab2', traditional: '制度', simplified: '制度', pinyin: 'zhìdù', wordClass: ['N'], meaningVi: 'chế độ, hệ thống', meaningEn: 'system, institution', examples: [{ traditional: '這是一個被認為很成功的制度。', simplified: '这是一个被认为很成功的制度。', vietnamese: 'Đây là một chế độ được coi là rất thành công.' }] },
    { id: 'L10-029', lessonId: 'L10', order: 3, group: 'vocab2', traditional: '保費', simplified: '保费', pinyin: 'bǎofèi', wordClass: ['N'], meaningVi: 'phí bảo hiểm', meaningEn: 'insurance premium', examples: [{ traditional: '不管收入多少，每個人都要繳保費。', simplified: '不管收入多少，每个人都要缴保费。', vietnamese: 'Bất kể thu nhập bao nhiêu, mỗi người đều phải đóng phí bảo hiểm.' }] },
    { id: 'L10-030', lessonId: 'L10', order: 4, group: 'vocab2', traditional: '就醫', simplified: '就医', pinyin: 'jiùyī', wordClass: ['Vi'], meaningVi: 'đi khám bệnh, đi chữa bệnh', meaningEn: 'to seek medical treatment', tags: ['suc-khoe'], examples: [{ traditional: '小病建議白天到門診就醫。', simplified: '小病建议白天到门诊就医。', vietnamese: 'Bệnh nhẹ nên đi khám ngoại trú vào ban ngày.' }] },
    { id: 'L10-031', lessonId: 'L10', order: 5, group: 'vocab2', traditional: '掛號', simplified: '挂号', pinyin: 'guàhào', wordClass: ['V-sep'], meaningVi: 'đăng ký khám (lấy số)', meaningEn: 'to register (for a doctor visit)', tags: ['suc-khoe'], examples: [{ traditional: '看醫生要先掛號。', simplified: '看医生要先挂号。', vietnamese: 'Đi khám phải đăng ký lấy số trước.' }] },
    { id: 'L10-032', lessonId: 'L10', order: 6, group: 'vocab2', traditional: '門診', simplified: '门诊', pinyin: 'ménzhěn', wordClass: ['N'], meaningVi: 'khám ngoại trú, phòng khám', meaningEn: 'outpatient clinic', tags: ['suc-khoe'], examples: [{ traditional: '拿慢性病的藥可以到門診。', simplified: '拿慢性病的药可以到门诊。', vietnamese: 'Lấy thuốc bệnh mãn tính có thể đến khám ngoại trú.' }] },
    { id: 'L10-033', lessonId: 'L10', order: 7, group: 'vocab2', traditional: '負擔', simplified: '负担', pinyin: 'fùdān', wordClass: ['N', 'V'], meaningVi: 'gánh nặng; gánh vác', meaningEn: 'burden; to bear (a cost)', examples: [{ traditional: '有健保，個人的財務負擔就不會太重。', simplified: '有健保，个人的财务负担就不会太重。', vietnamese: 'Có bảo hiểm y tế, gánh nặng tài chính của cá nhân sẽ không quá lớn.' }] },
    { id: 'L10-034', lessonId: 'L10', order: 8, group: 'vocab2', traditional: '財務', simplified: '财务', pinyin: 'cáiwù', wordClass: ['N'], meaningVi: 'tài chính', meaningEn: 'finances, financial affairs', examples: [{ traditional: '一場大病常常影響一個家庭的財務。', simplified: '一场大病常常影响一个家庭的财务。', vietnamese: 'Một trận bệnh nặng thường ảnh hưởng đến tài chính của một gia đình.' }] },
    { id: 'L10-035', lessonId: 'L10', order: 9, group: 'vocab2', traditional: '老化', simplified: '老化', pinyin: 'lǎohuà', wordClass: ['Vi'], meaningVi: 'lão hóa (dân số)', meaningEn: 'to age (of a population)', examples: [{ traditional: '人口老化，使用醫療的人越來越多。', simplified: '人口老化，使用医疗的人越来越多。', vietnamese: 'Dân số già hóa, người sử dụng dịch vụ y tế ngày càng nhiều.' }] },
    { id: 'L10-036', lessonId: 'L10', order: 10, group: 'vocab2', traditional: '資源', simplified: '资源', pinyin: 'zīyuán', wordClass: ['N'], meaningVi: 'tài nguyên, nguồn lực', meaningEn: 'resources', examples: [{ traditional: '醫療資源有限，不應該被濫用。', simplified: '医疗资源有限，不应该被滥用。', vietnamese: 'Nguồn lực y tế có hạn, không nên bị lạm dụng.' }] },
    { id: 'L10-037', lessonId: 'L10', order: 11, group: 'vocab2', traditional: '濫用', simplified: '滥用', pinyin: 'lànyòng', wordClass: ['V'], meaningVi: 'lạm dụng', meaningEn: 'to abuse, to overuse', examples: [{ traditional: '小病也掛急診，就是一種資源的濫用。', simplified: '小病也挂急诊，就是一种资源的滥用。', vietnamese: 'Bệnh nhẹ cũng vào cấp cứu chính là một kiểu lạm dụng nguồn lực.' }] },
    { id: 'L10-038', lessonId: 'L10', order: 12, group: 'vocab2', traditional: '預防', simplified: '预防', pinyin: 'yùfáng', wordClass: ['V'], meaningVi: 'phòng ngừa', meaningEn: 'to prevent', tags: ['suc-khoe'], examples: [{ traditional: '規律的作息可以預防很多慢性病。', simplified: '规律的作息可以预防很多慢性病。', vietnamese: 'Giờ giấc sinh hoạt điều độ có thể phòng ngừa nhiều bệnh mãn tính.' }] },
    { id: 'L10-039', lessonId: 'L10', order: 13, group: 'vocab2', traditional: '定期', simplified: '定期', pinyin: 'dìngqī', wordClass: ['Adv', 'Vs-attr'], meaningVi: 'định kỳ', meaningEn: 'regularly; periodic', examples: [{ traditional: '最好定期做健康檢查。', simplified: '最好定期做健康检查。', vietnamese: 'Tốt nhất nên kiểm tra sức khỏe định kỳ.' }] },
    { id: 'L10-040', lessonId: 'L10', order: 14, group: 'vocab2', traditional: '篩檢', simplified: '筛检', pinyin: 'shāijiǎn', wordClass: ['N', 'V'], meaningVi: 'tầm soát, sàng lọc (bệnh)', meaningEn: 'screening; to screen', tags: ['suc-khoe'], examples: [{ traditional: '很多癌症如果早點篩檢，治好的機會就高。', simplified: '很多癌症如果早点筛检，治好的机会就高。', vietnamese: 'Nhiều loại ung thư nếu tầm soát sớm thì cơ hội chữa khỏi cao.' }] },
    { id: 'L10-041', lessonId: 'L10', order: 15, group: 'vocab2', traditional: '慢性病', simplified: '慢性病', pinyin: 'mànxìngbìng', wordClass: ['N'], meaningVi: 'bệnh mãn tính', meaningEn: 'chronic disease', tags: ['suc-khoe'], examples: [{ traditional: '高血壓、糖尿病都是常見的慢性病。', simplified: '高血压、糖尿病都是常见的慢性病。', vietnamese: 'Cao huyết áp, tiểu đường đều là bệnh mãn tính thường gặp.' }] },
    { id: 'L10-042', lessonId: 'L10', order: 16, group: 'vocab2', traditional: '作息', simplified: '作息', pinyin: 'zuòxī', wordClass: ['N'], meaningVi: 'giờ giấc sinh hoạt (làm việc và nghỉ ngơi)', meaningEn: 'daily routine (of work and rest)', examples: [{ traditional: '這次生病跟我作息太亂有關。', simplified: '这次生病跟我作息太乱有关。', vietnamese: 'Lần bệnh này liên quan đến việc giờ giấc sinh hoạt của mình quá lộn xộn.' }] },
    { id: 'L10-043', lessonId: 'L10', order: 17, group: 'vocab2', traditional: '分擔', simplified: '分担', pinyin: 'fēndān', wordClass: ['V'], meaningVi: 'cùng gánh, chia sẻ (gánh nặng, chi phí)', meaningEn: 'to share (a burden or cost)', examples: [{ traditional: '大部分的醫療費用由健保分擔。', simplified: '大部分的医疗费用由健保分担。', vietnamese: 'Phần lớn chi phí y tế do bảo hiểm y tế cùng gánh.' }] },
    { id: 'L10-044', lessonId: 'L10', order: 18, group: 'vocab2', traditional: '公平', simplified: '公平', pinyin: 'gōngpíng', wordClass: ['Vs'], meaningVi: 'công bằng', meaningEn: 'fair', examples: [{ traditional: '政府要讓這個制度走得公平。', simplified: '政府要让这个制度走得公平。', vietnamese: 'Chính phủ phải làm cho chế độ này vận hành công bằng.' }] },
    { id: 'L10-045', lessonId: 'L10', order: 19, group: 'vocab2', traditional: '醫護', simplified: '医护', pinyin: 'yīhù', wordClass: ['N'], meaningVi: 'y bác sĩ, nhân viên y tế', meaningEn: 'medical and nursing staff', tags: ['suc-khoe'], examples: [{ traditional: '住院這幾天，醫護人員都很照顧我。', simplified: '住院这几天，医护人员都很照顾我。', vietnamese: 'Mấy ngày nằm viện, nhân viên y tế đều chăm sóc mình rất chu đáo.' }] }
  ],

  grammar: [
    {
      id: 'L10-G1', lessonId: 'L10', order: 1, pattern: '差點（兒）…（就）…',
      functionVi: '"差點（兒）+ V" nghĩa là suýt nữa thì V (nhưng cuối cùng đã không xảy ra). Với việc KHÔNG mong muốn, "差點沒 V" cũng mang nghĩa "suýt V" (may là không). Với việc mong muốn, "差點沒 V" = "suýt không V được (may là được)".',
      functionEn: '"差點（兒）+ V" means almost V-ed (but in the end didn\'t). For an undesirable event, "差點沒 V" also means "almost V-ed" (luckily not). For a desired event, "差點沒 V" = "almost failed to V (luckily managed)".',
      examples: [
        { traditional: '醫生說盲腸差點就破掉了。', simplified: '医生说盲肠差点就破掉了。', english: 'The doctor said the appendix almost burst.', vietnamese: 'Bác sĩ nói ruột thừa suýt nữa thì vỡ.' },
        { traditional: '我差點趕不上救護車。', simplified: '我差点赶不上救护车。', english: "I almost didn't make it to the ambulance.", vietnamese: 'Tôi suýt không kịp lên xe cứu thương.' },
        { traditional: '那天太痛了，我差點暈過去。', simplified: '那天太痛了，我差点晕过去。', english: 'It hurt so much that day I almost passed out.', vietnamese: 'Hôm đó đau quá, tôi suýt ngất.' },
        { traditional: '這題我差點就答對了，可惜寫錯一個字。', simplified: '这题我差点就答对了，可惜写错一个字。', english: 'I almost got this question right; too bad I wrote one wrong character.', vietnamese: 'Câu này tôi suýt làm đúng, tiếc là viết sai một chữ.' },
        { traditional: '差點忘了帶健保卡，還好出門前想起來。', simplified: '差点忘了带健保卡，还好出门前想起来。', english: 'I almost forgot my health insurance card; luckily I remembered before leaving.', vietnamese: 'Suýt quên mang thẻ bảo hiểm y tế, may mà trước khi đi nhớ ra.' }
      ],
      usageNotesVi: 'Với việc KHÔNG mong muốn, "差點 V" và "差點沒 V" nghĩa giống nhau (đều "may mà không xảy ra"): 差點遲到 = 差點沒遲到. Nhưng với việc mong muốn, phải dùng "差點沒 V" mới đúng nghĩa "may mà làm được": 差點沒趕上 = suýt lỡ (nhưng kịp).',
      exercises: [
        { id: 'L10-G1-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：昨天路很滑吧？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對，我差點就跌倒了。'] }], targetPattern: 'L10-G1' },
        { id: 'L10-G1-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼氣色這麼差？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['別提了，昨天肚子痛，差點沒去掛急診。'] }], targetPattern: 'L10-G1' },
        { id: 'L10-G1-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這次的火車票很難買嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['超難，我差點沒買到，最後一張被我搶到。'] }], targetPattern: 'L10-G1' },
        { id: 'L10-G1-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：報告交了嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['交了，不過差點來不及，我最後五分鐘才傳出去。'] }], targetPattern: 'L10-G1' },
        { id: 'L10-G1-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說你上次爬山迷路了？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對啊，天都快黑了，差點就要在山上過夜。'] }], targetPattern: 'L10-G1' }
      ]
    },
    {
      id: 'L10-G2', lessonId: 'L10', order: 2, pattern: '非…不可',
      functionVi: '"非 A 不可" nghĩa là nhất định phải A, không A thì không xong (nhấn mạnh sự bắt buộc, không còn lựa chọn). A là động từ hoặc cụm động từ.',
      functionEn: '"非 A 不可" means must A, it won\'t do without A (emphasizing necessity, no alternative). A is a verb or verb phrase.',
      examples: [
        { traditional: '醫生說盲腸炎，非開刀不可。', simplified: '医生说盲肠炎，非开刀不可。', english: "The doctor said it's appendicitis; surgery is a must.", vietnamese: 'Bác sĩ nói viêm ruột thừa, nhất định phải mổ.' },
        { traditional: '這件事今天非解決不可，不能再拖了。', simplified: '这件事今天非解决不可，不能再拖了。', english: "This has to be settled today; we can't put it off any longer.", vietnamese: 'Chuyện này hôm nay nhất định phải giải quyết, không hoãn được nữa.' },
        { traditional: '他認定的事，非做到不可。', simplified: '他认定的事，非做到不可。', english: "Once he's set on something, he won't rest until it's done.", vietnamese: 'Việc anh ấy đã quyết thì nhất định phải làm cho bằng được.' },
        { traditional: '要趕上早班的高鐵，非六點起床不可。', simplified: '要赶上早班的高铁，非六点起床不可。', english: 'To catch the early high-speed train, you have to get up at six.', vietnamese: 'Muốn kịp chuyến tàu cao tốc sớm, nhất định phải dậy lúc sáu giờ.' },
        { traditional: '想把中文學好，非每天練習不可。', simplified: '想把中文学好，非每天练习不可。', english: 'To master Chinese, daily practice is a must.', vietnamese: 'Muốn học giỏi tiếng Trung, nhất định phải luyện tập hằng ngày.' }
      ],
      usageNotesVi: '"非…不可" đôi khi thay "不可" bằng "不行 / 不成", hoặc dùng "非…" một mình (khẩu ngữ). Cũng có nghĩa "khăng khăng đòi" khi nói về ý muốn của người khác: 他非要去不可 (anh ấy khăng khăng đòi đi).',
      exercises: [
        { id: 'L10-G2-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你這個週末可以陪我去看房子嗎？', textWithBlanks: 'B：抱歉，___。', blanks: [{ index: 0, acceptedAnswers: ['這個週末我非加班不可，改下週好嗎？'] }], targetPattern: 'L10-G2' },
        { id: 'L10-G2-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這道菜好像少了什麼。', textWithBlanks: 'B：對，___。', blanks: [{ index: 0, acceptedAnswers: ['這道菜非放一點糖不可，不然會太酸。'] }], targetPattern: 'L10-G2' },
        { id: 'L10-G2-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他一定要自己去談嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對，他說這種事非當面講不可。'] }], targetPattern: 'L10-G2' },
        { id: 'L10-G2-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：明天的會可以請假嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不行，明天的會非到不可，老闆要親自聽報告。'] }], targetPattern: 'L10-G2' },
        { id: 'L10-G2-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你為什麼一定要現在去醫院？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['燒到三十九度了，非去看醫生不可。'] }], targetPattern: 'L10-G2' }
      ]
    },
    {
      id: 'L10-G3', lessonId: 'L10', order: 3, pattern: '趁…',
      functionVi: '"趁 + N / 短句" nghĩa là nhân lúc, tranh thủ khi một điều kiện thuận lợi còn tồn tại để làm việc gì. Đã gặp ở Bài 5 (như từ vựng); ở đây học đầy đủ cách dùng.',
      functionEn: '"趁 + N / short clause" means to take advantage of a favorable condition while it lasts to do something. Seen in Lesson 5 as vocabulary; here the full usage.',
      examples: [
        { traditional: '我趁還在念書辦了學生保險。', simplified: '我趁还在念书办了学生保险。', english: 'I got student insurance while I was still a student.', vietnamese: 'Tôi tranh thủ lúc còn đi học đã làm bảo hiểm sinh viên.' },
        { traditional: '趁天還沒黑，我們快下山吧。', simplified: '趁天还没黑，我们快下山吧。', english: "Let's get down the mountain while it's still light.", vietnamese: 'Nhân lúc trời chưa tối, mình xuống núi nhanh đi.' },
        { traditional: '趁年輕多學一點東西。', simplified: '趁年轻多学一点东西。', english: "Learn as much as you can while you're young.", vietnamese: 'Nhân lúc còn trẻ học thêm nhiều thứ.' },
        { traditional: '趁週年慶，我把冬天的衣服都買齊了。', simplified: '趁周年庆，我把冬天的衣服都买齐了。', english: 'I bought all my winter clothes during the anniversary sale.', vietnamese: 'Nhân dịp khuyến mãi kỷ niệm, tôi mua đủ hết quần áo mùa đông.' },
        { traditional: '趁他還沒走，你快去跟他說。', simplified: '趁他还没走，你快去跟他说。', english: 'Go tell him quickly before he leaves.', vietnamese: 'Nhân lúc anh ấy chưa đi, cậu mau đi nói với anh ấy.' }
      ],
      usageNotesVi: '"趁" thường đi với một điều kiện có tính "thời cơ" (còn sớm, còn trẻ, đang giảm giá, chưa đi…). Có thể nói "趁機（會）" (nhân cơ hội), "趁早" (tranh thủ sớm), "趁熱吃" (ăn lúc còn nóng).',
      exercises: [
        { id: 'L10-G3-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這些菜要現在吃嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對，趁熱吃，涼了就不好吃了。'] }], targetPattern: 'L10-G3' },
        { id: 'L10-G3-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：我一直想學游泳，可是沒時間。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['趁這個暑假去學啊，開學就更忙了。'] }], targetPattern: 'L10-G3' },
        { id: 'L10-G3-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：房子的租約下個月到期。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['那要趁現在開始找，不然到時候很急。'] }], targetPattern: 'L10-G3' },
        { id: 'L10-G3-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：老闆今天心情不錯。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['那你趁現在去跟他請假，成功機會比較大。'] }], targetPattern: 'L10-G3' },
        { id: 'L10-G3-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼一大早就去菜市場？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['趁早去，菜比較新鮮，人也比較少。'] }], targetPattern: 'L10-G3' }
      ]
    },
    {
      id: 'L10-G4', lessonId: 'L10', order: 4, pattern: '恨不得…',
      functionVi: '"恨不得 + V" diễn tả ước muốn mãnh liệt được làm ngay điều gì đó (thường là điều khó hoặc không thể thực hiện ngay), nhấn mạnh sự sốt ruột, bức bối.',
      functionEn: '"恨不得 + V" expresses an intense wish to do something immediately (often hard or impossible right now), stressing impatience or frustration.',
      examples: [
        { traditional: '醒來以後又餓又痛，我恨不得馬上出院。', simplified: '醒来以后又饿又痛，我恨不得马上出院。', english: "After waking up, hungry and in pain, I couldn't wait to leave the hospital.", vietnamese: 'Tỉnh dậy vừa đói vừa đau, tôi chỉ mong ra viện ngay.' },
        { traditional: '看到那麼多功課，我恨不得有三頭六臂。', simplified: '看到那么多功课，我恨不得有三头六臂。', english: 'Seeing all that homework, I wished I had six arms.', vietnamese: 'Nhìn đống bài tập đó, tôi ước gì có ba đầu sáu tay.' },
        { traditional: '他一放假就恨不得馬上飛回家。', simplified: '他一放假就恨不得马上飞回家。', english: "The moment vacation starts, he can't wait to fly home.", vietnamese: 'Vừa được nghỉ là anh ấy chỉ mong bay về nhà ngay.' },
        { traditional: '天氣這麼熱，我恨不得整天待在冷氣房。', simplified: '天气这么热，我恨不得整天待在冷气房。', english: 'It\'s so hot I wish I could stay in the air-conditioned room all day.', vietnamese: 'Trời nóng thế này, tôi chỉ mong cả ngày ở trong phòng máy lạnh.' },
        { traditional: '錢包掉了的時候，我恨不得把整條路翻過來找。', simplified: '钱包掉了的时候，我恨不得把整条路翻过来找。', english: 'When I lost my wallet, I wished I could turn the whole street over to find it.', vietnamese: 'Lúc mất ví, tôi chỉ muốn lật tung cả con đường lên mà tìm.' }
      ],
      usageNotesVi: '"恨不得" luôn theo sau bởi một hành động (thường phóng đại) mà người nói mong làm ngay nhưng không thể. Không dùng cho việc bình thường có thể làm được. Khác "巴不得" (mong một điều xảy ra, chủ ngữ không nhất thiết tự làm).',
      exercises: [
        { id: 'L10-G4-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這部電視劇好看嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['太好看了，我恨不得一次把整季看完。'] }], targetPattern: 'L10-G4' },
        { id: 'L10-G4-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼一直看時鐘？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這節課好無聊，我恨不得馬上下課。'] }], targetPattern: 'L10-G4' },
        { id: 'L10-G4-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：聽說你很想他？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對啊，我恨不得現在就買機票去找他。'] }], targetPattern: 'L10-G4' },
        { id: 'L10-G4-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：報告寫得怎麼樣？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['別提了，越寫越煩，我恨不得把電腦關掉不管了。'] }], targetPattern: 'L10-G4' },
        { id: 'L10-G4-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：搬家累不累？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['累死了，我恨不得直接躺在紙箱上睡。'] }], targetPattern: 'L10-G4' }
      ]
    },
    {
      id: 'L10-G5', lessonId: 'L10', order: 5, pattern: 'V 下去',
      functionVi: '"V 下去" chỉ tiếp tục thực hiện một hành động đã bắt đầu, hướng về tương lai. Khác "V 下來" chỉ hành động dừng lại hoặc ghi lại (đã gặp ở Bài 4).',
      functionEn: '"V 下去" indicates continuing an action already begun, oriented toward the future. Different from "V 下來" = stopping / recording (seen in Lesson 4).',
      examples: [
        { traditional: '慢慢把身體養回來，再繼續拚下去。', simplified: '慢慢把身体养回来，再继续拼下去。', english: 'Recover your health gradually, then keep pushing on.', vietnamese: 'Từ từ dưỡng cho khỏe lại, rồi tiếp tục dốc sức.' },
        { traditional: '這份工作雖然辛苦，但我想再做下去。', simplified: '这份工作虽然辛苦，但我想再做下去。', english: 'This job is hard, but I want to keep doing it.', vietnamese: 'Công việc này tuy vất vả, nhưng tôi muốn làm tiếp.' },
        { traditional: '話說到一半，他突然說不下去了。', simplified: '话说到一半，他突然说不下去了。', english: "Halfway through, he suddenly couldn't go on.", vietnamese: 'Nói được nửa chừng, anh ấy bỗng không nói tiếp được.' },
        { traditional: '已經學了三年中文，當然要學下去。', simplified: '已经学了三年中文，当然要学下去。', english: "I've studied Chinese for three years; of course I'll keep at it.", vietnamese: 'Đã học tiếng Trung ba năm rồi, đương nhiên phải học tiếp.' },
        { traditional: '日子還是要過下去，難過也沒有用。', simplified: '日子还是要过下去，难过也没有用。', english: "Life has to go on; being sad doesn't help.", vietnamese: 'Ngày tháng vẫn phải sống tiếp, buồn cũng vô ích.' }
      ],
      usageNotesVi: '"V 下去" nhấn mạnh "tiếp tục từ bây giờ về sau". Dạng khả năng: "V 得下去 / V 不下去". Phân biệt với "V 下來" (Bài 4): 停下來 (dừng lại), 記下來 (ghi lại) — hướng về sự hoàn thành hoặc dừng.',
      exercises: [
        { id: 'L10-G5-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這本書你還在看嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['前面很無聊，我差點看不下去，後面才好看。'] }], targetPattern: 'L10-G5' },
        { id: 'L10-G5-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他們公司狀況不好，你還要留嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我想再撐下去看看，也許下半年會好轉。'] }], targetPattern: 'L10-G5' },
        { id: 'L10-G5-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你學畫畫學多久了？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['三年了，越畫越有興趣，一定會畫下去。'] }], targetPattern: 'L10-G5' },
        { id: 'L10-G5-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這件事大家意見很不一樣。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['那今天先到這裡，改天再討論下去。'] }], targetPattern: 'L10-G5' },
        { id: 'L10-G5-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他生病以後還在跑步嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['醫生說可以，他就慢慢跑，打算一直跑下去。'] }], targetPattern: 'L10-G5' }
      ]
    },
    {
      id: 'L10-G6', lessonId: 'L10', order: 6, pattern: '到…為止',
      functionVi: '"到 A 為止" nghĩa là (kéo dài hoặc tiếp tục) cho đến khi A thì dừng. A là một mốc thời gian hoặc điều kiện. Thường dùng "從… + 到 A 為止".',
      functionEn: '"到 A 為止" means (lasting or continuing) up until A, at which point it stops. A is a time point or condition. Often "從… + 到 A 為止".',
      examples: [
        { traditional: '醫生說要觀察到星期五為止。', simplified: '医生说要观察到星期五为止。', english: "The doctor said they'll monitor me until Friday.", vietnamese: 'Bác sĩ nói phải theo dõi cho đến thứ Sáu.' },
        { traditional: '這個活動報名到本月底為止。', simplified: '这个活动报名到本月底为止。', english: 'Registration for this event is open until the end of this month.', vietnamese: 'Đăng ký hoạt động này đến cuối tháng này.' },
        { traditional: '到目前為止，一切都很順利。', simplified: '到目前为止，一切都很顺利。', english: 'So far, everything has gone smoothly.', vietnamese: 'Cho đến hiện tại, mọi việc đều thuận lợi.' },
        { traditional: '我們就練到大家都會為止。', simplified: '我们就练到大家都会为止。', english: "We'll practice until everyone's got it.", vietnamese: 'Bọn mình luyện đến khi ai cũng làm được thì thôi.' },
        { traditional: '這條路修到下個路口為止，再過去就不能走了。', simplified: '这条路修到下个路口为止，再过去就不能走了。', english: "The road repair goes up to the next intersection; beyond that you can't pass.", vietnamese: 'Con đường này sửa đến ngã tư kế tiếp, qua đó không đi được.' }
      ],
      usageNotesVi: '"到…為止" đánh dấu điểm kết thúc của một quá trình. "到目前為止 / 到現在為止" (cho đến nay) là cụm cố định rất thông dụng. Khác "到 A" đơn thuần (chỉ đích đến), "到 A 為止" nhấn mạnh "và dừng ở đó".',
      exercises: [
        { id: 'L10-G6-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個優惠什麼時候結束？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['到這個星期天為止，之後就恢復原價。'] }], targetPattern: 'L10-G6' },
        { id: 'L10-G6-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你打算在這家公司做多久？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我想至少做到學會這個技術為止。'] }], targetPattern: 'L10-G6' },
        { id: 'L10-G6-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你們討論出結果了嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['到現在為止還沒有，大家意見還是很分。'] }], targetPattern: 'L10-G6' },
        { id: 'L10-G6-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小孩要玩到什麼時候？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['說好玩到六點為止，時間到就回家寫功課。'] }], targetPattern: 'L10-G6' },
        { id: 'L10-G6-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個病要吃藥吃多久？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['醫生說要吃到不再發燒為止，大概還要三天。'] }], targetPattern: 'L10-G6' }
      ]
    },
    {
      id: 'L10-G7', lessonId: 'L10', order: 7, pattern: '既…又…',
      functionVi: '"既 A 又 B" nêu hai đặc điểm hoặc tình huống cùng tồn tại ở một chủ thể. A và B thường cùng loại (cùng tích cực hoặc cùng tiêu cực), có kết cấu tương tự.',
      functionEn: '"既 A 又 B" states two features or situations coexisting in one subject. A and B are usually the same kind (both positive or both negative), with parallel structure.',
      examples: [
        { traditional: '醒來以後，人既餓又痛。', simplified: '醒来以后，人既饿又痛。', english: 'After waking up, I was both hungry and in pain.', vietnamese: 'Tỉnh dậy, người vừa đói vừa đau.' },
        { traditional: '這個手術既簡單又安全，你別太擔心。', simplified: '这个手术既简单又安全，你别太担心。', english: "This surgery is both simple and safe; don't worry too much.", vietnamese: 'Ca phẫu thuật này vừa đơn giản vừa an toàn, cậu đừng lo quá.' },
        { traditional: '台灣的健保既方便又便宜，讓很多外國人很羨慕。', simplified: '台湾的健保既方便又便宜，让很多外国人很羡慕。', english: "Taiwan's health insurance is both convenient and cheap, which many foreigners envy.", vietnamese: 'Bảo hiểm y tế Đài Loan vừa tiện vừa rẻ, khiến nhiều người nước ngoài ghen tị.' },
        { traditional: '他既是我的同學，又是我的鄰居。', simplified: '他既是我的同学，又是我的邻居。', english: "He's both my classmate and my neighbor.", vietnamese: 'Anh ấy vừa là bạn học vừa là hàng xóm của tôi.' },
        { traditional: '這種生活既忙又沒有意義，他早就想改變了。', simplified: '这种生活既忙又没有意义，他早就想改变了。', english: "This kind of life is both busy and meaningless; he's long wanted to change it.", vietnamese: 'Cuộc sống kiểu này vừa bận vừa vô nghĩa, anh ấy đã muốn thay đổi từ lâu.' }
      ],
      usageNotesVi: '"既…又…" trang trọng hơn "又…又…" và thường dùng khi A, B là hai đặc điểm hoặc thân phận. "既…也…" cũng dùng được. A và B phải cùng chiều (không nói "既高又矮").',
      exercises: [
        { id: 'L10-G7-EX1', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你覺得那個新同事怎麼樣？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['他既認真又好相處，大家都喜歡他。'] }], targetPattern: 'L10-G7' },
        { id: 'L10-G7-EX2', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這間套房如何？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['既便宜又離學校近，我打算租下來。'] }], targetPattern: 'L10-G7' },
        { id: 'L10-G7-EX3', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：一個人住鄉下不會不方便嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['一開始既不方便又有點孤單，習慣以後就好了。'] }], targetPattern: 'L10-G7' },
        { id: 'L10-G7-EX4', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他為什麼不想做這份工作了？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['因為那份工作既累又學不到東西。'] }], targetPattern: 'L10-G7' },
        { id: 'L10-G7-EX5', lessonId: 'L10', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼推薦這家醫院？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['這裡的醫護人員既細心又有耐心，我上次看診印象很好。'] }], targetPattern: 'L10-G7' }
      ]
    }
  ],

  workbookExercises: [
    {
      id: 'L10-WB-match-collocation', lessonId: 'L10', section: 'pairs', type: 'matching',
      prompt: 'Ghép danh từ với vị ngữ thường đi cùng (collocation).',
      pairs: [
        { left: '刀', right: '開 (mổ)' },
        { left: '號', right: '掛 (lấy số khám)' },
        { left: '燒', right: '發 (sốt)' },
        { left: '針', right: '打 (tiêm)' },
        { left: '病', right: '養 (dưỡng)' },
        { left: '保費', right: '繳 (nộp)' }
      ]
    },
    {
      id: 'L10-WB-match-response', lessonId: 'L10', section: 'pairs', type: 'matching',
      prompt: 'Nối mỗi tình huống (cột trái) với cách phản ứng phù hợp (cột phải).',
      pairs: [
        { left: '半夜肚子痛到冒冷汗', right: '叫救護車去掛急診' },
        { left: '出院後想趕快趕進度', right: '先把身體養好，別急' },
        { left: '擔心醫藥費太貴', right: '趁早加保，了解健保給付範圍' },
        { left: '朋友住院了', right: '去病房探望，幫忙跟老師請假' },
        { left: '想預防慢性病', right: '定期做健康檢查，調整作息' },
        { left: '小病也常跑大醫院急診', right: '先看附近的門診，把資源留給需要的人' }
      ]
    },

    { id: 'L10-WB-fw-1', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '前天半夜我肚子痛到___(mào)冷汗，___(shìyǒu)幫我叫了___(jiùhùchē)。', blanks: [{ index: 0, acceptedAnswers: ['冒'] }, { index: 1, acceptedAnswers: ['室友'] }, { index: 2, acceptedAnswers: ['救護車'] }] },
    { id: 'L10-WB-fw-2', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '醫生說是___(mángchángyán)，差點就破掉了，非___(kāidāo)不可。', blanks: [{ index: 0, acceptedAnswers: ['盲腸炎'] }, { index: 1, acceptedAnswers: ['開刀'] }] },
    { id: 'L10-WB-fw-3', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '___(shǒushù)後___(xǐng)過來，又餓又痛，我恨不得馬上___(chūyuàn)。', blanks: [{ index: 0, acceptedAnswers: ['手術'] }, { index: 1, acceptedAnswers: ['醒'] }, { index: 2, acceptedAnswers: ['出院'] }] },
    { id: 'L10-WB-fw-4', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '醫生說要___(guānchá)到星期五為止，如果沒___(fāshāo)就可以走。', blanks: [{ index: 0, acceptedAnswers: ['觀察'] }, { index: 1, acceptedAnswers: ['發燒'] }] },
    { id: 'L10-WB-fw-5', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '我趁還在念書辦了學生___(bǎoxiǎn)，加上___(jiànbǎo)___(jǐfù)，自己只付了一點點。', blanks: [{ index: 0, acceptedAnswers: ['保險'] }, { index: 1, acceptedAnswers: ['健保'] }, { index: 2, acceptedAnswers: ['給付'] }] },
    { id: 'L10-WB-fw-6', lessonId: 'L10', section: 'fill-write', type: 'fill-blank', textWithBlanks: '出院以後別急著趕___(jìndù)，先把身體___(fùyuán)好，再繼續___(pàn)下去。', blanks: [{ index: 0, acceptedAnswers: ['進度'] }, { index: 1, acceptedAnswers: ['復原'] }, { index: 2, acceptedAnswers: ['拚'] }] },

    {
      id: 'L10-WB-fb-1', lessonId: 'L10', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền từ thích hợp vào đoạn văn (mỗi từ chỉ dùng 1 lần).',
      wordBank: ['全民', '分擔', '負擔', '老化', '資源', '預防'],
      textWithBlanks: '台灣的1.___健保被很多國家認為是成功的制度。不管收入高低，大家都繳保費，一起2.___醫療費用，所以生了大病，個人的3.___不會太重。不過，這個制度也有壓力：人口越來越4.___，用到醫療的人變多；也有人小病就跑大醫院急診，讓5.___被浪費。專家說，除了改善制度，每個人也要多做6.___：定期檢查、規律作息，少生病就是對健保最好的支持。',
      blanks: [
        { index: 1, acceptedAnswers: ['全民'] },
        { index: 2, acceptedAnswers: ['分擔'] },
        { index: 3, acceptedAnswers: ['負擔'] },
        { index: 4, acceptedAnswers: ['老化'] },
        { index: 5, acceptedAnswers: ['資源'] },
        { index: 6, acceptedAnswers: ['預防'] }
      ]
    },

    {
      id: 'L10-WB-read-a1', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '玉真：你只是有點咳嗽，幹嘛跑大醫院掛急診？\n阿宏：我也知道不對。可是診所晚上關了，我又很不舒服，就直接去了。',
      question: '關於阿宏，下面哪個對？',
      options: [{ id: 'a', text: '他覺得掛急診是對的。' }, { id: 'b', text: '他知道小病不該掛急診，但當下沒別的辦法。' }, { id: 'c', text: '他覺得診所比較好。' }],
      correctOptionId: 'b',
      explanationVi: '"我也知道不對…診所晚上關了…就直接去了".'
    },
    {
      id: 'L10-WB-read-a2', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '高橋：你這次住院，錢的部分還好嗎？\n安同：還好。我有健保，加上之前保的醫療險，自己付的不多。你有保險嗎？趁年輕先保比較便宜。',
      question: '安同給高橋的建議是：',
      options: [{ id: 'a', text: '年輕的時候不用急著保險。' }, { id: 'b', text: '趁年輕早點保醫療險，保費比較低。' }, { id: 'c', text: '有健保就夠了，不用另外保。' }],
      correctOptionId: 'b',
      explanationVi: '"趁年輕先保比較便宜".'
    },
    {
      id: 'L10-WB-read-a3', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '陳敏萱：出院了就好好休息，別馬上又開始熬夜趕報告。\n安同：我知道。醫生也說，這次生病跟我平常作息太亂有關。',
      question: '安同這次生病，醫生認為跟什麼有關？',
      options: [{ id: 'a', text: '跟天氣變化有關。' }, { id: 'b', text: '跟他平常作息不規律有關。' }, { id: 'c', text: '跟他吃太少有關。' }],
      correctOptionId: 'b',
      explanationVi: '"這次生病跟我平常作息太亂有關".'
    },

    {
      id: 'L10-WB-read-b1', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '台灣的「全民健保」從一九九五年開始實施，到現在已經三十年。不管收入多少，每個人都要繳保費；生病看醫生的時候，大部分的費用由健保分擔，個人只付一小部分。因為這樣，即使得了大病、需要開刀住院，一般家庭的財務壓力也不會太大。很多住過院的外國人都說，這是台灣最讓他們安心的地方。不過，健保也面臨挑戰。人口老化，使用醫療的人越來越多；有些人習慣小病也跑大醫院、隨便掛急診，讓有限的資源被濫用。專家建議，除了政府要想辦法讓制度走得長久，民眾也可以幫忙：小病先看門診、不隨便掛急診，並且透過定期檢查和規律的作息來預防疾病。',
      question: '台灣的全民健保是最近五年才開始的。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"從一九九五年開始實施，到現在已經三十年".'
    },
    {
      id: 'L10-WB-read-b2', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '台灣的「全民健保」從一九九五年開始實施，到現在已經三十年。不管收入多少，每個人都要繳保費；生病看醫生的時候，大部分的費用由健保分擔，個人只付一小部分。因為這樣，即使得了大病、需要開刀住院，一般家庭的財務壓力也不會太大。很多住過院的外國人都說，這是台灣最讓他們安心的地方。不過，健保也面臨挑戰。人口老化，使用醫療的人越來越多；有些人習慣小病也跑大醫院、隨便掛急診，讓有限的資源被濫用。專家建議，除了政府要想辦法讓制度走得長久，民眾也可以幫忙：小病先看門診、不隨便掛急診，並且透過定期檢查和規律的作息來預防疾病。',
      question: '在台灣，收入高的人才需要繳健保費。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"不管收入多少，每個人都要繳保費".'
    },
    {
      id: 'L10-WB-read-b3', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '台灣的「全民健保」從一九九五年開始實施，到現在已經三十年。不管收入多少，每個人都要繳保費；生病看醫生的時候，大部分的費用由健保分擔，個人只付一小部分。因為這樣，即使得了大病、需要開刀住院，一般家庭的財務壓力也不會太大。很多住過院的外國人都說，這是台灣最讓他們安心的地方。不過，健保也面臨挑戰。人口老化，使用醫療的人越來越多；有些人習慣小病也跑大醫院、隨便掛急診，讓有限的資源被濫用。專家建議，除了政府要想辦法讓制度走得長久，民眾也可以幫忙：小病先看門診、不隨便掛急診，並且透過定期檢查和規律的作息來預防疾病。',
      question: '得了大病需要住院開刀時，健保會分擔大部分費用。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"大部分的費用由健保分擔，個人只付一小部分".'
    },
    {
      id: 'L10-WB-read-b4', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '台灣的「全民健保」從一九九五年開始實施，到現在已經三十年。不管收入多少，每個人都要繳保費；生病看醫生的時候，大部分的費用由健保分擔，個人只付一小部分。因為這樣，即使得了大病、需要開刀住院，一般家庭的財務壓力也不會太大。很多住過院的外國人都說，這是台灣最讓他們安心的地方。不過，健保也面臨挑戰。人口老化，使用醫療的人越來越多；有些人習慣小病也跑大醫院、隨便掛急診，讓有限的資源被濫用。專家建議，除了政府要想辦法讓制度走得長久，民眾也可以幫忙：小病先看門診、不隨便掛急診，並且透過定期檢查和規律的作息來預防疾病。',
      question: '人口老化讓使用醫療的人變少。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"人口老化，使用醫療的人越來越多".'
    },
    {
      id: 'L10-WB-read-b5', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '台灣的「全民健保」從一九九五年開始實施，到現在已經三十年。不管收入多少，每個人都要繳保費；生病看醫生的時候，大部分的費用由健保分擔，個人只付一小部分。因為這樣，即使得了大病、需要開刀住院，一般家庭的財務壓力也不會太大。很多住過院的外國人都說，這是台灣最讓他們安心的地方。不過，健保也面臨挑戰。人口老化，使用醫療的人越來越多；有些人習慣小病也跑大醫院、隨便掛急診，讓有限的資源被濫用。專家建議，除了政府要想辦法讓制度走得長久，民眾也可以幫忙：小病先看門診、不隨便掛急診，並且透過定期檢查和規律的作息來預防疾病。',
      question: '專家認為民眾可以透過預防疾病來幫助健保。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"透過定期檢查和規律的作息來預防疾病".'
    },

    {
      id: 'L10-WB-read-c1', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '【急診分級 提醒】為了讓真正緊急的病人得到及時的治療，本院急診採用「分級」看診：情況越危險，越先看。感冒、輕微咳嗽、拿慢性病的藥等，建議白天到門診就醫，或到附近的診所。掛急診不代表會馬上看到醫生。急救資源有限，請大家一起愛惜。',
      question: '這則公告主要在說明什麼？',
      options: [{ id: 'a', text: '急診的看診費用調漲了。' }, { id: 'b', text: '急診按病人情況的危險程度決定看診順序。' }, { id: 'c', text: '醫院晚上不再開放急診。' }],
      correctOptionId: 'b',
      explanationVi: '"情況越危險，越先看".'
    },
    {
      id: 'L10-WB-read-c2', lessonId: 'L10', section: 'reading', type: 'multiple-choice',
      prompt: '【急診分級 提醒】為了讓真正緊急的病人得到及時的治療，本院急診採用「分級」看診：情況越危險，越先看。感冒、輕微咳嗽、拿慢性病的藥等，建議白天到門診就醫，或到附近的診所。掛急診不代表會馬上看到醫生。急救資源有限，請大家一起愛惜。',
      question: '根據公告，下面哪種情況比較適合去門診或診所，而不是掛急診？',
      options: [{ id: 'a', text: '突然胸口很痛、喘不過氣。' }, { id: 'b', text: '輕微咳嗽、拿慢性病的藥。' }, { id: 'c', text: '發生車禍受了重傷。' }],
      correctOptionId: 'b',
      explanationVi: '"感冒、輕微咳嗽、拿慢性病的藥等，建議白天到門診就醫".'
    },

    { id: 'L10-WB-dc-1', lessonId: 'L10', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L10-G1', turns: [{ speaker: 'A', text: '聽說你昨天肚子痛得很嚴重？', isBlank: false }, { speaker: 'B', text: '（差點…就…）', isBlank: true }], sampleAnswer: '對啊，痛到冒冷汗，差點就叫不了救護車了。' },
    { id: 'L10-WB-dc-2', lessonId: 'L10', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L10-G2', turns: [{ speaker: 'A', text: '這個病一定要開刀嗎？', isBlank: false }, { speaker: 'B', text: '（非…不可）', isBlank: true }], sampleAnswer: '醫生說盲腸快破了，非開刀不可，不能再等。' },
    { id: 'L10-WB-dc-3', lessonId: 'L10', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L10-G3', turns: [{ speaker: 'A', text: '我一直想去做健康檢查。', isBlank: false }, { speaker: 'B', text: '（趁）', isBlank: true }], sampleAnswer: '那就趁這個月公司有補助，快去預約。' },
    { id: 'L10-WB-dc-4', lessonId: 'L10', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L10-G4', turns: [{ speaker: 'A', text: '住院這幾天還習慣嗎？', isBlank: false }, { speaker: 'B', text: '（恨不得）', isBlank: true }], sampleAnswer: '一點都不習慣，我恨不得現在就回家睡自己的床。' },
    { id: 'L10-WB-dc-5', lessonId: 'L10', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L10-G6', turns: [{ speaker: 'A', text: '你還要在醫院待多久？', isBlank: false }, { speaker: 'B', text: '（到…為止）', isBlank: true }], sampleAnswer: '醫生說要觀察到不再發燒為止，大概還要兩天。' },

    {
      id: 'L10-WB-comp-1', lessonId: 'L10', section: 'composition', type: 'composition',
      topicVi: 'Hãy kể lại một lần bạn (hoặc người thân) bị bệnh hoặc phải vào bệnh viện. Chuyện xảy ra thế nào, bạn cảm thấy ra sao, và bạn rút ra bài học gì về sức khỏe?',
      requiredWords: ['L10-001', 'L10-006', 'L10-008', 'L10-009', 'L10-014', 'L10-017', 'L10-021', 'L10-026'],
      requiredPatterns: ['L10-G1', 'L10-G2', 'L10-G4'],
      minLength: 200, maxLength: 250
    },
    {
      id: 'L10-WB-comp-2', lessonId: 'L10', section: 'composition', type: 'composition',
      topicVi: 'Bảo hiểm y tế toàn dân của Đài Loan được nhiều nước khen ngợi nhưng cũng đang gặp thách thức (dân số già, lạm dụng nguồn lực). Bạn nghĩ mỗi người có thể làm gì để giúp hệ thống này bền vững?',
      requiredWords: ['L10-027', 'L10-028', 'L10-033', 'L10-036', 'L10-038', 'L10-039', 'L10-043', 'L10-044'],
      requiredPatterns: ['L10-G3', 'L10-G5', 'L10-G7'],
      minLength: 200, maxLength: 250
    }
  ]
}
