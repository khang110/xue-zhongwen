<script setup lang="ts">
import type { VocabItem } from '../../../types/vocab'

const props = defineProps<{
  vocab: VocabItem[]
}>()

const useSimplifiedChars = useSimplified()
const autoSpeak = useAutoSpeakAnswer()
const autoNextOnCorrect = useAutoNextOnCorrect()
const { speak } = useSpeech()

function displayText(item: VocabItem) {
  return useSimplifiedChars.value ? item.simplified : item.traditional
}

const queue = ref<VocabItem[]>([])
const currentIndex = ref(0)
const correctCount = ref(0)
const selectedId = ref<string | null>(null)
const checked = ref(false)
const options = ref<{ id: string, text: string }[]>([])

let autoNextTimer: ReturnType<typeof setTimeout> | null = null

const current = computed(() => queue.value[currentIndex.value] ?? null)
const total = computed(() => queue.value.length)
const isDone = computed(() => total.value > 0 && currentIndex.value >= total.value)
const isCorrect = computed(() => !!current.value && selectedId.value === current.value.id)

const { record } = useStreak()
watch(isDone, (done) => {
  if (done) record('lesson_quiz')
})

function clearAutoNext() {
  if (autoNextTimer) {
    clearTimeout(autoNextTimer)
    autoNextTimer = null
  }
}

function buildOptions(item: VocabItem) {
  const pool = props.vocab.filter((v) => v.id !== item.id)
  const distractors = shuffled(pool).slice(0, 3)
  options.value = shuffled([item, ...distractors]).map((v) => ({ id: v.id, text: displayText(v) }))
}

function loadQuestion() {
  selectedId.value = null
  checked.value = false
  const item = queue.value[currentIndex.value]
  if (item) buildOptions(item)
}

function startSession() {
  clearAutoNext()
  queue.value = shuffled(props.vocab)
  currentIndex.value = 0
  correctCount.value = 0
  loadQuestion()
}

function goNext() {
  clearAutoNext()
  currentIndex.value += 1
  loadQuestion()
}

function selectOption(optionId: string) {
  if (checked.value || !current.value) return
  selectedId.value = optionId
  checked.value = true
  if (optionId === current.value.id) {
    correctCount.value += 1
    if (autoSpeak.value) {
      speak(current.value.traditional, { simplifiedText: current.value.simplified })
    }
    if (autoNextOnCorrect.value) {
      autoNextTimer = setTimeout(goNext, 700)
    }
  }
}

function optionState(optionId: string) {
  if (!checked.value || !current.value) return 'idle'
  if (optionId === current.value.id) return 'correct'
  if (optionId === selectedId.value) return 'wrong'
  return 'idle'
}

onMounted(startSession)
watch(() => props.vocab, startSession)
onUnmounted(clearAutoNext)
</script>

<template>
  <div>
    <div v-if="props.vocab.length < 2" class="rounded-lg border border-dashed border-ink-200 p-8 text-center text-ink-400">
      Cần ít nhất 2 từ vựng để tạo câu hỏi kiểm tra.
    </div>

    <div v-else-if="isDone" class="rounded-lg border border-dashed border-jade-300 bg-jade-50 p-10 text-center">
      <p class="font-hanzi text-2xl text-jade-800">做完了！</p>
      <p class="mt-1 text-jade-700">Đúng {{ correctCount }} / {{ total }} câu.</p>
      <button
        type="button"
        class="mt-4 rounded-md bg-ink-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-ink-900"
        @click="startSession"
      >
        Làm lại
      </button>
    </div>

    <div v-else-if="current" class="mx-auto max-w-lg">
      <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p class="text-sm text-ink-400">Câu {{ currentIndex + 1 }} / {{ total }}</p>
        <div class="flex gap-2">
          <button
            type="button"
            :title="autoNextOnCorrect ? 'Đang tự động chuyển câu khi đúng - bấm để tắt' : 'Đang tắt tự động chuyển câu - bấm để bật'"
            class="rounded-md border border-ink-200 px-2 py-1 text-xs text-ink-500 transition hover:border-seal-300 hover:text-seal-600"
            @click="autoNextOnCorrect = !autoNextOnCorrect"
          >
            {{ autoNextOnCorrect ? 'Tự động next: Bật' : 'Tự động next: Tắt' }}
          </button>
          <button
            type="button"
            :title="autoSpeak ? 'Đang tự động đọc đáp án đúng - bấm để tắt' : 'Đang tắt tự động đọc - bấm để bật'"
            class="rounded-md border border-ink-200 px-2 py-1 text-xs text-ink-500 transition hover:border-seal-300 hover:text-seal-600"
            @click="autoSpeak = !autoSpeak"
          >
            {{ autoSpeak ? 'Tự đọc đáp án: Bật' : 'Tự đọc đáp án: Tắt' }}
          </button>
        </div>
      </div>

      <div class="rounded-xl border border-ink-100 bg-white p-6 text-center shadow-sm">
        <p class="text-xs uppercase tracking-wide text-ink-400">Nghĩa tiếng Việt</p>
        <p class="mt-1 text-xl font-medium text-ink-900">{{ current.meaningVi }}</p>
        <p v-if="current.meaningEn" class="mt-1 text-xs text-ink-400">{{ current.meaningEn }}</p>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-3">
        <button
          v-for="option in options"
          :key="option.id"
          type="button"
          :disabled="checked"
          class="rounded-lg border px-4 py-3 text-center font-hanzi text-2xl transition disabled:cursor-not-allowed"
          :class="{
            'border-ink-200 hover:border-seal-300': optionState(option.id) === 'idle',
            'border-jade-400 bg-jade-50 text-jade-800': optionState(option.id) === 'correct',
            'border-seal-400 bg-seal-50 text-seal-700': optionState(option.id) === 'wrong'
          }"
          @click="selectOption(option.id)"
        >
          {{ option.text }}
        </button>
      </div>

      <div v-if="checked" class="mt-4 text-center">
        <p :class="isCorrect ? 'text-jade-700' : 'text-seal-600'" class="text-sm font-medium">
          {{ isCorrect ? 'Chính xác!' : 'Chưa đúng.' }}
        </p>
        <p class="mt-1 flex items-center justify-center gap-1.5 text-sm text-ink-600">
          Đáp án: <span class="font-hanzi text-base text-ink-900">{{ displayText(current) }}</span>
          <span class="font-mono-pinyin text-xs text-ink-400">{{ current.pinyin }}</span>
          <SpeakerButton size="sm" :text="current.traditional" :simplified-text="current.simplified" />
        </p>
        <div class="mt-2 flex items-center justify-center gap-3">
          <button
            v-if="!isCorrect || !autoNextOnCorrect"
            type="button"
            class="rounded-md border border-ink-200 px-3 py-1.5 text-sm text-ink-600 transition hover:border-seal-300"
            @click="goNext"
          >
            Câu tiếp theo →
          </button>
          <span v-else class="text-xs text-ink-400">Đang tự động chuyển câu tiếp theo…</span>
        </div>
      </div>
    </div>
  </div>
</template>
