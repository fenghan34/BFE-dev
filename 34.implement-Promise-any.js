/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  return new Promise((resolve, reject) => {
    const promisesArr = [...promises]
    const errors = []
    let errorCount = 0

    promisesArr.forEach((p, i) => {
      if (Object.prototype.toString.call(p).slice(8, -1) !== 'Promise') {
        resolve(p)
      }

      p.then(resolve).catch((e) => {
        errors[i] = e

        if (++errorCount === promisesArr.length) {
          reject(
            new AggregateError('No Promise in Promise.any was resolved', errors)
          )
        }
      })
    })
  })
}
