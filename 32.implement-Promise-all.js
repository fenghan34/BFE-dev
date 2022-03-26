/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  return new Promise(async (resolve, reject) => {
    const data = []

    try {
      for await (const v of promises) {
        data.push(v)
      }
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
