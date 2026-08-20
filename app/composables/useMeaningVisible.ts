/** Toggle toàn cục: hiển thị nghĩa tiếng Việt ở phần hội thoại (mặc định hiện). */
export function useMeaningVisible() {
  return useState<boolean>('meaning-visible', () => true)
}
