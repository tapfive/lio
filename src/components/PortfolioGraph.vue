<template>
  <div class="portfolio-graph">
    <time-interval-picker
      @update:selected-interval="val => selectedInterval = val">
    </time-interval-picker>
    <line-chart
      :data="this.chartData">
    </line-chart>
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
    this.selectedInterval = this.appData.timeInterval;
  },

  watch: {
    selectedInterval: function (interval: string) {
      console.log(interval);
    }
  }
});
</script>

<style scoped>

</style>
