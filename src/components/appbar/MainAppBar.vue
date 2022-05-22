<template>
  <v-app-bar app color="white" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Wayn Logo"
        class="shrink mr-2"
        contain
        :src="require('@/assets/wayn-mini-logo.png')"
        transition="scale-transition"
        width="40"
        route
        :to="{ name: 'Home' }"
      />
      <span class="blue--text display-1 font-weight-bold"> Wayn </span>
    </div>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>