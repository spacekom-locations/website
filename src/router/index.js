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
    name: "Authenticate",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/authenticate/Index.vue"),
  },
  {
    path: "/locations/:id",
    name: "LocationView",
    component: () =>
      import(/* webpackChunkName: "location-view" */ "../views/locations/ShowLocation.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, form, savedPosition){
    if(savedPosition) return savedPosition;
    else {
      const position = {};
      if(to.hash){
        position.selector = to.hash;
        if(document.querySelector(to.hash)){
          return position;
        }
      }
      return {x: 0, y: 0};
    }
  }
});

export default router;
