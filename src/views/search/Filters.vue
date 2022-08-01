<template>
  <div class="sticky-top">
    <v-row style="border-bottom: 1px solid #d2d2d2 !important">
      <v-col
        cols="6"
        style="border-left: 1px solid #d2d2d2 !important"
        class="ma-0 pa-0"
      >
        <div class="py-3">
          <v-text-field
            rounded
            placeholder="Search for property types, styles, features and more..."
            hide-details
            prepend-inner-icon="mdi-magnify mdi-rotate-90"
            prefix="  "
            @keyup.enter="submitFilterEvent"
            v-model="query"
          ></v-text-field>
        </div>
      </v-col>
      <v-col
        style="border-left: 1px solid #d2d2d2 !important"
        class="ma-0 pa-0"
      >
        <v-card-actions class="my-0 py-0">
          <div class="my-3">
            <gmap-autocomplete class="introInput" @place_changed="setPlace">
              <template v-slot:default="slotProps">
                <v-text-field
                  rounded
                  placeholder="Specify city, neighborhood..."
                  hide-details
                  prepend-inner-icon="mdi-map-marker-outline"
                  prefix="  "
                  ref="input"
                  v-on:listeners="slotProps.listeners"
                  v-on:attrs="slotProps.attrs"
                  v-model="address"
                  @keyup.enter="submitFilterEvent"
                >
                </v-text-field>
              </template>
            </gmap-autocomplete>
          </div>
          <v-spacer></v-spacer>
          <div class="py-3" style="border-left: 1px solid #d2d2d2 !important">
            <filter-box
              @update-filters="updateUponFilters"
              
            />
          </div>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-row> </v-row>
  </div>
</template>

<script>
import FilterBox from "./FilterBox.vue";
export default {
  components: { FilterBox },
  data: () => ({
    activity: null,
    address: null,
    crew: null,
    price: null,
    query: null,
    markers: [],
  }),
  created() {
    this.activity = this.$route.query.activity;
    this.address = this.$route.query.address;
    this.price = this.$route.query.price;
    this.crew = this.$route.query.crew;
    this.query = this.$route.query.query;
  },
  methods: {
    setPlace(place) {
      this.address = place.name;
      this.submitFilterEvent();
    },
    submitFilterEvent() {
      this.$emit("filter", {
        activity: this.activity,
        address: this.address,
        price: this.price,
        crew: this.crew,
        query: this.query,
      });
    },
    updateUponFilters(filters) {
      this.price = filters.price;
      this.crew = filters.crew;
      if (filters.query) {
        let q = "";
        if (this.query && this.query.trim() != "") {
          q += this.query + ", ";
        }
        q += filters.query;
        q = q.replace(/\s+/g, "").trim();
        q = q.replace(/,+/g, ",");
        q = q.split(",");
        q = q.filter(function (value, index, self) {
          return self.indexOf(value) === index;
        });
        this.query = q.join(", ");
      }
      this.submitFilterEvent();
    },
  },
  watch: {
    "$route.query.activity"() {
      this.activity = this.activity = this.$route.query.activity;
      this.$emit("filter", {
        activity: this.activity,
        address: this.address,
        query: this.query,
      });
    },
  },
};
</script>

<style>
</style>