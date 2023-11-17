import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "server",
    root: "./src/tests",
    environment: "node",
    setupFiles: ["./setup.ts"],
  },
});
