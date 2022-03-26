/**
 * cancel all timer from window.setTimeout
 */
const clearAllTimeout = (function () {
  const setTimeout = window.setTimeout
  const ids = []

  window.setTimeout = function (...args) {
    const id = setTimeout.apply(this, args)
    ids.push(id)
    return id
  }

  return function () {
    ids.forEach((id) => clearTimeout(id))
  }
})()
