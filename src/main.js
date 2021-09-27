import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";
import jQuery from "jquery";
import axios from "axios";
import VueAxios from "vue-axios";

window.$ = window.jQuery = jQuery;
createApp(App)
  .use(router, VueAxios, axios)
  .mount("#app");
