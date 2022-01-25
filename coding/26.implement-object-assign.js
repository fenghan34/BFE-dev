/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  let origin = target

  if (target == null) {
    throw new Error('Cannot convert undefined or null to object')
  }

  if (!(target instanceof Object)) {
    origin = Object(target)
  }

  const originDescriptors = Object.getOwnPropertyDescriptors(origin)

  sources.forEach((source) => {
    if (source instanceof Object) {
      Object.getOwnPropertyNames(source)
        .concat(Object.getOwnPropertySymbols(source))
        .forEach((key) => {
          const originDescriptor = originDescriptors[key]

          if (originDescriptor && !originDescriptor.writable) {
            throw new TypeError(`target.${key} is read-only property`)
          }

          if (Object.getOwnPropertyDescriptor(source, key).enumerable) {
            origin[key] = source[key]
          }
        })
    }

    if (typeof source === 'string') {
      for (let i = 0; i < source.length; i++) {
        origin[i] = source[i]
      }
    }
  })

  return origin
}
