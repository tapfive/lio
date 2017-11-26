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
  /* display: flex;
  flex-direction: row; */
  /* align-items: stretch; */
  display: grid;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
  grid-template-columns: 220px 1fr;
  /* grid-template-rows: 1fr; */
  /* grid-template-areas:
    "sidebar dashboard dashboard dashboard"; */
}

</style>