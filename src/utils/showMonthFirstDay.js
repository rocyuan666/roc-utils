/**
 * 本月第一天
 * @returns - 本月第一天的 年-月-日
 */
export default () => {
  let Nowdate = new Date()
  let MonthFirstDay = new Date(Nowdate.getYear(), Nowdate.getMonth(), 1)
  let M = Number(MonthFirstDay.getMonth()) + 1
  if (String(M).length == 1) {
    M = '0' + M
  }
  let day = MonthFirstDay.getDate()
  if (String(day).length == 1) {
    day = '0' + day
  }
  return Nowdate.getFullYear() + '-' + M + '-' + day
}
