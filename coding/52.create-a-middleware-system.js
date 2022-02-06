class Middleware {
  constructor() {
    this.middlewareFuncs = []
    this.errorHandlers = []
  }

  /**
   * @param {middlewareFuncs} func
   */
  use(func) {
    func.length === 3
      ? this.errorHandlers.push(func)
      : this.middlewareFuncs.push(func)
  }

  /**
   * @param {Request} req
   */
  start(req) {
    let i = 0
    let j = 0

    const next = (err) => {
      const fn = err ? this.errorHandlers[j++] : this.middlewareFuncs[i++]

      try {
        fn(...[err, req, next].filter(Boolean))
      } catch (e) {
        next(e)
      }
    }

    next()
  }
}
