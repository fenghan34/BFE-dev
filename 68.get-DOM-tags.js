/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
  const stack = []
  const res = []

  while (tree || stack.length !== 0) {
    if (tree) {
      stack.push(tree)
      tree = tree.firstChild
    } else {
      const node = stack.pop()

      if (node.nodeType === 1) {
        const tagName = node.tagName.toLowerCase()
        !res.includes(tagName) && res.push(tagName)
      }

      tree = node.nextSibling
    }
  }

  return res
}
