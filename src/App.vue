<template>
  <div id="app">
    <the-landing v-if="! blockstack.isUserSignedIn()"></the-landing>
    <the-portfolio v-if="user" :user="user"></the-portfolio>
  </div>
</template>

<script>
import TheLanding from './components/TheLanding'
import ThePortfolio from './components/ThePortfolio'

export default {
  name: 'app',
  components: {
    TheLanding,
    ThePortfolio
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
  font-family: 'Source Sans Pro','Avenir', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  --bg-theme-color: #F7F7FA;
  transition: --bg-theme-color 1s ease-in-out;
}
body.dark-theme {
  --bg-theme-color: #004466;
}

button {
  padding: 8px 8px;
  border: none;
  border-radius: 6px;
  background: #00FFA2;
  box-shadow: 0 3px 8px 0 rgba(22,46,58,0.16);
  color: #002A3F;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all .25s var(--ease-out-cubic);
  transform: translateY(0px);
}

button:hover{
    box-shadow: 0 3px 8px 0 rgba(22,46,58,0.16);
    transform: translateY(-1px);
    background: #4dffbe;
}
</style>