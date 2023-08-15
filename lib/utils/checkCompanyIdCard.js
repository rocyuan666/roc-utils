/**
 * 统一社会信用代码
 * @param {String} data - 统一社会信用代码
 * @return {Boolean} - false: 错误  true: 正确
 */
module.exports = (data) => {
  let reg = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;
  if (reg.test(data)) {
    return true;
  } else {
    return false;
  }
};
