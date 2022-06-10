<template>
  <v-row>
    <v-col
      lg="8"
      sm="12"
      xs="12"
    >
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What type of sports and activity do you have?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(type, index) of validTypes"
            :key="type.id + index"
            v-model="location.activities_types"
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
      { id: "BASEBALL_FIELD", name: "Baseball Field" },
      { id: "BOWLING_ALLEY", name: "Bowling alley" },
      { id: "BOXING_RING", name: "Boxing Ring" },
      { id: "DANCE", name: "Dance" },
      { id: "DANCE_YOGA_FITNESS", name: "Dance/Yoga/Fitness" },
      { id: "EQUESTRIAN", name: "Equestrian" },
      { id: "FOOTBALL_FIELD", name: "Football Field" },
      { id: "GOLF", name: "Golf" },
      { id: "GUN_RANGE_ARCHERY", name: "Gun Range/Archery" },
      { id: "GYM", name: "Gym" },
      { id: "HOCKEY", name: "Hockey" },
      { id: "INDOOR_BASKETBALL", name: "Indoor Basketball" },
      { id: "INDOOR_ROCK_CLIMBING", name: "Indoor Rock Climbing" },
      { id: "OUTDOOR_BASKETBALL", name: "Outdoor Basketball" },
      { id: "POOL_TABLE", name: "Pool table" },
      { id: "SOCCER_FIELD", name: "Soccer Field" },
      { id: "TENNIS_COURT", name: "Tennis Court" },
      { id: "TRACK_AND_FIELD", name: "Track and Field" },
      { id: "VOLLEYBALL", name: "Volleyball" },
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