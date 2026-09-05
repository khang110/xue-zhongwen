import type { ListeningExercise } from '../../../../types/exercise'

export const listeningL4: ListeningExercise[] = [
  {
    id: 'L4-WB-listen-A',
    lessonId: 'L4',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '04-1',
    audioSrc: '/audio/workbook/04-1.mp3',
    prompt: 'Phần A · Nghe hội thoại rồi chọn đáp án đúng cho câu hỏi.',
    transcript: `1.
男：元宵很好吃，可惜我不能多吃。
女：我從來沒吃過。不過，聽我的美國朋友說過，他們都不太喜歡。
問題：這位小姐的意思是什麼？
A. 她不知道元宵是什麼
B. 她很想嘗嘗元宵
C. 她不知道元宵的味道怎麼樣

2.
男：那個風景區無聊死了！
女：我哥騙人嗎？他一直跟我說那個地方非去不可。
問題：這位小姐的哥哥覺得那個風景區怎麼樣？
A. 一定要去
B. 無聊死了
C. 不可以去

3.
男：那家店很值得去，食物又好吃又便宜。
女：是啊，不但賣道地的美食，老闆還會跟你談歷史呢，非常有意思。
問題：他們說那家店怎麼樣？
A. 食物好吃，老闆也很好
B. 食物便宜，但是不道地
C. 每樣食物都很有歷史

4.
男：你的朋友真有耐心，跟我解釋得這麼清楚。
女：他不是有耐心，而是怕麻煩。因為沒說清楚的話，你還會再來找他。
問題：這位小姐的意思是她的朋友怎麼樣？
A. 喜歡幫助別人
B. 討厭別人麻煩他
C. 非常有耐心

5.
男：這條巷子有很多古老的房子，我真羨慕住在這裏的人。
女：你知道嗎？對這裏的人來說，保護這些房子並不容易，而且常有觀光客來，也讓這裏變得有點吵。
問題：他們的意思是什麼？
A. 不管是誰，都想住在那裡
B. 沒有人想保護那些古老的房子
C. 那裡的人不太喜歡觀光客來`,
    items: [
      {
        id: 'L4-WB-listen-A-1',
        question: '這位小姐的意思是什麼？',
        options: [
          { id: 'A', text: '她不知道元宵是什麼' },
          { id: 'B', text: '她很想嘗嘗元宵' },
          { id: 'C', text: '她不知道元宵的味道怎麼樣' }
        ],
        answer: 'C'
      },
      {
        id: 'L4-WB-listen-A-2',
        question: '這位小姐的哥哥覺得那個風景區怎麼樣？',
        options: [
          { id: 'A', text: '一定要去' },
          { id: 'B', text: '無聊死了' },
          { id: 'C', text: '不可以去' }
        ],
        answer: 'A'
      },
      {
        id: 'L4-WB-listen-A-3',
        question: '他們說那家店怎麼樣？',
        options: [
          { id: 'A', text: '食物好吃，老闆也很好' },
          { id: 'B', text: '食物便宜，但是不道地' },
          { id: 'C', text: '每樣食物都很有歷史' }
        ],
        answer: 'A'
      },
      {
        id: 'L4-WB-listen-A-4',
        question: '這位小姐的意思是她的朋友怎麼樣？',
        options: [
          { id: 'A', text: '喜歡幫助別人' },
          { id: 'B', text: '討厭別人麻煩他' },
          { id: 'C', text: '非常有耐心' }
        ],
        answer: 'B'
      },
      {
        id: 'L4-WB-listen-A-5',
        question: '他們的意思是什麼？',
        options: [
          { id: 'A', text: '不管是誰，都想住在那裡' },
          { id: 'B', text: '沒有人想保護那些古老的房子' },
          { id: 'C', text: '那裡的人不太喜歡觀光客來' }
        ],
        answer: 'C'
      }
    ]
  },
  {
    id: 'L4-WB-listen-B',
    lessonId: 'L4',
    section: 'listening',
    type: 'listening',
    format: 'true-false',
    audioTrack: '04-2',
    audioSrc: '/audio/workbook/04-2.mp3',
    prompt: 'Phần B · Nghe đoạn văn. Đúng chọn O, sai chọn X.',
    transcript: `說到北投，大家大概都會馬上想到溫泉。大家都知道，來這裡不但可以泡溫泉，還可以參觀很多歷史古蹟。不過對我來說，北投不是一個風景區，而是一個生活的好地方。每天下了捷運以後，走在窄窄的街道上，欣賞那些古老的房子、招牌，走路的速度就慢了下來，讓我忘了這裡是繁華大城市的一部分。除了古蹟，北投也有很多有名的小吃。這裡有很多二、三十年的老店。北投人對吃很講究，所以食物不好吃，店是不可能開那麼久的。不但這樣，去這些老店吃飯的時候，還常看到老闆跟客人聊天，很有傳統人情味。有機會來北投的話，除了泡泡溫泉，也別忘了來逛逛這些小巷子，更不能錯過當地的美食。

1. 他是一個喜歡北投的觀光客。
2. 他喜歡看北投的老房子。
3. 北投適合觀光，不適合住在那裡。
4. 他認為北投當地人很重視吃。
5. 他認為北投這些老店的老闆很熱情。`,
    items: [
      { id: 'L4-WB-listen-B-1', question: '他是一個喜歡北投的觀光客。', answer: 'X' },
      { id: 'L4-WB-listen-B-2', question: '他喜歡看北投的老房子。', answer: 'O' },
      { id: 'L4-WB-listen-B-3', question: '北投適合觀光，不適合住在那裡。', answer: 'X' },
      { id: 'L4-WB-listen-B-4', question: '他認為北投當地人很重視吃。', answer: 'O' },
      { id: 'L4-WB-listen-B-5', question: '他認為北投這些老店的老闆很熱情。', answer: 'O' }
    ]
  }
]
