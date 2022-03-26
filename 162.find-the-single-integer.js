/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  // 0 ^ 0 = 0
  // 0 ^ 1 = 1
  // 1 ^ 1 = 0
  // 1 ^ 0 = 1
  return arr.reduce((x) => x ^ 0)
}

/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  const set = new Set()

  arr.forEach((x) => (set.has(x) ? set.delete(x) : set.add(x)))

  return set.values().next().value
}
