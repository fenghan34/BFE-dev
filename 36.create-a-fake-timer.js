class FakeTimer {
  constructor() {
    const { setTimeout, clearTimeout } = window
    const { now } = Date

    this.restore = () => {
      window.setTimeout = setTimeout
      window.clearTimeout = clearTimeout
      window.Date.now = now
    }

    this.now = 0
    this.timerId = 0
    this.timers = []
  }
  install() {
    window.setTimeout = (cb, delay, ...args) => {
      const id = this.timerId++

      this.timers.push({
        id,
        cb,
        delay: delay + this.now,
        args,
      })

      this.timers.sort((a, b) => a.delay - b.delay)

      return id
    }

    window.clearTimeout = (id) => {
      this.timers = this.timers.filter((item) => item.id !== id)
    }

    window.Date.now = () => this.now
  }

  uninstall() {
    this.restore()
  }

  tick() {
    while (this.timers.length > 0) {
      const { cb, delay, args } = this.timers.shift()
      this.now = delay
      cb(...args)
    }
  }
}
