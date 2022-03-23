/**
 * @param {number} num
 * @return {string}
 */
function addComma(num) {
  let [integer, float] = (num + '').split('.')

  for (let i = integer.length - 3; i > 0; i -= 3) {
    integer = integer.slice(0, i) + ',' + integer.slice(i)
  }

  return `${integer}${float ? `.${float}` : ''}`
}
