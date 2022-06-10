import LocationAddress from "./LocationAddress.vue";
import LocationKindVue from "./LocationKind.vue";
import LocationPickerVue from "./LocationPicker.vue";
import LocationDetails from "./LocationDetails.vue";
import LocationAccessability from "./LocationAccessability.vue";
import LocationAmenities from "./LocationAmenities.vue";

export const LocationBasicSteps = [
  {
    name: "location-address",
    component: LocationAddress,
  },
  {
    name: "location-picker",
    component: LocationPickerVue,
  },
  {
    name: "location-kind",
    component: LocationKindVue,
  },
  {
    name: "location-details",
    component: LocationDetails,
  },
  {
    name: "location-accessability",
    component: LocationAccessability,
  },
  {
    name: "location-amenities",
    component: LocationAmenities,
  },
];

