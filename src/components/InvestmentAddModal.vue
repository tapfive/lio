<template>
  <transition name="modal">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <h3>ADD BALANCE</h3>
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
              <label for="date-purchased">Date Purchased</label>
              <datetime
                id="date-purchased"
                input-class="date-purchased-input"
                v-model="datePurchased"
                type="date"
                input-format="MMMM DD, YYYY"
                :placeholder="'mm/dd/yyy'">
              </datetime>
            </div>

            <div class="modal-input" :class="{'input-error': !priceIsValid}">
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
            <button class="modal-default-button" :disabled="!inputIsValid" @click="addInvestment">+ Add</button>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import InvestmentAddItem from './InvestmentAddItem.vue';
import CoinUtil from '../ts/coin-util';
import { AppData } from '../ts/app-data';
import { Coin } from '../ts/models/coin';

export default Vue.extend({
  name: 'investment-add-modal',

  data () {
    return {
      amount: '',
      amountChecked: false,
      amountIsValid: true,
      appData: AppData.getInstance(),
      availableCurrencies: ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'],
      coinIsValid: false,
      currency: 'USD',
      datePurchased: '',
      feeIsValid: true,
      fees: 0,
      items: <Coin[]>[],
      price: '',
      priceIsValid: true,
      selectedItem: new Coin('', ''),
      template: InvestmentAddItem
    };
  },

  watch: {
    amount: function (val) {
      this.amountIsValid = this.isValidNumberInput(val);
      this.amountChecked = true;
    },

    price: function (val) {
      this.priceIsValid = this.isValidNumberInput(val);
    },

    fees: function (val) {
      this.feeIsValid = this.isValidNumberInput(val) || val === '0';
    },

    selectedItem: function (val) {
      this.coinIsValid = val instanceof Coin;
    }
  },

  computed: {
    inputIsValid: function (): boolean {
      return this.coinIsValid && this.amountIsValid && this.priceIsValid && this.feeIsValid && this.amountChecked;
    }
  },

  methods: {
    close: function () {
      this.$emit('close');
    },

    addInvestment: function () {
      this.appData.storageManager.storeInvestment(this.selectedItem, Number(this.amount), Number(this.price),
        this.fees, 'USD', this.datePurchased)
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
      this.items = CoinUtil.getAvailable().filter((item) => {
        return (new RegExp(text.toLowerCase())).test(item.symbol.toLowerCase() + item.name.toLowerCase());
      });
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
