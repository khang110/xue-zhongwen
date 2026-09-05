import type { ListeningExercise } from '../../../../types/exercise'

export const listeningL3: ListeningExercise[] = [
  {
    id: 'L3-WB-listen-A',
    lessonId: 'L3',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '03-1',
    audioSrc: '/audio/workbook/03-1.mp3',
    prompt: 'Phần A · Nghe hội thoại rồi chọn đáp án đúng cho câu hỏi.',
    transcript: `1.
男：今天出大太陽啊，你怎麼還帶著傘呢？
女：天氣說變就變，還是帶著比較好。
問題：這位小姐為什麼帶傘？
A. 外面太陽很大
B. 天氣不穩定
C. 聽新聞說的

2.
男：臺灣的秋天早晚氣溫差得很多，要小心。
女：這裡還算好的，才差幾度。在我的國家，很可能會差十幾度呢！
問題：這位小姐的意思是什麼？
A. 臺灣的氣溫變化比較小
B. 兩個地方的天氣變化都大
C. 在她的國家，天氣的變化小多了

3.
男：聽說老闆決定放你們一個星期的假？
女：對啊，我們都高興死了！因為老闆總是給我們做不完的事，我們幾乎一年三百六十五天都在工作。
問題：這位小姐的意思是什麼？
A. 他們的假期很多
B. 他們都不喜歡放假
C. 想到能放假太開心了

4.
男：你對這些廟拜神的活動好像很了解。
女：哪裡，我對中國傳統的宗教有興趣，所以多少做了些研究。
問題：對宗教活動，這位小姐可能怎麼樣？
A. 相當了解
B. 沒有興趣
C. 沒做研究

5.
男：這個工作機會很難得，你真的不打算申請嗎？
女：是很難得的機會，可再難得，我也不想申請，因為我不要離開我的家鄉啊！
問題：下面哪一個是對的？
A. 這位先生不會申請這個工作
B. 這個工作不在小姐的家鄉附近
C. 這位小姐不想申請這麼難的工作

6.
男：你記得嗎？我大二的時候念得很痛苦，差一點轉系。
女：當然記得，幸虧你那時候沒轉系，要不然現在也不會有這麼好的發展。
問題：這位小姐的意思是什麼？
A. 還好這位先生轉系了，所以現在才會有好發展
B. 因為沒轉系，所以這位先生現在沒什麼發展
C. 因為沒轉系，所以這位先生現在發展得很好`,
    items: [
      {
        id: 'L3-WB-listen-A-1',
        question: '這位小姐為什麼帶傘？',
        options: [
          { id: 'A', text: '外面太陽很大' },
          { id: 'B', text: '天氣不穩定' },
          { id: 'C', text: '聽新聞說的' }
        ],
        answer: 'B'
      },
      {
        id: 'L3-WB-listen-A-2',
        question: '這位小姐的意思是什麼？',
        options: [
          { id: 'A', text: '臺灣的氣溫變化比較小' },
          { id: 'B', text: '兩個地方的天氣變化都大' },
          { id: 'C', text: '在她的國家，天氣的變化小多了' }
        ],
        answer: 'A'
      },
      {
        id: 'L3-WB-listen-A-3',
        question: '這位小姐的意思是什麼？',
        options: [
          { id: 'A', text: '他們的假期很多' },
          { id: 'B', text: '他們都不喜歡放假' },
          { id: 'C', text: '想到能放假太開心了' }
        ],
        answer: 'C'
      },
      {
        id: 'L3-WB-listen-A-4',
        question: '對宗教活動，這位小姐可能怎麼樣？',
        options: [
          { id: 'A', text: '相當了解' },
          { id: 'B', text: '沒有興趣' },
          { id: 'C', text: '沒做研究' }
        ],
        answer: 'A'
      },
      {
        id: 'L3-WB-listen-A-5',
        question: '下面哪一個是對的？',
        options: [
          { id: 'A', text: '這位先生不會申請這個工作' },
          { id: 'B', text: '這個工作不在小姐的家鄉附近' },
          { id: 'C', text: '這位小姐不想申請這麼難的工作' }
        ],
        answer: 'B'
      },
      {
        id: 'L3-WB-listen-A-6',
        question: '這位小姐的意思是什麼？',
        options: [
          { id: 'A', text: '還好這位先生轉系了，所以現在才會有好發展' },
          { id: 'B', text: '因為沒轉系，所以這位先生現在沒什麼發展' },
          { id: 'C', text: '因為沒轉系，所以這位先生現在發展得很好' }
        ],
        answer: 'C'
      }
    ]
  },
  {
    id: 'L3-WB-listen-B',
    lessonId: 'L3',
    section: 'listening',
    type: 'listening',
    format: 'true-false',
    audioTrack: '03-2',
    audioSrc: '/audio/workbook/03-2.mp3',
    prompt: 'Phần B · Nghe đoạn văn. Đúng chọn O, sai chọn X.',
    transcript: `中國的端午節在農曆的五月五號，這一天在很久以前就被認為是一個不好的日子，所以古代的人會用各種不同的方法來把瘟疫和壞運氣趕走。比方說，喝雄黃酒。古代人認為這種酒像藥一樣，喝了可以讓自己不生病。不過，現代醫生發現，喝雄黃酒對身體並沒有好處，所以幾乎沒聽說有人還喝這種酒。除了喝雄黃酒以外，古代的人也會在門上掛一些特別的植物。這麼做是有作用的，因為這些植物有特別的味道，會讓空氣變得比較乾淨，人也就會比較健康。難怪一直到現在，大家也都還這樣做。

1. 端午節這一天，古代人只用兩種方法趕走壞運氣。
2. 古代的人認為雄黃酒是一種藥。
3. 現在沒多少人喝雄黃酒了。
4. 這一天不管是甚麼植物，都能拿來掛在門上。
5. 現代的人也認為在端午節這一天掛植物對身體有好處。`,
    items: [
      { id: 'L3-WB-listen-B-1', question: '端午節這一天，古代人只用兩種方法趕走壞運氣。', answer: 'X' },
      { id: 'L3-WB-listen-B-2', question: '古代的人認為雄黃酒是一種藥。', answer: 'O' },
      { id: 'L3-WB-listen-B-3', question: '現在沒多少人喝雄黃酒了。', answer: 'O' },
      { id: 'L3-WB-listen-B-4', question: '這一天不管是甚麼植物，都能拿來掛在門上。', answer: 'X' },
      { id: 'L3-WB-listen-B-5', question: '現代的人也認為在端午節這一天掛植物對身體有好處。', answer: 'O' }
    ]
  }
]
