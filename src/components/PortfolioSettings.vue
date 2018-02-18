<template>
  <div class="portfolio-settings">
    <h1 class="settings-title">Settings</h1>
    <div class="currency-selector">
      <h3>Fiat Currency</h3>
      <select class="currency-options" v-model="currency">
        <option v-for="currency in availableCurrencies" :key="currency">{{ currency }}</option>
      </select>
    </div>
    <div class="clear-option">
      <h3>Clear All Data</h3>
      <button @click.prevent="clearData()">
        <div v-if="!loading">Clear Data</div>
        <div v-else><spinner line-fg-color="#004466" line-bg-color="#00000000" size="small"></spinner></div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Spinner from 'vue-simple-spinner';
import CurrencyUtil from '../ts/currency-util';
import { AppData } from '../ts/app-data';

export default Vue.extend({
  name: 'portfolio-settings',

  components: {
    Spinner
  },

  data () {
    return {
      appData: AppData.getInstance(),
      availableCurrencies: CurrencyUtil.getAll(),
      currency: 'USD',
      loading: false
    };
  },

  mounted () {
    this.currency = this.appData.settingsManager.getSelectedCurrency();
  },

  watch: {
    currency: function(selectedCurrency) {
      this.appData.settingsManager.setSelectedCurrency(selectedCurrency);
    }
  },

  methods: {
    clearData: function() {
      this.loading = true;
      this.appData.storageManager.clearData()
      .then (response => {
        this.loading = false;
      });
    }
  }
});
</script>

<style scoped>
.portfolio-settings {
  min-height: 100vh;
  background-color: var(--view-bg-theme-color);
  background-image: var(--view-bg-theme-gradient);
  display: grid;
  grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
  grid-template-rows: 96px 120px  120px;
  grid-gap: 16px;
  grid-template-areas:
    ". settings-title     settings-title     settings-title     settings-title   ."
    ". currency-selector   .   clear-options  . ."
    ". .    .    .    .  .";
}

@media screen and (max-width: 1100px) {
  .portfolio-settings {
    grid-template-columns: 0.5fr minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) 0.5fr;
  }
}

@media screen and (min-width: 2000px) {
  .portfolio-settings {
    grid-template-columns: 1fr 360px 360px 360px 360px 1fr;
  }
}

button {
  width: 120px;
}

.settings-title {
  grid-area: settings-title;
}

.currency-selector {
  grid-area: currency-selector;
}

.clear-option {
  grid-area: clear-options;
}

</style>
