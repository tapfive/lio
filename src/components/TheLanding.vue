<template>
  <div class="landing">
    <div class="hero-bg">
    </div>
    <div class="hero-bg-fade">
    </div>
    <div class="hero-stuff">
      <div class="hero-logo">
        <svg width="240" height="83" viewBox="0 0 240 83" xmlns="http://www.w3.org/2000/svg"><title>logo</title><g fill="#00FFA2" fill-rule="evenodd"><text font-family="SourceSansPro-Semibold, Source Sans Pro" font-size="108" font-weight="500" transform="translate(2 -28)"><tspan x="87" y="106">Lio</tspan></text><path fill-opacity=".33" d="M33.5 50L62 66.502 33.503 83 5 66.502z"/><path stroke="#046" stroke-width="3" d="M33 73L2 55.252V19.751L33 2l31 17.75v35.502z"/></g></svg>
      </div>
      <h2>A Simple, Decentralized Cryptocurrency Portfolio</h2>
      <button class="btn btn-default" @click.prevent="signIn">Sign In With Blockstack</button>
    </div>
  </div>
</template>

<script>
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
  /* height: 100%; */
}

.hero-stuff{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-stuff > h2 {
  font-weight: 300;
  font-size: 48px;
  color: #00FFA2;
}

.hero-bg {
  width: 100%;
  height: 680px;
  background: #004466;
  background-image: linear-gradient(-135deg, #004466 0%, #01324A 100%);
  transform: skewY(-8deg);
  transform-origin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.hero-bg-fade {
  width: 100%;
  height: 680px;
  background: #004466;
  background-image: linear-gradient(-135deg, #004466 0%, #01324A 100%);
  opacity: 0.2;
  transform: skewY(-5deg);
  transform-origin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
}

.hero-logo {
  margin-top: 120px;
}

button {
  padding: 24px 24px;
  box-shadow: 2px 4px 24px -8px rgba(0, 3, 4, 0.8);
  text-transform: uppercase;
  font-size: 24px;
}

button:hover{
    background: var(--light-green);
    box-shadow: 4px 16px 24px -16px rgba(0, 3, 4, 0.6);
    transform: translateY(-1px);
}

button:active{
    background: #002A3F;
    box-shadow: 4px 16px 24px -16px rgba(0, 3, 4, 0.8);
    color: #00FFA2;
    transform: translateY(1px);
}
</style>