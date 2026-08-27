<script setup lang="ts">
import type { MultipleChoiceExercise } from '../../../types/exercise'

const props = defineProps<{
  exercise: MultipleChoiceExercise
}>()

const showPinyin = usePinyinVisible()

const questionPinyin = computed(() => toPinyinText(props.exercise.question))
const promptPinyin = computed(() => (props.exercise.prompt ? toPinyinText(props.exercise.prompt) : ''))
const optionPinyin = computed(() => new Map(props.exercise.options.map((o) => [o.id, toPinyinText(o.text)])))

const selectedId = ref<string | null>(null)
const checked = ref(false)

const isCorrect = computed(() => selectedId.value === props.exercise.correctOptionId)

function handleCheck() {
  if (selectedId.value) checked.value = true
}

function handleReset() {
  selectedId.value = null
  checked.value = false
}

function optionState(optionId: string) {
  if (!checked.value) return 'idle'
  if (optionId === props.exercise.correctOptionId) return 'correct'
  if (optionId === selectedId.value) return 'wrong'
  return 'idle'
}
</script>

<template>
  <div class="rounded-lg border border-ink-100 bg-white p-4">
    <p v-if="exercise.prompt" class="mb-1 whitespace-pre-line font-hanzi text-sm leading-relaxed text-ink-800">{{ exercise.prompt }}</p>
    <p v-if="exercise.prompt && showPinyin" class="mb-2 whitespace-pre-line font-mono-pinyin text-xs text-ink-400">{{ promptPinyin }}</p>
    <p class="whitespace-pre-line font-hanzi text-base text-ink-900">{{ exercise.question }}</p>
    <p v-if="showPinyin" class="mb-3 whitespace-pre-line font-mono-pinyin text-xs text-ink-400">{{ questionPinyin }}</p>

    <div class="space-y-1.5">
      <label
        v-for="option in exercise.options"
        :key="option.id"
        class="flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition"
        :class="{
          'border-ink-200 hover:border-seal-300': optionState(option.id) === 'idle',
          'border-jade-400 bg-jade-50 text-jade-800': optionState(option.id) === 'correct',
          'border-seal-400 bg-seal-50 text-seal-700': optionState(option.id) === 'wrong'
        }"
      >
        <input
          v-model="selectedId"
          type="radio"
          :value="option.id"
          :disabled="checked"
          class="accent-seal-600"
        >
        <span class="min-w-0">
          <span class="font-hanzi">{{ option.text }}</span>
          <span v-if="showPinyin" class="block font-mono-pinyin text-xs text-ink-400">{{ optionPinyin.get(option.id) }}</span>
        </span>
      </label>
    </div>

    <div class="mt-3 flex items-center gap-3">
      <button
        v-if="!checked"
        type="button"
        :disabled="!selectedId"
        class="rounded-md bg-seal-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-seal-700 disabled:cursor-not-allowed disabled:opacity-40"
        @click="handleCheck"
      >
        Kiểm tra
      </button>
      <button
        v-else
        type="button"
        class="rounded-md border border-ink-200 px-3 py-1.5 text-sm text-ink-600 transition hover:border-seal-300"
        @click="handleReset"
      >
        Làm lại
      </button>
      <span v-if="checked" :class="isCorrect ? 'text-jade-700' : 'text-seal-600'" class="text-sm font-medium">
        {{ isCorrect ? 'Chính xác!' : 'Chưa đúng.' }}
      </span>
    </div>

    <p v-if="checked && exercise.explanationVi" class="mt-2 rounded-md bg-paper px-3 py-2 text-sm text-ink-600">
      {{ exercise.explanationVi }}
    </p>
  </div>
</template>
