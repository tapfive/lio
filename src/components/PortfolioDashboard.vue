<template>
  <div class="portfolio-dashboard">

    <div class="dashboard-content" v-if="loadedStorage">
      <div class="time-range-picker">time range picker</div>
      <portfolio-total :total-balance="totalBalance"></portfolio-total>

      <div class="column-labels">labels labels lebals</div>

      <div class="balance-wrapper" v-for="balance in balanceData" :key="balance.coin.symbol">
        <portfolio-balance
          :coin-name="balance.coin.symbol"
          :coin-price="balance.getPriceInCurrency(selectedCurrency)"
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
import { StringMap } from '../ts/string-map';

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
      balanceData: <StringMap<Models.Balance>> {},
      errors: [],
      loadedApi: false,
      loadedStorage: false,
      selectedCurrency: 'USD'
    };
  },

  mounted () {
    this.loadBalances();
  },

  methods: {
    loadBalances() {
      Storage.getAllBalances()
      .then((balanceData) => {
        this.balanceData = balanceData;
        this.loadedStorage = true;

        console.log('loadedStorage');

        this.refreshPrices();
      })
      .catch ((error) => {
        console.log(error);
      });
    },

    refreshPrices () {
      let coins = [];
      for (let key in this.balanceData) {
        coins.push(key);
      }

      // Only check prices if coins have been added
      if (coins.length > 0) {
        CoinApi.getPriceMultiple(coins)
        .then(response => {
          // Cache data for later
          Storage.storeLatestPrice(response);

          for (let key in response) {
            let value = response[key];
            this.balanceData[key].price = value;
          }

          console.log('loadedApi');

          this.loadedApi = true;
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
        this.loadedStorage = false;
        this.loadedApi = false;
        this.loadBalances();
      }
    }
  },

  computed: {
    totalBalance: function() {
      let balance = 0;
      if (this.loadedStorage) {
        for (let key in this.balanceData) {
          // If the coin has a stored price, add it to the total
          let value = this.balanceData[key];
          if (value.price) {
            balance += value.amount * value.price[this.selectedCurrency];
          }
        }
      }

      return balance.toFixed(2);
    }
  }
});
</script>

<style scoped>
.portfolio-dashboard {
  background: #F7F7FA;
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #F7F7FA 100%);
  box-shadow: 30px 0 74px 0 rgba(22,46,58,0.15);
  grid-area: dashboard;
}

.dashboard-content {
  display: grid;
  grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
  grid-template-rows: 96px 220px 62px 96px;
  grid-auto-rows: 96px;
  grid-gap: 16px;
  grid-template-areas:
    ". time-picker     time-picker     time-picker     time-picker    ."
    ". total           total           total           total          ."
    ". balance-labels  balance-labels  balance-labels  balance-labels ."
    ". balance         balance         balance         balance        .";
}

.time-range-picker {
  height: 24px;
  border-radius: 100px;
  box-shadow: 0 2px 8px 0 rgba(22, 46, 58, 0.15);
  grid-row: 1 / 2;
  grid-column: 2 / 6;
  grid-area: time-picker;
  align-self: center;
  justify-self: center;
  backround-color: white;
}

.column-labels {
  border-radius: 100px;
  box-shadow: 0 2px 8px 0 rgba(22, 46, 58, 0.15);
  /* grid-row: 3 / 4;
  grid-column: 2 / 6; */
  grid-area: balance-labels;
  backround-color: white;
}

.balance-wrapper {
    grid-area: balance;
    grid-row: auto;
}
</style>