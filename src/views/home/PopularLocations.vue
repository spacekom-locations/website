<template>
  <v-container style="max-width: 1080px">
    <div>
      <h1 class="display-1 font-weight-bold">Most popular locations</h1>
      <p class="headline grey--text">
        A diverse selection of properties from our most experienced hosts
      </p>
    </div>
    <v-row v-if="loading">
      <v-col>
        <div class="mt-12 text-center">
          <div
            color="success"
            class="pa-0 d-inline-block"
            style="width: 300px"
            v-for="n in 3"
            :key="n"
          >
            <v-skeleton-loader
              class="ma-4"
              max-width="300"
              type="card"
              color="success"
            ></v-skeleton-loader>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-else class="my-6">
      <v-col v-for="location of locations" :key="location.id" md="6" lg="6" sm="12">
        <location-card :location="location" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api";
import LocationCard from "@/components/LocationCard.vue";
export default {
  components: { LocationCard },
  data: () => ({
    loading: false,
    locations: [],
  }),
  created() {
    this.loadPopularLocations();
  },
  methods: {
    async loadPopularLocations() {
      this.loading = true;
      try {
        const response = await api.get("locations/popular");
        this.locations = response.data.data;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style>
</style>