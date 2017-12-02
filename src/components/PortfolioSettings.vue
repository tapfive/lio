<template>
  <div class="portfolio-settings">
    <h1 class="settings-title">Settings</h1>
    <div class="currency-selector">
      <h3>FIAT</h3>
      <select name="${2}" id="${4}" class="currency-options">fiat</select>
    </div>
    <div class="clear-option">
      <h3>Clear All Data</h3>
      <button>Clear Data</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'portfolio-settings',

  data () {
    return {

    };
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
  grid-template-rows: 96px 96px 120px  120px;
  grid-gap: 16px;
  grid-template-areas:
   ". . . . . ."
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
