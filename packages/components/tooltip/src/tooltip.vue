<template>
  <div
    v-if="!isShow"
    class="text-ellipsis-1"
    v-bind="$attrs"
    @mouseenter="isShowToltip"
    @mouseout="hideTip"
  >
    <slot></slot>
  </div>
  <el-tooltip v-else effect="dark" :content="content" placement="top">
    <div class="text-ellipsis-1" v-bind="$attrs">
      <slot></slot>
    </div>
  </el-tooltip>
</template>

<script lang="ts" setup name="VeTooltip">
import { defineProps, ref } from 'vue'
import { tooltipProps } from './tooltip'

defineProps(tooltipProps)
const isShow = ref(false)
function isShowToltip (e) {
  const bool = textRange(e.target)
  isShow.value = bool
}
function hideTip () {
  isShow.value = false
}
const textRange = (el) => {
  const textContent = el
  const targetW = textContent.getBoundingClientRect().width
  const range = document.createRange()
  range.setStart(textContent, 0)
  range.setEnd(textContent, textContent.childNodes.length)
  const rangeWidth = range.getBoundingClientRect().width
  return rangeWidth > targetW
}

</script>
