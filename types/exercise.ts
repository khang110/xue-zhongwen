export type ExerciseSection =
  | 'textbook-practice' // 練習 đi kèm 1 điểm ngữ pháp trong textbook
  | 'listening' // workbook I. Listening and Response
  | 'pairs' // workbook II. Creating Pairs
  | 'fill-write' // workbook III. Fill in the Blanks and Write Out Chinese Characters
  | 'fill-bank' // workbook IV. Fill in the Blanks with Proper Words
  | 'reading' // workbook V. Reading Comprehension
  | 'dialogue' // workbook VI. Dialogue Completion
  | 'composition' // workbook VII. Composition

export interface BaseExercise {
  id: string
  lessonId: string
  section: ExerciseSection
  prompt?: string
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple-choice'
  question: string
  /** mã track trong sách, vd "01-1" - sách không có file audio thật nên chỉ hiển thị tham khảo */
  audioTrack?: string
  options: { id: string; text: string }[]
  correctOptionId: string
  explanationVi?: string
}

export interface FillBlankExercise extends BaseExercise {
  type: 'fill-blank'
  /** dùng ___ để đánh dấu chỗ trống, có thể có nhiều chỗ trống */
  textWithBlanks: string
  blanks: { index: number; acceptedAnswers: string[] }[]
  /** cho "Fill in the Blanks with Proper Words" - ngân hàng từ cho trước */
  wordBank?: string[]
  /** id của GrammarPoint bắt buộc dùng (cho bài luyện điền pattern / Dialogue Completion) */
  targetPattern?: string
}

export interface MatchingExercise extends BaseExercise {
  type: 'matching'
  pairs: { left: string; right: string }[]
}

export interface DialogueCompletionExercise extends BaseExercise {
  type: 'dialogue-completion'
  turns: { speaker: 'A' | 'B'; text: string; isBlank: boolean }[]
  /** id của GrammarPoint bắt buộc dùng trong câu trả lời */
  requiredPattern: string
  sampleAnswer: string
}

export interface CompositionExercise extends BaseExercise {
  type: 'composition'
  topicVi: string
  /** id của các VocabItem gợi ý dùng trong bài viết */
  requiredWords: string[]
  /** id của các GrammarPoint gợi ý dùng trong bài viết */
  requiredPatterns: string[]
  minLength: number
  maxLength: number
}

export type Exercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | MatchingExercise
  | DialogueCompletionExercise
  | CompositionExercise
