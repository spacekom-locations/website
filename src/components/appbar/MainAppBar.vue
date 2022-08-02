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
    <span class="mx-2"></span>
    <v-menu rounded="b-xl" offset-y v-if="bg.toLowerCase() != `transparent`">
      <template v-slot:activator="{ attrs, on }">
        <v-btn color="secondary" text v-bind="attrs" v-on="on" large>
          <span class="font-weight-black">
            {{
              $route.name == "Search" && $route.query.activity
                ? $route.query.activity
                : "Search"
            }}
          </span>
          <v-icon size="18">mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          class="primary--text"
          v-for="activity in validActivities"
          :key="activity.id"
          link
          route
          :to="{
            name: 'Search',
            query: {
              activity: activity.id,
            },
          }"
          exact
        >
          <v-list-item-title v-text="activity.value"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

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
    validActivities: [
      {
        id: "PRODUCTION",
        value: "Production",
        description: "Film and photo shoots ",
      },
      {
        id: "EVENT",
        value: "Event",
        description: "Baby showers, wedding receptions, art exhibits ",
      },
      {
        id: "MEETING",
        value: "Meeting",
        description: "Workshops, trainings, conferences ",
      },
    ],
    activity: null,
  }),
  computed: {
    isAuthenticated() {
      return this.$store.getters["User/isAuthenticated"];
    },
    transparentPages() {
      return ["HOME"];
    },
    quickAccessButtons() {
      const buttons = [];
      buttons.push({ name: "Bookings", route: { name: "Bookings.Index" } });
      if (this.$store.getters["User/isHost"]) {
        buttons.push({ name: "Listing", route: { name: "Locations.Mine" } });
      }
      buttons.push({ name: "Messages", route: { name: "Messages.Index" } });
      return buttons;
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