import VbTable from "./components/zn-table/index.vue";
import VbButton from "./components/vb-button/index.vue";
import VbListScrollSearch from "./components/zn-list-scroll-search/index.vue";
import VbScrollSelect from "./components/zn-scroll-select/index.v2.vue";
import '../src/assets/styles/index.scss'

const coms = [VbTable, VbButton, VbListScrollSearch, VbScrollSelect];
export * from "../src/tools/index";
export * from "../src/mixins/index";
export default {
	VbTable,
	VbButton,
	VbListScrollSearch,
	VbScrollSelect,
	install(Vue) {
		coms.forEach((com) => {
			Vue.component(com.name, com);
		});
	}
};
