<template>
  <div class="portfolio-sidebar">
    <div class="sidebar-logo">
      <svg width="83" height="83" viewBox="0 0 83 83" xmlns="http://www.w3.org/2000/svg"><title>logo</title><g fill="#00FFA2" fill-rule="evenodd"><path fill-opacity=".33" d="M33.5 50L62 66.502 33.503 83 5 66.502z"/><path stroke="#046" stroke-width="3" d="M33 73L2 55.252V19.751L33 2l31 17.75v35.502z"/></g></svg>
      <h1>Lio</h1>
    </div>

    <h3>{{ user.name }}</h3>
    <a href="#" @click.prevent="signOut">Sign Out</a>

    <div class="add-investment-button" @click="showModal">+ Add Balance</div>
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
  flex-grow: 1;
  max-width: 300px;
  background: var(--bg-theme-color);
  /* box-shadow: 4px 0 10px 0 rgba(0,16,24,0.33); */
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
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 180px;
  height: 62px;
  border-radius: 6px;
  background-color: #00FFA2;
  box-shadow: 0 3px 8px 0 rgba(22,46,58,0.16);
  color: #fff;
  color: #FFFFFF;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>