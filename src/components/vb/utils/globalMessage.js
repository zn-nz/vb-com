//
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';
import 'element-plus/es/components/notification/style/css';
//
export default {
	// 消息 成功
	success(text = '操作成功') {
		ElMessage({ message: text, type: 'success', duration: 3 * 1000 });
	},
	// 警告
	warning(text = '系统警告') {
		ElMessage({ message: text, type: 'warning', duration: 3 * 1000 });
	},
	// 信息
	info(text = '系统提示') {
		ElMessage({ message: text, type: 'info', duration: 3 * 1000 });
	},
	// 错误
	error(text = '系统错误') {
		ElMessage({ message: text, type: 'error', duration: 3 * 1000 });
	},
	// 提示框
	messageBox(title = '系统提示', message = '确定要执行此操作吗？', type = 'warning', showClose = true, showCancelButton = true) {
		return new Promise((resolve, reject) => {
			ElMessageBox.confirm(message, title, {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type,
				showClose,
				showCancelButton
			}).then(() => {
				resolve();
			}).catch(() => {
				reject();
			});
		});
	},
	// 通知 成功
	noticeSuccess(title = '系统提示', message = '操作成功') {
		ElNotification({
			title,
			message,
			type: 'success',
			duration: 3 * 1000
		});
	},
	// 警告
	noticeWarning(title = '系统提示', message = '操作失败') {
		ElNotification({
			title,
			message,
			type: 'warning',
			duration: 3 * 1000
		});
	},
	// 信息
	noticeInfo(title = '系统提示', message = '系统提示') {
		ElNotification({
			title,
			message,
			type: 'info',
			duration: 3 * 1000
		});
	},
	// 错误
	noticeError(title = '系统提示', message = '操作失败') {
		ElNotification({
			title,
			message,
			type: 'error',
			duration: 3 * 1000
		});
	}
	//
};
//
