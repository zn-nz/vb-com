<template>
	<el-input-number v-model="value" class="el-input-number" :controls="false" @blur="handleBlur"></el-input-number>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "change", "blur"]);
const value = computed({
	get() {
		return props.modelValue;
	},
	set(v) {
		if (props.modelValue !== v) {
			emit("update:modelValue", v);
			emit("change", v);
		}
	}
});
// eslint-disable-next-line object-curly-spacing
function handleBlur({ target: { value: v } }) {
	const newVal = Number(v);
	value.value = newVal;
	emit("blur", newVal);
}
</script>
<style lang="scss">
.el-input-number {
	&.is-without-controls {
		width: 100%;
		.el-input__wrapper {
			padding-left: 11px;
		}
		.el-input__inner {
			text-align: start;
		}
	}
}
</style>
