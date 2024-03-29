import debounce from './debounce.js'
import isObject from './isObject.js'

/**
 * @param {Function} func - 需要节流处理的方法
 * @param {number} [wait=0] - 延迟的毫秒数
 * @param {Object} [options={}] - 选项对象
 * @param {boolean} [options.leading=true] - 指定调用在节流开始前
 * @param {boolean} [options.trailing=true] - 指定调用在节流结束后
 * @returns {Function} 返回新的节流方法
 */
export default (func, wait, options) => {
  let leading = true
  let trailing = true

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  if (isObject(options)) {
    // @ts-ignore
    leading = 'leading' in options ? !!options.leading : leading
    // @ts-ignore
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }
  return debounce(func, wait, {
    leading,
    trailing,
    maxWait: wait,
  })
}
