<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">Describe your location</p>
        <div class="mt-8">
          <h3 class="my-2">
            Location description <span class="red--text">*</span>
          </h3>
          <v-textarea
            v-model="location.description"
            rows="6"
            placeholder="Type description here"
            counter="3500"
            outlined
            auto-grow
          />
        </div>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/description.png"
          />
        </div>
        <p class="subtitle-1 font-weight-bold mt-4">Use a brief summary</p>
        <p class="caption mt-4 grey--text">
          to introduce your space and then dive into more detail in the
          paragraphs that follow.
        </p>
        <p class="caption mt-4 grey--text">
          You're more likely to catch an production team’s eye by starting your
          description with the must-know information.
        </p>
        <p class="caption mt-4 grey--text">
          Separate your description into short, easy-to-read paragraphs.
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