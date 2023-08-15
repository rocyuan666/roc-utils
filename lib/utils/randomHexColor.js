/**
 * @returns {String} - 随机生成十六进制颜色值
 */
module.exports = () => {
  var hex = Math.floor(Math.random() * 16777216).toString(16);
  while (hex.length < 6) {
    hex = "0" + hex;
  }
  return "#" + hex;
};
