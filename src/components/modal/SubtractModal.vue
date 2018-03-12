<template>
  <transition name="modal">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <h3>SUBTRACT BALANCE</h3>
          </div>

          <div class="modal-body">
            <v-autocomplete
              :input-attrs="{id:'coin-autocomplete'}"
              :items="items"
              :min-len="0"
              :get-label="getLabel"
              :component-item="template"
              v-model="selectedItem"
              :placeholder="'Coin'"
              @update-items="updateItems">
            </v-autocomplete>

            <div class="modal-input" :class="{'input-error': !amountIsValid}">
              <label for="coin-amount">Coin Amount</label>
              <input id="coin-amount" v-model="amount" placeholder="0.00000000">
              <span class="error-message" v-if="!amountIsValid">Please enter a valid coin amount</span>
            </div>

            <div class="modal-input">
              <label for="date">Date Sold</label>
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
            <button class="modal-default-button" :disabled="!inputIsValid" @click="addTransaction()">
              <div v-if="!loading">- Subtract</div>
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
import TransactionCoinItem from "./TransactionCoinItem.vue";
import CoinUtil from "../../ts/helpers/coin-util";
import { AppData } from "../../ts/app-data";
import { Coin } from "../../ts/models/coin";
import { DateTime } from "luxon";
import { StringMap } from "../../ts/string-map";

export default Vue.extend({
  name: "subtract-modal",

  components: {
    Spinner
  },

  data() {
    return {
      amount: "",
      amountChecked: false,
      amountIsValid: true,
      coinIsValid: false,
      currency: "USD",
      currentBalances: <StringMap<number>>{},
      currentCoins: <Coin[]>[],
      date: DateTime.local().toISODate(),
      dateIsValid: true,
      items: <Coin[]>[],
      loading: false,
      selectedItem: new Coin("", ""),
      template: TransactionCoinItem
    };
  },

  mounted() {
    AppData.transactionManager
      .getAllBalances()
      .then(balanceData => {
        for (let key in balanceData) {
          let value = balanceData[key];
          this.currentCoins.push(value.coin);
          this.currentBalances[value.coin.symbol] = value.amount;
        }
      })
      .catch(error => {
        console.log(error);
      });

    this.currency = AppData.settingsManager.getSelectedCurrency();
  },

  watch: {
    amount: function(val) {
      let validNumber = this.isValidNumberInput(val);
      let amountAvailable = this.currentBalances[this.selectedItem.symbol] - val >= 0;
      this.amountIsValid = validNumber && amountAvailable;
      this.amountChecked = true;
    },

    selectedItem: function(val) {
      // Fix this later
      this.coinIsValid = val instanceof Coin || val instanceof Object;
    },

    date: function(val) {
      let currentDate = DateTime.local().valueOf();
      let selectedDate = DateTime.fromISO(val).valueOf();
      this.dateIsValid = selectedDate <= currentDate || val === "";
    }
  },

  computed: {
    inputIsValid: function(): boolean {
      return this.coinIsValid && this.dateIsValid && this.amountIsValid && this.amountChecked;
    }
  },

  methods: {
    close: function() {
      this.$emit("close");
    },

    addTransaction: function() {
      this.loading = true;
      AppData.transactionManager
        .storeTransaction(this.selectedItem, Number(this.amount) * -1, this.currency, this.date)
        .then(response => {
          this.$emit("reload");
        })
        .catch(error => {
          console.log(error);
          this.$emit("close");
        });
    },

    getLabel(item: Coin) {
      return item.name;
    },

    updateItems(text: string) {
      this.items = this.currentCoins.filter(item => {
        return new RegExp(text.toLowerCase()).test(item.symbol.toLowerCase() + item.name.toLowerCase());
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
