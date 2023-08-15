/**
 * 创建UUID
 * @param {Number} len - uuid的长度
 * @param {Boolean} firstU - 将返回的首字母置为"u"
 * @param {Nubmer} radix - 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 * @returns {string} -  uuid
 */
module.exports = (len = 32, firstU = true, radix = null) => {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  let uuid = [];
  radix = radix || chars.length;

  if (len) {
    for (let i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  if (firstU) {
    uuid.shift();
    return "u" + uuid.join("");
  } else {
    return uuid.join("");
  }
};
