# roc-utils

js 常用 utils

## 使用

```bash
npm install roc-utils
or
yarn add roc-utils
```

示例:

` @/example/index.js`

## 介绍

树形数据转换（根据 id，pid） `treeDataTranslate`

随机生成十六进制颜色值 `randomHexColor`

随机生成 RGB 颜色 `randomRgbColor`

随机生成 RGBA 颜色 `randomRgbaColor`

按 ASCII 码从小到大排序对象(根据 Key) `sortAscii`

本周第一天 `showWeekFirstDay`

本周最后一天 `showWeekLastDay`

本月第一天 `showMonthFirstDay`

本月最后一天 `showMonthLastDay`

获取 url 路径的 query 参数 `getUrlQuery`

base64 加密字符串 `encodeBase64`

base64 解密字符串 `decodeBase64`

获取俩数之间的随机整数 `randomNum`

防抖方法 `debounce`

节流方法 `throttle`

格式化日期时间 1 `formatDate`

格式化日期时间 2 `formatTime`

计算两个时间的间隔 `getTimeInterval`

数字转中文 `numberToChinese`

一维数组转换为多维数组 `arrTrans`

校验经度 `checkLong`

校验纬度 `checkLat`

校验邮箱 `checkEmail`

校验邮编 `checkCodeNumber`

校验电话号码 `checkPhone`

校验车牌号 `checkCarNumber`

校验企业信用代码 `checkCompanyIdCard`

验证身份证号码是否合法 `checkIdcard`

同步 try catch 的进一步封装处理 `asyncTasks`

精确判断数据是否是 Object 类型 `isObject`

判断数据是否是 Array 类型 `isArray`

判断数据是否是 String 类型 `isString`

精确判断数据是否是 Date 类型 `isDate`

精确判断数据是否是 Function 类型 `isFunction`

精确判断数据是否是 Number 类型 `isNumber`

精确判断数据是否是 Boolean 类型 `isBoolean`

判断 URL 是否是绝对 URL `isAbsoluteURL`

合并 baseURL 和相对 URL 成一个完整的 URL `combineURLs`

深度合并对象，只支持合并两个对象，该方法不会改变原有的对象 `deepMargeObject`

生成指定长度的随机字符串 `randomString`
