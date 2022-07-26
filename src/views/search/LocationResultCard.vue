<template>
  <div>
    <v-card
      outlined
      flat
      width="280px"
      :to="{
        name: 'Listing.Show',
        params: { locationId: location.id },
      }"
    >
      <v-img
        :aspect-ratio="16 / 9"
        :src="
          location.images[0] == null
            ? 'https://giggster.com/images/imgEmpty2.svg'
            : location.images[0]
        "
      />
      <v-card-text>
        <p class="subtitle-2 font-weight-bold">
          {{ location.title ? location.title : "unTitled" }}
        </p>
        <div>
          {{
            $t(`models.location.currencies.${location.currency_code}.symbol`)
          }}
          {{ location.pricing.ranges[0].prices.EVENT }} /hr
          <span class="mx-2">.</span>
          <v-rating
            color="orange"
            hover
            length="5"
            size="20"
            :value="5"
            dense
            background-color="grey"
            small
            readonly
            style="display: inline-block"
          ></v-rating>
        </div>
        <div class="pt-2">{{ location.city }}, {{ location.country }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>