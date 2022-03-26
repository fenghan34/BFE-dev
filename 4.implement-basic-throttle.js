/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  let timer = null
  let lastArgs

  return function (...args) {
    if (timer === null) {
      func.apply(this, args)

      timer = setTimeout(() => {
        if (!lastArgs) return
        func.apply(this, lastArgs)
        timer = null
      }, wait)
    } else {
      lastArgs = args
    }
  }
}
