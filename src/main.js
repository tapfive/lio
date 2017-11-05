// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Autocomplete from 'v-autocomplete'

import './css/fonts.css'
import './css/autocomplete.css'
import 'v-autocomplete/dist/v-autocomplete.css'

Vue.use(Autocomplete)

window.blockstack = require('blockstack')
window.blockstackStorage = require('blockstack-storage')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
