import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "web",
    root: "./tests",
    // environment: "jsdom",
    environment: "happy-dom",
    setupFiles: ["./setup.ts"],
  },
});
