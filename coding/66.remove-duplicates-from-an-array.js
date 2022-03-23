/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
  const set = new Set()

  let i = arr.length - 1

  while (i >= 0) {
    const item = arr[i]

    set.has(arr[i]) ? arr.pop() : set.add(item)

    i--
  }
}
