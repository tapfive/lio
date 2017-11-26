<template>
  <div class="portfolio-sidebar">
    <div class="sidebar-logo">
      <svg width="62" viewBox="0 0 83 83" xmlns="http://www.w3.org/2000/svg"><title>logo</title><g fill="#00FFA2" fill-rule="evenodd"><path fill-opacity=".33" d="M33.5 50L62 66.502 33.503 83 5 66.502z"/><path stroke="#046" stroke-width="3" d="M33 73L2 55.252V19.751L33 2l31 17.75v35.502z"/></g></svg>
      <h1>Lio</h1>
    </div>

    <h3>{{ user.name }}</h3>
    <a href="#" @click.prevent="signOut">Sign Out</a>

    <button class="add-investment-button" @click="showModal">+ Add Balance</button>
  </div>
</template>

<script>
export default {
  name: 'portfolio-sidebar',

  props: {
    user: {
      required: true
    }
  },

  data () {
    return {
      blockstack: window.blockstack
    }
  },

  methods: {
    signOut () {
      this.blockstack.signUserOut(window.location.href)
    },

    showModal: function () {
      this.$emit('show-modal')
    }
  }
}
</script>

<style scoped>
.portfolio-sidebar {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  background: var(--bg-theme-color);
  grid-area: sidebar;
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