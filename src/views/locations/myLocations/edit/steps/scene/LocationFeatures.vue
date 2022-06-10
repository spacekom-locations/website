<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What key features does your location have?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(feature, index) of validFeatures"
            :key="feature.id + index"
            v-model="location.features"
            :label="feature.value"
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
      { id: "DRIVEWAY", value: "Driveway" },
      { id: "ELEVATOR", value: "Elevator" },
      { id: "FIREPLACE", value: "Fireplace" },
      { id: "GARDEN_YARD", value: "Garden/Yard" },
      { id: "POOL", value: "Pool" },
      { id: "STAIRS", value: "Stairs" },
      { id: "VIEWS", value: "View" },
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