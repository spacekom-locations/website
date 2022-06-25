<template>
  <div>
    <h1 class="display-1">Activity details</h1>
    <v-card flat class="mx-2 mt-6">
      <booking-inputs @input="updateDetails" :location="location" />
      <div class="pt-8" id="projectNameInput">
        <p class="font-weight-bold my-2">
          {{
            bookingDetails.selectedActivity == "PRODUCTION"
              ? "Project Name"
              : "Event Name"
          }}
        </p>
        <v-text-field
          :placeholder="`Please Enter ${
            bookingDetails.selectedActivity == 'PRODUCTION'
              ? 'Project Name'
              : 'Event Name'
          }`"
          outlined
          v-model="projectName"
          :error-messages="errors.projectName"
        ></v-text-field>
      </div>
      <div id="producerNameInput">
        <p class="font-weight-bold my-2">Producer or company</p>
        <v-text-field
          :placeholder="`enter producer or company name`"
          outlined
          v-model="producerName"
          :error-messages="errors.producerName"
        ></v-text-field>
      </div>
      <div>
        <p class="font-weight-bold my-2">
          {{
            bookingDetails.selectedActivity == "PRODUCTION"
              ? "Project description"
              : "Event description"
          }}
        </p>
        <v-textarea outlined v-model="projectDescription" rows="4" />
      </div>

      <div>
        <p class="font-weight-bold my-2">About you</p>
        <v-textarea v-model="aboutRenter" outlined rows="4" />
      </div>
      <div>
        <v-btn
          color="success"
          depressed
          large
          @click="goNext"
          :disabled="
            !bookingDetails.selectedCrewRange ||
            totalHours < 1 ||
            !bookingDetails.selectedActivity ||
            location.minimum_rental_hours > totalHours
          "
        >
          Continue
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import BookingInputs from "@/views/locations/listing/viewLocation/bookingDetails/BookingInputs.vue";
import Sugar from "sugar";
export default {
  components: { BookingInputs },
  props: {},
  data() {
    return {
      projectName: null,
      producerName: null,
      projectDescription: null,
      aboutRenter: null,
      errors: {
        projectName: [],
        producerName: [],
      },
    };
  },
  mounted() {},
  methods: {
    updateDetails(newValue) {
      this.bookingDetails = newValue;
      this.$emit("input", newValue);
    },
    goNext() {
      this.errors.projectName = [];
      this.errors.producerName = [];

      if (!this.projectName || this.projectName.trim() == "") {
        this.errors.projectName.push("Please Enter Project Name");
        this.$vuetify.goTo("#projectNameInput", { offset: 50 });
        return false;
      }

      if (!this.producerName || this.producerName.trim() == "") {
        this.errors.producerName.push("Please Enter Project Name");
        this.$vuetify.goTo("#producerNameInput", { offset: 80 });
        return false;
      }

      const details = Object.assign({}, this.bookingDetails);
      details.projectDetails = {
        projectName: this.producerName,
        producerName: this.producerName,
        projectDescription: this.projectDescription,
        aboutRenter: this.aboutRenter,
      };
      console.log(details);
      this.$store.commit("Bookings/setCurrentBooking", {
        location: this.location,
        bookingDetails: details,
      });

      this.$emit("goNext", {
        step: "details",
        projectName: this.projectName,
        projectDescription: this.projectDescription,
        producerName: this.producerName,
        aboutRenter: this.aboutRenter,
      });
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
};
</script>

<style>
</style>