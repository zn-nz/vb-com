<template>
	<el-select :model-value="value" :popper-class="popperClass" @focus="initScroll">
		<slot></slot>
	</el-select>
</template>
<script setup>
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
	loading: Boolean,
	value: String || Object,
	diffBottom: {
		type: Number,
		default: 20
	}
});
const emit = defineEmits(["loadMore"]);
const popperClass = `cl-${Date.now()}-${Math.random().toString().replace('.', '')}`;
let dom;
onMounted(() => {
	initScroll();
});
onUnmounted(() => {
	dom?.removeEventListener("scroll", scrollEvent);
});
function initScroll() {
	setTimeout(() => {
		dom = document.querySelector(`.${popperClass} .el-scrollbar__wrap`);
		dom?.addEventListener("scroll", scrollEvent);
	}, 0);
}
// eslint-disable-next-line object-curly-spacing
function scrollEvent({ target: { offsetHeight, scrollHeight, scrollTop } }) {
	if (offsetHeight + scrollTop > scrollHeight - props.diffBottom && !props.loading) {
		emit("loadMore");
	}
}
</script>
