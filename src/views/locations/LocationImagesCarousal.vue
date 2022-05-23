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
  data() {
    return {
      images: [
        "https://static.giggster.com/images/location/a458b934-7b59-4deb-9901-e2af58ce6cf9/d832cd1e-f634-4f68-80f9-328717c107a9/mid_x2.jpeg",
        "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      ],
    };
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