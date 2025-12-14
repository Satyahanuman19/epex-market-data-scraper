import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  // Global timeout for each test (30 seconds)
  timeout: 30000,

  // Run tests in parallel where possible
  fullyParallel: true,

  // HTML report for easy review
  reporter: "html",

  // Shared test settings
  use: {
    headless: false,
  },

  // Single browser is sufficient for data scraping
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
