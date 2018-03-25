<template>
  <div class="portfolio-settings">
    <h1 class="settings-title">Settings</h1>
    <div class="currency-selector settings-item">
      <div class="setting-info">
        <h3>Fiat Currency</h3>
        <p>Change the default fiat currency used in your portfolio.</p>
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
        <p>Enable a dark color theme for Lio's interface.</p>
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
    <div class="about-title" v-bind:class="{ visible: isAboutVisible }" @click="toggleAbout">
      <h4>About</h4>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve" width="16" height="16"><g class="nc-icon-wrapper" fill="#004466"><polygon fill="#004466" points="8,11.4 2.6,6 4,4.6 8,8.6 12,4.6 13.4,6 "></polygon></g></svg>
    </div>
    <div class="about settings-item about-item">
      <div class="about-info">
        <h3>Lio</h3>
        <p>v1.0.1</p>
        <p>Made by the designer/developer duo at Tap Five.</p>
        <p>Lio is open source. Check us out on <a target="_blank" href="https://github.com/tapfive/lio">GitHub</a>.</p>
      </div>
    </div>
    <div class="acknowledgements settings-item about-item">
      <div class="about-info">
        <h3>Acknowledgements</h3>
        <h4>Price Data</h4>
        <p>Lio pulls cryptocurrency prices from <a target="_blank" href="https://www.cryptocompare.com/">CryptoCompare</a> and fiat exchange rates from <a target="_blank" href="http://fixer.io/">Fixer</a>.</p>
        <h4>Coin Icons</h4>
        <p>Lio's coin icons are from <a target="_blank" href="https://github.com/allienworks/cryptocoins">Cryptocoins</a> by Martin Allien.</p>
        <h4>Open Source Licenses</h4>
        <p><a target="_blank" href="/licenses.html">Click here</a> to see the list of open source licenses.</p>
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
      isAboutVisible: false,
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

    toggleAbout: function() {
      this.isAboutVisible = !this.isAboutVisible;
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
    ". acknowledgements    acknowledgements     acknowledgements    .                .";
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
  border-bottom: 1px solid var(--div-line-theme-color);
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
  z-index: 2;
  & h4 {
    margin-right: 8px;
  }
  & svg {
    transition: all 0.25s var(--ease-in-out-cubic);

    & .nc-icon-wrapper > path {
      fill: var(--icon-theme-color);
    }

    & .nc-icon-wrapper > ellipse {
      fill: var(--icon-theme-color);
    }

    & .nc-icon-wrapper > polygon {
      fill: var(--icon-theme-color);
    }
  }
}

.about {
  grid-area: about;
  & a {
    color: var(--link-theme-color);
    text-decoration-skip-ink: auto;
  }
}

.acknowledgements{
  grid-area: acknowledgements;
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

.about-title.visible {
  & svg {
    transform: rotate(-180deg);
  }
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

.about-info {
  width: 720px;
  padding-right: 48px;
  & h3 {
    margin: 8px 0px;
  }
  & h4 {
    margin: 12px 0px;
  }
  & p {
    margin: 10px 0px;
  }
}
</style>
