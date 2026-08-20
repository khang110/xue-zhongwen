import type { FillBlankExercise } from './exercise'

export interface GrammarExample {
  traditional: string
  simplified: string
  pinyin?: string
  /** nguyên văn "Grammar Examples in English" cuối sách */
  english: string
  vietnamese: string
}

export interface GrammarPoint {
  /** vd "L1-G1" */
  id: string
  lessonId: string
  order: number
  /** tên pattern ngữ pháp, vd "…的話" */
  pattern: string
  /** giải thích chức năng bằng tiếng Việt, viết lại dễ hiểu từ phần Function trong sách */
  functionVi: string
  /** nguyên văn Function tiếng Anh từ sách, để tham khảo/đối chiếu */
  functionEn?: string
  examples: GrammarExample[]
  /** ghi chú cách dùng, so sánh với pattern gần nghĩa (từ phần Usage trong sách) */
  usageNotesVi: string
  /** id các GrammarPoint dễ nhầm lẫn, để liên kết chéo trong UI */
  relatedPatterns?: string[]
  /** bài luyện điền chỗ trống 練習 đi kèm điểm ngữ pháp này */
  exercises: FillBlankExercise[]
}
