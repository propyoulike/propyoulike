import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // 👇 Deployment base path (Tomcat, GitHub Pages, etc.)
  base: mode === "development" ? "/" : "/propyoulike/",

  // 👇 Dev server settings
  server: {
    host: "::",
    port: 8081,
    strictPort: true,            // ensures it won’t auto-shift to another port
    open: "/", // ✅ open root in dev mode
  //open: "/propyoulike/",       // auto-opens this path in browser on `npm run dev`
  },

  // 👇 Plugins
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // 👇 Path alias support
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 👇 Build options (optional but recommended)
  build: {
    outDir: "dist",
    sourcemap: mode === "development",
  },
}));
