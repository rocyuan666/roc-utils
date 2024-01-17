/*
 * @Author       : rocyuan
 * @Email        : rocyuan666@163.com
 * @Description  : rollup config
 */

import { terser } from 'rollup-plugin-terser'
import { banner } from './banner.js'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

/**
 * umd 打包配置
 * @type {import("rollup").OutputOptions}
 */
const umdOutputOptions = {
  format: 'umd',
  name: pkg.umdName,
  file: `dist/${pkg.name}.umd.js`,
  compact: true,
  banner,
}

/**
 * umd.min 打包配置
 * @type {import("rollup").OutputOptions}
 */
const umdMinOutputOptions = {
  ...umdOutputOptions,
  file: `dist/${pkg.name}.umd.min.js`,
  plugins: [terser()],
}

/**
 * es 打包配置
 * @type {import("rollup").OutputOptions}
 */
const esOutputOptions = {
  format: 'es',
  file: `dist/${pkg.name}.es.js`,
  compact: true,
  banner,
}

export { umdOutputOptions, umdMinOutputOptions, esOutputOptions }
