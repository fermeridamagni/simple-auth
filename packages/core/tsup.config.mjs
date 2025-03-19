import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "simple-auth": "src/main.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  clean: true,
  sourcemap: true,
  minify: false,
});
