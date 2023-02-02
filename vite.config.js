import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";

export default defineConfig({
	build: {
		outDir: "vb-com",
		// outDir: "vb",
		lib: {
			entry: path.resolve(__dirname, "./lib/index.js"),
			name: "vb-com",
			fileName: "vb-com"
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "vue"
				}
			}
		}
	},
	plugins: [
		vue(),
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
