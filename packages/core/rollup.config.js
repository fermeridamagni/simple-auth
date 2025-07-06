import path from "node:path";
import alias from "@rollup/plugin-alias";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

const aliasPlugin = alias({
  entries: [
    { find: "@", replacement: path.resolve("./src") },
    { find: "@schemas", replacement: path.resolve("./src/schemas") },
  ],
});

const mainInputFile = "src/index.ts";
const adapterInputFile = "src/adapter.ts";

const externalDependencies = ["zod", "otpauth"];

export default defineConfig([
  // ESM build for modern bundlers (Vite, Next.js, etc.)
  {
    input: {
      main: mainInputFile,
      adapter: adapterInputFile,
    },
    output: {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      aliasPlugin,
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
      }),
    ],
    external: externalDependencies,
  },
  // CommonJS build for Node.js
  {
    input: {
      main: mainInputFile,
      adapter: adapterInputFile,
    },
    output: {
      file: "dist/index.cjs",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      aliasPlugin,
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
      }),
    ],
    external: externalDependencies,
  },
  // UMD build for browsers
  {
    input: {
      main: mainInputFile,
      adapter: adapterInputFile,
    },
    output: {
      file: "dist/index.umd.js",
      format: "umd",
      name: "SimpleAuth",
      sourcemap: true,
      globals: {
        zod: "zod",
        otpauth: "OTPAuth",
      },
    },
    plugins: [
      aliasPlugin,
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
      }),
    ],
    external: externalDependencies,
  },
  // TypeScript declarations
  {
    input: {
      main: mainInputFile,
      adapter: adapterInputFile,
    },
    output: {
      file: "dist/types/main.d.ts",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      aliasPlugin,
      typescript({
        tsconfig: "./tsconfig.build.json",
      }),
    ],
    external: externalDependencies,
  },
]);
