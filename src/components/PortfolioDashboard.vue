<template>
  <div class="portfolio-dashboard">
    <investment-add-modal v-if="showModal" @close="showModal = false"></investment-add-modal>

    <portfolio-balance currency-name="BTC" :currency-price="coinData.USD" currency-balance="0.25"></portfolio-balance>

    <div class="floating-action-button" @click="showModal = true">+</div>
  </div>
</template>

<script>
import InvestmentAddModal from './InvestmentAddModal'
import PortfolioBalance from './PortfolioBalance'
import coinInfo from '../js/coininfo'
import storage from '../js/storage'

export default {
  name: 'portfolio-dashboard',

  components: {
    InvestmentAddModal,
    PortfolioBalance
  },

  data () {
    return {
      blockstack: window.blockstack,
      savedCoins: [],
      coinData: [],
      errors: [],
      showModal: false
    }
  },

  created () {
    this.getPrices()
  },

  methods: {
    saveData () {
      storage.storeInvestment('BTC', '0.25', 0)
      this.getSavedData()
    },
    getSavedData () {
      storage.getInvestments()
      .then((savedCoinsText) => {
        this.savedCoins = JSON.parse(savedCoinsText || '[]')
      })
    },
    getPrices () {
      coinInfo.getPrice('BTC', 'USD')
      .then(response => {
        console.log(response)
        this.coinData = response.data
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
  background-color: rgba(0, 68, 102, 0.03);
}

.floating-action-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: #fff;
  height: 50px;
  width: 50px;
  text-align: center;
  border-radius: 25px;
  font-size: 25px;
  font-weight: 700;
  box-shadow: 4px 4px 35px 0px rgba(0, 0, 0, 0.5);
  background-color: #00FFA2;
  cursor: pointer;
}
</style>