<template>
  <v-container style="max-width: 1080px" class="mt-12">
    <v-row>
      <v-col>
        <v-tabs color="success" :loading="loading" v-model="tab">
          <v-tab
            :href="`#${tab.id}`"
            v-for="(tab, index) of tabs"
            :key="tab.id + index"
          >
            <v-badge
              :content="tab.locations.length"
              :value="tab.locations.length"
              color="green"
              inline
            >
              <span class="mx-2">
                {{ tab.name }}
              </span>
            </v-badge>
          </v-tab>

          <v-spacer></v-spacer>
          <v-btn route :to="{ name: 'Locations.Add' }" color="success" large>
            <v-icon>mdi-map-marker-plus-outline</v-icon>
            <span class="mx-1"></span>
            <span>Add new listing</span>
          </v-btn>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="(tab, index) of tabs"
            :value="tab.id"
            :key="tab.id + index"
          >
            <div v-if="loading" class="mt-12 pt-12">
              <v-progress-linear
                rounded
                :indeterminate="true"
                color="success"
                height="25"
              ></v-progress-linear>
            </div>
            <div class="mt-6 pa-4">
              <v-card
                outlined
                class="pa-8 grey--text"
                v-if="tab.locations.length == 0 && loading == false"
              >
                <v-card-title>
                  <v-spacer></v-spacer>
                  {{ tab.name }}
                  <v-spacer></v-spacer>
                </v-card-title>
                <v-card-title>
                  <v-spacer></v-spacer>
                  you have no locations here
                  <v-spacer></v-spacer>
                </v-card-title>
              </v-card>
              <v-card
                outlined
                class="my-6"
                v-for="(location, index) of tab.locations"
                :key="location.id + index"
              >
                <v-card-text>
                  <v-row>
                    <v-col cols="12" xl="4" lg="4" md="4" sm="6" xs="12">
                      <div class="bordered rounded-lg">
                        <v-hover v-slot="{ hover }">
                          <v-img
                            :src="
                              location.images[0] == null
                                ? 'https://giggster.com/images/imgEmpty2.svg'
                                : location.images[0]
                            "
                            :aspect-ratio="16 / 9"
                            class="rounded-lg elevation-4"
                          >
                            <v-expand-transition>
                              <div
                                v-if="hover"
                                class="
                                  d-flex
                                  transition-fast-in-fast-out
                                  v-card--reveal
                                  text-h2
                                  white--text
                                  align-center
                                  justify-center
                                "
                                style="height: 100%; background-color: #ccc5"
                              >
                                <v-btn
                                  color="white"
                                  x-large
                                  depressed
                                  icon
                                  route
                                  :to="{
                                    name: 'Locations.Edit',
                                    params: {
                                      id: location.id,
                                      category: 'scene',
                                      step: 'location-images',
                                    },
                                  }"
                                >
                                  <v-icon>mdi-camera</v-icon>
                                </v-btn>
                              </div>
                            </v-expand-transition>
                          </v-img>
                        </v-hover>
                      </div>
                    </v-col>
                    <v-col>
                      <div>
                        <p class="subtitle-1">{{ location.title }}</p>
                        <span class="my-2"></span>
                        <span class="grey--text">{{ location.city }}</span>
                      </div>
                      <div class="mt-3">
                        <span class="subtitle-2">
                          From
                          {{ location.pricing.ranges[0].prices.MEETING }}
                          {{ location.currency_code }}
                        </span>
                      </div>
                      <div>
                        <v-progress-linear
                          class="my-6"
                          :value="completionProgress(location)"
                          height="5"
                          color="success"
                          rounded
                          v-if="completionProgress(location) < 100"
                        ></v-progress-linear>
                        <div v-else>
                          <v-card
                            width="35px"
                            height="35px"
                            outlined
                            class="
                              rounded-circle
                              text-center
                              my-4
                              d-inline-block
                            "
                            style="line-height: 35px; border: 1px solid green"
                          >
                            <v-icon color="success">mdi-check</v-icon>
                          </v-card>
                          <span class="mx-2">
                            Listing is 100% done. Last updated
                            <elegant-date
                              type="relative"
                              :date="location.updated_at"
                            />
                          </span>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="pa-4">
                  <v-btn
                    class="mx-2"
                    color="secondary"
                    text
                    route
                    :to="{
                      name: 'Locations.View.Progress',
                      params: {
                        id: location.id,
                      },
                    }"
                    >edit location</v-btn
                  >
                  <v-btn
                    class="mx-2"
                    color="secondary"
                    text
                    route
                    :to="{
                      name: 'Locations.Edit',
                      params: {
                        id: location.id,
                        category: 'get_ready',
                        step: 'location-pricing',
                      },
                    }"
                  >
                    Price
                  </v-btn>
                  <v-btn
                    color="success"
                    v-if="completionProgress(location) >= 100"
                    large
                    depressed
                  >
                    <span class="mx-3">
                      <v-icon>mdi-check</v-icon>
                      <span class="mx-1"></span> 
                      Publish
                    </span>
                  </v-btn>
                  <v-btn class="mx-2" color="secondary" text>Preview</v-btn>
                  <v-spacer></v-spacer>
                  <location-status :value="location.status" />
                </v-card-actions>
              </v-card>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
    <!-- <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay> -->
  </v-container>
</template>

<script>
import { indexMyLocations } from "@/api/locations";
import LocationStatus from "@/components/locations/LocationStatus.vue";
import { completionProgress } from "./view-progress/index";
import ElegantDate from "@/components/ElegantDate.vue";

export default {
  components: { LocationStatus, ElegantDate },
  data() {
    return {
      locations: [],
      loading: false,
      tab: "all-locations",
    };
  },
  created() {
    this.loadLocations();
  },
  computed: {
    activeListing() {
      return this.locations.filter((item) => item.status == "PUBLISHED");
    },
    inReviewListing() {
      return this.locations.filter((item) => item.status == "IN_REVIEW");
    },
    unpublishedListing() {
      return this.locations.filter((item) => item.status == "UNPUBLISHED");
    },
    suspendedListing() {
      return this.locations.filter((item) => item.status == "SUSPENDED");
    },
    tabs() {
      return [
        { id: "ALL_LISTINGS", name: "all listings", locations: this.locations },
        { id: "ACTIVE", name: "active", locations: this.activeListing },
        { id: "IN_REVIEW", name: "in-review", locations: this.inReviewListing },
        {
          id: "UNPUBLISHED",
          name: "unpublished",
          locations: this.unpublishedListing,
        },
        {
          id: "SUSPENDED",
          name: "suspended",
          locations: this.suspendedListing,
        },
      ];
    },
  },
  methods: {
    completionProgress(location) {
      return completionProgress(location);
    },
    async loadLocations() {
      this.loading = true;
      try {
        const response = await indexMyLocations();
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