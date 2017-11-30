<template>
  <div class="portfolio-graph">
    <div class="time-range-picker">
      <time-interval-picker
        @update:selected-interval="val => selectedInterval = val">
      </time-interval-picker>
    </div>
    <div class="line-chart">
      <line-chart
        :chart-data="chartData">
      </line-chart>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LineChart from './LineChart.vue';
import TimeIntervalPicker from './TimeIntervalPicker.vue';
import { ChartData } from '../ts/models/chart-data';
import { AppData } from '../ts/app-data';

export default Vue.extend({
  name: 'portfolio-graph',

  components: {
    LineChart,
    TimeIntervalPicker
  },

  data () {
    return {
      appData: AppData.getInstance(),
      chartData: new ChartData(),
      selectedInterval: '1d'
    };
  },

  mounted () {
    this.selectedInterval = this.appData.getTimeInterval();

    // TEMPORARY
    this.appData.storageManager.getHistoricalPriceMinutes('BTC')
    .then(response => {
      let data = new ChartData();
      data.setLabels(response.prices);
      data.addDataSet('BTC', response.prices);
      this.chartData = data;
    });
  },

  watch: {
    selectedInterval: function (interval: string) {
      console.log(interval);
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
  grid-template-rows: 96px 220px 1fr;
  grid-auto-rows: 96px;
  grid-gap: 16px;
  grid-template-areas:
    ". time-picker     time-picker     time-picker     time-picker    ."
    ". graph           graph           graph           graph          ."
    ". options         options         options         options        .";
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
</style>
