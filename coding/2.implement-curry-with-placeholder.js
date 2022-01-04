/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  function mergeArgs(prevArgs, nextArgs) {
    if (prevArgs.length === 0) return nextArgs
    if (nextArgs.length === 0) return prevArgs

    for (let i = 0; i < prevArgs.length; i++) {
      const isPlaceholder = prevArgs[i] === curry.placeholder

      if (isPlaceholder && nextArgs.length > 0) {
        prevArgs[i] = nextArgs.shift()
      }
    }

    return prevArgs.concat(nextArgs)
  }

  return function curried(...args) {
    const isArgsEnough =
      args.length >= fn.length &&
      !args.slice(0, fn.length).includes(curry.placeholder)

    if (isArgsEnough) {
      return fn.apply(this, args)
    }

    return function (...nextCallArgs) {
      const mergedArgs = mergeArgs(args, nextCallArgs)
      return curried.apply(this, mergedArgs)
    }
  }
}

curry.placeholder = Symbol()
