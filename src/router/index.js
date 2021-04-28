import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Heros from "../views/Heros.vue";
import News from "../views/News.vue";
import CyberSport from "../views/CyberSport.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/heros",
    name: "Heros",
    component: Heros,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/cybersport",
    name: "CyberSport",
    component: CyberSport,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
