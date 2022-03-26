/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  const arr1 = v1.split('.')
  const arr2 = v2.split('.')

  for (let i = 0; i < 3; i++) {
    if (parseInt(arr1[i]) > parseInt(arr2[i])) return 1
    if (parseInt(arr1[i]) < parseInt(arr2[i])) return -1
  }

  return 0
}
