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
              :auto-select-one-item="false"
              v-model="selectedItem"
              @update-items="updateItems">
            </v-autocomplete>

            <div :class="{'input-error': !amountIsValid}">
              <label for="coin-amount">Coin Amount</label>
              <input id="coin-amount" v-model="amount" type="number">
            </div>
            <span class="error-message" v-if="!amountIsValid">Please enter a valid coin amount</span>

            <div>
              <label for="date-purchased">Date Purchased</label>
              <input id="date-purchased" type="date">
            </div>

            <div :class="{'input-error': !feeIsValid}">
              <label for="additional-fees">Additional Fees</label>
              <input id="additional-fees" v-model="fees" type="number">
              <select v-model="feeCurrency">
                <option v-for="currency in availableCurrencies" :key="currency">{{ currency }}</option>
              </select>
            </div>
            <span class="error-message" v-if="!feeIsValid">Please enter a valid amount or zero</span>

          </div>

          <div class="modal-footer" >
            <button class="modal-default-button" :disabled="!inputIsValid" @click="addInvestment">Add</button>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import InvestmentAddItem from './InvestmentAddItem.vue'
import Storage from '../js/storage'
import * as Models from '../js/models'

export default Vue.extend({
  name: 'investment-add-modal',

  data () {
    return {
      availableCurrencies: ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'],
      selectedItem: new Models.Coin('', ''),
      items: <Models.Coin[]>[],
      amount: '',
      fees: 0,
      feeCurrency: 'USD',
      template: InvestmentAddItem,
      coinIsValid: false,
      amountIsValid: true,
      amountChecked: false,
      feeIsValid: true
    }
  },

  watch: {
    amount: function (val) {
      this.amountIsValid = this.isValidNumberInput(val)
      this.amountChecked = true
    },

    fees: function (val) {
      this.feeIsValid = this.isValidNumberInput(val) || val == 0
    },

    selectedItem: function (val) {
      this.coinIsValid = val instanceof Models.Coin
    }
  },

  computed: {
    inputIsValid: function (): boolean {
      return this.coinIsValid && this.amountIsValid && this.feeIsValid && this.amountChecked
    }
  },

  methods: {
    close: function () {
      this.$emit('close')
    },

    addInvestment: function () {
      Storage.storeInvestment(this.selectedItem, new Models.Investment(Number(this.amount), this.fees, 'USD', 0))
      .then((response) => {
        this.$emit('reload')
      })
      .catch((error) => {
        console.log(error)
        this.$emit('close')
      })
    },

    getLabel (item: Models.Coin) {
      return item.name
    },

    updateItems (text: string) {
      this.items = Models.Coin.getAvailable().filter((item) => {
        return (new RegExp(text.toLowerCase())).test(item.symbol.toLowerCase() + item.name.toLowerCase())
      })
    },

    isValidNumberInput: function (val: string): boolean {
      // Number with optional decimals
      let regex = /^(\d+\.?\d*|\.\d+)$/
      return regex.test(val) && Number(val) > 0
    }
  }
})
</script>

<style scoped>
.error-message {
  color: red
}

.input-error {
  color: red
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
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
  transition: all .3s ease;
  font-family: 'Source Code Pro';  
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
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
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
