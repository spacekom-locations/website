<template>
  <v-card-text>
    <p class="font-weight-bold">Attendees</p>
    <v-row>
      <v-col class="ma-0 pa-0" cols="6" v-for="range of ranges" :key="range">
        <v-radio-group
          v-model="selectedRange"
          class="pa-0 ma-0 mx-4"
          :hide-details="true"
        >
          <v-radio
            color="success"
            :label="range == null ? 'Any' : range"
            :value="range"
            class="pa-0 ma-1"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  props: {
    value: {
      default: null,
    },
  },
  data() {
    return {
      selectedRange: "60+",
      ranges: ["1 - 5", "6 - 15", "16 - 30", "31 - 45", "46 - 60", "60+"],
    };
  },
  created() {
    this.selectedRange = this.value;
  },
  watch: {
    value(newValue) {
      if (newValue != this.selectedRange) {
        this.selectedRange = newValue;
      }
    },
    selectedRange(newValue) {
      if (newValue != this.value) {
        this.$emit("input", newValue);
        this.$emit("update-filter", newValue);
      }
    },
  },
};
</script>

<style>
</style>