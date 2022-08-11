export default [
  {
    path: "/about-us",
    name: "AboutUs.Index",
    component: () =>
      import(
        /* webpackChunkName: "add-location" */ "../views/about-us/Index.vue"
      ),
  }
];
