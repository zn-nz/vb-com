<template>
	<scroll-select
		:loading="loading"
		:model-value="currentValue"
		loading-text="加载中..."
		no-match-text="未查询到数据"
		no-data-text="未查询到数据"
		clearable
		filterable
		fit-input-width
		remote
		reserve-keyword
		remote-show-suffix
		:allowCreate="allowCreate"
		@remote-method="handleSearch"
		@loadMore="loadMore"
		@clear="handleClear"
		@visible-change="visibleChange"
		@change="handleChange"
		:value-key="option.key"
	>
		<el-option
			v-for="item in listData"
			:key="item[option.key]"
			:label="
				option.label
					.split(',')
					.map((key) => item[key])
					.join('-')
			"
			:value="item"
		/>
	</scroll-select>
</template>
<!-- eslint-disable no-unused-vars vue/no-setup-props-destructure-->
<script setup>
import ScrollSelect from "./index.vue";
import { onMounted, ref, watch } from "vue";

const props = defineProps({
	api: Promise,
	searchKey: {
		// 检索键值
		type: String,
		default: "name"
	},
	formatSearchKey: Function, // 格式化搜索参数
	formatDataFc: Function, // 格式化数据的方法
	defaultParams: Object, // 默认参数
	modelValue: [String, Array],
	allowCreate: Boolean,
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
	},
	insertList: {
		// 回显时，避免浪费接口资源，直接插入要回显的数据
		type: Array,
		default: () => []
	}
});
const currentValue = ref(null);
function setCurrentValue(v) {
	if (isArray(props.modelValue)) {
		currentValue.value = listData.value.filter((item) => props.modelValue.includes(item[props.option.key]));
	} else if (props.modelValue) {
		const find = listData.value.find((item) => {
			return item[props.option.key] === v;
		});
		if (!find && props.allowCreate) {
			currentValue.value = props.modelValue;
		} else {
			currentValue.value = find;
		}
	} else {
		currentValue.value = null;
	}
	if (v !== props.modelValue) {
		emit("change", currentValue.value);
	}
}
const emit = defineEmits([
	"update:modelValue", // 只给选中项的value值
	"change",
	"update:data", // 给选中项的全部json对象
	"visibleChange",
	"clear"
]);
const listData = ref([]);
let cacheListData = [],
	cacheSearchList = [],
	cacheNoMore = false;
const listQuery = ref({ pageIndex: 1, pageSize: 20 });
const keyword = ref();
let noMore = false;
const loading = ref(false);
onMounted(() => {
	props.init && getListData();
});
watch(
	() => JSON.stringify(props.defaultParams),
	() => {
		reset();
	}
);
watch(
	() => props.insertList,
	() => {
		initData();
	}
);
watch(() => props.modelValue, setCurrentValue);
function reset() {
	listData.value = [];
	cacheListData = [];
	keyword.value = undefined;
	listQuery.value.pageIndex = 1;
	getListData();
}
async function getListData() {
	const { option, api, searchKey, formatSearchKey, formatDataFc, allowCreate } = props;
	if (!props.api) {
		throw "scroll-select-v2 组件 未定义api";
	}
	loading.value = true;
	let query = {
		...props.defaultParams,
		...listQuery.value,
		[searchKey]: keyword.value
	};
	if (formatSearchKey) {
		query = { ...query, ...formatSearchKey(keyword.value) };
	}
	const { data: res } = await api(query);
	loading.value = false;
	const { ok, data } = res ?? {};
	if (ok) {
		let temp = data?.filter((i) => !listData.value.find((j) => j[option.key] === i[option.key])) || [];
		formatDataFc && (temp = formatDataFc(temp));
		if (keyword.value) {
			noMore = ~~data?.length < listQuery.value.pageSize;
			cacheSearchList.push(...temp);
			listData.value = [...cacheSearchList];
		} else {
			temp?.length && cacheListData.push(...temp);
			initData();
			cacheNoMore = noMore = ~~data?.length < listQuery.value.pageSize;
			if (props.modelValue) {
				if (isArray(props.modelValue)) {
					const _value = listData.value.filter((item) => props.modelValue.includes(item[props.option.key]));
					if (_value.length < props.modelValue.length) {
						loadMore();
					}
					handleChange(_value);
				} else {
					const find = listData.value.find((item) => item[option.key] === props.modelValue);
					if (find) {
						handleChange(find);
					} else {
						loadMore();
					}
				}
			}
			if (!props.modelValue && props.defaultFirst) {
				handleChange(listData.value[0]);
			}
		}
	} else {
		noMore = true;
	}
}
function loadMore() {
	if (!noMore && !loading.value) {
		listQuery.value.pageIndex++;
		getListData();
	}
}
function handleSearch(value) {
	if (value) {
		cacheSearchList = [];
		keyword.value = value;
		listQuery.value.pageIndex = 1;
		listData.value = [];
		getListData();
	} else {
		visibleChange(false);
	}
}
function visibleChange(show) {
	if (!props.modelValue) {
		if (show) {
			initData();
			noMore = cacheNoMore;
		} else {
			keyword.value = undefined;
		}
	}
	if (!show) {
		keyword.value = undefined;
		cacheListData.push(...(cacheSearchList?.filter((i) => !cacheListData.find((j) => j[option.key] === i[option.key])) || []));
		initData();
		noMore = cacheNoMore;
	}
	emit("visibleChange", show);
}
function handleClear() {
	emit("clear");
	keyword.value = undefined;
	listQuery.value.pageIndex = 1;
	initData();
	noMore = cacheNoMore;
}
function initData() {
	const temp = cacheListData?.filter((i) => !props.insertList.find((j) => j[option.key] === i[option.key])) || [];
	listData.value = [...props.insertList, ...temp];
}
function handleChange(item) {
	let val = item?.[props.option.key];
	if (isArray(item)) {
		val = item.map((_i) => _i[props.option.key]);
	}
	currentValue.value = item;
	emit("update:modelValue", val);
	emit("update:data", item);
	if (val !== props.modelValue) {
		emit("change", item);
	}
}
function isArray(obj) {
	return Object.prototype.toString.call(obj) === "[object Array]";
}
defineExpose({ reset, initData });
</script>
