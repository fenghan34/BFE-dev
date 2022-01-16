/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  return new Promise(async (resolve) => {
    const data = []

    for (const p of promises) {
      let res

      try {
        res = { status: 'fulfilled', value: await p }
      } catch (e) {
        res = { status: 'rejected', reason: e }
      } finally {
        data.push(res)
      }
    }

    resolve(data)
  })
}

function allSettled(promises) {
  return new Promise((resolve) => {
    const data = []
    const iterator = promises[Symbol.iterator]()

    function walk({ done, value }) {
      if (done) {
        return resolve(data)
      }

      if (Object.prototype.toString.call(value).slice(8, -1) !== 'Promise') {
        data.push({ status: 'fulfilled', value })
        walk(iterator.next())
      } else {
        value
          .then((v) => data.push({ status: 'fulfilled', value: v }))
          .catch((e) => data.push({ status: 'rejected', reason: e }))
          .finally(() => walk(iterator.next()))
      }
    }

    walk(iterator.next())
  })
}
