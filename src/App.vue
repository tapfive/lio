<template>
  <div id="app">
    <landing v-if="! blockstack.isUserSignedIn()"></landing>
    <portfolio v-if="user" :user="user"></portfolio>
  </div>
</template>

<script>
import Landing from './components/Landing'
import Portfolio from './components/Portfolio'

export default {
  name: 'app',
  components: {
    Landing,
    Portfolio
  },

  created () {
    const blockstack = this.blockstack

    if (blockstack.isUserSignedIn()) {
      this.user = blockstack.loadUserData().profile
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn()
      .then((userData) => {
        window.location = window.location.origin
      })
    }
  },

  data () {
    return {
      blockstack: window.blockstack,
      user: null
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
