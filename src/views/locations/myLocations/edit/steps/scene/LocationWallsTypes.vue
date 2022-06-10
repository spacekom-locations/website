<template>
  <v-row>
    <v-col
      lg="8"
      sm="12"
      xs="12"
    >
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What type of walls do you have?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(type, index) of validTypes"
            :key="type.id + index"
            v-model="location.walls_types"
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
      { id: "BRICK_WALLS", name: "Brick Walls" },
      { id: "COLORED_WALLS", name: "Colored Walls" },
      { id: "CONCRETE_WALLS", name: "Concrete Walls" },
      { id: "CORRUGATED_METAL_WALLS", name: "Corrugated Metal Walls" },
      { id: "GLASS_WALL", name: "Glass Wall" },
      { id: "GRAFFITI_WALL", name: "Graffiti Wall" },
      { id: "MIRRORED", name: "Mirrored" },
      { id: "MURAL_WALL", name: "Mural Wall" },
      { id: "STONE_WALLS", name: "Stone Walls" },
      { id: "TEXTURE_WALLS", name: "Texture Walls" },
      { id: "TILED_WALLS", name: "Tiled Walls" },
      { id: "WALLPAPER", name: "Wallpaper" },
      { id: "WHITE_WALLS", name: "White Walls" },
      { id: "WHITEWASHED_WALLS", name: "Whitewashed Walls" },
      { id: "WOOD_PANELED_WALLS", name: "Wood-Paneled Walls" },
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