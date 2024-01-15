/**
 * @param {Date | String | Number} time - 需要转换的时间
 * @param {String} fmt - 需要转换的格式 如 YYYY-MM-DD YYYY-MM-DD HH:mm:ss
 * @returns {String} - 格式化后的日期时间
 */
module.exports = (time, fmt) => {
  if (!time) return ''
  else {
    const date = new Date(time)
    const o = {
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds(),
    }
    if (/(Y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
        )
      }
    }
    return fmt
  }
}
