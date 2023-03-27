import { ExtractPropTypes } from "vue";

export const selectProps = {
  loading: Boolean,
  diffBottom: {
    type: Number,
    default: 20,
  },
} as const;

export type SelectProps = ExtractPropTypes<typeof selectProps>;
