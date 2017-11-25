import axios from 'axios';
import { StringMap } from '../string-map';

const BASE_URL = 'https://min-api.cryptocompare.com';
const CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'];

export default {
  getPrice: function (coin: string) {
    const requestUrl = BASE_URL + '/data/price?fsym=' + coin + '&tsyms=' + CURRENCIES;
    return axios.get(requestUrl);
  },

  getPriceMultiple: async function (coins: string[]): Promise<StringMap> {
    const requestUrl = BASE_URL + '/data/pricemulti?fsyms=' + coins + '&tsyms=' + CURRENCIES;
    let axiosResult = await (axios.get(requestUrl));

    return axiosResult.data;
  }
};
