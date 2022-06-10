<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12" class="">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold">
          What is the style of your location?
        </p>
        <v-card
          class="pa-0 ma-0 rounded-0"
          outlined
          v-for="(style, index) of validStyles"
          :key="`${style.id}_${index}`"
          @click="toggleLocationStyle(style.id)"
          :style="
            location.styles.indexOf(style.id) > -1
              ? `border: 1px solid green`
              : ''
          "
        >
          <v-card-title class="pa-0 ma-0">
            <v-img :src="style.image" max-width="200" />

            <span class="subtitle-1 mx-2">
              {{ style.name }}
            </span>
            <v-spacer></v-spacer>
            <v-simple-checkbox
              class="mx-4"
              :value="location.styles.indexOf(style.id) > -1"
              :ripple="false"
              color="success"
              readonly
            />
          </v-card-title>
        </v-card>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/styles.png"
          />
        </div>
        <p class="caption mt-4 grey--text">
          Production teams often search and filter by style. Including the right
          style can help connect you with the right bookings.
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data() {
    return {
      validStyles: [
        {
          id: "AMERICANA_ANYWHERE_AMERICA",
          name: "Americana/Anywhere America",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-americana-anywhere-america.jpg",
        },
        {
          id: "ART_DECO",
          name: "Art Deco",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-art-deco.jpg",
        },
        {
          id: "ASIAN",
          name: "Asian",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-asian.jpg",
        },
        {
          id: "BEACH_HOUSE",
          name: "Beach House",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-beach-house.jpg",
        },
        {
          id: "BEACHFRONT",
          name: "Beachfront",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-beachfront.jpg",
        },
        {
          id: "BOHEMIAN",
          name: "Bohemian",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-bohemian.jpg",
        },
        {
          id: "BUNGALOW",
          name: "Bungalow",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-bungalow.jpg",
        },
        {
          id: "CABIN",
          name: "Cabin",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-cabin.jpg",
        },
        {
          id: "CAPE_COD",
          name: "Cape Cod",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-cape-cod.jpg",
        },
        {
          id: "CASTLE_CHATEAU",
          name: "Castle/Chateau",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-castle-chateau.jpg",
        },
        {
          id: "COLONIAL",
          name: "Colonial",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-colonial.jpg",
        },
        {
          id: "CONTEMPORARY_MODERN",
          name: "Contemporary Modern",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-modern.jpg",
        },
        {
          id: "CRAFTSMAN",
          name: "Craftsman",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-craftsman.jpg",
        },
        {
          id: "CREOLE",
          name: "Creole",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-creole.jpg",
        },
        {
          id: "DATED_RETRO",
          name: "Dated/Retro",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-dated-retro.jpg",
        },
        {
          id: "DESERT",
          name: "Desert",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-desert-style.jpg",
        },
        {
          id: "DILAPIDATED_NEGLECTED",
          name: "Dilapidated/Neglected",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-dilapidated-neglected.jpg",
        },
        {
          id: "DUTCH_COLONIAL",
          name: "Dutch Colonial",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-dutch-colonial.jpg",
        },
        {
          id: "EXOTIC_TROPICAL",
          name: "Exotic/Tropical",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-exotic-tropical.jpg",
        },
        {
          id: "FRENCH",
          name: "French",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-french.jpg",
        },
        {
          id: "GEORGIAN_SOUTHERN",
          name: "Georgian/Southern",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-georgian-southern.jpg",
        },
        {
          id: "GOTHIC_VICTORIAN",
          name: "Gothic/Victorian",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-gothic-victorian.jpg",
        },
        {
          id: "GREEK_NEOCLASSICAL",
          name: "Greek/Neoclassical",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-greek-neoclassical.jpg",
        },
        {
          id: "HIGH_TECH",
          name: "High Tech",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-high-tech.jpg",
        },
        {
          id: "INDUSTRIAL",
          name: "Industrial",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-industrial.jpg",
        },
        {
          id: "LAKE_HOUSE",
          name: "Lake House",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-lake-house.jpg",
        },
        {
          id: "MEDITERRANEAN",
          name: "Mediterranean",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-mediterranean.jpg",
        },
        {
          id: "MID_CENTURY_MODERN",
          name: "Mid-century Modern",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-midcentury-modern.jpg",
        },
        {
          id: "MOROCCAN",
          name: "Moroccan",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-moroccan.jpg",
        },
        {
          id: "OLD_HOLLYWOOD",
          name: "Old Hollywood",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-old-hollywood.jpg",
        },
        {
          id: "RANCH_STYLE",
          name: "Ranch Style",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-ranch-style.jpg",
        },
        {
          id: "RUSTIC",
          name: "Rustic",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-rustic.jpg",
        },
        {
          id: "SOUTHWESTERN",
          name: "Southwestern",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-pueblo-santa-fe.jpg",
        },
        {
          id: "SPANISH",
          name: "Spanish",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-spanish.jpg",
        },
        {
          id: "TRAILER_PARK_MANUFACTURED_HOME",
          name: "Trailer Park/Manufactured Home",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-trailer-park-manufactured-home.jpg",
        },
        {
          id: "TUDOR",
          name: "Tudor",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-tudor.jpg",
        },
        {
          id: "ZEN",
          name: "Zen",
          image:
            "https://static.giggster.com/app-images/styles/architectural-style-zen.jpg",
        },
      ],
      location: {
        styles: [],
      },
    };
  },
  watch: {
    value(new_value) {
      if (JSON.stringify(this.location) != JSON.stringify(new_value)) {
        this.location = new_value;
      }
    },

    location: {
      handler(val) {
        this.$emit("input", Object.assign({}, val));
      },
      deep: true,
    },
  },
  created() {
    this.location = this.value;
  },
  methods: {
    toggleLocationStyle(styleId) {
      if (this.location.styles.indexOf(styleId) > -1) {
        this.location.styles.splice(this.location.styles.indexOf(styleId), 1);
      } else {
        this.location.styles.push(styleId);
      }
    },
  },
};
</script>

<style>
</style>