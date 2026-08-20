export type WordClass =
  | 'N' // danh từ
  | 'V' // động từ
  | 'Vs' // động từ trạng thái (tính từ)
  | 'Vst' // động từ trạng thái tân ngữ
  | 'Vp' // động từ quá trình
  | 'Vi' // động từ nội động
  | 'Vaux' // trợ động từ
  | 'Vp-sep' // động từ quá trình ly hợp (tách được)
  | 'V-sep' // động từ ly hợp
  | 'Adv' // phó từ
  | 'Conj' // liên từ
  | 'Prep' // giới từ
  | 'M' // lượng từ
  | 'Ptc' // trợ từ
  | 'Det' // hạn định từ
  | 'Vs-attr' // tính từ chỉ dùng làm định ngữ
  | 'Other'

export interface ExampleSentence {
  traditional: string
  simplified: string
  /** để trống nếu chưa có pinyin đã kiểm chứng cho cả câu - ưu tiên đúng hơn đủ */
  pinyin?: string
  vietnamese: string
  english?: string
}

export interface VocabItem {
  /** vd "L1-004" - duy nhất trong toàn bộ app, dùng làm khoá SRS */
  id: string
  lessonId: string
  /** số thứ tự trong 生詞一/生詞二 của sách */
  order: number
  group: 'vocab1' | 'vocab2'
  traditional: string
  simplified: string
  pinyin: string
  zhuyin?: string
  wordClass: WordClass[]
  meaningVi: string
  meaningEn: string
  examples: ExampleSentence[]
  notes?: string
  /** nhãn chủ đề để ôn tập theo cụm xuyên bài, vd "mua-sam" */
  tags?: string[]
}
