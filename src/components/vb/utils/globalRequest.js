import axios from 'axios';
import { getLocalBearerTokenInfo } from './storage';
import globalMessage from './globalMessage.js';
import store from '@/store';

const { VITE_APP_BASE_API, VITE_APP_APPLICATION_ID } = import.meta.env;

const request = axios.create({
	//
	baseURL: VITE_APP_BASE_API, // url = base url + request url
	timeout: 5000, // 超时时间
	headers: { 'Content-Type': 'application/json;charset=utf-8' }
	//
});

request.interceptors.request.use((config) => {
	const { headers } = config;
	const { token = '', deviceId = '', appId } = getLocalBearerTokenInfo();

	headers.platform = 'web';
	headers.appId = appId ? appId : VITE_APP_APPLICATION_ID;
	headers.childAppId = VITE_APP_APPLICATION_ID;
	// 登录页不需要token
	if (!location.href.indexOf('/login') > -1 && token) {
		headers.token = token;
		headers.deviceId = deviceId;
	}
	return config;
});

request.interceptors.response.use((response) => {
	const { successMsg, errorMsg } = response.config;
	const { code, message } = response.data;
  
	switch (true) {
	case code === 0:
		apiOthenStatusMessage(errorMsg || message);
		return Promise.reject(response.data);
	case code === 3 || code === 7:
		api401StatusMessage();
		return Promise.reject(response.data);
	case code && code !== 1:
		apiOthenStatusMessage(errorMsg || message);
		return Promise.reject(response.data);
	default:
		break;
	}
	successMsg && globalMessage.success(successMsg);
	return response;
}, (error) => {
	apiStatusMessage(error);
	// 接口 status != 200 的时候
	return Promise.reject(error);
});

window.globalRequest =  (urlConfig, payload, config) => {
	//
	const { url = '', method = '', successMsg, errorMsg } = urlConfig;
	if (method === 'get' || method === 'delete') {
		return  request({ url, params: payload, ...config, successMsg, errorMsg });
	}
	//
	return  request({ url, method, data: payload, ...config, successMsg, errorMsg });
};

/**
 * @return {*}
 * @Date: 2022-07-27 14:07:33
 * @description:接口401提示方法
 */
const api401StatusMessage = () => {
	globalMessage.messageBox('系统提示', '登录状态已过期，您可以继续留在该页面，或者重新登录', 'warning', false, false).then(() => {
		// 退出
		store.dispatch("user/logout");
	});
};
/**
 * @Date: 2022-07-27 14:09:54
 * @param {*} message
 * @description:接口其他状态的提示方法
 * @return {*}
 */
const apiOthenStatusMessage = (message) => {
	globalMessage.error(message);
};


const apiStatusMessage = (error) => {
	let { message } = error;
	//
	if (message === 'Network Error') {
		message = '后端接口连接异常！';
	} else if (message.includes('timeout')) {
		message = '系统接口请求超时！';
	} else if (message.includes('Request failed with status code')) {
		message = `系统接口${message.substr(message.length - 3)}异常！`;
	}
	globalMessage.error(message);
};
