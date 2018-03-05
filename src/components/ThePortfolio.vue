<template>
  <div class="portfolio container">
    <portfolio-sidebar
      @show-add-modal="showAddModal = true"
      @show-subtract-modal="showSubtractModal = true"
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
      <portfolio-graph
        :reload-data="reloadData"
        @update:reload-data="val => reloadData = val">
      </portfolio-graph>
    </div>

    <div v-else-if="currentComponent === 'history'" class="component-container">
      <portfolio-history
        :reload-data="reloadData"
        @update:reload-data="val => reloadData = val">
      </portfolio-history>
    </div>

    <div v-else-if="currentComponent === 'settings'" class="component-container">
      <portfolio-settings></portfolio-settings>
    </div>

    <add-modal 
      v-if="showAddModal"
      @close="closeModal()"
      @reload="handleDataAdded()">
    </add-modal>

    <subtract-modal 
      v-if="showSubtractModal"
      @close="closeModal()"
      @reload="handleDataAdded()">
    </subtract-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AddModal from "./modal/AddModal.vue";
import SubtractModal from "./modal/SubtractModal.vue";
import PortfolioSidebar from "./PortfolioSidebar.vue";
import PortfolioOverview from "./PortfolioOverview.vue";
import PortfolioGraph from "./PortfolioGraph.vue";
import PortfolioHistory from "./PortfolioHistory.vue";
import PortfolioSettings from "./PortfolioSettings.vue";

export default Vue.extend({
  name: "portfolio",
  props: {
    user: {
      required: true
    }
  },

  components: {
    AddModal,
    PortfolioGraph,
    PortfolioHistory,
    PortfolioOverview,
    PortfolioSettings,
    PortfolioSidebar,
    SubtractModal
  },

  data() {
    return {
      blockstack: window.blockstack,
      currentComponent: "overview",
      reloadData: false,
      showAddModal: false,
      showSubtractModal: false
    };
  },

  methods: {
    handleDataAdded: function() {
      this.closeModal();
      this.reloadData = true;
    },

    closeModal: function() {
      this.showAddModal = false;
      this.showSubtractModal = false;
    }
  }
});
</script>

<style scoped>
.container {
  display: grid;
  overflow-x: hidden;
  overflow-y: scroll;
  min-height: 100vh;
  width: 100vw;
  /* display: flex;
  flex-direction: row; */
  /* align-items: stretch; */
  background-color: var(--view-bg-theme-color);
  background-image: var(--view-bg-theme-gradient);
  grid-template-columns: 220px 1fr;
  /* grid-template-rows: 1fr; */
  /* grid-template-areas:
    "sidebar dashboard dashboard dashboard"; */
}

.component-container {
  z-index: 1;
  padding-bottom: 62px;
  box-shadow: 30px 0 74px 0 var(--shadow-theme-color);
  grid-column: 2 / 3;
}
</style>