<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What type of doors do you have?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(type, index) of validTypes"
            :key="type.id + index"
            v-model="location.doors_types"
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
      { id: "BATTENED_AND_LEDGED_DOORS", name: "Battened and Ledged Doors" },
      { id: "DUTCH_DOORS", name: "Dutch Doors" },
      { id: "FRENCH_DOORS", name: "French Doors" },
      { id: "GLASS_DOORS", name: "Glass Doors" },
      { id: "ORNATE_DOORS", name: "Ornate Doors" },
      { id: "PIVOT_DOORS", name: "Pivot Doors" },
      { id: "ROLLER_GARAGE_DOOR", name: "Roller Garage Door" },
      { id: "SCREEN_DOORS", name: "Screen Doors" },
      { id: "SLIDING_DOORS", name: "Sliding Doors" },
      { id: "STAINED_GLASS", name: "Stained Glass" },
      { id: "STEEL_DOORS", name: "Steel Doors" },
      { id: "TILT_GARAGE_DOOR", name: "Tilt Garage Door" },
      { id: "WOOD_DOORS", name: "Wood Doors" },
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