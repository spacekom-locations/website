<template>
  <v-container style="max-width: 1080px" class="mt-4">
    <v-row>
      <v-col>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn
            :color="$store.getters['User/isHost'] ? 'success' : 'primary'"
            x-large
            outlined
            :loading="loading"
            @click="
              $store.commit('User/toggleIsHost');
            "
          >
            <v-icon>mdi-account-switch</v-icon>
            <span class="mx-2"></span>
            {{
              isHost
                ? "Switch to renter"
                : "Switch to host"
            }}
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-tabs color="success" :loading="loading" v-model="tab">
          <v-tab
            :href="`#${tab.id}`"
            v-for="(tab, index) of tabs"
            :key="tab.id + index"
          >
            <v-badge
              :content="tab.bookings.length"
              :value="tab.bookings.length"
              color="green"
              inline
            >
              <span class="mx-2">
                {{ tab.name }}
              </span>
            </v-badge>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="(tab, index) of tabs"
            :value="tab.id"
            :key="tab.id + index"
          >
            <div v-if="loading" class="mt-12 pt-12">
              <v-progress-linear
                rounded
                :indeterminate="true"
                color="success"
                height="25"
              ></v-progress-linear>
            </div>
            <div class="mt-6 pa-4">
              <v-card
                outlined
                class="pa-8 grey--text"
                v-if="tab.bookings.length == 0 && loading == false"
              >
                <v-card-title>
                  <v-spacer></v-spacer>
                  {{ tab.name }}
                  <v-spacer></v-spacer>
                </v-card-title>
                <v-card-title>
                  <v-spacer></v-spacer>
                  you have no bookings here
                  <v-spacer></v-spacer>
                </v-card-title>
              </v-card>
              <booking-view
                :value="booking"
                v-for="(booking, index) of tab.bookings"
                :key="booking.id + index"
              />
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { indexBookings } from "@/api/bookings";
import BookingView from "./BookingView.vue";

export default {
  components: { BookingView },
  data: () => ({
    loading: false,
    tab: "Up Coming",
    bookings: [],
  }),
  computed: {
    tabs() {
      return [
        { id: "UP_COMING", name: "Up Coming", bookings: this.upComingBookings },
        { id: "APPROVED", name: "Approved", bookings: this.approvedBookings },
        {
          id: "COMPLETED",
          name: "Completed",
          bookings: this.completedBookings,
        },
        { id: "DECLINED", name: "Cancelled", bookings: this.declinedBookings },
        { id: "CANCELED", name: "Cancelled", bookings: this.cancelledBookings },
        { id: "ALL", name: "All", bookings: this.bookings },
      ];
    },
    upComingBookings() {
      return this.bookings.filter((item) => item.status == "PENDING");
    },
    approvedBookings() {
      return this.bookings.filter((item) => item.status == "APPROVED");
    },
    declinedBookings() {
      return this.bookings.filter((item) => item.status == "DECLINED");
    },
    completedBookings() {
      return this.bookings.filter(
        (item) => item.status == "COMPLETED" || item.status == "PAID"
      );
    },
    cancelledBookings() {
      return this.bookings.filter((item) => item.status == "CANCELED");
    },
    isHost(){
      return this.$store.getters['User/isHost'];
    }
  },
  created() {
    this.loadBookings();
  },
  methods: {
    async loadBookings() {
      this.bookings = [];
      this.loading = true;
      try {
        const response = await indexBookings();
        this.bookings = response.data;
        for (let booking of this.bookings) {
          if (booking.dates) booking.dates = JSON.parse(booking.dates);
          if (booking.addons) booking.addons = JSON.parse(booking.addons);
          if (booking.custom_fees)
            booking.custom_fees = JSON.parse(booking.custom_fees);
          if (booking.system_fees)
            booking.system_fees = JSON.parse(booking.system_fees);
        }
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
  watch: {
    isHost() {
      this.loadBookings();
    },
  },
};
</script>

<style>
</style>