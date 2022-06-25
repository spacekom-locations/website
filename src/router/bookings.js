export default [
  {
    path: "/request-booking/new",
    name: "Bookings.Request",
    component: () =>
      import(
        /* webpackChunkName: "add-location" */ "../views/bookings/request/ui/Index.vue"
      ),
  },
];
