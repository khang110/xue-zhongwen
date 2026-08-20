<script setup lang="ts">
import type { SrsGrade } from '../../../types/srs'

defineEmits<{ grade: [value: SrsGrade] }>()

const buttons: { grade: SrsGrade; label: string; hint: string; classes: string }[] = [
  { grade: 0, label: 'Quên', hint: '1', classes: 'bg-seal-600 hover:bg-seal-700' },
  { grade: 1, label: 'Khó', hint: '2', classes: 'bg-amber-500 hover:bg-amber-600' },
  { grade: 2, label: 'Tốt', hint: '3', classes: 'bg-jade-500 hover:bg-jade-600' },
  { grade: 3, label: 'Dễ', hint: '4', classes: 'bg-jade-700 hover:bg-jade-800' }
]
</script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <button
      v-for="btn in buttons"
      :key="btn.grade"
      type="button"
      class="flex flex-col items-center rounded-lg py-2.5 text-sm font-medium text-white transition"
      :class="btn.classes"
      @click="$emit('grade', btn.grade)"
    >
      {{ btn.label }}
      <span class="mt-0.5 text-[10px] font-mono-pinyin opacity-70">{{ btn.hint }}</span>
    </button>
  </div>
</template>
