import { createInitialStreakState, projectStreakState } from '#shared/utils/streakAlgorithm'

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const state = getStreakState(user.id) ?? createInitialStreakState()
  return projectStreakState(state, new Date())
})
