/**
 * 校验邮箱
 * @param {String} data - 邮箱
 * @return {Boolean} - false: 错误  true: 正确
 */
module.exports = (data) => {
  let reg =
    /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (reg.test(data)) {
    return true
  } else {
    return false
  }
}
