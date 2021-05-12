import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Heros from "../views/Heros.vue";
import News from "../views/News.vue";
import CyberSport from "../views/CyberSport.vue";
import HeroPage from "../views/HeroPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/heroslist",
    name: "heroslist",
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
  {
    path: "/hero/:id",
    name: "Hero",
    component: HeroPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
