import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Importacion de Bootstrap
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Importacion de Axios
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

// Importacion de Vue-SweatAlert2
import vueSweetAlert from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(vueSweetAlert);

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = "http://localhost:8000/api";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
