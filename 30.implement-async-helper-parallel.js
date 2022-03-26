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
function parallel(funcs) {
  return function (callback, initial) {
    let i = 0
    let error
    const data = []

    const cb = (err, v) => {
      if (!error) {
        err
          ? callback((error = err), undefined)
          : i++ === funcs.length - 1
          ? callback(undefined, [...data, v])
          : data.push(v)
      }
    }

    funcs.forEach((fn) => fn(cb, initial))
  }
}
