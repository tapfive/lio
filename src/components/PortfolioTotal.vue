<template>
  <div class="portfolio-total">
    <div>Your Portfolio</div>
    <h3>${{ totalBalance }}</h3>
  </div>
</template>

<script>
export default {
  name: 'portfolio-total',
  props: {
    totalBalance: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.portfolio-total {
  height: 230px;
  display: block;
  margin: 16px;
  background: #FFFFFF;
  border-radius: 11.2px;
  font-size: 26px;
  color: #004466;
  text-align: center;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
}
</style>
