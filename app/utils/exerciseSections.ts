import type { ExerciseSection } from '../../types/exercise'

/** Thứ tự 7 mục workbook I–VII đúng như trong sách, không gồm 練習 (textbook-practice). */
export const WORKBOOK_SECTION_ORDER: ExerciseSection[] = [
  'listening',
  'pairs',
  'fill-write',
  'fill-bank',
  'reading',
  'dialogue',
  'composition'
]

export const sectionLabels: Record<ExerciseSection, string> = {
  'textbook-practice': 'Luyện điền ngữ pháp (練習)',
  listening: 'Nghe hiểu',
  pairs: 'Nối từ',
  'fill-write': 'Điền pinyin, viết chữ Hán',
  'fill-bank': 'Điền từ vào đoạn văn',
  reading: 'Đọc hiểu',
  dialogue: 'Hoàn thành hội thoại',
  composition: 'Viết đoạn văn'
}

/** Số la mã của từng mục workbook đúng như cách sách đánh số (I. Listening ... VII. Composition). */
const sectionRomanNumerals: Partial<Record<ExerciseSection, string>> = {
  listening: 'I',
  pairs: 'II',
  'fill-write': 'III',
  'fill-bank': 'IV',
  reading: 'V',
  dialogue: 'VI',
  composition: 'VII'
}

/** Tiêu đề mục hiển thị đúng kiểu sách, vd "I. Nghe hiểu". Mục không có số la mã (練習) chỉ trả về nhãn. */
export function sectionHeading(section: ExerciseSection): string {
  const numeral = sectionRomanNumerals[section]
  return numeral ? `${numeral}. ${sectionLabels[section]}` : sectionLabels[section]
}
