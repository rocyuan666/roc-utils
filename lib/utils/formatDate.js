/**
 * 格式化日期时间 传入日期对象或者字符串
 * @param {Date|String} date 日期或日期字符串
 * @return {Object} 各种时间日期格式,支持自定义拼接key
 */
module.exports = (date) => {
  let YYYY = null;
  let M = null;
  let MM = null;
  let D = null;
  let DD = null;
  let h = null;
  let hh = null;
  let m = null;
  let mm = null;
  let s = null;
  let ss = null;
  let ms = null;
  let ms2 = null;
  let ms3 = null;
  let ms4 = null;
  let dt = null;

  // 如果 date 是 String 类型
  if (date && Object.prototype.toString.call(date) === "[object String]") {
    // 真机运行时，如果直接用 new Date('YYYY-MM-DD hh:mm:ss') 会报 Invalid Date 错误，所以采用下面的方式创建日期
    let dtArr = date.replace(/\//g, ".").replace(/-/g, ".").replace(/:/g, ".").replace(/T/g, " ").replace(" ", ".").replace("Z", "").split(".");

    let year = 2020;
    let month = 12;
    let day = 18;
    let hour = 0;
    let minute = 0;
    let second = 0;
    let millisecond = 0;

    // 年
    if (dtArr.length > 0 && !isNaN(dtArr[0])) {
      year = parseInt(dtArr[0]);
    }
    // 月
    if (dtArr.length > 1 && !isNaN(dtArr[1])) {
      month = parseInt(dtArr[1]);
    }
    // 日
    if (dtArr.length > 2 && !isNaN(dtArr[2])) {
      day = parseInt(dtArr[2]);
    }
    // 时
    if (dtArr.length > 3 && !isNaN(dtArr[3])) {
      hour = parseInt(dtArr[3]);
    }
    // 分
    if (dtArr.length > 4 && !isNaN(dtArr[4])) {
      minute = parseInt(dtArr[4]);
    }
    // 秒
    if (dtArr.length > 5 && !isNaN(dtArr[5])) {
      second = parseInt(dtArr[5]);
    }
    // 毫秒
    if (dtArr.length > 6 && !isNaN(dtArr[6])) {
      millisecond = parseInt(dtArr[6]);
    }

    date = new Date(year, month - 1, day, hour, minute, second, millisecond);
  }

  // 如果 date 是 Date 类型
  if (date && Object.prototype.toString.call(date) === "[object Date]") {
    YYYY = date.getFullYear();
    M = date.getMonth() + 1;
    MM = M >= 10 ? M : "0" + M;
    D = date.getDate();
    DD = D >= 10 ? D : "0" + D;
    h = date.getHours();
    hh = h >= 10 ? h : "0" + h;
    m = date.getMinutes();
    mm = m >= 10 ? m : "0" + m;
    s = date.getSeconds();
    ss = s >= 10 ? s : "0" + s;
    ms = date.getMilliseconds();
    ms2 = ms;
    ms3 = ms;
    ms4 = ms;
    if (ms < 10) {
      ms2 = "0" + ms;
      ms3 = "00" + ms;
      ms4 = "000" + ms;
    } else if (ms < 100) {
      ms3 = "0" + ms;
      ms4 = "00" + ms;
    } else {
      ms4 = "0" + ms;
    }
  }

  // 返回的数据对象
  let result = {
    YYYY: YYYY,
    MM: MM,
    M: M,
    DD: DD,
    D: D,
    hh: hh,
    h: h,
    mm: mm,
    m: m,
    ss: ss,
    s: s,
    ms: ms,
    ms2: ms2,
    ms3: ms3,
    ms4: ms4,
    dt: date,
    f1: `${YYYY}-${MM}-${DD}`,
    f2: `${YYYY}年${M}月${D}日`,
    f3: `${YYYY}-${M}-${D} ${hh}:${mm}`,
    f4: `${h}:${m}:${s}`,
    f5: `${MM}-${DD}`,
    f6: `${YYYY}-${MM}`,
    f7: `${YYYY}年${M}月`,
    f8: `${h}:${m}`,
    f9: `${M}月${D}日`,
    notes:
      "YYYY（年），MM（月，补0），M（月，不补0），DD（日，补0），D（日，不补0），hh（时，补0），h（时，不补0），mm（分，补0），m（分，不补0），ss（秒，补0），s（秒，不补0），ms（毫秒，不补0），ms2（毫秒，补0到2位），ms3（毫秒，补0到3位），ms4（毫秒，补0到4位），其余的f1，f2，... 看格式就知道了！",
  };
  return result;
};
