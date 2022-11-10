/**
 * 节流
 * @param {function} func 处理业务的方法
 * @param {Number} wait 等待的时间 单位毫秒
 * @param {Object} options leading: true 首次执行，false首次不执行 | trailing: true 最后一次执行，false最后一次不执行 | 不传默认都执行
 * @returns 处理后的方法
 */
module.exports = (func, wait, options) => {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) {
    options = {
      leading: true,
      trailing: true,
    };
  }
  var later = function () {
    previous = options.leading === false ? 0 : new Date();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  var throttled = function () {
    var now = new Date();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
};
