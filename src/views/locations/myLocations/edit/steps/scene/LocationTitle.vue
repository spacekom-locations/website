<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          Set a title for your listing
        </p>
        <div class="mt-8">
          <h3 class="my-2">Location title <span class="red--text">*</span></h3>
          <v-text-field
            v-model="location.title"
            rows="6"
            placeholder="Type title here"
            counter="50"
            outlined
          />
        </div>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/title.png"
          />
        </div>
        <p class="subtitle-1 font-weight-bold mt-4">
          Highlight your space's most desirable quality
        </p>
        <p class="caption mt-4 grey--text">
          Call out what makes your space unique.
        </p>
        <p class="subtitle-1 font-weight-bold mt-4">
          Keep it short, sweet, and friendly
        </p>
        <p class="caption mt-4 grey--text">
          Stick to simple language that's warm, inviting, and descriptive.
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