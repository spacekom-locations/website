<template>
  <v-container>
    <div>
      <h1 class="display-1 font-weight-bold">Most popular locations</h1>
      <p class="headline grey--text">
        A diverse selection of properties from our most experienced hosts
      </p>
      <p class="my-6"></p>
    </div>
    <v-row>
      <v-col
        v-for="i in 8"
        :key="i"
        md="6"
        lg="3"
        sm="12"
      >
        <location-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LocationCard from "@/components/LocationCard.vue";
export default {
  components: { LocationCard },
};
</script>

<style>
</style>