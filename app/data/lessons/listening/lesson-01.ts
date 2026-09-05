import type { ListeningExercise } from '../../../../types/exercise'

export const listeningL1: ListeningExercise[] = [
  {
    id: 'L1-WB-listen-A',
    lessonId: 'L1',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '01-1',
    audioSrc: '/audio/workbook/01-1.mp3',
    prompt: 'Phần A · Nghe hội thoại rồi chọn đáp án đúng cho câu hỏi.',
    transcript: `1.
男：時間過得好快，你已經要回國了。
女：是啊，好不容易習慣了這裡的環境，就要離開了。
問題：這位小姐怎麼樣？
A. 很快就習慣了這裡的環境
B. 很久才習慣這裡的環境
C. 一點也不習慣這裡的環境

2.
男：現在還不到八點，你今天怎麼來得這麼早？
女：準備考試啊！
問題：這位小姐可能是什麼時候來學校的？
A. 7:50
B. 8:00
C. 8:10

3.
男：這一個問題我不太懂，可以幫我一下嗎？
女：這個是……啊！我差一點忘了我們要寫這個作業，謝謝你！
問題：這位小姐的意思是什麼？
A. 她不知道怎麼寫這個作業
B. 這個作業她已經寫完了
C. 她現在才想起來要寫這個作業

4.
男：你上次申請的那個工作有消息了嗎？
女：我想恐怕是沒希望了，我得再找找別的機會。
問題：下面哪一個是對的？
A. 這位小姐準備找別的工作
B. 這位先生覺得小姐找不到工作
C. 這位小姐不希望去那家公司工作

5.
男：小王的口才很好，可是個性好像不太好，我看他沒什麼朋友。
女：對啊，他總是說生氣就生氣，誰也沒辦法。
問題：這位小姐覺得小王怎麼樣？
A. 很少生氣
B. 常常生氣
C. 沒生過氣`,
    items: [
      {
        id: 'L1-WB-listen-A-1',
        question: '這位小姐怎麼樣？',
        options: [
          { id: 'A', text: '很快就習慣了這裡的環境' },
          { id: 'B', text: '很久才習慣這裡的環境' },
          { id: 'C', text: '一點也不習慣這裡的環境' }
        ],
        answer: 'B'
      },
      {
        id: 'L1-WB-listen-A-2',
        question: '這位小姐可能是什麼時候來學校的？',
        options: [
          { id: 'A', text: '7:50' },
          { id: 'B', text: '8:00' },
          { id: 'C', text: '8:10' }
        ],
        answer: 'A'
      },
      {
        id: 'L1-WB-listen-A-3',
        question: '這位小姐的意思是什麼？',
        options: [
          { id: 'A', text: '她不知道怎麼寫這個作業' },
          { id: 'B', text: '這個作業她已經寫完了' },
          { id: 'C', text: '她現在才想起來要寫這個作業' }
        ],
        answer: 'C'
      },
      {
        id: 'L1-WB-listen-A-4',
        question: '下面哪一個是對的？',
        options: [
          { id: 'A', text: '這位小姐準備找別的工作' },
          { id: 'B', text: '這位先生覺得小姐找不到工作' },
          { id: 'C', text: '這位小姐不希望去那家公司工作' }
        ],
        answer: 'A'
      },
      {
        id: 'L1-WB-listen-A-5',
        question: '這位小姐覺得小王怎麼樣？',
        options: [
          { id: 'A', text: '很少生氣' },
          { id: 'B', text: '常常生氣' },
          { id: 'C', text: '沒生過氣' }
        ],
        answer: 'B'
      }
    ]
  },
  {
    id: 'L1-WB-listen-B',
    lessonId: 'L1',
    section: 'listening',
    type: 'listening',
    format: 'true-false',
    audioTrack: '01-2',
    audioSrc: '/audio/workbook/01-2.mp3',
    prompt: 'Phần B · Nghe hội thoại. Đúng chọn O, sai chọn X.',
    transcript: `女：聽說陳教授教書教得很好，我下學期想選他的課，你呢？
男：我對他教的課也有興趣，可是我也聽說他很嚴，選他的課恐怕壓力會太大。
女：我也擔心這個問題，成績不好的話，不能申請獎學金。
男：我這學期每一個課壓力都很大，常常熬夜念書，所以下學期想選輕鬆一點的課。
女：對啊，我也是。這學期我一直擔心有一個課可能會被當。
男：那我們選王教授的課吧！他的課又輕鬆又好玩，所以一直很熱門。
女：好啊，說選就選，現在就上網選課吧！慢一點恐怕就沒有位子了。

1. 他們想選陳教授的課，可是沒位子了。
2. 這位小姐覺得成績非常重要。
3. 這位先生這學期不太用功。
4. 這位小姐這學期有一個課被當了。
5. 他們最後決定選王教授的課。`,
    items: [
      { id: 'L1-WB-listen-B-1', question: '他們想選陳教授的課，可是沒位子了。', answer: 'X' },
      { id: 'L1-WB-listen-B-2', question: '這位小姐覺得成績非常重要。', answer: 'O' },
      { id: 'L1-WB-listen-B-3', question: '這位先生這學期不太用功。', answer: 'X' },
      { id: 'L1-WB-listen-B-4', question: '這位小姐這學期有一個課被當了。', answer: 'X' },
      { id: 'L1-WB-listen-B-5', question: '他們最後決定選王教授的課。', answer: 'O' }
    ]
  }
]
