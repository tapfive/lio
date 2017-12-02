<template>
  <div class="portfolio-overview">

    <div class="dashboard-content" v-if="loadedStorage">
      <div class="time-range-picker">
        <!--
        <time-interval-picker
          @update:selected-interval="val => selectedInterval = val">
        </time-interval-picker>
        -->
      </div>
      <portfolio-total 
        :total-balance="totalBalance"
        :currency-symbol="selectedCurrencySymbol">
      </portfolio-total>

      <div class="column-labels">
        <ul>
          <li>Cryptocurrency</li>
          <li>Holdings</li>
          <li>Value</li>
          <li>Balance</li>
        </ul>
      </div>

      <div class="balance-wrapper" v-for="balance in balanceData" :key="balance.coin.symbol">
        <portfolio-balance
          :coin-amount="balance.amount"
          :coin-name="balance.coin.symbol"
          :coin-price="balance.getPriceInCurrency(selectedCurrency)"
          :currency-symbol="selectedCurrencySymbol">
        </portfolio-balance>
      </div>
    </div>
    <div class="loading-container" v-else>
      <spinner size="large" message="Loading..."></spinner>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioTotal from './PortfolioTotal.vue';
import PortfolioBalance from './PortfolioBalance.vue';
import TimeIntervalPicker from './TimeIntervalPicker.vue';
import Spinner from 'vue-simple-spinner';
import CoinApi from '../ts/api/coin-api';
import { Balance } from '../ts/models/balance';
import { StringMap } from '../ts/string-map';
import { AppData } from '../ts/app-data';

export default Vue.extend({
  name: 'portfolio-overview',

  components: {
    PortfolioBalance,
    PortfolioTotal,
    Spinner,
    TimeIntervalPicker
  },

  props: {
    reloadData: {
      required: true,
      type: Boolean
    }
  },

  data () {
    return {
      appData: AppData.getInstance(),
      balanceData: <StringMap<Balance>> {},
      errors: [],
      loadedApi: false,
      loadedStorage: false,
      selectedCurrency: 'USD',
      selectedCurrencySymbol: '$',
      selectedInterval: '1d'
    };
  },

  mounted () {
    this.appData.loadSettings()
    .then (response => {
      this.selectedCurrency = this.appData.getSelectedCurrency();
      this.selectedCurrencySymbol = this.appData.getSelectedCurrencySymbol();
    });
    this.selectedInterval = this.appData.getTimeInterval();
    this.loadBalances(false);
  },

  methods: {
    loadBalances(ignoreTimer: boolean) {
      this.appData.storageManager.getAllBalances()
      .then((balanceData) => {
        this.balanceData = balanceData;
        this.loadedStorage = true;

        if (ignoreTimer || this.appData.readyForPriceSync()) {
          this.refreshPrices();
        }
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
          this.appData.storageManager.storeLatestPrice(response);

          for (let key in response) {
            let value = response[key];
            this.balanceData[key].price = value;
          }

          this.appData.updateLastPriceSync();
          this.loadedApi = true;
        })
        .catch((error: string) => {
          console.log(error);
        });
      }
    }
  },

  watch: {
    reloadData: function (reload: boolean) {
      if (reload) {
        this.$emit('update:reload-data', false);
        this.loadedStorage = false;
        this.loadedApi = false;
        this.loadBalances(true);
      }
    },

    selectedInterval: function (interval: string) {
      console.log(interval);
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
.portfolio-overview {
  min-height: 100vh;
  background-color: var(--view-bg-theme-color);
  background-image: var(--view-bg-theme-gradient);
}

.dashboard-content {
  display: grid;
  grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
  grid-template-rows: 96px 242px 48px 96px;
  grid-auto-rows: 96px;
  grid-gap: 16px;
  grid-template-areas:
    ". time-picker     time-picker     time-picker     time-picker    ."
    ". total           total           total           total          ."
    ". balance-labels  balance-labels  balance-labels  balance-labels ."
    ". balance         balance         balance         balance        .";
}

@media screen and (max-width: 1100px) {
  .dashboard-content {
    grid-template-columns: 0.5fr minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) 0.5fr;
  }
}

@media screen and (min-width: 2000px) {
  .dashboard-content {
    grid-template-columns: 1fr 360px 360px 360px 360px 1fr;
  }
}

.time-range-picker {
  grid-row: 1 / 2;
  grid-column: 2 / 6;
  grid-area: time-picker;
  align-self: center;
}

.column-labels {
  grid-area: balance-labels;
  align-self: end;
  margin-top: 12px;

  & ul {
    display: grid;
    list-style: none;
    text-align: left;
    font-weight: 600;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0px 32px;
  }
}

.balance-wrapper {
  grid-area: balance;
  grid-row: auto;
}

.loading-container {
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>