/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  function stringifyRecursively(data, set) {
    const type = typeof data

    if (type === 'bigint') {
      throw new TypeError('Converting bigint to JSON')
    }

    if (['function', 'undefined', 'symbol'].includes(type)) return

    if (type === 'string') return `"${data}"`

    if (type === 'number' && (isNaN(data) || !Number.isFinite(data))) {
      return "null"
    }

    if (type !== 'object' || data === null) return `${data}`

    if (set.has(data)) {
      throw new TypeError('Converting circular structure to JSON')
    }

    set.add(data)

    if (typeof data.toJSON === 'function') return `"${data.toJSON()}"`

    if (Array.isArray(data)) {
      return `[${data.map(item => stringifyRecursively(item, set) || "null").join(',')}]`
    }

    const pairs = Object.entries(data)

    return `{${pairs.reduce((prev, [key, value], i) => {
      const stringified = stringifyRecursively(value, set)

      if (stringified !== undefined) {
        return `${prev}"${key}":${stringified}${i === pairs.length - 1 ? '' : ','}`
      }

      return prev
    }, '')}}`
  }

  return stringifyRecursively(data, new WeakSet())
}
