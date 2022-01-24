/**
 * @param {number[]} arr
 */
function quickSort(arr) {
  quick(arr, 0, arr.length - 1)

  function quick(arr, left, right) {
    if (left < right) {
      const pi = partition(arr, left, right)

      quick(arr, left, pi - 1)
      quick(arr, pi + 1, right)
    }
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

  function swap(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
}
