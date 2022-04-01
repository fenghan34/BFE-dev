
/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  // TODO handle circular reference
  const type = typeof data

  switch (type) {
    case 'function':
    case 'undefined':
    case 'symbol':
      return
    case 'bigint':
      throw new TypeError()
    case 'number':
      if (isNaN(data) || !Number.isFinite(data)) return "null"
      return data
    case 'object':
      if (data === null) return "null"

      if (typeof data.toJSON === 'function') {
        return data.toJSON()
      }

      if (Array.isArray(data)) {
        if (data.length === 0) return "[]"

        return `[${data.reduce((prev, cur, i) => {
          return `${prev}${stringify(cur) || "null"}${i === data.length - 1 ? "" : ","}`
        }, "")}]`
      }

      const entries = Object.entries(data)

      if (entries.length === 0) {
        return "{}"
      }

      const stringifiedObj = entries.reduce((prev, cur, i) => {
        const [key, value] = cur

        const stringified = stringify(value)

        return stringified === undefined ? prev :
          `${prev}"${key}":${stringified}${i === entries.length - 1 ? "" : ","}`
      }, '')

      return `{${stringifiedObj}}`
    default:
      return data
  }
}

const obj = { a: 3, b: 4, c: [1, 2, 3], d: { e: 5, f: 6 } }
console.log(stringify(obj) === JSON.stringify(obj))
