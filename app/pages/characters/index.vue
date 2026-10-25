<script setup lang="ts">
import { getAllVocab } from '../../data/lessons'

const search = ref('')

const index = getVocabCharacterIndex()
const totalVocabCount = getAllVocab().length

const entries = computed(() => {
  const all = [...index.entries()].map(([char, words]) => {
    const standalone = words.find((w) => w.traditional === char)
    return {
      char,
      words: [...words].sort((a, b) => a.lessonId.localeCompare(b.lessonId)),
      pinyin: standalone?.pinyin ?? null
    }
  })
  return all.sort((a, b) => b.words.length - a.words.length || a.char.localeCompare(b.char, 'zh'))
})

const filtered = computed(() => {
  const q = search.value.trim()
  if (!q) return entries.value
  return entries.value.filter(
    (e) => e.char.includes(q) || e.pinyin?.toLowerCase().includes(q.toLowerCase()) || e.words.some((w) => w.traditional.includes(q) || w.meaningVi.includes(q))
  )
})
</script>

<template>
  <div class="flex flex-col gap-6 pt-6">
    <div class="max-w-[640px]">
      <h1 class="font-heading text-[44px] font-bold text-ink-800">Chữ Hán đã học</h1>
      <p class="mt-2 text-ink-500">
        {{ entries.length }} chữ duy nhất, tách từ {{ totalVocabCount }} từ vựng. Mỗi chữ gom mọi từ chứa nó, bất kể thuộc bài nào — bấm một chữ để luyện viết.
      </p>
    </div>

    <input
      v-model="search"
      type="text"
      placeholder="Tìm theo chữ Hán, pinyin, hoặc nghĩa tiếng Việt..."
      class="min-h-12 w-full max-w-[480px] rounded-full border border-paper-line bg-white px-5 text-[15px] outline-none focus:border-seal-600"
    >

    <div class="grid grid-cols-[repeat(auto-fill,minmax(112px,1fr))] gap-3">
      <NuxtLink
        v-for="entry in filtered"
        :key="entry.char"
        :to="`/writing?char=${entry.char}`"
        class="group flex flex-col items-center gap-1.5 rounded-[22px] border border-paper-line bg-white px-2.5 pb-3 pt-2.5 text-center transition hover:-translate-y-0.5 hover:border-seal-300"
      >
        <div class="tianzige w-full">
          <span class="font-hanzi text-[42px] text-ink-800 group-hover:text-seal-600">{{ entry.char }}</span>
        </div>
        <p v-if="entry.pinyin" class="truncate font-pinyin text-xs text-seal-700">{{ entry.pinyin }}</p>
        <p class="text-xs font-semibold text-ink-500">{{ entry.words.length }} từ</p>
      </NuxtLink>
    </div>

    <p v-if="filtered.length === 0" class="mt-10 text-center text-ink-400">Không tìm thấy chữ nào phù hợp.</p>
  </div>
</template>
