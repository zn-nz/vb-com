import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VbCom from "./components/vb/index";
// import VbCom from "vb-com";

const app = createApp(App);
app.use(VbCom);
app.mount("#app");
