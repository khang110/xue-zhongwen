import type { ListeningExercise } from '../../../../types/exercise'

export const listeningL7: ListeningExercise[] = [
  {
    id: 'L7-WB-listen-A',
    lessonId: 'L7',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '07-1',
    audioSrc: '/audio/workbook/07-1.mp3',
    prompt: 'Phần A · Nghe câu dẫn rồi chọn câu đáp lại phù hợp.',
    transcript: `1.
男：這張照片你拍得真好，把我的狗拍得好可愛！
A. 這是最新型的手機，當然有照相功能
B. 你的狗常常亂叫，我很怕你的狗
C. 哪裡，亂拍的，希望你喜歡

2.
男：我們家有兩個電視，孩子各看各的，這樣才不會打起來。
A. 我覺得孩子一起看電視，他們會比較親
B. 孩子看電視，你會打他們啊？
C. 我們一家人都愛看連續劇

3.
男：從前的女人結了婚，只能住在先生家，就算是獨生女，也不能常常回家看父母。
A. 你女兒不小了，應該結婚了
B. 我不是獨生女，所以可以常常回家
C. 為什麼這樣對待女人？真不應該！

4.
男：你有那麼多衣服，為什麼穿來穿去只穿這幾件？
A. 我不買當季的款式，我怕撞衫
B. 因為別的衣服雖然漂亮，可是穿起來不舒服
C. 對啊，這麼多衣服，我都不知道要選哪一件

5.
女：我不要跟你去騎腳踏車，我上次騎腳踏車跌倒，痛死了，我不再騎了。
A. 別再跌倒了，小心一點
B. 我總是一個人騎腳踏車到處去逛逛
C. 別這樣，我會小心照顧你的，走吧！`,
    items: [
      {
        id: 'L7-WB-listen-A-1',
        question: '男：這張照片你拍得真好，把我的狗拍得好可愛！',
        options: [
          { id: 'A', text: '這是最新型的手機，當然有照相功能' },
          { id: 'B', text: '你的狗常常亂叫，我很怕你的狗' },
          { id: 'C', text: '哪裡，亂拍的，希望你喜歡' }
        ],
        answer: 'C'
      },
      {
        id: 'L7-WB-listen-A-2',
        question: '男：我們家有兩個電視，孩子各看各的，這樣才不會打起來。',
        options: [
          { id: 'A', text: '我覺得孩子一起看電視，他們會比較親' },
          { id: 'B', text: '孩子看電視，你會打他們啊？' },
          { id: 'C', text: '我們一家人都愛看連續劇' }
        ],
        answer: 'A'
      },
      {
        id: 'L7-WB-listen-A-3',
        question: '男：從前的女人結了婚，只能住在先生家，就算是獨生女，也不能常常回家看父母。',
        options: [
          { id: 'A', text: '你女兒不小了，應該結婚了' },
          { id: 'B', text: '我不是獨生女，所以可以常常回家' },
          { id: 'C', text: '為什麼這樣對待女人？真不應該！' }
        ],
        answer: 'C'
      },
      {
        id: 'L7-WB-listen-A-4',
        question: '男：你有那麼多衣服，為什麼穿來穿去只穿這幾件？',
        options: [
          { id: 'A', text: '我不買當季的款式，我怕撞衫' },
          { id: 'B', text: '因為別的衣服雖然漂亮，可是穿起來不舒服' },
          { id: 'C', text: '對啊，這麼多衣服，我都不知道要選哪一件' }
        ],
        answer: 'B'
      },
      {
        id: 'L7-WB-listen-A-5',
        question: '女：我不要跟你去騎腳踏車，我上次騎腳踏車跌倒，痛死了，我不再騎了。',
        options: [
          { id: 'A', text: '別再跌倒了，小心一點' },
          { id: 'B', text: '我總是一個人騎腳踏車到處去逛逛' },
          { id: 'C', text: '別這樣，我會小心照顧你的，走吧！' }
        ],
        answer: 'C'
      }
    ]
  },
  {
    id: 'L7-WB-listen-B',
    lessonId: 'L7',
    section: 'listening',
    type: 'listening',
    format: 'true-false',
    audioTrack: '07-2',
    audioSrc: '/audio/workbook/07-2.mp3',
    prompt: 'Phần B · Nghe câu chuyện. Đúng chọn O, sai chọn X.',
    transcript: `玉婷在單親家庭長大，現在二十八歲，因為單身的關係，一直跟媽媽住在一起。可是，最近媽媽交了一個男朋友，那個男人人長得帥，口才又好，媽媽很喜歡他。他沒有房子，想搬來跟媽媽同居。

玉婷覺得這個男人一來沒有很好的工作，二來不太可能負擔起養家的責任，因此反對。她建議媽媽跟那個男人各住各的，等那個男人有能力買房子了，再考慮搬過去同居。她還告訴媽媽，有個伴雖然很重要，可是適合的伴更重要。

1. 玉婷跟媽媽一起住，是因為不放心媽媽的關係。
2. 媽媽的男朋友想成家。
3. 玉婷認為那個男人要靠她媽媽。
4. 玉婷反對那個男的搬來一起住。
5. 玉婷希望她媽媽別找伴。`,
    items: [
      { id: 'L7-WB-listen-B-1', question: '玉婷跟媽媽一起住，是因為不放心媽媽的關係。', answer: 'X' },
      { id: 'L7-WB-listen-B-2', question: '媽媽的男朋友想成家。', answer: 'O' },
      { id: 'L7-WB-listen-B-3', question: '玉婷認為那個男人要靠她媽媽。', answer: 'O' },
      { id: 'L7-WB-listen-B-4', question: '玉婷反對那個男的搬來一起住。', answer: 'O' },
      { id: 'L7-WB-listen-B-5', question: '玉婷希望她媽媽別找伴。', answer: 'X' }
    ]
  }
]
