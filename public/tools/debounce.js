// 防抖
const debounce = (func, delayed = 1000) => {
	let timer = null;
	return function () {
		if (timer) clearTimeout(timer);
		timer = setTimeout(func.bind(this, ...arguments), delayed);
	};
};
export default debounce;
