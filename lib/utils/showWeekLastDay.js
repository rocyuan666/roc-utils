/**
 * 本周最后一天
 * @returns - 本周最后一天的日期时间
 */
module.exports = () => {
  let Nowdate = new Date();
  let numDay = Nowdate.getDay();
  // 处理本周第一天是周一（不处理的话第一天是周日）
  if (numDay == 0) {
    numDay = 6;
  } else {
    numDay = numDay - 1;
  }
  let WeekFirstDay = new Date(Nowdate - numDay * 86400000);
  let WeekLastDay = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000);
  let M = Number(WeekLastDay.getMonth()) + 1;
  if (String(M).length == 1) {
    M = "0" + M;
  }
  let day = WeekLastDay.getDate();
  if (String(day).length == 1) {
    day = "0" + day;
  }
  return WeekLastDay.getFullYear() + "-" + M + "-" + day;
};
