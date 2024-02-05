/**
 * 同步 try catch 的进一步封装处理
 * @param {() => Promise<Object>} promise - 需要处理的promise方法
 * @returns {Promise<[any, any]>} - 处理过的promise方法
 * @example
 * let [err, res] = await rocUtils.asyncTasks(Promise函数);
 * if(res) 成功
 * if(err) 失败
 */
export default async (promise) => {
  try {
    const data = await promise()
    return [null, data]
  } catch (error) {
    return [error, null]
  }
}
