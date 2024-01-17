/**
 * 校验纬度
 * @param {String | Number} latitude - 纬度
 * @return {Boolean} - false: 错误  true: 正确
 */
export default (latitude) => {
  latitude = String(latitude)
  //纬度,整数部分为0-90小数部分为0到6位
  var latreg = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/
  if (!latreg.test(latitude)) {
    return false
  }
  return true
}
