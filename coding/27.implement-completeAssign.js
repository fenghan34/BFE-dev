function completeAssign(target, ...sources) {
  let origin = target

  if (target == null) {
    throw new Error('Cannot convert undefined or null to object')
  }

  if (!(target instanceof Object)) {
    origin = Object(target)
  }

  sources.forEach((source) => {
    if (source == null) return

    if (!(source instanceof Object)) {
      source = Object(source)
    }

    Object.defineProperties(origin, Object.getOwnPropertyDescriptors(source))
  })

  return origin
}
