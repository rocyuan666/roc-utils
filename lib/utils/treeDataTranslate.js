/**
 * 树形数据转换（根据id，pid）
 * @param {Array} data 需要转换的数组
 * @param {String} id id标识 默认id
 * @param {String} pid pid标识 默认pid
 * @returns 生成的树形结构数据
 */
module.exports = (data, id = "id", pid = "pid") => {
  var res = [];
  var temp = {};
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i];
  }
  for (var k = 0; k < data.length; k++) {
    if (!temp[data[k][pid]] || data[k][id] === data[k][pid]) {
      res.push(data[k]);
      continue;
    }
    if (!temp[data[k][pid]]["children"]) {
      temp[data[k][pid]]["children"] = [];
    }
    temp[data[k][pid]]["children"].push(data[k]);
    data[k]["_level"] = (temp[data[k][pid]]._level || 0) + 1;
  }
  return res;
};
