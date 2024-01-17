/*
 * @Author       : rocyuan
 * @Email        : rocyuan666@163.com
 * @Description  : rollup config
 */
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

const banner = `/*
  * 常用javascript utils 方法
  * ${pkg.name} v${pkg.version}
  * (c) 2020-${new Date().getFullYear()} ${pkg.author}
  * Email rocyuan666@163.com
  * Released under the ${pkg.license} License.
  */`

export { banner }
