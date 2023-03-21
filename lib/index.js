import VbTable from "./components/vb-table/index.vue";
import VbInputNumber from "./components/vb-input-number/index.vue";
import VbListScrollSearch from "./components/vb-list-scroll-search/index.vue";
import VbScrollSelect from "./components/vb-scroll-select/index.v2.vue";
// import { provideGlobalConfig } from "element-plus";
import "../src/assets/styles/index.scss";
// import { defineComponent, h } from "vue";

const coms = { VbTable, VbInputNumber, VbListScrollSearch, VbScrollSelect };
export * from "../src/tools/index";
export * from "../src/mixins/index";
export default {
	VbTable,
	VbListScrollSearch,
	VbScrollSelect,
	install(Vue, opt) {
		// provideGlobalConfig(opt, Vue, true);
		for (const name in coms) {
			Vue.component(name, coms[name]);
		}
	}
};
