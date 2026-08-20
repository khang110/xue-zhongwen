import type { VocabItem } from './vocab'
import type { GrammarPoint } from './grammar'
import type { Exercise } from './exercise'

export interface LessonMeta {
  /** vd "L1" */
  id: string
  number: number
  titleTraditional: string
  titleSimplified: string
  titlePinyin: string
  /** tên bài gợi nhớ bằng tiếng Việt, do Claude đặt */
  titleVi: string
  status: 'available' | 'coming-soon'
}

export interface DialogueLine {
  speaker: string
  traditional: string
  simplified: string
  pinyin: string
  english?: string
  vietnamese: string
}

export interface ShortReading {
  traditional: string
  simplified: string
  vietnamese: string
}

export interface Phrase {
  phraseTraditional: string
  phraseSimplified: string
  pinyin: string
  meaningVi: string
}

export interface Lesson extends LessonMeta {
  /** mỗi phần tử là 1 đoạn hội thoại (課文 có thể gồm nhiều đoạn) */
  dialogues: DialogueLine[][]
  shortReading?: ShortReading
  phrases?: Phrase[]
  /** toàn bộ 生詞一 + 生詞二 */
  vocab: VocabItem[]
  grammar: GrammarPoint[]
  workbookExercises: Exercise[]
}
