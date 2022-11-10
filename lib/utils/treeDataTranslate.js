/**
 * 扁平数据转树形数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'pid'
 * @param {*} children 孩子节点字段 默认 'children'
 */
module.exports = (data, id, parentId, children) => {
  let config = {
    id: id || "id",
    parentId: parentId || "pid",
    childrenList: children || "children",
  };

  var childrenListMap = {};
  var nodeIds = {};
  var tree = [];

  data.forEach((d) => {
    let parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  });

  data.forEach((d) => {
    let parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  });

  tree.forEach((t) => {
    adaptToChildrenList(t);
  });

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      o[config.childrenList].forEach((c) => {
        adaptToChildrenList(c);
      });
    }
  }
  return tree;
};
