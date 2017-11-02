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
      {{ currencyName }} Balance
      <br/>
      {{ currencyBalance }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio-balance',
  props: ['currencyName', 'currencyPrice', 'currencyBalance'],

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
}

.currency-price {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #004466;
}

.currency-value {
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  color: #004466;
}

.currency-balance {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #004466;
}
</style>
