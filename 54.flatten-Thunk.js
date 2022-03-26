
/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
 function flattenThunk(thunk) {
  return function (handler) {
    function callback(error, result) {
      typeof result === 'function' ? result(callback) : handler(error, result)
    }

    thunk(callback)
  }
}
