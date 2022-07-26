<template>
  <div class="sticky-top">
    <v-row style="border-bottom: 1px solid #d2d2d2 !important">
      <v-col cols="2">
        <v-autocomplete
          v-model="activity"
          :items="validActivities"
          rounded
          placeholder="select an activity"
          hide-details
          item-text="value"
          item-value="id"
          append-icon=""
          prepend-inner-icon="mdi-tag-outline mdi-rotate-135"
          prefix="  "
          @change="submitFilterEvent"
        ></v-autocomplete>
      </v-col>
      <v-col cols="5" style="border-left: 1px solid #d2d2d2 !important">
        <v-text-field
          rounded
          placeholder="Search for property types, styles, features and more..."
          hide-details
          prepend-inner-icon="mdi-magnify mdi-rotate-90"
          prefix="  "
          @keyup.enter="submitFilterEvent"
          v-model="query"
        ></v-text-field>
      </v-col>
      <v-col cols="3" style="border-left: 1px solid #d2d2d2 !important">
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
      </v-col>
      <v-col cols="2" style="border-left: 1px solid #d2d2d2 !important">
        <filter-box />
      </v-col>
    </v-row>
    <v-row> </v-row>
  </div>
</template>

<script>
import FilterBox from './FilterBox.vue';
export default {
  components: { FilterBox },
  data: () => ({
    validActivities: [
      {
        id: "PRODUCTION",
        value: "Production",
        description: "Film and photo shoots ",
      },
      {
        id: "EVENT",
        value: "Event",
        description: "Baby showers, wedding receptions, art exhibits ",
      },
      {
        id: "MEETING",
        value: "Meeting",
        description: "Workshops, trainings, conferences ",
      },
    ],
    activity: null,
    address: null,
    query: null,
    markers: [],
  }),
  created() {
    this.activity = this.$route.query.activity;
    this.address = this.$route.query.address;
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
        query: this.query,
      });
    },
  },
};
</script>

<style>
</style>