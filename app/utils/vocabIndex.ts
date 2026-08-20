import type { VocabItem } from '../../types/vocab'
import { getAllVocab } from '../data/lessons'
import { buildCharacterIndex } from './vocabRelations'

// Dữ liệu từ vựng là nội dung tĩnh giống nhau cho mọi người dùng/mọi request,
// nên cache ở cấp module là an toàn và tránh phải serialize Map qua SSR payload.
let cachedIndex: Map<string, VocabItem[]> | null = null

export function getVocabCharacterIndex(): Map<string, VocabItem[]> {
  if (!cachedIndex) {
    cachedIndex = buildCharacterIndex(getAllVocab())
  }
  return cachedIndex
}
