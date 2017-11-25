<template>
  <div class="portfolio-dashboard">
    <div v-if="loaded">
      <portfolio-total :total-balance="totalBalance"></portfolio-total>

      <div v-for="balance in balanceData" :key="balance.coin.symbol">
        <portfolio-balance
          :coin-name="balance.coin.symbol"
          :coin-price="coinData[balance.coin.symbol]['USD']"
          :coin-balance="balance.amount">
        </portfolio-balance>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioTotal from './PortfolioTotal.vue';
import PortfolioBalance from './PortfolioBalance.vue';
import Storage from '../ts/storage';
import CoinApi from '../ts/api/coin-api';
import * as Models from '../ts/models';

export default Vue.extend({
  name: 'portfolio-dashboard',

  components: {
    PortfolioBalance,
    PortfolioTotal
  },

  props: {
    reloadData: {
      required: true,
      type: Boolean
    }
  },

  data () {
    return {
      balanceData: <Models.Balance[]>[],
      coinData: <any>[],
      errors: [],
      loaded: false
    };
  },

  mounted () {
    this.getSavedData();
  },

  methods: {
    getSavedData () {
      Storage.getAllBalances()
      .then((balanceData) => {
        this.balanceData = balanceData;
        this.displayBalances(balanceData);
      })
      .catch ((error) => {
        console.log(error);
      });
    },

    displayBalances (balanceData: Models.Balance[]) {
      let coins = [];
      for (let item of balanceData) {
        coins.push(item.coin.symbol);
      }

      // Only check prices if coins have been added
      if (coins.length > 0) {
        CoinApi.getPriceMultiple(coins)
        .then(response => {
          this.coinData = response;
          this.loaded = true;
        })
        .catch((error: string) => {
          console.log(error);
        });
      }
    }
  },

  watch: {
    reloadData: function (reload) {
      if (reload) {
        this.$emit('update:reload-data', false);
        this.loaded = false;
        this.getSavedData();
      }
    }
  },

  computed: {
    totalBalance: function() {
      let balance = 0;
      if (this.loaded) {
        for (let item of this.balanceData) {
          balance += item.amount * this.coinData[item.coin.symbol].USD;
        }
      }

      return balance.toFixed(2);
    }
  }
});
</script>

<style scoped>
.portfolio-dashboard {
  display: flex;
  flex-grow: 4;
  background: #F7F7FA;
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #F7F7FA 100%);
  box-shadow: 30px 0 74px 0 rgba(22,46,58,0.15);
  grid-row: 1 / 4;
  grid-column: 2 / 5;
  flex-direction: column;
}
</style>