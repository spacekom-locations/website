<template>
  <div>
    <v-row>
      <v-col>
        <p class="headline">Listing</p>
      </v-col>
    </v-row>
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
      <v-col
        v-for="location of locations"
        :key="location.id"
        md="6"
        sm="12"
      >
        <location-card :location="location" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LocationCard from "@/components/LocationCard.vue";
import { getUserLocations } from "@/api/locations";

export default {
  components: { LocationCard },
  data: () => ({
    locations: [],
    loading: false,
  }),
  created() {
    this.loadListing();
  },
  methods: {
    async loadListing() {
      this.loading = true;
      try {
        const response = await getUserLocations(this.$route.params.id);
        this.locations = response.data;
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