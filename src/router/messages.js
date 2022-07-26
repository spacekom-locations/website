export default [
  {
    path: "/messages",
    name: "Messages.Index",
    component: () =>
      import(
        /* webpackChunkName: "add-location" */ "../views/messages/ui/Index.vue"
      ),
    children: [
      {
        path: ":id",
        name: "Messages.Thread",
        component: () =>
          import(
            /* webpackChunkName: "add-location" */ "../views/messages/ui/MessagesView.vue"
          ),
      },
    ],
  },
];
