import { ExtractPropTypes } from "vue";
import type SelectV2 from "./select-v2.vue";

export const selectV2Props = {
  api: Function,
  searchKey: {
    // 检索键值
    type: String,
    default: "name",
  },
  formatSearchKey: Function, // 格式化搜索参数
  formatDataFc: Function, // 格式化数据的方法
  defaultParams: Object, // 默认参数
  modelValue: String || Array,
  allowCreate: Boolean,
  init: {
    // 是否初始化第一页数据
    type: Boolean,
    default: true,
  },
  defaultFirst: {
    // 是否默认选中第一项
    type: Boolean,
    default: false,
  },
  option: {
    // option   value【key】及label【label】 的键值
    type: Object,
    default: () => ({
      key: "id",
      label: "name",
    }),
  },
  insertList: {
    // 回显时，避免浪费接口资源，直接插入要回显的数据
    type: Array,
    default: () => [],
  },
} as const;

export type SelectV2Props = ExtractPropTypes<typeof selectV2Props>;
export type SelectV2Instance = InstanceType<typeof SelectV2>;
