<template>
  <v-card-text>
    <p class="font-weight-bold">Styles</p>
    <div
      :style="`${show == false ? 'max-height: 250px; overflow: hidden' : ''}`"
    >
      <v-row class="my-2">
        <v-col
          v-for="(style, index) of validStyles"
          :key="style.id + getUUID() + index"
          cols="6"
          class="my-0 py-0 pb-2"
        >
          <p class="my-0 py-0" @click="addStyle(style.name)" style="cursor: pointer">
            {{ style.name }}
          </p>
        </v-col>
      </v-row>
    </div>
    <v-btn v-if="show == false" color="success" text @click="show = true">
      show more
      <v-icon>mdi-chevron-double-down</v-icon>
    </v-btn>
    <v-btn v-if="show == true" color="success" text @click="show = false">
      show less
      <v-icon>mdi-chevron-double-up</v-icon>
    </v-btn>
  </v-card-text>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      show: false,
      validStyles: [
        {
          id: "AMERICANA_ANYWHERE_AMERICA",
          name: "Americana/Anywhere America",
        },
        { id: "ART_DECO", name: "Art Deco" },
        { id: "ASIAN", name: "Asian" },
        { id: "BEACH_HOUSE", name: "Beach House" },
        { id: "BEACHFRONT", name: "Beachfront" },
        { id: "BOHEMIAN", name: "Bohemian" },
        { id: "BUNGALOW", name: "Bungalow" },
        { id: "CABIN", name: "Cabin" },
        { id: "CAPE_COD", name: "Cape Cod" },
        { id: "CASTLE_CHATEAU", name: "Castle/Chateau" },
        { id: "COLONIAL", name: "Colonial" },
        { id: "CONTEMPORARY_MODERN", name: "Contemporary Modern" },
        { id: "CRAFTSMAN", name: "Craftsman" },
        { id: "CREOLE", name: "Creole" },
        { id: "DATED_RETRO", name: "Dated/Retro" },
        { id: "DESERT", name: "Desert" },
        { id: "DILAPIDATED_NEGLECTED", name: "Dilapidated/Neglected" },
        { id: "DUTCH_COLONIAL", name: "Dutch Colonial" },
        {
          id: "EXOTIC_TROPICAL",
          name: "Exotic/Tropical",
        },
        {
          id: "FRENCH",
          name: "French",
        },
        {
          id: "GEORGIAN_SOUTHERN",
          name: "Georgian/Southern",
        },
        {
          id: "GOTHIC_VICTORIAN",
          name: "Gothic/Victorian",
        },
        {
          id: "GREEK_NEOCLASSICAL",
          name: "Greek/Neoclassical",
        },
        {
          id: "HIGH_TECH",
          name: "High Tech",
        },
        {
          id: "INDUSTRIAL",
          name: "Industrial",
        },
        {
          id: "LAKE_HOUSE",
          name: "Lake House",
        },
        {
          id: "MEDITERRANEAN",
          name: "Mediterranean",
        },
        {
          id: "MID_CENTURY_MODERN",
          name: "Mid-century Modern",
        },
        {
          id: "MOROCCAN",
          name: "Moroccan",
        },
        {
          id: "OLD_HOLLYWOOD",
          name: "Old Hollywood",
        },
        {
          id: "RANCH_STYLE",
          name: "Ranch Style",
        },
        { id: "RUSTIC", name: "Rustic" },
        {
          id: "SOUTHWESTERN",
          name: "Southwestern",
        },
        {
          id: "SPANISH",
          name: "Spanish",
        },
        {
          id: "TRAILER_PARK_MANUFACTURED_HOME",
          name: "Trailer Park/Manufactured Home",
        },
        {
          id: "TUDOR",
          name: "Tudor",
        },
        {
          id: "ZEN",
          name: "Zen",
        },
      ],
    };
  },
  methods: {
    getUUID() {
      return uuidv4;
    },
    addStyle(type) {
      this.$emit("add-style", type);
    },
  },
  watch: {},
};
</script>

<style>
</style>