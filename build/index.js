/*
 * @Author       : rocyuan
 * @Email        : rocyuan666@163.com
 * @Description  : rollup config
 */

import { rollup } from 'rollup'
import buble from '@rollup/plugin-buble'
import commonjs from '@rollup/plugin-commonjs'
import { umdOutputOptions, umdMinOutputOptions, esOutputOptions } from './outputOptions.js'

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
