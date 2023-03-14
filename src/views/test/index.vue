<template>
	<div class="zn-content">
		<div class="filter-container">
			<vb-scroll-select class="filter-item" :remove="false" :remote-method="undefined" />
			<el-button class="filter-item" type="primary">查询</el-button>
		</div>
		<div class="handle-container">
			<el-button class="m-l-auto" type="primary">导出</el-button>
		</div>
		<vb-table
			:data="tableData"
			:total="total"
			:tableQuery="tableQuery"
			:loading="tableLoading"
			showIndex
			showSelect
			@handleSizeChange="handleSizeChange"
			@handleCurrentChange="handleCurrentChange"
			@handleBatchDel="(data) => handleDelete(data, handleBatchDel)"
		>
			<el-table-column label="操作"></el-table-column>
		</vb-table>
	</div>
</template>
<script setup>
import { tableMixin } from "../../../vb-com/vb-com";
</script>
<script>
export default {
	mixins: [tableMixin]
};
</script>
