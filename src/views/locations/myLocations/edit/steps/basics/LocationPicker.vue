<template>
  <div>
    <v-row>
      <v-col lg="8" sm="12" xs="12" class="px-8">
        <v-row>
          <v-col>
            <p class="display-1 font-weight-bold">
              Is the pin in the right place?
            </p>
            <p class="subtitle-1">
              If needed, you can adjust the map so the pin is in the right
              location. Only confirmed guests will see this, so they know how to
              get to your place.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <GmapMap
              :center="center"
              :zoom="18"
              map-style-id="roadmap"
              :options="mapOptions"
              style="width: 100%; height: 50vmin"
              ref="mapRef"
              @click="handleMapClick"
            >
              <GmapMarker
                :position="marker.position"
                :clickable="true"
                :draggable="true"
                @drag="handleMarkerDrag"
                @click="panToMarker"
              />
            </GmapMap>
            <button @click="geolocate">Detect Location</button>

            <p>Selected Position: {{ marker.position }}</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-card outlined class="pa-6">
          <div>
            <v-img
              src="https://giggster.com/images/become-host-steps/address.png"
            />
          </div>
          <p class="caption mt-4 grey--text">
            Your location address will not be displayed publicly. The exact
            location of your location will only be shared with the production
            team once you confirm the booking.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
      marker: { position: { lat: 25.197051380444293, lng: 55.27208508584444 } },
      center: { lat: 25.197197, lng: 55.2723694 },

      mapOptions: {
        disableDefaultUI: true,
      },
      location: {},
    };
  },
  methods: {
    //detects location from browser
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.marker.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        this.panToMarker();
      });
    },

    //sets the position of marker when dragged
    handleMarkerDrag(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    },

    //Moves the map view port to marker
    panToMarker() {
      this.$refs.mapRef.panTo(this.marker.position);
      this.$refs.mapRef.setZoom(18);
    },

    //Moves the marker to click position on the map
    handleMapClick(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      console.log(e);
    },
  },
  mounted() {
    this.geolocate();
    this.location = this.value;
    if (!this.location.lat) {
      this.location.lat = this.marker.position.lat;
    }

    if (!this.location.lng) {
      this.location.lng = this.marker.position.lng;
    }
  },
  watch: {
    "marker.position"() {
      this.location.lat = this.marker.position.lat;
      this.location.lng = this.marker.position.lng;
    },
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
};
</script>

<style>
</style>