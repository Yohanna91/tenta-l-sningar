import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      "**/node_modules/!(@plugga-tech)/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
    ],
    environment: "jsdom",
    reporters: ["verbose"],
    setupFiles: ["./config/test.setup.js"],
  },
});
