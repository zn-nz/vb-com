<template>
	<el-select ref="selectRef" :remote-method="handleSearch" @visible-change="visibleChange">
		<slot></slot>
	</el-select>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
	loading: Boolean,
	diffBottom: {
		type: Number,
		default: 20
	}
});
const emit = defineEmits(["loadMore", "visible-change", "remote-method"]);
const selectRef = ref();
let dom, scrollTopLast, cacheKeyword;
function handleSearch(value) {
	if (!value || cacheKeyword !== value) {
		scrollTopLast = undefined;
		dom?.scrollTo({ top: 0 });
	}
	cacheKeyword = value;
	emit("remote-method", value);
}
function visibleChange(visible) {
	emit("visible-change", visible);
	if (visible) {
		initScroll();
	} else {
		dom?.removeEventListener("scroll", scrollEvent);
	}
}
function initScroll() {
	setTimeout(() => {
		dom = selectRef.value.scrollbar.wrapRef;
		const selectedDom = dom.querySelector(".selected");
		let top = 0;
		if (selectedDom) {
			top = selectedDom.offsetTop - (dom.offsetHeight - 34);
		}
		dom?.scrollTo({ top });
		scrollTopLast = undefined;
		dom?.addEventListener("scroll", scrollEvent);
	}, 0);
}
// eslint-disable-next-line object-curly-spacing
function scrollEvent({ target: { offsetHeight, scrollHeight, scrollTop } }) {
	if (offsetHeight + scrollTop > scrollHeight - props.diffBottom && !props.loading && (scrollTopLast === undefined || (scrollTopLast && scrollTopLast < scrollTop))) {
		scrollTopLast = scrollTop;
		emit("loadMore");
	}
}
</script>
