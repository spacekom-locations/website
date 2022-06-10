<template>
  <v-row>
    <v-col
      lg="8"
      sm="12"
      xs="12"
      class=""
      
    >
      <v-card max-width="500px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What amenities does your location offer?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(amenity, index) of validAmenities"
            :key="amenity.id + index"
            v-model="location.amenities"
            :label="amenity.value"
            :value="amenity.id"
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
            src="https://giggster.com/images/become-host-steps/amenities.png"
          />
        </div>
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
    validAmenities: [
      { id: "AIR_CONDITIONING", value: "Air Conditioning" },
      { id: "HAIR_MAKEUP_AREA", value: "Hair/Makeup area" },
      { id: "WIFI", value: "Wifi" },
    ],
    location: {},
  }),
  created() {
    this.location = this.value;
  },
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
};
</script>

<style>
</style>