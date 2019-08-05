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


        <button class="login-btn" @click.prevent="signIn">  <img src="../assets/buttons/btn-blockstack-light-l.svg" alt="Sign In with Blockstack"></button>
      </div>
    </div>

    <div class="section-two">
      <div class="keep-simple">
        <div class="info-text">
          <h2>Let’s keep things simple.</h2>
          <p>Quickly see an overview of all your cyrptocurrency<br>
            investments. Dive into details on the graph page.</p>
        </div>
        <img class="keep-simple-graphic" src="../assets/keep-simple-graphic.svg" width="312px" height="230px">
      </div>

      <div class="see-what">
        <img class="see-what-graphic" src="../assets/see-graphic@2x.png">
        <div class="info-text">
          <h2>See what you want,<br>when you want.</h2>
          <p>Choose which coins you want to compare in your transaction<br>history and the length of time to track them over in graphs.</p>
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
  color: #00ffa2;
  text-align: center;
  font-weight: 300;
  font-size: 40px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 1000px;
  background: #004466;
  background-image: linear-gradient(-135deg, #004466 0%, #01324a 100%);
  transform-origin: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 56vw));
}

.hero-bg-fade {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 900px;
  background: #00ffa2;
  transform-origin: 0;
  clip-path: polygon(50% 0%, 100% 0, 100% calc(100% - 28vw), 50% 100%, 0% calc(100% - 28vw), 0 0);
}

.hero-logo {
  margin-top: 112px;
  transform: scale(0.8);
}

.lio-browser-mockup {
  margin-top: 24px;
  max-width: 720px;
  border-radius: 8px;
  box-shadow: 0 3px 71px -20px rgba(22, 46, 58, 0.45);
  & .lio-mockup-img {
    margin-top: -5px;
    margin-bottom: -5px;
  }
}

.login-btn {
  z-index: 5;
  margin-top: 150px;

  padding: 0px 0px;
  border: none;
  border-radius: 0px;
  background-color: transparent !important;
  box-shadow: unset;
  color: unset;
  /* text-transform: uppercase;
  font-weight: 500; */
  cursor: pointer;
  transition: all 0.25s var(--ease-out-cubic);
  transform: translateY(0px);
}

.login-btn:hover {
  transform: translateY(-1px);

  background-color: transparent;
  box-shadow: unset;
  transform: translateY(-1px);
}

.section-two {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 142px;
  width: 100%;
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
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 180px;
  & .info-text {
    margin-right: 80px;
  }
  & .keep-simple-graphic {
    border-radius: 16px;
    box-shadow: 0 3px 76px -8px rgba(22, 46, 58, 0.16);
  }
}

.see-what {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
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
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
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
  position: absolute;
  bottom: 100;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 400px;
  background: #01324a;
  clip-path: polygon(0 0, calc(100% - 46vw) 100%, 0% 100%);
  & img {
    margin-top: 120px;
    margin-left: 80px;
  }
}

@media screen and (min-width: 1600px) {
  .hero-bg {
    height: 1200px;
  }
}

@media screen and (min-width: 2400px) {
  .hero-bg {
    height: 1250px;
  }
}

@media screen and (max-width: 760px) {
  .lio-browser-mockup {
    margin-top: 16px;
    transform: scale(0.7);
  }

  .section-two {
    text-align: center;
  }

  .keep-simple {
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    & .info-text {
      margin-right: 0px;
    }
  }

  .see-what {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 80px;
    & .info-text {
      margin-left: 0px;
    }
    & .see-what-graphic {
      /* box-shadow: 0 3px 76px -8px rgba(22, 46, 58, 0.16); */
      width: 310px;
      height: auto;
    }
  }

  .easy-eyes {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
    & .info-text {
      margin-right: 0px;
    }
  }

  footer {
    clip-path: polygon(0 0, calc(100% + 50vw) 100%, 0% 100%);
    & img {
      margin-top: 120px;
      margin-left: 80px;
    }
  }
}

@media screen and (max-width: 530px) {
  .lio-browser-mockup {
    margin-top: 0px;
    transform: scale(0.5) translateY(-50%);
  }
  .hero-bg {
    height: 600px;
  }
  .hero-bg-fade {
    height: 660px;
  }
  .hero-logo {
    margin-top: 64px;
    transform: scale(0.8);
  }
  .login-btn {
    z-index: 5;
    margin-top: -50px;
  }
  .info-text > h2 {
    padding-right: 8px;
    padding-left: 8px;
    font-size: 32px;
  }
  .info-text > p {
    padding-right: 16px;
    padding-left: 16px;
    font-size: 16px;
    line-height: 130%;
  }
  footer {
    clip-path: polygon(0 0, calc(100% + 100vw) 100%, 0% 100%);
    & img {
      margin-top: 120px;
      margin-left: 80px;
    }
  }
}

@media screen and (max-width: 380px) {
  .lio-browser-mockup {
    margin-top: 0px;
    transform: scale(0.4) translateY(-50%);
  }
}
</style>
