<template>
  <v-navigation-drawer app :width="width" clipped right>
    <GmapMap
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 100%"
      ref="googleMap"
      :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true,
        styles: stylesConfig,
      }"
    >
      <gmap-marker
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="center = m.position"
        :key="index"
        :icon="require('../../assets/location-marker.png')"
      ></gmap-marker>
    </GmapMap>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    width: {
      default: "600px",
    },
    locations: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      center: { lat: 25.197197, lng: 55.2723694 },
      zoom: 12,
    };
  },
  computed: {
    markers() {
      const markers = [];
      for (let location of this.locations) {
        markers.push({
          position: {
            lat: Number(location.lat),
            lng: Number(location.lng),
          },
        });
      }
      
      return markers;
    },
    stylesConfig() {
      return [
        {
          featureType: "all",
          elementType: "labels.text",
          stylers: [
            {
              color: "#878787",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#f9f5ed",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#c9c9c9",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#aee0f4",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ];
    },
  },
};
</script>
<style>
</style>