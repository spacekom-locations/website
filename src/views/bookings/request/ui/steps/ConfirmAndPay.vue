<template>
  <div>
    <h1 class="display-1 font-weight-bold">Confirm and pay</h1>
    <div>
      <div>
        <p class="font-weight-bold">Card information</p>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-credit-card"
          placeholder="1234 1234 1234 1234"
          prefix="   "
          :hide-details="true"
          class="rounded-0"
        />
      </div>
      <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0">
          <v-text-field outlined class="rounded-0" placeholder="MM / YY" />
        </v-col>
        <v-col class="ma-0 pa-0">
          <v-text-field outlined class="rounded-0" placeholder="CVC" />
        </v-col>
      </v-row>
      <div>
        <p class="font-weight-bold">Name on card</p>
        <v-text-field
          outlined
          placeholder="Name"
          prefix="   "
          :hide-details="true"
          class="rounded-0"
        />
      </div>
      <div class="my-2">
        <p class="font-weight-bold">country or region</p>
        <v-text-field
          outlined
          placeholder="Country"
          prefix="   "
          :hide-details="true"
          class="rounded-0"
        />
        <v-text-field
          outlined
          placeholder="Zip"
          prefix="   "
          :hide-details="true"
          class="rounded-0"
        />
      </div>
    </div>
    <div class="mt-6">
      <v-card-actions>
        <v-btn @click="$emit('goBack')" color="secondary" text depressed large>
          <v-icon>mdi-arrow-left</v-icon>
          <span class="mx-1"></span>
          <span> back </span>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          depressed
          large
          @click="goNext"
          :loading="loading"
        >
          Continue
        </v-btn>
      </v-card-actions>
    </div>
  </div>
</template>

<script>
import { bookLocation } from "@/api/bookings/index";
import Sugar from "sugar";

export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async goNext() {
      await this.bookLocation();

      this.$router.replace({
        name: "Bookings.Index",
      });
      this.$store.commit("Bookings/resetCurrentBooking");
    },
    async bookLocation() {
      this.loading = true;
      const bookingData = {
        addons: JSON.stringify(this.bookingDetails.addOns),
        location_id: this.location.id,
        dates: JSON.stringify(this.bookingDetails.selectedDates),
        project_name: this.bookingDetails.projectDetails.projectName,
        project_description:
          this.bookingDetails.projectDetails.projectDescription,
        company_name: this.bookingDetails.projectDetails.producerName,
        about_renter: this.bookingDetails.projectDetails.aboutRenter,
        crew_size: this.bookingDetails.selectedCrewRange,
        activity: this.bookingDetails.selectedActivity,
        sub_activity: this.bookingDetails.selectedActivity,
        pricing: JSON.stringify(this.location.pricing),
        system_fees: JSON.stringify(this.systemFees),
        total_price: this.totalPrice,
      };
      try {
        const response = await bookLocation(bookingData);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
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
    getRangeFromName(name) {
      name = name.trim();
      for (let range of this.location.pricing.ranges) {
        if (range.name == name) return range;
      }
      return false;
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
    rentPrice() {
      return (
        this.getRangeFromName(
          this.bookingDetails.selectedCrewRange
            ? this.bookingDetails.selectedCrewRange
            : "1 - 5"
        ).prices[this.bookingDetails.selectedActivity] * this.totalHours
      );
    },
    totalPrice() {
      let price = 0;
      price += this.rentPrice;
      price += this.totalSystemFees;
      price += this.totalAddOnsFees;
      return price;
    },
    totalSystemFees() {
      let price = 0;
      for (let fee of this.systemFees) {
        price += fee.amount;
      }
      return price;
    },
    totalAddOnsFees() {
      let price = 0;
      for (let fee of this.bookingDetails.addOns) {
        price += fee.amount;
      }

      return price;
    },
    totalHours() {
      let hours = 0;
      for (let day of this.bookingDetails.selectedDates) {
        hours += this.diffInHours(day.start, day.end);
      }
      return hours;
    },
    systemFees() {
      const fees = [
        {
          id: "PROCESSING_FEES",
          name: "Processing Fees",
          amount: 250,
          currency_code: "AED",
          type: "fixed", // type may be fixed of percentage
        },
      ];
      return fees;
    },
  },
};
</script>

<style>
</style>