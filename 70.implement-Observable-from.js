/**
 * @param {Array | ArrayLike | Promise | Iterable | Observable} input
 * @return {Observable}
 */
function from(input) {
  if (Array.isArray(input) || typeof input[Symbol.iterator] === 'function') {
    return new Observable((observer) => {
      try {
        for (const item of input) {
          observer.next(item)
        }
        observer.complete()
      } catch (e) {
        observer.error(e)
      }
    })
  }

  if (typeof input.length === 'number') {
    return new Observable((observer) => {
      for (let i = 0; i < input.length; i++) {
        observer.next(input[i])
      }
      observer.complete()
    })
  }

  if (input instanceof Promise) {
    return new Observable((observer) => {
      input.then((v) => observer.next(v))
        .catch(e => observer.error(e))
        .finally(() => observer.complete())
    })
  }

  if (input instanceof Observable) {
    return input
  }

  throw new TypeError('unsupported type')
}
