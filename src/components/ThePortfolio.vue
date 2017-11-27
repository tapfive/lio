<template>
  <div class="portfolio container">
    <portfolio-sidebar
      @show-modal="showModal = true"
      @update:current-component="val => currentComponent = val"
      :user="user">
    </portfolio-sidebar>

    <div v-if="currentComponent === 'overview'" class="component-container">
      <portfolio-overview
        :reload-data="reloadData"
        @update:reload-data="val => reloadData = val">
      </portfolio-overview>
    </div>

    <div v-else-if="currentComponent === 'graph'" class="component-container">
      <portfolio-graph></portfolio-graph>
    </div>

    <div v-else-if="currentComponent === 'history'" class="component-container">
      <portfolio-history></portfolio-history>
    </div>

    <div v-else-if="currentComponent === 'settings'" class="component-container">
      <portfolio-settings></portfolio-settings>
    </div>

    <investment-add-modal
      v-if="showModal"
      @close="showModal = false"
      @reload="handleDataAdded()">
    </investment-add-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioSidebar from './PortfolioSidebar.vue';
import PortfolioOverview from './PortfolioOverview.vue';
import PortfolioGraph from './PortfolioGraph.vue';
import PortfolioHistory from './PortfolioHistory.vue';
import PortfolioSettings from './PortfolioSettings.vue';
import InvestmentAddModal from './InvestmentAddModal.vue';

export default Vue.extend({
  name: 'portfolio',
  props: {
    user: {
      required: true
    }
  },

  components: {
    InvestmentAddModal,
    PortfolioGraph,
    PortfolioHistory,
    PortfolioOverview,
    PortfolioSettings,
    PortfolioSidebar
  },

  data () {
    return {
      blockstack: window.blockstack,
      currentComponent: 'overview',
      reloadData: false,
      showModal: false
    };
  },

  methods: {
    handleDataAdded: function () {
      this.showModal = false;
      this.reloadData = true;
    }
  }
});
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

.component-container {
    grid-column: 2 / 3;
}

</style>