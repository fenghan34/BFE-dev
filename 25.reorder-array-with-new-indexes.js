/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    while (i !== newOrder[i]) {
      swap(items, i, newOrder[i])
      swap(newOrder, i, newOrder[i])
    }
  }

  function swap(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
}
