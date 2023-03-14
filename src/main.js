import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import VbCom, { typeCheck } from "../vb-com/index";
import VbCom, { typeCheck } from "../vb-com";
// import VbCom, { typeCheck } from "../lib/index";
import "../vb-com/style.css";

console.log(typeCheck("1"));
const app = createApp(App);
app.use(VbCom);
app.mount("#app");
