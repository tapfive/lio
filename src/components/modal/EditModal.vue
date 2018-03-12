<template>
  <transition name="modal">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <h3 v-if="isAddition">EDIT ADD TRANSACTION</h3>
            <h3 v-else>EDIT SUBTRACT TRANSACTION</h3>
          </div>

          <div class="modal-body">
            <h2>{{ coin.name }}</h2>

            <div class="modal-input" :class="{'input-error': !amountIsValid}">
              <label for="coin-amount">Coin Amount</label>
              <input id="coin-amount" v-model="amount" placeholder="0.00000000">
              <span class="error-message" v-if="!amountIsValid">Please enter a valid coin amount</span>
            </div>

            <div class="modal-input" :class="{'input-error': !priceIsValid}">
              <label for="price">Price Per Coin ({{ currency }})</label>
              <input id="price" v-model="price">
              <span class="error-message" v-if="!priceIsValid">Please enter a valid price</span>
            </div>

            <div class="modal-input">
              <label v-if="isAddition" for="date">Date Purchased</label>
              <label v-else for="date">Date Sold</label>
              <datetime
                id="date"
                input-class="date-input"
                v-model="date"
                type="date"
                input-format="MMMM DD, YYYY"
                :placeholder="'mm/dd/yyyy'">
              </datetime>
              <span class="error-message" v-if="!dateIsValid">Please enter a valid date</span>
            </div>

          </div>

          <div class="modal-footer" >
            <button class="modal-default-button" :disabled="!inputIsValid" @click="editTransaction()">
              <div v-if="!loading">Update</div>
              <div v-else><spinner line-fg-color="#004466" line-bg-color="#00000000" size="small"></spinner></div>
            </button>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import Spinner from "vue-simple-spinner";
import CoinUtil from "../../ts/helpers/coin-util";
import TransactionHelper from "../../ts/helpers/transaction-helper";
import { AppData } from "../../ts/app-data";
import { DateTime } from "luxon";
import { Transaction } from "../../ts/models/transaction";
import { Coin } from "../../ts/models/coin";
import { TransactionHistory } from "../../ts/models/transaction-history";

export default Vue.extend({
  name: "edit-modal",

  components: {
    Spinner
  },

  props: {
    transactionHistory: {
      required: true,
      type: TransactionHistory
    }
  },

  data() {
    return {
      amount: Math.abs(this.transactionHistory.transaction.amount),
      amountIsValid: true,
      coin: this.transactionHistory.coin,
      currency: "USD",
      date: this.transactionHistory.transaction.date,
      dateIsValid: true,
      isAddition: this.transactionHistory.transaction.amount > 0,
      loading: false,
      maxAmount: 0,
      price: this.transactionHistory.transaction.price,
      priceIsValid: true,
      maxDate: DateTime.local()
    };
  },

  mounted() {
    this.currency = AppData.settingsManager.getSelectedCurrency();
    this.price = TransactionHelper.getPriceForCurrency(this.transactionHistory.transaction, this.currency);

    AppData.transactionManager
      .getBalanceForCoin(this.coin)
      .then(balance => {
        this.maxAmount = balance.amount;
      })
      .catch(error => {
        console.log(error);
      });
  },

  watch: {
    amount: function(val) {
      let validNumber = this.isValidNumberInput(val);

      if (this.isAddition) {
        this.amountIsValid = validNumber;
      } else {
        let amountAvailable = this.maxAmount - val >= 0;
        this.amountIsValid = validNumber && amountAvailable;
      }
    },

    price: function(val) {
      this.priceIsValid = this.isValidNumberInput(val);
    },

    date: function(val) {
      let currentDate = DateTime.local().valueOf();
      let selectedDate = DateTime.fromISO(val).valueOf();
      this.dateIsValid = selectedDate <= currentDate || val === "";
    }
  },

  computed: {
    inputIsValid: function(): boolean {
      return this.amountIsValid && this.dateIsValid && this.priceIsValid;
    }
  },

  methods: {
    close: function() {
      this.$emit("close");
    },

    editTransaction: function() {
      this.loading = true;

      let id = this.transactionHistory.transaction.id as number;
      let signedAmount = this.isAddition ? this.amount : this.amount * -1;

      AppData.transactionManager
        .updateTransaction(this.coin, this.currency, id, signedAmount, this.date, this.price)
        .then((successful: boolean) => {
          this.$emit("reload");
        })
        .catch((error: any) => {
          console.log(error);
          this.$emit("close");
        });
    },

    isValidNumberInput: function(val: string): boolean {
      // Number with optional decimals
      let regex = /^(\d+\.?\d*|\.\d+)$/;
      return regex.test(val) && Number(val) > 0;
    }
  }
});
</script>

<style scoped>
@import "../../css/modal.css";
</style>
