import { computeNextState, createInitialCardState } from '#shared/utils/srsAlgorithm'
import type { SrsGrade } from '../../../types/srs'

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const body = await readBody<{ itemId?: string; grade?: number }>(event)
  const itemId = body?.itemId
  const grade = body?.grade

  if (!itemId || typeof grade !== 'number' || ![0, 1, 2, 3].includes(grade)) {
    throw createError({ statusCode: 400, statusMessage: 'itemId hoặc grade không hợp lệ' })
  }

  const now = new Date()
  const current = getCard(user.id, itemId) ?? createInitialCardState(itemId, now)
  const next = computeNextState(current, grade as SrsGrade, now)

  upsertCard(user.id, next)
  logReview(user.id, itemId, grade as SrsGrade, now.toISOString())

  return next
})
