/**
 * 本周第一天
 * @returns - 本周第一天的日期时间
 */
export default () => {
  let Nowdate = new Date()
  let numDay = Nowdate.getDay()
  // 处理本周第一天是周一（不处理的话第一天是周日）
  if (numDay == 0) {
    numDay = 6
  } else {
    numDay = numDay - 1
  }
  let WeekFirstDay = new Date(Nowdate - numDay * 86400000)
  let M = Number(WeekFirstDay.getMonth()) + 1
  if (String(M).length == 1) {
    M = '0' + M
  }
  let day = WeekFirstDay.getDate()
  if (String(day).length == 1) {
    day = '0' + day
  }
  return WeekFirstDay.getFullYear() + '-' + M + '-' + day
}
