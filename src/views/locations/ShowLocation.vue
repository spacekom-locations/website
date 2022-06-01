<template>
  <div>
    <location-images-carousal />
    <v-container class="mt-4">
      <v-row>
        <v-col cols="12" md="8" class="pa-12">
          <location-short-info />
          <location-reviews v-for="i in 3" :key="i" class="mt-6" />
          <location-description class="mt-6" />
          <div class="my-12">
            <h2 class="">Location Infos :</h2>
            <location-properties />
          </div>
          <div class="my-12">
            <h2 class="mt-6">Questions and Answers :</h2>
            <location-questions v-for="i in 3" :key="i" class="mt-6" />
          </div>

          <h2 class="my-6">
            Featured Reviews
            <v-rating
              color="orange"
              hover
              style="display: inline-block"
              length="5"
              size="28"
              :value="5"
              dense
              background-color="grey"
            ></v-rating>
          </h2>
          <location-reviews v-for="i in 5" :key="i" class="mt-6" />
        </v-col>
        <v-col class="pa-6">
          <div class="sticky-top">
            <location-instant-book-card />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LocationDescription from "./LocationDescription.vue";
import LocationImagesCarousal from "./LocationImagesCarousal.vue";
import LocationInstantBookCard from './LocationInstantBookCard.vue';
import LocationProperties from "./LocationProperties.vue";
import LocationQuestions from "./LocationQuestions.vue";
import LocationReviews from "./LocationReviews.vue";
import LocationShortInfo from "./LocationShortInfo.vue";
export default {
  components: {
    LocationShortInfo,
    LocationImagesCarousal,
    LocationReviews,
    LocationDescription,
    LocationQuestions,
    LocationProperties,
    LocationInstantBookCard,
  },
};
</script>

<style>
</style>