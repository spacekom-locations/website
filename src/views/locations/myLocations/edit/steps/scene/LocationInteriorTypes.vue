<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          What type of interior do you have?
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(type, index) of validTypes"
            :key="type.id + index"
            v-model="location.interior_types"
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
      { id: "ATRIUM", name: "Atrium" },
      { id: "ATTIC", name: "Attic" },
      { id: "BABY_ROOM", name: "Baby Room" },
      { id: "BALLROOM", name: "Ballroom" },
      { id: "BASEMENT", name: "Basement" },
      { id: "BOOKCASE", name: "Bookcase" },
      { id: "CLOSET", name: "Closet" },
      { id: "CROWN_MOLDING", name: "Crown Molding" },
      { id: "DRESSING_ROOM", name: "Dressing Room" },
      { id: "GAME_ROOM", name: "Game room" },
      { id: "HOME_BAR", name: "Home Bar" },
      { id: "HOME_GYM", name: "Home Gym" },
      { id: "HOME_LIBRARY", name: "Home Library" },
      { id: "HOME_OFFICE", name: "Home Office" },
      { id: "HOME_RECORDING_STUDIO", name: "Home Recording Studio" },
      { id: "HOME_THEATRE", name: "Home Theatre" },
      { id: "KID_ROOM_TEENAGER_ROOM", name: "Kid Room/Teenager Room" },
      { id: "LANDRY_ROOM", name: "Laundry Room" },
      { id: "OPEN_FLOOR_PLAN", name: "Open Floor Plan" },
      { id: "PIANO", name: "Piano" },
      { id: "WALK_IN_CLOSET", name: "Walk-in closet" },
      { id: "WINE_CELLAR", name: "Wine Cellar" },
      { id: "WORKSHOP", name: "Workshop" },
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