class Observable {

  constructor(setup) {
    this.setup = setup
  }

  subscribe(subscriber) {
    let isUnsubscribed = false

    const observer = {
      next(value) {
        if (typeof subscriber === 'function') {
          subscriber.call(subscriber, value)
        } else if (typeof subscriber.next === 'function') {
          subscriber.next.call(subscriber, value)
        }
      },
      error(error) {
        subscriber.error.call(subscriber, error)
        return () => observer.unsubscribe()
      },
      complete(res) {
        subscriber.complete.call(subscriber, res)
        return () => observer.unsubscribe()
      },
      unsubscribe() {
        isUnsubscribed = true
      }
    }

    const guard = (cb) => {
      return (param) => {
        if (!isUnsubscribed) {
          const cleanup = cb(param)
          typeof cleanup === 'function' && cleanup()
        }
      }
    }

    Object.keys(observer).forEach(key => {
      observer[key] = guard(observer[key])
    })

    this.setup(observer)

    return observer
  }
}
