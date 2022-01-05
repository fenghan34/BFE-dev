/**
 * @param {any[]} arr
 */
function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const index = i + ~~(Math.random() * (arr.length - i))

    const temp = arr[i]
    arr[i] = arr[index]
    arr[index] = temp
  }

  return arr
}
