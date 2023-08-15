/**
 * 本月最后一天
 * @returns - 本月最后一天的 年-月-日
 */
module.exports = () => {
  let Nowdate = new Date();
  let MonthNextFirstDay = new Date(Nowdate.getYear(), Nowdate.getMonth() + 1, 1);
  let MonthLastDay = new Date(MonthNextFirstDay - 86400000);
  let M = Number(MonthLastDay.getMonth()) + 1;
  if (String(M).length == 1) {
    M = "0" + M;
  }
  let day = MonthLastDay.getDate();
  if (String(day).length == 1) {
    day = "0" + day;
  }
  return Nowdate.getFullYear() + "-" + M + "-" + day;
};
