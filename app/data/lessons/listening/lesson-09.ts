import type { ListeningExercise } from '../../../../types/exercise'

export const listeningL9: ListeningExercise[] = [
  {
    id: 'L9-WB-listen-A',
    lessonId: 'L9',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '09-1',
    audioSrc: '/audio/workbook/09-1.mp3',
    prompt: 'Phần A · Nghe hội thoại rồi chọn đáp án đúng cho câu hỏi.',
    transcript: `1.
女：這麼晚了，為什麼非要跑一趟書店呢？上網買，明天就能收到了啊。
男：我急著用，還是去書店買比較好。上次我買手機，網站寫 24 小時以內宅配，結果我等了三天。
問題：這位先生的意思是什麼？
A. 網購透過宅配，第二天一定能收到
B. 要是急著用，最好網購等宅配送來
C. 他不放心網購宅配的時間，寧可去書店買

2.
女：沒想到老闆才學了半年的日文，居然就聽得懂日文的演講了。
男：哪裡，他都是靠翻譯的。
問題：這位先生的意思是什麼？
A. 老闆的日文學了不止半年
B. 哪裡有日文翻譯的服務
C. 老闆的日文還不夠好

3.
女：老闆，剛剛面試的那個女孩子口才很好，外語又流利，為什麼不錄取她呢？
男：你應該也看得出來，她的能力非常強，但是個性上恐怕不太合適。
問題：老闆沒馬上錄取那位小姐，他考慮的是什麼？
A. 專業能力
B. 個性問題
C. 外語能力

4.
女：今天晚上我不跟你們去 KTV 了，我得熬夜準備明天的口試。
男：口試成績才占百分之二十，隨便說說就好了。
問題：這位先生的意思是什麼？
A. 口試成績很重要，要好好準備
B. 這位小姐還是應該一起去 KTV
C. 這位小姐就算準備了，也不會有好成績

5.
女：我以後不再陪小張去買菜了，昨天我跟他去買包餃子的材料，差一點累死。
男：他對吃一向很講究，食材既要新鮮，又得是有機的，當然得慢慢選。
問題：下面哪一個是對的？
A. 這位小姐以後不再包餃子了
B. 小張只包海鮮餃子
C. 小張只吃有機的蔬菜`,
    items: [
      {
        id: 'L9-WB-listen-A-1',
        question: '這位先生的意思是什麼？',
        options: [
          { id: 'A', text: '網購透過宅配，第二天一定能收到' },
          { id: 'B', text: '要是急著用，最好網購等宅配送來' },
          { id: 'C', text: '他不放心網購宅配的時間，寧可去書店買' }
        ],
        answer: 'C'
      },
      {
        id: 'L9-WB-listen-A-2',
        question: '這位先生的意思是什麼？',
        options: [
          { id: 'A', text: '老闆的日文學了不止半年' },
          { id: 'B', text: '哪裡有日文翻譯的服務' },
          { id: 'C', text: '老闆的日文還不夠好' }
        ],
        answer: 'C'
      },
      {
        id: 'L9-WB-listen-A-3',
        question: '老闆沒馬上錄取那位小姐，他考慮的是什麼？',
        options: [
          { id: 'A', text: '專業能力' },
          { id: 'B', text: '個性問題' },
          { id: 'C', text: '外語能力' }
        ],
        answer: 'B'
      },
      {
        id: 'L9-WB-listen-A-4',
        question: '這位先生的意思是什麼？',
        options: [
          { id: 'A', text: '口試成績很重要，要好好準備' },
          { id: 'B', text: '這位小姐還是應該一起去 KTV' },
          { id: 'C', text: '這位小姐就算準備了，也不會有好成績' }
        ],
        answer: 'B'
      },
      {
        id: 'L9-WB-listen-A-5',
        question: '下面哪一個是對的？',
        options: [
          { id: 'A', text: '這位小姐以後不再包餃子了' },
          { id: 'B', text: '小張只包海鮮餃子' },
          { id: 'C', text: '小張只吃有機的蔬菜' }
        ],
        answer: 'C'
      }
    ]
  },
  {
    id: 'L9-WB-listen-B',
    lessonId: 'L9',
    section: 'listening',
    type: 'listening',
    format: 'true-false',
    audioTrack: '09-2',
    audioSrc: '/audio/workbook/09-2.mp3',
    prompt: 'Phần B · Nghe đoạn văn. Đúng chọn O, sai chọn X.',
    transcript: `因為看到了網路的商機，李先生的公司在去年成立了網路商店。對很多企業來說，網路行銷可能是成本和風險都最低的一種經營方式，因為網購便利，不需要出門，隨時都能上網，再加上不需要負擔店面的房租，一般來說，網購商品價格最少會比店面便宜一成，因此網購人口增加得很快。雖然現在網購只佔李先生公司營業收入不到百分之十，但是上個月網購部分的收入提高了百分之二十二，比店面收入增加的百分之五高得多。

1. 網路商品比店面賣得便宜，是因為品質比較差一點。
2. 李先生的公司經營網站的時間不算太長。
3. 一樣的商品在網路和店面販賣，價格上最少差百分之二十。
4. 李先生公司的收入有一半是靠網路。
5. 上個月網購給李先生的公司帶來百分之二十二的收入。`,
    items: [
      { id: 'L9-WB-listen-B-1', question: '網路商品比店面賣得便宜，是因為品質比較差一點。', answer: 'X' },
      { id: 'L9-WB-listen-B-2', question: '李先生的公司經營網站的時間不算太長。', answer: 'O' },
      { id: 'L9-WB-listen-B-3', question: '一樣的商品在網路和店面販賣，價格上最少差百分之二十。', answer: 'X' },
      { id: 'L9-WB-listen-B-4', question: '李先生公司的收入有一半是靠網路。', answer: 'X' },
      { id: 'L9-WB-listen-B-5', question: '上個月網購給李先生的公司帶來百分之二十二的收入。', answer: 'X' }
    ]
  }
]
