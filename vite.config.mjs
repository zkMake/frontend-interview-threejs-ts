import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: { port: 3000 },
  plugins: [splitVendorChunkPlugin(), react()],
});
