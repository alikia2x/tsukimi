import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { ViteMinifyPlugin } from "vite-plugin-minify";

const jsToBottomNoModule = () => {
	return {
		name: "no-attribute",
		transformIndexHtml(html: string) {
			const scriptTags = html.match(/<script[^>]*>(.*?)<\/script[^>]*>/gm);
			const styleTags = html.match(/<link rel="stylesheet"(.*?)>/gm)!;
			let injectContent = "";
			if (styleTags !== null) {
				for (const styleTag of styleTags) {
					html = html.replace(styleTag, "");
					injectContent += styleTag;
				}
			}
			if (scriptTags !== null) {
				for (const scriptTag of scriptTags) {
					html = html.replace(scriptTag, "");
					injectContent += scriptTag;
				}
			}
			html = html.replace("<!-- # INSERT SCRIPT HERE -->", injectContent);
			return html;
		}
	};
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		viteStaticCopy({
			targets: [{ src: "resources/manual-article/img", dest: "resources/manual-article/" }]
		}),
		chunkSplitPlugin({
			strategy: "single-vendor",
			// customChunk: (args) => {
			// 	// files into pages directory is export in single files
			// 	let { file } = args;
			// 	if (file.startsWith("routes/")) {
			// 		file = file.substring(7);
			// 		file = file.replace(/\.[^.$]+$/, "");
			// 		return file;
			// 	}
			// 	return null;
			// },
			customSplitting: {
				// Any file that includes `lib` in src dir will be bundled in the `utils` chunk
				lib: [/lib/]
			}
		}),
		jsToBottomNoModule(),
		ViteMinifyPlugin({})
	]
});
