import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Heros from "../views/Heros.vue";
import News from "../views/News.vue";
import CyberSport from "../views/CyberSport.vue";
import HeroPage from "../views/HeroPage.vue";
import AddNewsPage from "../views/AddNewsPage.vue";
import NewsPage from "../views/NewsPage.vue";
import AdminPanel from "../views/AdminPanel.vue";
import ChangeNewsPage from "../views/ChangeNewsPage.vue";

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
  {
    path: "/post/:id",
    name: "Post",
    component: NewsPage,
  },
  {
    path: "/addnews",
    name: "AddNews",
    component: AddNewsPage,
  },
  {
    path: "/changeNews/:id",
    name: "ChangeNews",
    component: ChangeNewsPage,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPanel,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
