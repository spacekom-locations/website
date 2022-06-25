import Vue from "vue";
import GmapVue from "gmap-vue";

// key: "AIzaSyCpd_oyIwSA8yZX0FRYn6Xs4BL3D3vBHsE",

Vue.use(GmapVue, {
  load: {
    // [REQUIRED] This is the unique required value by Google Maps API
    key: "AIzaSyDG4ZwiYNLhoLMBgPjhqg9QQHGL37-dA78",
    // [OPTIONAL] This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
    libraries: "places",

    // [OPTIONAL] If you want to set the version, you can do so:
    v: "3.26",
  },

  // [OPTIONAL] If you intend to programmatically custom event listener code
  // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  // you might need to turn this on.
  autoBindAllEvents: false,

  // [OPTIONAL] If you want to manually install components, e.g.
  // import {GmapMarker} from 'gmap-vue/src/components/marker'
  // Vue.component('GmapMarker', GmapMarker)
  // then set installComponents to 'false'.
  // If you want to automatically install all the components this property must be set to 'true':
  installComponents: true,

  // Load the Google Maps API dynamically, if you set this to `true` the plugin doesn't load the Google Maps API
  dynamicLoad: false,
});

export default GmapVue;
