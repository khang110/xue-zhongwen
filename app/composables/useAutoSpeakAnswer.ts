/** Toggle toàn cục: tự động đọc to đáp án ở phần Kiểm tra/Viết (mặc định bật). */
export function useAutoSpeakAnswer() {
  return useState<boolean>('auto-speak-answer', () => true)
}
