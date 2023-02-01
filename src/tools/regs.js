/* eslint-disable no-useless-escape */
// 匹配DOM元素正则
export const regTag = (tag) => new RegExp(`\<${tag}\[\^\>\]*\>\[\\s\\S]*?\<\/\[\^\>\]*${tag}\>`, "i");
// 汉字
export const REGCH = /^[\u4e00-\u9fa5]+$/;
// 手机号
export const REGMOBILE = /^1[3-9]\d{9}$/;
// 座机号
export const REGLANDLINE = /^[0-9]{4}-\d{7}$/;
// 邮箱
export const REGEMAIL = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
// 链接
export const REGURL = /^https?:\/\/.{1,}\..{1,}$/i;
// int
export const REGINT = /^[0-9]+$/;
// double
export const REGDOUBLE = /^\d+\.*[\d+]{0,}$/;
// 汉字
export const REGRECHINESE = /[\u4E00-\u9FFF]+/g;
// 整数或字母
export const REGINTANDLETTER = /^[a-z0-9]+$/i;
// 负数
export const REGRENEGATIVE = /^-[0-9]+$/i;
// 身份证
export const REGIDCARD = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
// 营业执照
export const REGBUSINESSLICENSE = /^[a-zA-Z0-9]{10,20}$/;

// 密码
export const REGPSW = /^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{6,20}$/;

// 验证码
export const REGCAPTCHA = /^[0-9a-zA-Z]{4}$/;

// 统一社会信用代码
export const SOCIALCREDITCODE = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
// 车牌号
export const REGCARNUMBER =
	/^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/;

// 中文数字
export const REGCHINESENUM = /[一二三四五六七八九十]{1,}/;
// 表格中的tr
export const REGTABLECYCLETR =/<tr[^>]*>[^\{^\}]*?\[{1}[\s\S^\{^\}]*?\]{1}[^\{^\}]*?<\/[^>]*tr>/gi;
// 表格中的td
export const regTd = /<td[^>]*>[\s\S]*?<\/[^>]*td>/gi;
