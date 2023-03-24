import Select from "./src/select.vue";
import { withInstall } from "@ve-com/utils";

export const VeSelect = withInstall(Select);
export default VeSelect;
export type VeSelectInstance = InstanceType<typeof Select>;
