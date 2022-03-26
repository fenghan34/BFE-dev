/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
  // promise & reduce
  return function (callback, initial) {
    const p = funcs.reduce((prev, cur) => {
      return prev.then((last) => {
        return new Promise((resolve, reject) => {
          cur((err, v) => (err ? reject(err) : resolve(v)), last)
        })
      })
    }, Promise.resolve(initial))

    p.then((v) => callback(undefined, v)).catch((e) => callback(e))
  }
}

function sequence(funcs) {
  // queue & recursion
  return function inner(callback, initial) {
    if (funcs.length > 0) {
      const fn = funcs.shift()

      const cb = (err, v) => (err ? callback(err) : inner(callback, v))

      fn(cb, initial)
    } else {
      callback(undefined, initial)
    }
  }
}
