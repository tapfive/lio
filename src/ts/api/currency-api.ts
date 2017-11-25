import axios from 'axios';
import { StringMap } from '../string-map';

const BASE_URL = 'https://api.fixer.io';
const CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'];

export default {
  getExchangeRates: async function (baseCurrency: string, date: string): Promise<StringMap> {
    const requestUrl = BASE_URL + '/' + date + '?base=' + baseCurrency + '&symbols=' + CURRENCIES;
    let axiosResult = await (axios.get(requestUrl));

    return axiosResult.data.rates;
  }
};
