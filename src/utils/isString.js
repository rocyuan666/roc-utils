/**
 * 判断数据是否是 String 类型
 * @param {any} val - 要判断的数据
 * @return {Boolean} - true：是；false：不是；
 */
export default (val) => {
  return Object.prototype.toString.call(val) === '[object String]'
}
