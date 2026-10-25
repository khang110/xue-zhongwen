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

const { canSave, saving, savedAtLabel, justSaved, save, clearSaved } = useSavableExercise(
  props.exercise.id,
  () => ({ kind: 'multiple-choice' as const, selectedId: selectedId.value, checked: checked.value })
)

const isCorrect = computed(() => selectedId.value === props.exercise.correctOptionId)

function handleCheck() {
  if (selectedId.value) checked.value = true
}

function handleReset() {
  selectedId.value = null
  checked.value = false
  clearSaved()
}

function optionState(optionId: string) {
  if (!checked.value) return 'idle'
  if (optionId === props.exercise.correctOptionId) return 'correct'
  if (optionId === selectedId.value) return 'wrong'
  return 'idle'
}
</script>

<template>
  <div class="rounded-[28px] border border-paper-line bg-white p-5">
    <p v-if="exercise.prompt" class="mb-1 whitespace-pre-line font-hanzi text-sm leading-relaxed text-ink-800">{{ exercise.prompt }}</p>
    <p v-if="exercise.prompt && showPinyin" class="mb-2 whitespace-pre-line font-pinyin text-xs text-seal-700">{{ promptPinyin }}</p>
    <p class="whitespace-pre-line font-hanzi text-base text-ink-900">{{ exercise.question }}</p>
    <p v-if="showPinyin" class="mb-3 whitespace-pre-line font-pinyin text-xs text-seal-700">{{ questionPinyin }}</p>

    <div class="space-y-1.5">
      <label
        v-for="option in exercise.options"
        :key="option.id"
        class="flex cursor-pointer items-center gap-2 rounded-full border-[1.5px] px-4 py-2.5 text-sm transition"
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
          <span v-if="showPinyin" class="block font-pinyin text-xs text-seal-700">{{ optionPinyin.get(option.id) }}</span>
        </span>
      </label>
    </div>

    <div class="mt-3 flex items-center gap-3">
      <button
        v-if="!checked"
        type="button"
        :disabled="!selectedId"
        class="rounded-full bg-seal-600 px-5 py-2 text-sm font-semibold text-paper transition hover:bg-seal-700 disabled:cursor-not-allowed disabled:opacity-40"
        @click="handleCheck"
      >
        Kiểm tra
      </button>
      <button
        v-else
        type="button"
        class="rounded-full border border-paper-line px-4 py-2 text-sm font-semibold text-ink-800 transition hover:bg-black/5"
        @click="handleReset"
      >
        Làm lại
      </button>
      <span v-if="checked" :class="isCorrect ? 'text-jade-700' : 'text-seal-600'" class="text-sm font-medium">
        {{ isCorrect ? 'Chính xác!' : 'Chưa đúng.' }}
      </span>
      <ExerciseSaveButton
        :can-save="canSave"
        :saving="saving"
        :just-saved="justSaved"
        :saved-at-label="savedAtLabel"
        @save="save"
      />
    </div>

    <p v-if="checked && exercise.explanationVi" class="mt-2 rounded-[20px] bg-paper px-4 py-2.5 text-sm text-ink-600">
      {{ exercise.explanationVi }}
    </p>
  </div>
</template>
