/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  let called = false
  let res

  return function (...args) {
    if (!called) {
      res = func.apply(this, args)
      called = true
    }

    return res
  }
}
