/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const mid = (start + end) >> 1

    if (arr[mid] === target) return mid

    if (arr[mid] > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return -1
}
