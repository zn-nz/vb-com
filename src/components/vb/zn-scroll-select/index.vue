<template>
	<el-select :model-value="value" popper-class="scroll-select">
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
let dom;
onMounted(() => {
	initScroll();
});
onUnmounted(() => {
	dom.removeEventListener("scroll", scrollEvent);
});
function initScroll() {
	dom = document.querySelector(".scroll-select .el-scrollbar__wrap");
	dom.addEventListener("scroll", scrollEvent);
}
// eslint-disable-next-line object-curly-spacing
function scrollEvent({ target: { offsetHeight, scrollHeight, scrollTop } }) {
	if (
		offsetHeight + scrollTop > scrollHeight - props.diffBottom &&
		!props.loading
	) {
		emit("loadMore");
	}
}
</script>
