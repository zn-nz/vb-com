import {
	REGDOUBLE,
	REGEMAIL,
	REGINT,
	REGMOBILE,
	REGURL,
	REGINTANDLETTER,
	REGRECHINESE,
	REGLANDLINE,
	REGIDCARD,
	REGBUSINESSLICENSE,
	REGPSW,
	REGCAPTCHA,
	SOCIALCREDITCODE,
	REGCARNUMBER,
	REGCH
} from './regs';

// 字符串
export const isStr = str => typeof str === 'string';
// 手机号
export const isMobile = str => REGMOBILE.test(str);
// 座机
export const isLandLine = str => REGLANDLINE.test(str);
//邮箱
export const isEmail = str => REGEMAIL.test(str);
// 链接地址
export const isUrl = str => REGURL.test(str);
// 浮点数字型
export const isDouble = str => REGDOUBLE.test(str);
// 整数数字型
export const isInt = str => REGINT.test(str);
// 整数和字母
export const isIntAndLetter = str => REGINTANDLETTER.test(str);
// 中文汉字
export const isChinese = str => REGRECHINESE.test(str);
// 身份证
export const isIdCard = str => REGIDCARD.test(str);
// 营业执照
export const isBusinessLicense = str => REGBUSINESSLICENSE.test(str);
// 密码
export const isPsw= str => REGPSW.test(str);
// 验证码
export const isCpatcha= str => REGCAPTCHA.test(str);
// 统一社会信用代码
export const isSocialCreditCode= str => SOCIALCREDITCODE.test(str);
// 车牌号
export const isCarNumber = str => REGCARNUMBER.test(str);

// 汉字
export const isCH= str => REGCH.test(str);