/**
 * base64解密字符串
 * @param {String} input - 未解密前的字符串
 * @returns {String} - 解密后的字符串
 */
module.exports = (input) => {
  var keyStr =
    'ABCDEFGHIJKLMNOP' + 'QRSTUVWXYZabcdef' + 'ghijklmnopqrstuv' + 'wxyz0123456789+/' + '='
  var output = ''
  var chr1,
    chr2,
    chr3 = ''
  var enc1,
    enc2,
    enc3,
    enc4 = ''
  var i = 0

  var base64test = /[^A-Za-z0-9\+\/\=]/g
  if (base64test.exec(input)) {
    console.log(
      '输入文本中有无效的base64字符。\n' +
        '有效的base64字符为A-Z、A-Z、0-9、“+”、“/”和“=”\n' +
        '解码时出现错误。',
    )
  }
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')

  do {
    enc1 = keyStr.indexOf(input.charAt(i++))
    enc2 = keyStr.indexOf(input.charAt(i++))
    enc3 = keyStr.indexOf(input.charAt(i++))
    enc4 = keyStr.indexOf(input.charAt(i++))

    chr1 = (enc1 << 2) | (enc2 >> 4)
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
    chr3 = ((enc3 & 3) << 6) | enc4

    output = output + String.fromCharCode(chr1)

    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2)
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3)
    }

    chr1 = chr2 = chr3 = ''
    enc1 = enc2 = enc3 = enc4 = ''
  } while (i < input.length)
  return unescape(output)
}
