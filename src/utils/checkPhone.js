/**
 * 校验电话号码
 * @param {String} data - 电话号码
 * @return {Boolean} - false: 错误  true: 正确
 */
module.exports = (data) => {
  let reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/
  if (reg.test(data)) {
    return true
  } else {
    return false
  }
}
