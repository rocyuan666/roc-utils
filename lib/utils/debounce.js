/**
 * 防抖
 * @param {function} func 处理业务的方法
 * @param {Number}} wait 等待的时间 单位毫秒
 * @param {Boolea} immediate 是否立即执行 true执行  false不执行  不传则是false
 * @returns 处理后的方法
 */
module.exports = (func, wait, immediate) => {
  let time;
  let debounced = function () {
    let context = this;
    if (time) clearTimeout(time);
    if (immediate) {
      let callNow = !time;
      if (callNow) func.apply(context, arguments);
      time = setTimeout(() => {
        time = null;
      }, wait);
    } else {
      time = setTimeout(() => {
        func.apply(context, arguments);
      }, wait);
    }
  };
  debounced.cancel = function () {
    clearTimeout(time);
    time = null;
  };
  return debounced;
};
