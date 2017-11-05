<template>
  <div class="investment-add-item">
    <div>{{ item.symbol }}</div>
    <div>{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'investment-add-item',
  props: {
    item: {required: true}
  }
}
</script>

<style scoped>

</style>
