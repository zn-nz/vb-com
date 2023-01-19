// 设置导航
export const setTabs = (data, value) => {
	if (value) {
		data.forEach((item) => (item.active = item.id === value));
	}
	sessionStorage.setItem('TABS_LIST', JSON.stringify(data));
};

// 获取导航
export const getTabs = () => {
	let result = sessionStorage.getItem('TABS_LIST');
	result = result ? JSON.parse(result) : [];
	return result;
};

// 设置主题
export const setThemes = (data) => {
	localStorage.setItem('THEMES', JSON.stringify(data));
};

// 获取主题
export const getThemes = () => {
	let result = localStorage.getItem('THEMES');
	result = result
		? JSON.parse(result)
		: {
			showBreadcrumb: true,
			showTabs: true
		};
	return result;
};

// 设置面包屑
export const setBreadcrumb = (data) => {
	data = data || [];
	data = data.reverse();
	sessionStorage.setItem('BREADCRUMB', JSON.stringify(data));
};


// 获取面包屑
export const getBreadcrumb = () => {
	let result = sessionStorage.getItem('BREADCRUMB');
	result = result ? JSON.parse(result) : [];
	return result;
};



/**
 * @Date: 2022-07-27 15:22:42
 * @param {*} token
 * @description:保存token信息
 * @return {*}
 */
export const setLocalBearerTokenInfo = (tokenInfo = {}) => {
	window.sessionStorage.setItem('tokenInfo', JSON.stringify(tokenInfo));
};

/**
 * @Date: 2022-07-28 10:06:43
 * @description: 获取token信息
 * @return {*}
 */
export const getLocalBearerTokenInfo = () => {
	return JSON.parse(window.sessionStorage.getItem('tokenInfo') || '{}');
};

/**
 * @Date: 2022-07-27 15:22:49
 * @description: 获取token
 * @return {*}
 */
export const getLocalBearerToken = () => {
	const tokenInfo = getLocalBearerTokenInfo();
	return tokenInfo.token;
};

/**
 * @Date: 2022-07-28 11:32:19
 * @description: 清除token信息
 * @return {*}
 */
export const clearBearerTokenInfo = () => {
	window.sessionStorage.clear();
};

/**
 * @Date: 2022-11-30 16:18:43
 * @param {*} resourceInfo
 * @description:设置当前资源的信息
 * @return {*}
 */
export const setLocalResourceInfo = (resourceInfo) => {
	window.sessionStorage.setItem("resourceInfo", JSON.stringify(resourceInfo));
};

/**
 * @Date: 2022-11-30 16:18:43
 * @param {*} resourceInfo
 * @description:获取当前资源的信息
 * @return {*}
 */
export const getLocalResourceInfo = () => {
	return JSON.parse(window.sessionStorage.getItem('resourceInfo') || '{}');
};

const _communityInfoKey = "communityInfo";
export const setLocalCommunityInfo = (data) => {
	sessionStorage.setItem(_communityInfoKey, JSON.stringify(data));
};
export const getLocalCommunityInfo = () => {
	const data = sessionStorage.getItem(_communityInfoKey);
	try {
		return JSON.parse(data);
	} catch (error) {
		return {};
		
	}
};