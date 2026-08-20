import type { Lesson } from '../../../types/lesson'

export const lesson01: Lesson = {
  id: 'L1',
  number: 1,
  titleTraditional: '開學了',
  titleSimplified: '开学了',
  titlePinyin: 'Kāixué le',
  titleVi: 'Ngày khai giảng',
  status: 'available',

  dialogues: [
    [
      {
        speaker: '安德思',
        traditional: '羅珊蒂，下課啦！怎麼樣？你們班上有我們上個學期的同學嗎？',
        simplified: '罗珊蒂，下课啦！怎么样？你们班上有我们上个学期的同学吗？',
        pinyin: 'Luó Shāndì, xiàkè la! Zěnmeyàng? Nǐmen bān shàng yǒu wǒmen shàng ge xuéqí de tóngxué ma?',
        english: 'Luo Shandi, class is out. How was it? Did your class have any of our classmates from last semester?',
        vietnamese: 'La San Đế, tan học rồi! Thế nào? Lớp cậu có bạn học kỳ trước của bọn mình không?'
      },
      {
        speaker: '羅珊蒂',
        traditional: '沒有，都沒有。你們班怎麼樣？',
        simplified: '没有，都没有。你们班怎么样？',
        pinyin: 'Méiyǒu, dōu méiyǒu. Nǐmen bān zěnmeyàng?',
        english: 'No, none at all. How is your class?',
        vietnamese: 'Không có, chẳng có ai cả. Lớp cậu thế nào?'
      },
      {
        speaker: '安德思',
        traditional: '都是新生，我一個也不認識，而且只有我一個男的。',
        simplified: '都是新生，我一个也不认识，而且只有我一个男的。',
        pinyin: 'Dōu shì xīnshēng, wǒ yí ge yě bú rènshì, érqiě zhǐyǒu wǒ yí ge nán de.',
        english: 'They’re all new students. I don’t know any of them and I’m the only guy.',
        vietnamese: 'Toàn sinh viên mới, mình chẳng quen ai, mà lại chỉ có mỗi mình mình là con trai.'
      },
      {
        speaker: '羅珊蒂',
        traditional: '老師呢？老師怎麼樣？',
        simplified: '老师呢？老师怎么样？',
        pinyin: 'Lǎoshī ne? Lǎoshī zěnmeyàng?',
        english: 'And the teacher? How was the teacher?',
        vietnamese: 'Thế còn giáo viên? Giáo viên thế nào?'
      },
      {
        speaker: '安德思',
        traditional:
          '老師很嚴。他說我們這學期除了每一課的口試、筆試以外，還要做兩次口頭報告。我覺得壓力好大。你們班呢？',
        simplified:
          '老师很严。他说我们这学期除了每一课的口试、笔试以外，还要做两次口头报告。我觉得压力好大。你们班呢？',
        pinyin:
          'Lǎoshī hěn yán. Tā shuō wǒmen zhè xuéqí chúle měi yí kè de kǒushì, bǐshì yǐwài, hái yào zuò liǎng cì kǒutóu bàogào. Wǒ juéde yālì hǎo dà. Nǐmen bān ne?',
        english:
          'The teacher is strict. He said that this semester, in addition to an oral test and a written test every chapter, we also have to give two oral reports. I feel the pressure is really great. How about your class?',
        vietnamese:
          'Giáo viên rất nghiêm khắc. Thầy nói học kỳ này ngoài thi vấn đáp, thi viết mỗi bài ra, còn phải thuyết trình miệng hai lần nữa. Mình thấy áp lực ghê quá. Lớp cậu thì sao?'
      },
      {
        speaker: '羅珊蒂',
        traditional: '老師的說明很清楚，同學也很熱情。我們今天就一起去吃中飯了。',
        simplified: '老师的说明很清楚，同学也很热情。我们今天就一起去吃中饭了。',
        pinyin: 'Lǎoshī de shuōmíng hěn qīngchǔ, tóngxué yě hěn rèqíng. Wǒmen jīntiān jiù yìqǐ qù chī zhōngfàn le.',
        english:
          'The teacher’s instructions were clear and the students in the class are warm and friendly. Today, we even had lunch together.',
        vietnamese:
          'Giáo viên giảng giải rất rõ ràng, các bạn cùng lớp cũng rất nhiệt tình. Hôm nay bọn mình còn rủ nhau đi ăn trưa cùng nữa.'
      },
      {
        speaker: '安德思',
        traditional: '聽起來不錯。還有位子嗎？有位子的話，我想去旁聽。',
        simplified: '听起来不错。还有位子吗？有位子的话，我想去旁听。',
        pinyin: 'Tīng qǐlái búcuò. Hái yǒu wèizi ma? Yǒu wèizi dehuà, wǒ xiǎng qù pángtīng.',
        english: 'Sounds good. Are there any more seats? If there are seats, I’d like to go sit in on the class.',
        vietnamese: 'Nghe hay đấy. Còn chỗ trống không? Nếu còn chỗ thì mình muốn đến dự thính.'
      },
      {
        speaker: '羅珊蒂',
        traditional: '你想換班啊？你不是打算在台灣上大學嗎？老師嚴才學得快，學得好啊。',
        simplified: '你想换班啊？你不是打算在台湾上大学吗？老师严才学得快，学得好啊。',
        pinyin:
          'Nǐ xiǎng huàn bān a? Nǐ bú shì dǎsuàn zài Táiwān shàng dàxué ma? Lǎoshī yán cái xué de kuài, xué de hǎo a.',
        english:
          'You want to change classes? Aren’t you planning to go to university in Taiwan? You can only learn quickly and well if you have a strict teacher.',
        vietnamese:
          'Cậu muốn đổi lớp à? Chẳng phải cậu định học đại học ở Đài Loan sao? Giáo viên nghiêm thì mới học nhanh, học giỏi được chứ.'
      },
      {
        speaker: '安德思',
        traditional: '可是我是獎學金學生。要是成績不到80分，拿不到獎學金，就得回國了。',
        simplified: '可是我是奖学金学生。要是成绩不到80分，拿不到奖学金，就得回国了。',
        pinyin:
          'Kěshì wǒ shì jiǎngxuéjīn xuéshēng. Yàoshi chéngjì bú dào bāshí fēn, ná bú dào jiǎngxuéjīn, jiù děi huíguó le.',
        english:
          'But I’m a scholarship student. If my grades aren’t up to 80 points, I won’t get a scholarship and I’ll have to go home.',
        vietnamese:
          'Nhưng mình là sinh viên học bổng. Nếu điểm không đạt 80, không lấy được học bổng, là phải về nước đấy.'
      },
      {
        speaker: '羅珊蒂',
        traditional: '我真羨慕你有獎學金。不像我休學來台灣，花的都是父母的錢，一定得用功念書才行。',
        simplified: '我真羡慕你有奖学金。不像我休学来台湾，花的都是父母的钱，一定得用功念书才行。',
        pinyin:
          'Wǒ zhēn xiànmù nǐ yǒu jiǎngxuéjīn. Bú xiàng wǒ xiūxué lái Táiwān, huā de dōu shì fùmǔ de qián, yídìng děi yònggōng niànshū cái xíng.',
        english:
          'I really envy you having a scholarship. Unlike me, I took a break from school to come to Taiwan and I’m spending my parents’ money. I have to study. There’s no other way.',
        vietnamese:
          'Mình thật ghen tị với cậu vì có học bổng. Không như mình, nghỉ học sang Đài Loan, tiền tiêu đều là tiền của bố mẹ, nhất định phải chăm chỉ học hành mới được.'
      },
      {
        speaker: '',
        traditional: '（何雅婷走過來）',
        simplified: '（何雅婷走过来）',
        pinyin: '(Hé Yǎtíng zǒu guòlái)',
        english: '(He Yating walks over.)',
        vietnamese: '(Hà Nhã Đình đi tới)'
      },
      {
        speaker: '安德思',
        traditional: '何雅婷，聽說妳轉系了？',
        simplified: '何雅婷，听说妳转系了？',
        pinyin: 'Hé Yǎtíng, tīngshuō nǐ zhuǎn xì le?',
        english: 'He Yating, I heard you changed majors.',
        vietnamese: 'Hà Nhã Đình, nghe nói cậu chuyển khoa rồi à?'
      },
      {
        speaker: '何雅婷',
        traditional: '是啊，這個學期我轉到國際關係系去了。',
        simplified: '是啊，这个学期我转到国际关系系去了。',
        pinyin: 'Shì a, zhège xuéqí wǒ zhuǎn dào guójì guānxì xì qù le.',
        english: 'Yes, this semester I changed to the department of international relations.',
        vietnamese: 'Đúng vậy, học kỳ này mình chuyển sang khoa Quan hệ quốc tế rồi.'
      },
      {
        speaker: '安德思',
        traditional: '妳原來念的會計系不是很熱門嗎？怎麼不念了？',
        simplified: '妳原来念的会计系不是很热门吗？怎么不念了？',
        pinyin: 'Nǐ yuánlái niàn de kuàijì xì bú shì hěn rèmén ma? Zěnme bú niàn le?',
        english: 'Isn’t the accounting department, which you originally studied in, really popular? How come you stopped studying?',
        vietnamese: 'Khoa Kế toán cậu học trước đây chẳng phải rất hot sao? Sao lại không học nữa?'
      },
      {
        speaker: '何雅婷',
        traditional: '我念不下去了。我每天熬夜念書，可是還是差一點被當。這樣下去，四年恐怕沒辦法畢業。',
        simplified: '我念不下去了。我每天熬夜念书，可是还是差一点被当。这样下去，四年恐怕没办法毕业。',
        pinyin:
          'Wǒ niàn bú xiàqù le. Wǒ měitiān áoyè niànshū, kěshì háishì chà yìdiǎn bèi dàng. Zhèyàng xiàqù, sì nián kǒngpà méi bànfǎ bìyè.',
        english:
          'I cannot go on like this any more! Every day, I stayed up late studying, but I still was almost flunked. That way, I’m afraid there’s no way I can graduate in four years.',
        vietnamese:
          'Mình không học nổi nữa. Ngày nào mình cũng thức khuya học bài, vậy mà vẫn suýt bị trượt. Cứ đà này, e rằng bốn năm cũng không tốt nghiệp nổi.'
      },
      {
        speaker: '羅珊蒂',
        traditional: '念國際關係很適合妳。妳的英文那麼流利，口才又好，以後可以當外交人員。',
        simplified: '念国际关系很适合妳。妳的英文那么流利，口才又好，以后可以当外交人员。',
        pinyin:
          'Niàn guójì guānxì hěn shìhé nǐ. Nǐ de yīngwén nàme liúlì, kǒucái yòu hǎo, yǐhòu kěyǐ dāng wàijiāo rényuán.',
        english:
          'Studying in the department of international relations suits you. You speak English fluently and you are very eloquent. In the future, you can be a diplomat.',
        vietnamese:
          'Học Quan hệ quốc tế rất hợp với cậu đấy. Tiếng Anh cậu lưu loát như vậy, khả năng ăn nói lại tốt, sau này có thể làm cán bộ ngoại giao.'
      },
      {
        speaker: '何雅婷',
        traditional:
          '謝謝妳這麼說。我真想多跟你們聊聊。可惜我得走了，我跟教授約好了討論選課的事，不能遲到。再見。',
        simplified:
          '谢谢妳这么说。我真想多跟你们聊聊。可惜我得走了，我跟教授约好了讨论选课的事，不能迟到。再见。',
        pinyin:
          'Xièxie nǐ zhème shuō. Wǒ zhēn xiǎng duō gēn nǐmen liáoliao. Kěxí wǒ děi zǒu le, wǒ gēn jiàoshòu yuē hǎo le tǎolùn xuǎnkè de shì, bù néng chídào. Zàijiàn.',
        english:
          'Thank you for saying that. I would really love to keep chatting with you. Unfortunately, I have to go. I made an appointment with the professor to discuss the issue of selecting classes and I can’t be late. See you.',
        vietnamese:
          'Cảm ơn cậu đã nói vậy. Mình thật muốn nói chuyện thêm với các cậu. Tiếc là mình phải đi rồi, mình đã hẹn giáo sư bàn về việc chọn môn học, không thể đến muộn được. Tạm biệt.'
      }
    ]
  ],

  shortReading: {
    traditional:
      '何雅婷要轉系\n\n　　何雅婷是家裡的獨生女。從小父母讓她念私立小學，下了課還去學西班牙文、書法、游泳跟網球。何雅婷也沒讓父母失望，成績一直都很好，還考上了理想的大學，念的是熱門的會計系。沒想到才念了一個學期，她就發現跟她的興趣不合，念起來非常痛苦。她想了很久，決定跟媽媽討論轉系的事。\n\n　　媽媽聽到何雅婷打算轉到國際關係系，非常生氣。她覺得何雅婷好不容易才考上這麼好的科系，怎麼可以說放棄就放棄？而且，念會計系工作機會比較多。跟興趣比起來，將來的發展當然更重要。如果她真的對別的課有興趣，利用時間去旁聽就好了。不管何雅婷怎麼說，她都反對。\n\n　　不過何雅婷告訴媽媽，她個性活潑，而且外語能力不錯，如果念國際關係，會有更好的成績，請媽媽不必擔心她的將來。這一次就請媽媽讓她自己決定吧。媽媽想了又想，捨不得女兒念得這麼痛苦，最後還是同意了。何雅婷聽了非常高興，她立刻上網填表辦轉系的手續，申請上學期的成績單，然後還請教授幫她寫推薦信。',
    simplified:
      '何雅婷要转系\n\n　　何雅婷是家里的独生女。从小父母让她念私立小学，下了课还去学西班牙文、书法、游泳跟网球。何雅婷也没让父母失望，成绩一直都很好，还考上了理想的大学，念的是热门的会计系。没想到才念了一个学期，她就发现跟她的兴趣不合，念起来非常痛苦。她想了很久，决定跟妈妈讨论转系的事。\n\n　　妈妈听到何雅婷打算转到国际关系系，非常生气。她觉得何雅婷好不容易才考上这么好的科系，怎么可以说放弃就放弃？而且，念会计系工作机会比较多。跟兴趣比起来，将来的发展当然更重要。如果她真的对别的课有兴趣，利用时间去旁听就好了。不管何雅婷怎么说，她都反对。\n\n　　不过何雅婷告诉妈妈，她个性活泼，而且外语能力不错，如果念国际关系，会有更好的成绩，请妈妈不必担心她的将来。这一次就请妈妈让她自己决定吧。妈妈想了又想，舍不得女儿念得这么痛苦，最后还是同意了。何雅婷听了非常高兴，她立刻上网填表办转系的手续，申请上学期的成绩单，然后还请教授帮她写推荐信。',
    vietnamese:
      'Hà Nhã Đình muốn chuyển khoa\n\nHà Nhã Đình là con gái một trong nhà. Từ nhỏ bố mẹ đã cho cô học trường tiểu học tư thục, tan học còn đi học thêm tiếng Tây Ban Nha, thư pháp, bơi lội và quần vợt. Hà Nhã Đình cũng không phụ lòng bố mẹ, thành tích luôn rất tốt, còn thi đỗ vào trường đại học mơ ước, học ngành Kế toán đang rất hot. Không ngờ mới học một học kỳ, cô đã phát hiện ra ngành học không hợp với sở thích của mình, học mà cảm thấy vô cùng khổ sở. Cô suy nghĩ rất lâu, quyết định bàn với mẹ về việc chuyển khoa.\n\nMẹ nghe Hà Nhã Đình định chuyển sang khoa Quan hệ quốc tế thì vô cùng tức giận. Bà cho rằng Hà Nhã Đình đã vất vả lắm mới thi đỗ vào một ngành tốt như vậy, sao có thể nói bỏ là bỏ được? Hơn nữa, học Kế toán thì cơ hội việc làm nhiều hơn. So với sở thích, tương lai phát triển sau này dĩ nhiên quan trọng hơn. Nếu con thực sự hứng thú với môn khác thì cứ tranh thủ thời gian đến dự thính là được. Dù Hà Nhã Đình nói thế nào, mẹ vẫn phản đối.\n\nNhưng Hà Nhã Đình nói với mẹ rằng, tính cách cô năng động, hơn nữa khả năng ngoại ngữ cũng không tệ, nếu học Quan hệ quốc tế thì sẽ có thành tích tốt hơn, xin mẹ đừng lo lắng về tương lai của cô. Lần này xin mẹ để cô tự quyết định. Mẹ suy đi nghĩ lại, không nỡ để con gái học hành khổ sở như vậy, cuối cùng cũng đồng ý. Hà Nhã Đình nghe vậy vô cùng vui mừng, lập tức lên mạng điền đơn làm thủ tục chuyển khoa, xin bảng điểm học kỳ trước, rồi còn nhờ giáo sư viết thư giới thiệu giúp mình.'
  },

  phrases: [
    {
      phraseTraditional: '差一點',
      phraseSimplified: '差一点',
      pinyin: 'chà yìdiǎn',
      meaningVi: 'suýt (nữa thì), gần như'
    },
    {
      phraseTraditional: '這樣下去',
      phraseSimplified: '这样下去',
      pinyin: 'zhèyàng xiàqù',
      meaningVi: 'cứ đà này, cứ tiếp tục như vậy'
    },
    {
      phraseTraditional: '沒辦法',
      phraseSimplified: '没办法',
      pinyin: 'méi bànfǎ',
      meaningVi: 'không còn cách nào khác, hết cách, bó tay'
    },
    {
      phraseTraditional: '考上',
      phraseSimplified: '考上',
      pinyin: 'kǎoshàng',
      meaningVi: 'thi đỗ (vào trường/ngành nào đó)'
    },
    {
      phraseTraditional: '推薦信',
      phraseSimplified: '推荐信',
      pinyin: 'tuījiàn xìn',
      meaningVi: 'thư giới thiệu, thư tiến cử'
    }
  ],

  vocab: [
    {
      id: 'L1-001',
      lessonId: 'L1',
      order: 4,
      group: 'vocab1',
      traditional: '開學',
      simplified: '开学',
      pinyin: 'kāixué',
      wordClass: ['Vp'],
      meaningVi: 'khai giảng, bắt đầu học kỳ mới',
      meaningEn: '(school) to start',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '九月開學以後，校園裡到處都是新生。',
          simplified: '九月开学以后，校园里到处都是新生。',
          vietnamese: 'Sau khi khai giảng vào tháng Chín, khắp khuôn viên trường đều là tân sinh viên.'
        }
      ]
    },
    {
      id: 'L1-002',
      lessonId: 'L1',
      order: 5,
      group: 'vocab1',
      traditional: '班',
      simplified: '班',
      pinyin: 'bān',
      wordClass: ['N'],
      meaningVi: 'lớp (chỉ nhóm học sinh, không phải phòng học hay môn học)',
      meaningEn: 'class, i.e., the students (not the classroom or the course)',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '你們班怎麼樣？',
          simplified: '你们班怎么样？',
          vietnamese: 'Lớp các cậu thế nào?'
        }
      ]
    },
    {
      id: 'L1-003',
      lessonId: 'L1',
      order: 6,
      group: 'vocab1',
      traditional: '新生',
      simplified: '新生',
      pinyin: 'xīnshēng',
      wordClass: ['N'],
      meaningVi: 'tân sinh viên, học sinh mới',
      meaningEn: 'new student',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '都是新生，我一個也不認識。',
          simplified: '都是新生，我一个也不认识。',
          vietnamese: 'Toàn là sinh viên mới, mình chẳng quen ai cả.'
        }
      ]
    },
    {
      id: 'L1-004',
      lessonId: 'L1',
      order: 7,
      group: 'vocab1',
      traditional: '嚴',
      simplified: '严',
      pinyin: 'yán',
      wordClass: ['Vs'],
      meaningVi: 'nghiêm khắc',
      meaningEn: 'strict, stern',
      examples: [
        {
          traditional: '老師很嚴。',
          simplified: '老师很严。',
          vietnamese: 'Giáo viên rất nghiêm khắc.'
        }
      ]
    },
    {
      id: 'L1-005',
      lessonId: 'L1',
      order: 8,
      group: 'vocab1',
      traditional: '口試',
      simplified: '口试',
      pinyin: 'kǒushì',
      wordClass: ['N'],
      meaningVi: 'thi vấn đáp',
      meaningEn: 'oral test',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '這學期除了每一課的口試、筆試以外，還要做兩次口頭報告。',
          simplified: '这学期除了每一课的口试、笔试以外，还要做两次口头报告。',
          vietnamese: 'Học kỳ này, ngoài thi vấn đáp và thi viết mỗi bài, còn phải thuyết trình miệng hai lần.'
        }
      ]
    },
    {
      id: 'L1-006',
      lessonId: 'L1',
      order: 9,
      group: 'vocab1',
      traditional: '筆試',
      simplified: '笔试',
      pinyin: 'bǐshì',
      wordClass: ['N'],
      meaningVi: 'thi viết',
      meaningEn: 'written test',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '明天的筆試考的是這一課的生詞和語法。',
          simplified: '明天的笔试考的是这一课的生词和语法。',
          vietnamese: 'Bài thi viết ngày mai kiểm tra từ vựng và ngữ pháp của bài này.'
        }
      ]
    },
    {
      id: 'L1-007',
      lessonId: 'L1',
      order: 10,
      group: 'vocab1',
      traditional: '以外',
      simplified: '以外',
      pinyin: 'yǐwài',
      wordClass: ['N'],
      meaningVi: 'ngoài, ngoài...ra',
      meaningEn: 'except, other than',
      notes: 'Thường dùng trong mẫu 除了…以外，還… (ngoài…ra, còn…).',
      examples: [
        {
          traditional: '這學期除了每一課的口試、筆試以外，還要做兩次口頭報告。',
          simplified: '这学期除了每一课的口试、笔试以外，还要做两次口头报告。',
          vietnamese: 'Học kỳ này, ngoài thi vấn đáp và thi viết mỗi bài, còn phải thuyết trình miệng hai lần.'
        }
      ]
    },
    {
      id: 'L1-008',
      lessonId: 'L1',
      order: 11,
      group: 'vocab1',
      traditional: '口頭',
      simplified: '口头',
      pinyin: 'kǒutóu',
      wordClass: ['Vs-attr'],
      meaningVi: '(bằng) miệng, khẩu đầu',
      meaningEn: 'verbal, oral',
      examples: [
        {
          traditional: '還要做兩次口頭報告。',
          simplified: '还要做两次口头报告。',
          vietnamese: 'Còn phải thuyết trình miệng hai lần nữa.'
        }
      ]
    },
    {
      id: 'L1-009',
      lessonId: 'L1',
      order: 12,
      group: 'vocab1',
      traditional: '報告',
      simplified: '报告',
      pinyin: 'bàogào',
      wordClass: ['N'],
      meaningVi: 'bài báo cáo, bài thuyết trình',
      meaningEn: 'report',
      examples: [
        {
          traditional: '我覺得口頭報告的壓力好大。',
          simplified: '我觉得口头报告的压力好大。',
          vietnamese: 'Tôi thấy áp lực thuyết trình miệng thật lớn.'
        }
      ]
    },
    {
      id: 'L1-010',
      lessonId: 'L1',
      order: 13,
      group: 'vocab1',
      traditional: '壓力',
      simplified: '压力',
      pinyin: 'yālì',
      wordClass: ['N'],
      meaningVi: 'áp lực',
      meaningEn: 'pressure, stress',
      examples: [
        {
          traditional: '我覺得壓力好大。',
          simplified: '我觉得压力好大。',
          vietnamese: 'Mình thấy áp lực ghê quá.'
        }
      ]
    },
    {
      id: 'L1-011',
      lessonId: 'L1',
      order: 14,
      group: 'vocab1',
      traditional: '說明',
      simplified: '说明',
      pinyin: 'shuōmíng',
      wordClass: ['N'],
      meaningVi: 'lời giải thích, sự thuyết minh',
      meaningEn: 'instructions, explanation',
      examples: [
        {
          traditional: '老師的說明很清楚。',
          simplified: '老师的说明很清楚。',
          vietnamese: 'Giáo viên giảng giải rất rõ ràng.'
        }
      ]
    },
    {
      id: 'L1-012',
      lessonId: 'L1',
      order: 15,
      group: 'vocab1',
      traditional: '清楚',
      simplified: '清楚',
      pinyin: 'qīngchǔ',
      wordClass: ['Vs'],
      meaningVi: 'rõ ràng',
      meaningEn: 'clear(ly)',
      examples: [
        {
          traditional: '這個問題他解釋得很清楚。',
          simplified: '这个问题他解释得很清楚。',
          vietnamese: 'Vấn đề này anh ấy giải thích rất rõ ràng.'
        }
      ]
    },
    {
      id: 'L1-013',
      lessonId: 'L1',
      order: 16,
      group: 'vocab1',
      traditional: '位子',
      simplified: '位子',
      pinyin: 'wèizi',
      wordClass: ['N'],
      meaningVi: 'chỗ ngồi, chỗ trống',
      meaningEn: 'seat, place',
      examples: [
        {
          traditional: '還有位子嗎？',
          simplified: '还有位子吗？',
          vietnamese: 'Còn chỗ trống không?'
        }
      ]
    },
    {
      id: 'L1-014',
      lessonId: 'L1',
      order: 17,
      group: 'vocab1',
      traditional: '旁聽',
      simplified: '旁听',
      pinyin: 'pángtīng',
      wordClass: ['V'],
      meaningVi: 'dự thính (nghe giảng mà không đăng ký chính thức)',
      meaningEn: 'to audit, to sit in (on a class)',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '有位子的話，我想去旁聽。',
          simplified: '有位子的话，我想去旁听。',
          vietnamese: 'Nếu còn chỗ thì mình muốn đến dự thính.'
        }
      ]
    },
    {
      id: 'L1-015',
      lessonId: 'L1',
      order: 18,
      group: 'vocab1',
      traditional: '分',
      simplified: '分',
      pinyin: 'fēn',
      wordClass: ['N'],
      meaningVi: 'điểm (số)',
      meaningEn: 'points',
      examples: [
        {
          traditional: '要是成績不到80分，拿不到獎學金。',
          simplified: '要是成绩不到80分，拿不到奖学金。',
          vietnamese: 'Nếu điểm không đạt 80, sẽ không lấy được học bổng.'
        }
      ]
    },
    {
      id: 'L1-016',
      lessonId: 'L1',
      order: 19,
      group: 'vocab1',
      traditional: '羨慕',
      simplified: '羡慕',
      pinyin: 'xiànmù',
      wordClass: ['Vst'],
      meaningVi: 'ghen tị, ngưỡng mộ',
      meaningEn: 'to envy',
      examples: [
        {
          traditional: '我真羨慕你有獎學金。',
          simplified: '我真羡慕你有奖学金。',
          vietnamese: 'Mình thật ghen tị vì cậu có học bổng.'
        }
      ]
    },
    {
      id: 'L1-017',
      lessonId: 'L1',
      order: 20,
      group: 'vocab1',
      traditional: '休學',
      simplified: '休学',
      pinyin: 'xiūxué',
      wordClass: ['Vp-sep'],
      meaningVi: 'nghỉ học (tạm thời, bảo lưu kết quả)',
      meaningEn: 'to take a break from school',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '不像我休學來台灣。',
          simplified: '不像我休学来台湾。',
          vietnamese: 'Không như mình, nghỉ học sang Đài Loan.'
        }
      ]
    },
    {
      id: 'L1-018',
      lessonId: 'L1',
      order: 21,
      group: 'vocab1',
      traditional: '用功',
      simplified: '用功',
      pinyin: 'yònggōng',
      wordClass: ['Vs'],
      meaningVi: 'chăm chỉ, cần cù (trong học tập)',
      meaningEn: 'diligent, conscientious (as a student)',
      examples: [
        {
          traditional: '一定得用功念書才行。',
          simplified: '一定得用功念书才行。',
          vietnamese: 'Nhất định phải chăm chỉ học hành mới được.'
        }
      ]
    },
    {
      id: 'L1-019',
      lessonId: 'L1',
      order: 22,
      group: 'vocab1',
      traditional: '行',
      simplified: '行',
      pinyin: 'xíng',
      wordClass: ['Vs'],
      meaningVi: 'được, ổn',
      meaningEn: 'to be all right',
      examples: [
        {
          traditional: '一定得用功念書才行。',
          simplified: '一定得用功念书才行。',
          vietnamese: 'Nhất định phải chăm chỉ học hành mới được.'
        }
      ]
    },
    {
      id: 'L1-020',
      lessonId: 'L1',
      order: 23,
      group: 'vocab1',
      traditional: '轉',
      simplified: '转',
      pinyin: 'zhuǎn',
      wordClass: ['V'],
      meaningVi: 'chuyển (ngành, khoa...)',
      meaningEn: 'to transfer (to a different major)',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '聽說妳轉系了？',
          simplified: '听说妳转系了？',
          vietnamese: 'Nghe nói cậu chuyển khoa rồi à?'
        }
      ]
    },
    {
      id: 'L1-021',
      lessonId: 'L1',
      order: 24,
      group: 'vocab1',
      traditional: '原來',
      simplified: '原来',
      pinyin: 'yuánlái',
      wordClass: ['Adv'],
      meaningVi: 'vốn dĩ, ban đầu, trước đây',
      meaningEn: 'originally',
      examples: [
        {
          traditional: '妳原來念的會計系不是很熱門嗎？',
          simplified: '妳原来念的会计系不是很热门吗？',
          vietnamese: 'Khoa Kế toán cậu học trước đây chẳng phải rất hot sao?'
        }
      ]
    },
    {
      id: 'L1-022',
      lessonId: 'L1',
      order: 25,
      group: 'vocab1',
      traditional: '會計',
      simplified: '会计',
      pinyin: 'kuàijì',
      wordClass: ['N'],
      meaningVi: 'kế toán',
      meaningEn: 'accounting, an accountant',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '妳原來念的會計系不是很熱門嗎？',
          simplified: '妳原来念的会计系不是很热门吗？',
          vietnamese: 'Khoa Kế toán cậu học trước đây chẳng phải rất hot sao?'
        }
      ]
    },
    {
      id: 'L1-023',
      lessonId: 'L1',
      order: 26,
      group: 'vocab1',
      traditional: '熱門',
      simplified: '热门',
      pinyin: 'rèmén',
      wordClass: ['Vs'],
      meaningVi: 'hot, được ưa chuộng',
      meaningEn: 'highly popular',
      examples: [
        {
          traditional: '妳原來念的會計系不是很熱門嗎？',
          simplified: '妳原来念的会计系不是很热门吗？',
          vietnamese: 'Khoa Kế toán cậu học trước đây chẳng phải rất hot sao?'
        }
      ]
    },
    {
      id: 'L1-024',
      lessonId: 'L1',
      order: 27,
      group: 'vocab1',
      traditional: '熬夜',
      simplified: '熬夜',
      pinyin: 'áoyè',
      wordClass: ['V-sep'],
      meaningVi: 'thức khuya',
      meaningEn: 'to stay up all night, to burn the midnight oil',
      examples: [
        {
          traditional: '我每天熬夜念書。',
          simplified: '我每天熬夜念书。',
          vietnamese: 'Ngày nào mình cũng thức khuya học bài.'
        }
      ]
    },
    {
      id: 'L1-025',
      lessonId: 'L1',
      order: 28,
      group: 'vocab1',
      traditional: '當',
      simplified: '当',
      pinyin: 'dàng',
      wordClass: ['V'],
      meaningVi: 'bị đánh rớt, bị trượt (môn học)',
      meaningEn: 'to fail a course',
      notes:
        'Đọc là "dàng" khi nghĩa là "trượt môn" (bị động: 被當). Chú ý phân biệt với 當 đọc "dāng" nghĩa là "làm, trở thành" (vd 當外交人員 - làm cán bộ ngoại giao).',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '可是還是差一點被當。',
          simplified: '可是还是差一点被当。',
          vietnamese: 'Nhưng vẫn suýt bị trượt môn.'
        }
      ]
    },
    {
      id: 'L1-026',
      lessonId: 'L1',
      order: 29,
      group: 'vocab1',
      traditional: '恐怕',
      simplified: '恐怕',
      pinyin: 'kǒngpà',
      wordClass: ['Adv'],
      meaningVi: 'e rằng, sợ rằng (dự đoán một điều không mong muốn)',
      meaningEn: '(I am afraid that,) probably',
      examples: [
        {
          traditional: '這樣下去，四年恐怕沒辦法畢業。',
          simplified: '这样下去，四年恐怕没办法毕业。',
          vietnamese: 'Cứ đà này, e rằng bốn năm cũng không tốt nghiệp nổi.'
        }
      ]
    },
    {
      id: 'L1-027',
      lessonId: 'L1',
      order: 30,
      group: 'vocab1',
      traditional: '口才',
      simplified: '口才',
      pinyin: 'kǒucái',
      wordClass: ['N'],
      meaningVi: 'khả năng ăn nói, tài ăn nói',
      meaningEn: 'speaking skills',
      examples: [
        {
          traditional: '口才又好，以後可以當外交人員。',
          simplified: '口才又好，以后可以当外交人员。',
          vietnamese: 'Khả năng ăn nói lại tốt, sau này có thể làm cán bộ ngoại giao.'
        }
      ]
    },
    {
      id: 'L1-028',
      lessonId: 'L1',
      order: 31,
      group: 'vocab1',
      traditional: '事',
      simplified: '事',
      pinyin: 'shì',
      wordClass: ['N'],
      meaningVi: 'việc, chuyện',
      meaningEn: 'issue, matter, event, thing',
      examples: [
        {
          traditional: '我跟教授約好了討論選課的事。',
          simplified: '我跟教授约好了讨论选课的事。',
          vietnamese: 'Mình đã hẹn giáo sư bàn về việc chọn môn học.'
        }
      ]
    },
    {
      id: 'L1-029',
      lessonId: 'L1',
      order: 32,
      group: 'vocab1',
      traditional: '遲到',
      simplified: '迟到',
      pinyin: 'chídào',
      wordClass: ['Vp'],
      meaningVi: 'đến muộn, trễ giờ',
      meaningEn: 'to be late (in arrival)',
      examples: [
        {
          traditional: '不能遲到。',
          simplified: '不能迟到。',
          vietnamese: 'Không thể đến muộn được.'
        }
      ]
    },

    {
      id: 'L1-030',
      lessonId: 'L1',
      order: 1,
      group: 'vocab2',
      traditional: '獨生女',
      simplified: '独生女',
      pinyin: 'dúshēngnǚ',
      wordClass: ['N'],
      meaningVi: 'con gái một, con gái độc nhất trong nhà',
      meaningEn: 'only child (girl)',
      tags: ['gia-dinh'],
      examples: [
        {
          traditional: '何雅婷是家裡的獨生女。',
          simplified: '何雅婷是家里的独生女。',
          vietnamese: 'Hà Nhã Đình là con gái một trong nhà.'
        }
      ]
    },
    {
      id: 'L1-031',
      lessonId: 'L1',
      order: 2,
      group: 'vocab2',
      traditional: '私立',
      simplified: '私立',
      pinyin: 'sīlì',
      wordClass: ['Vs-attr'],
      meaningVi: '(thuộc) tư thục, dân lập',
      meaningEn: 'private',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '從小父母讓她念私立小學。',
          simplified: '从小父母让她念私立小学。',
          vietnamese: 'Từ nhỏ bố mẹ đã cho cô học trường tiểu học tư thục.'
        }
      ]
    },
    {
      id: 'L1-032',
      lessonId: 'L1',
      order: 3,
      group: 'vocab2',
      traditional: '理想',
      simplified: '理想',
      pinyin: 'lǐxiǎng',
      wordClass: ['Vs'],
      meaningVi: 'lý tưởng, mơ ước',
      meaningEn: 'ideal, aspired',
      examples: [
        {
          traditional: '她考上了理想的大學。',
          simplified: '她考上了理想的大学。',
          vietnamese: 'Cô đã thi đỗ vào trường đại học mơ ước.'
        }
      ]
    },
    {
      id: 'L1-033',
      lessonId: 'L1',
      order: 4,
      group: 'vocab2',
      traditional: '合',
      simplified: '合',
      pinyin: 'hé',
      wordClass: ['Vst'],
      meaningVi: 'hợp, phù hợp',
      meaningEn: 'to tally with, to match',
      examples: [
        {
          traditional: '她發現跟她的興趣不合。',
          simplified: '她发现跟她的兴趣不合。',
          vietnamese: 'Cô phát hiện ra nó không hợp với sở thích của mình.'
        }
      ]
    },
    {
      id: 'L1-034',
      lessonId: 'L1',
      order: 5,
      group: 'vocab2',
      traditional: '痛苦',
      simplified: '痛苦',
      pinyin: 'tòngkǔ',
      wordClass: ['Vs'],
      meaningVi: 'đau khổ, khổ sở',
      meaningEn: 'painful',
      examples: [
        {
          traditional: '念起來非常痛苦。',
          simplified: '念起来非常痛苦。',
          vietnamese: 'Học mà cảm thấy vô cùng khổ sở.'
        }
      ]
    },
    {
      id: 'L1-035',
      lessonId: 'L1',
      order: 6,
      group: 'vocab2',
      traditional: '科系',
      simplified: '科系',
      pinyin: 'kēxì',
      wordClass: ['N'],
      meaningVi: 'khoa, ngành học',
      meaningEn: '(academic) department',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '何雅婷好不容易才考上這麼好的科系。',
          simplified: '何雅婷好不容易才考上这么好的科系。',
          vietnamese: 'Hà Nhã Đình vất vả lắm mới thi đỗ vào một ngành tốt như vậy.'
        }
      ]
    },
    {
      id: 'L1-036',
      lessonId: 'L1',
      order: 7,
      group: 'vocab2',
      traditional: '放棄',
      simplified: '放弃',
      pinyin: 'fàngqì',
      wordClass: ['V'],
      meaningVi: 'từ bỏ, buông bỏ',
      meaningEn: 'to give up',
      examples: [
        {
          traditional: '怎麼可以說放棄就放棄？',
          simplified: '怎么可以说放弃就放弃？',
          vietnamese: 'Sao có thể nói bỏ là bỏ được?'
        }
      ]
    },
    {
      id: 'L1-037',
      lessonId: 'L1',
      order: 8,
      group: 'vocab2',
      traditional: '不管',
      simplified: '不管',
      pinyin: 'bùguǎn',
      wordClass: ['Conj'],
      meaningVi: 'bất kể, dù cho',
      meaningEn: 'no matter, regardless of',
      notes: 'Xem thêm ngữ pháp VII: 不管…都… trong bài này.',
      examples: [
        {
          traditional: '不管何雅婷怎麼說，她都反對。',
          simplified: '不管何雅婷怎么说，她都反对。',
          vietnamese: 'Dù Hà Nhã Đình nói thế nào, mẹ vẫn phản đối.'
        }
      ]
    },
    {
      id: 'L1-038',
      lessonId: 'L1',
      order: 9,
      group: 'vocab2',
      traditional: '反對',
      simplified: '反对',
      pinyin: 'fǎnduì',
      wordClass: ['Vst'],
      meaningVi: 'phản đối',
      meaningEn: 'to oppose, to be against',
      examples: [
        {
          traditional: '不管何雅婷怎麼說，她都反對。',
          simplified: '不管何雅婷怎么说，她都反对。',
          vietnamese: 'Dù Hà Nhã Đình nói thế nào, mẹ vẫn phản đối.'
        }
      ]
    },
    {
      id: 'L1-039',
      lessonId: 'L1',
      order: 10,
      group: 'vocab2',
      traditional: '個性',
      simplified: '个性',
      pinyin: 'gèxìng',
      wordClass: ['N'],
      meaningVi: 'cá tính, tính cách',
      meaningEn: 'personality',
      examples: [
        {
          traditional: '她個性活潑。',
          simplified: '她个性活泼。',
          vietnamese: 'Tính cách cô ấy năng động.'
        }
      ]
    },
    {
      id: 'L1-040',
      lessonId: 'L1',
      order: 11,
      group: 'vocab2',
      traditional: '活潑',
      simplified: '活泼',
      pinyin: 'huópō',
      wordClass: ['Vs'],
      meaningVi: 'năng động, hoạt bát',
      meaningEn: 'lively, bubbly, vivacious',
      examples: [
        {
          traditional: '她個性活潑。',
          simplified: '她个性活泼。',
          vietnamese: 'Tính cách cô ấy năng động.'
        }
      ]
    },
    {
      id: 'L1-041',
      lessonId: 'L1',
      order: 12,
      group: 'vocab2',
      traditional: '外語',
      simplified: '外语',
      pinyin: 'wàiyǔ',
      wordClass: ['N'],
      meaningVi: 'ngoại ngữ',
      meaningEn: 'foreign language',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '外語能力不錯。',
          simplified: '外语能力不错。',
          vietnamese: 'Khả năng ngoại ngữ khá tốt.'
        }
      ]
    },
    {
      id: 'L1-042',
      lessonId: 'L1',
      order: 13,
      group: 'vocab2',
      traditional: '擔心',
      simplified: '担心',
      pinyin: 'dānxīn',
      wordClass: ['Vst'],
      meaningVi: 'lo lắng',
      meaningEn: 'to worry about, to fret over with',
      examples: [
        {
          traditional: '請媽媽不必擔心她的將來。',
          simplified: '请妈妈不必担心她的将来。',
          vietnamese: 'Xin mẹ đừng lo lắng về tương lai của cô.'
        }
      ]
    },
    {
      id: 'L1-043',
      lessonId: 'L1',
      order: 14,
      group: 'vocab2',
      traditional: '填',
      simplified: '填',
      pinyin: 'tián',
      wordClass: ['V'],
      meaningVi: 'điền (vào biểu mẫu)',
      meaningEn: 'to fill out (a form)',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '她立刻上網填表。',
          simplified: '她立刻上网填表。',
          vietnamese: 'Cô lập tức lên mạng điền đơn.'
        }
      ]
    },
    {
      id: 'L1-044',
      lessonId: 'L1',
      order: 15,
      group: 'vocab2',
      traditional: '表',
      simplified: '表',
      pinyin: 'biǎo',
      wordClass: ['N'],
      meaningVi: 'biểu mẫu, tờ khai',
      meaningEn: 'a form',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '她立刻上網填表。',
          simplified: '她立刻上网填表。',
          vietnamese: 'Cô lập tức lên mạng điền đơn.'
        }
      ]
    },
    {
      id: 'L1-045',
      lessonId: 'L1',
      order: 16,
      group: 'vocab2',
      traditional: '辦',
      simplified: '办',
      pinyin: 'bàn',
      wordClass: ['V'],
      meaningVi: 'làm (thủ tục), xử lý',
      meaningEn: 'to deal with',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '她立刻上網填表辦轉系的手續。',
          simplified: '她立刻上网填表办转系的手续。',
          vietnamese: 'Cô lập tức lên mạng điền đơn làm thủ tục chuyển khoa.'
        }
      ]
    },
    {
      id: 'L1-046',
      lessonId: 'L1',
      order: 17,
      group: 'vocab2',
      traditional: '手續',
      simplified: '手续',
      pinyin: 'shǒuxù',
      wordClass: ['N'],
      meaningVi: 'thủ tục',
      meaningEn: 'procedures',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '她立刻上網填表辦轉系的手續。',
          simplified: '她立刻上网填表办转系的手续。',
          vietnamese: 'Cô lập tức lên mạng điền đơn làm thủ tục chuyển khoa.'
        }
      ]
    },
    {
      id: 'L1-047',
      lessonId: 'L1',
      order: 18,
      group: 'vocab2',
      traditional: '申請',
      simplified: '申请',
      pinyin: 'shēnqǐng',
      wordClass: ['V'],
      meaningVi: 'đăng ký, xin (cấp)',
      meaningEn: 'to apply for',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '申請上學期的成績單。',
          simplified: '申请上学期的成绩单。',
          vietnamese: 'Xin bảng điểm học kỳ trước.'
        }
      ]
    },
    {
      id: 'L1-048',
      lessonId: 'L1',
      order: 19,
      group: 'vocab2',
      traditional: '成績單',
      simplified: '成绩单',
      pinyin: 'chéngjī dān',
      wordClass: ['N'],
      meaningVi: 'bảng điểm',
      meaningEn: 'report card, transcripts',
      tags: ['giao-duc'],
      examples: [
        {
          traditional: '申請上學期的成績單。',
          simplified: '申请上学期的成绩单。',
          vietnamese: 'Xin bảng điểm học kỳ trước.'
        }
      ]
    }
  ],

  grammar: [
    {
      id: 'L1-G1',
      lessonId: 'L1',
      order: 1,
      pattern: '…的話',
      functionVi:
        'Mẫu câu "…的話" đặt ở cuối phần điều kiện ("nếu…"), còn phần kết quả nằm ở mệnh đề phía sau.',
      functionEn: "The pattern …的話, appears at the very end of the 'if' part, while the 'consequence' part appears in the second clause.",
      examples: [
        {
          traditional: '酸辣湯太辣的話，你就別喝了。',
          simplified: '酸辣汤太辣的话，你就别喝了。',
          english: "If the hot and sour soup is too spicy, don't drink it.",
          vietnamese: 'Nếu canh chua cay quá cay thì đừng uống nữa.'
        },
        {
          traditional: '你想轉系的話，最好先跟父母討論。',
          simplified: '你想转系的话，最好先跟父母讨论。',
          english: 'If you want to change majors, it would be best to discuss it with your parents first.',
          vietnamese: 'Nếu cậu muốn chuyển khoa thì tốt nhất nên bàn với bố mẹ trước.'
        },
        {
          traditional: '學生要參加社團的話，得先上網填申請表。',
          simplified: '学生要参加社团的话，得先上网填申请表。',
          english: 'If students want to take part in school clubs, they have to first go online and fill out a form.',
          vietnamese: 'Nếu sinh viên muốn tham gia câu lạc bộ thì phải lên mạng điền đơn đăng ký trước.'
        },
        {
          traditional: '我覺得外語能力不錯的話，念國際關係系比較適合。',
          simplified: '我觉得外语能力不错的话，念国际关系系比较适合。',
          english: 'I believe that if one’s foreign language skills are pretty good, it would be more suitable to study international relations.',
          vietnamese: 'Tôi thấy nếu khả năng ngoại ngữ tốt thì học ngành Quan hệ quốc tế sẽ phù hợp hơn.'
        },
        {
          traditional: '美美說拿到獎學金的話，就請我們看電影。',
          simplified: '美美说拿到奖学金的话，就请我们看电影。',
          english: 'Meimei said that if she gets a scholarship, she will treat us to a movie.',
          vietnamese: 'Mỹ Mỹ nói nếu nhận được học bổng thì sẽ mời chúng tôi xem phim.'
        }
      ],
      usageNotesVi:
        'Có thể dùng cùng với liên từ 如果 hoặc 要是, khi đó 的話 có thể lược bỏ. …的話 mang tính khẩu ngữ hơn, còn 如果/要是…(的話) trang trọng hơn.\n\nVí dụ: 如果你覺得這裡太吵的話，我們可以換一個地方繼續聊。(Nếu bạn thấy ở đây ồn quá thì chúng ta có thể đổi chỗ khác nói chuyện tiếp.)\n要是爸爸給我的生活費不夠的話，我就得去打工。(Nếu tiền sinh hoạt phí bố cho không đủ thì tôi phải đi làm thêm.)',
      exercises: [
        {
          id: 'L1-G1-EX1',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: 'A：你明天要不要跟我們一起去參觀故宮博物院？',
          textWithBlanks: 'B：___。（用「如果／要是…的話」回答）',
          blanks: [{ index: 0, acceptedAnswers: ['如果明天有空的話，我就跟你們一起去。'] }],
          targetPattern: 'L1-G1'
        },
        {
          id: 'L1-G1-EX2',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: 'A：大學畢業以後，你考不考慮去義大利念研究所？',
          textWithBlanks: 'B：___',
          blanks: [{ index: 0, acceptedAnswers: ['要是有機會的話，我會考慮去義大利念研究所。'] }],
          targetPattern: 'L1-G1'
        },
        {
          id: 'L1-G1-EX3',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: 'A：你打算去旁聽王教授的課嗎？',
          textWithBlanks: 'B：___',
          blanks: [{ index: 0, acceptedAnswers: ['有位子的話，我就去旁聽。'] }],
          targetPattern: 'L1-G1'
        },
        {
          id: 'L1-G1-EX4',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: 'A：下個學期我打算選林教授的課，你呢？',
          textWithBlanks: 'B：___',
          blanks: [{ index: 0, acceptedAnswers: ['你選的話，我也選。'] }],
          targetPattern: 'L1-G1'
        },
        {
          id: 'L1-G1-EX5',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: 'A：她說的那個公寓就在捷運站旁邊，你租不租？',
          textWithBlanks: 'B：___',
          blanks: [{ index: 0, acceptedAnswers: ['房租不太貴的話，我就租。'] }],
          targetPattern: 'L1-G1'
        }
      ]
    },
    {
      id: 'L1-G2',
      lessonId: 'L1',
      order: 2,
      pattern: '不到',
      functionVi: '不到 thường đi kèm một con số, mang nghĩa "chưa đến, không tới…".',
      functionEn: "不到 is often followed by a number, meaning 'less than…'.",
      examples: [
        {
          traditional: '博物館的人說不到6歲的小孩子，不可以進去參觀。',
          simplified: '博物馆的人说不到6岁的小孩子，不可以进去参观。',
          english: "The museum staff say that children less than 6-years old cannot go inside (and visit).",
          vietnamese: 'Nhân viên bảo tàng nói trẻ em chưa đến 6 tuổi không được vào tham quan.'
        },
        {
          traditional: '這支手機不到五千塊，真便宜。',
          simplified: '这支手机不到五千块，真便宜。',
          english: "This cell phone is less than NT$5,000. That's really cheap.",
          vietnamese: 'Chiếc điện thoại này chưa đến năm nghìn đồng, thật rẻ.'
        },
        {
          traditional: '老師說成績不到85分，不可以申請獎學金。',
          simplified: '老师说成绩不到85分，不可以申请奖学金。',
          english: 'The teacher said that students with grades of less than 85 cannot apply for a scholarship.',
          vietnamese: 'Giáo viên nói điểm chưa đến 85 thì không được xin học bổng.'
        },
        {
          traditional: '安德思來台灣還不到半年，就認識了不少台灣朋友。',
          simplified: '安德思来台湾还不到半年，就认识了不少台湾朋友。',
          english: 'An Desi has been in Taiwan for less than half a year and he already has lots of Taiwanese friends.',
          vietnamese: 'An Đức Tư đến Đài Loan chưa đầy nửa năm mà đã quen được không ít bạn người Đài Loan.'
        },
        {
          traditional: '昨天的作業那麼多，可是羅珊蒂不到一個小時就寫完了。',
          simplified: '昨天的作业那么多，可是罗珊蒂不到一个小时就写完了。',
          english: "There was all that homework yesterday, but Luo Shandi finished it in less than an hour.",
          vietnamese: 'Bài tập hôm qua nhiều như vậy mà La San Đế chưa đến một tiếng đã làm xong.'
        }
      ],
      usageNotesVi: 'Sau 不到 thường là một con số cụ thể (tuổi, tiền, điểm số, thời gian…).',
      exercises: [
        {
          id: 'L1-G2-EX1',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '這裡離捷運站不到____，走路去只要五分鐘。',
          blanks: [{ index: 0, acceptedAnswers: ['五百公尺', '五百米'] }],
          targetPattern: 'L1-G2'
        },
        {
          id: 'L1-G2-EX2',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '她的小孩不到____，還沒念小學。',
          blanks: [{ index: 0, acceptedAnswers: ['六歲', '六岁'] }],
          targetPattern: 'L1-G2'
        },
        {
          id: 'L1-G2-EX3',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '林美美上個月才來台灣，所以會寫的漢字不到____。',
          blanks: [{ index: 0, acceptedAnswers: ['一百個', '一百个'] }],
          targetPattern: 'L1-G2'
        },
        {
          id: 'L1-G2-EX4',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '他一個月的生活費不到____，得節省一點。',
          blanks: [{ index: 0, acceptedAnswers: ['一萬塊', '一万块'] }],
          targetPattern: 'L1-G2'
        },
        {
          id: 'L1-G2-EX5',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '他學中國話不到____，就說得很流利了。',
          blanks: [{ index: 0, acceptedAnswers: ['一年', '半年'] }],
          targetPattern: 'L1-G2'
        }
      ]
    },
    {
      id: 'L1-G3',
      lessonId: 'L1',
      order: 3,
      pattern: '差一點（就）…',
      functionVi:
        '差一點（就）… nghĩa là "suýt nữa thì… (nhưng cuối cùng lại không)". Phần sau 差一點 thường là tình huống mà người nói không mong đợi xảy ra. 就 trong mẫu câu này có thể lược bỏ.',
      functionEn:
        "差一點（就）… means 'almost … (but did not)'. The … part usually indicates a situation that--from the speaker's perspective--was not expected to take place. 就 in this pattern is optional.",
      examples: [
        {
          traditional: '前天的演講真沒意思，我差一點睡著了。',
          simplified: '前天的演讲真没意思，我差一点睡着了。',
          english: 'The speech the day before yesterday was really boring. I almost fell asleep.',
          vietnamese: 'Bài diễn thuyết hôm kia thật chán, tôi suýt nữa thì ngủ gật.'
        },
        {
          traditional: '上次我哥哥去爬山的時候，差一點迷路。',
          simplified: '上次我哥哥去爬山的时候，差一点迷路。',
          english: 'The last time my brother went hiking in the mountains, he almost got lost.',
          vietnamese: 'Lần trước anh trai tôi đi leo núi, suýt nữa thì bị lạc đường.'
        },
        {
          traditional: '為了健康，他差一點就搬到鄉下去住。',
          simplified: '为了健康，他差一点就搬到乡下去住。',
          english: 'For the sake of his health, he nearly moved to the countryside.',
          vietnamese: 'Vì sức khỏe, anh ấy suýt nữa thì chuyển về nông thôn sống.'
        },
        {
          traditional: '上個星期他在圖書館念書，背包差一點被偷走。',
          simplified: '上个星期他在图书馆念书，背包差一点被偷走。',
          english: 'Last week, he was studying in the library and his backpack almost got stolen.',
          vietnamese: 'Tuần trước anh ấy học ở thư viện, ba lô suýt nữa thì bị mất trộm.'
        },
        {
          traditional: '王月文的生日，我差一點就忘了送她禮物。',
          simplified: '王月文的生日，我差一点就忘了送她礼物。',
          english: "On Wang Yuewen's birthday, I almost forgot to give her a present.",
          vietnamese: 'Sinh nhật Vương Nguyệt Văn, tôi suýt nữa thì quên tặng quà cho cô ấy.'
        }
      ],
      usageNotesVi:
        '差一點（就）… chỉ việc suýt xảy ra nhưng cuối cùng không xảy ra. Còn 差不多 nghĩa là "xấp xỉ, gần bằng", nhấn mạnh sự chênh lệch nhỏ giữa hai điều được so sánh, không hàm ý "suýt nữa".\n\nVí dụ: 外面的雨很大，我差一點來不了。(Ngoài trời mưa to, tôi suýt nữa thì không đến được.)\n他昨天告訴我的事情，我差不多都忘了。(Chuyện anh ấy kể tôi nghe hôm qua, tôi gần như quên hết rồi.)',
      exercises: [
        {
          id: 'L1-G3-EX1',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '你做的蛋糕，差一點被____。',
          blanks: [{ index: 0, acceptedAnswers: ['我吃完了', '弟弟吃光了'] }],
          targetPattern: 'L1-G3'
        },
        {
          id: 'L1-G3-EX2',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '我跟何教授約好了，可是公車一直沒來，我差一點就____。',
          blanks: [{ index: 0, acceptedAnswers: ['遲到了'] }],
          targetPattern: 'L1-G3'
        },
        {
          id: 'L1-G3-EX3',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '還好你告訴我，我差一點____明天要考試。',
          blanks: [{ index: 0, acceptedAnswers: ['忘了'] }],
          targetPattern: 'L1-G3'
        },
        {
          id: 'L1-G3-EX4',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '他的成績不好，差一點____。',
          blanks: [{ index: 0, acceptedAnswers: ['被當', '被退學'] }],
          targetPattern: 'L1-G3'
        },
        {
          id: 'L1-G3-EX5',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '沒想到這個城市的路那麼複雜，我差一點____。',
          blanks: [{ index: 0, acceptedAnswers: ['迷路'] }],
          targetPattern: 'L1-G3'
        }
      ]
    },
    {
      id: 'L1-G4',
      lessonId: 'L1',
      order: 4,
      pattern: '恐怕…',
      functionVi:
        'Phó từ 恐怕 giới thiệu một tình huống có khả năng cao sẽ xảy ra theo góc nhìn người nói. Tình huống này thường không phải điều mong muốn, tương tự "e rằng, sợ rằng" trong tiếng Việt.',
      functionEn:
        "The adverb 恐怕 introduces a situation that is likely to take place from the speaker's perspective. Usually the situation is a non-favorable one. Similar to 'I am afraid that' in English.",
      examples: [
        {
          traditional: '壓力太大，恐怕會影響身體健康。',
          simplified: '压力太大，恐怕会影响身体健康。',
          english: "I'm afraid that too much stress will affect your physical health.",
          vietnamese: 'Áp lực quá lớn, e rằng sẽ ảnh hưởng đến sức khỏe.'
        },
        {
          traditional: '網路雖然把世界變小了，但是人跟人的關係恐怕更遠了。',
          simplified: '网路虽然把世界变小了，但是人跟人的关系恐怕更远了。',
          english: "Although the internet has made the world smaller, I'm afraid that relationships between people are drifting further apart.",
          vietnamese: 'Tuy internet đã làm thế giới thu nhỏ lại, nhưng e rằng quan hệ giữa người với người lại càng xa cách hơn.'
        },
        {
          traditional: '我租的房子，合約快到期了，恐怕得搬家。',
          simplified: '我租的房子，合约快到期了，恐怕得搬家。',
          english: "The contract on the apartment I'm renting is almost up. I'm afraid I'll have to move.",
          vietnamese: 'Nhà tôi thuê, hợp đồng sắp hết hạn rồi, e rằng phải chuyển nhà thôi.'
        },
        {
          traditional: '走快一點吧。去晚了，恐怕小陳會生氣。',
          simplified: '走快一点吧。去晚了，恐怕小陈会生气。',
          english: "Let's move faster. If we're late, Xiao Chen will probably get angry.",
          vietnamese: 'Đi nhanh lên thôi. Đến muộn, e rằng Tiểu Trần sẽ giận đấy.'
        },
        {
          traditional: '明天的報告，我還沒準備好，今天恐怕得熬夜。',
          simplified: '明天的报告，我还没准备好，今天恐怕得熬夜。',
          english: "I haven't prepared the report for tomorrow. I'm afraid I'll have to burn the midnight oil tonight.",
          vietnamese: 'Bài báo cáo ngày mai tôi vẫn chưa chuẩn bị xong, hôm nay e rằng phải thức khuya rồi.'
        }
      ],
      usageNotesVi:
        '大概 ("khoảng chừng, đại khái") và 可能 ("có thể") cũng dùng để ước lượng nhưng mang tính trung lập, không hàm ý tình huống bất lợi. 恐怕 dùng để chỉ suy đoán của chính người nói về một điều bất lợi; nếu suy đoán đó là của người khác (vẫn về điều bất lợi), dùng 怕 thay vì 恐怕.\n\nVí dụ: 我家離學校大概五百公尺。(Nhà tôi cách trường khoảng 500 mét.) 今天晚上可能會下雨。(Tối nay có thể sẽ mưa.) 他怕熬夜會影響身體健康。(Anh ấy sợ rằng thức khuya sẽ ảnh hưởng đến sức khỏe.)',
      exercises: [
        {
          id: 'L1-G4-EX1',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '捷運站附近的房子這麼貴，他____。',
          blanks: [{ index: 0, acceptedAnswers: ['恐怕租不起'] }],
          targetPattern: 'L1-G4'
        },
        {
          id: 'L1-G4-EX2',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '這課的語法又多又難，____。',
          blanks: [{ index: 0, acceptedAnswers: ['恐怕得多花點時間才能學會'] }],
          targetPattern: 'L1-G4'
        },
        {
          id: 'L1-G4-EX3',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '他從小在鄉下長大，____。',
          blanks: [{ index: 0, acceptedAnswers: ['恐怕不習慣大城市的生活'] }],
          targetPattern: 'L1-G4'
        },
        {
          id: 'L1-G4-EX4',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '你準備的豬肉餡兒不夠多，____。',
          blanks: [{ index: 0, acceptedAnswers: ['恐怕大家吃不飽'] }],
          targetPattern: 'L1-G4'
        },
        {
          id: 'L1-G4-EX5',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '如果薪水太低，____。',
          blanks: [{ index: 0, acceptedAnswers: ['恐怕沒有人願意做這份工作'] }],
          targetPattern: 'L1-G4'
        }
      ]
    },
    {
      id: 'L1-G5',
      lessonId: 'L1',
      order: 5,
      pattern: '好不容易',
      functionVi:
        '好不容易 diễn tả việc khó khăn lắm mới đạt được một điều mong muốn, nghĩa gần với "mãi mới, khó khăn lắm mới…" trong tiếng Việt.',
      functionEn: "好不容易 indicates the hard-won realization of a favorable situation. It means roughly 'finally managed to…'.",
      examples: [
        {
          traditional: '爸爸好不容易才答應讓我去美國念書，我一定要更用功。',
          simplified: '爸爸好不容易才答应让我去美国念书，我一定要更用功。',
          english: "After a great deal of effort, Dad finally agreed to let me study in the US, so I'm going to make a point of working even harder.",
          vietnamese: 'Bố khó khăn lắm mới đồng ý cho tôi đi Mỹ học, tôi nhất định phải chăm chỉ hơn.'
        },
        {
          traditional: '好不容易拿到獎學金，怎麼就要回國了？',
          simplified: '好不容易拿到奖学金，怎么就要回国了？',
          english: "You finally managed to get a scholarship. How come you're going back home?",
          vietnamese: 'Mãi mới xin được học bổng, sao lại phải về nước rồi?'
        },
        {
          traditional: '下了兩個星期的雨，今天好不容易才停。',
          simplified: '下了两个星期的雨，今天好不容易才停。',
          english: "After two weeks of rain, it finally managed to stop today.",
          vietnamese: 'Mưa suốt hai tuần liền, hôm nay mãi mới tạnh.'
        },
        {
          traditional: '好不容易看到一雙（shuāng）喜歡的鞋子，沒想到這麼貴。',
          simplified: '好不容易看到一双（shuāng）喜欢的鞋子，没想到这么贵。',
          english: "I finally managed to find a pair of shoes that I like. I had no idea it'd be so expensive.",
          vietnamese: 'Mãi mới thấy một đôi giày ưng ý, không ngờ lại đắt như vậy.'
        },
        {
          traditional: '他做了一大碗豬腳麵線，我好不容易才吃完。',
          simplified: '他做了一大碗猪脚面线，我好不容易才吃完。',
          english: 'He made a huge bowl of pork knuckle rice threads that I barely managed to finish.',
          vietnamese: 'Anh ấy nấu một tô to mì sợi chân giò, tôi ăn mãi mới hết.'
        }
      ],
      usageNotesVi: '好不容易 luôn mang nghĩa tích cực "cuối cùng cũng làm được", khác với "好容易" (ít dùng, cùng nghĩa với 好不容易 trong khẩu ngữ một số vùng).',
      exercises: [
        {
          id: 'L1-G5-EX1',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '最近經濟不太好，小王____。',
          blanks: [{ index: 0, acceptedAnswers: ['好不容易才找到工作'] }],
          targetPattern: 'L1-G5'
        },
        {
          id: 'L1-G5-EX2',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '這個語法，我說明了半天，他____。',
          blanks: [{ index: 0, acceptedAnswers: ['好不容易才聽懂'] }],
          targetPattern: 'L1-G5'
        },
        {
          id: 'L1-G5-EX3',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '包餃子看起來很容易，可是我學了好久，____。',
          blanks: [{ index: 0, acceptedAnswers: ['好不容易才學會'] }],
          targetPattern: 'L1-G5'
        },
        {
          id: 'L1-G5-EX4',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '這個星期的垃圾很多，我（垃圾分類）____。',
          blanks: [{ index: 0, acceptedAnswers: ['好不容易才分類完'] }],
          targetPattern: 'L1-G5'
        },
        {
          id: 'L1-G5-EX5',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          textWithBlanks: '孩子____，你就讓他休息一下吧。',
          blanks: [{ index: 0, acceptedAnswers: ['好不容易才寫完功課'] }],
          targetPattern: 'L1-G5'
        }
      ]
    },
    {
      id: 'L1-G6',
      lessonId: 'L1',
      order: 6,
      pattern: '說…就…',
      functionVi:
        'Mẫu câu này diễn tả một việc xảy ra bất ngờ, không có dấu hiệu báo trước, hoặc xảy ra nhanh hơn dự kiến (theo góc nhìn người nói). Tương đương với "nói là làm ngay", "vừa nói xong đã…" trong tiếng Việt.',
      functionEn:
        "This pattern means that something unexpected happens, without prior warning, or happens faster than expected (from the speaker's perspective). Roughly equivalent to 'just like that' and 'before you know it' in English.",
      examples: [
        {
          traditional: '你不喜歡你的班嗎？怎麼說換班就換班？',
          simplified: '你不喜欢你的班吗？怎么说换班就换班？',
          english: "You didn't like your class? Why did you change classes just like that?",
          vietnamese: 'Cậu không thích lớp mình à? Sao lại nói đổi lớp là đổi ngay vậy?'
        },
        {
          traditional: '台北的天氣真奇怪，說下雨就下雨。',
          simplified: '台北的天气真奇怪，说下雨就下雨。',
          english: "The weather in Taipei is really strange. Rain can come at any moment.",
          vietnamese: 'Thời tiết Đài Bắc thật kỳ lạ, nói mưa là mưa ngay.'
        },
        {
          traditional: '小明怎麼了？怎麼說走就走？',
          simplified: '小明怎么了？怎么说走就走？',
          english: "What's up with Xiaoming? Why did he just up and leave?",
          vietnamese: 'Tiểu Minh làm sao vậy? Sao nói đi là đi ngay thế?'
        },
        {
          traditional: '美美上個月剛來台灣，怎麼說回國就回國？',
          simplified: '美美上个月刚来台湾，怎么说回国就回国？',
          english: "Meimei came to Taiwan just last month. How come she's going back home already?",
          vietnamese: 'Mỹ Mỹ tháng trước vừa mới đến Đài Loan, sao nói về nước là về ngay vậy?'
        },
        {
          traditional: '李老師很嚴，常常說考試就考試，學生都覺得壓力很大。',
          simplified: '李老师很严，常常说考试就考试，学生都觉得压力很大。',
          english: "Our teacher, Mr. Li, is very strict. He often gives tests without prior warning. The students are under a lot of stress.",
          vietnamese: 'Thầy Lý rất nghiêm, thường nói kiểm tra là kiểm tra ngay, học sinh đều cảm thấy áp lực rất lớn.'
        }
      ],
      usageNotesVi: 'Động từ lặp lại ở hai vế trước và sau 就 phải giống nhau (說 V 就 V), nhấn mạnh tính đột ngột/nhanh chóng ngoài dự đoán của người nói.',
      exercises: [
        {
          id: 'L1-G6-EX1',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: '我們聊得很高興，你怎麼要離開了？有什麼事嗎？',
          textWithBlanks: '→ ___？（改寫成「說 V 就 V」）',
          blanks: [{ index: 0, acceptedAnswers: ['你怎麼說走就走？有什麼事嗎？'] }],
          targetPattern: 'L1-G6'
        },
        {
          id: 'L1-G6-EX2',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: '我才聽說她打算搬家，怎麼已經搬走了？',
          textWithBlanks: '→ ___？',
          blanks: [{ index: 0, acceptedAnswers: ['她怎麼說搬就搬？'] }],
          targetPattern: 'L1-G6'
        },
        {
          id: 'L1-G6-EX3',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: '這件事很急，我們現在就開始做吧。',
          textWithBlanks: '→ ___。',
          blanks: [{ index: 0, acceptedAnswers: ['這件事很急，我們說做就做吧。'] }],
          targetPattern: 'L1-G6'
        },
        {
          id: 'L1-G6-EX4',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: '你念得好好的，為什麼忽然決定休學？',
          textWithBlanks: '→ ___？',
          blanks: [{ index: 0, acceptedAnswers: ['你怎麼說休學就休學？'] }],
          targetPattern: 'L1-G6'
        },
        {
          id: 'L1-G6-EX5',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: '他很容易生氣，所以沒有人喜歡他。',
          textWithBlanks: '→ ___。',
          blanks: [{ index: 0, acceptedAnswers: ['他常常說生氣就生氣，所以沒有人喜歡他。'] }],
          targetPattern: 'L1-G6'
        }
      ]
    },
    {
      id: 'L1-G7',
      lessonId: 'L1',
      order: 7,
      pattern: '不管…都…',
      functionVi:
        'Mẫu câu này diễn tả kết quả (theo sau 都) không thay đổi bất kể điều kiện (theo sau 不管) có xảy ra hay không / là gì.',
      functionEn:
        'This pattern indicates that the consequence (following 都) remains the same no matter whether the condition (following 不管) is or is not met.',
      examples: [
        {
          traditional: '我爸爸不管工作忙不忙，天天都去健身房運動。',
          simplified: '我爸爸不管工作忙不忙，天天都去健身房运动。',
          english: 'My dad, whether or not his work is busy, exercises at the gym every day.',
          vietnamese: 'Bố tôi bất kể công việc bận hay không, ngày nào cũng đến phòng gym tập thể dục.'
        },
        {
          traditional: '不管那裡的環境怎麼樣，他都要搬去那裡。',
          simplified: '不管那里的环境怎么样，他都要搬去那里。',
          english: "Regardless of what the environment there is like, he's bound to move there.",
          vietnamese: 'Bất kể môi trường ở đó thế nào, anh ấy vẫn nhất quyết chuyển đến đó ở.'
        },
        {
          traditional: '不管蒸魚還是炸魚，我都不吃。',
          simplified: '不管蒸鱼还是炸鱼，我都不吃。',
          english: "Whether it's steamed fish or fried fish, I won't eat it.",
          vietnamese: 'Dù là cá hấp hay cá chiên, tôi đều không ăn.'
        },
        {
          traditional: '不管上幾點的課，他都會遲到。',
          simplified: '不管上几点的课，他都会迟到。',
          english: 'No matter what time class starts, he will be late.',
          vietnamese: 'Bất kể giờ học là mấy giờ, anh ấy đều đến muộn.'
        },
        {
          traditional: '不管媽媽同不同意，我都要去美國念書。',
          simplified: '不管妈妈同不同意，我都要去美国念书。',
          english: 'Regardless of whether Mom agrees or not, I will go study in the US.',
          vietnamese: 'Bất kể mẹ có đồng ý hay không, tôi vẫn nhất định đi Mỹ học.'
        }
      ],
      usageNotesVi:
        'Phần sau 不管 về bản chất là một câu hỏi: có thể là đại từ nghi vấn (什麼, 誰, 哪…), câu hỏi chính phản (A-not-A, vd 同不同意), hoặc câu hỏi lựa chọn (vd 天氣好還是壞). Ví dụ: 要是你有問題，不管什麼時候都可以打電話給我。(Nếu bạn có vấn đề gì, bất kể lúc nào cũng có thể gọi điện cho tôi.)',
      exercises: [
        {
          id: 'L1-G7-EX1',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: 'A：李明珊的父母不答應她去西班牙念書的話，她還去嗎？',
          textWithBlanks: 'B：___',
          blanks: [{ index: 0, acceptedAnswers: ['不管父母答不答應，她都要去。'] }],
          targetPattern: 'L1-G7'
        },
        {
          id: 'L1-G7-EX2',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: 'A：聽說李教授很嚴，你還要選他的課嗎？',
          textWithBlanks: 'B：___',
          blanks: [{ index: 0, acceptedAnswers: ['不管李教授嚴不嚴，我都要選他的課。'] }],
          targetPattern: 'L1-G7'
        },
        {
          id: 'L1-G7-EX3',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: 'A：這家餐廳的生意總是這麼好嗎？',
          textWithBlanks: 'B：___',
          blanks: [{ index: 0, acceptedAnswers: ['不管天氣好還是壞，這家餐廳的生意都很好。'] }],
          targetPattern: 'L1-G7'
        },
        {
          id: 'L1-G7-EX4',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: 'A：捷運站附近的房租都很貴，你還要租嗎？',
          textWithBlanks: 'B：住在捷運站附近很方便，___',
          blanks: [{ index: 0, acceptedAnswers: ['不管房租多貴，我都要租。'] }],
          targetPattern: 'L1-G7'
        },
        {
          id: 'L1-G7-EX5',
          lessonId: 'L1',
          section: 'textbook-practice',
          type: 'fill-blank',
          prompt: 'A：中文這麼難學，我真想放棄。',
          textWithBlanks: 'B：學中文對找工作有很大的幫助，___',
          blanks: [{ index: 0, acceptedAnswers: ['不管多難，你都不應該放棄。'] }],
          targetPattern: 'L1-G7'
        }
      ]
    }
  ],

  workbookExercises: [
    {
      id: 'L1-WB-pairs',
      lessonId: 'L1',
      section: 'pairs',
      prompt: 'Nối từ ở cột trái với từ ở cột phải để tạo thành cụm từ có nghĩa.',
      type: 'matching',
      pairs: [
        { left: '填', right: '表' },
        { left: '考上', right: '理想的科系' },
        { left: '辦', right: '手續' },
        { left: '當', right: '外交人員' },
        { left: '討論', right: '選課的事' },
        { left: '申請', right: '成績單' }
      ]
    },

    { id: 'L1-WB-fw-1', lessonId: 'L1', section: 'fill-write', type: 'fill-blank',
      textWithBlanks: '最近為了準備面談，我每天都___(áoyè)，累得不得了。',
      blanks: [{ index: 0, acceptedAnswers: ['熬夜'] }] },
    { id: 'L1-WB-fw-2', lessonId: 'L1', section: 'fill-write', type: 'fill-blank',
      textWithBlanks: '你那麼討厭你老闆，每天去上班不是很___(tòngkǔ)嗎？',
      blanks: [{ index: 0, acceptedAnswers: ['痛苦'] }] },
    { id: 'L1-WB-fw-3', lessonId: 'L1', section: 'fill-write', type: 'fill-blank',
      textWithBlanks: '有時候我覺得我的家人太關心我了，讓我覺得___(yālì)很大。',
      blanks: [{ index: 0, acceptedAnswers: ['壓力'] }] },
    { id: 'L1-WB-fw-4', lessonId: 'L1', section: 'fill-write', type: 'fill-blank',
      textWithBlanks: '我們約好今天晚上六點要去陳伯母家吃年夜飯，不要___(chídào)了！',
      blanks: [{ index: 0, acceptedAnswers: ['遲到'] }] },
    { id: 'L1-WB-fw-5', lessonId: 'L1', section: 'fill-write', type: 'fill-blank',
      textWithBlanks: '外國人如果想在這個國家工作，聽說規定很多，___(shǒuxù)也很複雜。',
      blanks: [{ index: 0, acceptedAnswers: ['手續'] }] },
    { id: 'L1-WB-fw-6', lessonId: 'L1', section: 'fill-write', type: 'fill-blank',
      textWithBlanks: '你可以從這裡坐公車直接到展覽館，不必換車，所以你不必___(dānxīn)會迷路。',
      blanks: [{ index: 0, acceptedAnswers: ['擔心'] }] },
    { id: 'L1-WB-fw-7', lessonId: 'L1', section: 'fill-write', type: 'fill-blank',
      textWithBlanks: '在台灣，除了英語以外，西班牙語也是___(rèmén)的外語。',
      blanks: [{ index: 0, acceptedAnswers: ['熱門'] }] },
    { id: 'L1-WB-fw-8', lessonId: 'L1', section: 'fill-write', type: 'fill-blank',
      textWithBlanks: '這家公司的上海分公司正在徵求中英文流利的人，我想去___(shēnqǐng)。',
      blanks: [{ index: 0, acceptedAnswers: ['申請'] }] },
    { id: 'L1-WB-fw-9', lessonId: 'L1', section: 'fill-write', type: 'fill-blank',
      textWithBlanks: '你常吃素，可不可以___(tuījiàn)一家又好吃、交通又方便的素食餐廳給我？我想帶我朋友去。',
      blanks: [{ index: 0, acceptedAnswers: ['推薦'] }] },
    { id: 'L1-WB-fw-10', lessonId: 'L1', section: 'fill-write', type: 'fill-blank',
      textWithBlanks: '雖然他不太___(huópō)，口才也不好，但是很願意聽別人說話、幫助別人，所以還是有很多好朋友。',
      blanks: [{ index: 0, acceptedAnswers: ['活潑'] }] },

    {
      id: 'L1-WB-fb-1',
      lessonId: 'L1',
      section: 'fill-bank',
      prompt: 'Điền từ thích hợp vào đoạn hội thoại (mỗi từ chỉ dùng 1 lần).',
      type: 'fill-blank',
      wordBank: ['羨慕', '原來', '個性', '清楚', '放棄', '理想'],
      textWithBlanks:
        'A：我真1.___你有一個又漂亮，能力又好的女朋友。\nB：我們不在一起了。\nA：發生了什麼事？上個星期我們去海邊的時候，你們看起來還很開心啊！\nB：她說我們2.___不合、興趣也不合，跟我在一起不快樂。\nA：我記得你抱怨她花太多時間工作，沒時間陪你，不是你3.___的女朋友。\nB：她也抱怨我很糊塗、不夠浪漫。可是我們4.___很快樂的啊。\nA：兩個人在一起總是有問題，要好好地把事情說5.___，兩個人才能繼續下去。\nB：我不想6.___她，可是不管我說什麼，她都要離開我。\nA：你好好地考慮考慮吧！要是兩個人真的不合適的話，在一起也不會快樂的。',
      blanks: [
        { index: 1, acceptedAnswers: ['羨慕'] },
        { index: 2, acceptedAnswers: ['個性'] },
        { index: 3, acceptedAnswers: ['理想'] },
        { index: 4, acceptedAnswers: ['原來'] },
        { index: 5, acceptedAnswers: ['清楚'] },
        { index: 6, acceptedAnswers: ['放棄'] }
      ]
    },

    {
      id: 'L1-WB-read-a1', lessonId: 'L1', section: 'reading', type: 'multiple-choice',
      prompt: '小王：你上午去跟那家餐廳的老闆面談了吧？怎麼樣？\n小馬：我們談了不到半個小時，老闆就要我去上班了。',
      question: '小馬的意思是：',
      options: [
        { id: 'a', text: '他跟老闆談了很久。' },
        { id: 'b', text: '他順利找到工作了。' },
        { id: 'c', text: '老闆沒時間跟他談。' }
      ],
      correctOptionId: 'b',
      explanationVi: '"談了不到半個小時，老闆就要我去上班" nghĩa là chưa nói chuyện lâu, chủ đã nhận anh vào làm ngay — tìm việc rất thuận lợi.'
    },
    {
      id: 'L1-WB-read-a2', lessonId: 'L1', section: 'reading', type: 'multiple-choice',
      prompt: '小張：你下學期想選什麼課？\n小何：我還沒決定。這學期我的課很多，壓力很大，還有一個課差一點被當，所以下學期我應該不會選太難的課。',
      question: '小何這學期的課怎麼樣？',
      options: [
        { id: 'a', text: '這學期上課上得很痛苦。' },
        { id: 'b', text: '他有一個課被當了。' },
        { id: 'c', text: '雖然壓力大，但是學到很多。' }
      ],
      correctOptionId: 'a',
      explanationVi: '"課很多，壓力很大，還差一點被當" cho thấy học kỳ này rất vất vả, khổ sở. Lưu ý "差一點被當" nghĩa là suýt trượt chứ chưa trượt, nên (b) sai.'
    },
    {
      id: 'L1-WB-read-a3', lessonId: 'L1', section: 'reading', type: 'multiple-choice',
      prompt: '小安：我要去找陳教授討論轉系的事。\n阿思：你跟陳教授約好了嗎？一定要先寫信跟教授約啊，怎麼能說去就去？而且教授很忙，沒約好的話，他恐怕沒有空跟你討論。\n小安：謝謝你告訴我。我差一點就直接去找教授了。',
      question: '看了他們的對話，下面哪一個對？',
      options: [
        { id: 'a', text: '小安已經去找教授討論過了。' },
        { id: 'b', text: '不管什麼時候，陳教授都有空。' },
        { id: 'c', text: '阿思認為應該先跟教授約好再去。' }
      ],
      correctOptionId: 'c',
      explanationVi: '阿思 khuyên phải hẹn trước với giáo sư rồi mới đến gặp, và 小安 nghe lời khuyên đó nên chưa thực sự đi gặp giáo sư.'
    },

    {
      id: 'L1-WB-read-b1', lessonId: 'L1', section: 'reading', type: 'multiple-choice',
      prompt:
        '小美是獨生女。她爸爸工作一直很忙，媽媽身體不好，所以她常常陪媽媽去醫院。在醫院不管是拿藥、填表、辦手續，不到十五歲，她什麼都會，連醫生複雜的說明，她都聽得懂。因為這樣，所以她決定將來要當醫生。不過按照她現在在學校的成績，要當醫生的話，恐怕得每天熬夜念書才行。',
      question: '小美沒有兄弟姐妹。',
      options: [
        { id: 'true', text: 'Đúng (○)' },
        { id: 'false', text: 'Sai (✕)' }
      ],
      correctOptionId: 'true',
      explanationVi: 'Bài viết nói 小美是獨生女 (Tiểu Mỹ là con gái một), nên không có anh chị em.'
    },
    {
      id: 'L1-WB-read-b2', lessonId: 'L1', section: 'reading', type: 'multiple-choice',
      prompt:
        '小美是獨生女。她爸爸工作一直很忙，媽媽身體不好，所以她常常陪媽媽去醫院。在醫院不管是拿藥、填表、辦手續，不到十五歲，她什麼都會，連醫生複雜的說明，她都聽得懂。因為這樣，所以她決定將來要當醫生。不過按照她現在在學校的成績，要當醫生的話，恐怕得每天熬夜念書才行。',
      question: '小美年紀小，所以很多事情都不會做。',
      options: [
        { id: 'true', text: 'Đúng (○)' },
        { id: 'false', text: 'Sai (✕)' }
      ],
      correctOptionId: 'false',
      explanationVi: 'Ngược lại, bài viết nói "不到十五歲，她什麼都會" (chưa đến 15 tuổi cô đã biết làm hết mọi việc).'
    },
    {
      id: 'L1-WB-read-b3', lessonId: 'L1', section: 'reading', type: 'multiple-choice',
      prompt:
        '小美是獨生女。她爸爸工作一直很忙，媽媽身體不好，所以她常常陪媽媽去醫院。在醫院不管是拿藥、填表、辦手續，不到十五歲，她什麼都會，連醫生複雜的說明，她都聽得懂。因為這樣，所以她決定將來要當醫生。不過按照她現在在學校的成績，要當醫生的話，恐怕得每天熬夜念書才行。',
      question: '雖然醫生的說明很難，可是小美還是聽得懂。',
      options: [
        { id: 'true', text: 'Đúng (○)' },
        { id: 'false', text: 'Sai (✕)' }
      ],
      correctOptionId: 'true',
      explanationVi: 'Bài viết nói rõ "連醫生複雜的說明，她都聽得懂".'
    },
    {
      id: 'L1-WB-read-b4', lessonId: 'L1', section: 'reading', type: 'multiple-choice',
      prompt:
        '小美是獨生女。她爸爸工作一直很忙，媽媽身體不好，所以她常常陪媽媽去醫院。在醫院不管是拿藥、填表、辦手續，不到十五歲，她什麼都會，連醫生複雜的說明，她都聽得懂。因為這樣，所以她決定將來要當醫生。不過按照她現在在學校的成績，要當醫生的話，恐怕得每天熬夜念書才行。',
      question: '小美現在每天都很用功，所以很晚才睡覺。',
      options: [
        { id: 'true', text: 'Đúng (○)' },
        { id: 'false', text: 'Sai (✕)' }
      ],
      correctOptionId: 'false',
      explanationVi: 'Bài viết chỉ nói rằng muốn làm bác sĩ thì SAU NÀY sẽ phải thức khuya học bài ("恐怕得...才行"), không nói cô hiện tại đã làm vậy.'
    },
    {
      id: 'L1-WB-read-b5', lessonId: 'L1', section: 'reading', type: 'multiple-choice',
      prompt:
        '小美是獨生女。她爸爸工作一直很忙，媽媽身體不好，所以她常常陪媽媽去醫院。在醫院不管是拿藥、填表、辦手續，不到十五歲，她什麼都會，連醫生複雜的說明，她都聽得懂。因為這樣，所以她決定將來要當醫生。不過按照她現在在學校的成績，要當醫生的話，恐怕得每天熬夜念書才行。',
      question: '小美的成績很好，以後當醫生一定沒問題。',
      options: [
        { id: 'true', text: 'Đúng (○)' },
        { id: 'false', text: 'Sai (✕)' }
      ],
      correctOptionId: 'false',
      explanationVi: 'Bài viết hàm ý ngược lại: với thành tích hiện tại, cô còn phải cố gắng thêm ("恐怕得...才行") mới có thể làm bác sĩ.'
    },

    {
      id: 'L1-WB-read-c1', lessonId: 'L1', section: 'reading', type: 'multiple-choice',
      prompt:
        '(Quảng cáo) 不了解自己？感情不順利？學習壓力大？工作機會在哪裡？未來發展？歡迎寫信或來這裡與我們談談！— 灣台大學學生輔導中心',
      question: '這是什麼廣告？',
      options: [
        { id: 'a', text: '社團想找新生的廣告。' },
        { id: 'b', text: '可以給學生建議的廣告。' },
        { id: 'c', text: '徵求教師的廣告。' }
      ],
      correctOptionId: 'b',
      explanationVi: '學生輔導中心 (Trung tâm tư vấn sinh viên) là nơi đưa ra lời khuyên cho sinh viên về tình cảm, học tập, việc làm, tương lai.'
    },
    {
      id: 'L1-WB-read-c2', lessonId: 'L1', section: 'reading', type: 'multiple-choice',
      prompt:
        '(Quảng cáo) 不了解自己？感情不順利？學習壓力大？工作機會在哪裡？未來發展？歡迎寫信或來這裡與我們談談！— 灣台大學學生輔導中心',
      question: '誰最可能會對這個廣告有興趣？',
      options: [
        { id: 'a', text: '公司老闆。' },
        { id: 'b', text: '快畢業的學生。' },
        { id: 'c', text: '大學教授。' }
      ],
      correctOptionId: 'b',
      explanationVi: 'Nội dung quảng cáo nhắc đến cơ hội việc làm và tương lai phát triển — mối quan tâm của sinh viên sắp tốt nghiệp.'
    },

    {
      id: 'L1-WB-dc-1', lessonId: 'L1', section: 'dialogue', type: 'dialogue-completion',
      requiredPattern: 'L1-G1',
      turns: [
        { speaker: 'A', text: '你點了這麼多餃子？吃得完嗎？', isBlank: false },
        { speaker: 'B', text: '（…的話）', isBlank: true }
      ],
      sampleAnswer: '吃不完的話，我可以打包帶回家。'
    },
    {
      id: 'L1-WB-dc-2', lessonId: 'L1', section: 'dialogue', type: 'dialogue-completion',
      requiredPattern: 'L1-G3',
      turns: [
        { speaker: 'A', text: '聽說小王的女朋友不能跟他一起去美國留學。', isBlank: false },
        { speaker: 'B', text: '是啊。小王很難過。他（差一點 V）', isBlank: true }
      ],
      sampleAnswer: '差一點就哭了。'
    },
    {
      id: 'L1-WB-dc-3', lessonId: 'L1', section: 'dialogue', type: 'dialogue-completion',
      requiredPattern: 'L1-G6',
      turns: [
        { speaker: 'A', text: '我剛剛去辦公室填好了休學申請表。', isBlank: false },
        { speaker: 'B', text: '你已經大學四年級了，怎麼（說 V 就 V）', isBlank: true }
      ],
      sampleAnswer: '說休學就休學？'
    },
    {
      id: 'L1-WB-dc-4', lessonId: 'L1', section: 'dialogue', type: 'dialogue-completion',
      requiredPattern: 'L1-G5',
      turns: [
        { speaker: 'A', text: '你找到錢包啦？上次好像聽你說你的錢包被偷了。', isBlank: false },
        { speaker: 'B', text: '（好不容易才 V）', isBlank: true }
      ],
      sampleAnswer: '對啊，我好不容易才找到的。'
    },
    {
      id: 'L1-WB-dc-5', lessonId: 'L1', section: 'dialogue', type: 'dialogue-completion',
      requiredPattern: 'L1-G7',
      turns: [
        { speaker: 'A', text: '你最近每天去打太極拳，看你早上都累得起不來，你還要學下去嗎？', isBlank: false },
        { speaker: 'B', text: '（不管…都…）', isBlank: true }
      ],
      sampleAnswer: '不管多累，我都要繼續學下去。'
    },

    {
      id: 'L1-WB-comp-1',
      lessonId: 'L1',
      section: 'composition',
      type: 'composition',
      topicVi:
        '"Giáo viên nghiêm khắc thì học sinh mới học nhanh, học giỏi." Bạn có đồng ý với quan điểm này không? Vì sao?',
      requiredWords: ['L1-010', 'L1-012', 'L1-018', 'L1-032', 'L1-034', 'L1-042', 'L1-036', 'L1-038', 'L1-047'],
      requiredPatterns: ['L1-G1', 'L1-G2', 'L1-G3', 'L1-G4', 'L1-G5', 'L1-G6', 'L1-G7'],
      minLength: 200,
      maxLength: 250
    },
    {
      id: 'L1-WB-comp-2',
      lessonId: 'L1',
      section: 'composition',
      type: 'composition',
      topicVi:
        'Tiểu Vương cho rằng học ngành hot rất quan trọng vì sau này dễ tìm việc hơn. Tiểu Trương cho rằng học ngành mình thích quan trọng hơn, học mới không khổ sở. Bạn đồng ý với ai? Vì sao?',
      requiredWords: ['L1-010', 'L1-012', 'L1-018', 'L1-032', 'L1-034', 'L1-042', 'L1-036', 'L1-038', 'L1-047'],
      requiredPatterns: ['L1-G1', 'L1-G2', 'L1-G3', 'L1-G4', 'L1-G5', 'L1-G6', 'L1-G7'],
      minLength: 200,
      maxLength: 250
    }
  ]
}
