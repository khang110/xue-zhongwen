import type { ListeningExercise } from '../../../../types/exercise'

export const listeningL12: ListeningExercise[] = [
  {
    id: 'L12-WB-listen-A',
    lessonId: 'L12',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '12-1',
    audioSrc: '/audio/workbook/12-1.mp3',
    prompt: 'Phần A · Nghe hội thoại rồi chọn đáp án đúng cho câu hỏi.',
    transcript: `1.
男：我右手有一點痛，會不會是骨折？你想我要不要去照一下 X 光？
女：只不過是被腳踏車撞了一下，可能那麼嚴重嗎？
問題：這位小姐的意思是什麼？
A. 她很為這位先生擔心
B. 這位先生太小題大做了
C. 這位先生傷得真的很嚴重

2.
男：不是說可以打八五折嗎？怎麼帳單上還是原價？
女：廣告說的是八五折起，滿八千塊錢打九折，滿一萬塊才打八五折，你看錯了吧。
問題：這位先生可能買了多少錢的東西？
A. 不到八千塊
B. 一萬兩千塊
C. 九千六百塊

3.
女：你每天忙到這麼晚才回家，家裡大大小小的事全靠我一個人，我跟單親媽媽有什麼不同？
男：難道你要我辭掉工作？
問題：先生的意思是什麼？
A. 他不打算工作了
B. 太太要幫忙養家
C. 他不可能不工作

4.
男：我想跟你們談談開二手書店的事，我已經找好店面了。至於經費方面，暫時可能還要請爸爸媽媽你們多多支持。
女：這件事等你爸爸回來，由他決定吧。
問題：媽媽的意思是什麼？
A. 錢的問題得跟爸爸商量
B. 父母會拿錢支持兒子開書店
C. 爸爸反對兒子開書店

5.
女：李先生從政以後，連任了四屆的民意代表，他是怎麼做到的？
男：他總是為弱勢家庭反映他們的需求，服務相當不錯。
問題：李先生是一個什麼樣的人？
A. 總是落選的人
B. 他的家庭很弱勢
C. 他常幫助弱勢的選民`,
    items: [
      {
        id: 'L12-WB-listen-A-1',
        question: '這位小姐的意思是什麼？',
        options: [
          { id: 'A', text: '她很為這位先生擔心' },
          { id: 'B', text: '這位先生太小題大做了' },
          { id: 'C', text: '這位先生傷得真的很嚴重' }
        ],
        answer: 'B'
      },
      {
        id: 'L12-WB-listen-A-2',
        question: '這位先生可能買了多少錢的東西？',
        options: [
          { id: 'A', text: '不到八千塊' },
          { id: 'B', text: '一萬兩千塊' },
          { id: 'C', text: '九千六百塊' }
        ],
        answer: 'A'
      },
      {
        id: 'L12-WB-listen-A-3',
        question: '先生的意思是什麼？',
        options: [
          { id: 'A', text: '他不打算工作了' },
          { id: 'B', text: '太太要幫忙養家' },
          { id: 'C', text: '他不可能不工作' }
        ],
        answer: 'C'
      },
      {
        id: 'L12-WB-listen-A-4',
        question: '媽媽的意思是什麼？',
        options: [
          { id: 'A', text: '錢的問題得跟爸爸商量' },
          { id: 'B', text: '父母會拿錢支持兒子開書店' },
          { id: 'C', text: '爸爸反對兒子開書店' }
        ],
        answer: 'A'
      },
      {
        id: 'L12-WB-listen-A-5',
        question: '李先生是一個什麼樣的人？',
        options: [
          { id: 'A', text: '總是落選的人' },
          { id: 'B', text: '他的家庭很弱勢' },
          { id: 'C', text: '他常幫助弱勢的選民' }
        ],
        answer: 'C'
      }
    ]
  },
  {
    id: 'L12-WB-listen-B',
    lessonId: 'L12',
    section: 'listening',
    type: 'listening',
    format: 'true-false',
    audioTrack: '12-2',
    audioSrc: '/audio/workbook/12-2.mp3',
    prompt: 'Phần B · Nghe đoạn văn. Đúng chọn O, sai chọn X.',
    transcript: `小陳很小的時候父母就過世了，他由爺爺奶奶照顧長大。中學的時候，他是一個喜歡唱歌的孩子，參加學校的音樂社團。沒想到離開老家到城市上大學以後，卻成為熱衷政治的年輕人。不但常跟朋友聚在一起討論政治，更積極參加各種各樣的社會運動。

今年六月，小陳由於反對政府的經濟政策，就跟許多年輕人一起舉辦遊行，透過這個辦法表達意見。很多人問他，既然有民意代表，為什麼不讓民意代表來跟政府反映大家的意見呢？小陳的回答是：現在的民意代表關心的都只是自己政黨的利益，完全沒想到要照顧人民，所以人民不得不想法子為自己說話。

1. 小陳小的時候住在阿姨家。
2. 小陳大學以後才開始對政治有興趣的。
3. 小陳舉辦遊行的目的是為了支持政府的政策。
4. 小陳覺得所有的民意代表都只關心政黨利益。`,
    items: [
      { id: 'L12-WB-listen-B-1', question: '小陳小的時候住在阿姨家。', answer: 'X' },
      { id: 'L12-WB-listen-B-2', question: '小陳大學以後才開始對政治有興趣的。', answer: 'O' },
      { id: 'L12-WB-listen-B-3', question: '小陳舉辦遊行的目的是為了支持政府的政策。', answer: 'X' },
      { id: 'L12-WB-listen-B-4', question: '小陳覺得所有的民意代表都只關心政黨利益。', answer: 'O' }
    ]
  }
]
