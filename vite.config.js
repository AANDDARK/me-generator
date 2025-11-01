import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  root: ".",
  base: "/",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "utils"),
    },
  },
  assetsInclude: ["**/*.template"],
});
