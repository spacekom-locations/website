<template>
  <v-container style="max-width: 1360px">
    <user-data />
    <v-row class="mt-4">
      <v-col>
        <p class="headline">Listing</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in 4" :key="i" md="6" lg="4" sm="12">
        <location-card />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="headline">Reviews</p>
        <location-reviews v-for="i in 5" :key="i" class="mt-6" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LocationCard from "@/components/LocationCard.vue";
import LocationReviews from "../../locations/LocationReviews.vue";
import UserData from "./UserData.vue";

export default {
  components: { LocationCard, LocationReviews, UserData },
};
</script>

<style>
</style>