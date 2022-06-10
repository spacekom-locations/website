<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What type of exterior do you have?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(type, index) of validTypes"
            :key="type.id + index"
            v-model="location.exterior_types"
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
      { id: "AVIARY", name: "Aviary" },
      { id: "BACKYARD", name: "Backyard" },
      { id: "BALCONY", name: "Balcony" },
      { id: "BALUSTRADE", name: "Balustrade" },
      { id: "BARN", name: "Barn" },
      { id: "BBQ_GRILL", name: "BBQ Grill" },
      { id: "BEACH_ACCESS", name: "Beach Access" },
      { id: "BRIDGE", name: "Bridge" },
      { id: "COLUMNS", name: "Columns" },
      { id: "COURTYARD", name: "Courtyard" },
      { id: "EXTERIOR_SHOWER", name: "Exterior Shower" },
      { id: "FRONT_YARD", name: "Front yard" },
      { id: "GARAGE_ATTACHED", name: "Garage (Attached)" },
      { id: "GARAGE_DETACHED", name: "Garage (Detached)" },
      { id: "GATES", name: "Gates" },
      { id: "GAZEBO_PERGOLA", name: "Gazebo/Pergola" },
      { id: "GREENHOUSE", name: "Greenhouse" },
      { id: "GUEST_HOUSE", name: "Guest House" },
      { id: "HELICOPTER_PAD", name: "Helicopter Pad" },
      { id: "HILLS", name: "Hills" },
      { id: "LARGE_GROUNDS", name: "Large Grounds" },
      { id: "PLAYGROUND_SWINGS", name: "Playground/Swings" },
      { id: "ROOFTOP", name: "Rooftop" },
      { id: "STABLE_CORRAL", name: "Stable/Corral" },
      { id: "TOOLSHED", name: "Toolshed" },
      { id: "TREEHOUSE", name: "Treehouse" },
      { id: "VERANDA", name: "Veranda" },
      { id: "WALKWAY", name: "Walkway" },
      { id: "WHITE_PICKET_FENCE", name: "White Picket Fence" },
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