<template>
  <div>
    <h2 class="display-1 my-2">
      {{ location.title }}
    </h2>
    <div>
      <v-row>
        <v-col class="text-no-wrap">
          <v-rating
            style="display: inline-block"
            color="orange"
            hover
            length="5"
            size="24"
            :value="5"
            dense
            background-color="grey"
            :readonly="true"
          ></v-rating>
        </v-col>
        <v-col class="text-no-wrap">
          <v-icon size="28">mdi-account-group-outline</v-icon>
          <span class="mx-2 font-weight-bo ld">1200</span>
        </v-col>
        <v-col class="text-no-wrap">
          <v-icon size="28">mdi-timer-outline</v-icon>
          <span class="mx-2 font-weight-bold"
            >{{ location.minimum_rental_hours }} hr minimum</span
          >
        </v-col>
        <v-col class="text-no-wrap">
          <v-icon size="28">mdi-square-outline</v-icon>
          <span class="mx-2 font-weight-bold">{{ location.size }} sq/ft</span>
        </v-col>
      </v-row>
    </div>
    <div class="subtitle-1 my-2">
      {{ location.city }}, {{ location.state }} . {{ location.country }}
    </div>
    <location-reviews v-for="i in 2" :key="i" class="mt-6" />
    <div class="my-3">
      {{ location.description }}
    </div>
  </div>
</template>

<script>
import LocationReviews from "./LocationReviews.vue";
export default {
  components: { LocationReviews },
  props: {
    location: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>