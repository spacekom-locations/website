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
      content-class="mt-3 filter-box-container"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card-actions class="ma-0 pa-0 mx-4">
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
        <price-range v-model="price" @update-filter="sendUpdateFiltersRequest" />
        <v-divider></v-divider>
        <attendees v-model="range" />
        <v-divider></v-divider>
        <Kinds @add-type="addToQuery" />
        <v-divider></v-divider>
        <Styles @add-style="addToQuery" />
        <v-divider></v-divider>
        <Features @add-feature="addToQuery" />
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import Attendees from "./filters/Attendees.vue";
import PriceRange from "./filters/PriceRange.vue";
import Kinds from "./filters/Kinds.vue";
import Styles from "./filters/Styles.vue";
import Features from "./filters/Features.vue";
export default {
  components: { PriceRange, Attendees, Kinds, Styles, Features },
  data: () => ({
    menu: false,
    price: {
      min: 0,
      max: 1000,
      range: [0, 1000],
    },
    range: null,
    query: null,
  }),
  methods: {
    addToQuery(q) {
      this.query = q;
    },
    sendUpdateFiltersRequest() {
      this.$emit("update-filters", {
        price: this.price.range.join(', '),
        crew: this.range,
        query: this.query,
      });
      this.menu = false;
    },
  },
  watch: {
    
    range(){
      this.sendUpdateFiltersRequest();
    },
    query(){
      this.sendUpdateFiltersRequest();
    }
  },
  
};
</script>

<style scoped>
.filter-box-container {
  max-height: calc(100vh - 140px);
  overflow: auto;
}
</style>