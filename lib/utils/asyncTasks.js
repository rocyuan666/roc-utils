/**
 * 同步 try catch 的进一步封装处理
 * 使用方法：
 * let [err, res] = await rocUtils.asyncTasks(Promise函数);
 * if(res) 成功
 * if(err) 失败
 */
module.exports = (promise) => {
  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((err) => [err]);
};
