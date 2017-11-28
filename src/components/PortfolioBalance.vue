<template>
  <div class="portfolio-balance">
    <div class="coin-info">
      <div class="coin-logo">
        <i :class="coinName" class="cc"></i>
      </div>
      <div class="coin-name">
        {{ coinName }}
      </div>
    </div>
    <div class="coin-balance">
      {{ coinAmount.toFixed(6) }}
    </div>
    <div class="coin-price">
      <div v-if="coinPrice !== 0">
        ${{ coinPrice.toFixed(2) }}
      </div>
      <div v-else>-</div>
    </div>
    <div class="coin-value">
      ${{ coinValue }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Balance } from '../ts/models';

export default Vue.extend({
  name: 'portfolio-balance',
  props: {
    coinAmount: {
      required: true,
      type: Number
    },
    coinName: {
      required: true,
      type: String
    },
    coinPrice: {
      required: true,
      type: Number
    }
  },

  computed: {
    coinValue: function (): string {
      return (this.coinPrice * this.coinAmount).toFixed(2);
    }
  }
});
</script>

<style scoped>
.portfolio-balance {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 96px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(22, 46, 58, 0.15);
  transition: all .25s var(--ease-out-cubic);
  transform: translateY(0px);
  /* grid-column: 1 / 4; */
}

.portfolio-balance:hover {
  box-shadow: 0 4px 20px -4px rgba(22, 46, 58, 0.15);
  transform: translateY(-4px);
}

.coin-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.coin-logo {
  margin-right:16px;
  font-size: 48px;
}

.coin-name {
  font-weight: 600;
  font-size: 26px;
}

.coin-price {
  font-weight: 600;
  font-size: 18px;
  font-family: 'Source Code Pro';
}

.coin-value {
  font-weight: 900;
  font-size: 36px;
}

.coin-balance {
  font-weight: 600;
  font-size: 18px;
  font-family: 'Source Code Pro';
}
.coin-balance > span{
  letter-spacing: 0.3px;
  font-weight: 600;
  font-size: 12px;
  font-family: 'Source Sans Pro';
  opacity: 0.5;
}
</style>
