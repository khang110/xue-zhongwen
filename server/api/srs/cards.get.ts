export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  const query = getQuery(event)
  const idsParam = query.ids
  const ids = typeof idsParam === 'string' ? idsParam.split(',').filter(Boolean) : []

  return getCardsByIds(ids)
})
