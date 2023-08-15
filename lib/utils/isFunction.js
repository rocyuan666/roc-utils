/**
 * 精确判断数据是否是 Function 类型
 * @param {Any} val - 要判断的数据
 * @return {Boolean} - true：是；false：不是；
 */
module.exports = (val) => {
  return Object.prototype.toString.call(val) === "[object Function]";
};
