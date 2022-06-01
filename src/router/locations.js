export default [
  {
    path: "/locations/:id",
    name: "LocationView",
    component: () =>
      import(
        /* webpackChunkName: "location-view" */ "../views/locations/ShowLocation.vue"
      ),
  },
];
