/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  const supportedTypes = [
    'String',
    'Number',
    'Boolean',
    'Symbol',
    'BigInt',
    'Undefined',
    'Null',
    'Array',
    'ArrayBuffer',
    'Map',
    'Set',
    'Date',
    'Function',
  ]

  const originType = Object.prototype.toString.call(data).slice(8, -1)
  return supportedTypes.includes(originType)
    ? originType.toLowerCase()
    : 'object'
}
