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
              <input id="coin-amount" v-model="amount" placeholder="0.00000000">
              <span class="error-message" v-if="!amountIsValid">Please enter a valid coin amount</span>
            </div>

            <div class="modal-input">
              <label for="date">Date Purchased</label>
              <datetime
                id="date"
                input-class="date-input"
                v-model="date"
                type="date"
                input-format="MMMM DD, YYYY"
                :placeholder="'mm/dd/yyyy'">
              </datetime>
            </div>

          </div>

          <div class="modal-footer" >
            <button class="modal-default-button" :disabled="!inputIsValid" @click="addTransaction()">
              <div v-if="!loading">+ Add</div>
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
import Spinner from 'vue-simple-spinner';
import TransactionCoinItem from './TransactionCoinItem.vue';
import CoinUtil from '../../ts/helpers/coin-util';
import { AppData } from '../../ts/app-data';
import { Coin } from '../../ts/models/coin';

export default Vue.extend({
  name: 'add-modal',

  components: {
    Spinner
  },

  props: {
    currency: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      amount: '',
      amountChecked: false,
      amountIsValid: true,
      appData: AppData.getInstance(),
      coinIsValid: false,
      date: '',
      items: <Coin[]>[],
      loading: false,
      selectedItem: new Coin('', ''),
      template: TransactionCoinItem
    };
  },

  watch: {
    amount: function (val) {
      this.amountIsValid = this.isValidNumberInput(val);
      this.amountChecked = true;
    },

    selectedItem: function (val) {
      // Fix this later
      this.coinIsValid = val instanceof Coin || val instanceof Object;
    }
  },

  computed: {
    inputIsValid: function (): boolean {
      return this.coinIsValid
        && this.amountIsValid
        && this.amountChecked;
    }
  },

  methods: {
    close: function () {
      this.$emit('close');
    },

    addTransaction: function () {
      this.loading = true;
      this.appData.transactionManager.storeTransaction(this.selectedItem, Number(this.amount), this.currency, this.date)
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
@import '../../css/modal.css';
</style>
