<template>
  <div>
    <v-card v-if="loading" class="mx-auto text-center mt-12" flat>
      <v-progress-circular
        indeterminate
        size="46"
        color="success"
        :loading="true"
        class="mx-auto"
      ></v-progress-circular>
    </v-card>
    <div v-else>
      <location-images-carousal :images="location.images" />
      <v-container style="max-width: 1200px" class="py-8 my-8">
        <v-row>
          <v-col cols="8">
            <location-head-short-details :location="location" />
            <location-details :location="location" class="mt-6" />
            <location-questions :location="location" class="mt-12" />
            <location-featured-review :location="location" class="mt-12" />
            <location-approximate-location :location="location" class="mt-12" />
          </v-col>
          <v-col>
            <div class="sticky-top">
              <v-card outlined class="pa-4">
                <location-booking-inputs
                  v-model="bookingDetails"
                  :location="location"
                />
                <v-row class="mt-0 pt-0">
                  <v-col>
                    <v-btn
                      color="success"
                      large
                      block
                      depressed
                      :disabled="
                        $store.getters['User/isAuthenticated'] &&
                        location.user.id == $store.getters['User/user'].id
                      "
                      @click="goToBookingRequest"
                    >
                      Request Booking
                    </v-btn>
                  </v-col>
                </v-row>
                <booking-sums :location="location" :bookingDetails="bookingDetails" />
              </v-card>
              <location-renter-card
                v-model="bookingDetails"
                :location="location"
                class="mt-2"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { showLocation } from "@/api/locations";
import LocationImagesCarousal from "./LocationImagesCarousal.vue";
import LocationHeadShortDetails from "./LocationHeadShortDetails.vue";
import LocationDetails from "./LocationDetails.vue";
import LocationQuestions from "./LocationQuestions.vue";
import LocationFeaturedReview from "./LocationFeaturedReview.vue";
import LocationApproximateLocation from "./LocationApproximateLocation.vue";
import LocationBookingInputs from "./bookingDetails/BookingInputs.vue";
import LocationRenterCard from "./LocationRenterCard.vue";
import BookingSums from "./bookingDetails/BookingSums.vue";

export default {
  components: {
    LocationImagesCarousal,
    LocationHeadShortDetails,
    LocationDetails,
    LocationQuestions,
    LocationFeaturedReview,
    LocationApproximateLocation,
    LocationBookingInputs,
    LocationRenterCard,
    BookingSums,
  },
  data() {
    return {
      loading: false,
    };
  },
  async created() {
    this.$store.commit("Bookings/resetCurrentBooking");
    await this.loadLocation();
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
  methods: {
    async loadLocation() {
      this.loading = true;
      const location = await showLocation(this.$route.params.locationId.trim());
      this.$store.commit("Bookings/setCurrentBooking", {
        location: location.data
        ,
        bookingDetails: this.bookingDetails,
      });
      this.loading = false;
    },
    updateBookingDetails(newBookingDetails) {
      this.bookingDetails = newBookingDetails;
    },
    goToBookingRequest() {
      this.$router.push({
        name: "Bookings.Request",
        
      });
    },
  },
};
</script>

<style>
</style>