import axios from 'axios';
import { StringMap } from '../string-map';
import { HistoricalPrice } from '../models/historical-price';

const BASE_URL = 'https://min-api.cryptocompare.com';
const ALL_CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'];

export default {
  getPriceMultiple: async function (coinSymbols: string[]): Promise<StringMap<StringMap<number>>> {
    let requestUrl = BASE_URL + '/data/pricemulti?fsyms=' + coinSymbols + '&tsyms=' + ALL_CURRENCIES;
    let axiosResult = await (axios.get(requestUrl));

    return axiosResult.data;
  },

  getHistoricalPriceMinutes: async function (coinSymbol: string, currency: string): Promise<HistoricalPrice> {
    let requestUrl = BASE_URL + '/data/histominute?fsym=' + coinSymbol + '&tsym=' + currency + '&limit=60';
    let axiosResult = await (axios.get(requestUrl));

    return formatHistoricalPrice(axiosResult.data, currency);
  },

  getHistoricalPriceHours: async function (coinSymbol: string, currency: string): Promise<HistoricalPrice> {
    let requestUrl = BASE_URL + '/data/histohour?fsym=' + coinSymbol + '&tsym=' + currency + '&limit=24';
    let axiosResult = await (axios.get(requestUrl));

    return formatHistoricalPrice(axiosResult.data, currency);
  },

  getHistoricalPriceDays: async function (coinSymbol: string, currency: string): Promise<HistoricalPrice> {
    let requestUrl = BASE_URL + '/data/histoday?fsym=' + coinSymbol + '&tsym=' + currency + '&limit=365';
    let axiosResult = await (axios.get(requestUrl));

    return formatHistoricalPrice(axiosResult.data, currency);
  }
};

function formatHistoricalPrice(data: any, currency: string): HistoricalPrice {
  // Format data
  let historicalPrice = new HistoricalPrice(data.TimeTo, currency);
  for (let item of data.Data) {
    historicalPrice.prices[item.time] = item.open;
  }

  return historicalPrice;
}
