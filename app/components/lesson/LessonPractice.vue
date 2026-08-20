<script setup lang="ts">
import type { Lesson } from '../../../types/lesson'
import type { ExerciseSection } from '../../../types/exercise'

const props = defineProps<{
  lesson: Lesson
}>()

const sectionOrder: ExerciseSection[] = ['pairs', 'fill-write', 'fill-bank', 'reading', 'dialogue', 'composition']

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
  <div class="space-y-8">
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
