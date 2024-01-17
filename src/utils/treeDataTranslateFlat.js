/**
 * 树形数据转扁平数据
 * @param {Object} data - 数据源
 * @param {String} [children] - 孩子节点字段 默认 'children'
 */
export default (data, children) => {
  let config = {
    children: children || 'children',
  }
  const result = []
  data.forEach((item) => {
    const loop = (data) => {
      const newData = Object.assign({}, data)
      if (newData.hasOwnProperty(config.children)) {
        delete newData[config.children]
      }
      result.push(Object.assign({}, newData))
      const child = data[config.children]
      if (child) {
        for (let i = 0; i < child.length; i++) {
          loop(child[i])
        }
      }
    }
    loop(item)
  })
  return result
}
