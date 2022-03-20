function cloneDeep(data, map = new WeakMap()) {
  if (typeof data !== 'object' || data === null) {
    return data
  }

  const clone = (value) => {
    if (map.has(value)) {
      return map.get(value)
    }

    return cloneDeep(value, map)
  }

  if (Array.isArray(data)) {
    const newArr = []

    map.set(data, newArr)

    data.forEach((item) => newArr.push(clone(item)))

    return newArr
  }

  const newObj = {}

  map.set(data, newObj)

  Object.keys(data).forEach(key => {
    newObj[key] = checkCircle(data[key])
  })

  Object.getOwnPropertySymbols(data).forEach(key => {
    if (Object.getOwnPropertyDescriptor(data, key).enumerable) {
      newObj[key] = clone(data[key])
    }
  })

  return newObj
}
