import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig as defineVitestConfig } from "vitest/config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      "process.env.REACT_APP_API_URL": JSON.stringify(env.REACT_APP_API_URL),
      "process.env.REACT_APP_API_KEY": JSON.stringify(env.REACT_APP_API_KEY),
    },
    assetsInclude: [
      "**/*.svg",
      "**/*.png",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.gif",
      "**/*.webp",
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTest.ts",
      css: true,
    },
  };
});
