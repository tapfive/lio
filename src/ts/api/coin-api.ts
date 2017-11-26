import axios from 'axios';
import { StringMap } from '../string-map';

const BASE_URL = 'https://min-api.cryptocompare.com';
const ALL_CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'];

export default {
  getPrice: function (coin: string) {
    const requestUrl = BASE_URL + '/data/price?fsym=' + coin + '&tsyms=' + ALL_CURRENCIES;
    return axios.get(requestUrl);
  },

  getPriceHistorical: async function (coin: string, currency: string, timestamp: number): Promise<StringMap<number>> {
    let currencies = currency === 'USD' ? 'USD' : 'USD,' + currency;

    const requestUrl = BASE_URL + '/data/pricehistorical?fsym=' + coin + '&tsyms=' + currencies + '&ts=' + timestamp;
    let axiosResult = await (axios.get(requestUrl));

    return axiosResult.data[coin];
  },

  getPriceMultiple: async function (coins: string[]): Promise<StringMap<StringMap<number>>> {
    const requestUrl = BASE_URL + '/data/pricemulti?fsyms=' + coins + '&tsyms=' + ALL_CURRENCIES;
    let axiosResult = await (axios.get(requestUrl));

    return axiosResult.data;
  }
};
