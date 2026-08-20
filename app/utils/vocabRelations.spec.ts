import { describe, expect, it } from 'vitest'
import { buildCharacterIndex, getRelatedWordsByCharacter } from './vocabRelations'
import type { VocabItem } from '../../types/vocab'

function makeVocab(id: string, traditional: string): VocabItem {
  return {
    id,
    lessonId: 'L1',
    order: 1,
    group: 'vocab1',
    traditional,
    simplified: traditional,
    pinyin: '',
    wordClass: ['N'],
    meaningVi: '',
    meaningEn: '',
    examples: []
  }
}

describe('buildCharacterIndex', () => {
  it('gộp các từ theo từng chữ Hán dùng chung', () => {
    const vocab = [makeVocab('a', '開學'), makeVocab('b', '開車'), makeVocab('c', '學生')]
    const index = buildCharacterIndex(vocab)

    expect(index.get('開')?.map((w) => w.id)).toEqual(['a', 'b'])
    expect(index.get('學')?.map((w) => w.id)).toEqual(['a', 'c'])
    expect(index.get('車')?.map((w) => w.id)).toEqual(['b'])
  })

  it('không lặp lại 1 từ trong cùng 1 chữ nếu chữ đó xuất hiện 2 lần trong từ', () => {
    const vocab = [makeVocab('a', '謝謝')]
    const index = buildCharacterIndex(vocab)
    expect(index.get('謝')).toHaveLength(1)
  })
})

describe('getRelatedWordsByCharacter', () => {
  it('trả về các từ khác chứa chung chữ, loại trừ chính nó', () => {
    const vocab = [makeVocab('a', '開學'), makeVocab('b', '開車'), makeVocab('c', '開始'), makeVocab('d', '學生')]
    const index = buildCharacterIndex(vocab)
    const related = getRelatedWordsByCharacter(vocab[0]!, index)

    const kaiRelation = related.find((r) => r.char === '開')
    expect(kaiRelation?.words.map((w) => w.id).sort()).toEqual(['b', 'c'])

    const xueRelation = related.find((r) => r.char === '學')
    expect(xueRelation?.words.map((w) => w.id)).toEqual(['d'])
  })

  it('trả về mảng rỗng nếu không có từ nào khác chung chữ', () => {
    const vocab = [makeVocab('a', '獨生女')]
    const index = buildCharacterIndex(vocab)
    expect(getRelatedWordsByCharacter(vocab[0]!, index)).toEqual([])
  })
})
