import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faVk,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faShareSquare,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookF,
  faYoutube,
  faVk,
  faAngleLeft,
  faAngleRight,
  faTimes,
  faShareSquare,
  faTwitter,
  faStar
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
