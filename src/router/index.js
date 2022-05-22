import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/authenticate",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/authenticate/Index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
