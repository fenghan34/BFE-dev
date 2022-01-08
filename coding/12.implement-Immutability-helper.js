const assert = (condition, msg) => {
  if (!condition) {
    throw new Error(msg)
  }
}

/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  if ('$push' in command) {
    assert(Array.isArray(data), 'bad push')
    return [...data, ...command['$push']]
  }

  if ('$merge' in command) {
    assert(data instanceof Object, `bad merge`)

    return { ...data, ...command['$merge'] }
  }

  if ('$apply' in command) {
    assert(typeof command['$apply'] === 'function', `bad apply`)

    return command['$apply'](data)
  }

  if ('$set' in command) {
    return command['$set']
  }

  assert(data instanceof Object, 'should be object or array')

  const newData = Array.isArray(data) ? [...data] : { ...data }

  for (const [key, value] of Object.entries(command)) {
    newData[key] = update(newData[key], value)
  }

  return newData
}
