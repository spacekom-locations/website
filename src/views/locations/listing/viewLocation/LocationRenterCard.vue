<template>
  <div>
    <message-host
      v-model="bookingDetails"
      :location="location"
      :show="showSendMessageDialog"
      @close="showSendMessageDialog = false"
    />

    <v-card outlined class="pa-4">
      <v-row>
        <v-col cols="8">
          <router-link
            :to="{ name: 'UserProfile', params: { id: location.user.id } }"
            style="text-decoration: none; color: black"
          >
            <p class="title font-weight-bold py-0 my-0 user-name-route">
              {{ location.user.name }}
            </p>
          </router-link>
          <p class="subtitle-2 py-0 my-0">
            <span class="grey--text">Response rating: </span>
            <span>Excellent</span>
          </p>
          <p class="subtitle-2 py-0 my-0">
            <span class="grey--text">Response time: </span>
            <span>A few hours</span>
          </p>
        </v-col>
        <v-col class="text-right">
          <router-link
            :to="{ name: 'UserProfile', params: { id: location.user.id } }"
            style="text-decoration: none; color: black"
          >
            <user-avatar :image="location.user.avatar" :size="64" />
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            @click="showSendMessageDialog = true"
            color="success"
            outlined
            large
            block
            :disabled="
              $store.getters['User/isAuthenticated'] &&
              location.user.id == $store.getters['User/user'].id
            "
            route
          >
            Message Host
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import UserAvatar from "@/components/user/UserAvatar.vue";
import MessageHost from "./bookingDetails/MessageHost.vue";
export default {
  components: { UserAvatar, MessageHost },
  props: {},
  data() {
    return {
      showSendMessageDialog: false,
    };
  },
  created() {},
  computed: {
    bookingDetails: {
      get() {
        return this.$store.getters["Bookings/currentBooking"].bookingDetails;
      },
      set(value) {
        this.$store.commit("Bookings/setCurrentBooking", {
          location: this.location,
          bookingDetails: value,
        });
      },
    },
    location: {
      get() {
        return this.$store.getters["Bookings/currentBooking"].location;
      },
      set(value) {
        this.$store.commit("Bookings/setCurrentBooking", {
          location: value,
          bookingDetails: this.bookingDetails,
        });
      },
    },
  },
  watch: {
   
  },
};
</script>

<style scoped>
.user-name-route:hover {
  color: rgb(7, 155, 69);
  transition-duration: 350ms;
}
</style>