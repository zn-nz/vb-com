import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

import vueSetupExtend from "vite-plugin-vue-setup-extend";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),

    // setup 支持 扩展
    vueSetupExtend(),
    // 增加下面的配置项,这样在运行时就能检查eslint规范
    eslintPlugin({
      include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"],
    }),
  ],
  build: {
    target: "modules",
    outDir: "lib",
    lib: {
      entry: resolve(__dirname, "packages/ve-com/index.ts"),
      name: "ve-com",
      fileName: "ve-com",
    },
    rollupOptions: {
      external: ["vue", "element-plus"],
      output: {
        globals: {
        vue: "Vue",
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["vue"],
  },
});
