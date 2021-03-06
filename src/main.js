// @ts-nocheck
/**
 * Entry point for VueJS App
 * It enables [AWS Amplify Plugin](https://aws-amplify.github.io/docs/js/vue) as well as [Quasar framework](https://quasar-framework.org)
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/quasar.styl";
import "quasar-extras/animate";
import "quasar-extras/material-icons";
import Quasar, { Loading, QSpinnerPuff } from "quasar";

import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

Vue.use(AmplifyPlugin, AmplifyModules);

Vue.use(Quasar, {
  config: {}
});

// Set default loader for views
Loading.setDefaults({
  spinner: QSpinnerPuff,
  spinnerSize: 200 // px
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
