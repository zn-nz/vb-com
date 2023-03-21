import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VbCom, { typeCheck } from "vb-com";
import "vb-com/style.css";

const app = createApp(App);
app.use(VbCom);
app.mount("#app");
