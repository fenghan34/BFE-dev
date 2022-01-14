/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  const method = obj[methodName]

  if (typeof method !== 'function') {
    throw new Error()
  }

  const calls = []

  obj[methodName] = function (...args) {
    calls.push(args)
    method.apply(obj, args)
  }

  return { calls }
}
