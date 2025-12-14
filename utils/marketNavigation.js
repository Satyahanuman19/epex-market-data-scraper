import { getPastDate } from "./dateUtil";
import { buildMarketUrl } from "./urlBuilder";

/**
 * Navigates to the first available market page.
 * Tries today first, then goes back up to maxLookBack days.
 *
 * @param page
 * @param maxLookBack - number of past days to retry
 */
export async function navigateToValidMarketPage(page, maxLookBack = 7) {
  for (let i = 0; i <= maxLookBack; i++) {
    const date = getPastDate(i);
    await page.goto(buildMarketUrl(date));
    await page.waitForLoadState("networkidle");

    const rows = await page.locator("table tbody tr").count();
    if (rows > 0) return date;
  }
  throw new Error("No Market data available in the last 7 days");
}
