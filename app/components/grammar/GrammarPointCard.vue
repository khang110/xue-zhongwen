<script setup lang="ts">
import type { GrammarPoint } from '../../../types/grammar'

defineProps<{
  point: GrammarPoint
}>()
</script>

<template>
  <article :id="`grammar-${point.id}`" class="scroll-mt-20 rounded-xl border border-ink-100 bg-white p-5 shadow-sm">
    <header class="flex items-baseline gap-2">
      <span class="seal-mark shrink-0 px-1.5 py-0.5 text-[11px] text-seal-600">{{ point.order }}</span>
      <h3 class="font-hanzi text-xl font-semibold text-ink-900">{{ point.pattern }}</h3>
    </header>

    <p class="mt-2 text-sm leading-relaxed text-ink-700">{{ point.functionVi }}</p>

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
