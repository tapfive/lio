<template>
  <div :style="shadowStyle" class="portfolio-balance" @mouseenter="updateHoverState(true)" @mouseleave="updateHoverState(false)">
    <div class="coin-info">
      <div class="coin-logo">
        <i :class="coinName" class="cc"></i>
      </div>

      <div class="coin-name">
        {{ coinName }}
      </div>
    </div>

    <div class="coin-balance">
      {{ coinAmount.toFixed(8) }}
    </div>

    <div class="coin-price">
      <div v-if="coinPrice !== 0">
        <span v-html="currencySymbol"></span>{{ coinPrice.toFixed(2) }}
      </div>
      <div v-else>-</div>
    </div>

    <div class="coin-value">
      <span v-html="currencySymbol"></span>{{ coinValue }}
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Balance } from "../../ts/models/balance";

export default Vue.extend({
  name: "portfolio-balance",
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
    },
    currencySymbol: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      isHovering: false
    };
  },

  computed: {
    coinValue: function(): string {
      return (this.coinPrice * this.coinAmount).toFixed(2);
    },

    shadowStyle: function(): any {
      if (this.isHovering) {
        return {
          boxShadow: "0 4px 20px -4px var(--shadow-theme-color), 0 8px 40px -32px var(--" + this.coinName + ")"
        };
      } else {
        return {};
      }
    }
  },

  methods: {
    updateHoverState(isHovering: boolean) {
      this.isHovering = isHovering;
    }
  }
});
</script>

<style scoped>
.portfolio-balance {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0px 32px;
  align-items: center;
  height: 96px;
  border-radius: 6px;
  background-color: var(--card-bg-theme-color);
  box-shadow: 0 2px 8px 0 var(--shadow-theme-color);
  transition: all 0.25s var(--ease-out-cubic);
  transform: translateY(0px);
}

.portfolio-balance:hover {
  transform: translateY(-4px);
}

.coin-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.coin-logo {
  margin-right: 16px;
  font-size: 48px;
}

.coin-name {
  font-weight: 600;
  font-size: 26px;
}

.coin-price {
  font-weight: 600;
  font-size: 18px;
  font-family: "Source Code Pro";
}

.coin-value {
  font-weight: 900;
  font-size: 24px;
}

.coin-balance {
  font-weight: 600;
  font-size: 18px;
  font-family: "Source Code Pro";
}
.coin-balance > span {
  letter-spacing: 0.3px;
  font-weight: 600;
  font-size: 12px;
  font-family: "Source Sans Pro";
  opacity: 0.5;
}
</style>
