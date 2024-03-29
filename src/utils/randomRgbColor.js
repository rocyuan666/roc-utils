/**
 * @returns {String} - 随机生成RGB颜色
 */
export default () => {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
