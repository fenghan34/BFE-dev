/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const insert = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > insert) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = insert
  }
}
