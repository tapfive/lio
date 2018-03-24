<template>
  <div :class="{ addition: isAddition, subtraction: !isAddition }" class="history-item">
    <div class="coin-info">
      <div class="coin-name">
        <div class="icon-wrapper">
        <i :class="item.coin.symbol" class="cc"></i>
        </div>
        {{ item.coin.symbol }}
      </div>
    </div>
    <h4>{{ formatAmount(item.transaction.amount) }}</h4>
    <h4>{{ formatDate(item.transaction.date) }}</h4>
    <h4 v-html="formatOriginalPrice(item.transaction)"></h4>
    <h4 v-html="formatCurrentPrice(item)"></h4>
    <h4 :class="{ positive: isPositive, negative: !isPositive }">{{ formatPriceDifference(item) }}</h4>
    <div class="menu-wrapper">
      <div class="edit-menu" v-bind:class="{ visible: isMenuVisible }" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4"><g fill="#046" fill-opacity=".24"><circle cx="8" cy="2" r="2"/><circle cx="2" cy="2" r="2"/><circle cx="14" cy="2" r="2"/></g></svg>
      </div>
      <div class="item-menu">
        <div @click="edit">
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>pen-01</title><g fill="#046" fill-opacity=".24" fill-rule="nonzero"><path d="M8.1 3.5L.3 11.3c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1h3c.3 0 .5-.1.7-.3l7.8-7.8-4.4-4.4zM15.7 3.3l-3-3c-.4-.4-1-.4-1.4 0L9.5 2.1l4.4 4.4 1.8-1.8c.4-.4.4-1 0-1.4z"/></g></svg>
          <span>Edit</span>
        </div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>trash-simple</title><g fill="#046" fill-rule="nonzero" fill-opacity=".24"><path d="M5 7h2v6H5zM9 7h2v6H9z"/><path d="M12 1c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v2H0v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V5h1V3h-4V1zM6 2h4v1H6V2zm7 3v9H3V5h10z"/></g></svg>
          <span>Delete</span>
        </div>
      </div>
    </div>

    </menu>
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
      isMenuVisible: false,
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
    },

    toggleMenu: function() {
      this.isMenuVisible = !this.isMenuVisible;
    }
  }
});
</script>

<style scoped>
.history-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 24px;
  height: 56px;
  border-bottom: 1px solid var(--div-line-theme-color);
  padding: 0px 16px;
  align-items: center;
  text-align: left;
  grid-column: 1 / -1;

  & > h4 {
    font-weight: 400;
  }
}

.coin-name > .icon-wrapper > i {
  line-height: 0px;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #fff;
  line-height: 0px;
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

.edit-menu {
  display: inline;
  cursor: pointer;
  & svg {
    & g {
      fill: var(--icon-theme-color);
    }
  }
}

.item-menu {
  position: absolute;
  display: inline;
  visibility: hidden;
  flex-direction: column;
  width: 96px;
  height: 0px;
  height: auto;
  border-radius: 6px;
  background-color: var(--card-bg-theme-color);
  box-shadow: 0 2px 8px 0 var(--shadow-theme-color);
  color: var(--font-theme-color);
  opacity: 0;
  transition: all 0.25s var(--ease-out-cubic);
  transform: translateY(24px);
  & :first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  & :last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  & div {
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    transition: all 0.25s var(--ease-out-cubic);
    & svg {
      & g {
        transition: all 0.25s var(--ease-out-cubic);
        fill: var(--icon-theme-color);
        fill-opacity: 1;
      }
    }
    & span {
      margin-left: 8px;
    }
  }
  & div:hover {
    background-color: var(--green);
    color: var(--dark-blue);
    & svg {
      & g {
        fill: var(--dark-blue);
        fill-opacity: 1;
      }
    }
  }
}

.edit-menu.visible ~ .item-menu {
  visibility: visible;
  height: auto;
  opacity: 100;
}
</style>
