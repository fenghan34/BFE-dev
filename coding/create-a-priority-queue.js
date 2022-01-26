class PriorityQueue {
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare -
   * compare function, similar to parameter of Array.prototype.sort
   */
  constructor(compare) {
    this.compare = compare
    this.array = []
  }

  /**
   * return {number} amount of items
   */
  size() {
    return this.array.length
  }

  /**
   * returns the head element
   */
  peek() {
    return this.array[0]
  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
    let start = 0
    let end = this.array.length - 1

    while (start <= end) {
      const mid = (start + end) >> 1

      const compareRes = this.compare(element, this.array[mid])

      if (compareRes > 0) {
        start = mid + 1
      } else if (compareRes < 0) {
        end = mid - 1
      } else {
        start = mid
        break
      }
    }

    this.array.splice(start, 0, element)
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    return this.array.shift()
  }
}
