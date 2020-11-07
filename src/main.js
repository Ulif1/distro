import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from './data.js';
import fake from './fake.js'

Vue.config.productionTip = false;

let data = {
  distros: mock,
  apps: fake
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
