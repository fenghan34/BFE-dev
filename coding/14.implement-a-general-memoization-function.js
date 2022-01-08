/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const cache = {}

  return function (...args) {
    const key = resolver ? resolver(...args) : args.join('_')

    return cache[key] || (cache[key] = func.apply(this, args))
  }
}
