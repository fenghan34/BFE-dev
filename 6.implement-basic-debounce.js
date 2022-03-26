/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  let lastArgs = null
  let lastContext = null
  let timer = null

  return function (...args) {
    if (timer !== null) {
      clearTimeout(timer)
    }

    lastContext = this
    lastArgs = args

    timer = setTimeout(() => {
      func.apply(lastContext, lastArgs)
      lastContext = null
      lastArgs = null
      timer = null
    }, wait)
  }
}
