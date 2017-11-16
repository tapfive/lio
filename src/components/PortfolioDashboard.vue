<template>
  <div class="portfolio-dashboard">
    <investment-add-modal
      v-if="showModal"
      @close="showModal = false"
      @reload="handleDataAdded()">
    </investment-add-modal>

    <div v-if="loaded">
      <portfolio-total :total-balance="totalBalance"></portfolio-total>

      <div v-for="balance in balanceData" :key="balance.coin.symbol">
        <portfolio-balance
          :coin-name="balance.coin.symbol"
          :coin-price="coinData[balance.coin.symbol].USD"
          :coin-balance="balance.amount">
        </portfolio-balance>
      </div>
    </div>

    <div class="floating-action-button" @click="showModal = true">+ Add Balance</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InvestmentAddModal from './InvestmentAddModal.vue'
import PortfolioTotal from './PortfolioTotal.vue'
import PortfolioBalance from './PortfolioBalance.vue'
import Storage from '../js/storage'
import CoinInfo from '../js/coininfo'
import * as Models from '../js/models'

export default Vue.extend({
  name: 'portfolio-dashboard',

  components: {
    InvestmentAddModal,
    PortfolioTotal,
    PortfolioBalance
  },

  data () {
    return {
      balanceData: <Models.Balance[]>[],
      loaded: false,
      coinData: <any>[],
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
      .catch ((error) => {
        console.log(error)
      })
    },

    displayBalances (balanceData: Models.Balance[]) {
      var coins = []
      for (var item of balanceData) {
        coins.push(item.coin.symbol)
      }

      // Only check prices if coins have been added
      if (coins.length > 0) {
        CoinInfo.getPriceMultiple(coins)
        .then(response => {
          console.log(response)
          this.coinData = response.data
          this.loaded = true
        })
        .catch((error: string) => {
          console.log(error)
        })
      }
    },

    handleDataAdded () {
      this.showModal = false
      this.loaded = false
      this.getSavedData()
    }
  },

  computed: {
    totalBalance: function() {
      let balance = 0
      if (this.loaded) {
        for (var item of this.balanceData) {
          balance += item.amount * this.coinData[item.coin.symbol].USD
        }
      }

      return balance.toFixed(2)
    }
  }
})
</script>

<style scoped>
.portfolio-dashboard {
  flex-grow: 4;
  background: #F7F7FA;
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #F7F7FA 100%);
  box-shadow: 30px 0 74px 0 rgba(22,46,58,0.15);
}

.floating-action-button {
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 180px;
  height: 62px;
  border-radius: 6px;
  background-color: #00FFA2;
  box-shadow: 0 3px 8px 0 rgba(22,46,58,0.16);
  color: #fff;
  color: #FFFFFF;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>