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
  <div class="flex flex-col gap-6 pt-6">
    <div class="max-w-[640px]">
      <h1 class="font-heading text-[44px] font-bold text-ink-800">Luyện viết</h1>
      <p class="mt-2 text-ink-500">Xem hoạt hình thứ tự nét, rồi tự viết theo ngay trong ô.</p>
    </div>

    <div class="flex flex-wrap gap-1.5">
      <button
        type="button"
        class="rounded-full border-[1.5px] px-3.5 py-1 text-[13px] font-semibold transition"
        :class="lessonFilter === 'all' ? 'border-seal-600 bg-seal-600 text-paper' : 'border-paper-line text-ink-600 hover:border-seal-300'"
        @click="lessonFilter = 'all'"
      >
        Tất cả
      </button>
      <button
        v-for="lesson in availableLessons"
        :key="lesson.id"
        type="button"
        class="rounded-full border-[1.5px] px-3.5 py-1 text-[13px] font-semibold transition"
        :class="lessonFilter === lesson.id ? 'border-seal-600 bg-seal-600 text-paper' : 'border-paper-line text-ink-600 hover:border-seal-300'"
        @click="lessonFilter = lesson.id"
      >
        Bài {{ lesson.number }}
      </button>
    </div>

    <div class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div>
        <div class="pill-tabs mx-auto mb-4 flex w-fit">
          <button
            type="button"
            class="pill-tab"
            :class="{ 'pill-tab--active': mode === 'view' }"
            @click="mode = 'view'"
          >
            Xem thứ tự nét
          </button>
          <button
            type="button"
            class="pill-tab"
            :class="{ 'pill-tab--active': mode === 'quiz' }"
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
              class="font-hanzi rounded-full bg-seal-50 px-3 py-1 text-sm text-seal-800 transition hover:bg-seal-100"
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
