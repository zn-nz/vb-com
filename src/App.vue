<template>
	<el-config-provider :locale="zhCn">
		<test />
	</el-config-provider>
</template>
<script setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { provide } from "vue";
import logger from "../src/tools/logger.js";
import Test from "./views/test/index.vue";

provide("locale", zhCn);
function initEES() {
	const source = new EventSource("/ees");
	source.onopen = (data) => {
		logger("%cSSE连接成功%chttp://localhost:3000!");
	};
	source.onmessage = (event) => {
		logger("%c收到消息", JSON.parse(event.data));
	};
	source.onerror = (err) => {
		logger("%c%c断开链接");
	};
	// 监听指定类型的事件（可以监听多个）
	source.addEventListener("test", (event) => {
		logger("%c收到消息", JSON.parse(event.data));
	});
}
initEES();
</script>
