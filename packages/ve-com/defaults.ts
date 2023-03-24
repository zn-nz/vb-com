import { App } from "vue";
import components from "./component";

export default {
  install: (app: App) => {
    components.forEach((c) => {
      app.use(c);
    });
  },
};
