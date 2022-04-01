/**
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */
function myInstanceOf(obj, target) {
  if (typeof obj !== 'object' || obj === null) return false

  const prototype = target.prototype

  let proto = obj

  do {
    proto = Object.getPrototypeOf(proto)

    if (proto === prototype) return true
  } while (proto)

  return false
}
