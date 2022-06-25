<template>
  <div>
    <h1 class="headline">Location</h1>
    <div>Exact location provided after booking</div>
    <div>
      <static-map
        :google-api-key="apiKey"
        :format="format"
        :markers="markers"
        :zoom="zoom"
        :center="center"
        :size="size"
        :type="type"
        :paths="paths"
        :language="language"
      ></static-map>
    </div>
  </div>
</template>

<script>
import StaticMap from "vue-static-map";

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
  components: { StaticMap },
  data() {
    return {
      apiKey: "AIzaSyDG4ZwiYNLhoLMBgPjhqg9QQHGL37-dA78", // required
      zoom: 13, // required
      center: "Brooklyn+Bridge,New+York,NY",
      format: "gif",
      language: "ar",
      markers: [
        {
          label: "B",
          color: "blue",
          lat: 40.702147,
          lng: -74.015794,
          size: "normal",
        },
        {
          label: "Y",
          color: "yellow",
          lat: 40.711614,
          lng: -74.012318,
          size: "tiny",
        },
        {
          label: "G",
          color: "green",
          lat: 40.718217,
          lng: -74.015794,
          size: "small",
          icon: "http://www.airsoftmap.net/images/pin_map.png",
        },
      ],
      paths: [
        {
          color: "blue",
          weight: 8,
          geodesic: false,
          fillcolor: "0xFFFF0033",
          locations: [
            { startLat: 40.737102, endLng: -73.990318 },
            { startLat: 40.749825, endLng: -73.987963 },
            { startLat: 40.752946, endLng: -73.987384 },
            { startLat: 40.762946, endLng: -73.997399 },
          ],
        },
      ],
      type: "roadmap",
      size: [800, 400],
    };
  },
};
</script>

<style>
</style>