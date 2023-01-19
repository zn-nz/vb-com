import chineseToNumber from "./chinese-number.js";
import { REGCHINESENUM } from "./regs.js";
import { isCH } from "./validate.js";
/**
 * @Date: 2022-07-27 15:15:48
 * @description: 时间转时间戳
 * @return {*}
 */
export const dateTime2stamp = (dateTime = "") => {
	let _timeStamp = "";
	if (dateTime !== "") {
		const _dateTime = new Date(dateTime);
		_timeStamp = _dateTime.getTime();
	}
	return _timeStamp;
};

/**
 * @Date: 2022-07-27 15:23:06
 * @param {*} format
 * @description: 获取format格式的时间
 * @return {*}
 */
export const getDatetime = (format = "Y-m-d H:i:s") => {
	let _datetime = "";
	const _date = new Date();

	const _year = _date.getFullYear().toString();
	let _month = (_date.getMonth() + 1).toString();
	let _day = _date.getDate().toString();
	_month = _month < 10 ? `0${_month}` : _month;
	_day = _day < 10 ? `0${_day}` : _day;

	let _h = _date.getHours();
	let _m = _date.getMinutes();
	let _s = _date.getSeconds();
	_h = _h < 10 ? `0${_h}` : _h;
	_m = _m < 10 ? `0${_m}` : _m;
	_s = _s < 10 ? `0${_s}` : _s;

	switch (format) {
	case "Y-M-d":
		_datetime = `${_year}-${_month}-${_day}`;
		break;
	case "Y-M-d H:i:s":
		_datetime = `${_year}-${_month}-${_day} ${_h}:${_m}:${_s}`;
		break;
	default:
		_datetime = `${_year}-${_month}-${_day} ${_h}:${_m}:${_s}`;
		break;
	}

	return _datetime;
};

export function parseTime(time, cFormat) {
	if (arguments.length === 0 || !time) {
		return null;
	}
	const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
	let date;
	if (typeof time === "object") {
		date = time;
	} else {
		if (typeof time === "string") {
			if (/^[0-9]+$/.test(time)) {
				// support "1548221490638"
				time = parseInt(time);
			} else {
				// support safari
				// https://stackoverflow.com/questions/4310953/invalid-date-in-safari
				time = time.replace(new RegExp(/-/gm), "/");
			}
		}

		if (typeof time === "number" && time.toString().length === 10) {
			time = time * 1000;
		}
		date = new Date(time);
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	};
	const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
		const value = formatObj[key];
		// Note: getDay() returns 0 on Sunday
		if (key === "a") {
			return ["日", "一", "二", "三", "四", "五", "六"][value];
		}
		return value.toString().padStart(2, "0");
	});
	return time_str;
}

/**
 * @Date: 2022-07-27 15:18:18
 * @param {*} timestamp
 * @param {*} itype
 * @description: 时间戳转时间
 * @return {*}
 */
export const timestampToTime = (timestamp, itype = "Y-m-d") => {
	const date = new Date(timestamp); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
	const Y = `${date.getFullYear()}-`;
	const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
	const D = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
	// const D = date.getDate();

	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();

	h = h < 10 ? `0${h}` : h;
	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;

	let t = "";
	if (itype === "Y-m-d") {
		t = Y + M + D;
	} else {
		t = `${Y + M + D} ${h}:${m}:${s}`;
	}
	return t;
};

/**
 * @Date: 2022-08-04 13:55:13
 * @param {*} nodes
 * @description: 扁平化数组转换成tree节点数组
 * @return {*}
 */
export const transformTozTreeFormat = (nodes) => {
	let i;
	let l;

	if (!nodes) return [];

	if (Object.prototype.toString.call(nodes) === "[object Array]") {
		const r = [];
		const tmpMap = {};
		for (i = 0, l = nodes.length; i < l; i++) {
			tmpMap[nodes[i].id] = nodes[i];
		}
		for (i = 0, l = nodes.length; i < l; i++) {
			const p = tmpMap[nodes[i].parentId];
			if (p && nodes[i].id !== nodes[i].parentId) {
				if (!p.children) {
					p.children = [];
				}
				p.children.push(nodes[i]);
			} else {
				r.push(nodes[i]);
			}
		}
		return r;
	} else {
		return [nodes];
	}
};

/**
 * @Date: 2022-11-13 16:33:13
 * @param {*} String
 * @description: 首字母大写
 * @return {*}
 */
export const first2Upper = (str = "") => {
	return str !== "" ? str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()) : "";
};

export const getDictList = (code) => {
	return new Promise((resolve, recject) => {
		globalRequest(api.commons.dictItemByCode, { dictCode: code })
			.then((res) => {
				let resArr = [];
				if (res.data.code === 1) {
					res.data.data.forEach((item) => {
						let obj = { name: item.name, code: item.code };
						resArr.push(obj);
					});
				}
				resolve(resArr);
			})
			.catch((e) => {
				recject(e);
			});
	});
};
// 文件下载
export const fileDown = (fileUrl = "") => {
	//
	var iFrame = document.createElement("iframe");
	iFrame.src = fileUrl;
	iFrame.style.display = "none";
	document.body.appendChild(iFrame);
	//
};
// pdf文件下载
export const fileDownPdf = (fileUrl = "", fileName = "") => {
	//
	var link = document.createElement("a");
	link.style.display = "none";
	link.href = fileUrl;
	link.target = "_blank";
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	//
};
// 文件下载
export const fileDownBlod = (data = null, fileName = "下载文件") => {
	console.log("🚀 ~ file: utils.js ~ line 240 ~ fileDownBlod ~ data", data);
	// let url = window.URL.createObjectURL(new Blob([data]));
	let url = window.URL.createObjectURL(data);
	let link = document.createElement("a");
	//
	link.style.display = "none";
	link.href = url;
	link.target = "_blank";
	link.setAttribute("download", fileName); //指定下载后的文件名，防跳转
	document.body.appendChild(link);
	link.click();
	window.URL.revokeObjectURL(link.href); // 释放URL 对象
	document.body.removeChild(link);
	//
};
export const obj2Formdata = (obj) => {
	const formData = new FormData();
	Object.keys(obj).forEach((key) => {
		if (obj[key] !== null) {
			formData.append(key, obj[key]);
		}
	});
	return formData;
};
/**
 * 上传单个文件
 * @param {File} file
 * @returns 文件服务器地址 {name,path,url}
 */
export const uploadFile = async (file) => {
	const {
		data: { data }
	} = await globalRequest(api.commons.apiUpload, obj2Formdata({ file }));
	if (data) {
		return Promise.resolve(data);
	}
	return Promise.reject();
};
// 跳转外链
export const jumpExternalChain = (path, blank = true) => {
	const a = document.createElement("a");
	a.href = path;
	blank && (a.target = "_blank");
	a.click();
};
// 分离文件名字和后缀
export const formatFileNameSuffix = (str) => {
	const [suffix, ...name] = str.split(".").reverse();
	return [name.reverse().reduce((t, c) => t + c, ""), suffix];
};
// 格式化文件大小
export const formatFileSize = (size) => {
	switch (true) {
	case size / 1024 < 1024:
		return `${(size / 1024).toFixed(2)}kb`;
	default:
		return `${(size / 1024 / 1024).toFixed(2)}Mb`;
	}
};
// 类型检测
export const typeCheck = (v) => Object.prototype.toString.call(v);

/**
 * 一层json数组排序
 * @param {[{}]} arr
 * @param {string} keys // 按多个key排序英文逗号,隔开
 * @param {boolean} big2Small // 是否从大到小排，默认false——从小到大
 * @returns
 */
export const sortFuc = (arr, keys, big2Small = false) => {
	if (Object.prototype.toString.call(arr) !== "[object Array]") return [];
	const keyArr = keys?.split(",");
	function computeResult(av, bv) {
		switch (true) {
		case !!av?.match(REGCHINESENUM)?.length && !!bv?.match(REGCHINESENUM)?.length:
			return chineseToNumber(av?.match(REGCHINESENUM)[0]) - chineseToNumber(bv?.match(REGCHINESENUM)[0]);
		case isCH(av) && isCH(bv):
			return -1;
		case isCH(av) && !isCH(bv):
			return -1;
		case !isCH(av) && isCH(bv):
			return 1;
		default:
			break;
		}
		let temp = 0;
		if (av?.length !== bv?.length) {
			temp += av.length - bv.length;
		} else {
			temp += av?.localeCompare(bv) + ((av - bv) * 2 || 0);
		}
		return temp;
	}
	return arr.sort((a, b) => {
		let result = 0;
		if (keyArr) {
			keyArr.forEach((key) => {
				try {
					const av = a[key]?.toString().trim();
					const bv = b[key]?.toString().trim();
					result += computeResult(av, bv);
				} catch (e) {
					console.log(e);
				}
			});
		} else {
			const av = a?.toString().trim();
			const bv = b?.toString().trim();
			result += computeResult(av, bv);
		}
		return result * (big2Small ? -1 : 1);
	});
};

/**
 * 选择本地文件
 * @param {fileType} accept
 * @returns {File}
 */
export const selectLocalFile = (accept) => {
	return new Promise((resolve) => {
		const inputDom = document.createElement("input");
		accept && (inputDom.accept = accept);
		inputDom.type = "file";
		inputDom.onchange = (e) => {
			const file = e.target.files[0];
			e.target.value = null;
			resolve(file);
		};
		inputDom.click();
	});
};

/**
 * 选择本地文件并上传
 * @param {fileType} accept
 * @returns {{name:string,url:string}}
 */
export const selectAndUploadFile = async (accept) => {
	const file = await selectLocalFile(accept);
	return uploadFile(file);
};
// 下载文件
export const downloadFile = (
	blob,
	fileName,
	type = "application/vnd.ms-excel;charset=utf-8" // {fileType} @/constent/index.js
) => {
	let fileData;
	if (blob instanceof Blob) {
		fileData = blob;
	} else {
		fileData = new Blob([blob], { type });
	}
	const objectUrl = window.URL.createObjectURL(fileData);
	const a = document.createElement("a");
	a.download = fileName;
	a.href = objectUrl;
	a.click();
	a.remove();
	window.URL.revokeObjectURL(objectUrl);
};

// 前端静态文件地址
export const frontDocPath = (path) => `${import.meta.env.BASE_URL}${path}`;

/**
 * js浮点数精度
 * @param {number} num
 * @param {number} decimal //保留位数
 * @returns
 */
export const formatNumber = (num, decimal = 2) => {
	const type = typeCheck(num);
	switch (type) {
	case "[object Number]":
		return Math.round(num * Math.pow(10, decimal)) / Math.pow(10, decimal);
	default:
		return num ?? 0;
	}
};

/**
 * @Date: 2022-12-20 15:54:02
 * @description: 表格最下边得合计计算
 * @return {*}
 */
export const getSummaries = (param) => {
	const { columns, data } = param;
	const sums = [];
	columns.forEach((column, index) => {
		if (index === 0) {
			sums[index] = "合计";
			return;
		}
		const values = data?.map((item) => Number(item[column.property] || item[column] || 0));
		if (!values.every((value) => Number.isNaN(value))) {
			sums[index] = `${values.reduce((prev, curr) => {
				const value = Number(curr);
				if (!Number.isNaN(value)) {
					return formatNumber(prev + curr);
				} else {
					return prev;
				}
			}, 0)}`;
		} else {
			sums[index] = "";
		}
	});

	return sums;
};
/**
 * @description: 多行合计计算
 * @return {*}
 */
export const getMoreSummaries = (param) => {
	const { columns, data } = param;
	const sums = [];
	columns.forEach((column, index) => {
		if (index === 0) {
			sums[index] = "";
			return;
		}
		if (index === 1) {
			sums[index] = "合计";
			return;
		}
		const values = data.map((item) => Number(item[column.property] || 0));
		if (!values.every((value) => Number.isNaN(value))) {
			sums[index] = `${values.reduce((prev, curr) => {
				const value = Number(curr);
				if (!Number.isNaN(value)) {
					return formatNumber(prev + curr);
				} else {
					return prev;
				}
			}, 0)}`;
		} else {
			sums[index] = "";
		}
	});

	return sums;
};

// 合计
/**
 *
 * @param {数据} arr
 * @param {需要统计的key的数组} keys
 * @param {合计所在位置的key} summaryKey
 * @returns
 */
export const getSummaryDatas = (arr, keys, summaryKey) => {
	const sums = {
		[summaryKey]: "合计"
	};
	arr.forEach((item) => {
		keys.forEach((key) => {
			sums[key] = formatNumber((sums[key] || 0) + Number(item[key] || 0));
		});
	});
	return sums;
};
