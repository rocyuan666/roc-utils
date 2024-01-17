/**
 * 校验经度
 * @param {String | Number} longitude - 经度
 * @return {Boolean} - false: 错误  true: 正确
 */
export default (longitude) => {
  longitude = String(longitude)
  //经度，整数部分为0-180小数部分为0到6位
  var longreg =
    /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/
  if (!longreg.test(longitude)) {
    return false
  }
  return true
}
