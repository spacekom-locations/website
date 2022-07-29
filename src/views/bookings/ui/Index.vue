<template>
  <v-container style="max-width: 1080px" class="mt-4">
    <v-row>
      <v-col>
        <v-tabs color="success" :loading="loading" v-model="tab">
          <v-tab
            :href="`#${tab.id}`"
            v-for="(tab, index) of tabs"
            :key="tab.id + index"
          >
            <v-badge :content="0" :value="0" color="green" inline>
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
                :bookingData="booking"
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
        { id: "UP_COMING", name: "Up Coming", bookings: this.bookings },
        { id: "COMPLETED", name: "Completed", bookings: [] },
        { id: "CANCELED", name: "Cancelled", bookings: [] },
        { id: "ALL", name: "All", bookings: [] },
      ];
    },
  },
  created() {
    this.loadBookings();
  },
  methods: {
    async loadBookings() {
      this.loading = true;
      try {
        const response = await indexBookings();
        this.bookings = response.data;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style>
</style>