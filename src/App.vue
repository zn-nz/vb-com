<template>
	<el-config-provider :locale="zhCn">
		<vb-button type="primary">按钮</vb-button>
		<vb-table showIndex :data="[]">
			<el-table-column label="i" prop="i"></el-table-column>
		</vb-table>
		<vb-scroll-select />
		<el-table :data="[]"></el-table>
	</el-config-provider>
</template>
<script setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn";

function initEES() {
	const source = new EventSource("/ees");
	source.onopen = (data) => {
		console.log("%cSSE连接成功%chttp://localhost:3000!", "background:black;padding:4px 10px;color:#eace6c","background:#fadfa3;padding:4px 10px;color:#333")
	};
	source.onmessage = (data) => {
		console.log(data);
	};
	source.onerror = (err) => {
		console.log(err);
	}; // 监听指定类型的事件（可以监听多个）
	source.addEventListener("test", function (event) {
		console.log("test", JSON.parse(event.data));
	});
}
initEES();
</script>
