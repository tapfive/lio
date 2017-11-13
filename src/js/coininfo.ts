import axios from 'axios'

const BASE_URL = 'https://min-api.cryptocompare.com'
const CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY']

export default {
  getPrice: function (coin: string) {
    const requestUrl = BASE_URL + '/data/price?fsym=' + coin + '&tsyms=' + CURRENCIES
    return axios.get(requestUrl)
  },

  getPriceMultiple: function (coins: string[]) {
    const requestUrl = BASE_URL + '/data/pricemulti?fsyms=' + coins + '&tsyms=' + CURRENCIES
    return axios.get(requestUrl)
  }
}
