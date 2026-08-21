/** Toggle toàn cục: tự động chuyển câu tiếp theo khi chọn đúng ở phần Kiểm tra (mặc định bật). */
export function useAutoNextOnCorrect() {
  return useState<boolean>('auto-next-on-correct', () => true)
}
