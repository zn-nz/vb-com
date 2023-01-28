import { typeCheck } from "./utils";
import {
	isIdCard,
	isDouble,
	isEmail,
	isInt,
	isIntAndLetter,
	isLandLine,
	isMobile,
	isUrl,
	isPsw,
	isCpatcha,
	isSocialCreditCode,
	isCarNumber
} from "./validate";

/**
 * form  校验
 * @param {Function|[Function]} reg  // 校验正则表达式
 * @returns
 */
const validaFun = (reg, tip = "请正确填写") => {
	return {
		validator: (r, v, c) => {
			let valid = true;
			const type = typeCheck(reg);
			switch (type) {
			case "[object Function]":
				valid = reg(v);
				break;
			case "[object Array]": //满足其一即可
				valid = reg.some((r) => r(v));
				break;
			case "[object Object]": //满足全部
				valid = Object.values(reg).every((r) => r(v));
				break;
			default:
				break;
			}
			if (!v || v === 0 || valid) {
				return c();
			} else {
				return c(tip);
			}
		},
		trigger: "blur"
	};
};
// form 校验（ps:仅提供校验，不提供required）
export const validatorFun = {
	url: validaFun(isUrl),
	phone: validaFun([isMobile, isLandLine]),
	email: validaFun(isEmail),
	double: validaFun(isDouble),
	int: validaFun(isInt),
	intAndLetter: validaFun(isIntAndLetter),
	idCard: validaFun(isIdCard),
	psw: validaFun(isPsw, "密码必须包含大小写字母、数字和特殊字符，长度为6-20位"),
	captcha: validaFun(isCpatcha),
	socialCreditCode: validaFun(isSocialCreditCode),
	carNumber: validaFun(isCarNumber)
};

export const required = {
	required: true,
	message: "必填项",
	validator: function(r, v, c){
		const type = typeCheck(v);
		let valid = true;
		switch (type) {
		case "[object String]":
			if (!v?.trim()) {
				valid = false;
			}
			break;
		case "[object Number]":
			break;
		case "[object Array]":
			valid = !!v?.length;
			break;
		default:
			valid = !!v;
			break;
		}
		if (valid) {
			return c();
		} else {
			return c(this.message);
		}
	},
	trigger: "blur"
};
