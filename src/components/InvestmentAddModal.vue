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
            </div>
            <span class="error-message" v-if="!amountIsValid">Please enter a valid coin amount</span>

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
            </div>
            <span class="error-message" v-if="!priceIsValid">Please enter a valid price</span>

            <div class="modal-input" :class="{'input-error': !feeIsValid}">
              <label for="additional-fees">Additional Fees</label>
              <input id="additional-fees" v-model="fees">
            </div>
            <span class="error-message" v-if="!feeIsValid">Please enter a valid amount or zero</span>

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
import Storage from '../ts/storage';
import { Coin } from '../ts/models/coin';

export default Vue.extend({
  name: 'investment-add-modal',

  data () {
    return {
      amount: '',
      amountChecked: false,
      amountIsValid: true,
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
      Storage.storeInvestment(this.selectedItem, Number(this.amount), Number(this.price), this.fees, 'USD', this.datePurchased)
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
input, #date-purchased {
  padding: 10px 15px;
  border: 1px solid #DFE3E9;
  border-radius: 6px;
  box-shadow: 0 0 0px 0 rgba(0,68,102,0);
  font-size: 16px;
  font-family: 'Source Code Pro', monospace;
  transition: all 0.24s var(--ease-out-cubic);
}

input:focus {
  border: 1px solid #00FFA2;
  box-shadow: 0 0 4px 0 rgba(0,68,102,0.14);
}

select {
  margin-top:8px;
  font-size: 16px;
}

.modal-input {
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  margin-bottom: 16px;
  margin-left:16px;
  text-align: left;
}

.error-message {
  margin-bottom:24px;
  color: var(--red);
  text-align: left;
}

.input-error {
  color: var(--red);
  text-align: left;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  display: table;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 17, 26, .6);
  transition: opacity .25s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  width: 375px;
  border-radius: 12px;
  background-color: var(--card-bg-theme-color);
  box-shadow: 0 3px 6px 0 var(--shadow-theme-color);
  transition: all .25s ease;
}

.modal-header h3 {
  margin-top: 0;
  font-size: 24px;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  padding: 8px 16px;
  font-size:  16px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transition: all .25s var(--ease-out-cubic);
  transform: scale(0.95);
  transform-origin: 50% 200%;
}

.select-style {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-right: 16px;
    margin-bottom: 16px;
    margin-left:16px;
    width: auto;
    border-radius: 3px;
    text-align: left;
}

.select-style select {
    padding: 10px 15px;
    width: 50%;
    border: 1px solid #DFE3E9;
    border-radius: 6px;
    background-image: none;
    box-shadow: 0 0 0px 0 rgba(0,68,102,0);
    font-size: 16px;
    font-family: 'Source Code Pro', monospace;
    transition: all 0.24s var(--ease-out-cubic);
    -webkit-appearance: none;
}

.select-style select:focus {
  border: 1px solid #00FFA2;
  box-shadow: 0 0 4px 0 rgba(0,68,102,0.14);
}

</style>
