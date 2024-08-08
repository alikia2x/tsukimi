import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { createHtmlPlugin } from "vite-plugin-html";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					injectScript: `<script type="module" src="/src/main.tsx"></script>`
				}
			}
		}),
		viteStaticCopy({
			targets: [{ src: "resources/manual-article/**/*", dest: "resources/manual-article" }]
		})
	]
});
