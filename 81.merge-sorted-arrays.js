/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]}
 */
function merge(arrList) {
  function mergeTwoArr(arr1, arr2) {
    const l1 = arr1.length
    const l2 = arr2.length

    if (l1 === 0) return arr2
    if (l2 === 0) return arr1

    if (arr1[l1 - 1] <= arr2[0]) {
      return arr1.concat(arr2)
    }

    if (arr2[l2 - 1] <= arr1[0]) {
      return arr2.concat(arr1)
    }

    const result = []

    let i = 0
    let j = 0

    while (i < l1 || j < l2) {
      const a = arr1[i]
      const b = arr2[j]

      if (typeof b !== 'number' || a <= b) {
        result.push(a)
        i++
      } else {
        result.push(b)
        j++
      }
    }

    return result
  }

  if (arrList.length === 0) return arrList

  if (arrList.length === 1) return arrList[0]

  const mid = arrList.length >> 1

  const left = merge(arrList.slice(0, mid))
  const right = merge(arrList.slice(mid))

  return mergeTwoArr(left, right)
}
