<template>
  <div>
    <h1 class="headline">
      Featured Reviews
      <v-rating
        color="orange"
        hover
        length="5"
        size="450"
        :value="5"
        dense
        background-color="grey"
        small
        readonly
        style="display: inline-block"
      ></v-rating>
    </h1>
    <location-reviews v-for="i in 2" :key="i" class="mt-6" />
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
  data() {
    return {};
  },
};
</script>

<style>
</style>