import Vue from "vue";
import VModal from 'vue-js-modal';
import { VueResponsiveComponents } from "vue-responsive-components";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VModal)
Vue.use(VueResponsiveComponents)

new Vue({
  render: h => h(App)
}).$mount("#app");
