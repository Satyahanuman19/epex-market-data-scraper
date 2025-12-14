/**
 * Returns a past date in ISO format (YYYY-MM-DD)
 *
 * @param {number} pastDays - number of days in the past
 */
export function getPastDate(pastDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() - pastDays);
  return date.toISOString().split("T")[0];
}
