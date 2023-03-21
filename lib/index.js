import VeTable from "./components/Ve-table/index.vue";
import VeInputNumber from "./components/Ve-input-number/index.vue";
import VeListScrollSearch from "./components/Ve-list-scroll-search/index.vue";
import VeScrollSelect from "./components/Ve-scroll-select/index.v2.vue";
import "../src/assets/styles/index.scss";

const coms = { VeTable, VeInputNumber, VeListScrollSearch, VeScrollSelect };
export * from "../src/tools/index";
export * from "../src/mixins/index";
export default {
	VeTable,
	VeListScrollSearch,
	VeScrollSelect,
	install(Vue) {
		for (const name in coms) {
			Vue.component(name, coms[name]);
		}
	}
};
