import type { WordClass } from '../../types/vocab'

export const wordClassLabels: Record<WordClass, string> = {
  N: 'Danh từ',
  V: 'Động từ',
  Vs: 'Động từ trạng thái (tính từ)',
  Vst: 'Động từ trạng thái + tân ngữ',
  Vp: 'Động từ quá trình',
  Vi: 'Động từ nội động',
  Vaux: 'Trợ động từ',
  'Vp-sep': 'Động từ quá trình ly hợp',
  'V-sep': 'Động từ ly hợp',
  Adv: 'Phó từ',
  Conj: 'Liên từ',
  Prep: 'Giới từ',
  M: 'Lượng từ',
  Ptc: 'Trợ từ',
  Det: 'Hạn định từ',
  'Vs-attr': 'Tính từ (chỉ làm định ngữ)',
  Other: 'Khác'
}
