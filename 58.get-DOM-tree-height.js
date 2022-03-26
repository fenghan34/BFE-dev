/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  // DFS

  if (!tree) return 0

  if (!tree.hasChildNodes()) return 1

  return Math.max(...[...tree.children].map((node) => getHeight(node))) + 1
}

/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  // BFS

  let height = 0

  if (!tree) return height

  const queue = [tree]

  while (queue.length > 0) {
    height++

    const size = queue.length

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      queue.push(...node.children)
    }
  }

  return height
}
