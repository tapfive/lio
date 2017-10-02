<template>
  <div id="app">
    <landing v-if="! blockstack.isUserSignedIn()"></landing>
    <hello v-if="user" :user="user"></hello>
  </div>
</template>

<script>

import Landing from './components/Landing'
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Landing,
    Hello
  },

  mounted () {
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
  margin-top: 60px;
}
</style>
