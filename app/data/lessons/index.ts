import type { Lesson, LessonMeta } from '../../../types/lesson'
import { lesson01 } from './lesson-01'
import { lesson02 } from './lesson-02'
import { lesson03 } from './lesson-03'

/** Bài chưa nhập liệu - chỉ có tên bài để hiển thị trên trang chủ, khoá "coming-soon". */
function stubLesson(meta: Omit<LessonMeta, 'status'>): Lesson {
  return {
    ...meta,
    status: 'coming-soon',
    dialogues: [],
    vocab: [],
    grammar: [],
    workbookExercises: []
  }
}

const upcoming: Lesson[] = [
  stubLesson({ id: 'L4', number: 4, titleTraditional: '我愛台灣的人情味', titleSimplified: '我爱台湾的人情味', titlePinyin: 'Wǒ ài Táiwān de rénqíngwèi', titleVi: 'Tôi yêu sự ấm áp tình người ở Đài Loan' }),
  stubLesson({ id: 'L5', number: 5, titleTraditional: '現在流行什麼？', titleSimplified: '现在流行什么？', titlePinyin: 'Xiànzài liúxíng shénme?', titleVi: 'Bây giờ đang thịnh hành gì?' }),
  stubLesson({ id: 'L6', number: 6, titleTraditional: '到鄉下住一晚！', titleSimplified: '到乡下住一晚！', titlePinyin: 'Dào xiāngxià zhù yì wǎn!', titleVi: 'Về nông thôn ở một đêm!' }),
  stubLesson({ id: 'L7', number: 7, titleTraditional: '我最親的家「人」', titleSimplified: '我最亲的家「人」', titlePinyin: 'Wǒ zuì qīn de jiā "rén"', titleVi: 'Người thân thiết nhất trong "nhà" tôi' }),
  stubLesson({ id: 'L8', number: 8, titleTraditional: '我想做自己', titleSimplified: '我想做自己', titlePinyin: 'Wǒ xiǎng zuò zìjǐ', titleVi: 'Tôi muốn là chính mình' }),
  stubLesson({ id: 'L9', number: 9, titleTraditional: '網購時代', titleSimplified: '网购时代', titlePinyin: 'Wǎnggòu shídài', titleVi: 'Thời đại mua sắm trực tuyến' }),
  stubLesson({ id: 'L10', number: 10, titleTraditional: '我住院了', titleSimplified: '我住院了', titlePinyin: 'Wǒ zhùyuàn le', titleVi: 'Tôi nhập viện rồi' }),
  stubLesson({ id: 'L11', number: 11, titleTraditional: '台灣故事', titleSimplified: '台湾故事', titlePinyin: 'Táiwān gùshì', titleVi: 'Câu chuyện Đài Loan' }),
  stubLesson({ id: 'L12', number: 12, titleTraditional: '我要去投票', titleSimplified: '我要去投票', titlePinyin: 'Wǒ yào qù tóupiào', titleVi: 'Tôi sẽ đi bỏ phiếu' })
]

export const lessons: Lesson[] = [lesson01, lesson02, lesson03, ...upcoming]

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id)
}

export function getAllVocab() {
  return lessons.flatMap((lesson) => lesson.vocab)
}
