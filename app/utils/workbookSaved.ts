import type { Exercise } from '../../types/exercise'
import type { WorkbookSavedState } from '../../types/workbook'

export interface SavedSummary {
  /** các dòng "nhãn: giá trị" cho bài dạng chọn/điền */
  lines: { label: string; value: string }[]
  /** với bài viết dài (đoạn văn / hội thoại): hiển thị nguyên khối, kể cả chuỗi rỗng */
  freeText?: string
  /** điểm nếu chấm được, vd "4/5" hoặc "Đúng"/"Sai" */
  score?: string
}

/** Chuyển bài làm đã lưu thành mô tả gọn để hiển thị ở trang cá nhân / export. */
export function summarizeSaved(exercise: Exercise | undefined, state: WorkbookSavedState): SavedSummary {
  switch (state.kind) {
    case 'multiple-choice': {
      const ex = exercise?.type === 'multiple-choice' ? exercise : undefined
      const picked = ex?.options.find((o) => o.id === state.selectedId)
      const value = picked ? `${picked.id}. ${picked.text}` : state.selectedId ?? '(chưa chọn)'
      const score = ex ? (state.selectedId === ex.correctOptionId ? 'Đúng' : 'Sai') : undefined
      return { lines: [{ label: 'Đã chọn', value }], score }
    }
    case 'fill-blank':
      return {
        lines: state.answers.map((a, i) => ({ label: `Chỗ trống ${i + 1}`, value: a || '(trống)' }))
      }
    case 'matching': {
      const lines = Object.entries(state.selected)
        .filter(([, rights]) => rights.length > 0)
        .map(([left, rights]) => ({ label: left, value: rights.join(', ') }))
      return { lines: lines.length ? lines : [{ label: '', value: '(chưa nối)' }] }
    }
    case 'dialogue-completion':
      return { lines: [], freeText: state.userAnswer }
    case 'composition':
      return { lines: [], freeText: state.text }
    case 'listening': {
      const ex = exercise?.type === 'listening' ? exercise : undefined
      const lines = ex
        ? ex.items.map((it, i) => ({ label: `Câu ${i + 1}`, value: state.answers[it.id] || '(trống)' }))
        : Object.values(state.answers).map((v, i) => ({ label: `Câu ${i + 1}`, value: v || '(trống)' }))
      const score = ex
        ? `${ex.items.filter((it) => state.answers[it.id] === it.answer).length}/${ex.items.length}`
        : undefined
      return { lines, score }
    }
    default:
      return { lines: [] }
  }
}
