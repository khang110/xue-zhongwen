<script setup lang="ts">
import type { CompositionExercise } from '../../../types/exercise'
import { getLessonById } from '../../data/lessons'

const props = defineProps<{
  exercise: CompositionExercise
}>()

const lesson = computed(() => getLessonById(props.exercise.lessonId))

const requiredVocab = computed(
  () => lesson.value?.vocab.filter((v) => props.exercise.requiredWords.includes(v.id)) ?? []
)
const requiredGrammar = computed(
  () => lesson.value?.grammar.filter((g) => props.exercise.requiredPatterns.includes(g.id)) ?? []
)

const text = ref('')
const length = computed(() => text.value.replace(/\s/g, '').length)
const inRange = computed(() => length.value >= props.exercise.minLength && length.value <= props.exercise.maxLength)
</script>

<template>
  <div class="rounded-lg border border-ink-100 bg-white p-4">
    <p class="text-sm leading-relaxed text-ink-800">{{ exercise.topicVi }}</p>

    <div v-if="requiredVocab.length" class="mt-3">
      <p class="mb-1 text-xs font-medium uppercase tracking-wide text-ink-400">Gợi ý từ vựng nên dùng</p>
      <div class="flex flex-wrap gap-1.5">
        <span v-for="w in requiredVocab" :key="w.id" class="font-hanzi rounded border border-ink-200 bg-paper px-2 py-0.5 text-sm text-ink-700">
          {{ w.traditional }}
        </span>
      </div>
    </div>

    <div v-if="requiredGrammar.length" class="mt-3">
      <p class="mb-1 text-xs font-medium uppercase tracking-wide text-ink-400">Gợi ý mẫu câu nên dùng</p>
      <div class="flex flex-wrap gap-1.5">
        <span v-for="g in requiredGrammar" :key="g.id" class="font-hanzi rounded border border-seal-200 bg-seal-50 px-2 py-0.5 text-sm text-seal-700">
          {{ g.pattern }}
        </span>
      </div>
    </div>

    <textarea
      v-model="text"
      rows="8"
      placeholder="Viết bài của bạn ở đây..."
      class="mt-3 w-full rounded-md border border-ink-200 bg-paper px-3 py-2 font-hanzi text-base leading-relaxed outline-none focus:border-seal-500"
    />

    <p class="mt-1 text-xs" :class="inRange ? 'text-jade-600' : 'text-ink-400'">
      {{ length }} / {{ exercise.minLength }}-{{ exercise.maxLength }} chữ
    </p>
  </div>
</template>
