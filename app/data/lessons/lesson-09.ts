import type { Lesson } from '../../../types/lesson'

export const lesson09: Lesson = {
  id: 'L9',
  number: 9,
  titleTraditional: '網購時代',
  titleSimplified: '网购时代',
  titlePinyin: 'Wǎnggòu shídài',
  titleVi: 'Thời đại mua sắm trực tuyến',
  status: 'available',

  dialogues: [
    [
      { speaker: '', traditional: '（在便利商店的取貨區前）', simplified: '（在便利商店的取货区前）', pinyin: '(Zài biànlì shāngdiàn de qǔhuò qū qián)', english: '(In front of the pickup counter at a convenience store)', vietnamese: '(Trước khu nhận hàng của cửa hàng tiện lợi)' },
      { speaker: '安德思', traditional: '你怎麼一次領這麼多包裹？', simplified: '你怎么一次领这么多包裹？', pinyin: 'Nǐ zěnme yí cì lǐng zhème duō bāoguǒ?', english: "Why are you picking up so many packages at once?", vietnamese: 'Sao cậu nhận nhiều bưu kiện một lúc thế?' },
      { speaker: '陳敏萱', traditional: '別說了。上個週末打折，我看到什麼都想買，一下就下了五筆訂單。', simplified: '别说了。上个周末打折，我看到什么都想买，一下就下了五笔订单。', pinyin: 'Bié shuō le. Shàng ge zhōumò dǎzhé, wǒ kàndào shénme dōu xiǎng mǎi, yíxià jiù xià le wǔ bǐ dìngdān.', english: "Don't get me started. There was a sale last weekend—I wanted everything I saw and placed five orders in one go.", vietnamese: 'Đừng nhắc nữa. Cuối tuần trước giảm giá, mình thấy gì cũng muốn mua, một lúc đặt luôn năm đơn.' },
      { speaker: '羅珊蒂', traditional: '現在網購真的太方便了。只要手機按幾下，東西兩天就到。', simplified: '现在网购真的太方便了。只要手机按几下，东西两天就到。', pinyin: 'Xiànzài wǎnggòu zhēn de tài fāngbiàn le. Zhǐyào shǒujī àn jǐ xià, dōngxi liǎng tiān jiù dào.', english: "Online shopping is so convenient now. A few taps on your phone and it arrives in two days.", vietnamese: 'Mua online giờ tiện thật. Chỉ cần bấm điện thoại vài cái là hai ngày sau hàng tới.' },
      { speaker: '高橋健太', traditional: '可是這樣很容易買太多。我表姐現在買東西前一定先問自己：「這個我家裡是不是已經有了？」', simplified: '可是这样很容易买太多。我表姐现在买东西前一定先问自己：「这个我家里是不是已经有了？」', pinyin: "Kěshì zhèyàng hěn róngyì mǎi tài duō. Wǒ biǎojiě xiànzài mǎi dōngxi qián yídìng xiān wèn zìjǐ: 'Zhège wǒ jiā lǐ shì bú shì yǐjīng yǒu le?'", english: "But it's easy to overbuy this way. My cousin now always asks herself before buying: 'Do I already have this at home?'", vietnamese: 'Nhưng như vậy rất dễ mua quá tay. Chị họ mình giờ trước khi mua gì cũng tự hỏi: "Cái này nhà mình có sẵn chưa?"' },
      { speaker: '陳敏萱', traditional: '我也知道。可是網路上比價很快，同一個東西，這家比那家便宜一百塊，我就忍不住。', simplified: '我也知道。可是网路上比价很快，同一个东西，这家比那家便宜一百块，我就忍不住。', pinyin: 'Wǒ yě zhīdào. Kěshì wǎnglù shàng bǐjià hěn kuài, tóng yí ge dōngxi, zhè jiā bǐ nà jiā piányí yìbǎi kuài, wǒ jiù rěnbuzhù.', english: "I know. But comparing prices online is quick—the same thing is 100 cheaper here than there, and I can't resist.", vietnamese: 'Mình cũng biết. Nhưng so giá trên mạng rất nhanh, cùng một món, chỗ này rẻ hơn chỗ kia một trăm đồng là mình không kìm được.' },
      { speaker: '安德思', traditional: '除了比價，我還會看評論。有時候便宜的東西，評論裡全是抱怨。', simplified: '除了比价，我还会看评论。有时候便宜的东西，评论里全是抱怨。', pinyin: 'Chúle bǐjià, wǒ hái huì kàn pínglùn. Yǒu shíhòu piányí de dōngxi, pínglùn lǐ quán shì bàoyuàn.', english: "Besides comparing prices, I also read reviews. Sometimes cheap items have reviews full of complaints.", vietnamese: 'Ngoài so giá, mình còn xem đánh giá. Có khi đồ rẻ, phần bình luận toàn là than phiền.' },
      { speaker: '羅珊蒂', traditional: '對，不能只靠照片決定。照片跟實際收到的常常差很多。', simplified: '对，不能只靠照片决定。照片跟实际收到的常常差很多。', pinyin: 'Duì, bù néng zhǐ kào zhàopiàn juédìng. Zhàopiàn gēn shíjì shōudào de chángcháng chà hěn duō.', english: "Right, you can't decide based on photos alone. Photos and what actually arrives often differ a lot.", vietnamese: 'Đúng, không thể chỉ dựa vào ảnh để quyết định. Ảnh và hàng thực nhận thường chênh nhiều.' },
      { speaker: '高橋健太', traditional: '而且便宜不見得划算。上次我買了一件很便宜的外套，洗一次就變形，等於白買。', simplified: '而且便宜不见得划算。上次我买了一件很便宜的外套，洗一次就变形，等于白买。', pinyin: 'Érqiě piányí bú jiàn de huásuàn. Shàng cì wǒ mǎi le yí jiàn hěn piányí de wàitào, xǐ yí cì jiù biànxíng, děngyú bái mǎi.', english: "And cheap isn't necessarily a good deal. Last time I bought a very cheap jacket; one wash and it lost its shape—might as well have thrown the money away.", vietnamese: 'Với lại rẻ chưa chắc hời. Lần trước mình mua một cái áo khoác rất rẻ, giặt một lần là méo mó, coi như mua phí.' },
      { speaker: '陳敏萱', traditional: '那萬一收到的東西有問題呢？', simplified: '那万一收到的东西有问题呢？', pinyin: 'Nà wànyī shōudào de dōngxi yǒu wèntí ne?', english: 'What if the item you receive has a problem?', vietnamese: 'Vậy lỡ hàng nhận về có vấn đề thì sao?' },
      { speaker: '羅珊蒂', traditional: '現在大部分的網站七天內都可以退。可是你要留好包裝，一旦拆壞了，可能就退不了。', simplified: '现在大部分的网站七天内都可以退。可是你要留好包装，一旦拆坏了，可能就退不了。', pinyin: 'Xiànzài dà bùfèn de wǎngzhàn qī tiān nèi dōu kěyǐ tuì. Kěshì nǐ yào liú hǎo bāozhuāng, yídàn chāi huài le, kěnéng jiù tuì bù liǎo.', english: "Most sites now let you return within seven days. But keep the packaging—once it's torn, you may not be able to return it.", vietnamese: 'Giờ phần lớn trang web trong bảy ngày đều trả được. Nhưng phải giữ nguyên bao bì, một khi xé rách rồi thì có thể không trả được.' },
      { speaker: '安德思', traditional: '我覺得網購最大的問題不是東西，是習慣。以前想買東西還要出門，現在躺著就買了，很難停下來。', simplified: '我觉得网购最大的问题不是东西，是习惯。以前想买东西还要出门，现在躺着就买了，很难停下来。', pinyin: 'Wǒ juéde wǎnggòu zuì dà de wèntí búshì dōngxi, shì xíguàn. Yǐqián xiǎng mǎi dōngxi hái yào chūmén, xiànzài tǎngzhe jiù mǎi le, hěn nán tíng xiàlái.', english: "I think the biggest problem with online shopping isn't the products—it's the habit. You used to have to go out to buy things; now you buy lying down, and it's hard to stop.", vietnamese: 'Mình thấy vấn đề lớn nhất của mua online không phải hàng hóa, mà là thói quen. Trước muốn mua gì còn phải ra ngoài, giờ nằm cũng mua được, rất khó dừng lại.' },
      { speaker: '高橋健太', traditional: '說不定過幾年，大家又會開始想念逛實體店的感覺。', simplified: '说不定过几年，大家又会开始想念逛实体店的感觉。', pinyin: 'Shuōbudìng guò jǐ nián, dàjiā yòu huì kāishǐ xiǎngniàn guàng shítǐdiàn de gǎnjué.', english: "Who knows, in a few years people might start missing the feeling of browsing physical stores.", vietnamese: 'Biết đâu vài năm nữa, mọi người lại bắt đầu nhớ cảm giác dạo cửa hàng thật.' },
      { speaker: '陳敏萱', traditional: '其實我也想支持巷口那家小店。可是他們沒有網路訂購，我常常就忘了。', simplified: '其实我也想支持巷口那家小店。可是他们没有网路订购，我常常就忘了。', pinyin: 'Qíshí wǒ yě xiǎng zhīchí xiàngkǒu nà jiā xiǎo diàn. Kěshì tāmen méiyǒu wǎnglù dìnggòu, wǒ chángcháng jiù wàng le.', english: "Actually I'd like to support the little shop at the end of the lane too. But they don't have online ordering, so I often forget.", vietnamese: 'Thật ra mình cũng muốn ủng hộ cửa tiệm nhỏ đầu hẻm. Nhưng họ không có đặt hàng online, mình hay quên mất.' },
      { speaker: '羅珊蒂', traditional: '那就固定一個時間去逛啊。有些東西，還是要摸得到、看得到比較安心。', simplified: '那就固定一个时间去逛啊。有些东西，还是要摸得到、看得到比较安心。', pinyin: 'Nà jiù gùdìng yí ge shíjiān qù guàng a. Yǒuxiē dōngxi, háishì yào mō de dào, kàn de dào bǐjiào ānxīn.', english: "Then set a regular time to go browse. For some things, being able to touch and see them is more reassuring.", vietnamese: 'Vậy thì cố định một khung giờ đi dạo đi. Có những thứ vẫn phải sờ được, thấy được mới yên tâm.' },
      { speaker: '安德思', traditional: '好，這個月我來試試看：能在實體店買的，就不網購。', simplified: '好，这个月我来试试看：能在实体店买的，就不网购。', pinyin: 'Hǎo, zhège yuè wǒ lái shìshì kàn: néng zài shítǐdiàn mǎi de, jiù bù wǎnggòu.', english: "OK, this month I'll try: if I can buy it at a physical store, I won't buy it online.", vietnamese: 'Được, tháng này mình thử xem: cái gì mua được ở cửa hàng thật thì không mua online.' },
      { speaker: '陳敏萱', traditional: '我也跟。不過……我先把這五個包裹拿回家再說。', simplified: '我也跟。不过……我先把这五个包裹拿回家再说。', pinyin: 'Wǒ yě gēn. Búguò…… wǒ xiān bǎ zhè wǔ ge bāoguǒ ná huí jiā zài shuō.', english: "I'm in too. But… let me get these five packages home first.", vietnamese: 'Mình cũng theo. Nhưng… để mình mang năm cái bưu kiện này về nhà đã.' }
    ]
  ],

  shortReading: {
    traditional:
      '網購改變了什麼？\n\n　　這十幾年，網購在台灣越來越普遍。以前想買東西要出門、要挑、要提回家；現在只要手機按幾下，隔天宅配就送到門口。對消費者來說，這是效率的一大進步。\n\n　　不過，方便也帶來新的問題。第一，很多人因此買太多。看到打折就下單，等東西到了才發現用不到，家裡越堆越滿。第二，網購製造了大量的紙箱和塑膠包裝，很快就變成垃圾，對環境是一種負擔。第三，街上的實體小店受到很大的衝擊，有些因為客人越來越少而倒閉。\n\n　　除了這些，網購也帶來一些安全上的擔心，例如個資外洩、賣家詐騙。所以在網路上買東西，除了比價，也要看清楚評論、退換的規則，還要小心保護自己的個人資料。\n\n　　專家認為，網購本身沒有錯，關鍵是消費者能不能更有意識地購物：買以前先問自己是不是真的需要，也可以固定支持幾家在地的小店。方便和節制之間，需要每個人自己找到平衡。',
    simplified:
      '网购改变了什么？\n\n　　这十几年，网购在台湾越来越普遍。以前想买东西要出门、要挑、要提回家；现在只要手机按几下，隔天宅配就送到门口。对消费者来说，这是效率的一大进步。\n\n　　不过，方便也带来新的问题。第一，很多人因此买太多。看到打折就下单，等东西到了才发现用不到，家里越堆越满。第二，网购制造了大量的纸箱和塑胶包装，很快就变成垃圾，对环境是一种负担。第三，街上的实体小店受到很大的冲击，有些因为客人越来越少而倒闭。\n\n　　除了这些，网购也带来一些安全上的担心，例如个资外泄、卖家诈骗。所以在网路上买东西，除了比价，也要看清楚评论、退换的规则，还要小心保护自己的个人资料。\n\n　　专家认为，网购本身没有错，关键是消费者能不能更有意识地购物：买以前先问自己是不是真的需要，也可以固定支持几家在地的小店。方便和节制之间，需要每个人自己找到平衡。',
    vietnamese:
      'Mua sắm trực tuyến đã thay đổi điều gì?\n\nMười mấy năm nay, mua sắm trực tuyến ở Đài Loan ngày càng phổ biến. Trước đây muốn mua đồ phải ra ngoài, phải chọn, phải xách về nhà; giờ chỉ cần bấm điện thoại vài cái, hôm sau hàng giao tận cửa. Đối với người tiêu dùng, đây là một bước tiến lớn về hiệu suất.\n\nTuy nhiên, tiện lợi cũng mang lại vấn đề mới. Thứ nhất, nhiều người vì thế mà mua quá tay. Thấy giảm giá là đặt đơn, đến khi hàng tới mới phát hiện không dùng đến, trong nhà càng chất càng đầy. Thứ hai, mua online tạo ra lượng lớn thùng giấy và bao bì nhựa, nhanh chóng trở thành rác, là một gánh nặng cho môi trường. Thứ ba, các cửa hàng nhỏ thực thể trên phố chịu tác động rất lớn, có nơi vì khách ngày càng ít mà phải đóng cửa.\n\nNgoài những điều đó, mua online cũng mang lại một số lo ngại về an toàn, ví dụ như lộ thông tin cá nhân, người bán lừa đảo. Vì vậy khi mua đồ trên mạng, ngoài so giá, còn phải xem kỹ đánh giá, quy định đổi trả, và cẩn thận bảo vệ thông tin cá nhân của mình.\n\nChuyên gia cho rằng, bản thân việc mua online không sai, mấu chốt là người tiêu dùng có thể mua sắm một cách có ý thức hơn hay không: trước khi mua hãy tự hỏi mình có thật sự cần không, cũng có thể cố định ủng hộ vài cửa tiệm nhỏ địa phương. Giữa tiện lợi và tiết chế, mỗi người cần tự tìm được sự cân bằng.'
  },

  phrases: [
    { phraseTraditional: '下了五筆訂單', phraseSimplified: '下了五笔订单', pinyin: 'xià le wǔ bǐ dìngdān', meaningVi: 'đặt năm đơn hàng' },
    { phraseTraditional: '貨比三家', phraseSimplified: '货比三家', pinyin: 'huò bǐ sān jiā', meaningVi: 'khảo giá nhiều nơi (so ba nhà)' },
    { phraseTraditional: '等於白買', phraseSimplified: '等于白买', pinyin: 'děngyú bái mǎi', meaningVi: 'coi như mua phí' },
    { phraseTraditional: '忍不住', phraseSimplified: '忍不住', pinyin: 'rěnbuzhù', meaningVi: 'không kìm được (muốn mua)' },
    { phraseTraditional: '停不下來', phraseSimplified: '停不下来', pinyin: 'tíng bu xiàlái', meaningVi: 'không dừng lại được' },
    { phraseTraditional: '摸得到、看得到', phraseSimplified: '摸得到、看得到', pinyin: 'mō de dào, kàn de dào', meaningVi: 'sờ được, thấy được (hàng thật)' },
    { phraseTraditional: '巷口那家小店', phraseSimplified: '巷口那家小店', pinyin: 'xiàngkǒu nà jiā xiǎo diàn', meaningVi: 'cửa tiệm nhỏ đầu hẻm' }
  ],

  vocab: [
    { id: 'L9-001', lessonId: 'L9', order: 1, group: 'vocab1', traditional: '網購', simplified: '网购', pinyin: 'wǎnggòu', wordClass: ['V', 'N'], meaningVi: 'mua sắm trực tuyến', meaningEn: 'online shopping; to shop online', tags: ['mua-sam'], examples: [{ traditional: '現在網購真的太方便了。', simplified: '现在网购真的太方便了。', vietnamese: 'Mua online giờ tiện thật.' }] },
    { id: 'L9-002', lessonId: 'L9', order: 2, group: 'vocab1', traditional: '包裹', simplified: '包裹', pinyin: 'bāoguǒ', wordClass: ['N'], meaningVi: 'bưu kiện, gói hàng', meaningEn: 'parcel, package', examples: [{ traditional: '你怎麼一次領這麼多包裹？', simplified: '你怎么一次领这么多包裹？', vietnamese: 'Sao cậu nhận nhiều bưu kiện một lúc thế?' }] },
    { id: 'L9-003', lessonId: 'L9', order: 3, group: 'vocab1', traditional: '領', simplified: '领', pinyin: 'lǐng', wordClass: ['V'], meaningVi: 'nhận, lĩnh (đồ, lương)', meaningEn: 'to collect, to pick up, to receive', examples: [{ traditional: '我要去便利商店領包裹。', simplified: '我要去便利商店领包裹。', vietnamese: 'Mình phải ra cửa hàng tiện lợi nhận bưu kiện.' }] },
    { id: 'L9-004', lessonId: 'L9', order: 4, group: 'vocab1', traditional: '打折', simplified: '打折', pinyin: 'dǎzhé', wordClass: ['V-sep'], meaningVi: 'giảm giá', meaningEn: 'to give a discount', notes: '打八折 = giảm 20% (còn 80%).', tags: ['mua-sam'], examples: [{ traditional: '上個週末打折，我買了很多東西。', simplified: '上个周末打折，我买了很多东西。', vietnamese: 'Cuối tuần trước giảm giá, mình mua nhiều đồ.' }] },
    { id: 'L9-005', lessonId: 'L9', order: 5, group: 'vocab1', traditional: '訂單', simplified: '订单', pinyin: 'dìngdān', wordClass: ['N'], meaningVi: 'đơn hàng', meaningEn: 'order (form)', tags: ['mua-sam'], examples: [{ traditional: '我一下就下了五筆訂單。', simplified: '我一下就下了五笔订单。', vietnamese: 'Mình một lúc đặt luôn năm đơn.' }] },
    { id: 'L9-006', lessonId: 'L9', order: 6, group: 'vocab1', traditional: '比價', simplified: '比价', pinyin: 'bǐjià', wordClass: ['V-sep'], meaningVi: 'so giá, khảo giá', meaningEn: 'to compare prices', examples: [{ traditional: '網路上比價很快。', simplified: '网路上比价很快。', vietnamese: 'So giá trên mạng rất nhanh.' }] },
    { id: 'L9-007', lessonId: 'L9', order: 7, group: 'vocab1', traditional: '忍', simplified: '忍', pinyin: 'rěn', wordClass: ['V'], meaningVi: 'nhịn, kìm nén, chịu đựng', meaningEn: 'to endure, to hold back', examples: [{ traditional: '看到便宜，我就忍不住想買。', simplified: '看到便宜，我就忍不住想买。', vietnamese: 'Thấy rẻ là mình không kìm được, muốn mua.' }] },
    { id: 'L9-008', lessonId: 'L9', order: 8, group: 'vocab1', traditional: '評論', simplified: '评论', pinyin: 'pínglùn', wordClass: ['N', 'V'], meaningVi: 'bình luận, đánh giá; nhận xét', meaningEn: 'review, comment; to comment', examples: [{ traditional: '買以前我一定會看評論。', simplified: '买以前我一定会看评论。', vietnamese: 'Trước khi mua mình nhất định sẽ xem đánh giá.' }] },
    { id: 'L9-009', lessonId: 'L9', order: 9, group: 'vocab1', traditional: '抱怨', simplified: '抱怨', pinyin: 'bàoyuàn', wordClass: ['V'], meaningVi: 'than phiền, phàn nàn', meaningEn: 'to complain', examples: [{ traditional: '有時候評論裡全是抱怨。', simplified: '有时候评论里全是抱怨。', vietnamese: 'Có khi phần bình luận toàn là than phiền.' }] },
    { id: 'L9-010', lessonId: 'L9', order: 10, group: 'vocab1', traditional: '實體店', simplified: '实体店', pinyin: 'shítǐdiàn', wordClass: ['N'], meaningVi: 'cửa hàng thực thể (offline)', meaningEn: 'brick-and-mortar store', tags: ['mua-sam'], examples: [{ traditional: '能在實體店買的，我就不網購。', simplified: '能在实体店买的，我就不网购。', vietnamese: 'Cái gì mua được ở cửa hàng thật thì mình không mua online.' }] },
    { id: 'L9-011', lessonId: 'L9', order: 11, group: 'vocab1', traditional: '變形', simplified: '变形', pinyin: 'biànxíng', wordClass: ['Vp-sep'], meaningVi: 'biến dạng, méo mó', meaningEn: 'to lose shape, to deform', examples: [{ traditional: '那件外套洗一次就變形了。', simplified: '那件外套洗一次就变形了。', vietnamese: 'Cái áo khoác đó giặt một lần là méo mó.' }] },
    { id: 'L9-012', lessonId: 'L9', order: 12, group: 'vocab1', traditional: '等於', simplified: '等于', pinyin: 'děngyú', wordClass: ['Vst'], meaningVi: 'bằng, tương đương với; coi như', meaningEn: 'to equal, to amount to', examples: [{ traditional: '洗一次就壞，等於白買。', simplified: '洗一次就坏，等于白买。', vietnamese: 'Giặt một lần là hỏng, coi như mua phí.' }] },
    { id: 'L9-013', lessonId: 'L9', order: 13, group: 'vocab1', traditional: '退', simplified: '退', pinyin: 'tuì', wordClass: ['V'], meaningVi: 'trả lại (hàng); lùi', meaningEn: 'to return (goods); to withdraw', tags: ['mua-sam'], examples: [{ traditional: '大部分的網站七天內都可以退。', simplified: '大部分的网站七天内都可以退。', vietnamese: 'Phần lớn trang web trong bảy ngày đều trả được.' }] },
    { id: 'L9-014', lessonId: 'L9', order: 14, group: 'vocab1', traditional: '包裝', simplified: '包装', pinyin: 'bāozhuāng', wordClass: ['N', 'V'], meaningVi: 'bao bì; đóng gói', meaningEn: 'packaging; to package', examples: [{ traditional: '要退貨的話，包裝要留好。', simplified: '要退货的话，包装要留好。', vietnamese: 'Nếu muốn trả hàng thì phải giữ nguyên bao bì.' }] },
    { id: 'L9-015', lessonId: 'L9', order: 15, group: 'vocab1', traditional: '拆', simplified: '拆', pinyin: 'chāi', wordClass: ['V'], meaningVi: 'tháo, mở (ra), dỡ', meaningEn: 'to take apart, to unpack, to tear open', examples: [{ traditional: '一旦拆壞了，可能就退不了。', simplified: '一旦拆坏了，可能就退不了。', vietnamese: 'Một khi xé rách rồi thì có thể không trả được.' }] },
    { id: 'L9-016', lessonId: 'L9', order: 16, group: 'vocab1', traditional: '躺', simplified: '躺', pinyin: 'tǎng', wordClass: ['Vi'], meaningVi: 'nằm', meaningEn: 'to lie down', examples: [{ traditional: '現在躺著就能買東西。', simplified: '现在躺着就能买东西。', vietnamese: 'Giờ nằm cũng mua được đồ.' }] },
    { id: 'L9-017', lessonId: 'L9', order: 17, group: 'vocab1', traditional: '停', simplified: '停', pinyin: 'tíng', wordClass: ['V'], meaningVi: 'dừng, ngừng', meaningEn: 'to stop', examples: [{ traditional: '買習慣了，就很難停下來。', simplified: '买习惯了，就很难停下来。', vietnamese: 'Mua thành quen rồi thì rất khó dừng lại.' }] },
    { id: 'L9-018', lessonId: 'L9', order: 18, group: 'vocab1', traditional: '巷口', simplified: '巷口', pinyin: 'xiàngkǒu', wordClass: ['N'], meaningVi: 'đầu hẻm, đầu ngõ', meaningEn: 'the entrance of a lane/alley', examples: [{ traditional: '我想支持巷口那家小店。', simplified: '我想支持巷口那家小店。', vietnamese: 'Mình muốn ủng hộ cửa tiệm nhỏ đầu hẻm.' }] },
    { id: 'L9-019', lessonId: 'L9', order: 19, group: 'vocab1', traditional: '訂購', simplified: '订购', pinyin: 'dìnggòu', wordClass: ['V'], meaningVi: 'đặt mua', meaningEn: 'to order (goods)', tags: ['mua-sam'], examples: [{ traditional: '那家小店沒有網路訂購。', simplified: '那家小店没有网路订购。', vietnamese: 'Cửa tiệm nhỏ đó không có đặt hàng online.' }] },
    { id: 'L9-020', lessonId: 'L9', order: 20, group: 'vocab1', traditional: '固定', simplified: '固定', pinyin: 'gùdìng', wordClass: ['Vs', 'V'], meaningVi: 'cố định; định kỳ', meaningEn: 'fixed, regular; to fix', examples: [{ traditional: '固定一個時間去逛實體店。', simplified: '固定一个时间去逛实体店。', vietnamese: 'Cố định một khung giờ đi dạo cửa hàng thật.' }] },
    { id: 'L9-021', lessonId: 'L9', order: 21, group: 'vocab1', traditional: '安心', simplified: '安心', pinyin: 'ānxīn', wordClass: ['Vs'], meaningVi: 'yên tâm', meaningEn: 'at ease, reassured', examples: [{ traditional: '摸得到、看得到，買起來比較安心。', simplified: '摸得到、看得到，买起来比较安心。', vietnamese: 'Sờ được, thấy được thì mua yên tâm hơn.' }] },
    { id: 'L9-022', lessonId: 'L9', order: 22, group: 'vocab1', traditional: '下單', simplified: '下单', pinyin: 'xiàdān', wordClass: ['V-sep'], meaningVi: 'đặt hàng, chốt đơn', meaningEn: 'to place an order', tags: ['mua-sam'], examples: [{ traditional: '看到打折就下單，很容易買太多。', simplified: '看到打折就下单，很容易买太多。', vietnamese: 'Thấy giảm giá là đặt đơn, rất dễ mua quá tay.' }] },
    { id: 'L9-023', lessonId: 'L9', order: 23, group: 'vocab1', traditional: '貨', simplified: '货', pinyin: 'huò', wordClass: ['N'], meaningVi: 'hàng, hàng hóa', meaningEn: 'goods, merchandise', examples: [{ traditional: '賣光了，要等下一批貨。', simplified: '卖光了，要等下一批货。', vietnamese: 'Bán hết rồi, phải đợi lô hàng sau.' }] },
    { id: 'L9-024', lessonId: 'L9', order: 24, group: 'vocab1', traditional: '賣家', simplified: '卖家', pinyin: 'màijiā', wordClass: ['N'], meaningVi: 'người bán', meaningEn: 'seller', tags: ['mua-sam'], examples: [{ traditional: '下單前先看看賣家的評價。', simplified: '下单前先看看卖家的评价。', vietnamese: 'Trước khi đặt hàng xem đánh giá của người bán.' }] },
    { id: 'L9-025', lessonId: 'L9', order: 25, group: 'vocab1', traditional: '買家', simplified: '买家', pinyin: 'mǎijiā', wordClass: ['N'], meaningVi: 'người mua', meaningEn: 'buyer', tags: ['mua-sam'], examples: [{ traditional: '評論大部分是其他買家寫的。', simplified: '评论大部分是其他买家写的。', vietnamese: 'Đánh giá phần lớn là do những người mua khác viết.' }] },
    { id: 'L9-026', lessonId: 'L9', order: 26, group: 'vocab1', traditional: '衝動', simplified: '冲动', pinyin: 'chōngdòng', wordClass: ['Vs', 'N'], meaningVi: 'bốc đồng; sự xung động', meaningEn: 'impulsive; impulse', examples: [{ traditional: '很多人是一時衝動才下單的。', simplified: '很多人是一时冲动才下单的。', vietnamese: 'Nhiều người là bốc đồng nhất thời mới đặt hàng.' }] },

    { id: 'L9-027', lessonId: 'L9', order: 1, group: 'vocab2', traditional: '電商', simplified: '电商', pinyin: 'diànshāng', wordClass: ['N'], meaningVi: 'thương mại điện tử', meaningEn: 'e-commerce', tags: ['mua-sam'], examples: [{ traditional: '這幾年電商的生意成長得很快。', simplified: '这几年电商的生意成长得很快。', vietnamese: 'Mấy năm nay việc kinh doanh thương mại điện tử tăng trưởng rất nhanh.' }] },
    { id: 'L9-028', lessonId: 'L9', order: 2, group: 'vocab2', traditional: '消費者', simplified: '消费者', pinyin: 'xiāofèizhě', wordClass: ['N'], meaningVi: 'người tiêu dùng', meaningEn: 'consumer', tags: ['mua-sam'], examples: [{ traditional: '對消費者來說，這是效率的一大進步。', simplified: '对消费者来说，这是效率的一大进步。', vietnamese: 'Đối với người tiêu dùng, đây là một bước tiến lớn về hiệu suất.' }] },
    { id: 'L9-029', lessonId: 'L9', order: 3, group: 'vocab2', traditional: '物流', simplified: '物流', pinyin: 'wùliú', wordClass: ['N'], meaningVi: 'logistics, hệ thống vận chuyển', meaningEn: 'logistics', examples: [{ traditional: '網購方便，靠的是快速的物流。', simplified: '网购方便，靠的是快速的物流。', vietnamese: 'Mua online tiện lợi là nhờ hệ thống vận chuyển nhanh.' }] },
    { id: 'L9-030', lessonId: 'L9', order: 4, group: 'vocab2', traditional: '宅配', simplified: '宅配', pinyin: 'zháipèi', wordClass: ['N', 'V'], meaningVi: 'giao hàng tận nhà', meaningEn: 'home delivery', examples: [{ traditional: '隔天宅配就送到門口。', simplified: '隔天宅配就送到门口。', vietnamese: 'Hôm sau giao hàng tận cửa.' }] },
    { id: 'L9-031', lessonId: 'L9', order: 5, group: 'vocab2', traditional: '退換', simplified: '退换', pinyin: 'tuìhuàn', wordClass: ['V'], meaningVi: 'đổi trả (hàng)', meaningEn: 'to return or exchange', tags: ['mua-sam'], examples: [{ traditional: '要看清楚退換的規則。', simplified: '要看清楚退换的规则。', vietnamese: 'Phải xem kỹ quy định đổi trả.' }] },
    { id: 'L9-032', lessonId: 'L9', order: 6, group: 'vocab2', traditional: '保固', simplified: '保固', pinyin: 'bǎogù', wordClass: ['N'], meaningVi: 'bảo hành', meaningEn: 'warranty', examples: [{ traditional: '這台電腦有兩年保固。', simplified: '这台电脑有两年保固。', vietnamese: 'Chiếc máy tính này có bảo hành hai năm.' }] },
    { id: 'L9-033', lessonId: 'L9', order: 7, group: 'vocab2', traditional: '詐騙', simplified: '诈骗', pinyin: 'zhàpiàn', wordClass: ['N', 'V'], meaningVi: 'lừa đảo', meaningEn: 'fraud, scam; to swindle', examples: [{ traditional: '賣家要你私訊付款，很可能是詐騙。', simplified: '卖家要你私讯付款，很可能是诈骗。', vietnamese: 'Người bán bảo bạn nhắn riêng để thanh toán, rất có thể là lừa đảo.' }] },
    { id: 'L9-034', lessonId: 'L9', order: 8, group: 'vocab2', traditional: '個資', simplified: '个资', pinyin: 'gèzī', wordClass: ['N'], meaningVi: 'thông tin cá nhân', meaningEn: 'personal data', examples: [{ traditional: '在網路上買東西要小心保護個資。', simplified: '在网路上买东西要小心保护个资。', vietnamese: 'Mua đồ trên mạng phải cẩn thận bảo vệ thông tin cá nhân.' }] },
    { id: 'L9-035', lessonId: 'L9', order: 9, group: 'vocab2', traditional: '外送', simplified: '外送', pinyin: 'wàisòng', wordClass: ['N', 'V'], meaningVi: 'giao đồ ăn tận nơi', meaningEn: 'food delivery', tags: ['am-thuc'], examples: [{ traditional: '現在連一杯飲料都可以叫外送。', simplified: '现在连一杯饮料都可以叫外送。', vietnamese: 'Giờ đến cả một ly nước cũng gọi giao tận nơi được.' }] },
    { id: 'L9-036', lessonId: 'L9', order: 10, group: 'vocab2', traditional: '效率', simplified: '效率', pinyin: 'xiàolǜ', wordClass: ['N'], meaningVi: 'hiệu suất, hiệu quả', meaningEn: 'efficiency', examples: [{ traditional: '網購最大的好處是效率高。', simplified: '网购最大的好处是效率高。', vietnamese: 'Lợi ích lớn nhất của mua online là hiệu suất cao.' }] },
    { id: 'L9-037', lessonId: 'L9', order: 11, group: 'vocab2', traditional: '品質', simplified: '品质', pinyin: 'pǐnzhí', wordClass: ['N'], meaningVi: 'chất lượng', meaningEn: 'quality', tags: ['mua-sam'], examples: [{ traditional: '便宜不見得品質差，貴的也不見得好。', simplified: '便宜不见得品质差，贵的也不见得好。', vietnamese: 'Rẻ chưa chắc chất lượng kém, đắt cũng chưa chắc tốt.' }] },
    { id: 'L9-038', lessonId: 'L9', order: 12, group: 'vocab2', traditional: '塑膠', simplified: '塑胶', pinyin: 'sùjiāo', wordClass: ['N'], meaningVi: 'nhựa, chất dẻo', meaningEn: 'plastic', tags: ['moi-truong'], examples: [{ traditional: '網購製造了大量的塑膠包裝。', simplified: '网购制造了大量的塑胶包装。', vietnamese: 'Mua online tạo ra lượng lớn bao bì nhựa.' }] },
    { id: 'L9-039', lessonId: 'L9', order: 13, group: 'vocab2', traditional: '垃圾', simplified: '垃圾', pinyin: 'lèsè', wordClass: ['N'], meaningVi: 'rác', meaningEn: 'garbage, trash', tags: ['moi-truong'], examples: [{ traditional: '紙箱和包裝很快就變成垃圾。', simplified: '纸箱和包装很快就变成垃圾。', vietnamese: 'Thùng giấy và bao bì nhanh chóng trở thành rác.' }] },
    { id: 'L9-040', lessonId: 'L9', order: 14, group: 'vocab2', traditional: '環境', simplified: '环境', pinyin: 'huánjìng', wordClass: ['N'], meaningVi: 'môi trường', meaningEn: 'environment', tags: ['moi-truong'], examples: [{ traditional: '過多的包裝對環境是一種負擔。', simplified: '过多的包装对环境是一种负担。', vietnamese: 'Bao bì quá nhiều là một gánh nặng cho môi trường.' }] },
    { id: 'L9-041', lessonId: 'L9', order: 15, group: 'vocab2', traditional: '衝擊', simplified: '冲击', pinyin: 'chōngjí', wordClass: ['N', 'V'], meaningVi: 'tác động mạnh, cú sốc', meaningEn: 'impact, shock', examples: [{ traditional: '實體小店受到很大的衝擊。', simplified: '实体小店受到很大的冲击。', vietnamese: 'Các cửa hàng nhỏ thực thể chịu tác động rất lớn.' }] },
    { id: 'L9-042', lessonId: 'L9', order: 16, group: 'vocab2', traditional: '生意', simplified: '生意', pinyin: 'shēngyì', wordClass: ['N'], meaningVi: 'việc buôn bán, kinh doanh', meaningEn: 'business, trade', examples: [{ traditional: '小店的生意越來越難做。', simplified: '小店的生意越来越难做。', vietnamese: 'Việc buôn bán của cửa tiệm nhỏ ngày càng khó.' }] },
    { id: 'L9-043', lessonId: 'L9', order: 17, group: 'vocab2', traditional: '倒閉', simplified: '倒闭', pinyin: 'dǎobì', wordClass: ['Vp'], meaningVi: 'phá sản, đóng cửa (doanh nghiệp)', meaningEn: 'to go out of business, to close down', examples: [{ traditional: '有些店因為客人變少而倒閉。', simplified: '有些店因为客人变少而倒闭。', vietnamese: 'Có cửa hàng vì khách ít đi mà phải đóng cửa.' }] },
    { id: 'L9-044', lessonId: 'L9', order: 18, group: 'vocab2', traditional: '挑選', simplified: '挑选', pinyin: 'tiāoxuǎn', wordClass: ['V'], meaningVi: 'lựa chọn, chọn lựa', meaningEn: 'to pick, to select', examples: [{ traditional: '以前買東西要自己去店裡挑選。', simplified: '以前买东西要自己去店里挑选。', vietnamese: 'Trước đây mua đồ phải tự đến cửa hàng chọn lựa.' }] },
    { id: 'L9-045', lessonId: 'L9', order: 19, group: 'vocab2', traditional: '節制', simplified: '节制', pinyin: 'jiézhì', wordClass: ['V'], meaningVi: 'tiết chế, kiềm chế', meaningEn: 'to restrain, to exercise moderation', examples: [{ traditional: '方便和節制之間，要自己找到平衡。', simplified: '方便和节制之间，要自己找到平衡。', vietnamese: 'Giữa tiện lợi và tiết chế, phải tự tìm được sự cân bằng.' }] }
  ],

  grammar: [
    {
      id: 'L9-G1', lessonId: 'L9', order: 1, pattern: '只要…，就…',
      functionVi: '"只要 A，就 B" nêu A là điều kiện đủ để B xảy ra: chỉ cần có A là có B. So sánh: "只有 A，才 B" nêu A là điều kiện cần duy nhất (không có A thì không có B).',
      functionEn: '"只要 A, 就 B" states A as a sufficient condition for B: as long as A, then B. Contrast: "只有 A, 才 B" states A as the only necessary condition.',
      examples: [
        { traditional: '現在網購很方便，只要手機按幾下，東西兩天就到。', simplified: '现在网购很方便，只要手机按几下，东西两天就到。', english: 'Online shopping is so easy now; a few taps on your phone and it arrives in two days.', vietnamese: 'Mua online giờ rất tiện, chỉ cần bấm điện thoại vài cái là hai ngày sau hàng tới.' },
        { traditional: '只要你先跟店家聯絡，大部分都可以退換。', simplified: '只要你先跟店家联络，大部分都可以退换。', english: 'As long as you contact the seller first, most items can be exchanged.', vietnamese: 'Chỉ cần liên hệ người bán trước, phần lớn đều đổi trả được.' },
        { traditional: '只要不下雨，我們就照計畫去爬山。', simplified: '只要不下雨，我们就照计划去爬山。', english: "As long as it doesn't rain, we'll go hiking as planned.", vietnamese: 'Chỉ cần trời không mưa, bọn mình sẽ đi leo núi theo kế hoạch.' },
        { traditional: '這個工作只要有心，很快就能學會。', simplified: '这个工作只要有心，很快就能学会。', english: 'This job, as long as you put your heart into it, you can learn quickly.', vietnamese: 'Công việc này chỉ cần có tâm là học nhanh thôi.' },
        { traditional: '只要你需要，我隨時都可以幫忙。', simplified: '只要你需要，我随时都可以帮忙。', english: 'As long as you need it, I can help anytime.', vietnamese: 'Chỉ cần cậu cần, mình có thể giúp bất cứ lúc nào.' }
      ],
      usageNotesVi: '"只要…就…" (điều kiện đủ) khác với "只有…才…" (điều kiện cần duy nhất). Ví dụ: "只要有錢就能買" (có tiền là mua được) ≠ "只有有錢才能買" (chỉ khi có tiền mới mua được — nhấn mạnh không có tiền thì không được).',
      exercises: [
        { id: 'L9-G1-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這家店的東西要怎麼退？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['只要包裝還在、七天之內，就可以退。'] }], targetPattern: 'L9-G1' },
        { id: 'L9-G1-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：我英文不好，敢去打工度假嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['只要你肯開口說，語言的問題慢慢就會解決。'] }], targetPattern: 'L9-G1' },
        { id: 'L9-G1-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個週末的活動會不會取消？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['只要颱風不來，就照常舉行。'] }], targetPattern: 'L9-G1' },
        { id: 'L9-G1-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他那麼忙，會回我訊息嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['放心，只要是重要的事，他一定會回。'] }], targetPattern: 'L9-G1' },
        { id: 'L9-G1-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：養一隻貓很難照顧嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['其實不會，只要固定餵食、清貓砂，就沒什麼問題。'] }], targetPattern: 'L9-G1' }
      ]
    },
    {
      id: 'L9-G2', lessonId: 'L9', order: 2, pattern: '除了 A（以外），還／也…',
      functionVi: '"除了 A（以外），還／也 B" nêu ngoài A ra còn có B (mang nghĩa thêm vào). Khác nghĩa với "除了 A 以外，都…" (= ngoại trừ A).',
      functionEn: '"除了 A（以外），還／也 B" means besides A, there is also B (additive). Different from "除了 A 以外，都…" (= except A).',
      examples: [
        { traditional: '除了比價，我還會看評論。', simplified: '除了比价，我还会看评论。', english: 'Besides comparing prices, I also read reviews.', vietnamese: 'Ngoài so giá, tôi còn xem đánh giá.' },
        { traditional: '這個包裹裡除了衣服，還有一本書。', simplified: '这个包裹里除了衣服，还有一本书。', english: 'Besides clothes, this package also has a book.', vietnamese: 'Trong bưu kiện này ngoài quần áo còn có một quyển sách.' },
        { traditional: '網購除了方便，也讓人容易買太多。', simplified: '网购除了方便，也让人容易买太多。', english: 'Besides being convenient, online shopping also makes people buy too much.', vietnamese: 'Mua online ngoài tiện lợi, còn khiến người ta dễ mua quá tay.' },
        { traditional: '他除了會做菜，還會修電腦。', simplified: '他除了会做菜，还会修电脑。', english: 'Besides cooking, he can also fix computers.', vietnamese: 'Ngoài nấu ăn, anh ấy còn biết sửa máy tính.' },
        { traditional: '這次旅行除了花錢，也花了不少時間準備。', simplified: '这次旅行除了花钱，也花了不少时间准备。', english: 'This trip cost money and also a lot of preparation time.', vietnamese: 'Chuyến đi này ngoài tốn tiền, còn tốn khá nhiều thời gian chuẩn bị.' }
      ],
      usageNotesVi: 'Khi mang nghĩa "thêm vào", vế sau dùng 還／也. Khi mang nghĩa "ngoại trừ", vế sau dùng 都／全 (除了他以外，大家都到了). Phân biệt qua ngữ cảnh và từ ở vế sau.',
      exercises: [
        { id: 'L9-G2-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你買東西都看什麼？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['除了看價錢，我還會看賣家的評價高不高。'] }], targetPattern: 'L9-G2' },
        { id: 'L9-G2-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這家民宿有什麼特別的？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['除了可以看星星，還可以跟老闆一起下田。'] }], targetPattern: 'L9-G2' },
        { id: 'L9-G2-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你這個週末只是要打掃嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['除了打掃，我也想把冬天的衣服整理出來。'] }], targetPattern: 'L9-G2' },
        { id: 'L9-G2-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：養寵物只要準備飼料就好了吧？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['沒那麼簡單，除了飼料，還要準備看醫生的錢。'] }], targetPattern: 'L9-G2' },
        { id: 'L9-G2-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他中文進步的原因是什麼？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['除了每天上課，他也交了很多台灣朋友。'] }], targetPattern: 'L9-G2' }
      ]
    },
    {
      id: 'L9-G3', lessonId: 'L9', order: 3, pattern: '靠…',
      functionVi: '"靠 + N／V" nghĩa là dựa vào, nhờ vào ai hoặc cái gì để đạt được điều gì. "靠" có thể là động từ chính hoặc đứng trong cụm "靠… + V".',
      functionEn: '"靠 + N／V" means to rely on / depend on someone or something to achieve something. "靠" can be the main verb or part of "靠… + V".',
      examples: [
        { traditional: '不能只靠照片決定，照片跟實際收到的常常差很多。', simplified: '不能只靠照片决定，照片跟实际收到的常常差很多。', english: "You can't decide based on photos alone; photos and what actually arrives often differ a lot.", vietnamese: 'Không thể chỉ dựa vào ảnh để quyết định, ảnh và hàng thực nhận thường chênh nhiều.' },
        { traditional: '他大學的學費都是靠自己打工賺的。', simplified: '他大学的学费都是靠自己打工赚的。', english: 'He earned all his university tuition by working part-time.', vietnamese: 'Học phí đại học của anh ấy đều nhờ tự đi làm thêm kiếm được.' },
        { traditional: '這家店能開這麼久，主要靠老客人。', simplified: '这家店能开这么久，主要靠老客人。', english: 'This shop has stayed open so long mainly thanks to its regular customers.', vietnamese: 'Tiệm này trụ được lâu như vậy chủ yếu nhờ khách quen.' },
        { traditional: '減肥不能只靠少吃，也要運動。', simplified: '减肥不能只靠少吃，也要运动。', english: "Losing weight can't rely only on eating less; you need exercise too.", vietnamese: 'Giảm cân không thể chỉ dựa vào ăn ít, còn phải vận động.' },
        { traditional: '剛到一個新地方，很多事都要靠鄰居幫忙。', simplified: '刚到一个新地方，很多事都要靠邻居帮忙。', english: 'When you first arrive somewhere new, you rely on neighbors for a lot.', vietnamese: 'Vừa đến một nơi mới, nhiều chuyện đều phải nhờ hàng xóm giúp.' }
      ],
      usageNotesVi: '"靠" nhấn mạnh sự phụ thuộc vào một nguồn lực hoặc phương tiện. "靠自己" = tự lực. Có thể nói "靠 N 過日子" (sống nhờ vào…). Sắc thái trung tính, nhưng "只靠…" thường ngụ ý "chỉ như vậy là chưa đủ".',
      exercises: [
        { id: 'L9-G3-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你怎麼找到這家民宿的？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['靠一個朋友介紹的，他去年住過。'] }], targetPattern: 'L9-G3' },
        { id: 'L9-G3-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他退休以後生活會有問題嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['應該還好，他靠退休金加上房租，日子過得去。'] }], targetPattern: 'L9-G3' },
        { id: 'L9-G3-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：學語言有什麼快一點的方法嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['沒有捷徑，主要還是靠每天練習。'] }], targetPattern: 'L9-G3' },
        { id: 'L9-G3-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這次比賽你們怎麼贏的？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['靠大家分工合作，每個人都做好自己的部分。'] }], targetPattern: 'L9-G3' },
        { id: 'L9-G3-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：網購要怎麼避免買到爛東西？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不能只靠低價，要多看評論和退貨的規則。'] }], targetPattern: 'L9-G3' }
      ]
    },
    {
      id: 'L9-G4', lessonId: 'L9', order: 4, pattern: '不見得…',
      functionVi: '"不見得 + tình huống" nghĩa là chưa chắc, không nhất định là như vậy. Dùng để bác lại một suy nghĩ tưởng chừng hiển nhiên.',
      functionEn: '"不見得 + situation" means not necessarily, not certainly so; used to counter a seemingly obvious assumption.',
      examples: [
        { traditional: '便宜不見得划算。', simplified: '便宜不见得划算。', english: "Cheap isn't necessarily a good deal.", vietnamese: 'Rẻ chưa chắc đã hời.' },
        { traditional: '評論很多的店，東西不見得就好。', simplified: '评论很多的店，东西不见得就好。', english: "A shop with lots of reviews doesn't necessarily have good products.", vietnamese: 'Tiệm nhiều đánh giá chưa chắc hàng đã tốt.' },
        { traditional: '他答應了，可是不見得會準時來。', simplified: '他答应了，可是不见得会准时来。', english: "He agreed, but he won't necessarily come on time.", vietnamese: 'Anh ấy đồng ý rồi, nhưng chưa chắc đến đúng giờ.' },
        { traditional: '大家都在買的東西，不見得適合你。', simplified: '大家都在买的东西，不见得适合你。', english: "What everyone's buying isn't necessarily right for you.", vietnamese: 'Cái mọi người đang mua chưa chắc hợp với bạn.' },
        { traditional: '讀了很多書，不見得就懂得怎麼做人。', simplified: '读了很多书，不见得就懂得怎么做人。', english: "Reading a lot of books doesn't necessarily mean you know how to deal with people.", vietnamese: 'Đọc nhiều sách chưa chắc đã biết cách đối nhân xử thế.' }
      ],
      usageNotesVi: '"不見得" gần nghĩa "不一定" nhưng mang tính phản bác rõ hơn (thường trả lời lại lời người khác). Có thể đứng một mình: "那不見得。" (Chưa chắc đâu.)',
      exercises: [
        { id: 'L9-G4-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：貴的東西品質一定比較好吧？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不見得，有時候你只是多付了牌子的錢。'] }], targetPattern: 'L9-G4' },
        { id: 'L9-G4-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他經驗那麼多，這件事一定做得好。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不見得，這次的情況跟他以前遇到的不太一樣。'] }], targetPattern: 'L9-G4' },
        { id: 'L9-G4-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：搬到市中心，生活一定比較方便。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['方便是方便，可是不見得比較舒服，太吵了。'] }], targetPattern: 'L9-G4' },
        { id: 'L9-G4-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這家餐廳排這麼多人，一定很好吃。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不見得，很多人只是為了拍照。'] }], targetPattern: 'L9-G4' },
        { id: 'L9-G4-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他不說話，是不是在生氣？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['不見得，他累的時候也常常這樣。'] }], targetPattern: 'L9-G4' }
      ]
    },
    {
      id: 'L9-G5', lessonId: 'L9', order: 5, pattern: '萬一…',
      functionVi: '"萬一 A，(就) B" nêu một giả định về điều xấu ít khả năng xảy ra nhưng vẫn cần đề phòng. B là cách xử lý hoặc hậu quả.',
      functionEn: '"萬一 A, (就) B" posits an unlikely but undesirable hypothetical worth preparing for. B is the response or consequence.',
      examples: [
        { traditional: '萬一收到的東西有問題呢？——七天內都可以退。', simplified: '万一收到的东西有问题呢？——七天内都可以退。', english: 'What if the item has a problem?—You can return it within seven days.', vietnamese: 'Lỡ hàng nhận về có vấn đề thì sao? — Trong bảy ngày đều trả được.' },
        { traditional: '多帶一件外套，萬一晚上變冷。', simplified: '多带一件外套，万一晚上变冷。', english: 'Bring an extra jacket, in case it gets cold at night.', vietnamese: 'Mang thêm một cái áo khoác, lỡ tối trời lạnh.' },
        { traditional: '這些資料先備份，萬一電腦壞了還有。', simplified: '这些资料先备份，万一电脑坏了还有。', english: 'Back up these files, in case the computer breaks.', vietnamese: 'Sao lưu mấy tài liệu này trước, lỡ máy tính hỏng còn có.' },
        { traditional: '你把包裝留著，萬一要退貨會用到。', simplified: '你把包装留着，万一要退货会用到。', english: 'Keep the packaging, in case you need to return it.', vietnamese: 'Giữ lại bao bì, lỡ phải trả hàng sẽ cần đến.' },
        { traditional: '萬一他真的不來，我們就自己去。', simplified: '万一他真的不来，我们就自己去。', english: "If he really doesn't come, we'll just go ourselves.", vietnamese: 'Lỡ anh ấy thật sự không đến, bọn mình tự đi.' }
      ],
      usageNotesVi: '"萬一" nhấn mạnh xác suất thấp hơn "如果". Thường dùng để dặn dò, phòng xa. Vế B hay có "就" hoặc "怎麼辦". Không dùng "萬一" cho điều chắc chắn hoặc khả năng cao.',
      exercises: [
        { id: 'L9-G5-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：東西寄出去了，應該沒問題吧？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['應該吧，不過你留一下單號，萬一寄丟了可以查。'] }], targetPattern: 'L9-G5' },
        { id: 'L9-G5-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：我想直接把舊手機賣掉。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['先別急，萬一新手機有問題，還可以先用舊的。'] }], targetPattern: 'L9-G5' },
        { id: 'L9-G5-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個週末就照原計畫出發？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對，不過帶把傘，萬一下雨。'] }], targetPattern: 'L9-G5' },
        { id: 'L9-G5-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他說會準時到。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['我們還是早一點出門，萬一路上塞車。'] }], targetPattern: 'L9-G5' },
        { id: 'L9-G5-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這筆錢我想全部拿去投資。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['留一點在身邊吧，萬一臨時要用。'] }], targetPattern: 'L9-G5' }
      ]
    },
    {
      id: 'L9-G6', lessonId: 'L9', order: 6, pattern: '一旦…（就）…',
      functionVi: '"一旦 A，(就) B" nêu một khi A xảy ra thì B sẽ theo sau (thường là hệ quả khó thay đổi). A có thể là giả định hoặc điều chắc chắn sẽ xảy ra.',
      functionEn: '"一旦 A, (就) B" means once A happens, B follows (often an irreversible consequence). A may be hypothetical or a certain future event.',
      examples: [
        { traditional: '你要留好包裝，一旦拆壞了，可能就退不了。', simplified: '你要留好包装，一旦拆坏了，可能就退不了。', english: "Keep the packaging intact; once it's torn, you may not be able to return the item.", vietnamese: 'Phải giữ nguyên bao bì, một khi xé rách rồi thì có thể không trả được.' },
        { traditional: '一旦養成了每天網購的習慣，就很難改。', simplified: '一旦养成了每天网购的习惯，就很难改。', english: "Once you form the habit of shopping online every day, it's hard to change.", vietnamese: 'Một khi đã hình thành thói quen ngày nào cũng mua online thì rất khó bỏ.' },
        { traditional: '一旦決定了，他就不會再改。', simplified: '一旦决定了，他就不会再改。', english: "Once he's decided, he won't change again.", vietnamese: 'Một khi đã quyết định, anh ấy sẽ không đổi nữa.' },
        { traditional: '這種植物一旦缺水，葉子馬上就黃了。', simplified: '这种植物一旦缺水，叶子马上就黄了。', english: 'Once this plant lacks water, its leaves turn yellow right away.', vietnamese: 'Loại cây này một khi thiếu nước là lá vàng ngay.' },
        { traditional: '一旦錯過這班車，就要再等一個小時。', simplified: '一旦错过这班车，就要再等一个小时。', english: 'Once you miss this bus, you have to wait another hour.', vietnamese: 'Một khi lỡ chuyến xe này thì phải đợi thêm một tiếng.' }
      ],
      usageNotesVi: '"一旦" trang trọng hơn "只要一…就". Nhấn mạnh bước ngoặt: sau khi A xảy ra, tình hình thay đổi và khó quay lại. Vế B thường có "就".',
      exercises: [
        { id: 'L9-G6-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個資料可以先刪掉嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['別刪，一旦刪了就找不回來了。'] }], targetPattern: 'L9-G6' },
        { id: 'L9-G6-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他好像很堅持要走這條路。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['對，他一旦下定決心，誰勸都沒用。'] }], targetPattern: 'L9-G6' },
        { id: 'L9-G6-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這種糖果小孩會不會很愛？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['會，可是一旦吃過，以後就只想吃這個。'] }], targetPattern: 'L9-G6' },
        { id: 'L9-G6-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：現在不報名，之後還來得及嗎？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['難說，一旦額滿就不能再報了。'] }], targetPattern: 'L9-G6' },
        { id: 'L9-G6-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：房子租金好像還會再漲。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['一旦捷運站蓋好，這附近的租金一定跟著漲。'] }], targetPattern: 'L9-G6' }
      ]
    },
    {
      id: 'L9-G7', lessonId: 'L9', order: 7, pattern: '說不定…',
      functionVi: '"說不定 + tình huống" nghĩa là biết đâu, có thể là (một khả năng người nói nghĩ tới, không chắc chắn nhưng có phần mong đợi hoặc lo ngại).',
      functionEn: '"說不定 + situation" means maybe, who knows, perhaps (a possibility the speaker raises, uncertain but somewhat expected or feared).',
      examples: [
        { traditional: '說不定過幾年，大家又會開始想念逛實體店的感覺。', simplified: '说不定过几年，大家又会开始想念逛实体店的感觉。', english: 'Who knows, in a few years people might start missing browsing physical stores.', vietnamese: 'Biết đâu vài năm nữa, mọi người lại bắt đầu nhớ cảm giác dạo cửa hàng thật.' },
        { traditional: '你打電話問問看，說不定還有位子。', simplified: '你打电话问问看，说不定还有位子。', english: 'Give them a call; maybe there are still seats.', vietnamese: 'Cậu gọi hỏi thử xem, biết đâu vẫn còn chỗ.' },
        { traditional: '別急著丟，說不定以後用得到。', simplified: '别急着丢，说不定以后用得到。', english: "Don't rush to throw it out; maybe you'll need it later.", vietnamese: 'Đừng vội vứt, biết đâu sau này dùng đến.' },
        { traditional: '他今天沒來，說不定是身體不舒服。', simplified: '他今天没来，说不定是身体不舒服。', english: "He didn't come today; maybe he's not feeling well.", vietnamese: 'Hôm nay anh ấy không đến, biết đâu bị mệt.' },
        { traditional: '再等一下吧，說不定他只是塞在路上。', simplified: '再等一下吧，说不定他只是塞在路上。', english: 'Wait a bit longer; maybe he\'s just stuck in traffic.', vietnamese: 'Đợi thêm chút đi, biết đâu anh ấy chỉ kẹt xe.' }
      ],
      usageNotesVi: '"說不定" thường đứng đầu câu hoặc trước động từ. Mang sắc thái "tôi đoán có khả năng", nhẹ hơn "也許／可能" một chút và thường có ý gợi ý hành động. Khác "不見得" (bác bỏ), "說不定" nêu thêm một khả năng.',
      exercises: [
        { id: 'L9-G7-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這個東西賣完了，怎麼辦？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['別的分店問問看，說不定那邊還有。'] }], targetPattern: 'L9-G7' },
        { id: 'L9-G7-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：他都不回訊息，是不是不想理我？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['別想太多，說不定他手機沒電了。'] }], targetPattern: 'L9-G7' },
        { id: 'L9-G7-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這件舊外套還留著幹嘛？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['先別丟，說不定哪天露營用得上。'] }], targetPattern: 'L9-G7' },
        { id: 'L9-G7-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：我覺得我這次一定考不好。', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['還沒公布成績，說不定比你想的好。'] }], targetPattern: 'L9-G7' },
        { id: 'L9-G7-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：這家小店生意這麼差，會不會關？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['說不定他們也在想辦法，你可以多去捧場。'] }], targetPattern: 'L9-G7' }
      ]
    }
  ],

  workbookExercises: [
    {
      id: 'L9-WB-match-collocation', lessonId: 'L9', section: 'pairs', type: 'matching',
      prompt: 'Ghép danh từ với vị ngữ thường đi cùng (collocation).',
      pairs: [
        { left: '訂單', right: '下 (đặt)' },
        { left: '包裹', right: '領 (nhận)' },
        { left: '價', right: '比 (so)' },
        { left: '評論', right: '看 (xem)' },
        { left: '個資', right: '保護 (bảo vệ)' },
        { left: '習慣', right: '節制 (tiết chế)' }
      ]
    },
    {
      id: 'L9-WB-match-response', lessonId: 'L9', section: 'pairs', type: 'matching',
      prompt: 'Nối mỗi tình huống (cột trái) với cách phản ứng phù hợp (cột phải).',
      pairs: [
        { left: '想避免衝動購物', right: '下單前先想「家裡是不是已經有了」' },
        { left: '怕買到品質差的東西', right: '多看評論，別只看照片' },
        { left: '擔心收到的商品有問題', right: '留好包裝，七天內可退' },
        { left: '想支持巷口的小店', right: '固定一個時間去逛實體店' },
        { left: '網購太多、停不下來', right: '這個月能在實體店買的就不網購' },
        { left: '網站要求填很多個人資料', right: '只填必要的，注意個資安全' }
      ]
    },

    { id: 'L9-WB-fw-1', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '上個週末___(dǎzhé)，她一下就___(xiàdān)下了五筆___(dìngdān)。', blanks: [{ index: 0, acceptedAnswers: ['打折'] }, { index: 1, acceptedAnswers: ['下單'] }, { index: 2, acceptedAnswers: ['訂單'] }] },
    { id: 'L9-WB-fw-2', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '同一個東西這家比那家便宜一百塊，她就___(rěn)不住，馬上___(wǎnggòu)。', blanks: [{ index: 0, acceptedAnswers: ['忍'] }, { index: 1, acceptedAnswers: ['網購'] }] },
    { id: 'L9-WB-fw-3', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '那件外套很便宜，可是一洗就___(biànxíng)，___(děngyú)白買。', blanks: [{ index: 0, acceptedAnswers: ['變形'] }, { index: 1, acceptedAnswers: ['等於'] }] },
    { id: 'L9-WB-fw-4', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '大部分的網站七天內都可以___(tuì)，可是要留好___(bāozhuāng)，一旦___(chāi)壞就退不了。', blanks: [{ index: 0, acceptedAnswers: ['退'] }, { index: 1, acceptedAnswers: ['包裝'] }, { index: 2, acceptedAnswers: ['拆'] }] },
    { id: 'L9-WB-fw-5', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '有些東西還是要摸得到、看得到，在___(shítǐdiàn)買比較___(ānxīn)。', blanks: [{ index: 0, acceptedAnswers: ['實體店'] }, { index: 1, acceptedAnswers: ['安心'] }] },
    { id: 'L9-WB-fw-6', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '我也想支持___(xiàngkǒu)那家小店，可是他們沒有網路___(dìnggòu)，我常常就忘了。', blanks: [{ index: 0, acceptedAnswers: ['巷口'] }, { index: 1, acceptedAnswers: ['訂購'] }] },

    {
      id: 'L9-WB-fb-1', lessonId: 'L9', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền từ thích hợp vào đoạn văn (mỗi từ chỉ dùng 1 lần).',
      wordBank: ['消費者', '效率', '衝擊', '節制', '塑膠', '倒閉'],
      textWithBlanks: '網購改變了大家的生活。對1.___來說，最大的好處是方便和2.___：在家按幾下，隔天東西就到。可是方便也帶來問題。很多人買太多，家裡堆滿用不到的東西，還製造了大量的3.___包裝和紙箱。對街上的小店來說，網購更是一個很大的4.___，有些店因為客人越來越少而5.___。專家提醒，網購不是壞事，重點是我們能不能6.___自己：買以前多想一下，這是需要，還是只是因為便宜。',
      blanks: [
        { index: 1, acceptedAnswers: ['消費者'] },
        { index: 2, acceptedAnswers: ['效率'] },
        { index: 3, acceptedAnswers: ['塑膠'] },
        { index: 4, acceptedAnswers: ['衝擊'] },
        { index: 5, acceptedAnswers: ['倒閉'] },
        { index: 6, acceptedAnswers: ['節制'] }
      ]
    },

    {
      id: 'L9-WB-read-a1', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '小美：這件外套只要兩百塊，也太便宜了吧，買！\n阿凱：等一下，你看評論。下面十個人有八個說洗一次就變形。',
      question: '阿凱的意思是：',
      options: [{ id: 'a', text: '這件外套很划算，應該買。' }, { id: 'b', text: '便宜不見得好，先看清楚評論。' }, { id: 'c', text: '他也想買一件一樣的。' }],
      correctOptionId: 'b',
      explanationVi: '"八個說洗一次就變形" — nhắc bạn rằng giá rẻ chưa chắc tốt.'
    },
    {
      id: 'L9-WB-read-a2', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '高橋：我收到的鞋子跟網頁上的顏色不一樣，可以退嗎？\n客服：可以，只要鞋子沒穿過、包裝完整，七天內都能退換。',
      question: '想退這雙鞋，要符合什麼條件？',
      options: [{ id: 'a', text: '只要在七天內就好，其他不管。' }, { id: 'b', text: '鞋子沒穿過、包裝完整，而且在七天內。' }, { id: 'c', text: '一定要先穿穿看再決定。' }],
      correctOptionId: 'b',
      explanationVi: '"只要鞋子沒穿過、包裝完整，七天內都能退換".'
    },
    {
      id: 'L9-WB-read-a3', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '玉真：你怎麼又在網站上逛？不是說這個月不網購了嗎？\n安同：我只是看看。你說得對，我先把想買的放進購物車，過三天還想要再買。',
      question: '安同打算怎麼控制自己？',
      options: [{ id: 'a', text: '完全不再上購物網站。' }, { id: 'b', text: '先把東西放購物車，過幾天還想要才買。' }, { id: 'c', text: '看到喜歡的就馬上買，免得賣光。' }],
      correctOptionId: 'b',
      explanationVi: '"先把想買的放進購物車，過三天還想要再買".'
    },

    {
      id: 'L9-WB-read-b1', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '這十幾年，網購在台灣越來越普遍。以前想買東西要出門、要挑、要提回家；現在只要手機按幾下，隔天宅配就送到門口。對消費者來說，這是效率的大進步。不過，方便也帶來新的問題。第一，很多人因此買太多。看到打折就下單，等東西到了才發現用不到。第二，網購製造了大量的紙箱和塑膠包裝，變成垃圾，對環境是一種負擔。第三，街上的實體小店受到很大的衝擊，有些因為客人變少而倒閉。專家認為，網購本身沒有錯，關鍵是消費者能不能更有意識地購物：買以前先問自己是不是真的需要，也可以固定支持幾家在地的小店。',
      question: '網購讓買東西比以前更有效率。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"對消費者來說，這是效率的大進步".'
    },
    {
      id: 'L9-WB-read-b2', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '這十幾年，網購在台灣越來越普遍。以前想買東西要出門、要挑、要提回家；現在只要手機按幾下，隔天宅配就送到門口。對消費者來說，這是效率的大進步。不過，方便也帶來新的問題。第一，很多人因此買太多。看到打折就下單，等東西到了才發現用不到。第二，網購製造了大量的紙箱和塑膠包裝，變成垃圾，對環境是一種負擔。第三，街上的實體小店受到很大的衝擊，有些因為客人變少而倒閉。專家認為，網購本身沒有錯，關鍵是消費者能不能更有意識地購物：買以前先問自己是不是真的需要，也可以固定支持幾家在地的小店。',
      question: '網購以後，大家反而比較不會買太多。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"很多人因此買太多…等東西到了才發現用不到".'
    },
    {
      id: 'L9-WB-read-b3', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '這十幾年，網購在台灣越來越普遍。以前想買東西要出門、要挑、要提回家；現在只要手機按幾下，隔天宅配就送到門口。對消費者來說，這是效率的大進步。不過，方便也帶來新的問題。第一，很多人因此買太多。看到打折就下單，等東西到了才發現用不到。第二，網購製造了大量的紙箱和塑膠包裝，變成垃圾，對環境是一種負擔。第三，街上的實體小店受到很大的衝擊，有些因為客人變少而倒閉。專家認為，網購本身沒有錯，關鍵是消費者能不能更有意識地購物：買以前先問自己是不是真的需要，也可以固定支持幾家在地的小店。',
      question: '網購的包裝對環境是一種負擔。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"變成垃圾，對環境是一種負擔".'
    },
    {
      id: 'L9-WB-read-b4', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '這十幾年，網購在台灣越來越普遍。以前想買東西要出門、要挑、要提回家；現在只要手機按幾下，隔天宅配就送到門口。對消費者來說，這是效率的大進步。不過，方便也帶來新的問題。第一，很多人因此買太多。看到打折就下單，等東西到了才發現用不到。第二，網購製造了大量的紙箱和塑膠包裝，變成垃圾，對環境是一種負擔。第三，街上的實體小店受到很大的衝擊，有些因為客人變少而倒閉。專家認為，網購本身沒有錯，關鍵是消費者能不能更有意識地購物：買以前先問自己是不是真的需要，也可以固定支持幾家在地的小店。',
      question: '實體小店因為網購生意變得更好。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"受到很大的衝擊，有些因為客人變少而倒閉".'
    },
    {
      id: 'L9-WB-read-b5', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '這十幾年，網購在台灣越來越普遍。以前想買東西要出門、要挑、要提回家；現在只要手機按幾下，隔天宅配就送到門口。對消費者來說，這是效率的大進步。不過，方便也帶來新的問題。第一，很多人因此買太多。看到打折就下單，等東西到了才發現用不到。第二，網購製造了大量的紙箱和塑膠包裝，變成垃圾，對環境是一種負擔。第三，街上的實體小店受到很大的衝擊，有些因為客人變少而倒閉。專家認為，網購本身沒有錯，關鍵是消費者能不能更有意識地購物：買以前先問自己是不是真的需要，也可以固定支持幾家在地的小店。',
      question: '專家認為網購本身就是錯的。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '"網購本身沒有錯，關鍵是消費者能不能更有意識地購物".'
    },

    {
      id: 'L9-WB-read-c1', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '【雙月慶】全館下單滿一千元免運費，指定商品最低三折！提醒您：搶購前請先確認商品的退換規則，並保留完整包裝。若賣家要求您用私訊付款或提供銀行密碼，請不要相信，那是詐騙。購物愉快，也請理性消費。',
      question: '這次活動，運費怎麼算？',
      options: [{ id: 'a', text: '全部免運費。' }, { id: 'b', text: '下單滿一千元才免運費。' }, { id: 'c', text: '一律要付運費。' }],
      correctOptionId: 'b',
      explanationVi: '"全館下單滿一千元免運費".'
    },
    {
      id: 'L9-WB-read-c2', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '【雙月慶】全館下單滿一千元免運費，指定商品最低三折！提醒您：搶購前請先確認商品的退換規則，並保留完整包裝。若賣家要求您用私訊付款或提供銀行密碼，請不要相信，那是詐騙。購物愉快，也請理性消費。',
      question: '關於防詐騙，這則訊息提醒消費者什麼？',
      options: [{ id: 'a', text: '賣家要求私訊付款或提供銀行密碼時，不要相信。' }, { id: 'b', text: '只要商品便宜，就可以放心付款。' }, { id: 'c', text: '付款前要先把包裝拆開檢查。' }],
      correctOptionId: 'a',
      explanationVi: '"若賣家要求您用私訊付款或提供銀行密碼，請不要相信，那是詐騙".'
    },

    { id: 'L9-WB-dc-1', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G1', turns: [{ speaker: 'A', text: '這件商品要怎麼退？', isBlank: false }, { speaker: 'B', text: '（只要…就…）', isBlank: true }], sampleAnswer: '只要包裝還在、七天之內，你就可以直接申請退貨。' },
    { id: 'L9-WB-dc-2', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G4', turns: [{ speaker: 'A', text: '這家評論這麼多，東西一定好吧？', isBlank: false }, { speaker: 'B', text: '（不見得）', isBlank: true }], sampleAnswer: '不見得，評論多不代表品質好，你還是要看內容。' },
    { id: 'L9-WB-dc-3', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G5', turns: [{ speaker: 'A', text: '包裝我可以直接丟了嗎？', isBlank: false }, { speaker: 'B', text: '（萬一）', isBlank: true }], sampleAnswer: '先留著，萬一要退貨的時候會用到。' },
    { id: 'L9-WB-dc-4', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G6', turns: [{ speaker: 'A', text: '我想每天上網看看有什麼特價。', isBlank: false }, { speaker: 'B', text: '（一旦…就…）', isBlank: true }], sampleAnswer: '小心，一旦養成天天逛購物網站的習慣，就很難停下來。' },
    { id: 'L9-WB-dc-5', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G7', turns: [{ speaker: 'A', text: '巷口那家小店生意好差，是不是快關了？', isBlank: false }, { speaker: 'B', text: '（說不定）', isBlank: true }], sampleAnswer: '說不定他們也在想辦法，我們可以多去買一點支持他們。' },

    {
      id: 'L9-WB-comp-1', lessonId: 'L9', section: 'composition', type: 'composition',
      topicVi: 'Hãy mô tả thói quen mua sắm online của bạn (hoặc của một người bạn quen). Có tiện lợi ở đâu, gặp vấn đề gì, và bạn làm gì để mua sắm "thông minh" hơn?',
      requiredWords: ['L9-001', 'L9-005', 'L9-006', 'L9-008', 'L9-013', 'L9-014', 'L9-021', 'L9-026'],
      requiredPatterns: ['L9-G1', 'L9-G3', 'L9-G4'],
      minLength: 200, maxLength: 250
    },
    {
      id: 'L9-WB-comp-2', lessonId: 'L9', section: 'composition', type: 'composition',
      topicVi: 'Có người cho rằng mua sắm online tiện lợi khiến người ta tiêu dùng quá mức và làm các cửa hàng nhỏ khó sống. Bạn nghĩ sao? Chúng ta nên làm gì?',
      requiredWords: ['L9-028', 'L9-036', 'L9-040', 'L9-041', 'L9-042', 'L9-043', 'L9-044', 'L9-045'],
      requiredPatterns: ['L9-G2', 'L9-G6', 'L9-G7'],
      minLength: 200, maxLength: 250
    }
  ]
}
