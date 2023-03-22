<template>
	<div v-loading="loading" class="ve-table-content" :style="{ height }">
		<el-table ref="tableRef" class="flex-1" :class="{ 'hide-checkAll': hideDftCheckAll && !headSelect }" :data="data" @selection-change="handleSelectionChange" v-bind="{ ...$attrs, ...prop }">
			<el-table-column v-if="showSelect" type="selection" width="55" align="center">
				<template #header>
					<i></i>
				</template>
				<template #default="scope">
					<slot name="select" v-bind="scope">
						<el-checkbox
							:disabled="selectDisabled && selectDisabled(scope.row)"
							:model-value="transferCheckedStatus(scope.store, scope.row)"
							@change="scope.store.toggleRowSelection(scope.row)"
						></el-checkbox>
					</slot>
				</template>
			</el-table-column>
			<el-table-column v-if="showIndex" label="序号" type="index" align="center" width="70">
				<template #default="{ $index, row }">{{ indexFormat($index, row) }}</template>
			</el-table-column>
			<slot></slot>
			<template v-if="customEmpty" #empty>
				<div>
					<el-empty v-if="!loading" style="width: 100%; height: 100%" />
				</div>
			</template>
			<template #append>
				<slot name="append"> </slot>
				<div v-if="data?.length && showBatchDel" class="flex al-center p-y-8 m-b-8">
					<div v-if="showSelect" style="width: 55px" class="flex ju-center m-r-28">
						<el-checkbox :model-value="checkAll" :indeterminate="indeterminate" class="table-check-all" @change="handleCheckAll"></el-checkbox>
					</div>
					<slot name="batch-action" :selection="multipleSelection">
						<el-button :disabled="!multipleSelection?.length" plain type="danger" @click="handleBatchDel">批量删除</el-button>
					</slot>
				</div>
			</template>
		</el-table>
		<el-table v-if="summaryData?.length" :data="summaryData" :show-header="false">
			<el-table-column v-if="showSelect" width="55"></el-table-column>
			<el-table-column v-if="showIndex" width="60"></el-table-column>
			<slot name="summary-columns">
				<slot></slot>
			</slot>
			<template #empty>
				<i></i>
			</template>
		</el-table>
		<div v-show="data?.length" class="flex al-center">
			<div v-if="showSelect && !headSelect && ((hideDftCheckAll && !showBatchDel) || $slots.footer)" style="width: 55px" class="flex ju-center m-r-28 m-t-24">
				<el-checkbox :model-value="checkAll" :indeterminate="indeterminate" class="table-check-all" @change="handleCheckAll"></el-checkbox>
			</div>
			<div class="m-t-24">
				<slot name="footer" :selection="multipleSelection"></slot>
			</div>
			<el-pagination
				v-if="showP"
				class="table-pagination m-t-24"
				:currentPage="tableQuery?.pageIndex"
				:page-size="tableQuery?.pageSize"
				:page-sizes="[20, 30, 50, 100, 200]"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total ?? 0"
				@size-change="(v) => emit('handleSizeChange', v)"
				@current-change="(v) => emit('handleCurrentChange', v)"
			/>
		</div>
	</div>
</template>
<script setup>
import { ElTable, ElTableColumn, ElCheckbox, ElPagination, ElEmpty, ElButton } from "element-plus";
import { ref, watch } from "vue";

const props = defineProps({
	tableQuery: { type: Object, default: () => ({ pageIndex: 1, pageSize: 20 }) },
	data: Array,
	summaryData: Array,
	total: Number,
	prop: {
		type: Object,
		default: () => {}
	},
	height: { type: String || Number, default: "calc(100% - 500px)" },
	showIndex: { type: Boolean, default: false }, // 是否显示序号列
	showSelect: { type: Boolean, default: false }, // 是否显示checkbox
	selectDisabled: Function, // 行选项checkbox禁用条件
	headSelect: { type: Boolean, default: false },
	hideDftCheckAll: { type: Boolean, default: true },
	showP: {
		// 是否显示页码
		type: Boolean,
		default: true
	},
	showBatchDel: { type: Boolean, default: false }, // 是否显示批量删除
	loading: { type: Boolean, default: false },
	customEmpty: { type: Boolean, default: true } // 是否显示自定义空数据
});
const tableRef = ref();
const emit = defineEmits(["handleSizeChange", "handleCurrentChange", "handleBatchDel", "handleSeleted"]);
watch(
	() => [props.tableQuery],
	() => {
		tableRef.value?.setScrollTop(0);
	}
);

const multipleSelection = ref([]);

// 多选
function handleSelectionChange(val) {
	multipleSelection.value = val;
	indeterminate.value = val.length > 0 && val.length < props.data?.length;
	checkAll.value = props.data?.length > 0 && val.length === props.data?.length;
	emit("handleSeleted", multipleSelection.value);
}
// 批量删除
function handleBatchDel() {
	emit("handleBatchDel", multipleSelection.value);
}
// 序号格式化
function indexFormat(index, row) {
	if (row.rowIndex) {
		index = row.rowIndex;
	} else if (row.rowIndex === false) {
		return "";
	}
	const { pageIndex = 1, pageSize = 20 } = props.tableQuery;
	return index + 1 + (pageIndex - 1) * pageSize;
}

const indeterminate = ref(false);
const checkAll = ref(false);
function handleCheckAll() {
	tableRef.value.toggleAllSelection();
}

// 弄选中状态
function transferCheckedStatus(store, row) {
	const disabled = props.selectDisabled && props.selectDisabled(row);
	if (disabled && store?.isSelected(row)) {
		store.toggleRowSelection(row);
	}
	return store?.isSelected(row);
}
defineExpose({ handleCheckAll });
</script>
<style lang="scss">
.ve-table-content {
	height: 100%;
	display: flex;
	flex: 1;
	flex-direction: column;

	.hide-checkAll {
		thead {
			.el-table-column--selection {
				.el-checkbox {
					visibility: hidden;
				}
			}
		}
	}

	.table-check-all {
		position: relative;

		&::after {
			position: absolute;
			content: "全选";
			transform: translateX(calc(50% + 8px));
		}
	}

	.table-pagination {
		margin-left: auto;
	}

	.el-button {
		&.is-text {
			+ .el-button {
				margin-left: 0;
			}
		}
	}
}
</style>
