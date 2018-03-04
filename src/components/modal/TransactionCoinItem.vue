<template>
  <div class="transaction-coin-item">
    <div>{{ item.symbol }}</div>
    <div>{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  name: "transaction-coin-item",
  props: {
    item: { required: true }
  }
};
</script>

<style scoped>

</style>
