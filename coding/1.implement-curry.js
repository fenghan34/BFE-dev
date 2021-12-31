/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...params) {
    if (params.length >= fn.length) {
      return fn.apply(this, params)
    }

    return curried.bind(this, ...params)
  }
}
