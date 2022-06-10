<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="500px" flat>
        <p class="display-1 font-weight-bold mb-8">
          Which activities would you like to host?
        </p>
        <div class="mt-8">
          <div
            v-for="(activity, index) of validActivities"
            :key="activity.id + index"
          >
            <v-checkbox
              v-model="location.allowed_activities"
              :label="activity.value"
              :value="activity.id"
              hide-details
              color="success"
            >
            </v-checkbox>
            <p class="mx-8 my-1 caption">
              {{ activity.description }}
            </p>
          </div>
        </div>
        <p class="subtitle-1 font-weight-bold mb-8 mt-14">
          Maximum number of attendees?
          <span class="red--text">*</span>
        </p>
        <div>
          <v-text-field
            type="number"
            suffix="  People  "
            v-model="location.maximum_attendees_number"
            outlined
            :min="0"
            :max="999"
            placeholder="n/a"
          ></v-text-field>
        </div>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/location-type.png"
          />
        </div>
        <p class="subtitle-1 font-weight-bold my-4">Host Productions and Events</p>
        <p class="caption mt-4 grey--text">
          You can choose how guests will use your location. Selecting multiple
          uses will improve your space's visibility on search.
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
    validActivities: [
      {
        id: "PRODUCTION",
        value: "Production",
        description: "Film and photo shoots ",
      },
      {
        id: "EVENT",
        value: "Event",
        description: "Baby showers, wedding receptions, art exhibits ",
      },
      {
        id: "MEETING",
        value: "Meeting",
        description: "Workshops, trainings, conferences ",
      },
    ],
    location: {},
  }),
  computed: {},
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
  created() {
    this.location = this.value;
  },
};
</script>

<style>
</style>