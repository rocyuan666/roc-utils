const isArray = require("./isArray")

/**
 * 数组降维，将多维数组转换为一维数组
 * @param {Array} array 需要变平的数组
 * @returns {Array} 返回扁平的数组
 */
module.exports = (array) => {
  var result = [];
  _flatten(array, result);
  return result;
}

function _flatten(array, result) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (isArray(value)) {
      _flatten(value, result);
    }
    else {
      result.push(value);
    }
  }
}
