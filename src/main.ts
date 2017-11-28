// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import Autocomplete from 'v-autocomplete';
import Datetime from 'vue-datetime';
import * as blockstack from 'blockstack';
import KonamiCode from 'vue-konami-code';

import './css/easings.css';
import './css/colors.css';
import './css/cryptocoins.css';
import './css/cryptocoins-colors.css';
import './css/fonts.css';
import './css/autocomplete.css';
import 'v-autocomplete/dist/v-autocomplete.css';

Vue.use(Autocomplete);
Vue.use(Datetime);
Vue.use(KonamiCode, {callback: function () {
 document.body.classList.toggle("dark-theme");
}});

declare global {
  interface Window {
    blockstack: any;
  }
}

window.blockstack = blockstack;

Vue.config.productionTip = false;

/* tslint:disable */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
