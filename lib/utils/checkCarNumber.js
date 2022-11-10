/**
 * 校验车牌号
 * @param {String} data 车牌号
 * @return {Boolean} false: 错误  true: 正确
 */
module.exports = (data) => {
  let reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;
  if (reg.test(data)) {
    return true;
  } else {
    return false;
  }
};
