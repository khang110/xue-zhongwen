export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const query = getQuery(event)
  const idsParam = query.ids
  const ids = typeof idsParam === 'string' ? idsParam.split(',').filter(Boolean) : []

  return getCardsByIds(user.id, ids)
})
