<template>
  <transition name="modal">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <h3 v-if="addingBalance">ADD BALANCE</h3>
            <h3 v-else>SUBTRACT BALANCE</h3>
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
              <input id="coin-amount" v-model="amount" placeholder="0.000000">
              <span class="error-message" v-if="!amountIsValid">Please enter a valid coin amount</span>
            </div>

            <div class="modal-input">
              <label v-if="addingBalance" for="date">Date Purchased</label>
              <label v-else for="date">Date Sold</label>
              <datetime
                id="date"
                input-class="date-input"
                v-model="date"
                type="date"
                input-format="MMMM DD, YYYY"
                :placeholder="'mm/dd/yyy'">
              </datetime>
            </div>

            <div v-if="addingBalance" class="modal-input" :class="{'input-error': !priceIsValid}">
              <label for="price">Price</label>
              <input id="price" v-model="price">
              <span class="error-message" v-if="!priceIsValid">Please enter a valid price</span>
            </div>

            <div class="modal-input" :class="{'input-error': !feeIsValid}">
              <label for="additional-fees">Additional Fees</label>
              <input id="additional-fees" v-model="fees">
              <span class="error-message" v-if="!feeIsValid">Please enter a valid amount or zero</span>
            </div>

            <div class="select-style">
              <label>Currency</label>
              <select v-model="currency">
                <option v-for="currency in availableCurrencies" :key="currency">{{ currency }}</option>
              </select>
            </div>

          </div>

          <div class="modal-footer" >
            <button v-if="addingBalance" class="modal-default-button" :disabled="!inputIsValid" @click="addTransaction()">
              <div v-if="!loading">+ Add</div>
              <div v-else><spinner line-fg-color="#004466" line-bg-color="#00000000" size="small"></spinner></div>
            </button>
            <button v-else class="modal-default-button" :disabled="!inputIsValid" @click="addTransaction()">
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
import Vue from 'vue';
import TransactionCoinItem from './TransactionCoinItem.vue';
import Spinner from 'vue-simple-spinner';
import CoinUtil from '../ts/coin-util';
import CurrencyUtil from '../ts/currency-util';
import { AppData } from '../ts/app-data';
import { Balance } from '../ts/models/balance';
import { Coin } from '../ts/models/coin';
import { DateTime } from 'luxon';
import { StringMap } from '../ts/string-map';

export default Vue.extend({
  name: 'transaction-modal',

  components: {
    Spinner
  },

  props: {
    addingBalance: {
      required: true,
      type: Boolean
    }
  },

  data () {
    return {
      amount: '',
      amountChecked: false,
      amountIsValid: true,
      appData: AppData.getInstance(),
      availableCurrencies: CurrencyUtil.getAll(),
      coinIsValid: false,
      currency: 'USD',
      currentBalances: <StringMap<number>>{},
      currentCoins: <Coin[]>[],
      date: this.addingBalance ? '' : DateTime.local().toISODate(),
      feeIsValid: true,
      fees: 0,
      items: <Coin[]>[],
      loading: false,
      price: '',
      priceChecked: false,
      priceIsValid: true,
      selectedItem: new Coin('', ''),
      template: TransactionCoinItem
    };
  },

  mounted() {
    this.appData.transactionManager.getAllBalances()
      .then((balanceData) => {
        for (let key in balanceData) {
          let value = balanceData[key];
          this.currentCoins.push(value.coin);
          this.currentBalances[value.coin.symbol] = value.amount;
        }
      })
      .catch ((error) => {
        console.log(error);
      });
  },

  watch: {
    amount: function (val) {
      if (this.addingBalance) {
        this.amountIsValid = this.isValidNumberInput(val);
      } else {
        let validNumber = this.isValidNumberInput(val);
        let amountAvailable = this.currentBalances[this.selectedItem.symbol] - val >= 0;
        this.amountIsValid = validNumber && amountAvailable;
      }

      this.amountChecked = true;
    },

    price: function (val) {
      this.priceIsValid = this.isValidNumberInput(val);
      this.priceChecked = true;
    },

    fees: function (val) {
      this.feeIsValid = this.isValidNumberInput(val) || val === '0';
    },

    selectedItem: function (val) {
      // Fix this later
      this.coinIsValid = val instanceof Coin || val instanceof Object;
    }
  },

  computed: {
    inputIsValid: function (): boolean {
      if (this.addingBalance) {
        return this.coinIsValid
          && this.amountIsValid
          && this.priceIsValid
          && this.feeIsValid
          && this.amountChecked
          && this.priceChecked;
      } else {
        return this.coinIsValid
          && this.amountIsValid
          && this.feeIsValid
          && this.amountChecked;
      }
    }
  },

  methods: {
    close: function () {
      this.$emit('close');
    },

    addTransaction: function () {
      this.loading = true;
      let multiplier = this.addingBalance ? 1 : -1;
      this.appData.transactionManager.storeTransaction(this.selectedItem, Number(this.amount) * multiplier, Number(this.price),
        Number(this.fees), 'USD', this.date)
      .then((response) => {
        this.$emit('reload');
      })
      .catch((error) => {
        console.log(error);
        this.$emit('close');
      });
    },

    getLabel (item: Coin) {
      return item.name;
    },

    updateItems (text: string) {
      if (this.addingBalance) {
        this.items = CoinUtil.getAvailable().filter((item) => {
          return (new RegExp(text.toLowerCase())).test(item.symbol.toLowerCase() + item.name.toLowerCase());
        });
      } else {
        this.items = this.currentCoins.filter((item) => {
          return (new RegExp(text.toLowerCase())).test(item.symbol.toLowerCase() + item.name.toLowerCase());
        });
      }
    },

    isValidNumberInput: function (val: string): boolean {
      // Number with optional decimals
      let regex = /^(\d+\.?\d*|\.\d+)$/;
      return regex.test(val) && Number(val) > 0;
    }
  }
});
</script>

<style scoped>
@import '../css/modal.css';
</style>
