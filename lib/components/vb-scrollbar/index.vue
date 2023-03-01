<template>
	<ElScrollbar z-width="100%" class="p-r-8" ref="scrollbarRef" @scroll="handleScroll">
		<slot></slot>
	</ElScrollbar>
</template>
<script setup>
import { ElScrollbar } from "element-plus";
import { throttle } from "lodash";
import { nextTick, ref, computed, onMounted } from "vue";

const emit = defineEmits(["loadMore"]);
const el = computed(() => scrollbarRef.value.wrapRef);
const scrollbarRef = ref();
let scrollTopLast, observer;
onMounted(async () => {
	await nextTick();
	observer = new MutationObserver(throttle(checkFull, 50));
	observer.observe(el.value, { childList: true, subtree: true });
	checkFull();
});
function checkFull() {
	const { clientHeight, scrollHeight } = el.value;
	if (clientHeight === 0) return;
	if (scrollHeight <= clientHeight) {
		emit("loadMore");
	} else {
		destroyObserver();
	}
}
function destroyObserver() {
	observer.disconnect();
	observer = null;
}
function handleScroll() {
	const { scrollTop, clientHeight, offsetTop, clientTop, scrollHeight } = el.value;
	if (observer || scrollTop - scrollTopLast < 0) return;
	if (scrollTop + clientHeight >= offsetTop + clientTop + scrollHeight - 20) {
		emit("loadMore");
	}
}
</script>
