import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "insight.js",
      name: "InsightUI",
    },
    target: "es2022",
    cssMinify: false,
    sourcemap: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        codeSplitting: false,
        manualChunks: undefined,
        entryFileNames: "insight.js",
        chunkFileNames: "insight.js",
        assetFileNames: "insight.[ext]",
      },
    },
  },
});
