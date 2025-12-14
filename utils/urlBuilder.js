/**
 * Builds EPEX SPOT market results URL for a given date
 *
 * @param {string} date - ISO formatted date (YYYY-MM-DD)
 */
export function buildMarketUrl(date){
   return `https://www.epexspot.com/en/market-results?market_area=GB&delivery_date=${date}&modality=Continuous&data_mode=table&product=30`; 
}