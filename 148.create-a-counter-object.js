/**
 * @returns { {count: number}}
 */
function createCounter() {
  return {
    _count: 0,
    get count() {
      return this._count++
    },
  }
}
