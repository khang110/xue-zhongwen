<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import type { VocabItem } from '../../../types/vocab'

const props = defineProps<{
  vocab: VocabItem[]
}>()

const autoSpeak = useAutoSpeakAnswer()
const { speak } = useSpeech()

interface WrongAnswer {
  item: VocabItem
  userInput: string
}

const queue = ref<VocabItem[]>([])
const currentIndex = ref(0)
const correctCount = ref(0)
const wrongAnswers = ref<WrongAnswer[]>([])
const inputValue = ref('')
const checked = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)

const current = computed(() => queue.value[currentIndex.value] ?? null)
const total = computed(() => queue.value.length)
const isDone = computed(() => total.value > 0 && currentIndex.value >= total.value)

const { record } = useStreak()
watch(isDone, (done) => {
  if (done) record('lesson_writing')
})

const isCorrect = computed(() => {
  if (!current.value) return false
  const answer = inputValue.value.trim()
  return answer.length > 0 && (answer === current.value.traditional || answer === current.value.simplified)
})

function loadQuestion() {
  inputValue.value = ''
  checked.value = false
  nextTick(() => inputRef.value?.focus())
}

function startSession() {
  queue.value = shuffled(props.vocab)
  currentIndex.value = 0
  correctCount.value = 0
  wrongAnswers.value = []
  loadQuestion()
}

function retryWrongOnly() {
  if (!wrongAnswers.value.length) return
  queue.value = shuffled(wrongAnswers.value.map((w) => w.item))
  currentIndex.value = 0
  correctCount.value = 0
  wrongAnswers.value = []
  loadQuestion()
}

function goNext() {
  currentIndex.value += 1
  loadQuestion()
}

function handleCheck() {
  if (checked.value || !current.value || !inputValue.value.trim()) return
  checked.value = true
  if (isCorrect.value) {
    correctCount.value += 1
  } else {
    wrongAnswers.value.push({ item: current.value, userInput: inputValue.value.trim() })
  }
  if (autoSpeak.value) {
    speak(current.value.traditional, { simplifiedText: current.value.simplified })
  }
}

onMounted(startSession)
watch(() => props.vocab, startSession)

useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  if (!current.value || e.key !== 'Enter') return
  e.preventDefault()
  if (e.ctrlKey) {
    goNext()
  } else if (!checked.value) {
    handleCheck()
  } else {
    goNext()
  }
})
</script>

<template>
  <div>
    <div v-if="props.vocab.length === 0" class="rounded-lg border border-dashed border-ink-200 p-8 text-center text-ink-400">
      Chưa có từ vựng để luyện viết.
    </div>

    <div v-else-if="isDone" class="rounded-lg border border-dashed border-jade-300 bg-jade-50 p-10 text-center">
      <p class="font-hanzi text-2xl text-jade-800">做完了！</p>
      <p class="mt-1 text-jade-700">Đúng {{ correctCount }} / {{ total }} câu.</p>

      <div v-if="wrongAnswers.length" class="mx-auto mt-6 max-w-lg text-left">
        <h3 class="mb-2 text-sm font-semibold uppercase tracking-wide text-ink-400">
          Các câu sai ({{ wrongAnswers.length }})
        </h3>
        <ul class="space-y-2">
          <li
            v-for="(w, i) in wrongAnswers"
            :key="i"
            class="rounded-lg border border-seal-100 bg-white px-3 py-2 text-left text-sm"
          >
            <p class="text-ink-500">{{ w.item.meaningVi }}</p>
            <p class="mt-0.5 text-ink-600">
              Bạn viết: <span class="font-hanzi text-ink-800">{{ w.userInput || '(bỏ trống)' }}</span>
            </p>
            <p class="mt-0.5 text-ink-600">
              Đáp án: <span class="font-hanzi text-base text-ink-900">{{ w.item.traditional }} / {{ w.item.simplified }}</span>
              <span class="ml-1 font-mono-pinyin text-xs text-ink-400">{{ w.item.pinyin }}</span>
            </p>
          </li>
        </ul>
      </div>

      <div class="mt-6 flex justify-center gap-3">
        <button
          v-if="wrongAnswers.length"
          type="button"
          class="rounded-md bg-seal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-seal-700"
          @click="retryWrongOnly"
        >
          Làm lại câu sai
        </button>
        <button
          type="button"
          class="rounded-md bg-ink-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-ink-900"
          @click="startSession"
        >
          Bắt đầu bài kiểm tra mới
        </button>
      </div>
    </div>

    <div v-else-if="current" class="mx-auto max-w-lg">
      <div class="mb-3 flex items-center justify-between">
        <p class="text-sm text-ink-400">Câu {{ currentIndex + 1 }} / {{ total }}</p>
        <button
          type="button"
          :title="autoSpeak ? 'Đang tự động đọc đáp án - bấm để tắt' : 'Đang tắt tự động đọc - bấm để bật'"
          class="rounded-md border border-ink-200 px-2 py-1 text-xs text-ink-500 transition hover:border-seal-300 hover:text-seal-600"
          @click="autoSpeak = !autoSpeak"
        >
          {{ autoSpeak ? 'Tự đọc đáp án: Bật' : 'Tự đọc đáp án: Tắt' }}
        </button>
      </div>

      <div class="rounded-xl border border-ink-100 bg-white p-6 text-center shadow-sm">
        <p class="text-xs uppercase tracking-wide text-ink-400">Nghĩa tiếng Việt</p>
        <p class="mt-1 text-xl font-medium text-ink-900">{{ current.meaningVi }}</p>
        <p v-if="current.meaningEn" class="mt-1 text-xs text-ink-400">{{ current.meaningEn }}</p>
      </div>

      <input
        ref="inputRef"
        v-model="inputValue"
        type="text"
        :disabled="checked"
        placeholder="Gõ chữ Hán..."
        class="mt-4 w-full rounded-lg border px-4 py-3 text-center font-hanzi text-2xl text-ink-900 outline-none transition disabled:cursor-not-allowed"
        :class="!checked
          ? 'border-ink-200 focus:border-seal-400'
          : isCorrect ? 'border-jade-400 bg-jade-50' : 'border-seal-400 bg-seal-50'"
      >

      <p class="mt-1.5 text-center text-xs text-ink-400">Enter: kiểm tra · Ctrl+Enter: câu tiếp theo</p>

      <div v-if="checked" class="mt-3 rounded-lg bg-paper px-4 py-3 text-center">
        <span :class="isCorrect ? 'text-jade-700' : 'text-seal-600'" class="text-sm font-medium">
          {{ isCorrect ? 'Chính xác!' : 'Chưa đúng.' }}
        </span>
        <p class="mt-1 flex items-center justify-center gap-1.5 text-sm text-ink-600">
          Đáp án: <span class="font-hanzi text-base text-ink-900">{{ current.traditional }} / {{ current.simplified }}</span>
          <span class="font-mono-pinyin text-xs text-ink-400">{{ current.pinyin }}</span>
          <SpeakerButton size="sm" :text="current.traditional" :simplified-text="current.simplified" />
        </p>
      </div>

      <div class="mt-3 flex justify-center">
        <button
          v-if="!checked"
          type="button"
          :disabled="!inputValue.trim()"
          class="rounded-md bg-seal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-seal-700 disabled:cursor-not-allowed disabled:opacity-40"
          @click="handleCheck"
        >
          Kiểm tra
        </button>
        <button
          v-else
          type="button"
          class="rounded-md border border-ink-200 px-4 py-2 text-sm text-ink-600 transition hover:border-seal-300"
          @click="goNext"
        >
          Câu tiếp theo →
        </button>
      </div>
    </div>
  </div>
</template>
