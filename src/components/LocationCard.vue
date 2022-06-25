<template>
  <v-hover v-slot="{ hover }">
    <v-card
      outlined
      flat
      :elevation="hover ? 12 : 0"
      :class="{ 'on-hover': hover }"
      class="ma-4 rounded-lg mb-6"
      route
      :to="{
        name: 'Listing.Show',
        params: { locationId: location.id },
      }"
      style="transition: 0.3s ease-in-out"
    >
      <v-img
        class="white--text pa-6"
        height="300"
        :aspect-ratio="16 / 9"
        :src="
          location.images[0] == null
            ? 'https://giggster.com/images/imgEmpty2.svg'
            : location.images[0]
        "
      ></v-img>
      <v-card-title class="font-weight-bold px-6 pt-6">
        {{ location.title ? location.title : "unTitled" }}
      </v-card-title>
      <v-card-text class="px-6">
        <span class="subtitle-2 black--text">
          {{
            $t(`models.location.currencies.${location.currency_code}.symbol`)
          }}{{ location.pricing.ranges[0].prices.EVENT }}
          /hr
        </span>
        <span class="font-weight-black mx-1">.</span>
        <span class="font-weight-light body-2">
          {{ location.city }}, {{ location.country }}
        </span>
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
          readonly
        ></v-rating>
        <span class="mx-2 caption">(1200)</span>
        <v-spacer></v-spacer>
        <v-chip color="orange" dark small>SUPERHOST</v-chip>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true,
    },
  },
  computed: {
    studioImage() {
      return "https://static.giggster.com/images/location/a458b934-7b59-4deb-9901-e2af58ce6cf9/d832cd1e-f634-4f68-80f9-328717c107a9/mid_x2.jpeg";
    },
  },
};
</script>

<style>
</style>