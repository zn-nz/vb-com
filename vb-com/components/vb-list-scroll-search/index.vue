<template>
	<div class="list-scroll-search">
		<el-input :placeholder="placeholder" v-model="keyword" clearable @clear="handleSearch" @keyup.enter="handleSearch">
			<template #suffix>
				<el-icon class="pointer" @click="handleSearch">
					<Search />
				</el-icon>
			</template>
		</el-input>
		<ul v-if="mounted" v-infinite-scroll="loadMore" class="list">
			<li v-for="(item, index) in listData" :key="index" :class="{ active: modelValue === item[option.key] }" @click="handleCheck(index)">{{ item[option.label] }}</li>
		</ul>
		<el-icon v-if="loading" :class="{ 'is-loading': loading && !noMore }">
			<Loading />
		</el-icon>
		<el-empty v-show="!loading && !listData.length" style="width: 100%" />
	</div>
</template>
<!-- eslint-disable no-unused-vars vue/no-setup-props-destructure-->
<script setup>
import { onMounted, ref, watch } from "vue";
import { Search, Loading } from "@element-plus/icons-vue";

const props = defineProps({
	api: Promise,
	searchKey: String,
	placeholder: String,
	formatDataFc: Function,
	defaultParams: Object,
	modelValue: String,
	label: String,
	defaultFirst: {
		type: Boolean,
		default: false
	},
	option: {
		type: Object,
		default: () => ({
			key: "id",
			label: "label"
		})
	}
});
const emit = defineEmits(["update:modelValue", "change", "update:label"]);
const listData = ref([]);
const listQuery = ref({ pageIndex: 1, pageSize: 20 });
const keyword = ref();
let noMore = false;
const loading = ref(false);
const mounted = ref(false);
onMounted(() => {
	mounted.value = true;
	getListData();
});
watch(
	() => JSON.stringify(props.defaultParams),
	() => {
		reset();
	}
);
function reset() {
	listData.value = [];
	keyword.value = undefined;
	listQuery.value.pageIndex = 1;
	getListData();
}
async function getListData() {
	const { option, api, searchKey, formatDataFc } = props;
	loading.value = true;
	const query = {
		...props.defaultParams,
		...listQuery.value,
		[searchKey]: keyword.value
	};
	const { data: res } = await api(query);
	loading.value = false;
	const { ok, data } = res ?? {};
	if (ok && data?.length) {
		let temp = data.filter((i) => listData.value.every((j) => j[option.key] !== i[option.key]));
		formatDataFc && (temp = formatDataFc(temp));
		listData.value.push(...temp);
		if (props.modelValue) {
			const find = listData.value.find((item) => item[props.option.key] === props.modelValue);
			if (!find) {
				loadMore();
			}
		} else if (!props.modelValue && props.defaultFirst) {
			handleCheck(0);
		}
		if (data?.length < listQuery.value.pageSize) {
			noMore = true;
		}
	} else {
		noMore = true;
	}
	if (!listData.value.length) {
		handleCheck(-1);
	}
}
function loadMore() {
	if (!noMore && !loading.value) {
		listQuery.value.pageIndex++;
		getListData();
	}
}
function handleSearch() {
	listQuery.value.pageIndex = 1;
	listData.value = [];
	getListData();
}
function handleCheck(index) {
	let value, label;
	if (index !== -1) {
		value = listData.value[index][option.key];
		label = listData.value[index][option.label];
	}
	emit("update:modelValue", value);
	emit("update:label", label);
	emit("change", value);
}
defineExpose({
	handleSearch
});
</script>
<style lang="scss" scoped>
.list-scroll-search {
	width: 220px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	padding: 14px;

	.list {
		width: 100%;
		max-height: calc(100% - 42px);
		min-height: 200px;
		margin-top: 10px;
		overflow: auto;

		li {
			cursor: pointer;
			padding: 10px 20px;

			&.active {
				background-color: var(--el-color-primary);
				color: #fff;
			}
		}
	}
}
</style>
