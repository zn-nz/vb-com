import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// import ElementPlus from "unplugin-element-plus/vite";
import path from "path";

export default defineConfig({
	build: {
		outDir: "ve-com",
		// outDir: "vb",
		lib: {
			entry: path.resolve(__dirname, "./lib/index.js"),
			name: "ve-com",
			fileName: "ve-com"
		},
		rollupOptions: {
			external: ["vue", "element-plus"],
			output: {
				globals: {
					vue: "vue"
				}
			}
		}
	},
	plugins: [
		vue(),
		// ElementPlus(), // 打包手动引入样式
		// 开发，自动按需引入
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [
				ElementPlusResolver({
					importStyle: "sass"
				})
			]
		})
	],
	server: {
		host: true,
		proxy: {
			"/ees": {
				target: "http://localhost:3000",
				changeOrigin: true
			}
		}
	}
});
