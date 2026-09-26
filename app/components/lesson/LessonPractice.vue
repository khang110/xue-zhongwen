<script setup lang="ts">
import type { Lesson } from '../../../types/lesson'
import { WORKBOOK_SECTION_ORDER, sectionHeading } from '../../utils/exerciseSections'

const props = defineProps<{
  lesson: Lesson
}>()

const exerciseIds = computed(() => props.lesson.workbookExercises.map((ex) => ex.id))
const progress = provideWorkbookProgress(exerciseIds)

const groups = computed(() =>
  WORKBOOK_SECTION_ORDER
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
        {{ sectionHeading(group.section) }}
      </h2>
      <div class="space-y-3">
        <div v-for="(ex, i) in group.items" :key="ex.id" class="flex items-start gap-3">
          <ExerciseNumberBadge :number="i + 1" />
          <ExerciseWrapper :exercise="ex" class="min-w-0 flex-1" />
        </div>
      </div>
    </div>
  </div>
</template>
