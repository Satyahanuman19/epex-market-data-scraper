import { test, chromium, expect } from "@playwright/test";
import { navigateToValidMarketPage } from "../utils/marketNavigation.js";
import { writeCsv } from "../utils/csvWriter.js";


/**
 * Test: Scrape EPEX SPOT market data and store it in a CSV file
 */
test("Scrape EPEX market data and write to CSV file", async ({page}) => {

  //Navigate to a valid market page (fallbacks to previous days if data is not there)
  await navigateToValidMarketPage(page);

  //Read table headers to dynamically identify column indexes
  const headers = await page.locator("table thead th").allTextContents();

  const lowIndex = headers.findIndex((h) => h.includes("Low"));
  console.log("lowindex"+lowIndex);
  const highIndex = headers.findIndex((h) => h.includes("High"));
  const lastIndex = headers.findIndex((h) => h.includes("Last"));
  const weightedAvgIndex = headers.findIndex((h) => h.includes("Weight Avg"));

  //validation of require columns existence
  expect(lowIndex).toBeGreaterThan(-1);
  expect(highIndex).toBeGreaterThan(-1);
  expect(lastIndex).toBeGreaterThan(-1);
  expect(weightedAvgIndex).toBeGreaterThan(-1);

  //Scrape table rows
  const rows = page.locator("table tbody tr.lvl-1.active");
  const rowCount = await rows.count();

  const records = [];
  for (let i = 0; i < rowCount; i++) {
    const cells = rows.nth(i).locator("td");

    records.push({
      low: await cells.nth(lowIndex-1).innerText(),
      high: await cells.nth(highIndex-1).innerText(),
      last: await cells.nth(lastIndex-1).innerText(),
      weightedAvg: await cells.nth(weightedAvgIndex-1).innerText(),
    });
  }

  //Write scraped data to CSV
  await writeCsv("output/market-data.csv", records);
});