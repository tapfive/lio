<template>
  <div class="portfolio-graph">

    <div v-if="loadedStorage">

      <div class="empty-state" v-if="isEmpty">
        <h1>¯\_(ツ)_/¯<br/>Can't track an empty portfolio.</h1>
        <h3>Add a balance to get started.</h3>
        <svg class="empty-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve" width="16" height="16"><g class="nc-icon-wrapper" fill="#00334c"><polygon fill="#00334c" points="14.7,9.3 13.3,7.9 9,12.2 9,0 7,0 7,12.2 2.7,7.9 1.3,9.3 8,16 "></polygon></g></svg>
      </div>

      <div class="graph-content" v-else>
        <div class="time-range-picker">
          <time-interval-picker
            @update:selected-interval="val => selectedInterval = val">
          </time-interval-picker>
        </div>
        <div class="line-chart">
          <line-chart
            ref="chart"
            :chart-data="chartData"
            :label-color="primaryColor"
            @update:chart-loaded="val => selectFirstCoin(val)">>
          </line-chart>
        </div>
        <div class="options-wrapper">
          <div class="options" v-for="balance in balanceData" :key="balance.coin.symbol">
            <button :class="{ selected: isSelected(balance) }" @click="selectCoin(balance)">{{ balance.coin.symbol }}</button>
          </div>
        </div>
      </div>

    </div>

    <div class="loading-container" v-else>
      <spinner size="large" :line-fg-color="primaryColor" :text-fg-color="primaryColor" message="Loading..."></spinner>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LineChart from "./LineChart.vue";
import TimeIntervalPicker from "../TimeIntervalPicker.vue";
import TimeIntervalUtil from "../../ts/helpers/time-interval-util";
import Spinner from "vue-simple-spinner";
import { Balance } from "../../ts/models/balance";
import { ChartData } from "../../ts/models/chart-data";
import { Coin } from "../../ts/models/coin";
import { TimeInterval } from "../../ts/enums/time-interval";
import { TimeIntervalUnit } from "../../ts/enums/time-interval-unit";
import { AppData } from "../../ts/app-data";
import { HistoricalPrice } from "../../ts/models/historical-price";
import { StringMap } from "../../ts/string-map";

export default Vue.extend({
  name: "portfolio-graph",

  components: {
    LineChart,
    Spinner,
    TimeIntervalPicker
  },

  props: {
    reloadData: {
      required: true,
      type: Boolean
    }
  },

  data() {
    return {
      balanceData: <StringMap<Balance>>{},
      chartData: new ChartData(null),
      loadedStorage: false,
      primaryColor: AppData.settingsManager.getPrimaryColor(),
      selectedBalance: <Balance>{},
      selectedCurrency: "USD",
      selectedInterval: TimeInterval.ONE_DAY
    };
  },

  mounted() {
    this.selectedInterval = AppData.settingsManager.getTimeInterval();
    this.selectedCurrency = AppData.settingsManager.getSelectedCurrency();
    this.loadCoins();
  },

  watch: {
    selectedInterval: function(interval: string) {
      if (this.selectedBalance.coin != null) {
        this.loadGraphData(this.selectedBalance);
      }
    },

    reloadData: function(reload: boolean) {
      if (reload) {
        this.$emit("update:reload-data", false);
        this.loadedStorage = false;
        this.loadCoins();
      }
    }
  },

  computed: {
    isEmpty: function(): Boolean {
      return Object.keys(this.balanceData).length === 0;
    }
  },

  methods: {
    loadCoins: function() {
      AppData.transactionManager
        .getAllBalances()
        .then(balanceData => {
          this.balanceData = balanceData;
          this.loadedStorage = true;
        })
        .catch(error => {
          console.log(error);
        });
    },

    loadGraphData: function(balance: Balance) {
      AppData.priceManager
        .getHistoricalPrice(balance.coin.symbol, this.selectedCurrency, this.selectedInterval)
        .then(response => {
          let useDays = TimeIntervalUtil.getUnit(this.selectedInterval) === TimeIntervalUnit.DAYS;
          this.addToChartData(response, balance, useDays);
        })
        .catch(error => {
          console.log(error);
        });
    },

    addToChartData(historicalPrice: HistoricalPrice, balance: Balance, useDays: boolean) {
      let newChart = new ChartData((this.$refs.chart as any).$refs.canvas);
      newChart.setLabels(historicalPrice.prices, useDays);
      newChart.addDataSet(balance.coin.symbol, balance.amount, historicalPrice.prices);

      this.chartData = newChart;
    },

    selectFirstCoin: function(chartLoaded: boolean) {
      if (chartLoaded) {
        // Select first coin
        for (let key in this.balanceData) {
          this.selectCoin(this.balanceData[key]);
          break;
        }
      }
    },

    selectCoin: function(balance: Balance) {
      if (this.selectedBalance !== balance) {
        this.selectedBalance = balance;
        this.loadGraphData(balance);
      }
    },

    isSelected: function(balance: Balance) {
      return this.selectedBalance === balance;
    }
  }
});
</script>

<style scoped>
.graph-content {
  /* min-height: 100vh; */
  background-color: var(--view-bg-theme-color);
  background-image: var(--view-bg-theme-gradient);
  display: grid;
  grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
  grid-template-rows: 96px 400px min-content;
  grid-auto-rows: 96px;
  grid-gap: 16px;
  grid-template-areas:
    ". time-picker     time-picker     time-picker     time-picker    ."
    ". graph           graph           graph           graph          ."
    ". options         options         options         options        .";
  padding-bottom: 62px;
}

button {
  background-color: #ffffff;
}

.time-range-picker {
  grid-row: 1 / 2;
  grid-column: 2 / 6;
  grid-area: time-picker;
  align-self: center;
}

.line-chart {
  grid-area: graph;
  height: 220px;
  width: 100%;
}

.selected {
  border: 3px solid var(--green);
}

.options-wrapper {
  grid-area: options;
  grid-row: auto;
  grid-row: 3 / 4;
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: 96px 96px 96px 96px 96px 96px 96px 96px;
  grid-template-rows: 96px;
  grid-auto-rows: 96px;
  grid-gap: 16px;
}

.options {
  display: flex;
  align-items: center;
  align-self: center;
  justify-self: center;

  & button {
    width: 72px;
    height: 72px;
    border-radius: 100px;
    background-color: var(--card-bg-theme-color);
    color: var(--font-theme-color);
    font-size: 18px;
  }
}

.loading-container {
  position: fixed;
  top: 50%;
  left: 50%;
}

.empty-state {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0.5;

  & h3 {
    margin-top: -8px;
    font-weight: 400;
  }

  & .empty-arrow {
    margin-top: 24px;
    transform: rotate(45deg) scale(2);
    transition: all 0.5s var(--ease-in-out-cubic);
  }

  & .empty-arrow:hover {
    transform: rotate(405deg) scale(2);
  }
}
</style>
