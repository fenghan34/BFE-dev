/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  input = input.replace(/b|ac/g, '')

  if (!/ac/.test(input)) return input

  return removeChars(input)
}

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  const pattern = /b|ac/g

  while (pattern.test(input)) {
    input = input.replace(pattern, '')
  }

  return input
}

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  const stack = []

  for (let i = 0; i < input.length; i++) {
    const char = input[i]

    if (stack.length > 0 && char === 'c' && stack[stack.length - 1] === 'a') {
      stack.pop()
      continue
    }

    if (char !== 'b') {
      stack.push(char)
    }
  }

  return stack.join('')
}
