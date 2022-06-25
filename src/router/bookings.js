export default [
  {
    path: "/request-booking/new",
    name: "Bookings.Request",
    component: () =>
      import(
        /* webpackChunkName: "add-location" */ "../views/bookings/request/ui/Index.vue"
      ),
  },
  {
    path: "/bookings",
    name: "Bookings.Index",
    component: () =>
      import(
        /* webpackChunkName: "add-location" */ "../views/bookings/ui/Index.vue"
      ),
  },
];
