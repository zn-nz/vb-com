import VbTable from "./zn-table/index.vue";
import VbButton from "./vb-button/index.vue";
import VbListScrollSearch from "./zn-list-scroll-search/index.vue";
import VbScrollSelect from "./zn-scroll-select/index.v2.vue";
import "element-plus/dist/index.css";

const coms = [VbTable, VbButton, VbListScrollSearch, VbScrollSelect];

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
