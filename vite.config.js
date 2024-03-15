import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@splinetool/runtime": "ścieżka/do/@splinetool/runtime", // ścieżka do instalacji biblioteki
		},
	},
});
