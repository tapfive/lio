<template>
  <div class="landing">
    <div class="section-one">
      <div class="hero-bg">
      </div>
      <div class="hero-bg-fade">
      </div>
      <div class="hero-stuff">
        <div class="hero-logo">
          <img src="../assets/lio_logo.svg" alt="Lio">
        </div>
        <h2>A Simple, Decentralized Cryptocurrency Portfolio</h2>

        <div class="lio-browser-mockup">
          <img src="../assets/browser-mockup.svg">
          <img class="lio-mockup-img" src="../assets/lio-screenshot@2x.png" alt="lio screenshot" width="720px">
        </div>


        <button class="login-btn" @click.prevent="signIn">  <img src="../assets/buttons/btn-login-lg.svg" alt="Log In with Blockstack"></button>
      </div>
    </div>

    <div class="section-two">
      <div class="keep-simple">
        <div class="info-text">
          <h2>Let’s keep things simple.</h2>
          <p>Quickly see an overview of your cyrptocurrency<br>
            investments and their performance over time.</p>
        </div>
        <img class="keep-simple-graphic" src="../assets/keep-simple-graphic.svg" width="312px" height="230px">
      </div>

      <div class="see-what">
        <img class="see-what-graphic" src="../assets/see-graphic@2x.png">
        <div class="info-text">
          <h2>See what you want,<br>when you want..</h2>
          <p>Choose which investments you want to compare<br>and the length of time to track them over.</p>
        </div>
      </div>

      <div class="easy-eyes">
        <div class="info-text">
          <h2>Easy on the eyes.</h2>
          <p>We’ve included a dark mode for all you night owls<br>
            tracking your investments.</p>
        </div>
        <img class="easy-eyes-graphic" src="../assets/easy-graphic.svg" width="172px" height="403px">
      </div>
    </div>


    <footer>
      <img src="../assets/tap5.svg" alt="Made by Tap Five">
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { AppData } from "../ts/app-data";

export default Vue.extend({
  name: "landing",

  methods: {
    signIn() {
      AppData.blockstack.redirectToSignIn();
    }
  }
});
</script>

<style scoped>
.hero-stuff {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-stuff > h2 {
  font-weight: 300;
  font-size: 40px;
  color: #00ffa2;
  text-align: center;
}

.hero-bg {
  width: 100%;
  height: 1000px;
  background: #004466;
  background-image: linear-gradient(-135deg, #004466 0%, #01324a 100%);
  transform-origin: 0;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 56vw));
  z-index: -1;
}

@media screen and (min-width: 1600px) {
  .hero-bg {
    height: 1200px;
  }
}

.hero-bg-fade {
  width: 100%;
  height: 900px;
  background: #00ffa2;
  transform-origin: 0;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(50% 0%, 100% 0, 100% calc(100% - 28vw), 50% 100%, 0% calc(100% - 28vw), 0 0);
  z-index: -2;
}

.hero-logo {
  margin-top: 112px;
  transform: scale(0.8);
}

.lio-browser-mockup {
  max-width: 720px;
  box-shadow: 0 3px 71px -20px rgba(22, 46, 58, 0.45);
  border-radius: 8px;
  margin-top: 24px;
  & .lio-mockup-img {
    margin-top: -5px;
    margin-bottom: -5px;
  }
}

.login-btn {
  z-index: 5;
  margin-top: 150px;
  padding: 0 !important;
  width: 310px;
  height: 50px;
  background-color: #270f34;
  border-radius: 0;
}

.login-btn:hover {
  background: #270f34;
  box-shadow: 4px 16px 24px -16px rgba(0, 3, 4, 0.6);
  transform: translateY(-1px);
}

.section-two {
  width: 100%;
  margin-top: 142px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.info-text > h2 {
  font-size: 40px;
}
.info-text > p {
  font-size: 20px;
  line-height: 130%;
}

.keep-simple {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 180px;
  & .info-text {
    margin-right: 80px;
  }
  & .keep-simple-graphic {
    box-shadow: 0 3px 76px -8px rgba(22, 46, 58, 0.16);
  }
}

.see-what {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 180px;
  & .info-text {
    margin-left: 80px;
  }
  & .see-what-graphic {
    /* box-shadow: 0 3px 76px -8px rgba(22, 46, 58, 0.16); */
    width: 361px;
    height: auto;
  }
}

.easy-eyes {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: -80px;
  & .info-text {
    margin-right: 80px;
  }
  /* & .easy-eyes-graphic {
    box-shadow: 0 3px 76px -8px rgba(22, 46, 58, 0.16);
  } */
}

button {
  padding: 24px 24px;
  box-shadow: 2px 4px 24px -8px rgba(0, 3, 4, 0.8);
  text-transform: uppercase;
  font-size: 24px;
}

button:hover {
  background: var(--light-green);
  box-shadow: 4px 16px 24px -16px rgba(0, 3, 4, 0.6);
  transform: translateY(-1px);
}

button:active {
  background: #002a3f;
  box-shadow: 4px 16px 24px -16px rgba(0, 3, 4, 0.8);
  color: #00ffa2;
  transform: translateY(1px);
}

footer {
  width: 100%;
  height: 400px;
  background: #01324A;
  position: absolute;
  bottom: 100;
  left: 0;
  clip-path: polygon(0 0, calc(100% - 46vw) 100%, 0% 100%);
  display: flex;
  align-items: center;
  & img {
    margin-left: 80px;
    margin-top: 120px;
  }
}
</style>
