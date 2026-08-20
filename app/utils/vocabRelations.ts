import type { VocabItem } from '../../types/vocab'

/** Map mỗi chữ Hán (phồn thể) -> danh sách VocabItem có chứa chữ đó, tính trên toàn bộ từ vựng đã tải. */
export function buildCharacterIndex(vocab: VocabItem[]): Map<string, VocabItem[]> {
  const index = new Map<string, VocabItem[]>()

  for (const item of vocab) {
    const chars = new Set(item.traditional.split(''))
    for (const char of chars) {
      const existing = index.get(char)
      if (existing) existing.push(item)
      else index.set(char, [item])
    }
  }

  return index
}

export interface CharacterRelation {
  char: string
  words: VocabItem[]
}

/** Với 1 từ, trả về những từ khác (không phải chính nó) có chung từng chữ Hán, dùng cho panel "Từ liên quan". */
export function getRelatedWordsByCharacter(
  item: VocabItem,
  index: Map<string, VocabItem[]>
): CharacterRelation[] {
  const chars = [...new Set(item.traditional.split(''))]

  return chars
    .map((char) => ({
      char,
      words: (index.get(char) ?? []).filter((word) => word.id !== item.id)
    }))
    .filter((entry) => entry.words.length > 0)
}
