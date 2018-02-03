<template>
  <div class="portfolio-graph">
    <div class="time-range-picker">
      <time-interval-picker
        @update:selected-interval="val => selectedInterval = val">
      </time-interval-picker>
    </div>
    <div class="line-chart">
      <line-chart
        ref="chart"
        :chart-data="chartData">
      </line-chart>
    </div>
    <div class="options-wrapper">
      <div class="options" v-for="balance in balanceData" :key="balance.coin.symbol">
        <button :class="{ selected: isSelected(balance) }" @click="selectCoin(balance)">{{ balance.coin.symbol }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LineChart from './LineChart.vue';
import TimeIntervalPicker from './TimeIntervalPicker.vue';
import { Balance } from '../ts/models/balance';
import { ChartData } from '../ts/models/chart-data';
import { Coin } from '../ts/models/coin';
import { AppData } from '../ts/app-data';
import { HistoricalPrice } from '../ts/models/historical-price';
import { StringMap } from '../ts/string-map';

export default Vue.extend({
  name: 'portfolio-graph',

  components: {
    LineChart,
    TimeIntervalPicker
  },

  data () {
    return {
      appData: AppData.getInstance(),
      balanceData: <StringMap<Balance>> {},
      chartData: new ChartData(null),
      selectedBalance: <Balance>{},
      selectedCurrency: 'USD',
      selectedInterval: '1d'
    };
  },

  mounted () {
    this.selectedInterval = this.appData.settingsManager.getTimeInterval();
    this.selectedCurrency = this.appData.settingsManager.getSelectedCurrency();
    this.chartData = new ChartData((this.$refs.chart as any).$refs.canvas);
    this.loadCoins();
  },

  watch: {
    selectedInterval: function (interval: string) {
      if (this.selectedBalance.coin != null) {
        this.loadGraphData(this.selectedBalance);
      }
    }
  },

  methods: {
    loadCoins: function() {
      this.appData.transactionManager.getAllBalances()
      .then((balanceData) => {
        this.balanceData = balanceData;
        for (let key in balanceData) {
          this.selectCoin(balanceData[key]);
          break;
        }
      })
      .catch ((error) => {
        console.log(error);
      });
    },

    loadGraphData: function(balance: Balance) {
      if (this.selectedInterval === '1h') {
          this.appData.priceManager.getHistoricalPriceMinutes(balance.coin.symbol, this.selectedCurrency)
          .then(response => {
            this.addToChartData(response, balance, false);
          });
        } else if (this.selectedInterval === '12h') {
          this.appData.priceManager.getHistoricalPriceHours(balance.coin.symbol, 12, this.selectedCurrency)
          .then(response => {
            this.addToChartData(response, balance, false);
          });
        } else if (this.selectedInterval === '1d') {
          this.appData.priceManager.getHistoricalPriceHours(balance.coin.symbol, 24, this.selectedCurrency)
          .then(response => {
            this.addToChartData(response, balance, false);
          });
        } else if (this.selectedInterval === '1w') {
          this.appData.priceManager.getHistoricalPriceDays(balance.coin.symbol, 7, this.selectedCurrency)
          .then(response => {
            this.addToChartData(response, balance, true);
          });
        } else if (this.selectedInterval === '1m') {
          this.appData.priceManager.getHistoricalPriceDays(balance.coin.symbol, 30, this.selectedCurrency)
          .then(response => {
            this.addToChartData(response, balance, true);
          });
        } else if (this.selectedInterval === '3m') {
          this.appData.priceManager.getHistoricalPriceDays(balance.coin.symbol, 90, this.selectedCurrency)
          .then(response => {
            this.addToChartData(response, balance, true);
          });
        } else if (this.selectedInterval === '6m') {
          this.appData.priceManager.getHistoricalPriceDays(balance.coin.symbol, 180, this.selectedCurrency)
          .then(response => {
            this.addToChartData(response, balance, true);
          });
        } else if (this.selectedInterval === '1y') {
          this.appData.priceManager.getHistoricalPriceDays(balance.coin.symbol, 365, this.selectedCurrency)
          .then(response => {
            this.addToChartData(response, balance, true);
          });
        }
    },

    addToChartData(historicalPrice: HistoricalPrice, balance: Balance, useDays: boolean) {
      let newChart = new ChartData((this.$refs.chart as any).$refs.canvas);
      newChart.setLabels(historicalPrice.prices, useDays);
      newChart.addDataSet(balance.coin.symbol, balance.amount, historicalPrice.prices);

      this.chartData = newChart;
    },

    selectCoin: function (balance: Balance) {
      if (this.selectedBalance !== balance) {
        this.selectedBalance = balance;
        this.loadGraphData(balance);
      }
    },

    isSelected: function (balance: Balance) {
      return this.selectedBalance === balance;
    }
  }
});
</script>

<style scoped>
.portfolio-graph {
  min-height: 100vh;
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
}

button {
  background-color: #FFFFFF;
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
  border: 3px  solid var(--green)
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
  align-self:center;
  justify-self: center;

  & button {
    width: 72px;
    height: 72px;
    border-radius: 100px;
    font-size: 18px;
  }
}
</style>
