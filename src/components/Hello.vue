<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="#" @click.prevent="signOut">Sign Out</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      blockstack: window.blockstack,
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    signOut () {
      this.blockstack.signUserOut(window.location.href)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
