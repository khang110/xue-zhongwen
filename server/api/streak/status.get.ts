import { createInitialStreakState, projectStreakState } from '#shared/utils/streakAlgorithm'

export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  const state = getStreakState() ?? createInitialStreakState()
  return projectStreakState(state, new Date())
})
