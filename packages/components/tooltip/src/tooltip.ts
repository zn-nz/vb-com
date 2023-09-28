import { ExtractPropTypes } from "vue";

export const tooltipProps = {
  content: { type: String, default: "" },
} as const;

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
