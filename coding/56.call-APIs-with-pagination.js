// fetchList is provided for you
// const fetchList = (since?: number) =>
//   Promise<{items: Array<{id: number}>}>

const fetchListWithAmount = async (amount = 5) => {
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        count: 0,
        lastItemId: undefined,
        async next() {
          const { items } = await fetchList(this.lastItemId)

          if (items.length === 0 || this.count >= amount) {
            return { done: true }
          }

          this.lastItemId = items[items.length - 1].id
          this.count += items.length

          return {
            done: false,
            value: items,
          }
        },
      }
    },
  }

  const res = []
  for await (const items of asyncIterable) {
    res.push(...items)
  }

  return res.slice(0, amount)
}

const fetchListWithAmountV2 = async (amount = 5) => {
  let count = 0
  let lastItemId

  const asyncIterable = {
    async *[Symbol.asyncIterator]() {
      while (count < amount) {
        const { items } = await fetchList(lastItemId)

        if (items.length === 0 || count >= amount) {
          break
        }

        lastItemId = items[items.length - 1].id
        count += items.length

        yield items
      }
    },
  }

  const res = []
  for await (const items of asyncIterable) {
    res.push(...items)
  }

  return res.slice(0, amount)
}

const fetchListWithAmountV3 = async (amount = 5) => {
  const recursivelyFetch = async (rest, lastItemId) => {
    if (rest <= 0) return []

    const { items } = await fetchList(lastItemId)

    if (items.length === 0) return []

    return [
      ...items,
      ...(await recursivelyFetch(
        rest - items.length,
        items[items.length - 1].id
      )),
    ]
  }

  const res = await recursivelyFetch(amount)
  return res.slice(0, amount)
}
