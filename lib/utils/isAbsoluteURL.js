/**
 * 判断 URL 是否是绝对 URL。
 * @param {String} url 要判断的 URL
 * @return {Boolean} true：是绝对URL；false：不是绝对URL；
 */
module.exports = (url) => {
  // 如果 URL 以 “<scheme>：//” 或 “//”（协议相对URL）开头，则认为它是绝对的
  // RFC 3986 将方案名称定义为以字母开头的字符序列，然后是字母，数字，加号，句点或连字符的任意组合
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
