/**
 * @returns 随机生成RGBA颜色
 */
module.exports = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var alpha = Math.random(); //随机生成1以内a值
  alpha = alpha.toFixed(2);
  return `rgba(${r},${g},${b},${alpha})`;
};
