<template>
  <div class="portfolio-history">
    <h1 class="history-title">Transaction History</h1>
    <div class="history-toggles">TogglyTogglyToggle</div>
    <div class="column-labels">
      <ul>
        <li>Coin</li>
        <li>Holdings</li>
        <li>Date</li>
        <li>Price</li>
        <li>Fees</li>
        <li>Adjustment</li>
      </ul>
    </div>
    <div class="history-container">
      <div class="history-item">
        <div class="coin-info">
          <div class="coin-logo">
            <i :class="coinName" class="cc"></i>
          </div>

          <div class="coin-name">
            {{ coinName }}
          </div>
        </div>
        <h4>Item</h4>
        <h4>Item</h4>
        <h4>Item</h4>
        <h4>Item</h4>
        <h4>Item</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'portfolio-history',

  data () {
    return {
      coinName: 'BTC'
    };
  }
});
</script>

<style scoped>
.portfolio-history {
  min-height: 100vh;
  background-color: var(--view-bg-theme-color);
  background-image: var(--view-bg-theme-gradient);
  display: grid;
  grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
  grid-template-rows: 96px 120px 48px 1fr;
  grid-gap: 16px;
  grid-template-areas:
    ". history-title     history-title     history-title     history-title   ."
    ". history-toggles   history-toggles   history-toggles   history-toggles ."
    ". history-labels    history-labels    history-labels    history-labels  ."
    ". transactions      transactions      transactions      transactions    .";
}

@media screen and (max-width: 1100px) {
  .portfolio-history {
    grid-template-columns: 0.5fr minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) 0.5fr;
  }
}

@media screen and (min-width: 2000px) {
  .portfolio-history {
    grid-template-columns: 1fr 360px 360px 360px 360px 1fr;
  }
}

.history-title {
  grid-area: history-title;
}

.history-toggles {
  grid-area: history-toggles;
}

.column-labels {
    grid-area: history-labels;
    align-self: end;
    margin-top: 12px;

    & ul {
      display: grid;
      list-style: none;
      text-align: left;
      font-weight: 600;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      padding: 0px 4px;
    }
}

.history-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 54px;
  align-items: center;
  border-radius: 6px;
  text-align: left;
  background-color: var(--card-bg-theme-color);
  box-shadow: 0 2px 8px 0 var(--shadow-theme-color);
  grid-area: transactions;
}

.history-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 54px;
  border-bottom: 1px solid rgba(0,69,102,0.1);
  align-items: center;
  text-align: left;
  grid-column: 1 / -1;
}
</style>
