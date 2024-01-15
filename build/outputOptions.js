/*
 * @Author       : rocyuan
 * @Email        : rocyuan666@163.com
 * @Description  : rollup config
 */

const { terser } = require('rollup-plugin-terser')
const { banner } = require('./banner')
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

module.exports = {
  umdOutputOptions,
  umdMinOutputOptions,
  esOutputOptions,
}
