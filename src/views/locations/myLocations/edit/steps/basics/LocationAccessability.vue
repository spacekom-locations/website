<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12" class="">
      <v-card max-width="500px" flat>
        <p class="display-1 font-weight-bold mb-8">
          Parking and Accessibility.
        </p>
        <div class="my-1">
          <h3 class="my-2">Number of cars that can park on the property</h3>
          <v-text-field
            type="number"
            suffix="  cars  "
            v-model="location.parking_capacity"
            outlined
            min="0"
            placeholder="n/a"
          ></v-text-field>
        </div>
        <div>
          <h3 class="my-2">Truck / motorhome parking?</h3>
          <div>
            <v-checkbox
              v-for="(type, index) of validMotorHomeParkingTypes"
              :key="type.id + index"
              v-model="location.motor_home_parking_types"
              :label="type.value"
              :value="type.id"
              hide-details
              color="success"
            ></v-checkbox>
          </div>
        </div>
        <div class="mt-8">
          <h3 class="my-2">Access availability</h3>
          <div>
            <v-checkbox
              v-for="(type, index) of validAccessAvailabilityTypes"
              :key="type.id + index"
              v-model="location.access_availability_types"
              :label="type.value"
              :value="type.id"
              hide-details
              color="success"
            ></v-checkbox>
          </div>
        </div>
        <div class="mt-8">
          <h3 class="my-2">
            Available parking lot or parking structure nearby?
          </h3>
          <div class="my-3">
            <yes-no-button v-model="location.has_parking_structure" />
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/parking-accessibility.png"
          />
        </div>
        <p class="caption mt-4 grey--text">
          Parking and accessibility is important for production events that have
          larger crews and require loading in equipment, furniture, and props.
          Including these details helps booking organizers come prepared.
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import YesNoButton from "@/components/YesNoButton.vue";
export default {
  components: { YesNoButton },
  props: {
    value: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data() {
    return {
      validMotorHomeParkingTypes: [
        { id: "ON_PROPERTY", value: "On property" },
        { id: "STREET", value: "Street" },
      ],
      validAccessAvailabilityTypes: [
        { id: "ELEVATOR", value: "Elevator" },
        { id: "FREIGHT_ELEVATOR", value: "Freight Elevator" },
        { id: "STAIRS", value: "Stairs" },
        { id: "STREET_LEVEL", value: "Street Level" },
        {
          id: "WHEEL_CHAIR_HANDICAP_ACCESS",
          value: "Wheelchair / Handicap Access",
        },
      ],
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