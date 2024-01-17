/**
 * 校验邮编
 * @param {String} data - 邮编
 * @return {Boolean} - false: 错误  true: 正确
 */
export default (data) => {
  let reg = /^[0-9]{6}$/
  if (reg.test(data)) {
    return true
  } else {
    return false
  }
}
