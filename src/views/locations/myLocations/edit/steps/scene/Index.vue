<template>
  <v-dialog
    :value="true"
    scrollable
    fullscreen
    persistent
    :overlay="false"
    transition="dialog-transition"
  >
    <v-card class="pa-0 ma-0" :loading="updating">
      <v-card-title>
        <router-link :to="{ name: 'Home' }" style="text-decoration: none">
          <div class="d-flex align-center">
            <span class="blue--text display-1 font-weight-bold"> Space</span
            ><span class="orange--text display-1 font-weight-black">Kom </span>
          </div>
        </router-link>
        <v-spacer></v-spacer>
        <div>Step One: Set the scene</div>
        <v-spacer></v-spacer>
        <div>
          <v-btn x-large color="success" text :disabled="updating">
            <v-icon v-if="updating">mdi-refresh mdi-spin</v-icon>
            <span class="mx-3"></span>
            <span>save and exit</span>
          </v-btn>
        </div>
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
import { updateLocation } from "@/api/locations";
import { LocationSceneSteps } from ".";

export default {
  data() {
    
    return {
      currentStep: 0,
      steps: LocationSceneSteps,
      canGoNext: false,
      updating: false,
    };
  },
  computed: {
    stepsProgress() {
      return ((this.currentStep + 1) * 100) / this.steps.length;
    },
  },
  created() {
    if (this.$route.query.step) {
      if (isNaN(this.$route.query.step)) {
        let step = this.$route.query.step.trim().toLowerCase();
        for (let index in this.steps) {
          if (this.steps[index].name.trim().toLowerCase() == step) {
            this.currentStep = index;
            break;
          }
        }
      } else {
        this.currentStep = parseInt(this.$route.query.step);
      }
    }
  },
  methods: {
    showNext(value) {
      this.canGoNext = value;
    },
    GoPreviousStep() {
      if (this.currentStep <= 0) {
        window.history.back();
      } else {
        window.history.back();
        --this.currentStep;
      }
    },
    async GoNextStep() {
      this.updating = true;
      const location = await updateLocation(
        this.$route.params.id,
        this.$store.getters["Locations/draftLocation"]
      );

      this.$store.commit("Locations/draftLocation", location.data);
      this.updating = false;
      if (this.currentStep >= this.steps.length - 1) {
        // this.$router.push({
        //   name: "Locations.Edit.Scene",
        //   params: { id: this.$store.getters["Locations/draftLocation"].id },
        //   query: {
        //     step: 0,
        //   },
        // });
        console.log("done");
      } else {
        this.$router.push({
          name: "Locations.Edit.Scene",
          params: { id: this.$store.getters["Locations/draftLocation"].id },
          query: {
            step: this.steps[++this.currentStep].name,
          },
        });
      }
    },
  },
  watch: {},
};
</script>

<style>
</style>