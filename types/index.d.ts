declare module rocUtils {
  export function arrTrans(num: number, arr: Array<object>): Array<object>
  export function asyncTasks(func: Promise<object>): [err: any, result: any]
  export function checkCarNumber(data: string): boolean
  export function checkCodeNumber(data: string): boolean
  export function checkCompanyIdCard(data: string): boolean
  export function checkEmail(data: string): boolean
  export function checkIdcard(data: string): boolean
  export function checkLat(latitude: number | string): boolean
  export function checkLong(longitude: number | string): boolean
  export function checkPhone(data: string): boolean
  export function combineURLs(baseURL: string, relativeURL: string): string
  export function debounce(
    func: Function,
    wait?: number,
    options?: { leading?: boolean; maxWait?: number; trailing?: boolean },
  ): Function
  export function deepMargeObject(FirstOBJ: object, SecondOBJ: object): object
  export function encodeBase64(input: string): string
  export function decodeBase64(input: string): string
  export interface FormatDateReturnType {
    YYYY: number
    MM: string
    M: number
    DD: number
    D: number
    hh: number
    h: number
    mm: number
    m: number
    ss: number
    s: number
    ms: number
    ms2: number
    ms3: number
    ms4: string
    dt: Date | string
    f1: string
    f2: string
    f3: string
    f4: string
    f5: string
    f6: string
    f7: string
    f8: string
    f9: string
    notes: string
  }
  export function formatDate(date: Date | string): FormatDateReturnType
  export function dateFormat(time: Date | string | number, fmt: string): string
  export function getTimeInterval(e: number, t: number): string
  export function getUrlQuery(url: string): object
  export function isAbsoluteURL(url: string): boolean
  export function isArray(val: any): boolean
  export function isBoolean(val: any): boolean
  export function isDate(val: any): boolean
  export function isFunction(val: any): boolean
  export function isNumber(val: any): boolean
  export function isObject(val: any): boolean
  export function isString(val: any): boolean
  export function numberToChinese(num: number): string
  export function randomHexColor(): string
  export function randomNum(minNum: number, maxNum: number): number
  export function randomRgbaColor(): string
  export function randomRgbColor(): string
  export function randomString(min: number, max: number): any
  export function showMonthFirstDay(): string
  export function showMonthLastDay(): string
  export function showWeekFirstDay(): string
  export function showWeekLastDay(): string
  export function sortAscii(obj: object): string
  export function throttle(
    func: Function,
    wait?: number,
    options?: { leading?: boolean; trailing?: boolean },
  ): Function
  export function treeDataTranslate(
    data: object,
    id?: string,
    parentId?: string,
    children?: string,
  ): Array<object>
  export function treeDataTranslateFlat(data: object, children?: string): Array<object>
  export function createUUID(len?: number, firstU?: boolean, radix?: number): string
  export function md5(str: string): string
  export function flatten(array: Array<object>): Array<object>
}
