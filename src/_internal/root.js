/* 从Node.js中检测变量global */
const freeGlobal =
  typeof global === 'object' && global !== null && global.Object === Object && global

/** 检测变量 globalThis */
const freeGlobalThis =
  typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis

/** 检测变量 self */
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self

/** root 用作对全局对象的引用 */
const root = freeGlobalThis || freeGlobal || freeSelf || Function('return this')()

module.exports = root
