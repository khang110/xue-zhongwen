import type { ListeningExercise } from '../../../../types/exercise'

export const listeningL2: ListeningExercise[] = [
  {
    id: 'L2-WB-listen-A',
    lessonId: 'L2',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '02-1',
    audioSrc: '/audio/workbook/02-1.mp3',
    prompt: 'Phần A · Nghe hội thoại rồi chọn đáp án đúng cho câu hỏi.',
    transcript: `1.
女：你不是自己有電腦嗎？為什麼要借學校的？
男：我的電腦最近常自動關機，送去修理了。修不好的話，就只好買新的了。
問題：這位先生的意思是什麼？
A. 他喜歡修理電腦
B. 他還不想買新電腦
C. 他想把電腦送給別人

2.
女：你用手機上網看影片，很貴吧？
男：別擔心，我的手機網路是吃到飽的。
問題：這位先生的意思是什麼？
A. 他不必注意用了多長時間的網路
B. 他用手機上網找吃到飽的餐廳
C. 他常一邊吃飯一邊玩手機

3.
女：這是我昨天在這裡買的隨身碟，我想退，發票在這裡。
男：小姐，不好意思，你弄錯了。這不是我們店的發票，所以我們不能讓你退換。
問題：這位先生的意思是什麼？
A. 這不是買隨身碟的發票
B. 不管有什麼問題都不能退
C. 隨身碟不是在這家店買的

4.
女：你臉色看起來不太好，最近很忙嗎？
男：最近有很多顧客打電話來客服中心，抱怨公司的新商品有問題。老闆叫我快去把問題弄清楚，然後寫成報告給他。
問題：這位先生最近為什麼很忙？
A. 他的老闆問他很多問題
B. 他忙著寫跟新商品有關的報告
C. 他的顧客喜歡打電話問他問題

5.
女：你這件西裝外套顏色不錯，摸起來也很舒服。
男：給你先生買一件吧！這件原價一萬塊，打完折是七千五，不貴。再說，你先生剛到那麼大的公司工作，也需要多幾件正式的衣服吧。
問題：這位先生為什麼認為小姐應該買這件外套？
A. 太便宜了，很值得買
B. 顏色非常適合她先生
C. 她先生應該需要這樣的衣服`,
    items: [
      {
        id: 'L2-WB-listen-A-1',
        question: '這位先生的意思是什麼？',
        options: [
          { id: 'A', text: '他喜歡修理電腦' },
          { id: 'B', text: '他還不想買新電腦' },
          { id: 'C', text: '他想把電腦送給別人' }
        ],
        answer: 'B'
      },
      {
        id: 'L2-WB-listen-A-2',
        question: '這位先生的意思是什麼？',
        options: [
          { id: 'A', text: '他不必注意用了多長時間的網路' },
          { id: 'B', text: '他用手機上網找吃到飽的餐廳' },
          { id: 'C', text: '他常一邊吃飯一邊玩手機' }
        ],
        answer: 'A'
      },
      {
        id: 'L2-WB-listen-A-3',
        question: '這位先生的意思是什麼？',
        options: [
          { id: 'A', text: '這不是買隨身碟的發票' },
          { id: 'B', text: '不管有什麼問題都不能退' },
          { id: 'C', text: '隨身碟不是在這家店買的' }
        ],
        answer: 'C'
      },
      {
        id: 'L2-WB-listen-A-4',
        question: '這位先生最近為什麼很忙？',
        options: [
          { id: 'A', text: '他的老闆問他很多問題' },
          { id: 'B', text: '他忙著寫跟新商品有關的報告' },
          { id: 'C', text: '他的顧客喜歡打電話問他問題' }
        ],
        answer: 'B'
      },
      {
        id: 'L2-WB-listen-A-5',
        question: '這位先生為什麼認為小姐應該買這件外套？',
        options: [
          { id: 'A', text: '太便宜了，很值得買' },
          { id: 'B', text: '顏色非常適合她先生' },
          { id: 'C', text: '她先生應該需要這樣的衣服' }
        ],
        answer: 'C'
      }
    ]
  },
  {
    id: 'L2-WB-listen-B',
    lessonId: 'L2',
    section: 'listening',
    type: 'listening',
    format: 'true-false',
    audioTrack: '02-2',
    audioSrc: '/audio/workbook/02-2.mp3',
    prompt: 'Phần B · Nghe hội thoại. Đúng chọn O, sai chọn X.',
    transcript: `男：你怎麼了？
女：我要搬家了，可是我還是得付下個月的房租。
男：為什麼？
女：因為按照規定，不續租的話，最晚在合約到期以前的三十天要告訴房東。可是我晚了一天才說，所以……
男：才晚了一天就要多付一個月的房租啊？
女：是啊，不管我跟房東說什麼，他都不答應，所以我只好付啊。
男：並不是我想罵你，可是你真的太糊塗了。
女：我知道，以後我一定會注意的。
男：不過，不管怎麼樣，你都得付下個月的房租，你要不要考慮再多住一個月啊？
女：你說得很對。那你要不要幫我付我新家的房租啊？

1. 這位小姐沒有早一點告訴房東她要搬家。
2. 這位先生覺得只晚一天不應該多付一個月的房租。
3. 房東可能會讓這位小姐少付一個月的房租。
4. 因為這位小姐太糊塗了，所以這位先生罵了她。
5. 這位小姐決定不搬家了。`,
    items: [
      { id: 'L2-WB-listen-B-1', question: '這位小姐沒有早一點告訴房東她要搬家。', answer: 'O' },
      { id: 'L2-WB-listen-B-2', question: '這位先生覺得只晚一天不應該多付一個月的房租。', answer: 'O' },
      { id: 'L2-WB-listen-B-3', question: '房東可能會讓這位小姐少付一個月的房租。', answer: 'X' },
      { id: 'L2-WB-listen-B-4', question: '因為這位小姐太糊塗了，所以這位先生罵了她。', answer: 'X' },
      { id: 'L2-WB-listen-B-5', question: '這位小姐決定不搬家了。', answer: 'X' }
    ]
  }
]
