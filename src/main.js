import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import VueAxios from "vue-axios";
import vueSweetAlert from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueProgressiveImage from "vue-progressive-image";

// Importacion de Bootstrap
Vue.use(BootstrapVue);
// Importacion de Axios
Vue.use(VueAxios, axios);
// Importacion de Vue-SweatAlert2
Vue.use(vueSweetAlert);
// Importacion de Vue-Progressive-Image
Vue.use(VueProgressiveImage);

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = "http://localhost:8000/api";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
