const isFunction = require("./isFunction");

/**
 * 同步 try catch 的进一步封装处理
 * @template T
 * @param {Function<Promise<T>> | Promise<T>} promise - 需要处理的promise方法
 * @returns {Promise<T>} - 处理过的promise方法
 * @example
 * let [err, res] = await rocUtils.asyncTasks(Promise函数);
 * if(res) 成功
 * if(err) 失败
 */
module.exports = (promise) => {
  if (isFunction(promise)) {
    return promise()
      .then((data) => {
        return [null, data];
      })
      .catch((err) => [err]);
  } else {
    return promise
      .then((data) => {
        return [null, data];
      })
      .catch((err) => [err]);
  }
};
