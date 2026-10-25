<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import type { SrsGrade } from '../../../types/srs'

const props = defineProps<{
  tag?: string
}>()

const { current, total, remaining, isDone, loading, error, start, grade } = useDailyReview()
const flipped = ref(false)
const grading = ref(false)
const progressPct = computed(() => (total.value ? ((total.value - remaining.value) / total.value) * 100 : 0))

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

    <div v-else-if="error && !current" class="rounded-[32px] border border-seal-200 bg-seal-50 p-6 text-center text-seal-700">
      {{ error }}
    </div>

    <div v-else-if="total === 0" class="max-w-[560px] rounded-[32px] border border-paper-line bg-white p-10">
      <p class="font-hanzi text-[40px] font-bold text-ink-800">太好了！</p>
      <p class="mt-1 text-ink-500">Hiện không có thẻ nào đến hạn ôn tập.</p>
    </div>

    <div v-else-if="isDone" class="flex max-w-[560px] flex-col items-start gap-3 rounded-[32px] border border-paper-line bg-jade-100 p-10">
      <p class="font-hanzi text-[56px] font-bold text-jade-900">做完了！</p>
      <p class="text-[17px] text-jade-900">Bạn đã ôn xong {{ total }} thẻ hôm nay.</p>
      <NuxtLink to="/" class="rounded-full bg-seal-600 px-5 py-2.5 font-semibold text-paper transition hover:bg-seal-700">Về trang chủ</NuxtLink>
    </div>

    <div v-else-if="current" class="grid items-start gap-10 md:grid-cols-[minmax(0,380px)_minmax(0,560px)]">
      <div class="flex flex-col gap-4">
        <span class="kicker">{{ tag ? 'Ôn theo chủ đề' : 'Ôn tập hôm nay' }}</span>
        <h1 class="font-heading text-5xl font-bold leading-[1.05] text-ink-800">Còn {{ remaining }} thẻ</h1>
        <div class="h-3 overflow-hidden rounded-full bg-paper-line">
          <div class="h-full rounded-full bg-seal-600 transition-all duration-300" :style="{ width: `${progressPct}%` }" />
        </div>
        <p class="text-ink-500">
          <template v-if="tag">Chủ đề <TagBadge :tag="tag" />.</template>
          <template v-else>Từ tất cả bài đã học · thẻ đến hạn trước, sau đó tối đa 10 thẻ mới.</template>
        </p>
        <div class="flex flex-wrap gap-2 text-[13px] text-ink-500">
          <span class="rounded-full bg-ink-100 px-2.5 py-1"><strong>Space</strong> lật thẻ</span>
          <span class="rounded-full bg-ink-100 px-2.5 py-1"><strong>1–4</strong> chấm điểm</span>
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <Flashcard :item="current" :flipped="flipped" @flip="handleFlip" />

        <p v-if="error" class="text-center text-sm text-seal-600">{{ error }}</p>

        <FlashcardResultBar v-if="flipped" @grade="handleGrade" />
        <button
          v-else
          type="button"
          class="rounded-full bg-seal-600 py-3.5 text-base font-semibold text-paper transition hover:bg-seal-700"
          @click="handleFlip"
        >
          Lật thẻ
        </button>
      </div>
    </div>
  </div>
</template>
