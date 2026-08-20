<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import type { SrsGrade } from '../../../types/srs'

const props = defineProps<{
  tag?: string
}>()

const { current, total, remaining, isDone, loading, error, start, grade } = useDailyReview()
const flipped = ref(false)
const grading = ref(false)

onMounted(() => start(props.tag))

function handleFlip() {
  if (!current.value) return
  flipped.value = !flipped.value
}

async function handleGrade(value: SrsGrade) {
  if (!current.value || grading.value) return
  grading.value = true
  const ok = await grade(value)
  grading.value = false
  if (ok) flipped.value = false
}

useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  if (loading.value || isDone.value || !current.value) return
  if (e.code === 'Space') {
    e.preventDefault()
    handleFlip()
    return
  }
  if (!flipped.value) return
  if (e.key === '1') handleGrade(0)
  else if (e.key === '2') handleGrade(1)
  else if (e.key === '3') handleGrade(2)
  else if (e.key === '4') handleGrade(3)
})
</script>

<template>
  <div>
    <div v-if="loading" class="py-16 text-center text-ink-400">Đang tải thẻ ôn tập...</div>

    <div v-else-if="error && !current" class="rounded-lg border border-seal-200 bg-seal-50 p-6 text-center text-seal-700">
      {{ error }}
    </div>

    <div v-else-if="total === 0" class="rounded-lg border border-dashed border-ink-200 p-10 text-center">
      <p class="font-hanzi text-2xl text-ink-800">太好了！</p>
      <p class="mt-1 text-ink-500">Hiện không có thẻ nào đến hạn ôn tập.</p>
    </div>

    <div v-else-if="isDone" class="rounded-lg border border-dashed border-jade-300 bg-jade-50 p-10 text-center">
      <p class="font-hanzi text-2xl text-jade-800">做完了！</p>
      <p class="mt-1 text-jade-700">Bạn đã ôn xong {{ total }} thẻ hôm nay.</p>
      <NuxtLink to="/" class="mt-4 inline-block text-sm text-seal-600 hover:underline">← Quay lại trang chủ</NuxtLink>
    </div>

    <div v-else-if="current">
      <p class="mb-4 text-center text-sm text-ink-400">Còn {{ remaining }} / {{ total }} thẻ</p>

      <Flashcard :item="current" :flipped="flipped" @flip="handleFlip" />

      <p v-if="error" class="mt-3 text-center text-sm text-seal-600">{{ error }}</p>

      <div class="mx-auto mt-6 max-w-sm">
        <FlashcardResultBar v-if="flipped" @grade="handleGrade" />
        <button
          v-else
          type="button"
          class="w-full rounded-lg bg-ink-800 py-2.5 text-sm font-medium text-white transition hover:bg-ink-900"
          @click="handleFlip"
        >
          Lật thẻ (Space)
        </button>
      </div>
    </div>
  </div>
</template>
