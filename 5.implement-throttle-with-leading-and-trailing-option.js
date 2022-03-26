/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function throttle(func, wait, option = { leading: true, trailing: true }) {
  const { leading, trailing } = option

  let timer = null
  let lastArgs = null
  let lastContext = null

  return function (...args) {
    if (timer === null) {
      // after cool time
      leading && func.apply(this, args)

      function timeoutCallback() {
        if (lastArgs && trailing) {
          func.apply(lastContext, lastArgs)
          lastArgs = null
          lastContext = null

          timer = setTimeout(timeoutCallback, wait)
        } else {
          timer = null
        }
      }

      timer = setTimeout(timeoutCallback, wait)
    } else {
      // cool time
      lastContext = this
      lastArgs = args
    }
  }
}
