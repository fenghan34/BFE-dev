/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) {
    return rootB
  }

  const childrenA = rootA.childNodes
  const childrenB = rootB.childNodes

  for (let i = 0; i < childrenA.length; i++) {
    const res = findCorrespondingNode(childrenA[i], childrenB[i], target)

    if (res) {
      return res
    }
  }
}

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  // bfs
  const queueA = [rootA]
  const queueB = [rootB]

  while (queueA.length > 0) {
    const a = queueA.shift()
    const b = queueB.shift()

    if (a === target) {
      return b
    }

    queueA.push(...a.children)
    queueB.push(...b.children)
  }
}

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  const treeWalkerA = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT)
  const treeWalkerB = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT)

  let current = treeWalkerA.currentNode
  let res = treeWalkerB.currentNode

  while(current) {
    if (current === target) {
      return res
    }

    current = treeWalkerA.nextNode()
    res = treeWalkerB.nextNode()
  }
}
