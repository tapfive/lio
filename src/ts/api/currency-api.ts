import axios from 'axios';
import CurrencyUtil from '../currency-util';
import { StringMap } from '../string-map';

const BASE_URL = 'https://api.fixer.io';

export default {
  getExchangeRates: async function (baseCurrency: string, date: string): Promise<StringMap<number>> {
    const requestUrl = BASE_URL + '/' + date + '?base=' + baseCurrency + '&symbols=' + CurrencyUtil.getAll();
    let axiosResult = await (axios.get(requestUrl));

    return axiosResult.data.rates;
  }
};
