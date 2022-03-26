/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  return new Promise((resolve, reject) => {
    const promisesArr = [...promises]

    promisesArr.forEach((p) => {
      if (Object.prototype.toString.call(p).slice(8, -1) !== 'Promise') {
        resolve(p)
      }

      p.then(resolve).catch(reject)
    })
  })
}
