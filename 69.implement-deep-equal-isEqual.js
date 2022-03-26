/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function isEqual(a, b) {
  function isEqualInner(a, b, map) {
    if (a === b) return true

    if (map.has(a) && map.get(a) === b) return true

    map.set(a, b)

    if (typeof a === 'object' && typeof b === 'object') {
      const aKeys = Object.keys(a)
      const bKeys = Object.keys(b)

      if (aKeys.length !== bKeys.length) return false

      return aKeys.every((key, i) => {
        return isEqualInner(key, bKeys[i], map) &&
          isEqualInner(a[key], b[key], map)
      })
    }

    return false
  }

  return isEqualInner(a, b, new Map())
}
