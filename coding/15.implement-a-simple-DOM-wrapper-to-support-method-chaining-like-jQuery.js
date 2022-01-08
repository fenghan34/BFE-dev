/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function (propertyName, value) {
      el.style[propertyName] = value
      return this
    },
  }
}
