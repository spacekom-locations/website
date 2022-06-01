<template>
  <v-avatar :size="size" color="transparent">
    <img :src="userImage" />
    <slot></slot>
  </v-avatar>
</template>

<script>
export default {
  props: {
    image: {
      default: null,
    },
    size: {
      type: Number,
      default: 140,
    },
  },
  computed: {
    userImage() {
      if (this.image != null) return this.image;
      return require("@/assets/avatar.png");
    },
  },
};
</script>

<style>
</style>