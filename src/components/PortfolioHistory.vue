<template>
  <div class="portfolio-history">
    <h1 class="history-title">Transaction History</h1>
    <h3 class="toggles-label">Toggle Coins</h3>
    <div class="history-toggles-wrap">
      <div class="history-toggles" v-for="historyItem in transactionHistory" :key="historyItem.coin.symbol">
        <button :class="{ selected: isSelected(historyItem.coin) }" @click="selectCoin(historyItem.coin)">{{ historyItem.coin.symbol }}</button>
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
        <h4>{{ formatPrice(historyItem.transaction.price, historyItem.transaction.amount) }}</h4>
        <h4>{{ formatFees(historyItem.transaction.fees) }}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { AppData } from '../ts/app-data';
import { Coin } from '../ts/models/coin';
import { DateTime } from 'luxon';
import { TransactionHistory } from '../ts/models/transaction-history';

export default Vue.extend({
  name: 'portfolio-history',

  data () {
    return {
      appData: AppData.getInstance(),
      currencySymbol: '$',
      selectedCoins: <Coin[]>[],
      transactionHistory: <TransactionHistory[]> []
    };
  },

  mounted () {
    this.currencySymbol = this.appData.getSelectedCurrencySymbol(),
    this.getTransactionHistory();
  },

  methods: {
    getTransactionHistory: function () {
      this.appData.storageManager.getAllTransactions()
      .then (response => {
        this.transactionHistory = response;
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

    formatPrice: function (price: number, amount: number): string {
      if (amount > 0) {
        return this.currencySymbol + price.toFixed(2);
      } else {
        return '-';
      }
    },

    formatFees: function (fees: number): string {
      return this.currencySymbol + fees.toFixed(2);
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      padding: 0px 4px;
    }
}

.selected {
  border: 3px  solid var(--green);
}

.history-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: 54px;
  border-bottom: 1px solid rgba(0,69,102,0.1);
  padding: 4px 16px;
  align-items: center;
  text-align: left;
  grid-column: 1 / -1;
}
</style>
