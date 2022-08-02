export default [
  {
    path: "/messages",
    name: "Messages.Index",
    component: () =>
      import(
        /* webpackChunkName: "messages-index" */ "../views/messages/ui/Index.vue"
      ),
    children: [
      {
        path: ":id",
        name: "Messages.Thread",
        component: () =>
          import(
            /* webpackChunkName: "messages-thread" */ "../views/messages/ui/MessagesView.vue"
          ),
      },
    ],
  },
];
