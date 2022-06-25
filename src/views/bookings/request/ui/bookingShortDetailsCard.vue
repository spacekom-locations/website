<template>
  <div>
    <v-card outlined class="pa-4">
      <v-row>
        <v-col cols="8">
          <router-link
            :to="{ name: 'Listing.Show', params: { locationId: location.id } }"
            style="text-decoration: none; color: black"
          >
            <p class="headline font-weight-bold">
              {{
                !location.title || location.title.trim() == ""
                  ? "unTitled"
                  : location.title
              }}
            </p>
          </router-link>
          <p class="grey--text">{{ location.city }}</p>
        </v-col>
        <v-col>
          <div>
            <v-img
              :src="
                location.images[0] == null
                  ? 'https://giggster.com/images/imgEmpty2.svg'
                  : location.images[0]
              "
              :aspect-ratio="1"
            />
          </div>
        </v-col>
      </v-row>
      <div class="my-3">
        <p class="font-weight-bold">Date & time</p>
        <v-card-actions
          v-for="(bookingDate, index) of bookingDetails.selectedDates"
          :key="index + bookingDate.day"
          class="my-0 py-0 pb-1"
        >
          {{ getMediumDate(bookingDate.day) }}
          <v-spacer></v-spacer>
          {{ bookingDate.start }} - {{ bookingDate.end }}
        </v-card-actions>
      </div>
      <booking-sums :location="location" :bookingDetails="bookingDetails" />
    </v-card>
  </div>
</template>

<script>
import BookingSums from "@/views/locations/listing/viewLocation/bookingDetails/BookingSums.vue";
import Sugar from "sugar";
export default {
  components: { BookingSums },
  props: {},
  methods: {
    getMediumDate(date) {
      if (!date) return;
      return new Sugar.Date(date).medium();
    },
  },
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
};
</script>

<style>
</style>