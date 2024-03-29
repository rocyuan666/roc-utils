/**
 * 一维数组转换为多维数组
 * @template T
 * @param {Number} num - 多维数组的个数
 * @param {Array<T>} arr - 需要转换的数组
 * @return {Array<T>} - iconsArr 多维数组
 * */
export default (num, arr) => {
  const iconsArr = []
  arr.forEach((item, index) => {
    const page = Math.floor(index / num)
    if (!iconsArr[page]) {
      iconsArr[page] = []
    }
    iconsArr[page].push(item)
  })
  return iconsArr
}
