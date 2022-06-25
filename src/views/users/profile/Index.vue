<template>
  <v-container style="max-width: 1080px">
    <user-data />
    <user-listing class="mt-8" />
    <user-reviews class="mt-8" />
  </v-container>
</template>
<script>
import UserData from "./UserData.vue";
import UserListing from "./UserListing.vue";
import UserReviews from "./UserReviews.vue";

export default {
  components: { UserData, UserListing, UserReviews },
};
</script>

<style>
</style>