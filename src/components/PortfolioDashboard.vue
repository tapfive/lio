<template>
  <div class="portfolio-dashboard">
    <investment-add-modal
      v-if="showModal"
      @close="showModal = false"
      @reload="handleDataAdded()">
    </investment-add-modal>

    <div v-if="loaded" v-for="balance in balanceData" :key="balance.coin.symbol">
      <portfolio-balance 
        :currency-name="balance.coin.symbol" 
        :currency-price="coinData[balance.coin.symbol].USD" 
        :currency-balance="balance.amount">
      </portfolio-balance>
    </div>

    <div class="floating-action-button" @click="showModal = true">+</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InvestmentAddModal from './InvestmentAddModal.vue'
import PortfolioBalance from './PortfolioBalance.vue'
import Storage from '../js/storage'
import CoinInfo from '../js/coininfo'
import * as Models from '../js/models'

export default Vue.extend({
  name: 'portfolio-dashboard',

  components: {
    InvestmentAddModal,
    PortfolioBalance
  },

  data () {
    return {
      balanceData: <Models.Balance[]>[],
      loaded: false,
      coinData: [],
      errors: [],
      showModal: false
    }
  },

  mounted () {
    this.getSavedData()
  },

  methods: {
    getSavedData () {
      Storage.getAllBalances()
      .then((balanceData) => {
        console.log(balanceData)
        this.balanceData = balanceData
        this.displayBalances(balanceData)
      })
    },

    displayBalances (balanceData: Models.Balance[]) {
      var coins = []
      for (var item of balanceData) {
        coins.push(item.coin.symbol)
      }
      CoinInfo.getPriceMultiple(coins)
      .then(response => {
        console.log(response)
        this.coinData = response.data
        this.loaded = true
      })
      .catch((error: string) => {
        console.log(error)
      })
    },

    handleDataAdded () {
      this.showModal = false
      this.getSavedData()
    }
  }
})
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