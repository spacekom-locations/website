<template>
  <div v-if="false">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="250"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon :color="color" dark class="mx-1" v-bind="attrs" v-on="on">
          <v-icon dark>mdi-bell-ring</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                Notifications
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list class="mx-2">
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(route, index) of routes"
              :key="index"
              route
              :to="route.route"
            >
              <v-list-item-icon>
                <v-icon size="28">{{ route.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                {{ route.text }}
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon color="blue">mdi-circle</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-card-actions class="pa-3">
          <v-btn
            text
            elevation=""
            color="primary"
            dark
            block
            large
            route
            to="/notifications"
          >
            See All Notifications
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      default: "info",
      type: String,
    },
  },
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    routes: [
      {
        text: "Your order has been confirmed",
        icon: "mdi-cart",
        route: "/notifications",
      },
      {
        text: "Your order has been canceled",
        icon: "mdi-cancel",
        route: "/notifications",
      },
      {
        text: "Your order has been confirmed",
        icon: "mdi-cart",
        route: "/notifications",
      },
      {
        text: "Your order has been canceled",
        icon: "mdi-cancel",
        route: "/notifications",
      },
      {
        text: "Your order has been confirmed",
        icon: "mdi-cart",
        route: "/notifications",
      },
    ],
  }),
};
</script>

<style></style>
