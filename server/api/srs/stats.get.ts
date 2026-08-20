export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  const query = getQuery(event)
  const idsParam = query.ids
  const ids = typeof idsParam === 'string' ? idsParam.split(',').filter(Boolean) : []
  const asOf =
    typeof query.asOf === 'string' && query.asOf ? query.asOf : new Date().toISOString().slice(0, 10)

  const cards = getCardsByIds(ids)
  const learned = cards.filter((c) => c.repetitions >= 2).length
  const dueToday = getDueCardIds(ids, asOf).length

  return { dueToday, learned, total: ids.length }
})
