<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What type of architectural style do you have?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(style, index) of validArchitecturalStyles"
            :key="style.id + index"
            v-model="location.architectural_styles"
            :label="style.name"
            :value="style.id"
            hide-details
            color="success"
          ></v-checkbox>
        </div>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/features.png"
          />
        </div>
        <p class="caption mt-4 grey--text">
          The features you select will allow production teams to easily search
          for and find spaces with the features they’re looking for. This is the
          first criteria used by production teams when searching for the perfect
          location.
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data: () => ({
    validArchitecturalStyles: [
      { id: "AMERICANA_ANYWHERE_AMERICA", name: "Americana/Anywhere America" },
      { id: "ART_DECO", name: "Art Deco" },
      { id: "ASIAN", name: "Asian" },
      { id: "BEACH_HOUSE", name: "Beach House" },
      { id: "BEACHFRONT", name: "Beachfront" },
      { id: "BOHEMIAN", name: "Bohemian" },
      { id: "BUNGALOW", name: "Bungalow" },
      { id: "CABIN", name: "Cabin" },
      { id: "CAPE_COD", name: "Cape Cod" },
      { id: "CASTLE_CHATEAU", name: "Castle/Chateau" },
      { id: "COLONIAL", name: "Colonial" },
      { id: "CONTEMPORARY_MODERN", name: "Contemporary Modern" },
      { id: "CRAFTSMAN", name: "Craftsman" },
      { id: "CREOLE", name: "Creole" },
      { id: "DATED_RETRO", name: "Dated/Retro" },
      { id: "DESERT", name: "Desert" },
      { id: "DILAPIDATED_NEGLECTED", name: "Dilapidated/Neglected" },
      { id: "DUTCH_COLONIAL", name: "Dutch Colonial" },
      {
        id: "EXOTIC_TROPICAL",
        name: "Exotic/Tropical",
      },
      {
        id: "FRENCH",
        name: "French",
      },
      {
        id: "GEORGIAN_SOUTHERN",
        name: "Georgian/Southern",
      },
      {
        id: "GOTHIC_VICTORIAN",
        name: "Gothic/Victorian",
      },
      {
        id: "GREEK_NEOCLASSICAL",
        name: "Greek/Neoclassical",
      },
      {
        id: "HIGH_TECH",
        name: "High Tech",
      },
      {
        id: "INDUSTRIAL",
        name: "Industrial",
      },
      {
        id: "LAKE_HOUSE",
        name: "Lake House",
      },
      {
        id: "MEDITERRANEAN",
        name: "Mediterranean",
      },
      {
        id: "MID_CENTURY_MODERN",
        name: "Mid-century Modern",
      },
      {
        id: "MOROCCAN",
        name: "Moroccan",
      },
      {
        id: "OLD_HOLLYWOOD",
        name: "Old Hollywood",
      },
      {
        id: "RANCH_STYLE",
        name: "Ranch Style",
      },
      { id: "RUSTIC", name: "Rustic" },
      {
        id: "SOUTHWESTERN",
        name: "Southwestern",
      },
      {
        id: "SPANISH",
        name: "Spanish",
      },
      {
        id: "TRAILER_PARK_MANUFACTURED_HOME",
        name: "Trailer Park/Manufactured Home",
      },
      {
        id: "TUDOR",
        name: "Tudor",
      },
      {
        id: "ZEN",
        name: "Zen",
      },
    ],
    location: {},
  }),
  watch: {
    value(new_value) {
      if (JSON.stringify(this.location) != JSON.stringify(new_value)) {
        this.location = new_value;
      }
    },

    location: {
      handler(val) {
        this.$emit("input", Object.assign({}, val));
      },
      deep: true,
    },
  },
  created() {
    this.location = this.value;
  },
  methods: {},
};
</script>

<style>
</style>