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
@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-ExtraLight.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-ExtraLight.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-ExtraLight.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-ExtraLight.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-ExtraLight.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 200;
    font-style: italic;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-ExtraLightIt.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-ExtraLightIt.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-ExtraLightIt.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-ExtraLightIt.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-ExtraLightIt.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-Light.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-Light.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-Light.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-Light.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-Light.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 300;
    font-style: italic;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-LightIt.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-LightIt.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-LightIt.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-LightIt.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-LightIt.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-Regular.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-Regular.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-Regular.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-Regular.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-Regular.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-style: italic;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-It.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-It.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-It.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-It.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-It.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-Semibold.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-Semibold.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-Semibold.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-Semibold.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-Semibold.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 600;
    font-style: italic;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-SemiboldIt.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-SemiboldIt.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-SemiboldIt.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-SemiboldIt.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-SemiboldIt.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-Bold.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-Bold.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-Bold.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-Bold.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-Bold.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 700;
    font-style: italic;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-BoldIt.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-BoldIt.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-BoldIt.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-BoldIt.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-BoldIt.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-Black.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-Black.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-Black.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-Black.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-Black.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Sans Pro';
    font-weight: 900;
    font-style: italic;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceSansPro-BlackIt.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceSansPro-BlackIt.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceSansPro-BlackIt.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceSansPro-BlackIt.otf') format('opentype'),
         url('assets/fonts/TTF/SourceSansPro-BlackIt.ttf') format('truetype');
}
@font-face{
    font-family: 'Source Code Pro';
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceCodePro-ExtraLight.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceCodePro-ExtraLight.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceCodePro-ExtraLight.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceCodePro-ExtraLight.otf') format('opentype'),
         url('assets/fonts/TTF/SourceCodePro-ExtraLight.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Code Pro';
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceCodePro-Light.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceCodePro-Light.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceCodePro-Light.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceCodePro-Light.otf') format('opentype'),
         url('assets/fonts/TTF/SourceCodePro-Light.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Code Pro';
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceCodePro-Regular.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceCodePro-Regular.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceCodePro-Regular.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceCodePro-Regular.otf') format('opentype'),
         url('assets/fonts/TTF/SourceCodePro-Regular.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Code Pro';
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceCodePro-Medium.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceCodePro-Medium.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceCodePro-Medium.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceCodePro-Medium.otf') format('opentype'),
         url('assets/fonts/TTF/SourceCodePro-Medium.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Code Pro';
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceCodePro-Semibold.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceCodePro-Semibold.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceCodePro-Semibold.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceCodePro-Semibold.otf') format('opentype'),
         url('assets/fonts/TTF/SourceCodePro-Semibold.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Code Pro';
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceCodePro-Bold.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceCodePro-Bold.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceCodePro-Bold.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceCodePro-Bold.otf') format('opentype'),
         url('assets/fonts/TTF/SourceCodePro-Bold.ttf') format('truetype');
}

@font-face{
    font-family: 'Source Code Pro';
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    src: url('assets/fonts/EOT/SourceCodePro-Black.eot') format('embedded-opentype'),
         url('assets/fonts/WOFF2/TTF/SourceCodePro-Black.ttf.woff2') format('woff2'),
         url('assets/fonts/WOFF/OTF/SourceCodePro-Black.otf.woff') format('woff'),
         url('assets/fonts/OTF/SourceCodePro-Black.otf') format('opentype'),
         url('assets/fonts/TTF/SourceCodePro-Black.ttf') format('truetype');
}

#app {
  font-family: 'Source Sans Pro','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
