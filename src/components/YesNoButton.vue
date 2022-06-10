<template>
  <span>
    <v-btn-toggle v-model="selectedOption" width="100">
      <v-btn
        :value="false"
        x-large
        :color="selectedOption == false ? 'secondary white--text' : 'white'"
      >
        <span class="hidden-sm-and-down">{{ textNo }}</span>
      </v-btn>
      <v-btn
        :value="true"
        x-large
        :color="selectedOption == true ? 'success white--text' : 'white'"
      >
        <span class="hidden-sm-and-down">{{ textYes }}</span>
      </v-btn>
    </v-btn-toggle>
  </span>
</template>

<script>
export default {
  props: {
    textYes: {
      type: String,
      default: "Yes",
    },
    textNo: {
      type: String,
      default: "No",
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.selectedOption = this.value;
  },
  data: () => ({
    selectedOption: false,
  }),
  watch: {
    value(newValue) {
      if (Boolean(newValue) != Boolean(this.selectedOption)) {
        this.selectedOption = Boolean(newValue);
      }
    },
    selectedOption(newValue) {
      this.selectedOption = Boolean(newValue);
      this.$emit("input", Boolean(newValue));
    },
  },
};
</script>

<style>
</style>