/**
 * @param {number[]} arr
 * @param {number} k
 */
function findKThLargest(arr, k) {
  // find the k-th smallest element in ascending array

  const target = arr.length - k

  let left = 0
  let right = arr.length - 1
  let cur

  do {
    cur = partition(arr, left, right)

    if (cur < target) {
      left = cur + 1
    } else {
      right = cur - 1
    }
  } while (cur !== target)

  return arr[cur]
}

function partition(arr, left, right) {
  const pivot = arr[right]

  let i = left

  for (let j = left; j < right; j++) {
    arr[j] < pivot && swap(arr, i++, j)
  }

  swap(arr, i, right)

  return i
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
