/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  const { leading, trailing } = option

  let lastArgs = null
  let lastContext = null
  let timer = null

  function setState(args = null, context = null) {
    lastArgs = args
    lastContext = context
  }

  return function (...args) {
    if (timer !== null) {
      // cool time
      clearTimeout(timer)
      setState(args, this)
    } else {
      // after cool time
      leading ? func.apply(this, args) : setState(args, this)
    }

    timer = setTimeout(() => {
      if (trailing && lastArgs) {
        func.apply(lastContext, lastArgs)
        setState()
      }

      timer = null
    }, wait)
  }
}
