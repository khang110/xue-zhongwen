import type { Phrase } from '../../types/lesson'
import type { VocabItem } from '../../types/vocab'

/**
 * Chuyển "Cụm từ cố định" (Phrase) của một bài thành VocabItem để dùng chung
 * component Kiểm tra / Viết với từ vựng. id tổng hợp dạng "L4-P001" (P = phrase),
 * ổn định theo thứ tự trong mảng phrases của bài.
 *
 * Bỏ qua các cụm có dấu "…" (khung mẫu ngữ pháp như "把…當家人", "非…不可") vì
 * chúng không phải là một đơn vị cố định để gõ lại / chọn trọn vẹn.
 */
export function phrasesToVocabItems(lessonId: string, phrases?: Phrase[]): VocabItem[] {
  if (!phrases?.length) return []
  return phrases
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => !p.phraseTraditional.includes('…') && !p.phraseSimplified.includes('…'))
    .map(({ p, i }): VocabItem => ({
      id: `${lessonId}-P${String(i + 1).padStart(3, '0')}`,
      lessonId,
      order: i + 1,
      group: 'vocab1',
      traditional: p.phraseTraditional,
      simplified: p.phraseSimplified,
      pinyin: p.pinyin,
      wordClass: ['Other'],
      meaningVi: p.meaningVi,
      meaningEn: '',
      examples: []
    }))
}
