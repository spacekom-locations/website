<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="true"
      :nudge-width="300"
      offset-y
      rounded="lg"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="blue" dark v-bind="attrs" v-on="on">
          <!-- <v-icon dark>mdi-account-circle-outline</v-icon> -->
          <user-avatar
            v-bind="attrs"
            v-on="on"
            :size="40"
            :image="userAvatarImage"
          />
        </v-btn>
      </template>

      <v-card class="pa-0 pt-4">
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item disabled>
              <v-list-item-avatar size="65">
                <user-avatar :size="65" :image="userAvatarImage" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">
                  {{ $store.getters["User/user"].name }}
                </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-divider></v-divider>

        <v-list class="mx-2" rounded>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(route, index) of routes"
              :key="index"
              route
              :to="route.route"
            >
              <v-list-item-icon>
                <v-icon size="36">{{ route.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ route.text }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon size="36">mdi-chevron-right</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item
              @click="$store.commit('User/toggleIsHost')"
              v-if="$store.getters['User/isAuthenticated']"
            >
              <v-list-item-icon>
                <v-icon size="36">mdi-account-switch</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{
                  $store.getters["User/isHost"]
                    ? "Switch to renter"
                    : "Switch to host"
                }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon size="36">mdi-chevron-right</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-card-actions class="pa-3">
          <v-btn
            small
            elevation=""
            color="red"
            dark
            block
            large
            route
            :to="{ name: 'Logout' }"
          >
            <span>Logout</span>
            <v-icon right>mdi-logout</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import UserAvatar from "../user/UserAvatar.vue";
export default {
  components: { UserAvatar },
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
  computed: {
    userAvatarImage() {
      return this.$store.getters["User/user"].avatar;
    },
    routes() {
      const routes = [
        {
          text: "My Profile",
          icon: "mdi-account-circle-outline",
          route: {
            name: "UserProfile",
            params: {
              id: this.$store.getters["User/user"].id,
            },
          },
        },
        {
          text: "Account Settings",
          icon: "mdi-cog",
          route: {
            name: "Account.Settings",
          },
        },
      ];

      if (this.$store.getters["User/isHost"]) {
        routes.push({
          text: "Hosting Guid",
          icon: "mdi-help-box",
          route: "/support",
        });
      }

      return routes;
    },
  },
};
</script>

<style></style>
