/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  if (message.length === 0 || message[0].length === 0) return ''

  let res = ''
  let i = 0
  let j = 0
  let direction = 1

  const columnLen = message[0].length

  while (j < columnLen) {
    res += message[i][j]

    if (!message[i + direction]) {
      direction *= -1
    }

    i += direction
    j++
  }

  return res
}
