<template>
  <div>
    ve-select
  </div>
</template>

<script lang="ts" setup name="VeSelect">
import { defineProps } from 'vue'
import { selectProps } from './select'

defineProps(selectProps)
</script>

<style scoped lang="scss">
.ve-select {
}
</style>
