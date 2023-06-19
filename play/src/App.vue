<template>
  <el-config-provider :locale="zhCn">
    <ve-select></ve-select>
    <ve-table></ve-table>
  </el-config-provider>
</template>
<script setup>
import { VeTable, VeSelect } from "ve-com";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
</script>
