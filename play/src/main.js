import { createApp } from "vue";
import App from "./App.vue";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/message-box/style/css";
import "element-plus/es/components/notification/style/css";
import VeCom from "ve-com";
import "ve-com/style.css";

const app = createApp(App);

app.use(VeCom);
app.mount("#app");
