/*
 * @Author       : rocyuan
 * @Email        : rocyuan666@163.com
 * @Description  : rollup config
 */
const buble = require("@rollup/plugin-buble");
const commonjs = require("@rollup/plugin-commonjs");
const output = require("./build/output");

module.exports = {
  input: "./lib/index.js",
  output,
  plugins: [buble(), commonjs()],
};
