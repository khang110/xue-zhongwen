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

  <div v-else class="grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
    <aside class="flex flex-col gap-1.5 lg:sticky lg:top-24">
      <a
        v-for="(group, gi) in groups"
        :key="group.section"
        :href="`#practice-${group.section}`"
        class="flex items-center gap-3 rounded-full px-3.5 py-2.5 transition hover:bg-white"
      >
        <span class="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full bg-seal-100 font-heading text-[13px] text-seal-800">{{ gi + 1 }}</span>
        <span class="text-sm font-semibold text-ink-800">{{ sectionHeading(group.section) }}</span>
      </a>

      <div class="mt-2.5 flex flex-col gap-2 rounded-3xl bg-jade-100 p-4">
        <span class="text-sm text-jade-900">
          Đã lưu {{ progress.savedCount.value }}/{{ exerciseIds.length }} bài ·
          <NuxtLink to="/profile" class="font-semibold underline">xem ở trang cá nhân</NuxtLink>
        </span>
        <button
          type="button"
          :disabled="progress.bulkSaving.value"
          class="rounded-full bg-jade-600 px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-jade-700 disabled:cursor-not-allowed disabled:opacity-40"
          @click="progress.saveAll()"
        >
          {{ progress.bulkSaving.value ? 'Đang lưu…' : 'Lưu lại tất cả' }}
        </button>
      </div>
    </aside>

    <div class="min-w-0 space-y-8">
      <div v-for="group in groups" :id="`practice-${group.section}`" :key="group.section" class="scroll-mt-24">
        <h2 class="kicker mb-3">
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
  </div>
</template>
