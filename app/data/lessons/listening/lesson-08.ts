import type { ListeningExercise } from '../../../../types/exercise'

export const listeningL8: ListeningExercise[] = [
  {
    id: 'L8-WB-listen-A',
    lessonId: 'L8',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '08-1',
    audioSrc: '/audio/workbook/08-1.mp3',
    prompt: 'Phần A · Nghe hội thoại rồi chọn đáp án đúng cho câu hỏi.',
    transcript: `1.
女：小王最近找工作找得怎麼樣了？
男：不太順利，不是直接被拒絕，就是一點消息都沒有。
問題：下面哪一個是對的？
A. 小王一直沒找到工作
B. 小王順利找到工作了
C. 最近都沒有小王的消息

2.
女：兒子每天都在打電玩不讀書，你要不要跟他談一談？
男：他已經大學三年級了，你就算了，別替他擔心了。
問題：爸爸打算怎麼做？
A. 讓媽媽去跟兒子談
B. 讓兒子自己安排自己的生活
C. 決定罵兒子一頓

3.
男：從明天起，我要每天運動。
女：我早就開始每天晚上都去運動了，你一起來吧！
問題：下面哪一個是對的？
A. 先生已經有每天運動的習慣了
B. 小姐每天早上去運動
C. 先生打算從明天開始每天運動

4.
男：最近失業率很高，我找工作找了好久都找不到。
女：其實，最近失業率已經比以前低很多了，你只是運氣不好，再等一等吧！
問題：下面哪一個是對的？
A. 最近失業率比以前更高
B. 小姐覺得先生因為運氣不好而找不到工作
C. 只要失業率低，這位先生就能找到工作

5.
男：聽說現在臺灣的出生率很低，不到百分之一。
女：太誇張了！這樣一來，臺灣將來的發展恐怕會受到影響吧。
問題：下面哪一個是對的？
A. 現在大部分的臺灣人都生很多孩子
B. 小姐認為先生說的話太誇張，不可能是真的
C. 小姐擔心將來臺灣因為出生率太低而出問題`,
    items: [
      {
        id: 'L8-WB-listen-A-1',
        question: '下面哪一個是對的？',
        options: [
          { id: 'A', text: '小王一直沒找到工作' },
          { id: 'B', text: '小王順利找到工作了' },
          { id: 'C', text: '最近都沒有小王的消息' }
        ],
        answer: 'A'
      },
      {
        id: 'L8-WB-listen-A-2',
        question: '爸爸打算怎麼做？',
        options: [
          { id: 'A', text: '讓媽媽去跟兒子談' },
          { id: 'B', text: '讓兒子自己安排自己的生活' },
          { id: 'C', text: '決定罵兒子一頓' }
        ],
        answer: 'B'
      },
      {
        id: 'L8-WB-listen-A-3',
        question: '下面哪一個是對的？',
        options: [
          { id: 'A', text: '先生已經有每天運動的習慣了' },
          { id: 'B', text: '小姐每天早上去運動' },
          { id: 'C', text: '先生打算從明天開始每天運動' }
        ],
        answer: 'C'
      },
      {
        id: 'L8-WB-listen-A-4',
        question: '下面哪一個是對的？',
        options: [
          { id: 'A', text: '最近失業率比以前更高' },
          { id: 'B', text: '小姐覺得先生因為運氣不好而找不到工作' },
          { id: 'C', text: '只要失業率低，這位先生就能找到工作' }
        ],
        answer: 'B'
      },
      {
        id: 'L8-WB-listen-A-5',
        question: '下面哪一個是對的？',
        options: [
          { id: 'A', text: '現在大部分的臺灣人都生很多孩子' },
          { id: 'B', text: '小姐認為先生說的話太誇張，不可能是真的' },
          { id: 'C', text: '小姐擔心將來臺灣因為出生率太低而出問題' }
        ],
        answer: 'C'
      }
    ]
  },
  {
    id: 'L8-WB-listen-B',
    lessonId: 'L8',
    section: 'listening',
    type: 'listening',
    format: 'true-false',
    audioTrack: '08-2',
    audioSrc: '/audio/workbook/08-2.mp3',
    prompt: 'Phần B · Nghe đoạn văn. Đúng chọn O, sai chọn X.',
    transcript: `王美美是個單身貴族，她的工作能力很強，而且非常努力。她每天除了睡覺以外，就是在公司工作，連週末也很少休息，幾乎沒有自己的生活。老闆非常信任她，她也工作得很快樂，從來不覺得辛苦。

可是，從去年起，她的健康出了問題，醫生告訴她，她生活太緊張，壓力太大，應該好好學習放鬆自己，最好能休息一段時間，要不然的話，身體會受不了。可是這樣一來，她恐怕就得放棄自己的夢想了。經過幾天的考慮，她告訴自己：「算了，還是身體最重要，沒有健康就什麼都沒有了。」

1. 王美美週末不是在公司工作，而是在家休息。
2. 王美美把自己的生活安排得很好。
3. 王美美因為不想放棄夢想，而不去看醫生。
4. 王美美最後決定放棄工作。
5. 王美美明白了工作不是生活的全部。`,
    items: [
      { id: 'L8-WB-listen-B-1', question: '王美美週末不是在公司工作，而是在家休息。', answer: 'X' },
      { id: 'L8-WB-listen-B-2', question: '王美美把自己的生活安排得很好。', answer: 'X' },
      { id: 'L8-WB-listen-B-3', question: '王美美因為不想放棄夢想，而不去看醫生。', answer: 'X' },
      { id: 'L8-WB-listen-B-4', question: '王美美最後決定放棄工作。', answer: 'X' },
      { id: 'L8-WB-listen-B-5', question: '王美美明白了工作不是生活的全部。', answer: 'O' }
    ]
  }
]
