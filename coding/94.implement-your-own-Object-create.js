/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  if (typeof proto !== 'object' || proto === null) {
    throw new Error('should be object')
  }

  function F() {}
  F.prototype = proto
  return new F()
}
