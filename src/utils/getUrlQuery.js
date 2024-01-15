/**
 * 获取url路径的query参数
 * @param {String} url - url
 * @returns {Object} - query参数的对象
 */
module.exports = (url) => {
  if (url.indexOf('?') == -1) return
  const theRequest = new Object()
  const str = url.split('?')[1]
  const strs = str.split('&')
  for (let i = 0; i < strs.length; i++) {
    theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1]
  }
  return theRequest
}
