import type { VocabItem } from '../../types/vocab'
import type { SrsGrade } from '../../types/srs'
import { getAllVocab } from '../data/lessons'

/** Số thẻ mới (chưa từng ôn) tối đa được thêm vào 1 phiên ôn tập, tránh quá tải ngày đầu. */
const NEW_CARDS_PER_SESSION = 15

export function useDailyReview() {
  const { getCards, gradeCard } = useSrsStorage()

  const queue = ref<VocabItem[]>([])
  const currentIndex = ref(0)
  const loading = ref(false)
  const error = ref('')

  const current = computed<VocabItem | null>(() => queue.value[currentIndex.value] ?? null)
  const total = computed(() => queue.value.length)
  const remaining = computed(() => Math.max(0, queue.value.length - currentIndex.value))
  const isDone = computed(() => queue.value.length > 0 && currentIndex.value >= queue.value.length)

  const { record } = useStreak()
  watch(isDone, (done) => {
    if (done) record('srs_review')
  })

  async function start(tag?: string) {
    loading.value = true
    error.value = ''
    currentIndex.value = 0
    queue.value = []
    try {
      const allVocab = getAllVocab().filter((v) => !tag || v.tags?.includes(tag))
      const ids = allVocab.map((v) => v.id)
      const cards = await getCards(ids)
      const cardMap = new Map(cards.map((c) => [c.itemId, c]))
      const today = new Date().toISOString().slice(0, 10)

      const due = allVocab.filter((v) => {
        const card = cardMap.get(v.id)
        return card !== undefined && card.dueDate <= today
      })
      const brandNew = allVocab.filter((v) => !cardMap.has(v.id)).slice(0, NEW_CARDS_PER_SESSION)

      queue.value = [...due, ...brandNew]
    } catch {
      error.value = 'Không tải được danh sách ôn tập. Kiểm tra kết nối mạng rồi thử lại.'
    } finally {
      loading.value = false
    }
  }

  async function grade(value: SrsGrade): Promise<boolean> {
    const item = current.value
    if (!item) return false
    error.value = ''
    try {
      await gradeCard(item.id, value)
      currentIndex.value += 1
      return true
    } catch {
      error.value = 'Không lưu được kết quả (mất mạng?). Thẻ hiện tại được giữ nguyên, thử chấm điểm lại.'
      return false
    }
  }

  return { queue, current, total, remaining, isDone, loading, error, start, grade }
}
