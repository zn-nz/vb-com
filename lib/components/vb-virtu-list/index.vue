<template>
	<div id="virtual-list" class="virtual-list" @scroll="longListScroll">
		<div :style="{ height: trueHeight + 'px' }">
			<div :style="{ transform: `translateY(${firstIndex * itemHeight}px)` }">
				<slot :data="dataArray.slice(firstIndex, firstIndex + showNumber)"></slot>
			</div>
		</div>
	</div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
	dataArray: {
		type: Array,
		default: () => []
	},
	itemHeight: {
		type: Number,
		default: () => 0
	},
	wrapEl: {
		type: String,
		default: "div"
	}
});
const trueHeight = computed(() => props.itemHeight * props.dataArray.length);

const firstIndex = ref(0);
const showNumber = ref(20);
onMounted(init);
function init() {
	const scrollDom = document.querySelector("#virtual-list");
	const { clientHeight } = scrollDom;
	showNumber.value = Math.ceil(clientHeight / this.itemHeight) + 4;
}
function longListScroll(e) {
	const { scrollTop } = e.target;
	firstIndex.value = Math.floor(scrollTop / this.itemHeight);
}
</script>

<style lang="scss" scoped>
.virtual-list {
	height: 100%;
	overflow: auto;
}
</style>
