import { pinyin } from 'pinyin-pro'

/**
 * Chuyển văn bản Hán sang pinyin có dấu thanh.
 * Luôn nhận đầu vào là chữ giản thể vì bộ từ điển đa âm của pinyin-pro
 * chỉ khớp đúng nghĩa/âm đọc theo ngữ cảnh khi tra trên chữ giản thể
 * (vd 還/还 trong "還是" sẽ ra sai "huán" nếu tra trên chữ phồn thể).
 */
export function toPinyinText(simplifiedText: string): string {
  return pinyin(simplifiedText, { toneType: 'symbol', type: 'string' })
    .replace(/\s*—\s*—\s*/g, '——')
    .replace(/\s+([，。、？！：；）】》』」…])/g, '$1')
    .replace(/([（【《『「])\s+/g, '$1')
    .replace(/ {2,}/g, ' ')
    .trim()
}
