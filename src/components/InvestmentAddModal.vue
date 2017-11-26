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
                v-model="datePurchased"
                type="date"
                input-format="MMMM DD, YYYY">
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

            <select v-model="currency">
                <option v-for="currency in availableCurrencies" :key="currency">{{ currency }}</option>
              </select>

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
import Storage from '../ts/storage';
import * as Models from '../ts/models';

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
      items: <Models.Coin[]>[],
      price: '',
      priceIsValid: true,
      selectedItem: new Models.Coin('', ''),
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
      this.coinIsValid = val instanceof Models.Coin;
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

    getLabel (item: Models.Coin) {
      return item.name;
    },

    updateItems (text: string) {
      this.items = Models.Coin.getAvailable().filter((item) => {
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
input {
  border: 1px solid #DFE3E9;
  padding: 10px 15px;
  border-radius: 6px;
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
}

select {
  font-size: 16px;
  margin-top:8px;
}

.modal-input {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 16px;
  margin-left:16px;
  margin-right: 16px;
}

.error-message {
  color: var(--red);
  text-align: left;
  margin-bottom:24px;
}

.input-error {
  color: var(--red);
  text-align: left;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 17, 26, .6);
  display: table;
  transition: opacity .25s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 375px;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(22, 46, 58, 0.15);
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
  font-size:  16px;
  padding: 8px 16px;
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
  transform: scale(0.95);
  transform-origin: 50% 200%;
  transition: all .25s var(--ease-out-cubic);
}
</style>
