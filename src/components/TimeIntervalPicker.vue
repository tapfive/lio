<template>
  <div class="time-interval-picker">
    <h5>Time Range</h5>
    <div class="time-picker-options">
      <div v-for="interval in intervals" :key="interval">
        <button :class="{ selected: isSelected(interval) }" @click.prevent="changeInterval(interval)">{{ interval }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TimeIntervalUtil from '../ts/helpers/time-interval-util';
import { TimeInterval } from '../ts/enums/time-interval';
import { AppData } from '../ts/app-data';

export default Vue.extend({
  name: 'time-interval-picker',

  data () {
    return {
      appData: AppData.getInstance(),
      intervals: TimeIntervalUtil.getIntervals(),
      selectedInterval: TimeInterval.ONE_DAY
    };
  },

  created () {
    this.selectedInterval = this.appData.settingsManager.getTimeInterval();
  },

  methods: {
    changeInterval(interval: TimeInterval) {
      this.selectedInterval = interval;
      this.appData.settingsManager.setTimeInterval(interval);
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
  flex-direction: column;
  align-items: start;
}

.time-picker-options {
  display: flex;
  flex-direction: row;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 100px;
  background-color: var(--card-bg-theme-color);
  /* height: 24px; */
  box-shadow: 0 6px 16px 0 var(--shadow-theme-color);
}

h5 {
  margin-top:0;
  margin-bottom: 8px;
}

button {
  padding-right: 16px;
  padding-left: 16px;
  border: 1px solid transparent;
  border-radius: 0px;
  background-color: var(--card-bg-theme-color);
  box-shadow: 0 0 1px 0 rgba(22,46,58,0);
  color: var(--font-theme-color);
  text-transform: none;
}

button:hover {
  border: 1px solid var(--green);
  border-radius: 100px;
}

.selected {
  border: 1px solid transparent;
  border-radius: 100px;
  background-color: var(--green);
  /* border: 1px solid #00FFA2; */
  box-shadow: 0 0 8px 0 var(--shadow-theme-color);
  color: var(--dark-blue);
}
</style>
