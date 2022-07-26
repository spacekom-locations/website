<template>
  <div>
    <div>
      <v-card
        flat
        
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
        <p class="title font-weight-bold">{{ location.title ? location.title : "unTitled" }}</p>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>