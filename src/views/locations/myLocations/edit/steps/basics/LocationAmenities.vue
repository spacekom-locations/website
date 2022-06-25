<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12" class="">
      <v-card max-width="500px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What amenities does your location offer?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(amenity, index) of initialAmenities"
            :key="amenity + index"
            v-model="location.amenities"
            :label="amenity"
            :value="amenity"
            hide-details
            color="success"
            class="mx-4"
          ></v-checkbox>
        </div>
        <div class="mt-8">
          <v-divider></v-divider>
          <v-checkbox
            v-for="(amenity, index) of userNonInitialAmenities"
            :key="amenity + index"
            v-model="location.amenities"
            :label="amenity"
            :value="amenity"
            hide-details
            color="error"
            class="mx-4"
          ></v-checkbox>
        </div>
        <div class="my-8">
          <v-text-field
            v-model="newAmenity"
            @keyup.enter="addNewAmenity"
            placeholder="Add Amenity"
            append-icon="mdi-plus"
            outlined
            @click:append="addNewAmenity"
          ></v-text-field>
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
    initialAmenities: ["Air Conditioning", "Hair/Makeup area", "Wifi"],
    location: {},
    newAmenity: "",
  }),
  created() {
    this.location = this.value;
  },
  computed: {
    userNonInitialAmenities() {
      const amenities = [];
      for (let amenity of this.location.amenities) {
        if (!this.isInitialAmenity(amenity)) {
          amenities.push(amenity);
        }
      }
      return amenities;
    },
  },
  methods: {
    addNewAmenity() {
      if (this.newAmenity.trim() == "" || this.hasAmenity(this.newAmenity)) {
        return false;
      }
      this.location.amenities.push(this.newAmenity);
      this.newAmenity = "";
    },
    isInitialAmenity(amenity) {
      for (let initialAmenity of this.initialAmenities) {
        if (
          initialAmenity.replace(/\s+/g, " ").trim().toLowerCase() ==
          amenity.replace(/\s+/g, " ").trim().toLowerCase()
        ) {
          return true;
        }
      }
      return false;
    },
    hasAmenity(amenity) {
      for (let _amenity of this.location.amenities) {
        if (
          _amenity.replace(/\s+/g, " ").trim().toLowerCase() ==
          amenity.replace(/\s+/g, " ").trim().toLowerCase()
        ) {
          return true;
        }
      }
      return false;
    },
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