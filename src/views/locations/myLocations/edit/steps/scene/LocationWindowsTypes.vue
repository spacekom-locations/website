<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What type of windows do you have?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(type, index) of validTypes"
            :key="type.id + index"
            v-model="location.windows_types"
            :label="type.name"
            :value="type.id"
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
    validTypes: [
      { id: "BAY_OR_BOW_WINDOWS", name: "Bay or Bow Windows" },
      { id: "FLOOR_TO_CEILING_WINDOWS", name: "Floor-to-Ceiling Windows" },
      { id: "HINGED_CASEMENT_WINDOWS", name: "Hinged/Casement Windows" },
      { id: "ONE_WAY_MIRROR", name: "One-Way Mirror" },
      { id: "PICTURE_STATIONARY_WINDOWS", name: "Picture/Stationary Windows" },
      {
        id: "SASH_UP_AND_DOWN_HUNG_WINDOWS",
        name: "Sash/Up And Down/Hung Windows",
      },
      { id: "SLIDER_WINDOWS", name: "Slider Windows" },
      { id: "STAINED_GLASS_WINDOWS", name: "Stained Glass Windows" },
      { id: "TRANSOM_WINDOW", name: "Transom Window" },
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