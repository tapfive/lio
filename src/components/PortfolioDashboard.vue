<template>
  <div class="portfolio-dashboard">
    <h1>Dash</h1>
    <button class="btn btn-default" @click.prevent="saveData">Save Some Data</button>
    <div>{{ coinData }}</div>
  </div>
</template>

<script>
import axios from 'axios'

var STORAGE_FILE = 'currencies.json'

export default {
  name: 'portfolio-dashboard',

  data () {
    return {
      blockstack: window.blockstack,
      savedCoins: [],
      coinData: [],
      errors: []
    }
  },

  created () {
    this.getSavedData()
  },

  methods: {
    saveData () {
      this.savedCoins = ['BTC', 'ETH', 'LTC']
      this.blockstack.putFile(STORAGE_FILE, JSON.stringify(['BTC', 'ETH', 'LTC']), true)
    },
    getSavedData () {
      this.blockstack.getFile(STORAGE_FILE, true)
      .then((savedCoinsText) => {
        this.savedCoins = JSON.parse(savedCoinsText || '[]')
        this.getPrices()
      })
    },
    getPrices () {
      var requestUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + this.savedCoins + '&tsyms=BTC,USD'
      axios.get(requestUrl)
      .then(response => {
        this.coinData = response.data
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style scoped>
.portfolio-dashboard {
  flex-grow: 4;
}
</style>