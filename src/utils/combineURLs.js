const isString = require('./isString')
/**
 * 合并 baseURL 和相对 URL 成一个完整的 URL
 * @param {String} baseURL - baseURL
 * @param {String} relativeURL - 相对 URL
 * @return {String} - 返回组合后的完整 URL
 */
module.exports = (baseURL, relativeURL) => {
  return relativeURL && isString(relativeURL) && isString(baseURL)
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL
}
