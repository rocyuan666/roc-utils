/**
 * 深层合并对象，只支持合并两个对象，该方法不会改变原有的对象
 * @param {Object} FirstOBJ - 第一个对象
 * @param {Object} SecondOBJ - 第二个对象
 * @returns {Object} - 返回深层合并后的对象
 */
module.exports = (FirstOBJ, SecondOBJ) => {
  function deepMargeObject(FirstOBJ, SecondOBJ) {
    let ResultOBJ = {}
    for (let key in FirstOBJ) {
      ResultOBJ[key] =
        ResultOBJ[key] && ResultOBJ[key].toString() === '[object Object]'
          ? deepMargeObject(ResultOBJ[key], FirstOBJ[key])
          : (ResultOBJ[key] = FirstOBJ[key])
    }
    for (let key in SecondOBJ) {
      ResultOBJ[key] =
        ResultOBJ[key] && ResultOBJ[key].toString() === '[object Object]'
          ? deepMargeObject(ResultOBJ[key], SecondOBJ[key])
          : (ResultOBJ[key] = SecondOBJ[key])
    }
    return ResultOBJ
  }
  return deepMargeObject(FirstOBJ, SecondOBJ)
}
