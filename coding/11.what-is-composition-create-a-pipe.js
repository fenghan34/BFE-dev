/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return (x) => funcs.reduce((result, fn) => (result = fn(...result)), x)
}
