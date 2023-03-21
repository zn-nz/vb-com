import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VbCom from "ve-com";
import "ve-com/style.css";

const app = createApp(App);
app.use(VbCom);
app.mount("#app");
