<template>
  <v-dialog
    :value="true"
    scrollable
    fullscreen
    persistent
    :overlay="false"
    transition="dialog-transition"
  >
    <v-card class="pa-0 ma-0">
      <v-card-title>
        <v-container style="max-width: 1080px">
          Step One: The Basics
        </v-container>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="black--text">
        <v-container style="max-width: 1080px" class="mt-6">
          <v-stepper v-model="currentStep" elevation="0">
            <v-stepper-items>
              <v-stepper-content
                v-for="(step, index) of steps"
                :key="`${step.name}-${index}`"
                :step="index"
              >
                <component @validated="showNext" :is="step.component" />
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-container>
      </v-card-text>
      <v-card-actions class="pa-0 ma-0">
        <v-progress-linear :value="stepsProgress" height="10" color="success">
        </v-progress-linear>
      </v-card-actions>
      <v-divider></v-divider>
      <v-card-actions class="pa-0 ma-0">
        <v-container style="max-width: 1080px">
          <v-card-actions class="pa-0 ma-0">
            <v-btn color="secondary" text large @click="GoPreviousStep">
              <v-icon>mdi-arrow-left</v-icon>
              <span class="mx-2"></span>
              <span>Back</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              width="200px"
              depressed
              x-large
              :disabled="!canGoNext"
              @click="GoNextStep"
            >
              <span>Next</span>
              <span class="mx-2"></span>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import LocationAddress from "./LocationAddress.vue";
import LocationKindVue from "./LocationKind.vue";
import LocationPickerVue from "./LocationPicker.vue";
import LocationDetails from "./LocationDetails.vue";
import LocationAccessability from "./LocationAccessability.vue";
import LocationAmenities from "./LocationAmenities.vue";
export default {
  data() {
    const steps = [
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
    return {
      currentStep: 0,
      steps,
      canGoNext: false,
    };
  },
  computed: {
    stepsProgress() {
      return ((this.currentStep + 1) * 100) / this.steps.length;
    },
  },
  methods: {
    showNext(value) {
      this.canGoNext = value;
    },
    GoPreviousStep() {
      if (this.currentStep <= 0) {
        window.history.back();
      } else {
        --this.currentStep;
      }
    },
    GoNextStep() {
      if (this.currentStep >= this.steps.length - 1) {
        console.log("done");
      } else {
        ++this.currentStep;
      }
    },
  },
};
</script>

<style>
</style>