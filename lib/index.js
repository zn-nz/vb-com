import VeTable from "./components/Ve-table/index.vue";
import VeListScrollSearch from "./components/Ve-list-scroll-search/index.vue";
import VeScrollSelectV2 from "./components/Ve-scroll-select/index.v2.vue";
import VeScrollSelect from "./components/Ve-scroll-select/index.v2.vue";
import "../src/assets/styles/index.scss";

const coms = { VeTable, VeListScrollSearch, VeScrollSelectV2, VeScrollSelect };
export * from "../src/tools/index";
export * from "../src/mixins/index";
export default {
	VeTable,
	VeListScrollSearch,
	VeScrollSelectV2,
	VeScrollSelect,
	install(Vue) {
		for (const name in coms) {
			Vue.component(name, coms[name]);
		}
	}
};
