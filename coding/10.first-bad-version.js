/*
 type TypIsBad = (version: number) => boolean
 */

/**
 * @param {TypIsBad} isBad
 */
function firstBadVersion(isBad) {
  return (version) => {
    let start = 0
    let end = version

    while (start <= end) {
      const middle = ~~((end + start) / 2)

      if (isBad(middle)) {
        end = middle - 1
      } else {
        start = middle + 1
      }
    }

    return start <= version ? start : -1
  }
}
