export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  const query = getQuery(event)
  const idsParam = query.ids
  const ids = typeof idsParam === 'string' ? idsParam.split(',').filter(Boolean) : []
  const asOf =
    typeof query.asOf === 'string' && query.asOf ? query.asOf : new Date().toISOString().slice(0, 10)

  return { dueIds: getDueCardIds(ids, asOf) }
})
