import type { SrsCardState, SrsGrade, SrsStats } from '../../types/srs'

/**
 * Lớp mỏng gọi API /api/srs/* - server (SQLite) là nguồn sự thật duy nhất cho
 * tiến độ SRS, giúp đồng bộ đa thiết bị. Composable này không tự tính toán gì,
 * chỉ chuyển tiếp lời gọi tới server.
 */
export function useSrsStorage() {
  async function getCards(ids: string[]): Promise<SrsCardState[]> {
    if (ids.length === 0) return []
    return $fetch<SrsCardState[]>('/api/srs/cards', { query: { ids: ids.join(',') } })
  }

  async function getDueIds(ids: string[], asOf?: string): Promise<string[]> {
    if (ids.length === 0) return []
    const res = await $fetch<{ dueIds: string[] }>('/api/srs/due', {
      query: { ids: ids.join(','), asOf }
    })
    return res.dueIds
  }

  async function gradeCard(itemId: string, grade: SrsGrade): Promise<SrsCardState> {
    return $fetch<SrsCardState>('/api/srs/grade', {
      method: 'POST',
      body: { itemId, grade }
    })
  }

  async function getStats(ids: string[], asOf?: string): Promise<SrsStats> {
    if (ids.length === 0) return { dueToday: 0, learned: 0, total: 0 }
    return $fetch<SrsStats>('/api/srs/stats', { query: { ids: ids.join(','), asOf } })
  }

  return { getCards, getDueIds, gradeCard, getStats }
}
