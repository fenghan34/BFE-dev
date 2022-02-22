/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
  const obj = Object.create(constructor.prototype)
  const res = constructor.apply(obj, args)
  return res instanceof Object ? res : obj
}
