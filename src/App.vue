<template>
	<el-config-provider :locale="zhCn">
		<vb-button />
		<vb-table showIndex :data="value">
			<el-table-column label="i" prop="i"></el-table-column>
		</vb-table>
		<vb-scroll-select />
	</el-config-provider>
</template>
<script setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { ref } from "vue";
const value = ref([{ i: "i" }]);
</script>
