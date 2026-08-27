import type { StreakActivityType, StreakProjection } from '../../types/streak'

let pendingFetch: Promise<StreakProjection> | null = null

/**
 * Trạng thái streak (chuỗi ngày học liên tục) - server là nguồn sự thật duy nhất.
 * Dùng useState để nhiều component (badge header, thẻ trang chủ) chia sẻ cùng 1 lần
 * fetch khi mount đồng thời, tránh gọi API trùng lặp.
 */
export function useStreak() {
  const projection = useState<StreakProjection | null>('streak-projection', () => null)
  const loading = useState<boolean>('streak-loading', () => false)

  async function refresh(): Promise<void> {
    if (pendingFetch) {
      projection.value = await pendingFetch
      return
    }
    loading.value = true
    pendingFetch = $fetch<StreakProjection>('/api/streak/status')
    try {
      projection.value = await pendingFetch
    } finally {
      loading.value = false
      pendingFetch = null
    }
  }

  async function record(activityType: StreakActivityType): Promise<void> {
    try {
      projection.value = await $fetch<StreakProjection>('/api/streak/record', {
        method: 'POST',
        body: { activityType }
      })
    } catch {
      // Lỗi mạng không được chặn trải nghiệm hoàn thành bài tập chỉ vì streak lưu thất bại
    }
  }

  return { projection, loading, refresh, record }
}
