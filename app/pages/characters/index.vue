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
  <div>
    <h1 class="font-hanzi text-2xl font-semibold text-ink-900">Chữ Hán đã học</h1>
    <p class="mt-1 text-ink-500">
      {{ entries.length }} chữ duy nhất, tách từ {{ totalVocabCount }} từ vựng đã nhập ở 3 bài đầu.
    </p>

    <input
      v-model="search"
      type="text"
      placeholder="Tìm theo chữ Hán, pinyin, hoặc nghĩa tiếng Việt..."
      class="mt-4 w-full max-w-md rounded-lg border border-ink-200 px-3 py-2 text-sm outline-none focus:border-seal-500"
    >

    <div class="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      <NuxtLink
        v-for="entry in filtered"
        :key="entry.char"
        :to="`/writing?char=${entry.char}`"
        class="group rounded-lg border border-ink-100 bg-white p-2 text-center transition hover:border-seal-300 hover:shadow-md"
      >
        <div class="tianzige mx-auto w-full">
          <span class="font-hanzi text-3xl text-ink-900 group-hover:text-seal-600">{{ entry.char }}</span>
        </div>
        <p v-if="entry.pinyin" class="mt-1 truncate font-mono-pinyin text-xs text-ink-400">{{ entry.pinyin }}</p>
        <p class="text-xs text-ink-400">{{ entry.words.length }} từ</p>
      </NuxtLink>
    </div>

    <p v-if="filtered.length === 0" class="mt-10 text-center text-ink-400">Không tìm thấy chữ nào phù hợp.</p>
  </div>
</template>
