<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What type of floor do you have?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(type, index) of validTypes"
            :key="type.id + index"
            v-model="location.floor_types"
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
      { id: "CARPET_FLOOR", name: "Carpet Floor" },
      { id: "CHECKER_TILES_FLOOR", name: "Checker Tiles Floor" },
      { id: "CONCRETE_FLOOR", name: "Concrete Floor" },
      { id: "DANCE_FLOOR", name: "Dance Floor" },
      { id: "DARK_WOOD_FLOOR", name: "Dark Wood Floor" },
      { id: "GLASS_FLOOR", name: "Glass Floor" },
      { id: "INLAID_PATTERNS_FLOOR", name: "Inlaid/Patterns Floor" },
      { id: "LIGHT_WOOD_WHITEWASH_FLOOR", name: "Light Wood/Whitewash Floor" },
      { id: "LINOLEUM_FLOOR", name: "Linoleum Floor" },
      { id: "MARBLE_FLOOR", name: "Marble Floor" },
      { id: "STONE_FLOOR", name: "Stone Floor" },
      { id: "TILES_FLOOR", name: "Tiles Floor" },
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