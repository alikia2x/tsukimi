import type { Config } from "tailwindcss";
import TailwindFormPlugin from "@tailwindcss/forms";

const config: Config = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./routes/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			}
		}
	},
	plugins: [TailwindFormPlugin({
		strategy: 'class',
	})]
};
export default config;
