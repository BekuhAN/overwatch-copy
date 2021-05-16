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
  faCloudUploadAlt,
  faPencilAlt,
  faSearch,
  faShareSquare,
  faStar,
  faTimes,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import CKEditor from "@ckeditor/ckeditor5-vue2";

library.add(
  faFacebookF,
  faYoutube,
  faVk,
  faAngleLeft,
  faAngleRight,
  faTimes,
  faShareSquare,
  faTwitter,
  faStar,
  faCloudUploadAlt,
  faPencilAlt,
  faTrashAlt,
  faSearch
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(CKEditor);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
