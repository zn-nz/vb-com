import DefaultTheme from "vitepress/theme";
import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import { EnhanceAppContext } from "vitepress";
import VeCom from "ve-com";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.component("demo-preview", AntDesignContainer);
    ctx.app.use(VeCom);
  },
};
