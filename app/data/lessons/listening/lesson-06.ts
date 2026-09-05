import type { ListeningExercise } from '../../../../types/exercise'

export const listeningL6: ListeningExercise[] = [
  {
    id: 'L6-WB-listen-A',
    lessonId: 'L6',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '06-1',
    audioSrc: '/audio/workbook/06-1.mp3',
    prompt: 'Phần A · Nghe hội thoại rồi chọn đáp án đúng cho câu hỏi.',
    transcript: `1.
女：阿德真的很愛開玩笑，只要有他在的地方，大家都會笑個不停。
男：就是因為他那麼愛開玩笑，我才不喜歡他的。
問題：下面哪一個是對的？
A. 這位小姐不喜歡阿德開玩笑
B. 阿德不會開這位先生的玩笑
C. 這位先生不喜歡別人開玩笑

2.
女：我們老闆的條件非常好，又帥又有錢，怎麼連個女朋友也沒有？
男：他啊，什麼都好，就是個性很奇怪，所以大家都不太敢接近他。
問題：這位先生的意思是什麼？
A. 老闆只有個性奇怪這個問題
B. 老闆就是不讓別人接近他
C. 老闆什麼問題都沒有

3.
女：你的個性這麼好，又喜歡幫助別人，一定有人欣賞你，為什麼到現在還一個人生活？
男：像我這樣看天吃飯的人，是沒有人想跟我結婚的。
問題：這位先生可能是做什麼工作的？
A. 做麵包
B. 種水果
C. 玩樂團

4.
女：好久沒你的消息了，最近好嗎？
男：我最近倒楣死了！工作沒了不說，手機也掉了。
問題：這位先生怎麼了？
A. 不喜歡談他的工作
B. 丟了工作，手機也不見了
C. 忙著找他的手機

5.
女：公司旁邊的那家餐廳今天打折，我們去那裡吃吧！
男：那裡的菜又鹹又油膩，我寧可不吃飯，也不要去那裡吃。
問題：這位先生的意思是什麼？
A. 吃油膩的菜不如不吃
B. 他不餓，還不想吃飯
C. 他非去那裡吃飯不可`,
    items: [
      {
        id: 'L6-WB-listen-A-1',
        question: '下面哪一個是對的？',
        options: [
          { id: 'A', text: '這位小姐不喜歡阿德開玩笑' },
          { id: 'B', text: '阿德不會開這位先生的玩笑' },
          { id: 'C', text: '這位先生不喜歡別人開玩笑' }
        ],
        answer: 'C'
      },
      {
        id: 'L6-WB-listen-A-2',
        question: '這位先生的意思是什麼？',
        options: [
          { id: 'A', text: '老闆只有個性奇怪這個問題' },
          { id: 'B', text: '老闆就是不讓別人接近他' },
          { id: 'C', text: '老闆什麼問題都沒有' }
        ],
        answer: 'A'
      },
      {
        id: 'L6-WB-listen-A-3',
        question: '這位先生可能是做什麼工作的？',
        options: [
          { id: 'A', text: '做麵包' },
          { id: 'B', text: '種水果' },
          { id: 'C', text: '玩樂團' }
        ],
        answer: 'B'
      },
      {
        id: 'L6-WB-listen-A-4',
        question: '這位先生怎麼了？',
        options: [
          { id: 'A', text: '不喜歡談他的工作' },
          { id: 'B', text: '丟了工作，手機也不見了' },
          { id: 'C', text: '忙著找他的手機' }
        ],
        answer: 'B'
      },
      {
        id: 'L6-WB-listen-A-5',
        question: '這位先生的意思是什麼？',
        options: [
          { id: 'A', text: '吃油膩的菜不如不吃' },
          { id: 'B', text: '他不餓，還不想吃飯' },
          { id: 'C', text: '他非去那裡吃飯不可' }
        ],
        answer: 'A'
      }
    ]
  },
  {
    id: 'L6-WB-listen-B',
    lessonId: 'L6',
    section: 'listening',
    type: 'listening',
    format: 'true-false',
    audioTrack: '06-2',
    audioSrc: '/audio/workbook/06-2.mp3',
    prompt: 'Phần B · Nghe đoạn văn. Đúng chọn O, sai chọn X.',
    transcript: `我家有一片田，平常都是我爸爸一個人在照顧。為了省錢，他寧可自己辛苦一點，也不要花錢找人來幫他。他也自己做天然堆肥，因為這樣就不必花錢了。他還說，自己種菜和水果自己吃，就不必到市場上買了。我們開玩笑說，誰想賺我爸爸的錢，就是給自己找麻煩。

不過，我爸爸最近居然花錢去上課，學怎麼種水果，我們都嚇了一跳。他說，隨著氣候的變化，現在種水果、照顧水果的方式也不一樣了。還說他年紀大了，再不多學一點就落伍了。雖然我們都怕他太辛苦，不過既然他那麼喜歡，我們當然也都支持他。

1. 因為沒人幫他爸爸照顧他家的田，所以他爸爸覺得很辛苦。
2. 他爸爸自己做天然堆肥，是為了保護環境。
3. 他們沒想到他爸爸會花錢去上課。
4. 他爸爸認為現在氣候和以前不同，所以種水果的方法也不同了。
5. 他們不喜歡他爸爸這麼累，但是還是支持他。`,
    items: [
      { id: 'L6-WB-listen-B-1', question: '因為沒人幫他爸爸照顧他家的田，所以他爸爸覺得很辛苦。', answer: 'X' },
      { id: 'L6-WB-listen-B-2', question: '他爸爸自己做天然堆肥，是為了保護環境。', answer: 'X' },
      { id: 'L6-WB-listen-B-3', question: '他們沒想到他爸爸會花錢去上課。', answer: 'O' },
      { id: 'L6-WB-listen-B-4', question: '他爸爸認為現在氣候和以前不同，所以種水果的方法也不同了。', answer: 'O' },
      { id: 'L6-WB-listen-B-5', question: '他們不喜歡他爸爸這麼累，但是還是支持他。', answer: 'O' }
    ]
  }
]
