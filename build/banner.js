/*
 * @Author       : rocyuan
 * @Email        : rocyuan666@163.com
 * @Description  : rollup config
 */

const { name, version, author, license } = require('../package.json')

const banner = `/*
  * 常用javascript utils 方法
  * ${name} v${version}
  * (c) 2020-${new Date().getFullYear()} ${author}
  * Email rocyuan666@163.com
  * Released under the ${license} License.
  */`

module.exports = {
  banner,
}
