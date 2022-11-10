/**
 * 功能示例
 */
// const rocUtils = require("../lib"); // debug
const rocUtils = require("../dist/rocUtils.min"); // dist

// 一维数组转换为多维数组
// arrTransT();
function arrTransT() {
  const arr = [1, 2, 5, 7, 9, 6, 789, 78, 5];
  const res = rocUtils.arrTrans(2, arr);
  console.log(res); // [ [ 1, 2 ], [ 5, 7 ], [ 9, 6 ], [ 789, 78 ], [ 5 ] ]
}

// 同步 try catch 的进一步封装处理
// asyncTasksT();
async function asyncTasksT() {
  // 假设 pFn 方法是某个请求
  const pFn = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("成功");
    }, 1000);
  });
  const [err, res] = await rocUtils.asyncTasks(pFn);
  console.log(res); // 成功
}

// 校验车牌号
// checkCarNumberT();
function checkCarNumberT() {
  const res = rocUtils.checkCarNumber("陕AC5547挂");
  console.log(res); // true
}

// 校验邮编
// checkCodeNumberT();
function checkCodeNumberT() {
  const res = rocUtils.checkCodeNumber("710000");
  console.log(res); // true
}

// 统一社会信用代码
// checkCompanyIdCardT();
function checkCompanyIdCardT() {
  const res = rocUtils.checkCompanyIdCard("1234567981245784578");
  console.log(res); // false
}

// 校验邮箱
// checkEmailT();
function checkEmailT() {
  const res = rocUtils.checkEmail("rocyuan@rocyuan.top");
  console.log(res); // true
}

// 验证身份证号码是否合法
// checkIdcardT();
function checkIdcardT() {
  const res = rocUtils.checkIdcard("6xxxxx19960704xxxx");
  console.log(res); // false
}

// 校验经度
// checkLongT();
function checkLongT() {
  const res = rocUtils.checkLong(108.93425);
  console.log(res); // true
}

// 校验纬度
// checkLatT();
function checkLatT() {
  const res = rocUtils.checkLat(108.93425);
  console.log(res); // false
}

// 校验电话号码
// checkPhoneT();
function checkPhoneT() {
  const res = rocUtils.checkPhone("1773065****");
  console.log(res); // false
}

// 合并 baseURL 和相对 URL 成一个完整的 URL
// combineURLsT();
function combineURLsT() {
  const baseURL = "https://luojing.top/";
  const relativeURL = "/?p=2021";
  const res = rocUtils.combineURLs(baseURL, relativeURL);
  console.log(res); // https://luojing.top/?p=2021
}

// 防抖
// debounceT();
function debounceT() {
  const res = rocUtils.debounce(
    function () {
      console.log("执行");
    },
    1000,
    true
  );
  console.log(res); // Function 防抖方法
}

// 节流
// throttleT();
function throttleT() {
  const res = rocUtils.throttle(
    function () {
      console.log(执行);
    },
    1000,
    true
  );
  console.log(res); // Function 节流方法
}

// 深层合并对象，只支持合并两个对象
// deepMargeObjectT();
function deepMargeObjectT() {
  const obj1 = {
    a: {
      b: {
        c: 123,
      },
    },
  };
  const obj2 = {
    a: {
      e: 456,
    },
  };
  const res = rocUtils.deepMargeObject(obj1, obj2);
  console.log(res); // { a: { b: { c: 123 }, e: 456 } }
}

// base64加密字符串
// encodeBase64T();
function encodeBase64T() {
  const res = rocUtils.encodeBase64("rocyuan");
  console.log(res); // cm9jeXVhbg==
}

// base64解密字符串
// decodeBase64T();
function decodeBase64T() {
  const res = rocUtils.decodeBase64("cm9jeXVhbg==");
  console.log(res); // rocyuan
}

// 格式化日期时间1
// formatDateT();
function formatDateT() {
  const res = rocUtils.formatDate(new Date());
  console.log(res); // 对象内容过多, 运行打印查看
}

// 格式化日期时间2
// formatTimeT();
function formatTimeT() {
  const res = rocUtils.formatTime(new Date(), "yyyy-MM-dd HH:mm:ss");
  console.log(res); // 2021-06-10 23:39:06
}

// 计算两个时间的间隔
// getTimeIntervalT();
function getTimeIntervalT() {
  const res = rocUtils.getTimeInterval(new Date().getTime(), new Date().getTime() + 1000);
  console.log(res); // 1   说明: 1,12,15,13 === 天,时,分,秒(从秒开始倒)
}

// 获取url路径的query参数
// getUrlQueryT();
function getUrlQueryT() {
  const url = "https://luojing.top/?p=2021";
  const res = rocUtils.getUrlQuery(url);
  console.log(res); // { p: '2021' }
}

// 判断 URL 是否是绝对 URL
// isAbsoluteURLT();
function isAbsoluteURLT() {
  const url = "https://luojing.top/?p=2021";
  const res = rocUtils.isAbsoluteURL(url);
  console.log(res); // true
}

// 是否是 Array 类型
// isArrayT();
function isArrayT() {
  const res = rocUtils.isArray([]);
  console.log(res); // true
}

// 是否是 Boolean 类型
// isBooleanT();
function isBooleanT() {
  const res = rocUtils.isBoolean(false);
  console.log(res); // true
}

// 是否是 Date 类型
// isDateT();
function isDateT() {
  const res = rocUtils.isDate(new Date());
  console.log(res); // true
}

// 是否是 Function
// isFunctionT();
function isFunctionT() {
  const res = rocUtils.isFunction(() => {});
  console.log(res); // true
}

// 是否是 Number 类型
// isNumberT();
function isNumberT() {
  const res = rocUtils.isNumber(666);
  console.log(res); // true
}

// 是否是 Object 类型
// isObjectT();
function isObjectT() {
  const res = rocUtils.isObject({});
  console.log(res); // true
}

// 是否是 String 类型
// isStringT();
function isStringT() {
  const res = rocUtils.isString("rocyuan");
  console.log(res); // true
}

// 数字转中文
// numberToChineseT();
function numberToChineseT() {
  const res = rocUtils.numberToChinese(666.66);
  console.log(res); // 六百六十六点六六
}

// 获取俩数之间的随机整数(包头包尾)
// randomNumT();
function randomNumT() {
  const res = rocUtils.randomNum(10, 20);
  console.log(res); // 10~20 随机数
}

// 随机生成十六进制颜色值
// randomHexColorT();
function randomHexColorT() {
  const res = rocUtils.randomHexColor();
  console.log(res); // #b92fd1 随机
}

// 随机生成RGBA颜色
// randomRgbaColorT();
function randomRgbaColorT() {
  const res = rocUtils.randomRgbaColor();
  console.log(res); // rgba(205,234,159,0.95) 随机
}

// 随机生成RGB颜色
// randomRgbColorT();
function randomRgbColorT() {
  const res = rocUtils.randomRgbColor();
  console.log(res); // rgb(177,174,153) 随机
}

// 生成指定长度的随机字符串(包头包尾)
// randomStringT();
function randomStringT() {
  const res = rocUtils.randomString(5, 10);
  console.log(res); // c3SiZ8hshn 随机
}

// 本月第一天
// showMonthFirstDayT();
function showMonthFirstDayT() {
  const res = rocUtils.showMonthFirstDay();
  console.log(res);
}

// 本月最后一天
// showMonthLastDayT();
function showMonthLastDayT() {
  const res = rocUtils.showMonthLastDay();
  console.log(res);
}

// 本周第一天
// showWeekFirstDayT();
function showWeekFirstDayT() {
  const res = rocUtils.showWeekFirstDay();
  console.log(res);
}

// 本周最后一天
// showWeekLastDayT();
function showWeekLastDayT() {
  const res = rocUtils.showWeekLastDay();
  console.log(res);
}

// 按ascii码从小到大排序对象（根据Key）一般第三方接口签名生成需要用到
// sortAsciiT();
function sortAsciiT() {
  const obj = {
    b: "123",
    a: "456",
    A: "789",
  };
  const res = rocUtils.sortAscii(obj);
  console.log(res); // A789a456b123
}

// 扁平数据转树形数据
// treeDataTranslateT();
function treeDataTranslateT() {
  const data = [
    { id: 1, pid: "" },
    { id: 2, pid: 1, title: "123" },
    { id: 3, pid: 2 },
    { id: 3, pid: 1 },
    { id: 3, pid: 1 },
    { id: 3, pid: 2 },
  ];
  const res = rocUtils.treeDataTranslate(data);
  /*
    [
      {
        id: 1,
        pid: "",
        children: [
          {
            id: 2,
            pid: 1,
            title: "123",
            children: [
              { id: 3, pid: 2 },
              { id: 3, pid: 2 },
            ],
          },
          { id: 3, pid: 1 },
          { id: 3, pid: 1 },
        ],
      },
    ]
  */
  console.log(JSON.stringify(res));
}

// 树形数据转扁平数据
// treeDataTranslateFlatT();
function treeDataTranslateFlatT() {
  const treeData = [
    {
      id: 1,
      pid: "",
      children: [
        {
          id: 2,
          pid: 1,
          title: "123",
          children: [
            { id: 3, pid: 2 },
            { id: 3, pid: 2 },
          ],
        },
        { id: 3, pid: 1 },
        { id: 3, pid: 1 },
      ],
    },
  ];
  const res = rocUtils.treeDataTranslateFlat(treeData);
  /*
    [
      { id: 1, pid: "" },
      { id: 2, pid: 1, title: "123" },
      { id: 3, pid: 2 },
      { id: 3, pid: 2 },
      { id: 3, pid: 1 },
      { id: 3, pid: 1 },
    ]
  */
  console.log(JSON.stringify(res));
}
