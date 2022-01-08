class Queue {
  constructor() {
    this.stack = new Stack()
    this.exchangeStack = new Stack()
  }

  // [] enqueue 1
  // stack [] => [1]

  // [1] enqueue 2
  // stack         [1] => [ ] => [   ] => [2,1]
  // exchangeStack [ ] => [1] => [1,2] => [   ]

  // [2,1] enqueue 3
  // stack         [2,1]  => [   ] => [     ] => [3,2,1]
  // exchangeStack [   ]  => [1,2] => [1,2,3] => [     ]

  enqueue(element) {
    if (this.stack.size() === 0) {
      this.stack.push(element)
      return
    }

    while (this.stack.size() > 0) {
      this.exchangeStack.push(this.stack.pop())
    }

    this.exchangeStack.push(element)

    while (this.exchangeStack.size() > 0) {
      this.stack.push(this.exchangeStack.pop())
    }
  }
  peek() {
    return this.stack.peek()
  }
  size() {
    return this.stack.size()
  }
  dequeue() {
    return this.stack.pop()
  }
}
