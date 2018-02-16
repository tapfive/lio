<template>
  <div class="portfolio-history">
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
        <li>Price</li>
        <li>Fees</li>
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
        <h4 v-html="formatPrice(historyItem.transaction)"></h4>
        <h4 v-html="formatFees(historyItem.transaction)"></h4>
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
</template>

<script lang="ts">
import Vue from 'vue';
import { AppData } from '../ts/app-data';
import { Coin } from '../ts/models/coin';
import { DateTime } from 'luxon';
import { Transaction } from '../ts/models/transaction';
import { TransactionHistory } from '../ts/models/transaction-history';

export default Vue.extend({
  name: 'portfolio-history',

  data () {
    return {
      appData: AppData.getInstance(),
      availableCoins: <Coin[]>[],
      currencySymbol: '$',
      selectedCoins: <Coin[]>[],
      selectedCurrency: 'USD',
      transactionHistory: <TransactionHistory[]> []
    };
  },

  mounted () {
    this.currencySymbol = this.appData.settingsManager.getSelectedCurrencySymbol();
    this.selectedCurrency = this.appData.settingsManager.getSelectedCurrency();
    this.getTransactionHistory();
  },

  methods: {
    getTransactionHistory: function () {
      this.appData.transactionManager.getAllTransactions()
      .then (response => {
        this.transactionHistory = response;

        for (let historyItem of response) {
          if (this.availableCoins.indexOf(historyItem.coin) < 0) {
            this.availableCoins.push(historyItem.coin);
          }
        }
      })
      .catch (error => {
        console.log(error);
      });
    },

    selectCoin: function (coin: Coin) {
      let index = this.selectedCoins.indexOf(coin);
      if (index > -1) {
        this.selectedCoins.splice(index, 1);
      } else {
        this.selectedCoins.push(coin);
      }
    },

    showCoin: function (coin: Coin) {
      if (this.selectedCoins.length === 0) {
        return true;
      } else {
        return this.isSelected(coin);
      }
    },

    isSelected: function (coin: Coin) {
      let index = this.selectedCoins.indexOf(coin);
      if (index > -1) {
        return true;
      } else {
        return false;
      }
    },

    formatAmount: function (amount: number): string {
      if (amount > 0) {
        return '+' + amount.toString();
      } else {
        return amount.toString();
      }
    },

    formatDate: function (date: string): string {
      if (date === '') {
        return '';
      }

      return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED);
    },

    formatPrice: function (transaction: Transaction): string {
      if (transaction.amount > 0) {
        let adjustedPrice = transaction.price * transaction.exchangeRates[this.selectedCurrency];
        return this.currencySymbol + adjustedPrice.toFixed(2);
      } else {
        return '-';
      }
    },

    formatFees: function (transaction: Transaction): string {
      let adjustedFees = transaction.fees * transaction.exchangeRates[this.selectedCurrency];
      return this.currencySymbol + adjustedFees.toFixed(2);
    }
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
  grid-template-rows: 96px 32px 96px 48px min-content;
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

.toggles-label {
  grid-area: history-toggle-label;
}

.history-toggles-wrap {
  grid-area: history-toggles;
  grid-template-columns: 1fr 1fr 1fr 1fr 24px;
  grid-row: auto;
  display: grid;
}

.history-toggles {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self:center;
  justify-self: center;

  & button {
    width: 72px;
    height: 72px;
    border-radius: 100px;
    font-size: 18px;
    background-color: #FFFFFF;
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
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 24px;
      padding: 0px 4px;
    }
}

.selected {
  border: 3px  solid var(--green);
}

.history-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 24px;
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 24px;
  height: 54px;
  border-bottom: 1px solid rgba(0,69,102,0.1);
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
</style>
