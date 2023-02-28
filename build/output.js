/*
 * @Author       : rocyuan
 * @Email        : rocyuan666@163.com
 * @Description  : rollup config
 */

const { terser } = require("rollup-plugin-terser");
const { banner } = require("./banner");

const baseOutput = {
  dir: "dist",
  name: "rocUtils",
  entryFileNames: "roc-utils.js",
  format: "umd",
  banner,
  sourcemap: false,
  sourcemapExcludeSources: false,
};
const minOutput = Object.assign({}, baseOutput, {
  entryFileNames: "roc-utils.min.js",
  plugins: [terser()],
});

module.exports = [baseOutput, minOutput];
