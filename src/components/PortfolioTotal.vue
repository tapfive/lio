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
  display: block;
  /* margin: 16px;
  height: 230px; */
  border-radius: 11.2px;
  background-color: var(--card-bg-theme-color);
  box-shadow: 0 3px 76px -16px rgba(22,46,58,0.16);
  text-align: center;
  font-size: 26px;
  /* grid-column: 2 / 6;
  grid-row: 2 /3; */
  grid-area: total;
}
</style>
