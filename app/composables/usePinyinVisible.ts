/** Toggle toàn cục: hiển thị pinyin ở phần hội thoại và từ vựng (mặc định hiện). */
export function usePinyinVisible() {
  return useState<boolean>('pinyin-visible', () => true)
}
