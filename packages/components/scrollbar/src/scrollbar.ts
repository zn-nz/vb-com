import { ExtractPropTypes } from "vue";

export const scrollbarProps = {
  loading: Boolean,
  diffBottom: {
    type: Number,
    default: 20,
  },
} as const;

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>;
