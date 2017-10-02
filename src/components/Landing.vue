<template>
  <div class="landing">
    <h1>Lio</h1>
    <button class="btn btn-default" @click.prevent="signIn">Sign In With Blockstack</button>
  </div>
</template>

<<script>
export default {
  name: 'landing',
  data () {
    return {
      blockstack: window.blockstack
    }
  },

  methods: {
    signIn () {
      const blockstack = this.blockstack
      blockstack.redirectToSignIn()
    }
  }
}
</script>

<style scoped>
.landing {
  height: 100%;
}
</style>