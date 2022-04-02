// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }

/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  if (!node) return node

  const { left, right } = node

  invert(left)
  invert(right)

  const temp = left
  node.left = node.right
  node.right = temp

  return node
}
