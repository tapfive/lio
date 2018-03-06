<template>
  <div class="portfolio-history">

    <div v-if="loadedStorage">

      <div class="empty-state" v-if="isEmpty">
        <h1>There are no transactions to show.</h1>
        <h3>Add a balance to get started.</h3>
        <svg class="empty-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve" width="16" height="16"><g class="nc-icon-wrapper" fill="#00334c"><polygon fill="#00334c" points="14.7,9.3 13.3,7.9 9,12.2 9,0 7,0 7,12.2 2.7,7.9 1.3,9.3 8,16 "></polygon></g></svg>
      </div>

      <div class="history-content" v-else>

        <h1 class="history-title">Transaction History</h1>
        <h3 class="toggles-label">Toggle Coins</h3>
        <div class="history-toggles-wrap">
          <div class="history-toggles" v-for="coin in availableCoins" :key="coin.symbol">
            <button :class="{ selected: isSelected(coin) }" @click="selectCoin(coin)">{{ coin.symbol }}</button>
          </div>
        </div>
        <div class="column-labels">
          <ul>
            <li>Coin</li>
            <li>Transaction</li>
            <li>Date</li>
            <li>Value at Transaction Date</li>
            <li>Value Now</li>
            <li>Value Change</li>
          </ul>
        </div>
        <div class="history-container">
          <div class="history-item" v-for="historyItem in transactionHistory" :key="historyItem.index" v-if="showCoin(historyItem.coin)">
            <div class="coin-info">
              <div class="coin-name">
                <i :class="historyItem.coin.symbol" class="cc"></i>
                {{ historyItem.coin.symbol }}
              </div>
            </div>
            <h4>{{ formatAmount(historyItem.transaction.amount) }}</h4>
            <h4>{{ formatDate(historyItem.transaction.date) }}</h4>
            <h4 v-html="formatOriginalPrice(historyItem.transaction)"></h4>
            <h4 v-html="formatCurrentPrice(historyItem)"></h4>
            <h4>{{ formatPriceDifference(historyItem) }}</h4>
            <svg width="16px" height="4px" viewBox="0 0 16 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="History---Light" stroke="none" stroke-width="1" fill="none" transform="translate(-1177.000000, -593.000000)" fill-opacity="0.24">
                    <g id="Edit-Menu" transform="translate(1119.000000, 578.000000)" fill="#004466">
                        <g id="menu-dots" transform="translate(58.000000, 15.000000)">
                            <circle id="Oval" cx="8" cy="2" r="2"></circle>
                            <circle id="Oval" cx="2" cy="2" r="2"></circle>
                            <circle id="Oval" cx="14" cy="2" r="2"></circle>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
        </div>

      </div>

    </div>

    <div class="loading-container" v-else>
      <spinner size="large" message="Loading..."></spinner>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Spinner from "vue-simple-spinner";
import { AppData } from "../ts/app-data";
import { Coin } from "../ts/models/coin";
import { DateTime } from "luxon";
import { Transaction } from "../ts/models/transaction";
import { TransactionHistory } from "../ts/models/transaction-history";

export default Vue.extend({
  name: "portfolio-history",

  components: {
    Spinner
  },

  props: {
    reloadData: {
      required: true,
      type: Boolean
    }
  },

  data() {
    return {
      appData: AppData.getInstance(),
      availableCoins: <Coin[]>[],
      currencySymbol: "$",
      loadedStorage: false,
      selectedCoins: <Coin[]>[],
      selectedCurrency: "USD",
      transactionHistory: <TransactionHistory[]>[]
    };
  },

  mounted() {
    this.currencySymbol = this.appData.settingsManager.getSelectedCurrencySymbol();
    this.selectedCurrency = this.appData.settingsManager.getSelectedCurrency();
    this.getTransactionHistory();
  },

  watch: {
    reloadData: function(reload: boolean) {
      if (reload) {
        this.$emit("update:reload-data", false);
        this.loadedStorage = false;
        this.getTransactionHistory();
      }
    }
  },

  computed: {
    isEmpty: function(): Boolean {
      return this.transactionHistory.length === 0;
    }
  },

  methods: {
    getTransactionHistory: function() {
      this.appData.transactionManager
        .getAllTransactions()
        .then(response => {
          this.transactionHistory = response;
          this.loadedStorage = true;

          for (let historyItem of response) {
            if (this.availableCoins.indexOf(historyItem.coin) < 0) {
              this.availableCoins.push(historyItem.coin);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    selectCoin: function(coin: Coin) {
      let index = this.selectedCoins.indexOf(coin);
      if (index > -1) {
        this.selectedCoins.splice(index, 1);
      } else {
        this.selectedCoins.push(coin);
      }
    },

    showCoin: function(coin: Coin) {
      if (this.selectedCoins.length === 0) {
        return true;
      } else {
        return this.isSelected(coin);
      }
    },

    isSelected: function(coin: Coin) {
      let index = this.selectedCoins.indexOf(coin);
      if (index > -1) {
        return true;
      } else {
        return false;
      }
    },

    formatAmount: function(amount: number): string {
      if (amount > 0) {
        return "+ " + amount.toString();
      } else {
        return "- " + Math.abs(amount).toString();
      }
    },

    formatDate: function(date: string): string {
      if (date === "") {
        return "";
      }

      return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED);
    },

    formatOriginalPrice: function(transaction: Transaction): string {
      if (transaction.amount > 0) {
        // Get price in correct currency
        let price = transaction.price * transaction.exchangeRates[this.selectedCurrency];

        // Get value based on transaction amount
        let transactionValue = price * transaction.amount;

        return this.currencySymbol + transactionValue.toFixed(2);
      } else {
        return "-";
      }
    },

    formatCurrentPrice: function(history: TransactionHistory): string {
      if (history.transaction.amount > 0 && history.currentPrice[this.selectedCurrency] != null) {
        // Get price in correct currency
        let price = history.currentPrice[this.selectedCurrency];

        // Get value based on transaction amount
        let transactionValue = price * history.transaction.amount;

        return this.currencySymbol + transactionValue.toFixed(2);
      } else {
        return "-";
      }
    },

    formatPriceDifference: function(history: TransactionHistory): string {
      if (history.transaction.amount > 0 && history.currentPrice[this.selectedCurrency] != null) {
        let percentChange = this.calculatePriceDifference(history);

        if (percentChange > 0) {
          return "+ " + percentChange.toFixed(2) + "%";
        } else {
          return "- " + Math.abs(percentChange).toFixed(2) + "%";
        }
      } else {
        return "-";
      }
    },

    calculatePriceDifference: function(history: TransactionHistory): number {
      let original = history.transaction.price * history.transaction.exchangeRates[this.selectedCurrency];
      let current = history.currentPrice[this.selectedCurrency];
      return (current - original) / original * 100;
    }
  }
});
</script>

<style scoped>
.history-content {
  min-height: 100vh;
  background-color: var(--view-bg-theme-color);
  background-image: var(--view-bg-theme-gradient);
  display: grid;
  grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
  grid-template-rows: 96px 32px min-content 48px min-content;
  grid-auto-rows: 96px;
  grid-gap: 16px;
  grid-template-areas:
    ". history-title     history-title     history-title     history-title   ."
    ". history-toggle-label . . . ."
    ". history-toggles   history-toggles   history-toggles   history-toggles ."
    ". history-labels    history-labels    history-labels    history-labels  ."
    ". transactions      transactions      transactions      transactions    .";
}

@media screen and (max-width: 1100px) {
  .portfolio-history {
    grid-template-columns:
      0.5fr minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr)
      minmax(50px, 1fr) 0.5fr;
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

.toggles-label {
  grid-area: history-toggle-label;
}

.history-toggles-wrap {
  grid-area: history-toggles;
  display: grid;
  grid-template-columns: 96px 96px 96px 96px 96px 96px 96px;
  grid-template-rows: 96px;
  grid-auto-rows: 96px;
  grid-gap: 16px;
}

.history-toggles {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-self: center;
  margin-top: 16px;
  margin-bottom: 16px;

  & button {
    width: 72px;
    height: 72px;
    border-radius: 100px;
    font-size: 18px;
    background-color: var(--card-bg-theme-color);
    color: var(--font-theme-color);
  }
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 24px;
    padding: 0px 4px;
  }
}

.selected {
  border: 3px solid var(--green);
}

.history-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 24px;
  grid-auto-rows: 54px;
  align-items: center;
  border-radius: 6px;
  text-align: left;
  background-color: var(--card-bg-theme-color);
  box-shadow: 0 2px 8px 0 var(--shadow-theme-color);
  grid-area: transactions;
  padding-bottom: 4px;
  overflow: hidden;
}

.history-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 24px;
  height: 54px;
  border-bottom: 1px solid rgba(0, 69, 102, 0.1);
  padding: 4px 16px;
  align-items: center;
  text-align: left;
  grid-column: 1 / -1;

  & > h4 {
    font-weight: 400;
  }
}

.coin-name > i {
  margin-right: 4px;
}

.loading-container {
  position: fixed;
  top: 50%;
  left: 50%;
}

.empty-state {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.5;

  & h3 {
    margin-top: -8px;
    font-weight: 400;
  }

  & .empty-arrow {
    margin-top: 24px;
    transform: rotate(45deg) scale(2);
    transition: all 0.5s var(--ease-in-out-cubic);
  }

  & .empty-arrow:hover {
    transform: rotate(405deg) scale(2);
  }
}
</style>
