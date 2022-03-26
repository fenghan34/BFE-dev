class EventEmitter {
  constructor() {
    this.events = new Map()
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set())
    }

    const cbs = this.events.get(eventName)
    const cbWrap = { callback }
    cbs.add(cbWrap)

    return {
      release: () => {
        if (this.events.has(eventName)) {
          const cbs = this.events.get(eventName)
          cbs.delete(cbWrap)
          cbs.size === 0 && this.events.delete(eventName)
        }
      },
    }
  }

  emit(eventName, ...args) {
    if (this.events.has(eventName)) {
      this.events.get(eventName).forEach(({ callback }) => callback(...args))
    }
  }
}
