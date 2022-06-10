<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12" class="">
      <v-card max-width="500px" flat>
        <p class="display-1 font-weight-bold mb-8">Location details.</p>
        <div class="my-1">
          <h3 class="my-2">Number of bedrooms</h3>
          <v-text-field
            type="number"
            suffix="  bedrooms  "
            v-model="location.bedrooms_count"
            outlined
            :min="0"
            placeholder="n/a"
          ></v-text-field>
        </div>
        <div>
          <h3 class="my-2">Number of bathrooms</h3>
          <v-text-field
            type="number"
            suffix="  bathrooms  "
            v-model="location.bathrooms_count"
            outlined
            :min="0"
            placeholder="n/a"
          ></v-text-field>
        </div>
        <div>
          <h3 class="my-2">Property size (sq ft)</h3>
          <v-text-field
            type="number"
            suffix="  sq/ft  "
            v-model="location.size"
            outlined
            :min="0"
            placeholder="n/a"
          ></v-text-field>
        </div>
        <div>
          <h3 class="my-2">Lot size (sq ft)</h3>
          <v-text-field
            type="number"
            suffix="  sq/ft  "
            v-model="location.lot_size"
            outlined
            :min="0"
            placeholder="n/a"
          ></v-text-field>
        </div>
        <div>
          <h3 class="my-2">Main floor number (if applicable)</h3>
          <v-text-field
            type="number"
            suffix="  sq/ft  "
            v-model="location.main_floor_number"
            outlined
            :min="0"
            placeholder="n/a"
          ></v-text-field>
        </div>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/location-details.png"
          />
        </div>
        <p class="caption mt-4 grey--text">
          If your location is part of a building, don’t forget to specify the
          main floor number
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
  data() {
    return {
      location: {},
    };
  },
  created() {
    this.location = this.value;
  },
  methods: {},
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