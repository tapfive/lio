import axios from 'axios'

const BASE_URL = 'https://min-api.cryptocompare.com'

export default {
  getPrice: function (coin, currency) {
    var requestUrl = BASE_URL + '/data/price?fsym=' + coin + '&tsyms=' + currency
    return axios.get(requestUrl)
  },

  getPriceMultiple: function (coins, currency) {
    var requestUrl = BASE_URL + '/data/pricemulti?fsyms=' + coins + '&tsyms=' + currency
    return axios.get(requestUrl)
  }
}
