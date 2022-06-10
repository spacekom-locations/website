import LocationCrewsRules from "./LocationCrewsRules.vue";
import LocationAvailabilityCalendar from "./LocationAvailabilityCalendar.vue";
import LocationAllowedActivities from "./LocationAllowedActivities.vue";
import LocationPricing from "./LocationPricing.vue";
export const LocationGetReadySteps = [
  { name: "location-rules", component: LocationCrewsRules },
  {
    name: "location-availability-calendar",
    component: LocationAvailabilityCalendar,
  },
  { name: "location-allowed-activities", component: LocationAllowedActivities },
  { name: "location-pricing", component: LocationPricing },
];
