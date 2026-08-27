<script setup lang="ts">
import type { FillBlankExercise } from '../../../types/exercise'

const props = defineProps<{
  exercise: FillBlankExercise
}>()

const { isCorrectAnswer } = useExerciseChecker()

const showPinyin = usePinyinVisible()

const segments = computed(() => props.exercise.textWithBlanks.split(/_{3,}/))
const fullTextPinyin = computed(() => toPinyinText(props.exercise.textWithBlanks))
const promptPinyin = computed(() => (props.exercise.prompt ? toPinyinText(props.exercise.prompt) : ''))
const wordBankPinyin = computed(() => (props.exercise.wordBank ?? []).map((w) => toPinyinText(w)))
const blanks = computed(() => [...props.exercise.blanks].sort((a, b) => a.index - b.index))

const answers = ref<string[]>(blanks.value.map(() => ''))
const checked = ref(false)

function handleCheck() {
  checked.value = true
}

function handleReset() {
  answers.value = blanks.value.map(() => '')
  checked.value = false
}

function isBlankCorrect(i: number): boolean {
  return isCorrectAnswer(answers.value[i] ?? '', blanks.value[i]?.acceptedAnswers ?? [])
}
</script>

<template>
  <div class="rounded-lg border border-ink-100 bg-white p-4">
    <p v-if="exercise.prompt" class="whitespace-pre-line font-hanzi text-sm leading-relaxed text-ink-600">{{ exercise.prompt }}</p>
    <p v-if="exercise.prompt && showPinyin" class="mb-2 whitespace-pre-line font-mono-pinyin text-xs text-ink-400">{{ promptPinyin }}</p>

    <div v-if="exercise.wordBank?.length" class="mb-3 flex flex-wrap gap-1.5 rounded-md bg-paper px-3 py-2">
      <span
        v-for="(w, i) in exercise.wordBank"
        :key="w"
        class="rounded border border-ink-200 bg-white px-2 py-0.5 text-sm text-ink-700"
      >
        <span class="font-hanzi">{{ w }}</span>
        <span v-if="showPinyin" class="ml-1 font-mono-pinyin text-xs text-ink-400">{{ wordBankPinyin[i] }}</span>
      </span>
    </div>

    <p class="font-hanzi text-base leading-loose text-ink-900">
      <template v-for="(seg, i) in segments" :key="i">
        <span class="whitespace-pre-line">{{ seg }}</span>
        <template v-if="i < blanks.length">
          <input
            v-model="answers[i]"
            :disabled="checked"
            class="mx-1 inline-block w-24 rounded border-b-2 border-ink-300 bg-paper px-1 py-0.5 text-center font-hanzi text-base outline-none focus:border-seal-500"
            :class="checked ? (isBlankCorrect(i) ? 'border-jade-500 bg-jade-50' : 'border-seal-500 bg-seal-50') : ''"
          >
        </template>
      </template>
    </p>
    <p v-if="showPinyin" class="mt-1 whitespace-pre-line font-mono-pinyin text-xs text-ink-400">{{ fullTextPinyin }}</p>

    <div v-if="checked" class="mt-2 space-y-1 text-sm text-ink-600">
      <p v-for="(b, i) in blanks" :key="i">
        <span class="text-ink-400">Chỗ trống {{ i + 1 }} - đáp án tham khảo: </span>
        <span class="font-hanzi text-ink-800">{{ b.acceptedAnswers.join(' / ') }}</span>
      </p>
    </div>

    <div class="mt-3 flex items-center gap-3">
      <button
        v-if="!checked"
        type="button"
        class="rounded-md bg-seal-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-seal-700"
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
    </div>
  </div>
</template>
