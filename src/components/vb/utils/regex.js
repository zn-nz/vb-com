
/**
 * @Date: 2022-07-27 15:11:30
 * @param {*} pwd
 * @description:验证密码
 * @return {*}
 */
export const regexPWD = (pwd) => {
	return /^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{6,20}$/.test(pwd);
};


/**
 * @Date: 2022-07-27 15:11:14
 * @param {*} phone
 * @description: 验证手机号
 * @return {*}
 */
export const regexPhoneNumber = (phone) => {
	return /^1[3-9]\d{9}$/.test(phone);
};

/**
 * @Date: 2022-07-27 15:12:21
 * @param {*} email
 * @description: 验证邮箱
 * @return {*}
 */
export const regexEmail = (email) => {
	return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email);
};


/**
 * @Date: 2022-07-27 15:12:44
 * @description: 表单中的验证
 * @return {*} 例子：用的比较多的还是封装起来比较好。
 */

export const formRuleUserName = () => {
	return [
		{ required: true, message: '请输入用户账号', trigger: 'blur' },
		{ min: 2, max: 18, message: '长度在 2 到 18 个字符', trigger: 'blur' }
	];
};


/**
 * @Date: 2022-08-03 16:31:51
 * @param {*} val
 * @description: 只能输入英文字母、数字、下划线 的正则
 * @return {*}
 */
export const Regex_Az09 = (val) => {
	return /[A-Za-z0-9_]/.test(val);
};

// 账号校验 
export const isUaccount = ( uaccount = "" ) => {
	//
	return /^[-_a-zA-Z0-9]{2,18}$/.test(uaccount);
	//
};
// 手机验证码
export const isECode = ( ecode="" ) => {
	//
	return /^[a-zA-Z0-9]{6}$/.test(ecode);
	//
};
// 身份证校验
export const isIdCard =( idcard = "" ) => {
	//
	return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idcard);
	//
};