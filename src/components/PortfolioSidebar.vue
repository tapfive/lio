<template>
  <div class="portfolio-sidebar">
    <div class="sidebar-logo">
      <svg width="62" viewBox="0 0 83 83" xmlns="http://www.w3.org/2000/svg"><title>logo</title><g fill="#00FFA2" fill-rule="evenodd"><path fill-opacity=".33" d="M33.5 50L62 66.502 33.503 83 5 66.502z"/><path stroke="#046" stroke-width="3" d="M33 73L2 55.252V19.751L33 2l31 17.75v35.502z"/></g></svg>
      <h1>Lio</h1>
    </div>

    <h3>{{ user.name }}</h3>
    <a href="#" @click.prevent="signOut">Sign Out</a>

    <a :class="{ selected : isSelected('overview') }" href="#" @click.prevent="changeComponent('overview')">Overview</a>
    <a :class="{ selected : isSelected('graph') }" href="#" @click.prevent="changeComponent('graph')">Graph</a>
    <a :class="{ selected : isSelected('history') }" href="#" @click.prevent="changeComponent('history')">History</a>
    <a :class="{ selected : isSelected('settings') }" href="#" @click.prevent="changeComponent('settings')">Settings</a>

    <button class="add-investment-button" @click="showModal">+ Add Balance</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'portfolio-sidebar',

  props: {
    user: {
      required: true
    }
  },

  data () {
    return {
      blockstack: window.blockstack,
      currentComponent: 'overview'
    };
  },

  methods: {
    signOut () {
      this.blockstack.signUserOut(window.location.href);
    },

    changeComponent (component: string) {
      this.currentComponent = component;
      this.$emit('update:current-component', component);
    },

    isSelected (component: string) {
      return this.currentComponent === component;
    },

    showModal: function () {
      this.$emit('show-modal');
    }
  }
});
</script>

<style scoped>
.portfolio-sidebar {
  position: fixed;
  top: 0;
  left:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 24px;
  min-height: 100vh;
  max-height: 100vh;
  width: 220px;
  height: 100vh;
  background: var(--bg-theme-color);
  /* grid-area: sidebar; */
  /* grid-column: 1 / 2; */
}

h1, h3 {
  color: #004466;
}

a {
  color: #004466;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.selected {
  color: #FF0000;
}

.add-investment-button {
  width: 80%;
  height: 62px;
  border-radius: 6px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>