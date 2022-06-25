<template>
  <v-carousel
    cycle
    show-arrows-on-hover
    :interval="4000"
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      :src="image"
      @click="show"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
      default() {
        return ["https://giggster.com/images/imgEmpty2.svg"];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    show() {
      this.$viewerApi({
        images: this.images,
        options: {
          navbar: true,
        },
      });
    },
  },
};
</script>

<style>
</style>