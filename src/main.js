import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VeCom from "../ve-com/ve-com";
import "../ve-com/style.css";

const app = createApp(App);
app.use(VeCom);
app.mount("#app");
