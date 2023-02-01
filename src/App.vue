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
import { ref } from "vue";
const value = ref([{ i: "i" }]);
</script>
