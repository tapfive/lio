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
          <div class="history-item-wrapper" v-for="transaction in transactionHistory" :key="transaction.index" v-if="showCoin(transaction.coin)">
            <history-item
              :currency="selectedCurrency"
              :currency-symbol="currencySymbol"
              :item="transaction"
              @edit="val => editTransaction(val)">
            </history-item>
          </div>
        </div>

      </div>

      <edit-modal
        v-if="showEditModal"
        :transaction-history="currentEdit"
        @close="showEditModal = false"
        @reload="reloadFromEdit">
      </edit-modal>

    </div>

    <div class="loading-container" v-else>
      <spinner size="large" message="Loading..."></spinner>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EditModal from "../modal/EditModal.vue";
import HistoryItem from "./HistoryItem.vue";
import Spinner from "vue-simple-spinner";
import { AppData } from "../../ts/app-data";
import { Coin } from "../../ts/models/coin";
import { DateTime } from "luxon";
import { Transaction } from "../../ts/models/transaction";
import { TransactionHistory } from "../../ts/models/transaction-history";

export default Vue.extend({
  name: "portfolio-history",

  components: {
    EditModal,
    HistoryItem,
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
      availableCoins: <Coin[]>[],
      currencySymbol: "$",
      currentEdit: TransactionHistory.getEmpty(),
      loadedStorage: false,
      selectedCoins: <Coin[]>[],
      selectedCurrency: "USD",
      showEditModal: false,
      transactionHistory: <TransactionHistory[]>[]
    };
  },

  mounted() {
    this.currencySymbol = AppData.settingsManager.getSelectedCurrencySymbol();
    this.selectedCurrency = AppData.settingsManager.getSelectedCurrency();
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
      AppData.transactionManager
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

    editTransaction: function(transaction: TransactionHistory) {
      this.currentEdit = transaction;
      this.showEditModal = true;
    },

    reloadFromEdit: function() {
      this.showEditModal = false;
      this.loadedStorage = false;
      this.getTransactionHistory();
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

.history-item-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 24px;
  grid-column: 1 / -1;
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
