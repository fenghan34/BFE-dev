/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  if (items.length === 0 || excludes.length === 0) {
    return items
  }

  const map = new Map()

  for (const { k, v } of excludes) {
    if (!map.has(k)) {
      map.set(k, new Set())
    }

    map.get(k).add(v)
  }

  return items.filter((item) =>
    Object.keys(item).every((k) => !map.has(k) || !map.get(k).has(item[k]))
  )
}
