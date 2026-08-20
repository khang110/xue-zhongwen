<script setup lang="ts">
import { lessons } from '../../data/lessons'

const route = useRoute()
const index = getVocabCharacterIndex()

const availableLessons = computed(() => lessons.filter((l) => l.status === 'available'))
const lessonFilter = ref<string>('all')

const allChars = computed(() => {
  if (lessonFilter.value === 'all') {
    return [...index.keys()].sort((a, b) => a.localeCompare(b, 'zh'))
  }
  const lesson = availableLessons.value.find((l) => l.id === lessonFilter.value)
  const chars = new Set<string>()
  for (const v of lesson?.vocab ?? []) {
    for (const ch of v.traditional) chars.add(ch)
  }
  return [...chars].sort((a, b) => a.localeCompare(b, 'zh'))
})

const initialChar = typeof route.query.char === 'string' ? route.query.char : null
const selected = ref<string | null>(initialChar)
const mode = ref<'view' | 'quiz'>('view')

const relatedWords = computed(() => (selected.value ? (index.get(selected.value) ?? []) : []))

watch(allChars, (chars) => {
  if (selected.value && !chars.includes(selected.value)) selected.value = null
  if (!selected.value && chars.length) selected.value = chars[0] ?? null
})

if (!selected.value && allChars.value.length) {
  selected.value = allChars.value[0] ?? null
}
</script>

<template>
  <div>
    <h1 class="font-hanzi text-2xl font-semibold text-ink-900">Luyện viết chữ Hán</h1>
    <p class="mt-1 text-ink-500">Chọn 1 chữ để xem hoạt hình thứ tự nét hoặc luyện viết theo.</p>

    <div class="mt-4 flex flex-wrap gap-1.5">
      <button
        type="button"
        class="rounded-full border px-3 py-1 text-sm transition"
        :class="lessonFilter === 'all' ? 'border-seal-500 bg-seal-50 text-seal-700' : 'border-ink-200 text-ink-600 hover:border-seal-300'"
        @click="lessonFilter = 'all'"
      >
        Tất cả
      </button>
      <button
        v-for="lesson in availableLessons"
        :key="lesson.id"
        type="button"
        class="rounded-full border px-3 py-1 text-sm transition"
        :class="lessonFilter === lesson.id ? 'border-seal-500 bg-seal-50 text-seal-700' : 'border-ink-200 text-ink-600 hover:border-seal-300'"
        @click="lessonFilter = lesson.id"
      >
        Bài {{ lesson.number }}
      </button>
    </div>

    <div class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div>
        <div class="mb-4 flex justify-center gap-2">
          <button
            type="button"
            class="rounded-md px-3 py-1.5 text-sm font-medium transition"
            :class="mode === 'view' ? 'bg-ink-800 text-white' : 'border border-ink-200 text-ink-600'"
            @click="mode = 'view'"
          >
            Xem thứ tự nét
          </button>
          <button
            type="button"
            class="rounded-md px-3 py-1.5 text-sm font-medium transition"
            :class="mode === 'quiz' ? 'bg-ink-800 text-white' : 'border border-ink-200 text-ink-600'"
            @click="mode = 'quiz'"
          >
            Luyện viết
          </button>
        </div>

        <template v-if="selected">
          <HanziAnimator v-if="mode === 'view'" :key="`view-${selected}`" :character="selected" />
          <HanziQuiz v-else :key="`quiz-${selected}`" :character="selected" />
        </template>
        <p v-else class="text-center text-ink-400">Chọn 1 chữ ở danh sách bên phải để bắt đầu.</p>

        <div v-if="relatedWords.length" class="mx-auto mt-6 max-w-sm">
          <p class="mb-2 text-xs font-medium uppercase tracking-wide text-ink-400">Từ chứa chữ này</p>
          <div class="flex flex-wrap gap-1.5">
            <NuxtLink
              v-for="w in relatedWords"
              :key="w.id"
              :to="`/lessons/${w.lessonId}#vocab-${w.id}`"
              class="font-hanzi rounded border border-ink-200 bg-white px-2 py-1 text-sm text-ink-700 transition hover:border-seal-300 hover:text-seal-600"
            >
              {{ w.traditional }} <span class="text-ink-400">- {{ w.meaningVi }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div>
        <p class="mb-2 text-xs font-medium uppercase tracking-wide text-ink-400">Chọn chữ ({{ allChars.length }})</p>
        <CharacterPicker v-model="selected" :characters="allChars" />
      </div>
    </div>
  </div>
</template>
