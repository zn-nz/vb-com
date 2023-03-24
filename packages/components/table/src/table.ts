import type { ExtractPropTypes } from "vue";
import type Table from "./table.vue";

export const tableProps = {
  tableQuery: { type: Object, default: () => ({ pageIndex: 1, pageSize: 20 }) },
  data: Array,
  summaryData: Array,
  total: Number,
  height: { type: String || Number, default: "calc(100% - 500px)" },
  showIndex: { type: Boolean, default: false }, // 是否显示序号列
  showSelect: { type: Boolean, default: false }, // 是否显示checkbox
  selectDisabled: Function, // 行选项checkbox禁用条件
  headSelect: { type: Boolean, default: false },
  hideDftCheckAll: { type: Boolean, default: true },
  showP: {
    // 是否显示页码
    type: Boolean,
    default: true,
  },
  showBatchDel: { type: Boolean, default: false }, // 是否显示批量删除
  loading: { type: Boolean, default: false },
  customEmpty: { type: Boolean, default: true }, // 是否显示自定义空数据
} as const;
export type TableProps = ExtractPropTypes<typeof tableProps>;

export type TableInstance = InstanceType<typeof Table>;
