import { createInitialStreakState, projectStreakState, recordActivity } from '#shared/utils/streakAlgorithm'
import type { StreakActivityType } from '../../../types/streak'

const VALID_TYPES: StreakActivityType[] = ['srs_review', 'lesson_quiz', 'lesson_writing']

export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  const body = await readBody<{ activityType?: string }>(event)
  const activityType = body?.activityType

  if (!activityType || !VALID_TYPES.includes(activityType as StreakActivityType)) {
    throw createError({ statusCode: 400, statusMessage: 'activityType không hợp lệ' })
  }

  const now = new Date()
  const current = getStreakState() ?? createInitialStreakState()
  const next = recordActivity(current, now)

  upsertStreakState(next)
  logStreakActivity(now.toISOString().slice(0, 10), activityType as StreakActivityType, now.toISOString())

  return projectStreakState(next, now)
})
