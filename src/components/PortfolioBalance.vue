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
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 16px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(22, 46, 58, 0.15);
}

.coin-logo {
  background: #444444
}

.coin-name {
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  color: #004466;
  margin-bottom: 8px;
}

.coin-price {
  font-family: 'Source Code Pro';
  font-size: 18px;
  font-weight: 600;
  color: #004466;
  margin-bottom: 16px;
}

.coin-value {
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  color: #004466;
  margin-bottom: 16px;
}

.coin-balance {
  font-family: 'Source Code Pro';
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #004466;
}
.coin-balance > span{
  font-family: 'Source Sans Pro';
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: #004466;
  opacity: 0.5;
  letter-spacing: 0.3px;
}
</style>
