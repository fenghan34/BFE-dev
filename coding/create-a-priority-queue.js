class PriorityQueue {
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare -
   * compare function, similar to parameter of heap.prototype.sort
   */
  constructor(compare) {
    this.compare = compare
    this.heap = []
  }

  /**
   * return {number} amount of items
   */
  size() {
    return this.heap.length
  }

  /**
   * returns the head element
   */
  peek() {
    return this.heap[0]
  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
    this.heap.push(element)

    if (this.heap.length > 0) {
      this.siftUp(this.heap.length - 1)
    }
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    if (this.heap.length < 3) {
      return this.heap.shift()
    }

    this.swap(0, this.heap.length - 1)
    const element = this.heap.pop()
    this.siftDown(0)
    return element
  }

  siftUp(index) {
    if (index <= 0) return

    const parent = index >> 1

    if (this.compare(this.heap[index], this.heap[parent]) < 0) {
      this.swap(index, parent)
      this.siftUp(parent)
    }
  }

  siftDown(index) {
    let j = index
    const left = index * 2 + 1
    const right = index * 2 + 2

    if (
      left < this.heap.length &&
      this.compare(this.heap[j], this.heap[left]) > 0
    ) {
      j = left
    }

    if (
      right < this.heap.length &&
      this.compare(this.heap[j], this.heap[right]) > 0
    ) {
      j = right
    }

    if (j !== index) {
      this.swap(j, index)
      this.siftDown(j)
    }
  }

  swap(a, b) {
    const temp = this.heap[a]
    this.heap[a] = this.heap[b]
    this.heap[b] = temp
  }
}
