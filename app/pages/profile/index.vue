<script setup lang="ts">
import { lessons } from '../../data/lessons'
import type { Exercise, ExerciseSection } from '../../../types/exercise'
import type { WorkbookProgressEntry } from '../../../types/workbook'
import { summarizeSaved } from '../../utils/workbookSaved'
import { WORKBOOK_SECTION_ORDER, sectionHeading } from '../../utils/exerciseSections'

const { user } = useUserSession()

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
    <header class="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 class="font-hanzi text-2xl font-semibold text-ink-900">Trang cá nhân</h1>
        <p class="mt-1 text-sm text-ink-500">{{ user?.name ?? user?.email }} · {{ entries.length }} bài tập đã lưu</p>
      </div>
      <button
        type="button"
        :disabled="!entries.length"
        class="rounded-md border border-ink-200 px-3 py-1.5 text-sm text-ink-600 transition hover:border-seal-300 hover:text-seal-600 disabled:cursor-not-allowed disabled:opacity-40"
        @click="exportSaved"
      >
        Xuất bài đã lưu (JSON)
      </button>
    </header>

    <p v-if="loading" class="text-sm text-ink-400">Đang tải…</p>
    <p v-else-if="failed" class="text-sm text-seal-600">Không tải được danh sách bài đã lưu.</p>
    <p v-else-if="!entries.length" class="text-sm text-ink-400">
      Chưa có bài tập nào được lưu. Vào tab <span class="font-medium">Bài tập</span> của một bài học rồi bấm “Lưu lại”.
    </p>

    <div v-else class="space-y-10">
      <section v-for="group in groups" :key="group.num">
        <h2 class="mb-4 rounded-md border-l-4 border-jade-500 bg-jade-50 py-2 pl-3 text-base font-semibold text-ink-800">
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
                class="flex items-start gap-3 rounded-lg border border-ink-100 bg-white p-4"
              >
                <ExerciseNumberBadge :number="row.number" />
                <div class="min-w-0 flex-1">
                  <div class="flex items-start justify-between gap-3">
                    <p v-if="row.prompt" class="min-w-0 text-sm text-ink-600">{{ row.prompt }}</p>
                    <button
                      type="button"
                      class="shrink-0 rounded-md border border-seal-200 px-2.5 py-1 text-xs text-seal-600 transition hover:bg-seal-50"
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
