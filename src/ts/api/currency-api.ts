import axios from "axios";
import CurrencyUtil from "../helpers/currency-util";
import { StringMap } from "../string-map";

const BASE_URL = "https://exchangeratesapi.io/api";

export default {
  getExchangeRates: async function(baseCurrency: string, date: string): Promise<StringMap<number>> {
    const requestUrl = BASE_URL + "/" + date + "?base=" + baseCurrency + "&symbols=" + CurrencyUtil.getAll();
    let axiosResult = await axios.get(requestUrl);

    return axiosResult.data.rates;
  }
};
