import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/Index.vue";
import userRoutes from "./user";
import locationRoutes from "./locations";
import bookingsRoutes from "./bookings";
import messagesRoutes from "./messages";
import aboutUsRoutes from "./about";

Vue.use(VueRouter);

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/search/Index.vue"),
  },
];

const routes = [
  ...mainRoutes,
  ...aboutUsRoutes,
  ...userRoutes,
  ...locationRoutes,
  ...bookingsRoutes,
  ...messagesRoutes,
];

const router = new VueRouter({
  mode: process.env.NODE_ENV == "production" ? "history" : "hash",
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
