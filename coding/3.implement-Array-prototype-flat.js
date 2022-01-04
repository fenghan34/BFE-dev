/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // recursively

  if (depth === 0 || arr.every((item) => !Array.isArray(item))) {
    return arr
  }

  const flattedArr = arr.reduce(
    (prev, cur) => prev.concat(Array.isArray(cur) ? cur : [cur]),
    []
  )

  return flat(flattedArr, depth - 1)
}

function flat(arr, depth = 1) {
  // iteratively

  let flattedArr = Array.from(arr)

  while (depth-- > 0 && flattedArr.some((item) => Array.isArray(item))) {
    flattedArr = flattedArr.reduce(
      (prev, cur) => prev.concat(Array.isArray(cur) ? cur : [cur]),
      []
    )
  }

  return flattedArr
}
