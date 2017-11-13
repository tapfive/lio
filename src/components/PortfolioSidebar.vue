<template>
  <div class="portfolio-sidebar">
    <h1>Lio</h1>
    <h3>{{ user.name }}</h3>
    <a href="#" @click.prevent="signOut">Sign Out</a>
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
    }
  }
}
</script>

<style scoped>
.portfolio-sidebar {
  flex-grow: 1;
  max-width: 300px;
  background: #00273A;
  background-image: linear-gradient(-180deg, #003752 0%, #002A3F 100%);
  box-shadow: 4px 0 10px 0 rgba(0,16,24,0.33);
}

h1, h3 {
  color: #00FFA2;
}

a {
  color: #FFFFFF;
}
</style>