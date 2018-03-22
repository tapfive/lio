<template>
  <div :class="{ addition: isAddition, subtraction: !isAddition }" class="history-item">
    <div class="coin-info">
      <div class="coin-name">
        <i :class="item.coin.symbol" class="cc"></i>
        {{ item.coin.symbol }}
      </div>
    </div>
    <h4>{{ formatAmount(item.transaction.amount) }}</h4>
    <h4>{{ formatDate(item.transaction.date) }}</h4>
    <h4 v-html="formatOriginalPrice(item.transaction)"></h4>
    <h4 v-html="formatCurrentPrice(item)"></h4>
    <h4 :class="{ positive: isPositive, negative: !isPositive }">{{ formatPriceDifference(item) }}</h4>
    <a href="#" @click="edit">
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
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TransactionHelper from "../../ts/helpers/transaction-helper";
import { DateTime } from "luxon";
import { Transaction } from "../../ts/models/transaction";
import { TransactionHistory } from "../../ts/models/transaction-history";

export default Vue.extend({
  name: "history-item",

  props: {
    currency: {
      required: true,
      type: String
    },
    currencySymbol: {
      required: true,
      type: String
    },
    item: {
      required: true,
      type: TransactionHistory
    }
  },

  data() {
    return {
      isAddition: this.item.transaction.amount > 0,
      showEditModal: false
    };
  },

  computed: {
    isPositive: function(): Boolean {
      return this.calculatePriceDifference(this.item) >= 0;
    }
  },

  methods: {
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
        let price = TransactionHelper.getPriceForCurrency(transaction, this.currency);

        // Get value based on transaction amount
        let transactionValue = price * transaction.amount;

        return this.currencySymbol + transactionValue.toFixed(2);
      } else {
        return "-";
      }
    },

    formatCurrentPrice: function(history: TransactionHistory): string {
      if (history.transaction.amount > 0 && history.currentPrice[this.currency] != null) {
        // Get price in correct currency
        let price = history.currentPrice[this.currency];

        // Get value based on transaction amount
        let transactionValue = price * history.transaction.amount;

        return this.currencySymbol + transactionValue.toFixed(2);
      } else {
        return "-";
      }
    },

    formatPriceDifference: function(history: TransactionHistory): string {
      if (history.transaction.amount > 0 && history.currentPrice[this.currency] != null) {
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
      let original = TransactionHelper.getPriceForCurrency(history.transaction, this.currency);
      let current = history.currentPrice[this.currency];
      return (current - original) / original * 100;
    },

    edit: function() {
      this.$emit("edit", this.item);
    }
  }
});
</script>

<style scoped>
.history-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 24px;
  height: 56px;
  border-bottom: 1px solid rgba(0, 69, 102, 0.1);
  padding: 0px 16px;
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

.addition {
  border-left: solid 3px var(--green);
}

.subtraction {
  border-left: solid 3px var(--red);
}

.positive {
  color: var(--dark-green);
}

.negative {
  color: var(--dark-red);
}
</style>
