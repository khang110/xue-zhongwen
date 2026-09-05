<script setup lang="ts">
import type { ListeningExercise } from '../../../types/exercise'

const props = defineProps<{
  exercise: ListeningExercise
}>()

const showPinyin = usePinyinVisible()

const TF_OPTIONS = [
  { id: 'O', text: 'Đúng (O)' },
  { id: 'X', text: 'Sai (X)' }
]

function optionsFor(item: ListeningExercise['items'][number]) {
  return props.exercise.format === 'true-false' ? TF_OPTIONS : item.options ?? []
}

const questionPinyin = computed(
  () => new Map(props.exercise.items.map((it) => [it.id, it.question ? toPinyinText(it.question) : '']))
)
const optionPinyin = computed(() => {
  const map = new Map<string, string>()
  for (const item of props.exercise.items) {
    for (const opt of optionsFor(item)) {
      if (!map.has(opt.text)) map.set(opt.text, toPinyinText(opt.text))
    }
  }
  return map
})

const answers = reactive<Record<string, string>>({})
const checked = ref(false)

const { canSave, saving, savedAtLabel, justSaved, save, clearSaved } = useSavableExercise(
  props.exercise.id,
  () => ({ kind: 'listening' as const, answers: { ...answers }, checked: checked.value })
)

const allAnswered = computed(() => props.exercise.items.every((it) => answers[it.id]))
const score = computed(() => props.exercise.items.filter((it) => answers[it.id] === it.answer).length)

const audioEl = ref<HTMLAudioElement | null>(null)
const rate = ref(1)
const RATES = [0.75, 1, 1.25]
function setRate(r: number) {
  rate.value = r
  if (audioEl.value) audioEl.value.playbackRate = r
}

const transcriptOpen = ref(false)
const transcriptPinyin = computed(() => (transcriptOpen.value ? toPinyinText(props.exercise.transcript) : ''))

function handleCheck() {
  if (allAnswered.value) checked.value = true
}

function handleReset() {
  for (const item of props.exercise.items) answers[item.id] = ''
  checked.value = false
  clearSaved()
}

function optionState(itemId: string, itemAnswer: string, optionId: string) {
  if (!checked.value) return 'idle'
  if (optionId === itemAnswer) return 'correct'
  if (optionId === answers[itemId]) return 'wrong'
  return 'idle'
}
</script>

<template>
  <div class="rounded-lg border border-ink-100 bg-white p-4">
    <p v-if="exercise.prompt" class="mb-3 text-sm leading-relaxed text-ink-600">{{ exercise.prompt }}</p>

    <div class="flex flex-wrap items-center gap-3">
      <audio ref="audioEl" :src="exercise.audioSrc" controls preload="none" class="h-9 min-w-0 flex-1" />
      <div class="flex shrink-0 items-center gap-1">
        <button
          v-for="r in RATES"
          :key="r"
          type="button"
          class="rounded-md border px-2 py-1 text-xs transition"
          :class="rate === r
            ? 'border-seal-400 bg-seal-50 text-seal-700'
            : 'border-ink-200 text-ink-500 hover:border-seal-300'"
          @click="setRate(r)"
        >
          {{ r }}×
        </button>
      </div>
    </div>

    <ol class="mt-4 space-y-4">
      <li v-for="(item, idx) in exercise.items" :key="item.id">
        <p v-if="item.question" class="whitespace-pre-line font-hanzi text-sm text-ink-900">
          <span class="mr-1 text-ink-400">{{ idx + 1 }}.</span>{{ item.question }}
        </p>
        <p v-else class="text-sm text-ink-400">
          <span class="mr-1">{{ idx + 1 }}.</span>Chọn câu trả lời phù hợp
        </p>
        <p v-if="item.question && showPinyin" class="mb-1 whitespace-pre-line font-mono-pinyin text-xs text-ink-400">
          {{ questionPinyin.get(item.id) }}
        </p>

        <div class="mt-1.5 space-y-1.5">
          <label
            v-for="option in optionsFor(item)"
            :key="option.id"
            class="flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition"
            :class="{
              'border-ink-200 hover:border-seal-300': optionState(item.id, item.answer, option.id) === 'idle',
              'border-jade-400 bg-jade-50 text-jade-800': optionState(item.id, item.answer, option.id) === 'correct',
              'border-seal-400 bg-seal-50 text-seal-700': optionState(item.id, item.answer, option.id) === 'wrong'
            }"
          >
            <input
              v-model="answers[item.id]"
              type="radio"
              :value="option.id"
              :disabled="checked"
              class="accent-seal-600"
            >
            <span class="min-w-0">
              <span class="font-hanzi">{{ option.text }}</span>
              <span
                v-if="showPinyin && exercise.format !== 'true-false'"
                class="block font-mono-pinyin text-xs text-ink-400"
              >{{ optionPinyin.get(option.text) }}</span>
            </span>
          </label>
        </div>
      </li>
    </ol>

    <div class="mt-3 flex flex-wrap items-center gap-3">
      <button
        v-if="!checked"
        type="button"
        :disabled="!allAnswered"
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
      <span v-if="checked" :class="score === exercise.items.length ? 'text-jade-700' : 'text-seal-600'" class="text-sm font-medium">
        {{ score }}/{{ exercise.items.length }} câu đúng
      </span>
      <ExerciseSaveButton
        :can-save="canSave"
        :saving="saving"
        :just-saved="justSaved"
        :saved-at-label="savedAtLabel"
        @save="save"
      />
    </div>

    <details
      v-if="checked"
      class="mt-3 rounded-md bg-paper px-3 py-2 text-sm text-ink-600"
      @toggle="transcriptOpen = ($event.target as HTMLDetailsElement).open"
    >
      <summary class="cursor-pointer select-none font-medium text-ink-500">Lời thoại</summary>
      <p class="mt-2 whitespace-pre-line font-hanzi leading-relaxed text-ink-800">{{ exercise.transcript }}</p>
      <p v-if="showPinyin && transcriptOpen" class="mt-2 whitespace-pre-line font-mono-pinyin text-xs leading-relaxed text-ink-400">
        {{ transcriptPinyin }}
      </p>
    </details>
  </div>
</template>
