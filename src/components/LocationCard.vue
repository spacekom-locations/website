<template>
  <v-hover v-slot="{ hover }">
    <v-card
      outlined
      flat
      :elevation="hover ? 20 : 0"
      :class="{ 'on-hover': hover }"
      class="ma-4 rounded-lg mb-6"
      route
      :to="{ name: 'LocationView', params: { id: 'some-where' } }"
    >
      <v-img
        src="https://static.giggster.com/images/location/a458b934-7b59-4deb-9901-e2af58ce6cf9/d832cd1e-f634-4f68-80f9-328717c107a9/mid_x2.jpeg"
        class="white--text pa-6"
        height="300"
      ></v-img>
      <v-card-title class="font-weight-bold px-6 pt-6">
        Amazing Fully Lit White Cyc Studio
      </v-card-title>
      <v-card-text class="px-6">
        <span class="headline black--text">$125/hr</span>
        <span class="headline font-weight-black mx-1">.</span>
        <span class="headline font-weight-light grey--text">Dubai, UA</span>
      </v-card-text>

      <v-card-actions class="pa-6">
        <v-rating
          color="orange"
          hover
          length="5"
          size="20"
          :value="4"
          dense
          background-color="grey"
          x-small
        ></v-rating>
        <span class="mx-2">(1200)</span>
        <v-spacer></v-spacer>
        <v-chip color="orange" dark>SUPERHOST</v-chip>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {};
</script>

<style>
</style>