<script setup lang="ts">
import { lessons } from '../data/lessons'
import type { SrsStats } from '../../types/srs'

const NuxtLinkComp = resolveComponent('NuxtLink')
const { getStats } = useSrsStorage()
const { user } = useUserSession()
const { projection, refresh: refreshStreak } = useStreak()
const useSimplifiedChars = useSimplified()

const availableLessons = computed(() => lessons.filter((l) => l.status === 'available'))
const stats = ref<Record<string, SrsStats>>({})
const totalDueToday = computed(() => Object.values(stats.value).reduce((sum, s) => sum + s.dueToday, 0))

onMounted(async () => {
  refreshStreak()
  await Promise.all(
    availableLessons.value.map(async (lesson) => {
      const ids = lesson.vocab.map((v) => v.id)
      stats.value[lesson.id] = await getStats(ids)
    })
  )
})

function percentFor(lessonId: string): number {
  const s = stats.value[lessonId]
  if (!s || s.total === 0) return 0
  return Math.round((s.learned / s.total) * 100)
}

const displayName = computed(() => user.value?.name ?? user.value?.email?.split('@')[0] ?? '')
const todayLabel = computed(() => {
  const d = new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' })
  return d.charAt(0).toUpperCase() + d.slice(1)
})

/** Bài đang học dở (đã thuộc một phần) hoặc bài khả dụng đầu tiên. */
const continueLesson = computed(
  () =>
    availableLessons.value.find((l) => {
      const s = stats.value[l.id]
      return s && s.learned > 0 && s.learned < s.total
    }) ?? availableLessons.value[0]
)

function statusFor(lessonId: string, status: string) {
  if (status !== 'available') return { label: 'Sắp có', tag: 'bg-ink-100 text-ink-600' }
  const s = stats.value[lessonId]
  if (s && s.total > 0 && s.learned >= s.total) return { label: 'Hoàn thành', tag: 'bg-jade-50 text-jade-700' }
  if (s && s.learned > 0) return { label: 'Đang học', tag: 'bg-seal-50 text-seal-800' }
  return { label: 'Chưa học', tag: 'bg-ink-100 text-ink-600' }
}
</script>

<template>
  <div class="flex flex-col gap-14 pt-6">
    <section class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-8">
      <div class="flex max-w-[600px] flex-col gap-5">
        <span class="kicker">{{ todayLabel }}</span>
        <h1 class="font-heading text-[clamp(36px,5vw,54px)] font-bold leading-[1.05] text-ink-800 [text-wrap:pretty]">
          Chào {{ displayName }},
          <template v-if="totalDueToday > 0">hôm nay có {{ totalDueToday }} thẻ đang chờ bạn.</template>
          <template v-else>hôm nay bạn đã ôn xong rồi.</template>
        </h1>
        <p class="max-w-[460px] text-[17px] text-ink-500 [text-wrap:pretty]">
          <template v-if="totalDueToday > 0">Ôn tập vài phút để giữ chuỗi ngày học liên tục</template>
          <template v-else>Học thêm từ mới để giữ nhịp học đều đặn</template>
          <template v-if="continueLesson">, rồi học tiếp Bài {{ continueLesson.number }}.</template>
        </p>
        <div class="flex flex-wrap gap-2.5">
          <NuxtLink
            to="/review"
            class="inline-flex items-center gap-2 rounded-full bg-seal-600 px-6 py-3.5 text-base font-semibold text-paper transition hover:bg-seal-700"
          >
            Bắt đầu ôn tập
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </NuxtLink>
          <NuxtLink
            v-if="continueLesson"
            :to="`/lessons/${continueLesson.id}`"
            class="inline-flex items-center rounded-full border border-paper-line px-6 py-3.5 text-base font-semibold text-ink-800 transition hover:bg-black/5"
          >
            Tiếp tục Bài {{ continueLesson.number }}
          </NuxtLink>
        </div>
      </div>

      <div class="relative aspect-square w-[min(100%,400px)] justify-self-start">
        <div class="absolute inset-0 rounded-full bg-seal-100" />
        <div class="absolute -left-[6%] top-[2%] aspect-square w-[30%] rounded-full bg-jade-200" />
        <div class="absolute inset-0 flex flex-col items-center justify-center gap-1 text-seal-900">
          <span class="font-heading text-[120px] font-bold leading-none text-seal-800">{{ projection?.currentStreak ?? 0 }}</span>
          <span class="text-[17px] font-bold">ngày liên tục</span>
          <span v-if="!projection" class="mt-3 text-[13px]">&nbsp;</span>
          <span v-else-if="projection.currentStreak === 0 && projection.longestStreak === 0" class="mt-3 max-w-[220px] text-center text-[13px]">
            Ôn tập hôm nay để bắt đầu chuỗi ngày đầu tiên.
          </span>
          <span v-else class="mt-3 text-center text-[13px]">
            <template v-if="projection.longestStreak > 0">Kỷ lục {{ projection.longestStreak }} ngày</template>
            <template v-if="projection.longestStreak > 0 && projection.freezesAvailable > 0"> · </template>
            <template v-if="projection.freezesAvailable > 0">còn {{ projection.freezesAvailable }} lá chắn</template>
          </span>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-5">
      <div class="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h2 class="font-heading text-[32px] font-bold text-ink-800">12 bài học</h2>
        <span class="font-hanzi text-ink-500">當代中文課程 3 · TOCFL B1</span>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <component
          :is="lesson.status === 'available' ? NuxtLinkComp : 'div'"
          v-for="lesson in lessons"
          :key="lesson.id"
          :to="lesson.status === 'available' ? `/lessons/${lesson.id}` : undefined"
          class="flex flex-col gap-3.5 rounded-[32px] border border-paper-line bg-white p-[22px] text-left transition"
          :class="lesson.status === 'available' ? 'hover:-translate-y-0.5 hover:shadow-md' : 'cursor-not-allowed opacity-60'"
        >
          <div class="flex items-center justify-between gap-2.5">
            <span
              class="seal-mark h-[42px] w-[42px] shrink-0 font-pinyin text-[17px] font-semibold"
              :class="percentFor(lesson.id) >= 100 ? 'bg-jade-500 text-paper' : 'text-seal-600'"
            >{{ lesson.number }}</span>
            <span class="inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold" :class="statusFor(lesson.id, lesson.status).tag">
              {{ statusFor(lesson.id, lesson.status).label }}
            </span>
          </div>
          <div class="flex min-h-[76px] flex-col gap-0.5">
            <span class="font-hanzi text-2xl font-semibold leading-[1.3] text-ink-800">
              {{ useSimplifiedChars ? lesson.titleSimplified : lesson.titleTraditional }}
            </span>
            <span class="text-sm text-ink-500 [text-wrap:pretty]">{{ lesson.titleVi }}</span>
          </div>
          <div v-if="lesson.status === 'available'" class="flex flex-col gap-1.5">
            <div class="h-2 overflow-hidden rounded-full bg-paper-line">
              <div class="h-full rounded-full bg-jade-500" :style="{ width: `${percentFor(lesson.id)}%` }" />
            </div>
            <span class="text-xs text-ink-500">
              <template v-if="stats[lesson.id]">
                {{ stats[lesson.id]!.learned }}/{{ stats[lesson.id]!.total }} từ đã thuộc
                <span v-if="stats[lesson.id]!.dueToday > 0" class="text-seal-600"> · {{ stats[lesson.id]!.dueToday }} đến hạn</span>
              </template>
              <template v-else>&nbsp;</template>
            </span>
          </div>
        </component>
      </div>
    </section>
  </div>
</template>
