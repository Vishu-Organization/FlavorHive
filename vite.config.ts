/// <reference types="vitest" />
import { defineConfig } from "vite";
import { coverageConfigDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/unit-tests/setup.ts",
    dir: "src/unit-tests",
    reporters: "default",
    coverage: {
      enabled: true,
      reporter: ["html"],
      reportsDirectory: "src/unit-tests/coverage",
      reportOnFailure: true,
      exclude: [
        "**/{playwright,postcss,tailwind}.config.*",
        "playwright-report/**",
        "html/**",
        "**/main.tsx",
        ...coverageConfigDefaults.exclude,
      ],
      thresholds: {
        perFile: true,
        lines: 60,
        branches: 60,
        functions: 60,
        statements: 80,
      },
    },
  },
});
