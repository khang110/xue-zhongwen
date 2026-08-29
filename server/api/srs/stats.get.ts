export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const query = getQuery(event)
  const idsParam = query.ids
  const ids = typeof idsParam === 'string' ? idsParam.split(',').filter(Boolean) : []
  const asOf =
    typeof query.asOf === 'string' && query.asOf ? query.asOf : new Date().toISOString().slice(0, 10)

  const cards = getCardsByIds(user.id, ids)
  const learned = cards.filter((c) => c.repetitions >= 2).length
  const dueToday = getDueCardIds(user.id, ids, asOf).length

  return { dueToday, learned, total: ids.length }
})
