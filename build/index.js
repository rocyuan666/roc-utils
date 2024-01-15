/*
 * @Author       : rocyuan
 * @Email        : rocyuan666@163.com
 * @Description  : rollup config
 */

const { rollup } = require('rollup')
const buble = require('@rollup/plugin-buble')
const commonjs = require('@rollup/plugin-commonjs')
const { umdOutputOptions, umdMinOutputOptions, esOutputOptions } = require('./outputOptions')

rollup({
  input: './src/main.js',
  plugins: [buble(), commonjs()],
}).then((bundle) => {
  bundle.write(umdOutputOptions).then(() => {
    console.log('umd 打包完成')
  })
  bundle.write(umdMinOutputOptions).then(() => {
    console.log('umd.min 打包完成')
  })
  bundle.write(esOutputOptions).then(() => {
    console.log('es 打包完成')
  })
})
