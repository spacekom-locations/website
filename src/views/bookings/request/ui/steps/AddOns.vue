<template>
  <div>
    <h1 class="display-1">Add-Ons</h1>
    <v-card flat class="mx-2 mt-6">
      <div
        v-for="(addon, index) of defaultAddOns"
        :key="addon.id + index"
        class="my-4"
      >
        <div>
          <v-simple-checkbox
            checked
            color="success"
            :ripple="false"
            class="d-inline-block"
            :value="isAddOnUsed(addon.id)"
            @click="toggleAddOn(addon)"
          />
          <span
            class="font-weight-bold headline"
            style="cursor: pointer"
            @click="toggleAddOn(addon)"
          >
            {{ addon.name }}
          </span>
          <span class="mx-1"></span>
          <v-card
            class="d-inline-block"
            outlined
            :color="isAddOnUsed(addon.id) ? 'secondary white--text' : ''"
          >
            <v-card-title class="px-0 py-1 mx-4">
              AED {{ addon.amount }}
            </v-card-title>
          </v-card>
        </div>
        <p class="caption grey--text mt-2">
          {{ addon.shortDescription }}
        </p>
        <p>{{ addon.description }}</p>
      </div>
      <v-card-actions>
        <v-btn @click="$emit('goBack')" color="secondary" text depressed large>
          <v-icon>mdi-arrow-left</v-icon>
          <span class="mx-1"></span>
          <span> back </span>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="success" depressed large @click="goNext">
          Continue
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    updateDetails(newValue) {
      this.bookingDetails = newValue;
      this.$emit("input", newValue);
    },
    goNext() {
      this.$emit("goNext", {
        step: "addons",
      });
    },
    isAddOnUsed(id) {
      for (let addon of this.bookingDetails.addOns) {
        if (addon.id.trim().toUpperCase() == id.trim().toUpperCase()) {
          return true;
        }
      }
      return false;
    },
    toggleAddOn(add_on) {
      
      for (let i = 0; i < this.bookingDetails.addOns.length; i++) {
        if (
          this.bookingDetails.addOns[i].id.trim().toUpperCase() ==
          add_on.id.trim().toUpperCase()
        ) {
          this.bookingDetails.addOns.splice(i, 1);
          return;
        }
      }
      

      this.bookingDetails.addOns.push({
        id: add_on.id,
        name: add_on.name,
        amount: add_on.amount,
        currency_code: add_on.currency_code,
        type: add_on.type, // type may be fixed of percentage
      });
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
    defaultAddOns() {
      const addOns = [
        {
          id: "DAMAGE_PROTECTION",
          amount: 99,
          currency_code: "AED",
          name: "Damage Protection",
          shortDescription:
            "By declining this coverage you agree to pay for all damages.",
          description:
            "We cover damage up to $2,000. This is NOT a replacement for production insurance.",
          type: "fixed", // type may be fixed of percentage
        },
        {
          id: "SITE_REPS",
          amount: 1500,
          currency_code: "AED",
          name: "Site Reps",
          shortDescription:
            "By declining this coverage you agree to pay for all damages.",
          description:
            "We cover damage up to $2,000. This is NOT a replacement for production insurance.",
          type: "fixed", // type may be fixed of percentage
        },
      ];
      return addOns;
    },
  },
};
</script>

<style>
</style>