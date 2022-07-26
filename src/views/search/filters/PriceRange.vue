<template>
  <v-card-text>
    <div class="d-flex flex-row justify-space-between">
      <span
        >From: {{ $t(`models.location.currencies.USD.symbol`)
        }}{{ price.range[0] }}</span
      >
      <span
        >To: {{ $t(`models.location.currencies.USD.symbol`)
        }}{{ price.range[1] }}</span
      >
    </div>
    <v-range-slider
      v-model="price.range"
      :max="price.max"
      :min="price.min"
      hide-details
      class="align-center"
      color="success"
      x-large
      :step="50"
    >
    </v-range-slider>
  </v-card-text>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        min: 0,
        max: 1000,
        range: [0, 1000],
      }),
    },
  },
  created() {
    this.price = this.value;
  },
  data: () => ({
    price: {
      min: 0,
      max: 1000,
      range: [0, 1000],
    },
  }),
  watch: {
    value(newValue) {
      if (JSON.stringify(newValue) != JSON.stringify(this.price)) {
        this.price = newValue;
      }
    },
    price(newValue) {
      if (JSON.stringify(newValue) != JSON.stringify(this.value)) {
        this.$emit("input", newValue);
      }
    },
  },
};
</script>

<style>
</style>