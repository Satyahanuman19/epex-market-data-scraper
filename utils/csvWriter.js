import fs from 'fs';
import path from 'path';
import { createObjectCsvWriter } from 'csv-writer';

/**
 * Write data to CSV file
 * @param {string} filePath - path to CSV file
 * @param {Array<Object>} data - array of objects to write
 */
export async function writeCsv(filePath, data) {
  if (!data || data.length === 0) {
    throw new Error("No data available to write into CSV");
  }
  // Ensure folder exists
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const headers = Object.keys(data[0]).map((key) => ({ 
    id: key, title: key 
  }));

  const csvWriter = createObjectCsvWriter({ 
    path: filePath, header: headers 
  });

  await csvWriter.writeRecords(data);
  console.log(`CSV file written successfully:${filePath}`);
}