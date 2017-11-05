<template>
  <div class="portfolio-balance">
    <div class="currency-name">
      {{ currencyName }}
    </div>
    <div class="currency-price">
      ${{ currencyPrice }}
    </div>
    <div class="currency-value">
      ${{ currencyValue }}
    </div>
    <div class="currency-balance">
      <span>{{ currencyName }} Balance</span>
      <br/>
      {{ currencyBalance }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio-balance',
  props: {
    currencyName: {
      type: String,
      required: true
    },
    currencyPrice: {
      type: String,
      required: true
    },
    currencyBalance: {
      type: Number,
      required: true
    }
  },

  computed: {
    currencyValue: function () {
      return (this.currencyPrice * this.currencyBalance).toFixed(2)
    }
  }
}
</script>

<style scoped>
.portfolio-balance {
  width: 210px;
  height: 210px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px;
  border-radius: 11.2px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(22, 46, 58, 0.15);
}

.currency-name {
  font-size: 28px;
  font-weight: 900;
  text-align: center;
  color: #004466;
  margin-bottom: 8px;
}

.currency-price {
  font-family: 'Source Code Pro';
  font-size: 18px;
  font-weight: 600;
  color: #004466;
  margin-bottom: 16px;
}

.currency-value {
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  color: #004466;
  margin-bottom: 16px;
}

.currency-balance {
  font-family: 'Source Code Pro';
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #004466;
}
.currency-balance > span{
  font-family: 'Source Sans Pro';
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: #004466;
  opacity: 0.5;
  letter-spacing: 0.3px;
}
</style>
