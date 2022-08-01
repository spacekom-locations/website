<template>
  <div>
    <map-view :locations="locations" v-if="showMap" width="33.3333vw" />
    <v-card fill-height flat style="min-height: 95vh">
      <div class="sticky-top" style="z-index: 1; background-color: white">
        <v-card-text class="pa-0 ma-0">
          <filters @filter="filter" />
        </v-card-text>
        <v-card-actions class="py-3 px-6 mt-3" style="background-color: #ccc4">
          No locations found
          <v-spacer></v-spacer>
          <v-switch
            v-model="showMap"
            inset
            :label="showMap ? 'Hide Map' : 'Show Map'"
            color="success"
            hide-details
            class="pa-0 ma-0"
          ></v-switch>
        </v-card-actions>
      </div>
      <div>
        <v-row v-if="loading">
          <v-col>
            <div class="mt-12">
              <div
                color="success"
                class="pa-0 d-inline-block"
                style="width: 300px"
                v-for="n in 4"
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
        <v-row
          class="mt-12 text-center"
          v-if="!loading && locations.length < 1"
        >
          <v-col>
            <div class="d-inline-block pa-6 text-left" style="width: 500px">
              <h1 class="display-1 font-weight-bold my-2">
                No locations found
              </h1>
              <ul>
                <li>Check for misspelled words</li>
                <li>Simplify the search by removing keywords</li>
                <li>Expand your geo/map</li>
              </ul>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <div
              v-for="location of locations"
              :key="location.id"
              class="pa-4 d-inline-block"
            >
              <location-result-card :location="location" />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import { search } from "@/api/locations";
import Filters from "./Filters.vue";
import MapView from "./MapView.vue";
import LocationResultCard from "./LocationResultCard.vue";
export default {
  components: { MapView, Filters, LocationResultCard },
  data() {
    return {
      showMap: true,
      activity: null,
      address: null,
      query: null,
      loading: false,
      locations: [],
    };
  },
  created() {
    this.activity = this.$route.query.activity;
    this.address = this.$route.query.address;
    this.loadResult();
  },
  methods: {
    async loadResult() {
      this.loading = true;
      try {
        const response = await search({
          address: this.address,
          activity: this.activity,
        });
        this.locations = response.data;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    filter(q) {
      this.address = q.address;
      this.activity = q.activity;
      this.query = q.query;

      this.$router
        .replace({
          name: "Search",
          query: q,
        })
        .then(() => {
          this.locations = [];
          this.loadResult();
        })
        .catch(()=>{
          console.log('no change the same route')
        });
    },
  },
};
</script>

<style>
</style>