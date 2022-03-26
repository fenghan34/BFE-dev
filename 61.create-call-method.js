Function.prototype.mycall = function (thisArg, ...args) {
  const key = Symbol()
  const thisObj = Object(thisArg || window)

  thisObj[key] = this
  const res = thisObj[key](...args)
  delete thisObj[key]

  return res
}
