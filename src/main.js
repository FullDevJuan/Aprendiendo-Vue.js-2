import Vue from "vue";
// import App from "./App.vue";
import CRUD from "./CRUD.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(CRUD),
}).$mount("#crud");
