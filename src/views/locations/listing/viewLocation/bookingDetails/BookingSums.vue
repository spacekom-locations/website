<template>
  <div>
    <v-row
      class="mt-0 pt-0"
      v-if="
        bookingDetails.selectedCrewRange &&
        totalHours > 0 &&
        bookingDetails.selectedActivity &&
        totalHours > 0 &&
        location.minimum_rental_hours <= totalHours
      "
    >
      <v-col>
        <div class="subtitle-2 font-weight-bold mx-2">Price</div>
        <v-card-actions class="py-0 my-0 mb-1">
          AED {{
            getRangeFromName(
              bookingDetails.selectedCrewRange
                ? bookingDetails.selectedCrewRange
                : "1 - 5"
            ).prices[bookingDetails.selectedActivity]
          }}
          × {{ totalHours }} hours
          <v-spacer></v-spacer>
          {{
            'AED' +
            rentPrice.toLocaleString()
          }}
        </v-card-actions>
        <v-card-actions
          class="py-0 my-0 mb-1"
          v-for="(fee, index) of systemFees"
          :key="`system_fee_${index}`"
        >
          {{ fee.name }}
          <v-spacer></v-spacer>
          {{
            'AED' +
            fee.amount.toLocaleString()
          }}
        </v-card-actions>
        <v-card-actions
          class="py-0 my-0 mb-1"
          v-for="(fee, index) of bookingDetails.addOns"
          :key="`add_ons_fee_${index}`"
        >
          {{ fee.name }}
          <v-spacer></v-spacer>
          {{
            'AED' +
            fee.amount.toLocaleString()
          }}
        </v-card-actions>
        <v-divider class="my-2" style="background-color: green"></v-divider>
        <v-card-actions class="py-0 my-0">
          <span class="title"> Total </span>
          <v-spacer></v-spacer>
          {{
            'AED' +
            totalPrice.toLocaleString()
          }}
        </v-card-actions>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Sugar from "sugar";

export default {
  props: {},
  created() {},
  methods: {
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