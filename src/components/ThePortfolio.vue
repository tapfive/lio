<template>
  <div class="portfolio container">
    <portfolio-sidebar
      @show-modal="showModal = true"
      :user="user">
    </portfolio-sidebar>

    <portfolio-dashboard
      :reload-data="reloadData"
      @update:reload-data="val => reloadData = val">
    </portfolio-dashboard>

    <investment-add-modal
      v-if="showModal"
      @close="showModal = false"
      @reload="handleDataAdded()">
    </investment-add-modal>
  </div>
</template>

<script>
import PortfolioSidebar from './PortfolioSidebar'
import PortfolioDashboard from './PortfolioDashboard'
import InvestmentAddModal from './InvestmentAddModal'

export default {
  name: 'portfolio',
  props: {
    user: {
      required: true
    }
  },

  components: {
    PortfolioSidebar,
    PortfolioDashboard,
    InvestmentAddModal
  },

  data () {
    return {
      blockstack: window.blockstack,
      showModal: false,
      reloadData: false
    }
  },

  methods: {
    handleDataAdded: function () {
      this.showModal = false
      this.reloadData = true
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