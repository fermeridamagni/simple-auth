import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Enables global test functions like `describe`, `it`, etc.
    environment: "node",
    include: ["src/tests/**/*.{test,spec}.{js,ts}"],
    exclude: ["node_modules", "dist", ".turbo"],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
