/*
  * 常用javascript utils 方法
  * roc-utils v0.2.5
  * (c) 2020-2023 rocyuan
  * Email rocyuan666@163.com
  * Released under the MIT License.
  */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rocUtils = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	/**
	 * 一维数组转换为多维数组
	 * @template T
	 * @param {Number} num - 多维数组的个数
	 * @param {Array<T>} arr - 需要转换的数组
	 * @return {Array<T>} - iconsArr 多维数组
	 * */

	var arrTrans$1 = function (num, arr) {
	  var iconsArr = [];
	  arr.forEach(function (item, index) {
	    var page = Math.floor(index / num);
	    if (!iconsArr[page]) {
	      iconsArr[page] = [];
	    }
	    iconsArr[page].push(item);
	  });
	  return iconsArr;
	};

	/**
	 * 同步 try catch 的进一步封装处理
	 * @template T
	 * @param {Promise<T>} promise - 需要处理的promise方法
	 * @returns {Promise<T>} - 处理过的promise方法
	 * @example
	 * let [err, res] = await rocUtils.asyncTasks(Promise函数);
	 * if(res) 成功
	 * if(err) 失败
	 */

	var asyncTasks$1 = function (promise) {
	  return promise
	    .then(function (data) {
	      return [null, data];
	    })
	    .catch(function (err) { return [err]; });
	};

	/**
	 * 校验车牌号
	 * @param {String} data - 车牌号
	 * @return {Boolean} - false: 错误  true: 正确
	 */

	var checkCarNumber$1 = function (data) {
	  var reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;
	  if (reg.test(data)) {
	    return true;
	  } else {
	    return false;
	  }
	};

	/**
	 * 校验邮编
	 * @param {String} data - 邮编
	 * @return {Boolean} - false: 错误  true: 正确
	 */

	var checkCodeNumber$1 = function (data) {
	  var reg = /^[0-9]{6}$/;
	  if (reg.test(data)) {
	    return true;
	  } else {
	    return false;
	  }
	};

	/**
	 * 统一社会信用代码
	 * @param {String} data - 统一社会信用代码
	 * @return {Boolean} - false: 错误  true: 正确
	 */

	var checkCompanyIdCard$1 = function (data) {
	  var reg = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;
	  if (reg.test(data)) {
	    return true;
	  } else {
	    return false;
	  }
	};

	/**
	 * 校验邮箱
	 * @param {String} data - 邮箱
	 * @return {Boolean} - false: 错误  true: 正确
	 */

	var checkEmail$1 = function (data) {
	  var reg = /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  if (reg.test(data)) {
	    return true;
	  } else {
	    return false;
	  }
	};

	/**
	 * 验证身份证号码是否合法
	 * @param {String} data - 身份证号
	 * @return {Boolean} - false: 不合法 true: 合法
	 */

	var checkIdcard$1 = function (data) {
	  var num = data.toUpperCase();
	  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
	  if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)) {
	    return false;
	  }
	  //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	  //下面分别分析出生日期和校验位
	  var len, re;
	  len = num.length;
	  if (len == 15) {
	    re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
	    var arrSplit = num.match(re);

	    //检查生日日期是否正确
	    var dtmBirth = new Date("19" + arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
	    var bGoodDay;
	    bGoodDay = dtmBirth.getYear() == Number(arrSplit[2]) && dtmBirth.getMonth() + 1 == Number(arrSplit[3]) && dtmBirth.getDate() == Number(arrSplit[4]);
	    if (!bGoodDay) {
	      return false;
	    } else {
	      //将15位身份证转成18位
	      //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	      var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
	      var arrCh = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
	      var nTemp = 0,
	        i;
	      num = num.substr(0, 6) + "19" + num.substr(6, num.length - 6);
	      for (i = 0; i < 17; i++) {
	        nTemp += num.substr(i, 1) * arrInt[i];
	      }
	      num += arrCh[nTemp % 11];
	      return true;
	    }
	  }
	  if (len == 18) {
	    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
	    var arrSplit = num.match(re);

	    //检查生日日期是否正确
	    var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
	    var bGoodDay;
	    bGoodDay = dtmBirth.getFullYear() == Number(arrSplit[2]) && dtmBirth.getMonth() + 1 == Number(arrSplit[3]) && dtmBirth.getDate() == Number(arrSplit[4]);
	    if (!bGoodDay) {
	      return false;
	    } else {
	      //检验18位身份证的校验码是否正确。
	      //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	      var valnum;
	      var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
	      var arrCh = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
	      var nTemp = 0,
	        i;
	      for (i = 0; i < 17; i++) {
	        nTemp += num.substr(i, 1) * arrInt[i];
	      }
	      valnum = arrCh[nTemp % 11];
	      if (valnum != num.substr(17, 1)) {
	        return false;
	      }
	      return true;
	    }
	  }
	  return false;
	};

	/**
	 * 校验纬度
	 * @param {String} latitude - 纬度
	 * @return {Boolean} - false: 错误  true: 正确
	 */

	var checkLat$1 = function (latitude) {
	  //纬度,整数部分为0-90小数部分为0到6位
	  var latreg = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;
	  if (!latreg.test(latitude)) {
	    return false;
	  }
	  return true;
	};

	/**
	 * 校验经度
	 * @param {String} longitude - 经度
	 * @return {Boolean} - false: 错误  true: 正确
	 */

	var checkLong$1 = function (longitude) {
	  //经度，整数部分为0-180小数部分为0到6位
	  var longreg = /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/;
	  if (!longreg.test(longitude)) {
	    return false;
	  }
	  return true;
	};

	/**
	 * 校验电话号码
	 * @param {String} data - 电话号码
	 * @return {Boolean} - false: 错误  true: 正确
	 */

	var checkPhone$1 = function (data) {
	  var reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
	  if (reg.test(data)) {
	    return true;
	  } else {
	    return false;
	  }
	};

	/**
	 * 判断数据是否是 String 类型
	 * @param {Any} val - 要判断的数据
	 * @return {Boolean} - true：是；false：不是；
	 */

	var isString$2 = function (val) {
	  return Object.prototype.toString.call(val) === "[object String]";
	};

	var isString$1 = isString$2;
	/**
	 * 合并 baseURL 和相对 URL 成一个完整的 URL
	 * @param {String} baseURL - baseURL
	 * @param {String} relativeURL - 相对 URL
	 * @return {String} - 返回组合后的完整 URL
	 */
	var combineURLs$1 = function (baseURL, relativeURL) {
	  return relativeURL && isString$1(relativeURL) && isString$1(baseURL) ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
	};

	/**
	 * 精确判断数据是否是 Object 类型
	 * @param {Any} val - 要判断的数据
	 * @return {Boolean} - true：是；false：不是；
	 */

	var isObject$3 = function (val) {
	  return Object.prototype.toString.call(val) === "[object Object]" && val !== null && val !== undefined;
	};

	/* 从Node.js中检测变量global */

	var freeGlobal = typeof commonjsGlobal === "object" && commonjsGlobal !== null && commonjsGlobal.Object === Object && commonjsGlobal;

	/** 检测变量 globalThis */
	var freeGlobalThis = typeof globalThis === "object" && globalThis !== null && globalThis.Object == Object && globalThis;

	/** 检测变量 self */
	var freeSelf = typeof self === "object" && self !== null && self.Object === Object && self;

	/** root 用作对全局对象的引用 */
	var root$1 = freeGlobalThis || freeGlobal || freeSelf || Function("return this")();

	var root_1 = root$1;

	var isObject$2 = isObject$3;
	var root = root_1;

	/**
	 * @param {Function} func - 需要防抖处理的方法
	 * @param {number} [wait=0] - 延迟的毫秒数
	 * @param {Object} [options={}] - 选项对象
	 * @param {boolean} [options.leading=false] - 指定在延迟开始前调用
	 * @param {number} [options.maxWait] - 调用“func”之前允许延迟的最长时间 ms
	 * @param {boolean} [options.trailing=true] - 指定在延迟结束后调用
	 * @returns {Function} - 返回新的防抖方法
	 */
	var debounce$2 = function (func, wait, options) {
	  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime;

	  var lastInvokeTime = 0;
	  var leading = false;
	  var maxing = false;
	  var trailing = true;

	  var useRAF = !wait && wait !== 0 && typeof root.requestAnimationFrame === "function";

	  if (typeof func !== "function") {
	    throw new TypeError("Expected a function");
	  }
	  wait = +wait || 0;
	  if (isObject$2(options)) {
	    leading = !!options.leading;
	    maxing = "maxWait" in options;
	    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
	    trailing = "trailing" in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs;
	    var thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function startTimer(pendingFunc, wait) {
	    if (useRAF) {
	      root.cancelAnimationFrame(timerId);
	      return root.requestAnimationFrame(pendingFunc);
	    }
	    return setTimeout(pendingFunc, wait);
	  }

	  function cancelTimer(id) {
	    if (useRAF) {
	      return root.cancelAnimationFrame(id);
	    }
	    clearTimeout(id);
	  }

	  function leadingEdge(time) {
	    lastInvokeTime = time;
	    timerId = startTimer(timerExpired, wait);
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime;
	    var timeSinceLastInvoke = time - lastInvokeTime;
	    var timeWaiting = wait - timeSinceLastCall;

	    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime;
	    var timeSinceLastInvoke = time - lastInvokeTime;
	    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || (maxing && timeSinceLastInvoke >= maxWait);
	  }

	  function timerExpired() {
	    var time = Date.now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    timerId = startTimer(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      cancelTimer(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(Date.now());
	  }

	  function pending() {
	    return timerId !== undefined;
	  }

	  function debounced() {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    var time = Date.now();
	    var isInvoking = shouldInvoke(time);

	    lastArgs = args;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        timerId = startTimer(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = startTimer(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  debounced.pending = pending;
	  return debounced;
	};

	/**
	 * 深层合并对象，只支持合并两个对象，该方法不会改变原有的对象
	 * @param {Object} FirstOBJ - 第一个对象
	 * @param {Object} SecondOBJ - 第二个对象
	 * @returns {Object} - 返回深层合并后的对象
	 */

	var deepMargeObject$1 = function (FirstOBJ, SecondOBJ) {
	  function deepMargeObject(FirstOBJ, SecondOBJ) {
	    var ResultOBJ = {};
	    for (var key in FirstOBJ) {
	      ResultOBJ[key] = ResultOBJ[key] && ResultOBJ[key].toString() === "[object Object]" ? deepMargeObject(ResultOBJ[key], FirstOBJ[key]) : (ResultOBJ[key] = FirstOBJ[key]);
	    }
	    for (var key$1 in SecondOBJ) {
	      ResultOBJ[key$1] = ResultOBJ[key$1] && ResultOBJ[key$1].toString() === "[object Object]" ? deepMargeObject(ResultOBJ[key$1], SecondOBJ[key$1]) : (ResultOBJ[key$1] = SecondOBJ[key$1]);
	    }
	    return ResultOBJ;
	  }
	  return deepMargeObject(FirstOBJ, SecondOBJ);
	};

	/**
	 * base64加密字符串
	 * @param {String} input - 未加密前的字符串
	 * @returns {String} - 加密后的字符串
	 */

	var encodeBase64$1 = function (input) {
	  var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
	  var output = "";
	  var chr1,
	    chr2,
	    chr3 = "";
	  var enc1,
	    enc2,
	    enc3,
	    enc4 = "";
	  var i = 0;
	  do {
	    chr1 = input.charCodeAt(i++);
	    chr2 = input.charCodeAt(i++);
	    chr3 = input.charCodeAt(i++);
	    enc1 = chr1 >> 2;
	    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	    enc4 = chr3 & 63;
	    if (isNaN(chr2)) {
	      enc3 = enc4 = 64;
	    } else if (isNaN(chr3)) {
	      enc4 = 64;
	    }
	    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
	    chr1 = chr2 = chr3 = "";
	    enc1 = enc2 = enc3 = enc4 = "";
	  } while (i < input.length);

	  return output;
	};

	/**
	 * base64解密字符串
	 * @param {String} input - 未解密前的字符串
	 * @returns {String} - 解密后的字符串
	 */

	var decodeBase64$1 = function (input) {
	  var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
	  var output = "";
	  var chr1,
	    chr2,
	    chr3 = "";
	  var enc1,
	    enc2,
	    enc3,
	    enc4 = "";
	  var i = 0;

	  var base64test = /[^A-Za-z0-9\+\/\=]/g;
	  if (base64test.exec(input)) {
	    console.log("输入文本中有无效的base64字符。\n" + "有效的base64字符为A-Z、A-Z、0-9、“+”、“/”和“=”\n" + "解码时出现错误。");
	  }
	  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

	  do {
	    enc1 = keyStr.indexOf(input.charAt(i++));
	    enc2 = keyStr.indexOf(input.charAt(i++));
	    enc3 = keyStr.indexOf(input.charAt(i++));
	    enc4 = keyStr.indexOf(input.charAt(i++));

	    chr1 = (enc1 << 2) | (enc2 >> 4);
	    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	    chr3 = ((enc3 & 3) << 6) | enc4;

	    output = output + String.fromCharCode(chr1);

	    if (enc3 != 64) {
	      output = output + String.fromCharCode(chr2);
	    }
	    if (enc4 != 64) {
	      output = output + String.fromCharCode(chr3);
	    }

	    chr1 = chr2 = chr3 = "";
	    enc1 = enc2 = enc3 = enc4 = "";
	  } while (i < input.length);
	  return unescape(output);
	};

	/**
	 * @typedef ReturnType
	 * @property {Number} YYYY - 年
	 * @property {String} MM - 月
	 * @property {Number} M - 月
	 * @property {Number} DD - 日
	 * @property {Number} D - 日
	 * @property {Number} hh - 时
	 * @property {Number} h - 时
	 * @property {Number} mm - 分
	 * @property {Number} m - 分
	 * @property {Number} ss - 秒
	 * @property {Number} s - 秒
	 * @property {Number} ms - 毫秒
	 * @property {Number} ms2 - 毫秒
	 * @property {Number} ms3 - 毫秒
	 * @property {String} ms4 - 毫秒
	 * @property {Date | String} dt - 日期或日期字符串
	 * @property {String} f1 - 年-月-日
	 * @property {String} f2 - 年月日
	 * @property {String} f3 - 年月日时分
	 * @property {String} f4 - 时分秒
	 * @property {String} f5 - 月-日
	 * @property {String} f6 - 年-月
	 * @property {String} f7 - 年月
	 * @property {String} f8 - 时分
	 * @property {String} f9 - 月日
	 * @property {String} notes - YYYY（年），MM（月，补0），M（月，不补0），DD（日，补0），D（日，不补0），hh（时，补0），h（时，不补0），mm（分，补0），m（分，不补0），ss（秒，补0），s（秒，不补0），ms（毫秒，不补0），ms2（毫秒，补0到2位），ms3（毫秒，补0到3位），ms4（毫秒，补0到4位），其余的f1，f2，... 看格式就知道了！
	 */

	/**
	 * 格式化日期时间 传入日期对象或者字符串
	 * @param {Date | String} date - 日期或日期字符串
	 * @return {ReturnType} - 各种时间日期格式,支持自定义拼接key
	 */
	var formatDate$1 = function (date) {
	  var YYYY = null;
	  var M = null;
	  var MM = null;
	  var D = null;
	  var DD = null;
	  var h = null;
	  var hh = null;
	  var m = null;
	  var mm = null;
	  var s = null;
	  var ss = null;
	  var ms = null;
	  var ms2 = null;
	  var ms3 = null;
	  var ms4 = null;

	  // 如果 date 是 String 类型
	  if (date && Object.prototype.toString.call(date) === "[object String]") {
	    // 真机运行时，如果直接用 new Date('YYYY-MM-DD hh:mm:ss') 会报 Invalid Date 错误，所以采用下面的方式创建日期
	    var dtArr = date.replace(/\//g, ".").replace(/-/g, ".").replace(/:/g, ".").replace(/T/g, " ").replace(" ", ".").replace("Z", "").split(".");

	    var year = 2020;
	    var month = 12;
	    var day = 18;
	    var hour = 0;
	    var minute = 0;
	    var second = 0;
	    var millisecond = 0;

	    // 年
	    if (dtArr.length > 0 && !isNaN(dtArr[0])) {
	      year = parseInt(dtArr[0]);
	    }
	    // 月
	    if (dtArr.length > 1 && !isNaN(dtArr[1])) {
	      month = parseInt(dtArr[1]);
	    }
	    // 日
	    if (dtArr.length > 2 && !isNaN(dtArr[2])) {
	      day = parseInt(dtArr[2]);
	    }
	    // 时
	    if (dtArr.length > 3 && !isNaN(dtArr[3])) {
	      hour = parseInt(dtArr[3]);
	    }
	    // 分
	    if (dtArr.length > 4 && !isNaN(dtArr[4])) {
	      minute = parseInt(dtArr[4]);
	    }
	    // 秒
	    if (dtArr.length > 5 && !isNaN(dtArr[5])) {
	      second = parseInt(dtArr[5]);
	    }
	    // 毫秒
	    if (dtArr.length > 6 && !isNaN(dtArr[6])) {
	      millisecond = parseInt(dtArr[6]);
	    }

	    date = new Date(year, month - 1, day, hour, minute, second, millisecond);
	  }

	  // 如果 date 是 Date 类型
	  if (date && Object.prototype.toString.call(date) === "[object Date]") {
	    YYYY = date.getFullYear();
	    M = date.getMonth() + 1;
	    MM = M >= 10 ? M : "0" + M;
	    D = date.getDate();
	    DD = D >= 10 ? D : "0" + D;
	    h = date.getHours();
	    hh = h >= 10 ? h : "0" + h;
	    m = date.getMinutes();
	    mm = m >= 10 ? m : "0" + m;
	    s = date.getSeconds();
	    ss = s >= 10 ? s : "0" + s;
	    ms = date.getMilliseconds();
	    ms2 = ms;
	    ms3 = ms;
	    ms4 = ms;
	    if (ms < 10) {
	      ms2 = "0" + ms;
	      ms3 = "00" + ms;
	      ms4 = "000" + ms;
	    } else if (ms < 100) {
	      ms3 = "0" + ms;
	      ms4 = "00" + ms;
	    } else {
	      ms4 = "0" + ms;
	    }
	  }

	  // 返回的数据对象
	  var result = {
	    YYYY: YYYY,
	    MM: MM,
	    M: M,
	    DD: DD,
	    D: D,
	    hh: hh,
	    h: h,
	    mm: mm,
	    m: m,
	    ss: ss,
	    s: s,
	    ms: ms,
	    ms2: ms2,
	    ms3: ms3,
	    ms4: ms4,
	    dt: date,
	    f1: (YYYY + "-" + MM + "-" + DD),
	    f2: (YYYY + "年" + M + "月" + D + "日"),
	    f3: (YYYY + "-" + M + "-" + D + " " + hh + ":" + mm),
	    f4: (h + ":" + m + ":" + s),
	    f5: (MM + "-" + DD),
	    f6: (YYYY + "-" + MM),
	    f7: (YYYY + "年" + M + "月"),
	    f8: (h + ":" + m),
	    f9: (M + "月" + D + "日"),
	    notes:
	      "YYYY（年），MM（月，补0），M（月，不补0），DD（日，补0），D（日，不补0），hh（时，补0），h（时，不补0），mm（分，补0），m（分，不补0），ss（秒，补0），s（秒，不补0），ms（毫秒，不补0），ms2（毫秒，补0到2位），ms3（毫秒，补0到3位），ms4（毫秒，补0到4位），其余的f1，f2，... 看格式就知道了！",
	  };
	  return result;
	};

	/**
	 * @param {Date} time - 需要转换的时间
	 * @param {String} fmt - 需要转换的格式 如 yyyy-MM-dd、yyyy-MM-dd HH:mm:ss
	 * @returns {String} - 格式化后的日期时间
	 */

	var formatTime$1 = function (time, fmt) {
	  if (!time) { return ""; }
	  else {
	    var date = new Date(time);
	    var o = {
	      "M+": date.getMonth() + 1,
	      "d+": date.getDate(),
	      "H+": date.getHours(),
	      "m+": date.getMinutes(),
	      "s+": date.getSeconds(),
	      "q+": Math.floor((date.getMonth() + 3) / 3),
	      S: date.getMilliseconds(),
	    };
	    if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length)); }
	    for (var k in o) {
	      if (new RegExp("(" + k + ")").test(fmt)) {
	        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	      }
	    }
	    return fmt;
	  }
	};

	/**
	 * 计算两个时间的间隔
	 * @param {Number} e - 开始时间戳
	 * @param {Number} t - 结束时间戳
	 * @return {String} - 1,12,15,13 天时分秒  过期返回空
	 */

	var getTimeInterval$1 = function (e, t) {
	  var r = [0, 0, 0, 0],
	    n = "",
	    o = t > e ? parseInt((t - e) / 1e3) : 0;
	  return (
	    (r[0] = o > 86400 ? parseInt(o / 86400) : 0),
	    (o -= 86400 * r[0]),
	    (r[1] = o > 3600 ? parseInt(o / 3600) : 0),
	    (o -= 3600 * r[1]),
	    (r[2] = o > 60 ? parseInt(o / 60) : 0),
	    (r[3] = o - 60 * r[2]),
	    (n = r[0] > 0 ? r[0] + "," : ""),
	    (n += r[0] <= 0 && r[1] <= 0 ? "" : r[1] + ","),
	    (n += r[0] <= 0 && r[1] <= 0 && r[2] <= 0 ? "" : r[2] + ","),
	    (n += r[0] <= 0 && r[1] <= 0 && r[2] <= 0 && r[3] <= 0 ? "" : r[3])
	  );
	};

	/**
	 * 获取url路径的query参数
	 * @param {String} url - url
	 * @returns {Object} - query参数的对象
	 */

	var getUrlQuery$1 = function (url) {
	  if (url.indexOf("?") == -1) { return; }
	  var theRequest = new Object();
	  var str = url.split("?")[1];
	  var strs = str.split("&");
	  for (var i = 0; i < strs.length; i++) {
	    theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
	  }
	  return theRequest;
	};

	/**
	 * 判断 URL 是否是绝对 URL。
	 * @param {String} url - 要判断的 URL
	 * @return {Boolean} - true：是绝对URL；false：不是绝对URL；
	 */

	var isAbsoluteURL$1 = function (url) {
	  // 如果 URL 以 “<scheme>：//” 或 “//”（协议相对URL）开头，则认为它是绝对的
	  // RFC 3986 将方案名称定义为以字母开头的字符序列，然后是字母，数字，加号，句点或连字符的任意组合
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};

	/**
	 * 判断数据是否是 Array 类型
	 * @param {Any} val - 要判断的数据
	 * @return {Boolean} - true：是；false：不是；
	 */

	var isArray$2 = function (val) {
	  return Object.prototype.toString.call(val) === "[object Array]";
	};

	/**
	 * 精确判断数据是否是 Boolean 类型
	 * @param {Any} val - 要判断的数据
	 * @return {Boolean} - true：是；false：不是；
	 */

	var isBoolean$1 = function (val) {
	  return Object.prototype.toString.call(val) === "[object Boolean]";
	};

	/**
	 * 精确判断数据是否是 Date 类型
	 * @param {Any} val - 要判断的数据
	 * @return {Boolean} - true：是；false：不是；
	 */

	var isDate$1 = function (val) {
	  return Object.prototype.toString.call(val) === "[object Date]";
	};

	/**
	 * 精确判断数据是否是 Function 类型
	 * @param {Any} val - 要判断的数据
	 * @return {Boolean} - true：是；false：不是；
	 */

	var isFunction$1 = function (val) {
	  return Object.prototype.toString.call(val) === "[object Function]";
	};

	/**
	 * 精确判断数据是否是 Number 类型
	 * @param {Any} val - 要判断的数据
	 * @return {Boolean} - true：是；false：不是；
	 */

	var isNumber$1 = function (val) {
	  return Object.prototype.toString.call(val) === "[object Number]";
	};

	/**
	 * 数字转中文
	 * @param {Number} num - 数字
	 * @returns {Number} - 转中文的值
	 */

	var numberToChinese$1 = function (num) {
	  if (!/^\d*(\.\d*)?$/.test(num)) { return "Number is wrong!"; }
	  var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九");
	  var BB = new Array("", "十", "百", "千", "万", "亿", "点", "");
	  var a = ("" + num).replace(/(^0*)/g, "").split("."),
	    k = 0,
	    re = "";
	  for (var i = a[0].length - 1; i >= 0; i--) {
	    switch (k) {
	      case 0:
	        re = BB[7] + re;
	        break;
	      case 4:
	        if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0])) { re = BB[4] + re; }
	        break;
	      case 8:
	        re = BB[5] + re;
	        BB[7] = BB[5];
	        k = 0;
	        break;
	    }
	    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) { re = AA[0] + re; }
	    if (a[0].charAt(i) != 0) { re = AA[a[0].charAt(i)] + BB[k % 4] + re; }
	    k++;
	  }
	  if (a.length > 1) {
	    //加上小数部分(如果有小数部分)
	    re += BB[6];
	    for (var i$1 = 0; i$1 < a[1].length; i$1++) { re += AA[a[1].charAt(i$1)]; }
	  }
	  return re;
	};

	/**
	 * @returns {String} - 随机生成十六进制颜色值
	 */

	var randomHexColor$1 = function () {
	  var hex = Math.floor(Math.random() * 16777216).toString(16);
	  while (hex.length < 6) {
	    hex = "0" + hex;
	  }
	  return "#" + hex;
	};

	/**
	 * 获取俩数之间的随机整数(包头包尾)
	 * @param {Number} minNum - 最小整数
	 * @param {Number} maxNum - 最大整数
	 * @returns {Number} - 随机数
	 */

	var randomNum$1 = function (minNum, maxNum) {
	  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
	};

	/**
	 * @returns {String} - 随机生成RGBA颜色
	 */

	var randomRgbaColor$1 = function () {
	  var r = Math.floor(Math.random() * 256);
	  var g = Math.floor(Math.random() * 256);
	  var b = Math.floor(Math.random() * 256);
	  var alpha = Math.random(); //随机生成1以内a值
	  alpha = alpha.toFixed(2);
	  return ("rgba(" + r + "," + g + "," + b + "," + alpha + ")");
	};

	/**
	 * @returns {String} - 随机生成RGB颜色
	 */

	var randomRgbColor$1 = function () {
	  var r = Math.floor(Math.random() * 256);
	  var g = Math.floor(Math.random() * 256);
	  var b = Math.floor(Math.random() * 256);
	  return ("rgb(" + r + "," + g + "," + b + ")");
	};

	/**
	 * 生成指定长度的随机字符串
	 * @param {Number} min - 最小长度
	 * @param {Number} max - 最大长度
	 * @returns {String} - 返回生成的字符串
	 */

	var randomString$1 = function (min, max) {
	  var returnStr = "",
	    range = max ? Math.round(Math.random() * (max - min)) + min : min,
	    arr = [
	      "0",
	      "1",
	      "2",
	      "3",
	      "4",
	      "5",
	      "6",
	      "7",
	      "8",
	      "9",
	      "a",
	      "b",
	      "c",
	      "d",
	      "e",
	      "f",
	      "g",
	      "h",
	      "i",
	      "j",
	      "k",
	      "l",
	      "m",
	      "n",
	      "o",
	      "p",
	      "q",
	      "r",
	      "s",
	      "t",
	      "u",
	      "v",
	      "w",
	      "x",
	      "y",
	      "z",
	      "A",
	      "B",
	      "C",
	      "D",
	      "E",
	      "F",
	      "G",
	      "H",
	      "I",
	      "J",
	      "K",
	      "L",
	      "M",
	      "N",
	      "O",
	      "P",
	      "Q",
	      "R",
	      "S",
	      "T",
	      "U",
	      "V",
	      "W",
	      "X",
	      "Y",
	      "Z" ];
	  for (var i = 0; i < range; i++) {
	    var index = Math.round(Math.random() * (arr.length - 1));
	    returnStr += arr[index];
	  }
	  return returnStr;
	};

	/**
	 * 本月第一天
	 * @returns - 本月第一天的 年-月-日
	 */

	var showMonthFirstDay$1 = function () {
	  var Nowdate = new Date();
	  var MonthFirstDay = new Date(Nowdate.getYear(), Nowdate.getMonth(), 1);
	  var M = Number(MonthFirstDay.getMonth()) + 1;
	  if (String(M).length == 1) {
	    M = "0" + M;
	  }
	  var day = MonthFirstDay.getDate();
	  if (String(day).length == 1) {
	    day = "0" + day;
	  }
	  return Nowdate.getFullYear() + "-" + M + "-" + day;
	};

	/**
	 * 本月最后一天
	 * @returns - 本月最后一天的 年-月-日
	 */

	var showMonthLastDay$1 = function () {
	  var Nowdate = new Date();
	  var MonthNextFirstDay = new Date(Nowdate.getYear(), Nowdate.getMonth() + 1, 1);
	  var MonthLastDay = new Date(MonthNextFirstDay - 86400000);
	  var M = Number(MonthLastDay.getMonth()) + 1;
	  if (String(M).length == 1) {
	    M = "0" + M;
	  }
	  var day = MonthLastDay.getDate();
	  if (String(day).length == 1) {
	    day = "0" + day;
	  }
	  return Nowdate.getFullYear() + "-" + M + "-" + day;
	};

	/**
	 * 本周第一天
	 * @returns - 本周第一天的日期时间
	 */

	var showWeekFirstDay$1 = function () {
	  var Nowdate = new Date();
	  var numDay = Nowdate.getDay();
	  // 处理本周第一天是周一（不处理的话第一天是周日）
	  if (numDay == 0) {
	    numDay = 6;
	  } else {
	    numDay = numDay - 1;
	  }
	  var WeekFirstDay = new Date(Nowdate - numDay * 86400000);
	  var M = Number(WeekFirstDay.getMonth()) + 1;
	  if (String(M).length == 1) {
	    M = "0" + M;
	  }
	  var day = WeekFirstDay.getDate();
	  if (String(day).length == 1) {
	    day = "0" + day;
	  }
	  return WeekFirstDay.getFullYear() + "-" + M + "-" + day;
	};

	/**
	 * 本周最后一天
	 * @returns - 本周最后一天的日期时间
	 */

	var showWeekLastDay$1 = function () {
	  var Nowdate = new Date();
	  var numDay = Nowdate.getDay();
	  // 处理本周第一天是周一（不处理的话第一天是周日）
	  if (numDay == 0) {
	    numDay = 6;
	  } else {
	    numDay = numDay - 1;
	  }
	  var WeekFirstDay = new Date(Nowdate - numDay * 86400000);
	  var WeekLastDay = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000);
	  var M = Number(WeekLastDay.getMonth()) + 1;
	  if (String(M).length == 1) {
	    M = "0" + M;
	  }
	  var day = WeekLastDay.getDate();
	  if (String(day).length == 1) {
	    day = "0" + day;
	  }
	  return WeekLastDay.getFullYear() + "-" + M + "-" + day;
	};

	/**
	 * 按ascii码从小到大排序对象（根据Key）
	 * 一般第三方接口签名生成需要用到
	 * @param {Object} obj - 传入需要排序的对象
	 * @returns {String} - 输出排序好的字符串
	 */

	var sortAscii$1 = function (obj) {
	  var arr = new Array();
	  var num = 0;
	  for (var i in obj) {
	    arr[num] = i;
	    num++;
	  }
	  var sortArr = arr.sort();
	  var str = "";
	  for (var i$1 in sortArr) {
	    str += sortArr[i$1] + obj[sortArr[i$1]];
	  }
	  var char = "&";
	  str = str.replace(new RegExp("^\\" + char + "+|\\" + char + "+$", "g"), "");
	  return str;
	};

	var debounce$1 = debounce$2;
	var isObject$1 = isObject$3;

	/**
	 * @param {Function} func - 需要节流处理的方法
	 * @param {number} [wait=0] - 延迟的毫秒数
	 * @param {Object} [options={}] - 选项对象
	 * @param {boolean} [options.leading=true] - 指定调用在节流开始前
	 * @param {boolean} [options.trailing=true] - 指定调用在节流结束后
	 * @returns {Function} 返回新的节流方法
	 */
	var throttle$1 = function (func, wait, options) {
	  var leading = true;
	  var trailing = true;

	  if (typeof func !== "function") {
	    throw new TypeError("Expected a function");
	  }
	  if (isObject$1(options)) {
	    leading = "leading" in options ? !!options.leading : leading;
	    trailing = "trailing" in options ? !!options.trailing : trailing;
	  }
	  return debounce$1(func, wait, {
	    leading: leading,
	    trailing: trailing,
	    maxWait: wait,
	  });
	};

	/**
	 * 扁平数据转树形数据
	 * @param {Object} data - 数据源
	 * @param {String} id - id字段 默认 'id'
	 * @param {String} parentId - 父节点字段 默认 'pid'
	 * @param {String} children - 孩子节点字段 默认 'children'
	 */

	var treeDataTranslate$1 = function (data, id, parentId, children) {
	  var config = {
	    id: id || "id",
	    parentId: parentId || "pid",
	    childrenList: children || "children",
	  };

	  var childrenListMap = {};
	  var nodeIds = {};
	  var tree = [];

	  data.forEach(function (d) {
	    var parentId = d[config.parentId];
	    if (childrenListMap[parentId] == null) {
	      childrenListMap[parentId] = [];
	    }
	    nodeIds[d[config.id]] = d;
	    childrenListMap[parentId].push(d);
	  });

	  data.forEach(function (d) {
	    var parentId = d[config.parentId];
	    if (nodeIds[parentId] == null) {
	      tree.push(d);
	    }
	  });

	  tree.forEach(function (t) {
	    adaptToChildrenList(t);
	  });

	  function adaptToChildrenList(o) {
	    if (childrenListMap[o[config.id]] !== null) {
	      o[config.childrenList] = childrenListMap[o[config.id]];
	    }
	    if (o[config.childrenList]) {
	      o[config.childrenList].forEach(function (c) {
	        adaptToChildrenList(c);
	      });
	    }
	  }
	  return tree;
	};

	/**
	 * 树形数据转扁平数据
	 * @param {Object} data - 数据源
	 * @param {String} children - 孩子节点字段 默认 'children'
	 */

	var treeDataTranslateFlat$1 = function (data, children) {
	  var config = {
	    children: children || "children",
	  };
	  var result = [];
	  data.forEach(function (item) {
	    var loop = function (data) {
	      var newData = Object.assign({}, data);
	      if (newData.hasOwnProperty(config.children)) {
	        delete newData[config.children];
	      }
	      result.push(Object.assign({}, newData));
	      var child = data[config.children];
	      if (child) {
	        for (var i = 0; i < child.length; i++) {
	          loop(child[i]);
	        }
	      }
	    };
	    loop(item);
	  });
	  return result;
	};

	/**
	 * 创建UUID
	 * @param {Number} len - uuid的长度
	 * @param {Boolean} firstU - 将返回的首字母置为"u"
	 * @param {Nubmer} radix - 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
	 * @returns {string} -  uuid
	 */

	var createUUID$1 = function (len, firstU, radix) {
	  if ( len === void 0 ) len = 32;
	  if ( firstU === void 0 ) firstU = true;
	  if ( radix === void 0 ) radix = null;

	  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
	  var uuid = [];
	  radix = radix || chars.length;

	  if (len) {
	    for (var i = 0; i < len; i++) { uuid[i] = chars[0 | (Math.random() * radix)]; }
	  } else {
	    var r;
	    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
	    uuid[14] = "4";

	    for (var i$1 = 0; i$1 < 36; i$1++) {
	      if (!uuid[i$1]) {
	        r = 0 | (Math.random() * 16);
	        uuid[i$1] = chars[i$1 == 19 ? (r & 0x3) | 0x8 : r];
	      }
	    }
	  }
	  if (firstU) {
	    uuid.shift();
	    return "u" + uuid.join("");
	  } else {
	    return uuid.join("");
	  }
	};

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	/*
	 * Configurable variables. You may need to tweak these to be compatible with
	 * the server-side, but the defaults work in most cases.
	 */
	var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */

	/*
	 * These are the functions you'll usually want to call
	 * They take string arguments and return either hex or base-64 encoded strings
	 */
	function hex_md5(s) {
	  return rstr2hex(rstr_md5(str2rstr_utf8(s)));
	}

	/*
	 * Calculate the MD5 of a raw string
	 */
	function rstr_md5(s) {
	  return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
	}

	/*
	 * Convert a raw string to a hex string
	 */
	function rstr2hex(input) {
	  try {
	    hexcase;
	  } catch (e) {
	    hexcase = 0;
	  }
	  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	  var output = "";
	  var x;
	  for (var i = 0; i < input.length; i++) {
	    x = input.charCodeAt(i);
	    output += hex_tab.charAt((x >>> 4) & 0x0f) + hex_tab.charAt(x & 0x0f);
	  }
	  return output;
	}

	/*
	 * Encode a string as utf-8.
	 * For efficiency, this assumes the input is valid utf-16.
	 */
	function str2rstr_utf8(input) {
	  var output = "";
	  var i = -1;
	  var x, y;

	  while (++i < input.length) {
	    /* Decode utf-16 surrogate pairs */
	    x = input.charCodeAt(i);
	    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
	    if (0xd800 <= x && x <= 0xdbff && 0xdc00 <= y && y <= 0xdfff) {
	      x = 0x10000 + ((x & 0x03ff) << 10) + (y & 0x03ff);
	      i++;
	    }

	    /* Encode output as utf-8 */
	    if (x <= 0x7f) { output += String.fromCharCode(x); }
	    else if (x <= 0x7ff) { output += String.fromCharCode(0xc0 | ((x >>> 6) & 0x1f), 0x80 | (x & 0x3f)); }
	    else if (x <= 0xffff) { output += String.fromCharCode(0xe0 | ((x >>> 12) & 0x0f), 0x80 | ((x >>> 6) & 0x3f), 0x80 | (x & 0x3f)); }
	    else if (x <= 0x1fffff) { output += String.fromCharCode(0xf0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3f), 0x80 | ((x >>> 6) & 0x3f), 0x80 | (x & 0x3f)); }
	  }
	  return output;
	}

	/*
	 * Convert a raw string to an array of little-endian words
	 * Characters >255 have their high-byte silently ignored.
	 */
	function rstr2binl(input) {
	  var output = Array(input.length >> 2);
	  for (var i = 0; i < output.length; i++) { output[i] = 0; }
	  for (var i = 0; i < input.length * 8; i += 8) { output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32; }
	  return output;
	}

	/*
	 * Convert an array of little-endian words to a string
	 */
	function binl2rstr(input) {
	  var output = "";
	  for (var i = 0; i < input.length * 32; i += 8) { output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff); }
	  return output;
	}

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length.
	 */
	function binl_md5(x, len) {
	  /* append padding */
	  x[len >> 5] |= 0x80 << len % 32;
	  x[(((len + 64) >>> 9) << 4) + 14] = len;

	  var a = 1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d = 271733878;

	  for (var i = 0; i < x.length; i += 16) {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;

	    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
	    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
	    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
	    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
	    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
	    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
	    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

	    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
	    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
	    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
	    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
	    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
	    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
	    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
	    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
	    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
	    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
	    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
	    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

	    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
	    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
	    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
	    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
	    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
	    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
	    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
	    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
	    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

	    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
	    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
	    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
	    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
	    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
	    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
	    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
	    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);
	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t) {
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	}
	function md5_ff(a, b, c, d, x, s, t) {
	  return md5_cmn((b & c) | (~b & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t) {
	  return md5_cmn((b & d) | (c & ~d), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t) {
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t) {
	  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y) {
	  var lsw = (x & 0xffff) + (y & 0xffff);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xffff);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt) {
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	/**
	 * 
	 * @param {String} str - 需要md5的值
	 * @returns {String} - md5后的值
	 */
	var md5$1 = function (str) {
	  return hex_md5(str);
	};

	var isArray$1 = isArray$2;

	/**
	 * 数组降维，将多维数组转换为一维数组
	 * @template T
	 * @param {Array<T>} array - 需要变平的数组
	 * @returns {Array<T>} - 返回扁平的数组
	 */
	var flatten$1 = function (array) {
	  var result = [];
	  _flatten(array, result);
	  return result;
	};

	function _flatten(array, result) {
	  for (var i = 0; i < array.length; i++) {
	    var value = array[i];
	    if (isArray$1(value)) {
	      _flatten(value, result);
	    }
	    else {
	      result.push(value);
	    }
	  }
	}

	var arrTrans = arrTrans$1;
	var asyncTasks = asyncTasks$1;
	var checkCarNumber = checkCarNumber$1;
	var checkCodeNumber = checkCodeNumber$1;
	var checkCompanyIdCard = checkCompanyIdCard$1;
	var checkEmail = checkEmail$1;
	var checkIdcard = checkIdcard$1;
	var checkLat = checkLat$1;
	var checkLong = checkLong$1;
	var checkPhone = checkPhone$1;
	var combineURLs = combineURLs$1;
	var debounce = debounce$2;
	var deepMargeObject = deepMargeObject$1;
	var encodeBase64 = encodeBase64$1;
	var decodeBase64 = decodeBase64$1;
	var formatDate = formatDate$1;
	var formatTime = formatTime$1;
	var getTimeInterval = getTimeInterval$1;
	var getUrlQuery = getUrlQuery$1;
	var isAbsoluteURL = isAbsoluteURL$1;
	var isArray = isArray$2;
	var isBoolean = isBoolean$1;
	var isDate = isDate$1;
	var isFunction = isFunction$1;
	var isNumber = isNumber$1;
	var isObject = isObject$3;
	var isString = isString$2;
	var numberToChinese = numberToChinese$1;
	var randomHexColor = randomHexColor$1;
	var randomNum = randomNum$1;
	var randomRgbaColor = randomRgbaColor$1;
	var randomRgbColor = randomRgbColor$1;
	var randomString = randomString$1;
	var showMonthFirstDay = showMonthFirstDay$1;
	var showMonthLastDay = showMonthLastDay$1;
	var showWeekFirstDay = showWeekFirstDay$1;
	var showWeekLastDay = showWeekLastDay$1;
	var sortAscii = sortAscii$1;
	var throttle = throttle$1;
	var treeDataTranslate = treeDataTranslate$1;
	var treeDataTranslateFlat = treeDataTranslateFlat$1;
	var createUUID = createUUID$1;
	var md5 = md5$1;
	var flatten = flatten$1;

	var lib = {
	  arrTrans: arrTrans,
	  asyncTasks: asyncTasks,
	  checkCarNumber: checkCarNumber,
	  checkCodeNumber: checkCodeNumber,
	  checkCompanyIdCard: checkCompanyIdCard,
	  checkEmail: checkEmail,
	  checkIdcard: checkIdcard,
	  checkLat: checkLat,
	  checkLong: checkLong,
	  checkPhone: checkPhone,
	  combineURLs: combineURLs,
	  debounce: debounce,
	  deepMargeObject: deepMargeObject,
	  encodeBase64: encodeBase64,
	  decodeBase64: decodeBase64,
	  formatDate: formatDate,
	  formatTime: formatTime,
	  getTimeInterval: getTimeInterval,
	  getUrlQuery: getUrlQuery,
	  isAbsoluteURL: isAbsoluteURL,
	  isArray: isArray,
	  isBoolean: isBoolean,
	  isDate: isDate,
	  isFunction: isFunction,
	  isNumber: isNumber,
	  isObject: isObject,
	  isString: isString,
	  numberToChinese: numberToChinese,
	  randomHexColor: randomHexColor,
	  randomNum: randomNum,
	  randomRgbaColor: randomRgbaColor,
	  randomRgbColor: randomRgbColor,
	  randomString: randomString,
	  showMonthFirstDay: showMonthFirstDay,
	  showMonthLastDay: showMonthLastDay,
	  showWeekFirstDay: showWeekFirstDay,
	  showWeekLastDay: showWeekLastDay,
	  sortAscii: sortAscii,
	  throttle: throttle,
	  treeDataTranslate: treeDataTranslate,
	  treeDataTranslateFlat: treeDataTranslateFlat,
	  createUUID: createUUID,
	  md5: md5,
	  flatten: flatten,
	};

	return lib;

}));
