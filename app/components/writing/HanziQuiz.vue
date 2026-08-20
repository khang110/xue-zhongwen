<script setup lang="ts">
import type HanziWriter from 'hanzi-writer'

const props = withDefaults(
  defineProps<{
    character: string
    size?: number
  }>(),
  { size: 220 }
)

const { create } = useHanziWriter()
const container = ref<HTMLElement | null>(null)
let writer: HanziWriter | null = null

const mistakes = ref(0)
const completed = ref(false)

function startQuiz() {
  if (!writer) return
  mistakes.value = 0
  completed.value = false
  writer.quiz({
    onMistake: () => {
      mistakes.value += 1
    },
    onComplete: (summary) => {
      mistakes.value = summary.totalMistakes
      completed.value = true
    }
  })
}

function mountWriter() {
  if (!container.value) return
  container.value.innerHTML = ''
  writer = create(container.value, props.character, props.size)
  startQuiz()
}

onMounted(mountWriter)
watch(() => props.character, mountWriter)
</script>

<template>
  <div class="text-center">
    <div
      ref="container"
      class="mx-auto rounded-xl border border-ink-100 bg-white"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />

    <p class="mt-3 text-sm text-ink-500">
      Số lần viết sai: <span class="font-medium text-ink-800">{{ mistakes }}</span>
    </p>
    <p v-if="completed" class="mt-1 text-sm font-medium text-jade-600">Viết đúng rồi! 寫對了！</p>

    <button
      type="button"
      class="mt-3 rounded-md border border-ink-200 px-3 py-1.5 text-sm text-ink-600 transition hover:border-seal-300"
      @click="startQuiz"
    >
      Viết lại từ đầu
    </button>
  </div>
</template>
