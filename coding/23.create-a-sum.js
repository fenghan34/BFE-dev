/**
 * @param {number} num
 */
function sum(num) {
  const next = (x) => (x ? sum(num + x) : next)

  next[Symbol.toPrimitive] = () => num

  return next
}
