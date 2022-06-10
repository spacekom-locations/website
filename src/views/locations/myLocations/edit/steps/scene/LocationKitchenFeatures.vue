<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What type of kitchen type/features do you have?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(feature, index) of validFeatures"
            :key="feature.id + index"
            v-model="location.kitchen_features"
            :label="feature.name"
            :value="feature.id"
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
    validFeatures: [
      { id: "BREAKFAST_NOOK", name: "Breakfast Nook" },
      { id: "BRIGHT_KITCHEN", name: "Bright Kitchen" },
      { id: "CHEFS_KITCHEN", name: "Chef's Kitchen" },
      { id: "COUNTRY_KITCHEN", name: "Country Kitchen" },
      { id: "DATED_50S_TO_70S_KITCHEN", name: "Dated/50's to 70's Kitchen" },
      { id: "GLASS_KITCHEN_CABINETS", name: "Glass Kitchen Cabinets" },
      { id: "GRANITE_COUNTERTOP", name: "Granite Countertop" },
      { id: "KITCHEN_ISLAND", name: "Kitchen Island" },
      { id: "OPEN_KITCHEN", name: "Open Kitchen" },
      { id: "STAINLESS_STEEL_KITCHEN", name: "Stainless Steel Kitchen" },
      { id: "WHITE_KITCHEN", name: "White Kitchen" },
      { id: "WOOD_KITCHEN_CABINETS", name: "Wood Kitchen Cabinets" },
      { id: "WOOD_KITCHEN_COUNTERROP", name: "Wood Kitchen Countertop" },
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
};
</script>

<style>
</style>