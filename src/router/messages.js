export default [
  {
    path: "/messages",
    name: "Messages.Index",
    component: () =>
      import(
        /* webpackChunkName: "add-location" */ "../views/messages/ui/Index.vue"
      ),
  },
];
