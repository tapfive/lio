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

export default Vue.extend({
  name: 'time-interval-picker',

  data () {
    return {
      intervals: ['1h', '12h', '1d', '1w', '1m', '3m', '6m', '1y', 'All'],
      selectedInterval: '1d'
    };
  },

  methods: {
    changeInterval(interval: string) {
      this.selectedInterval = interval;
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
