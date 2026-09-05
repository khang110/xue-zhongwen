import type { ListeningExercise } from '../../../../types/exercise'

export const listeningL11: ListeningExercise[] = [
  {
    id: 'L11-WB-listen-A',
    lessonId: 'L11',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '11-1',
    audioSrc: '/audio/workbook/11-1.mp3',
    prompt: 'Phần A · Nghe hội thoại rồi chọn đáp án đúng cho câu hỏi.',
    transcript: `1.
男：我只是忘了女朋友的生日，她為什麼那麼生氣啊？
女：你到底懂不懂女生心裡想什麼呀？難怪她會生氣。
問題：下面哪個是對的？
A. 這位先生的女朋友動不動就生氣
B. 小姐覺得這位先生的女朋友不應該生氣
C. 這位先生不懂女朋友為什麼那麼生氣

2.
男：小張的爺爺奶奶為什麼離開上海老家，到臺灣來了？
女：因為內戰的關係，為了安全，爺爺不得不帶著家人到臺灣來。
問題：下面哪個是對的？
A. 小張的爺爺奶奶並不想離開老家
B. 小張的爺爺奶奶是從香港來的
C. 小張的爺爺奶奶很高興能到臺灣來玩

3.
男：小王對穿衣服不太講究，可是對吃卻很講究。
女：這麼說，他花很多錢吃美食囉？
問題：下面哪個是對的？
A. 小王的衣服都是最流行的
B. 小王非常重視怎麼吃、吃什麼
C. 對吃的和穿的，小王都不想花太多錢

4.
女：聽說最近有一家新的餐廳非常受歡迎，我們一起去吧！
男：可是新聞說要等很久，甚至要等一兩個小時，還是過幾個月再去吧。
問題：這位先生覺得怎麼樣？
A. 為了吃美食，等多久都可以
B. 為了吃飯，等一兩個小時太久了
C. 寧可等幾個月，也不想跟這位小姐一起去

5.
男：你怎麼到現在還沒吃中飯？
女：我今天一起床就忙著做蘿蔔糕，接著又做燒餅，到現在連一口水都還沒喝呢。
問題：下面哪一個是對的？
A. 他們說話的時間可能是上午
B. 這位小姐現在要開始做燒餅了
C. 這位小姐因為做蘿蔔糕和燒餅，沒時間喝水`,
    items: [
      {
        id: 'L11-WB-listen-A-1',
        question: '下面哪個是對的？',
        options: [
          { id: 'A', text: '這位先生的女朋友動不動就生氣' },
          { id: 'B', text: '小姐覺得這位先生的女朋友不應該生氣' },
          { id: 'C', text: '這位先生不懂女朋友為什麼那麼生氣' }
        ],
        answer: 'C'
      },
      {
        id: 'L11-WB-listen-A-2',
        question: '下面哪個是對的？',
        options: [
          { id: 'A', text: '小張的爺爺奶奶並不想離開老家' },
          { id: 'B', text: '小張的爺爺奶奶是從香港來的' },
          { id: 'C', text: '小張的爺爺奶奶很高興能到臺灣來玩' }
        ],
        answer: 'A'
      },
      {
        id: 'L11-WB-listen-A-3',
        question: '下面哪個是對的？',
        options: [
          { id: 'A', text: '小王的衣服都是最流行的' },
          { id: 'B', text: '小王非常重視怎麼吃、吃什麼' },
          { id: 'C', text: '對吃的和穿的，小王都不想花太多錢' }
        ],
        answer: 'B'
      },
      {
        id: 'L11-WB-listen-A-4',
        question: '這位先生覺得怎麼樣？',
        options: [
          { id: 'A', text: '為了吃美食，等多久都可以' },
          { id: 'B', text: '為了吃飯，等一兩個小時太久了' },
          { id: 'C', text: '寧可等幾個月，也不想跟這位小姐一起去' }
        ],
        answer: 'B'
      },
      {
        id: 'L11-WB-listen-A-5',
        question: '下面哪一個是對的？',
        options: [
          { id: 'A', text: '他們說話的時間可能是上午' },
          { id: 'B', text: '這位小姐現在要開始做燒餅了' },
          { id: 'C', text: '這位小姐因為做蘿蔔糕和燒餅，沒時間喝水' }
        ],
        answer: 'C'
      }
    ]
  },
  {
    id: 'L11-WB-listen-B',
    lessonId: 'L11',
    section: 'listening',
    type: 'listening',
    format: 'multiple-choice',
    audioTrack: '11-2',
    audioSrc: '/audio/workbook/11-2.mp3',
    prompt: 'Phần B · Nghe đoạn văn rồi chọn đáp án đúng cho câu hỏi.',
    transcript: `小吃是一種跟當地文化、生活有關的美食，常常是利用當地出產的食材做成的。由於每個地方出產的東西不同，各地的小吃也各有各的特色。比方說，客家人比較多的地方，很容易就能找到用蘿蔔乾做成的美食；漢人愛吃豬肉，像小籠包、包子這樣用豬肉做成的小吃種類也相當多。不過，臺灣四邊都是海，所以海鮮還是最常見的食材。

一般來說，小吃多半是從人多的地方發展起來的。人多代表商機。在以前的移民社會，廟不但是一個地方的宗教中心，更是生活的中心。除了來這裡拜神、請神給家人帶來平安以外，大家也來這裡舉辦活動、買賣或交換商品，因此吸引了許多人來廟的旁邊擺攤子、賣小吃。慢慢地，廟的旁邊就變成了當地重要的美食中心。在臺灣最早開始發展的城市——臺南，在古老的廟旁邊就有許多知名的小吃攤。你可以參觀古蹟以後，接著去享受道地美食，兩個都不能錯過。

1. 為什麼小吃能代表當地文化？
2. 根據這篇文章，臺灣小吃最普遍的食材是什麼？
3. 以前的商業中心多半在哪裡？
4. 對以前的人來說，廟為什麼很重要？因為它是：
5. 這篇文章建議我們去臺南做什麼？`,
    items: [
      {
        id: 'L11-WB-listen-B-1',
        question: '為什麼小吃能代表當地文化？',
        options: [
          { id: 'A', text: '因為小吃的價格都不高' },
          { id: 'B', text: '因為小吃多半是海鮮做的' },
          { id: 'C', text: '因為使用當地出產的食材' }
        ],
        answer: 'C'
      },
      {
        id: 'L11-WB-listen-B-2',
        question: '根據這篇文章，臺灣小吃最普遍的食材是什麼？',
        options: [
          { id: 'A', text: '海鮮' },
          { id: 'B', text: '蘿蔔乾' },
          { id: 'C', text: '豬肉' }
        ],
        answer: 'A'
      },
      {
        id: 'L11-WB-listen-B-3',
        question: '以前的商業中心多半在哪裡？',
        options: [
          { id: 'A', text: '海邊' },
          { id: 'B', text: '廟旁邊' },
          { id: 'C', text: '古蹟裡面' }
        ],
        answer: 'B'
      },
      {
        id: 'L11-WB-listen-B-4',
        question: '對以前的人來說，廟為什麼很重要？因為它是：',
        options: [
          { id: 'A', text: '舉辦活動的地方' },
          { id: 'B', text: '食材的產地' },
          { id: 'C', text: '城市的中心' }
        ],
        answer: 'C'
      },
      {
        id: 'L11-WB-listen-B-5',
        question: '這篇文章建議我們去臺南做什麼？',
        options: [
          { id: 'A', text: '去廟裡拜拜並且了解當地文化' },
          { id: 'B', text: '先參加活動，再參觀古蹟' },
          { id: 'C', text: '參觀古蹟以及享受美食' }
        ],
        answer: 'C'
      }
    ]
  }
]
