<template>
  <div class="portfolio-balance">
    <div class="coin-logo">
    </div>
    <div class="coin-name">
      {{ coinName }}
    </div>
    <div class="coin-balance">
      {{ coinBalance.toFixed(6) }}
    </div>
    <div class="coin-price">
      ${{ coinPrice }}
    </div>
    <div class="coin-value">
      ${{ coinValue }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio-balance',
  props: {
    coinName: {
      type: String,
      required: true
    },
    coinPrice: {
      type: Number,
      required: true
    },
    coinBalance: {
      type: Number,
      required: true
    }
  },

  computed: {
    coinValue: function () {
      return (this.coinPrice * this.coinBalance).toFixed(2)
    }
  }
}
</script>

<style scoped>
.portfolio-balance {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 16px;
  height: 95px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(22, 46, 58, 0.15);
}

.coin-logo {
  background: #00FFA2;
  width: 48px;
  height: 48px;
  border-radius: 100px;
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
