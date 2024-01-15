/**
 * 获取俩数之间的随机整数(包头包尾)
 * @param {Number} minNum - 最小整数
 * @param {Number} maxNum - 最大整数
 * @returns {Number} - 随机数
 */
module.exports = (minNum, maxNum) => {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum)
}
