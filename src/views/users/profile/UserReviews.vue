<template>
  <div>
    <v-row>
      <v-col>
        <p class="headline">Reviews</p>
        <location-reviews v-for="i in 5" :key="i" class="mt-6" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LocationReviews from "../../locations/LocationReviews.vue";

export default {
  components: { LocationReviews },
};
</script>

<style>
</style>