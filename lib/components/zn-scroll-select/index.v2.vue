<template>
	<scroll-select
		:loading="loading"
		:model-value="value"
		loading-text="加载中..."
		no-match-text="未查询到数据"
		no-data-text="未查询到数据"
		clearable
		filterable
		fit-input-width
		remote
		reserve-keyword
		remote-show-suffix
		:remote-method="handleSearch"
		@loadMore="loadMore"
		@clear="initData"
		@change="handleChange"
		:value-key="option.key"
	>
		<el-option v-for="item in listData" :key="item[option.key]" :label="item[option.label]" :value="item" />
	</scroll-select>
</template>
<!-- eslint-disable no-unused-vars vue/no-setup-props-destructure-->
<script setup>
import ScrollSelect from "./index.vue";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
	api: Object,
	searchKey: { type: String, default: "name" }, // 检索键值
	formatDataFc: Function, // 格式化数据的方法
	defaultParams: {
		type: Object,
		default: () => ({})
	}, // 默认参数
	modelValue: [String, Array],
	init: {
		// 是否初始化第一页数据
		type: Boolean,
		default: true
	},
	defaultFirst: {
		// 是否默认选中第一项
		type: Boolean,
		default: false
	},
	option: {
		// option   value【key】及label【label】 的键值
		type: Object,
		default: () => ({
			key: "id",
			label: "name"
		})
	}
});
const value = computed(() => {
	if (isArray(props.modelValue)) {
		return listData.value.filter((item) => props.modelValue.includes(item[props.option.key]));
	} else {
		const find = listData.value.find((item) => {
			return item[props.option.key] === props.modelValue;
		});
		return find;
	}
});
const emit = defineEmits([
	"update:modelValue", // 只给选中项的value值
	"change",
	"update:data" // 给选中项的全部json对象
]);
const listData = ref([]);
let cacheListData = [];
const listQuery = ref({ pageIndex: 1, pageSize: 20 });
const keyword = ref();
let noMore = false;
const loading = ref(false);
onMounted(() => {
	props.init && getListData();
});
watch(
	() => JSON.stringify(props.defaultParams),
	(val) => {
		reset();
	}
);
function reset() {
	listData.value = [];
	cacheListData = [];
	listQuery.value.pageIndex = 1;
	getListData();
}
async function getListData() {
	if (!props.api) {
		throw "scroll-select-v2 组件 未定义api";
	}
	loading.value = true;
	const query = {
		...props.defaultParams,
		...listQuery.value,
		[props.searchKey]: keyword.value
	};
	const { data: res } = await globalRequest(props.api, query);
	loading.value = false;
	const { ok, data } = res ?? {};
	if (ok) {
		let temp = data?.filter((i) => listData.value.every((j) => j[props.option.key] !== i[props.option.key])) || [];
		props.formatDataFc && (temp = props.formatDataFc(temp));
		if (data?.length < listQuery.value.pageSize) {
			noMore = true;
		}
		if (keyword.value) {
			listData.value = temp;
		} else {
			cacheListData.push(...temp);
			initData();
			if (props.modelValue) {
				const find = cacheListData.find((item) => item[props.option.key] === props.modelValue);
				if (find) {
					handleChange(find);
				} else {
					loadMore();
				}
			}
			if (!props.modelValue && props.defaultFirst) {
				handleChange(listData.value[0]);
			}
		}
	} else {
		noMore = true;
	}
	if (!listData.value.length) {
		handleChange(undefined);
	}
}
function loadMore() {
	if (!noMore && !loading.value) {
		listQuery.value.pageIndex++;
		getListData();
	}
}
function handleSearch(value) {
	keyword.value = value;
	if (value) {
		listQuery.value.pageIndex = 1;
		listData.value = [];
		getListData();
	} else {
		initData();
	}
}

function initData() {
	listData.value = [...cacheListData];
}
function handleChange(item = {}) {
	let val = item?.[props.option.key];
	if (isArray(item)) {
		val = item.map((_i) => _i[props.option.key]);
	}
	emit("update:modelValue", val);
	emit("change", val, item);
	emit("update:data", item);
}
function isArray(obj) {
	return Object.prototype.toString.call(obj) === "[object Array]";
}
</script>
<script>
export default {
	name: "VbScrollSelect"
};
</script>
