export default [
  {
    path: "/my-locations/add",
    name: "Locations.Add",
    component: () =>
      import(
        /* webpackChunkName: "add-location" */ "../views/locations/myLocations/add/Index.vue"
      ),
  },
  {
    path: "/my-locations/:id",
    name: "Locations.View.Progress",
    component: () =>
      import(
        /* webpackChunkName: "view-location-progress" */ "../views/locations/myLocations/view-progress/index.vue"
      ),
  },
  {
    path: "/my-locations/:id/edit/:category/:step",
    name: "Locations.Edit",
    component: () =>
      import(
        /* webpackChunkName: "edit-location-basics" */ "../views/locations/myLocations/edit/Index.vue"
      ),
  },
  {
    path: "/my-locations",
    name: "Locations.Mine",
    component: () =>
      import(
        /* webpackChunkName: "my-locations" */ "../views/locations/myLocations/Index.vue"
      ),
  },
  {
    path: "/locations/:id",
    name: "Locations.Show",
    component: () =>
      import(
        /* webpackChunkName: "location-view" */ "../views/locations/ShowLocation.vue"
      ),
  },
];
