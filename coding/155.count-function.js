const count = (() => {
  let i = 0

  const count = () => ++i
  count.reset = () => (i = 0)
  return count
})()
