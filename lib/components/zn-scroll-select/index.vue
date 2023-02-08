<template>
	<el-select :model-value="value" :popper-class="popperClass" @visible-change="visibleChange">
		<slot></slot>
	</el-select>
</template>
<script setup>
const props = defineProps({
	loading: Boolean,
	value: String || Object,
	diffBottom: {
		type: Number,
		default: 20
	}
});
const emit = defineEmits(["loadMore", "visible-change"]);
const popperClass = `cl-${Date.now()}-${Math.random().toString().replace(".", "")}`;
let dom, scrollTopLast;
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
		dom = document.querySelector(`.${popperClass} .el-scrollbar__wrap`);
		dom?.scrollTo({ top: 0 });
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
