<template>
  <div class="portfolio-settings">
    <h1 class="settings-title">Settings</h1>
    <div class="currency-selector settings-item">
      <div class="setting-info">
        <h3>Fiat Currency</h3>
        <p>Change the default FIAT currency used in your portfolio.</p>
      </div>
      <div class="settings-action">
        <select class="currency-options" v-model="currency">
          <option v-for="currency in availableCurrencies" :key="currency">{{ currency }}</option>
        </select>
      </div>
    </div>
    <div class="toggle-dark-mode settings-item">
      <div class="setting-info">
        <h3>Toggle Dark Mode</h3>
        <p>Change the default FIAT currency used in your portfolio.</p>
      </div>
      <div class="settings-action">
        <switches v-model="darkModeEnabled" theme="custom" color="green"></switches>
      </div>
    </div>
    <div class="clear-option settings-item">
      <div class="setting-info">
        <h3>Clear All Data</h3>
        <p>Clear all of the data in your portfolio. This will remove all of your transactions and cannot be undone.</p>
      </div>
      <div class="settings-action">
        <button @click.prevent="showClearConfirmation = true">
          <div v-if="!loading">Clear Data</div>
          <div v-else><spinner line-fg-color="#004466" line-bg-color="#00000000" size="small"></spinner></div>
        </button>
      </div>
    </div>
    <div class="about-title" v-bind:class="{ visible: isVisible }" @click="showAbout">
      <h4>About</h4>
      <img src="../assets/icons/chevron.svg"/>
    </div>
    <div class="about settings-item about-item">
      <div class="setting-info">
        <h3>Lio</h3>
        <p>Lio is a cryptocurrency portfolio built with Vue.js and Blockstack, built by Tap Five.</p>
      </div>
    </div>
    <div class="price-data settings-item about-item">
      <div class="setting-info">
        <h3>Price Data</h3>
        <p>Lio pulls cryptocurrency prices from <a href="https://www.cryptocompare.com/">CryptoCompare</a> and fiat exchange rates from <a href="http://fixer.io/">Fixer</a>.</p>
      </div>
    </div>

    <confirmation-modal
      v-if="showClearConfirmation"
      @close="showClearConfirmation = false"
      @confirm="clearData()">
      <h3 slot="header">Clear Data?</h3>
      <div slot="body">Are you sure you want to delete all your stored data? This cannot be undone.</div>
    </confirmation-modal>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Switches from "vue-switches";
import Spinner from "vue-simple-spinner";
import ConfirmationModal from "./modal/ConfirmationModal.vue";
import CurrencyUtil from "../ts/helpers/currency-util";
import { AppData } from "../ts/app-data";

export default Vue.extend({
  name: "portfolio-settings",

  components: {
    ConfirmationModal,
    Spinner,
    Switches
  },

  data() {
    return {
      availableCurrencies: CurrencyUtil.getAll(),
      currency: AppData.settingsManager.getSelectedCurrency(),
      darkModeEnabled: AppData.settingsManager.isDarkModeEnabled(),
      isVisible: false,
      loading: false,
      showClearConfirmation: false
    };
  },

  watch: {
    currency: function(selectedCurrency) {
      AppData.settingsManager.setSelectedCurrency(selectedCurrency);
    },

    darkModeEnabled: function(enabled: boolean) {
      AppData.settingsManager.setDarkModeEnabled(enabled);
    }
  },

  methods: {
    clearData: function() {
      this.showClearConfirmation = false;
      this.loading = true;
      AppData.storageManager.clearData().then(response => {
        this.loading = false;
      });
    },
    showAbout: function() {
      this.isVisible = !this.isVisible;
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
  grid-template-rows: 96px 120px 120px 120px 96px min-content min-content;
  grid-gap: 16px;
  grid-template-areas:
    ". settings-title      settings-title       settings-title      settings-title   ."
    ". currency-selector   currency-selector    currency-selector   .                ."
    ". toggle-dark-mode    toggle-dark-mode     toggle-dark-mode    .                ."
    ". clear-options       clear-options        clear-options       .                ."
    ". about-title         about-title          about-title         about-title      ."
    ". about               about                about               .                ."
    ". price-data          price-data           price-data          .                .";
}

@media screen and (max-width: 1100px) {
  .portfolio-settings {
    grid-template-columns:
      0.5fr minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr)
      minmax(50px, 1fr) 0.5fr;
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

.settings-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 69, 102, 0.1);
}

.currency-selector {
  grid-area: currency-selector;
}

.clear-option {
  grid-area: clear-options;
}

.toggle-dark-mode {
  grid-area: toggle-dark-mode;
}

.about-title {
  grid-area: about-title;
  margin-top: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & h4 {
    margin-right: 8px;
  }
}

.about {
  grid-area: about;
}

.price-data {
  grid-area: price-data;
  & a {
    color: var(--link-theme-color);
    text-decoration-skip-ink: auto;
  }
}

.about-title ~ .about-item {
  opacity: 0;
  height: 0px;
  transform: translateY(-4px);
  transition: all 0.25s var(--ease-out-cubic);
}

.about-title.visible ~ .about-item {
  opacity: 100;
  height: auto;
  transform: translateY(0px);
}

.setting-info {
  width: 720px;
  padding-right: 48px;
  & h3 {
    margin: 8px 0px;
  }
  & p {
    margin: 8px 0px;
  }
}
</style>
