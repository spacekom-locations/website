<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      transition="slide-y-transition"
      offset-y
      bottom
      left
      content-class="mt-3"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card-actions class="ma-0 pa-0">
          <v-btn
            v-bind="attrs"
            v-on="on"
            color="success"
            text
            class="mt-2"
            large
          >
            <v-icon>mdi-filter-variant</v-icon>
            <span class="mx-1S"></span>
            <span>Filter</span>
          </v-btn>
        </v-card-actions>
      </template>

      <v-card outlined class="px-4 py-2" width="500" max-width="100%">
        <price-range v-model="price" />
        <v-divider></v-divider>
        <attendees v-model="range" />
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import Attendees from "./filters/Attendees.vue";
import PriceRange from "./filters/PriceRange.vue";
export default {
  components: { PriceRange, Attendees },
  data: () => ({
    menu: false,
    price: {
      min: 0,
      max: 1000,
      range: [0, 1000],
    },
    range: null,
  }),
};
</script>
