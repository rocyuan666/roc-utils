/**
 * 按ascii码从小到大排序对象（根据Key）
 * 一般第三方接口签名生成需要用到
 * @param {Object} obj 传入需要排序的对象
 * @returns {String} 输出排序好的字符串
 */
module.exports = (obj) => {
  let arr = new Array();
  let num = 0;
  for (let i in obj) {
    arr[num] = i;
    num++;
  }
  let sortArr = arr.sort();
  let str = "";
  for (let i in sortArr) {
    str += sortArr[i] + obj[sortArr[i]];
  }
  let char = "&";
  str = str.replace(new RegExp("^\\" + char + "+|\\" + char + "+$", "g"), "");
  return str;
};
