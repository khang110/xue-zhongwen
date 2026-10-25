<script setup lang="ts">
import { lessons } from '../../data/lessons'
import type { Exercise, ExerciseSection } from '../../../types/exercise'
import type { WorkbookProgressEntry } from '../../../types/workbook'
import { summarizeSaved } from '../../utils/workbookSaved'
import { WORKBOOK_SECTION_ORDER, sectionHeading } from '../../utils/exerciseSections'

const { user, clear } = useUserSession()

async function handleLogout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  await clear()
  await navigateTo('/login')
}

const exerciseIndex = new Map<string, { exercise: Exercise; lessonNumber: number; lessonTitle: string }>()
/** Số thứ tự (1-based) của bài tập trong mục của nó, đúng thứ tự sách. */
const sectionPosition = new Map<string, number>()
for (const lesson of lessons) {
  for (const section of WORKBOOK_SECTION_ORDER) {
    const inSection = lesson.workbookExercises.filter((ex) => ex.section === section)
    inSection.forEach((ex, i) => sectionPosition.set(ex.id, i + 1))
  }
  for (const ex of lesson.workbookExercises) {
    exerciseIndex.set(ex.id, { exercise: ex, lessonNumber: lesson.number, lessonTitle: lesson.titleVi })
  }
}

const { projection, refresh: refreshStreak } = useStreak()
const { getStats } = useSrsStorage()
const learnedWords = ref(0)
onMounted(async () => {
  refreshStreak()
  try {
    const all = await Promise.all(
      lessons.filter((l) => l.status === 'available').map((l) => getStats(l.vocab.map((v) => v.id)))
    )
    learnedWords.value = all.reduce((sum, s) => sum + s.learned, 0)
  } catch {
    // Thống kê phụ - bỏ qua lỗi mạng.
  }
})

const entries = ref<WorkbookProgressEntry[]>([])
const loading = ref(true)
const failed = ref(false)

async function load() {
  loading.value = true
  failed.value = false
  try {
    entries.value = await $fetch<WorkbookProgressEntry[]>('/api/workbook/all')
  } catch {
    failed.value = true
  } finally {
    loading.value = false
  }
}
onMounted(load)

const groups = computed(() => {
  const byLesson = new Map<number, { title: string; bySection: Map<ExerciseSection, ReturnType<typeof toRow>[]> }>()
  for (const entry of entries.value) {
    const meta = exerciseIndex.get(entry.exerciseId)
    const num = meta?.lessonNumber ?? 999
    const section = meta?.exercise.section ?? 'textbook-practice'
    if (!byLesson.has(num)) byLesson.set(num, { title: meta?.lessonTitle ?? 'Không rõ bài', bySection: new Map() })
    const lessonGroup = byLesson.get(num)!
    if (!lessonGroup.bySection.has(section)) lessonGroup.bySection.set(section, [])
    lessonGroup.bySection.get(section)!.push(toRow(entry))
  }
  return [...byLesson.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([num, g]) => ({
      num,
      title: g.title,
      sections: WORKBOOK_SECTION_ORDER
        .filter((section) => g.bySection.has(section))
        .map((section) => ({
          section,
          label: sectionHeading(section),
          rows: g.bySection.get(section)!.sort((a, b) => a.number - b.number)
        }))
    }))
})

function toRow(entry: WorkbookProgressEntry) {
  const meta = exerciseIndex.get(entry.exerciseId)
  return {
    exerciseId: entry.exerciseId,
    number: sectionPosition.get(entry.exerciseId) ?? 0,
    prompt: meta?.exercise.prompt ?? '',
    savedAtLabel: formatSavedAt(entry.updatedAt),
    summary: summarizeSaved(meta?.exercise, entry.state)
  }
}

async function removeOne(exerciseId: string) {
  try {
    await $fetch('/api/workbook/clear', { method: 'POST', body: { exerciseId } })
    entries.value = entries.value.filter((e) => e.exerciseId !== exerciseId)
  } catch {
    // Bỏ qua — người dùng có thể thử lại.
  }
}

function exportSaved() {
  const payload = {
    exportedAt: new Date().toISOString(),
    account: user.value?.email ?? null,
    count: entries.value.length,
    items: entries.value.map((entry) => {
      const meta = exerciseIndex.get(entry.exerciseId)
      return {
        exerciseId: entry.exerciseId,
        lesson: meta ? `Bài ${meta.lessonNumber}: ${meta.lessonTitle}` : null,
        section: meta?.exercise.section ?? null,
        prompt: meta?.exercise.prompt ?? null,
        savedAt: entry.updatedAt,
        answer: entry.state
      }
    })
  }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `bai-tap-da-luu-${new Date().toISOString().slice(0, 10)}.json`
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div>
    <header class="mb-8 flex pt-6 flex-wrap items-end justify-between gap-3">
      <div>
        <h1 class="font-heading text-[44px] font-bold text-ink-800">{{ user?.name ?? user?.email }}</h1>
        <p class="mt-1 text-ink-500">{{ user?.name ? user.email + ' · ' : '' }}{{ entries.length }} bài tập đã lưu</p>
      </div>
      <div class="flex gap-2">
        <button
          type="button"
          :disabled="!entries.length"
          class="rounded-full border border-paper-line px-4 py-2 text-sm font-semibold text-ink-800 transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40"
          @click="exportSaved"
        >
          Xuất bài đã lưu (JSON)
        </button>
        <button type="button" class="rounded-full px-4 py-2 text-sm font-semibold text-seal-600 transition hover:bg-seal-50" @click="handleLogout">
          Đăng xuất
        </button>
      </div>
    </header>

    <section class="mb-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
      <div class="flex flex-col gap-1 rounded-[32px] border border-paper-line bg-seal-100 p-6 text-seal-900">
        <span class="font-heading text-5xl font-bold leading-none text-seal-800">{{ projection?.currentStreak ?? 0 }}</span>
        <span class="font-bold">ngày liên tục</span>
      </div>
      <div class="flex flex-col gap-1 rounded-[32px] border border-paper-line bg-white p-6">
        <span class="font-heading text-5xl font-bold leading-none">{{ projection?.longestStreak ?? 0 }}</span>
        <span class="font-bold">ngày kỷ lục</span>
      </div>
      <div class="flex flex-col gap-1 rounded-[32px] border border-paper-line bg-jade-100 p-6 text-jade-900">
        <span class="font-heading text-5xl font-bold leading-none text-jade-800">{{ learnedWords }}</span>
        <span class="font-bold">từ đã thuộc</span>
      </div>
      <div class="flex flex-col gap-1 rounded-[32px] border border-paper-line bg-white p-6">
        <span class="font-heading text-5xl font-bold leading-none">{{ projection?.freezesAvailable ?? 0 }}</span>
        <span class="font-bold">lá chắn streak</span>
      </div>
    </section>

    <p v-if="loading" class="text-sm text-ink-400">Đang tải…</p>
    <p v-else-if="failed" class="text-sm text-seal-600">Không tải được danh sách bài đã lưu.</p>
    <p v-else-if="!entries.length" class="text-sm text-ink-400">
      Chưa có bài tập nào được lưu. Vào tab <span class="font-medium">Bài tập</span> của một bài học rồi bấm “Lưu lại”.
    </p>

    <div v-else class="space-y-10">
      <section v-for="group in groups" :key="group.num">
        <h2 class="mb-4 rounded-full bg-jade-100 px-5 py-2.5 text-base font-bold text-jade-900">
          Bài {{ group.num }}: {{ group.title }}
        </h2>

        <div class="space-y-6 pl-1">
          <div v-for="sec in group.sections" :key="sec.section">
            <h3 class="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
              {{ sec.label }}
            </h3>
            <div class="space-y-3">
              <article
                v-for="row in sec.rows"
                :key="row.exerciseId"
                class="flex items-start gap-3 rounded-[28px] border border-paper-line bg-white p-5"
              >
                <ExerciseNumberBadge :number="row.number" />
                <div class="min-w-0 flex-1">
                  <div class="flex items-start justify-between gap-3">
                    <p v-if="row.prompt" class="min-w-0 text-sm text-ink-600">{{ row.prompt }}</p>
                    <button
                      type="button"
                      class="shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-seal-600 transition hover:bg-seal-50"
                      @click="removeOne(row.exerciseId)"
                    >
                      Xoá
                    </button>
                  </div>

                  <p v-if="row.summary.freeText !== undefined" class="mt-2 whitespace-pre-line font-hanzi text-sm text-ink-800">
                    {{ row.summary.freeText || '(chưa viết)' }}
                  </p>
                  <ul v-else class="mt-2 space-y-0.5 text-sm">
                    <li v-for="(ln, i) in row.summary.lines" :key="i">
                      <span class="text-ink-400"><template v-if="ln.label">{{ ln.label }}: </template></span>
                      <span class="font-hanzi text-ink-800">{{ ln.value }}</span>
                    </li>
                  </ul>

                  <p v-if="row.summary.score" class="mt-1 text-xs font-medium text-jade-700">
                    Kết quả: {{ row.summary.score }}
                  </p>
                  <p class="mt-2 text-xs text-ink-400">Đã lưu lúc {{ row.savedAtLabel }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
