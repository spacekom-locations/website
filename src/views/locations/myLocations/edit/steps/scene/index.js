import LocationStyles from "./LocationStyles.vue";
import LocationFeatures from "./LocationFeatures.vue";
import LocationArchitecturalStyles from "./LocationArchitecturalStyles.vue";
import LocationBathroomsTypes from "./LocationBathroomsTypes.vue";
import LocationCeilingTypes from "./LocationCeilingTypes.vue";
import LocationDoorsTypes from "./LocationDoorsTypes.vue";
import LocationExteriorTypes from "./LocationExteriorTypes.vue";
import LocationFloorTypes from "./LocationFloorTypes.vue";
import LocationInteriorTypes from "./LocationInteriorTypes.vue";
import LocationKitchenFeatures from "./LocationKitchenFeatures.vue";
import LocationActivitiesTypes from "./LocationActivitiesTypes.vue";
import LocationWallsTypes from "./LocationWallsTypes.vue";
import LocationWaterFeatures from "./LocationWaterFeatures.vue";
import LocationWindowsTypes from "./LocationWindowsTypes.vue";
import LocationDescription from "./LocationDescription.vue";
import LocationTitle from "./LocationTitle.vue";
import LocationImages from "./LocationImages.vue";

export const LocationSceneSteps = [
  { name: "location-styles", component: LocationStyles },
  { name: "location-features", component: LocationFeatures },
  {
    name: "location-architectural-styles",
    component: LocationArchitecturalStyles,
  },
  { name: "location-bathrooms-types", component: LocationBathroomsTypes },
  { name: "location-ceiling-types", component: LocationCeilingTypes },
  { name: "location-doors-types", component: LocationDoorsTypes },
  { name: "location-exterior-types", component: LocationExteriorTypes },
  { name: "location-floor-types", component: LocationFloorTypes },
  { name: "location-interior-types", component: LocationInteriorTypes },
  { name: "location-kitchen-features", component: LocationKitchenFeatures },
  { name: "location-activities-types", component: LocationActivitiesTypes },
  { name: "location-walls-types", component: LocationWallsTypes },
  { name: "location-water-features", component: LocationWaterFeatures },
  { name: "location-windows-types", component: LocationWindowsTypes },
  { name: "location-description", component: LocationDescription },
  { name: "location-title", component: LocationTitle },
  { name: "location-images", component: LocationImages },
];
