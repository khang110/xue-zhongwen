<script setup lang="ts">
import type { GrammarPoint } from '../../../types/grammar'

defineProps<{
  point: GrammarPoint
}>()
</script>

<template>
  <article :id="`grammar-${point.id}`" class="scroll-mt-20 rounded-[32px] border border-paper-line bg-white p-7">
    <header class="flex items-center gap-3.5">
      <span class="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-seal-100 font-heading text-seal-800">{{ point.order }}</span>
      <h3 class="font-hanzi text-[28px] font-bold text-ink-800">{{ point.pattern }}</h3>
    </header>

    <p class="mt-3 text-base leading-relaxed text-ink-800">{{ point.functionVi }}</p>

    <div class="mt-3">
      <GrammarExampleList :examples="point.examples" />
    </div>

    <div v-if="point.usageNotesVi" class="mt-3 border-t border-ink-100 pt-3">
      <p class="mb-1 text-xs font-medium uppercase tracking-wide text-ink-400">Cách dùng &amp; lưu ý</p>
      <p class="whitespace-pre-line text-sm leading-relaxed text-ink-600">{{ point.usageNotesVi }}</p>
    </div>

    <details v-if="point.exercises.length" class="mt-3 border-t border-ink-100 pt-3">
      <summary class="cursor-pointer text-xs font-medium uppercase tracking-wide text-ink-400 hover:text-seal-600">
        Luyện tập ({{ point.exercises.length }} câu)
      </summary>
      <div class="mt-2 space-y-2">
        <ExerciseWrapper v-for="ex in point.exercises" :key="ex.id" :exercise="ex" />
      </div>
    </details>
  </article>
</template>
