<template>
  <v-container style="max-width: 1080px" class="mt-4">
    <v-row>
      <v-col cols="7">
        <div>
          <v-stepper class="elevation-0" v-model="step">
            <v-stepper-header class="elevation-0">
              <v-stepper-step
                :complete="step > 1"
                step="1"
                :color="step > 1 ? 'success' : 'primary'"
              >
                Activity Details
              </v-stepper-step>

              <v-icon>mdi-chevron-right</v-icon>

              <v-stepper-step
                :complete="step > 2"
                step="2"
                :color="step > 2 ? 'success' : 'primary'"
              >
                Add ones
              </v-stepper-step>

              <v-icon>mdi-chevron-right</v-icon>

              <v-stepper-step
                :complete="step > 3"
                step="3"
                :color="step > 3 ? 'success' : 'primary'"
              >
                Confirm and Pay
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1" class="mx-4">
                <activity-detail
                  @goNext="goNext"
                  v-model="bookingDetails"
                  :location="location"
                />
              </v-stepper-content>

              <v-stepper-content step="2">
                <add-ons
                  @goNext="goNext"
                  v-model="bookingDetails"
                  :location="location"
                />
              </v-stepper-content>

              <v-stepper-content step="3">
                <confirm-and-pay />
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </div>
      </v-col>
      <v-col>
        <div class="sticky-top mx-4">
          <booking-short-details-card
            :location="location"
            :bookingDetails="bookingDetails"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Sugar from "sugar";
import BookingShortDetailsCard from "./bookingShortDetailsCard.vue";
import ActivityDetail from "./steps/ActivityDetails.vue";
import AddOns from "./steps/AddOns.vue";
import ConfirmAndPay from './steps/ConfirmAndPay.vue';
export default {
  components: { ActivityDetail, BookingShortDetailsCard, AddOns, ConfirmAndPay },
  props: {},
  data() {
    return {
      step: 1,
    };
  },
  mounted() {},
  computed: {
    totalHours() {
      let hours = 0;
      for (let day of this.bookingDetails.selectedDates) {
        hours += this.diffInHours(day.start, day.end);
      }
      return hours;
    },
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
    goNext() {
      ++this.step;
      this.$vuetify.goTo(0);
    },
    diffInHours(startTime, endTime) {
      if (!startTime || !endTime) return 0;
      const startDate = new Sugar.Date(startTime);
      const endDate = new Sugar.Date(endTime);
      if (this.isNextDay(endTime)) {
        endDate.addDays(1);
      }

      return Math.ceil(Math.abs(endDate.raw - startDate.raw) / 36e5);
    },
    isNextDay(time) {
      if (!time) return false;
      switch (time.toString().toLowerCase()) {
        case "01:00 am":
        case "02:00 am":
        case "03:00 am":
        case "04:00 am":
        case "05:00 am":
        case "06:00 am":
          return true;
        default:
          return false;
      }
    },
  },
};
</script>