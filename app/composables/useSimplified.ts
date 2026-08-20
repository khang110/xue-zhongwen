/** Toggle toàn cục: hiển thị chữ giản thể thay vì phồn thể (mặc định phồn thể). */
export function useSimplified() {
  return useState<boolean>('use-simplified', () => false)
}
