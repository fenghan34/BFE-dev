/**
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node}
 */
const reverseLinkedList = (list) => {
  // iteration

  let prev = null

  while (list) {
    const next = list.next
    list.next = prev
    prev = list
    list = next
  }

  return prev
}

/**
 * @param {Node} list
 * @return {Node}
 */
const reverseLinkedList = (list) => {
  // recursion

  if (!list || !list.next) return list

  const newHead = reverseLinkedList(list.next)

  list.next.next = list
  list.next = null

  return newHead
}
