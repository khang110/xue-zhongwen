import type { InjectionKey, Ref } from 'vue'
import type { WorkbookProgressEntry, WorkbookSavedState } from '../../types/workbook'

interface WorkbookProgressApi {
  /** true khi đã tải xong danh sách bài đã lưu từ server (dù thành công hay lỗi). */
  ready: Ref<boolean>
  /** id bài tập đang trong quá trình gọi API lưu (lưu lẻ), hoặc null. */
  pendingId: Ref<string | null>
  /** true khi đang chạy "Lưu lại tất cả". */
  bulkSaving: Ref<boolean>
  /** số bài tập hiện đã có bản lưu (để hiển thị ở nút/nhãn). */
  savedCount: Ref<number>
  savedAtOf: (exerciseId: string) => string | undefined
  save: (exerciseId: string, state: WorkbookSavedState) => Promise<void>
  clear: (exerciseId: string) => Promise<void>
  /** component bài tập tự đăng ký hàm dựng state để "Lưu lại tất cả" gọi được. */
  register: (exerciseId: string, buildState: () => WorkbookSavedState) => void
  unregister: (exerciseId: string) => void
  saveAll: () => Promise<void>
}

const WORKBOOK_PROGRESS_KEY: InjectionKey<WorkbookProgressApi> = Symbol('workbook-progress')

/**
 * Dùng một lần ở LessonPractice: tải danh sách bài đã lưu của bài học trong một
 * request và cung cấp cho các component bài tập con qua provide/inject. Server
 * (SQLite, keyed theo user_id) là nguồn sự thật duy nhất — giống SRS/streak.
 *
 * Lưu ý: chỉ lưu, KHÔNG khôi phục đáp án khi quay lại — bản lưu là bản ghi để
 * xem lại ở trang cá nhân, không đổ ngược vào ô bài tập.
 */
export function provideWorkbookProgress(exerciseIds: Ref<string[]>): WorkbookProgressApi {
  const savedAt = reactive<Record<string, string | undefined>>({})
  const ready = ref(false)
  const pendingId = ref<string | null>(null)
  const bulkSaving = ref(false)
  const builders = new Map<string, () => WorkbookSavedState>()

  const savedCount = computed(() => Object.values(savedAt).filter(Boolean).length)

  async function load() {
    ready.value = false
    for (const key of Object.keys(savedAt)) savedAt[key] = undefined
    try {
      const rows = await $fetch<WorkbookProgressEntry[]>('/api/workbook/progress', {
        query: { ids: exerciseIds.value.join(',') }
      })
      for (const row of rows) savedAt[row.exerciseId] = row.updatedAt
    } catch {
      // Đọc danh sách bài đã lưu thất bại không được chặn việc làm bài.
    } finally {
      ready.value = true
    }
  }

  onMounted(load)
  watch(exerciseIds, load)

  async function saveOne(id: string, state: WorkbookSavedState) {
    const res = await $fetch<{ ok: true; updatedAt: string }>('/api/workbook/save', {
      method: 'POST',
      body: { exerciseId: id, state }
    })
    savedAt[id] = res.updatedAt
  }

  const api: WorkbookProgressApi = {
    ready,
    pendingId,
    bulkSaving,
    savedCount,
    savedAtOf: (id) => savedAt[id],
    async save(id, state) {
      pendingId.value = id
      try {
        await saveOne(id, state)
      } finally {
        pendingId.value = null
      }
    },
    async clear(id) {
      savedAt[id] = undefined
      try {
        await $fetch('/api/workbook/clear', { method: 'POST', body: { exerciseId: id } })
      } catch {
        // Xoá bản lưu trên server thất bại — bỏ qua, lần lưu sau sẽ ghi đè.
      }
    },
    register(id, buildState) {
      builders.set(id, buildState)
    },
    unregister(id) {
      builders.delete(id)
    },
    async saveAll() {
      bulkSaving.value = true
      try {
        await Promise.all([...builders.entries()].map(([id, build]) => saveOne(id, build())))
      } catch {
        // Một số bài lưu lỗi — phần còn lại vẫn được lưu; người dùng bấm lại được.
      } finally {
        bulkSaving.value = false
      }
    }
  }

  provide(WORKBOOK_PROGRESS_KEY, api)
  return api
}

/** Dùng trong component bài tập. Trả về null nếu không nằm trong LessonPractice. */
export function useWorkbookProgress(): WorkbookProgressApi | null {
  return inject(WORKBOOK_PROGRESS_KEY, null)
}

/** Nhãn "đã lưu lúc..." ngắn gọn theo giờ Việt Nam. */
export function formatSavedAt(iso: string | undefined): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Gắn khả năng lưu cho một component bài tập:
 * - `save()` gói state hiện tại bằng `buildState` rồi gửi lên server;
 * - tự đăng ký `buildState` để nút "Lưu lại tất cả" ở LessonPractice gọi được;
 * - `clearSaved()` xoá bản lưu (gọi kèm khi bấm "Làm lại").
 * KHÔNG khôi phục đáp án khi mở lại.
 */
export function useSavableExercise(exerciseId: string, buildState: () => WorkbookSavedState) {
  const wb = useWorkbookProgress()
  const justSaved = ref(false)
  let justSavedTimer: ReturnType<typeof setTimeout> | undefined

  onMounted(() => wb?.register(exerciseId, buildState))
  onBeforeUnmount(() => {
    wb?.unregister(exerciseId)
    if (justSavedTimer) clearTimeout(justSavedTimer)
  })

  const canSave = computed(() => wb !== null)
  const saving = computed(() => wb?.pendingId.value === exerciseId || (wb?.bulkSaving.value ?? false))
  const savedAtLabel = computed(() => formatSavedAt(wb?.savedAtOf(exerciseId)))

  // Hiện "✓ Đã lưu" thoáng qua khi timestamp thay đổi (kể cả do "Lưu lại tất cả").
  watch(
    () => wb?.savedAtOf(exerciseId),
    (next, prev) => {
      if (next && next !== prev) {
        justSaved.value = true
        if (justSavedTimer) clearTimeout(justSavedTimer)
        justSavedTimer = setTimeout(() => {
          justSaved.value = false
        }, 2000)
      }
    }
  )

  async function save() {
    if (!wb) return
    try {
      await wb.save(exerciseId, buildState())
    } catch {
      // Lỗi mạng: giữ nguyên bài làm, người dùng có thể bấm lưu lại.
    }
  }

  async function clearSaved() {
    await wb?.clear(exerciseId)
  }

  return { canSave, saving, savedAtLabel, justSaved, save, clearSaved }
}
