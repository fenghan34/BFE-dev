/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
  return {
    [Symbol.iterator]() {
      return {
        next() {
          const done = from > to
          return { done, value: done ? undefined : from++ }
        },
      }
    },
  }
}

function range(from, to) {
  return {
    // implement iterable protocol and iterator protocol
    [Symbol.iterator]: function* () {
      while (from <= to) {
        yield from++
      }
    },
  }
}

function range(from, to) {
  // generator conforms to both the iterable protocol and the iterator protocol.
  return (function* () {
    while (from <= to) {
      yield from++
    }
  })()
}
