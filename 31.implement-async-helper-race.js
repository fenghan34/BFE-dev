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
function race(funcs) {
  return function (callback) {
    const promisify = (fn) =>
      new Promise((resolve, reject) => {
        fn((err, val) => {
          err ? reject(err) : resolve(val)
        })
      })

    let done = false

    const cb = (err, v) => {
      if (!done) {
        callback(err, v)
        done = true
      }
    }

    funcs
      .map(promisify)
      .forEach((p) => p.then((v) => cb(undefined, v)).catch(cb))
  }
}

function race(funcs) {
  return function (callback) {
    let done = false

    const cb = (err, val) => {
      if (!done) {
        callback(err, val)
        done = true
      }
    }

    funcs.forEach((fn) => fn(cb))
  }
}
