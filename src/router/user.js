export default [
  {
    path: "/authenticate",
    name: "Authenticate",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/authenticate/Index.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/Logout.vue"),
  },
  {
    path: "/profile/:id",
    name: "UserProfile",
    component: () =>
      import(
        /* webpackChunkName: "user_profile" */ "../views/users/profile/Index.vue"
      ),
  },
  {
    path: "/account",
    name: "Account.Settings",
    redirect: {name: "Account.Settings.Personal"},
    component: () =>
      import(
        /* webpackChunkName: "account_settings" */ "../views/users/accountSettings/Index.vue"
      ),
    children: [
      {
        path: "personal",
        name: "Account.Settings.Personal",
        component: () => import(/* webpackChunkName: "account_settings" */ "../views/users/accountSettings/Personal.vue")
      },
      {
        path: "additional",
        name: "Account.Settings.Additional",
        component: () => import(/* webpackChunkName: "account_settings" */ "../views/users/accountSettings/Additional.vue")
      },
      {
        path: "security",
        name: "Account.Settings.Security",
        component: () => import(/* webpackChunkName: "account_security" */ "../views/users/accountSettings/security/Index.vue")
      },
      {
        path: "payments",
        name: "Account.Settings.Payments",
        component: () => import(/* webpackChunkName: "account_payments" */ "../views/users/accountSettings/Payments.vue")
      },
      {
        path: "payouts",
        name: "Account.Settings.Payouts",
        component: () => import(/* webpackChunkName: "account_payouts" */ "../views/users/accountSettings/Payouts.vue")
      },
      {
        path: "notifications",
        name: "Account.Settings.Notifications",
        component: () => import(/* webpackChunkName: "account_notifications" */ "../views/users/accountSettings/Notifications.vue")
      }
    ]
  },
];
