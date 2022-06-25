<template>
  <v-app-bar
    fixed
    :color="bg"
    class="px-4 elevation-0"
    :style="
      bg.toLowerCase() == `transparent`
        ? ''
        : `border-bottom: 1px solid #d2d2d2 !important`
    "
  >
    <router-link :to="{ name: 'Home' }" style="text-decoration: none">
      <div class="d-flex align-center">
        <span
          :class="`${
            bg.toLowerCase() == `transparent` ? 'white' : 'blue'
          }--text headline font-weight-bold`"
        >
          Space</span
        ><span
          :class="`${
            bg.toLowerCase() == `transparent` ? 'yellow' : 'orange'
          }--text headline font-weight-black`"
          >Kom
        </span>
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
        :to="{ name: button.route.name }"
        large
        :color="bg.toLowerCase() == 'transparent' ? 'white' : 'info'"
        text
        class="mx-1"
        v-for="(button, index) of quickAccessButtons"
        :key="button.route.name + '_' + index"
      >
        {{ button.name }}
      </v-btn>

      <notifications
        :color="bg.toLowerCase() == 'transparent' ? 'white' : 'info'"
      />
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
    transparentPages() {
      return ["HOME"];
    },
    quickAccessButtons() {
      return [
        { name: "Bookings", route: { name: "Bookings.Index" } },
        { name: "Listing", route: { name: "Locations.Mine" } },
        { name: "Messages", route: { name: "Messages.Index" } },
        // { name: "Drive Bookings", route: { name: "Locations.Mine" } },
      ];
    },
  },
  mounted() {
    this.changeColor();
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (
        this.$route.name &&
        !this.transparentPages.includes(this.$route.name.toUpperCase())
      ) {
        this.bg = "white";
        return;
      }
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
  watch: {
    $route() {
      this.changeColor();
    },
  },
};
</script>

<style>
</style>