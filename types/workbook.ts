/**
 * Bài làm đã lưu của một bài tập trong sổ bài tập (workbook). Mỗi loại bài tập có
 * hình dạng state riêng; server chỉ lưu JSON, phía client mới hiểu union này.
 */
export type WorkbookSavedState =
  | { kind: 'multiple-choice'; selectedId: string | null; checked: boolean }
  | { kind: 'fill-blank'; answers: string[]; checked: boolean }
  | { kind: 'matching'; selected: Record<string, string[]>; checked: boolean }
  | { kind: 'dialogue-completion'; userAnswer: string; revealed: boolean }
  | { kind: 'composition'; text: string }
  | { kind: 'listening'; answers: Record<string, string>; checked: boolean }

export interface WorkbookProgressEntry {
  exerciseId: string
  state: WorkbookSavedState
  updatedAt: string
}
