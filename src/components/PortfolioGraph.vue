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
import { ChartData } from '../ts/chart-data';

export default Vue.extend({
  name: 'portfolio-graph',

  components: {
    LineChart,
    TimeIntervalPicker
  },

  data () {
    return {
      chartData: new ChartData(),
      selectedInterval: '1d'
    };
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
