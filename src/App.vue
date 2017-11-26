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
  color: var(--dark-blue);
  text-align: center;
  font-family: 'Source Sans Pro','Avenir', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  --bg-theme-color: #F7F7FA;
  margin: 0;
  transition: --bg-theme-color 1s ease-in-out;
}
body.dark-theme {
  --bg-theme-color: #00334C;
}

button {
  padding: 8px 8px;
  border: none;
  border-radius: 6px;
  background: var(--green);
  box-shadow: 0 3px 8px 0 rgba(22,46,58,0.16);
  color: #002A3F;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all .25s var(--ease-out-cubic);
  transform: translateY(0px);
}

button:hover{
  background: var(--light-green);
  box-shadow: 0 3px 8px 0 rgba(22,46,58,0.16);
  transform: translateY(-1px);
}

/*
 * vue-datetime picker style overrides
 */
 .vdatetime-popup {
   border-radius: 6px !important;
   color: var(--dark-blue) !important;
   font-weight: 400 !important;
   font-family: 'Source Sans Pro','Avenir', system-ui, sans-serif !important;
 }

 .vdatetime-popup__year, .vdatetime-popup__date-picker__item {
   font-weight: 400 !important;
 }

 .vdatetime-popup__month-selector {
   /*to fix broken width with default styles*/
   width: auto !important;
 }

.vdatetime-popup__header,
.vdatetime-popup__date-picker__item--selected > span > span,
.vdatetime-popup__date-picker__item--selected:hover > span > span {
    background: var(--dark-blue) !important;
     color: var(--green) !important;
}

.vdatetime-popup__list-picker__item--selected,
.vdatetime-popup__actions__button {
    color: var(--dark-blue) !important;
}

.vdatetime-popup__actions{
  text-transform: uppercase !important;
}
</style>