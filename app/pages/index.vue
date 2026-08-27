<script setup lang="ts">
import { lessons } from '../data/lessons'
import type { SrsStats } from '../../types/srs'

const { getStats } = useSrsStorage()

const availableLessons = computed(() => lessons.filter((l) => l.status === 'available'))
const stats = ref<Record<string, SrsStats>>({})
const totalDueToday = computed(() => Object.values(stats.value).reduce((sum, s) => sum + s.dueToday, 0))

onMounted(async () => {
  await Promise.all(
    availableLessons.value.map(async (lesson) => {
      const ids = lesson.vocab.map((v) => v.id)
      stats.value[lesson.id] = await getStats(ids)
    })
  )
})

function percentFor(lessonId: string): number {
  const s = stats.value[lessonId]
  if (!s || s.total === 0) return 0
  return Math.round((s.learned / s.total) * 100)
}
</script>

<template>
  <div>
    <div class="mb-6 flex flex-col gap-3 sm:flex-row">
      <StreakBadge variant="detailed" class="shrink-0 rounded-xl border border-ink-100 bg-white p-5 sm:w-56" />
      <div class="flex flex-1 flex-col items-start justify-between gap-3 rounded-xl border border-ink-100 bg-white p-5 sm:flex-row sm:items-center">
        <div>
          <p class="font-hanzi text-xl font-semibold text-ink-900">Ôn tập hôm nay</p>
          <p class="mt-0.5 text-sm text-ink-500">
            <span v-if="totalDueToday > 0">{{ totalDueToday }} thẻ đang chờ ôn.</span>
            <span v-else>Không có thẻ nào đến hạn - học từ mới ở các bài bên dưới nhé.</span>
          </p>
        </div>
        <NuxtLink
          to="/review"
          class="shrink-0 rounded-lg bg-seal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-seal-700"
        >
          Ôn tập ngay
        </NuxtLink>
      </div>
    </div>

    <h1 class="font-hanzi text-2xl font-semibold text-ink-900">12 bài học</h1>
    <p class="mt-1 text-ink-500">當代中文課程 3 · A Course in Contemporary Chinese, Book 3</p>

    <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="lesson in lessons"
        :key="lesson.id"
        :to="lesson.status === 'available' ? `/lessons/${lesson.id}` : ''"
        class="rounded-xl border border-ink-100 bg-white p-4 transition"
        :class="lesson.status === 'available' ? 'hover:border-seal-300 hover:shadow-md' : 'cursor-not-allowed opacity-50'"
      >
        <div class="flex items-center gap-3">
          <span class="seal-mark h-9 w-9 shrink-0 font-mono-pinyin text-sm text-seal-600">{{ lesson.number }}</span>
          <div class="min-w-0 flex-1">
            <p class="truncate font-hanzi text-lg font-medium text-ink-900">{{ lesson.titleTraditional }}</p>
            <p class="truncate text-sm text-ink-500">{{ lesson.titleVi }}</p>
          </div>
          <ProgressRing v-if="lesson.status === 'available'" :percent="percentFor(lesson.id)" :size="36" />
        </div>
        <p v-if="lesson.status === 'coming-soon'" class="mt-2 text-xs text-ink-400">Sắp có</p>
        <p v-else-if="stats[lesson.id]" class="mt-2 text-xs text-ink-400">
          {{ stats[lesson.id]!.learned }}/{{ stats[lesson.id]!.total }} từ đã thuộc
          <span v-if="stats[lesson.id]!.dueToday > 0" class="text-seal-600"> · {{ stats[lesson.id]!.dueToday }} đến hạn</span>
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
