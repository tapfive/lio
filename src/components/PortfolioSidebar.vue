<template>
  <div class="portfolio-sidebar">
    <h1>Lio</h1>
    <a href="#" @click.prevent="signOut">Sign Out</a>
  </div>
</template>

<script>
export default {
  name: 'portfolio-sidebar',

  data () {
    return {
      blockstack: window.blockstack
    }
  },

  methods: {
    signOut () {
      this.blockstack.signUserOut(window.location.href)
    }
  }
}
</script>

<style scoped>
.portfolio-sidebar {
  flex-grow: 1; 
  background-color: #004466;
}

h1 {
  color: #00FFA2;
}

a {
  color: #FFFFFF;
}
</style>