<script setup lang="ts">
import type { Lesson } from '../../../types/lesson'
import type { ExerciseSection } from '../../../types/exercise'

const props = defineProps<{
  lesson: Lesson
}>()

const exerciseIds = computed(() => props.lesson.workbookExercises.map((ex) => ex.id))
const progress = provideWorkbookProgress(exerciseIds)

const sectionOrder: ExerciseSection[] = ['listening', 'pairs', 'fill-write', 'fill-bank', 'reading', 'dialogue', 'composition']

const sectionLabels: Record<ExerciseSection, string> = {
  'textbook-practice': 'Luyện điền ngữ pháp (練習)',
  listening: 'Nghe hiểu',
  pairs: 'Nối từ',
  'fill-write': 'Điền pinyin, viết chữ Hán',
  'fill-bank': 'Điền từ vào đoạn văn',
  reading: 'Đọc hiểu',
  dialogue: 'Hoàn thành hội thoại',
  composition: 'Viết đoạn văn'
}

const groups = computed(() =>
  sectionOrder
    .map((section) => ({
      section,
      items: props.lesson.workbookExercises.filter((ex) => ex.section === section)
    }))
    .filter((g) => g.items.length > 0)
)
</script>

<template>
  <p v-if="!progress.ready.value" class="text-sm text-ink-400">Đang tải bài làm đã lưu…</p>

  <div v-else class="space-y-8">
    <div class="flex flex-wrap items-center gap-3 rounded-lg border border-ink-100 bg-white px-4 py-3">
      <button
        type="button"
        :disabled="progress.bulkSaving.value"
        class="rounded-md bg-jade-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-jade-700 disabled:cursor-not-allowed disabled:opacity-40"
        @click="progress.saveAll()"
      >
        {{ progress.bulkSaving.value ? 'Đang lưu…' : 'Lưu lại tất cả' }}
      </button>
      <span class="text-xs text-ink-400">
        Đã lưu {{ progress.savedCount.value }}/{{ exerciseIds.length }} bài ·
        <NuxtLink to="/profile" class="text-seal-600 hover:underline">xem ở trang cá nhân</NuxtLink>
      </span>
    </div>

    <div v-for="group in groups" :key="group.section">
      <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">
        {{ sectionLabels[group.section] }}
      </h2>
      <div class="space-y-3">
        <ExerciseWrapper v-for="ex in group.items" :key="ex.id" :exercise="ex" />
      </div>
    </div>
  </div>
</template>
