<template>
  <v-app-bar fixed :color="bg" elevate-on-scroll class="px-4">
    <router-link :to="{ name: 'Home' }" style="text-decoration: none">
      <div class="d-flex align-center">
        <span class="blue--text display-1 font-weight-bold"> Space</span
        ><span class="orange--text display-1 font-weight-black">Kom </span>
      </div>
    </router-link>

    <v-spacer></v-spacer>

    <template v-if="!isAuthenticated">
      <v-btn
        route
        :to="{ name: 'Authenticate', query: { action: 'login' } }"
        large
        color="info"
        text
        >Login</v-btn
      >
      <span class="mx-1"></span>
      <v-btn
        route
        :to="{ name: 'Authenticate', query: { action: 'signup' } }"
        large
        color="info"
        text
        outlined
        >SingUp</v-btn
      >
    </template>
    <template v-else>
      <v-btn
        route
        :to="{ name: 'Authenticate' }"
        large
        color="info"
        text
        class="mx-1"
      >
        Bookings
      </v-btn>
      <v-btn
        route
        :to="{ name: 'Authenticate' }"
        large
        color="info"
        text
        class="mx-1"
      >
        Listing
      </v-btn>
      <v-btn
        route
        :to="{ name: 'Authenticate' }"
        large
        color="info"
        text
        class="mx-1"
      >
        Messages
      </v-btn>
      <v-btn
        route
        :to="{ name: 'Authenticate' }"
        large
        color="info"
        text
        class="mx-1"
      >
        Drive Bookings
      </v-btn>
      <notifications />
      <profile />
    </template>
  </v-app-bar>
</template>

<script>
import Notifications from "./Notifications.vue";
import Profile from "./Profile.vue";
export default {
  components: { Profile, Notifications },
  data: () => ({
    bg: "transparent",
  }),
  computed: {
    isAuthenticated() {
      return this.$store.getters["User/isAuthenticated"];
    },
  },
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        this.bg = "white";
      } else {
        this.bg = "transparent";
      }
    },
  },
};
</script>

<style>
</style>