import chineseToNumber from "./chinese-number.js";
import { REGCHINESENUM } from "./regs.js";
import { isCH } from "./validate.js";

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
			temp += av?.length - bv?.length || 0;
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

/**
 * 合计
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
