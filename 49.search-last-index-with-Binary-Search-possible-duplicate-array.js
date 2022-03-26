/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function lastIndex(arr, target) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = (start + end) >> 1

    if (arr[mid] < target) {
      start = mid + 1
    } else if (arr[mid] > target) {
      end = mid - 1
    } else {
      while (arr[mid + 1] === arr[mid]) {
        mid++
      }

      return mid
    }
  }

  return -1
}
