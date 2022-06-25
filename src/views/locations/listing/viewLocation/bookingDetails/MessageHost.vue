<template>
  <v-dialog
    :value="show"
    persistent
    max-width="500px"
    transition="dialog-transition"
    content-class="elevation-0"
  >
    <v-row>
      <v-spacer></v-spacer>
      <v-btn
        color="white"
        @click="$emit('close', 'UI_EVENT')"
        large
        icon
        class="my-4"
        ><v-icon>mdi-close</v-icon></v-btn
      >
    </v-row>
    <v-card outlined class="py-6 px-8">
      <v-row class="my-0 py-0">
        <v-col cols="8">
          <p class="headline">Send a message to {{ location.user.name }}</p>
          <p class="grey--text">
            Let your host know a bit about you, your activity, and how you plan
            to use the space
          </p>
        </v-col>
        <v-col class="text-right">
          <user-avatar :size="120" :image="location.user.avatar" />
        </v-col>
      </v-row>
      <v-row class="my-0 py-0">
        <v-col class="my-0 py-0">
          <booking-inputs />
        </v-col>
      </v-row>
      <v-row class="my-0 py-0">
        <v-col class="my-0 py-0">
          <v-checkbox
            label="My dates / times are flexible"
            v-model="flexibleDate"
            color="success"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row class="my-0 py-0">
        <v-col class="my-0 py-0">
          <p class="subtitle-2">Message your host</p>
          <v-textarea v-model="message" outlined auto-grow hide-details />
        </v-col>
      </v-row>
      <v-row class="my-0 py-0">
        <v-col class="my-0 py-0 mt-4">
          <v-btn color="success" block x-large depressed>Send a message</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import UserAvatar from "@/components/user/UserAvatar.vue";
import BookingInputs from "./BookingInputs.vue";
export default {
  components: { BookingInputs, UserAvatar },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      flexibleDate: false,
      message: "",
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

<style>
</style>