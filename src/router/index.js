import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/Index.vue";
import userRoutes from "./user";
import locationRoutes from "./locations";
Vue.use(VueRouter);

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const routes = [...mainRoutes, ...userRoutes, ...locationRoutes];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, form, savedPosition) {
    if (savedPosition) return savedPosition;
    else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }
      }
      return { x: 0, y: 0 };
    }
  },
});

export default router;
