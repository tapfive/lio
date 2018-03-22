// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import Autocomplete from "v-autocomplete";
import Datetime from "vue-datetime";
import SimpleSpinner from "vue-simple-spinner";
import Switches from "vue-switches";

import "./css/easings.css";
import "./css/colors.css";
import "./css/shadows.css";
import "./css/cryptocoins.css";
import "./css/cryptocoins-colors.css";
import "./css/fonts.css";
import "./css/autocomplete.css";
import "v-autocomplete/dist/v-autocomplete.css";
import "./css/switches.css";

Vue.use(Autocomplete);
Vue.use(Datetime);
Vue.use(SimpleSpinner);
Vue.use(Switches);

Vue.config.productionTip = false;

/* tslint:disable */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
