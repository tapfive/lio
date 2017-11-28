<template>
  <div class="portfolio-total">
    <div>Your Portfolio</div>
    <h2>${{ totalBalance }}</h2>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  border-radius: 11.2px;
  background-color: var(--card-bg-theme-color);
  box-shadow: 0 3px 76px -16px var(--shadow-theme-color);
  text-align: center;
  font-size: 26px;
  /* grid-column: 2 / 6;
  grid-row: 2 /3; */
  grid-area: total;
}
</style>
