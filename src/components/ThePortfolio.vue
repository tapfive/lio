<template>
  <div class="portfolio container">
    <portfolio-sidebar></portfolio-sidebar>
    <portfolio-dashboard></portfolio-dashboard>
  </div>
</template>

<script>
import PortfolioSidebar from './PortfolioSidebar'
import PortfolioDashboard from './PortfolioDashboard'

export default {
  name: 'portfolio',
  props: ['user'],

  components: {
    PortfolioSidebar,
    PortfolioDashboard
  },

  data () {
    return {
      blockstack: window.blockstack
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 100vh;
}
</style>