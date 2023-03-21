import VbTable from "./components/vb-table/index.vue";
import VbInputNumber from "./components/vb-input-number/index.vue";
import VbListScrollSearch from "./components/vb-list-scroll-search/index.vue";
import VbScrollSelect from "./components/vb-scroll-select/index.v2.vue";
import "../src/assets/styles/index.scss";

const coms = { VbTable, VbInputNumber, VbListScrollSearch, VbScrollSelect };
export * from "../src/tools/index";
export * from "../src/mixins/index";
export default {
	VbTable,
	VbListScrollSearch,
	VbScrollSelect,
	install(Vue, opt) {
		for (const name in coms) {
			Vue.component(name, coms[name]);
		}
	}
};
