# EPEX SPOT Market Data Scraper (Playwright)

This project contains an automated Playwright test that scrapes market data from the
**EPEX SPOT Market Results** website and writes selected values into a CSV file.

The solution is designed to be **robust, reusable, and easy to maintain**, with clear
separation of concerns and basic error handling.

---

## 🧩 Problem Statement

The test performs the following steps:

1. Navigates to the EPEX SPOT Market Results website
2. Automatically adjusts the URL to use a valid delivery date if data is not available
3. Scrapes the first four market data columns:
   - Low  
   - High  
   - Last  
   - Weight Avg.
4. Writes the extracted data into a CSV file

---

## 🛠️ Tech Stack

- **Playwright** (JavaScript)
- **Node.js**
- **csv-writer** for CSV file generation

---


## 👤 Author
**Satya Hanuman Bondada**  
