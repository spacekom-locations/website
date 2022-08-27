<template>
  <div>
    <h1 class="headline">Location</h1>
    <div>Exact location provided after booking</div>
    <div>
      <div style="height: 500px; width: 100%">
        <GmapMap
          :center="MapCenter"
          :zoom="13"
          style="width: 100%; height: 100%"
          ref="googleMap"
          :options="{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            editable: false,
            draggable: false,
            styles: stylesConfig,
          }"
        >
          <gmap-circle
            :editable="false"
            :draggable="false"
            :radius="1000"
            :center="MapCenter"
            :options="{
              strokeColor: 'blue',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: 'blue',
              fillOpacity: 0.35,
            }"
            ref="circle"
          >
          </gmap-circle>
        </GmapMap>
      </div>
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
  components: {},
  data() {
    return {};
  },
  computed: {
    MapCenter() {
      return {
        lat: Number(this.location.lat),
        lng: Number(this.location.lng),
      };
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