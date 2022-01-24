/**
 * @param {number[]} arr
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const mid = arr.length >> 1
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  mergeSort(left)
  mergeSort(right)

  merge(arr, left, right)
}

function merge(arr, left, right) {
  const lenL = left.length
  const lenR = right.length
  let i = 0
  let j = 0

  while (i < lenL || j < lenR) {
    if (j === lenR || (i < lenL && left[i] <= right[j])) {
      arr[i + j] = left[i++]
    } else {
      arr[i + j] = right[j++]
    }
  }
}
