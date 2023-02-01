import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VbCom, { typeCheck } from "../vb-com/vb-com";
// import ZyPlus from 'zy-plus'
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(VbCom);
app.mount("#app");
