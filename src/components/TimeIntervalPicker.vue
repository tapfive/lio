<template>
  <div class="time-interval-picker">
    <h5>Time Range</h5>
    <div v-for="interval in intervals" :key="interval">
      <button :class="{ selected: isSelected(interval) }" @click.prevent="changeInterval(interval)">{{ interval }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { AppData } from '../ts/app-data';

export default Vue.extend({
  name: 'time-interval-picker',

  data () {
    return {
      appData: AppData.getInstance(),
      intervals: ['1h', '12h', '1d', '1w', '1m', '3m', '6m', '1y', 'All'],
      selectedInterval: '1d'
    };
  },

  created () {
    this.selectedInterval = this.appData.timeInterval;
  },

  methods: {
    changeInterval(interval: string) {
      this.selectedInterval = interval;
      this.appData.timeInterval = interval;
      this.$emit('update:selected-interval', interval);
    },

    isSelected(interval: string): boolean {
      return this.selectedInterval === interval;
    }
  }
});
</script>

<style scoped>
.time-interval-picker {
  display: flex;
  flex-direction: row;
}

.selected {
  background: #FFFFFF;
}
</style>
