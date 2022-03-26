class ListNode {
  constructor(key, value, prev, next) {
    this.key = key || null
    this.value = value || null
    this.prev = prev || null
    this.next = next || null
  }
}

class NodeStore {
  constructor() {
    this.head = new ListNode()
    this.tail = this.head
    this.size = 0
  }

  /**
  * @param {Node} node
  * @param {any} value
  */
  set(node, value) {
    this.helper({ node, value }, false)
  }

  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    const res = this.helper({ node }, true)
    return res && res.value
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.helper({ node }, true)
  }

  helper({ node, value }, onlySearch) {
    let head = this.head.next
    let tail = this.tail
    const mid = ~~(this.size / 2)

    let i = 0
    let res

    while (head && tail && i <= mid) {
      if (head.key === node) {
        res = head
        break
      }

      if (tail.key === node) {
        res = tail
        break
      }

      head = head.next
      tail = tail.prev
      i++
    }

    if (onlySearch) {
      // for get() & has()
      return res
    }

    // for set()
    if (!res) {
      this.tail.next = new ListNode(node, value, this.tail)
      this.tail = this.tail.next
      this.size++
    } else {
      if (value !== res.value) {
        res.value = value
      }
    }
  }
}
