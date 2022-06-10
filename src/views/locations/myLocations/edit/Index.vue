<template>
  <div>
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
              ><span class="orange--text display-1 font-weight-black"
                >Kom
              </span>
            </div>
          </router-link>
          <v-spacer></v-spacer>
          <div v-if="category.steps.length > 0">
            {{ category.title }} {{ currentStep + 1 }} of
            {{ category.steps.length }}
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-btn
              x-large
              @click="save(true)"
              color="success"
              text
              :disabled="updating"
            >
              <v-icon v-if="updating">mdi-refresh mdi-spin</v-icon>
              <span class="mx-3"></span>
              <span>save and exit</span>
            </v-btn>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="black--text">
          <v-container style="max-width: 1080px" class="mt-6">
            <v-card
              v-if="category.steps.length == 0"
              class="mx-auto text-center mt-12"
              flat
            >
              <v-progress-circular
                indeterminate
                size="46"
                color="success"
                v-if="category.steps.length == 0"
                :loading="true"
                class="mx-auto"
              ></v-progress-circular>
            </v-card>

            <v-stepper v-model="currentStep" elevation="0">
              <v-stepper-items>
                <v-stepper-content
                  v-for="(step, index) of category.steps"
                  :key="`${category.id}_${step.name}_${index}_${category.steps.length}`"
                  :step="index"
                >
                  <component v-model="location" :is="step.component" />
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
                @click="GoNextStep"
                :loading="updating"
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
  </div>
</template>

<script>
import { showLocation, updateLocation } from "@/api/locations";
import { categories } from "../categories";

export default {
  data() {
    return {
      category: {
        steps: [],
        id: "",
      },
      currentStep: 0,
      canGoNext: false,
      updating: false,
      location: {},
    };
  },
  computed: {
    stepsProgress() {
      return ((this.currentStep + 1) * 100) / this.category.steps.length;
    },
  },
  async created() {
    await this.loadLocation();
    const categoryId = this.$route.params.category.trim().toUpperCase();
    for (let categoryIndex in categories) {
      if (categoryId == categories[categoryIndex].id.trim().toUpperCase()) {
        this.category = categories[categoryIndex];
        break;
      }
    }
    const step = this.$route.params.step.trim().toLowerCase();
    if (step) {
      if (isNaN(step)) {
        for (let index in this.category.steps) {
          if (this.category.steps[index].name.trim().toLowerCase() == step) {
            this.currentStep = index;
            break;
          }
        }
      } else {
        if (step < 0 || step >= this.category.steps.length) {
          this.currentStep = 0;
        } else {
          this.currentStep = parseInt(step);
        }
      }
    }

    const isTheLastStep = this.currentStep >= this.category.steps.length - 1;

    if (isTheLastStep) {
      await this.GoPreviousStep();
      await this.GoNextStep(false);
    } else {
      await this.GoNextStep(false);
      await this.GoPreviousStep();
    }
  },
  methods: {
    async loadLocation() {
      this.loading = true;
      const location = await showLocation(this.$route.params.id.trim());
      this.location = location.data;
      this.loading = false;
    },
    showNext() {
      this.canGoNext = true;
      return true;
    },
    async GoPreviousStep() {
      if (this.currentStep <= 0) {
        return await this.save(true);
      }
      --this.currentStep;

      let perviousStepName =
        this.category.steps[this.currentStep].name.toLowerCase();

      await this.$router.replace({
        name: "Locations.Edit",
        params: {
          id: this.location.id,
          category: this.category.id.toLowerCase(),
          step: perviousStepName,
        },
      });
    },
    async GoNextStep(withSave = true) {
      if (this.currentStep >= this.category.steps.length - 1) {
        return await this.save(true);
      }

      if (withSave) {
        await this.save();
      }
      ++this.currentStep;

      let nextStepName =
        this.category.steps[this.currentStep].name.toLowerCase();

      await this.$router.replace({
        name: "Locations.Edit",
        params: {
          id: this.location.id,
          category: this.category.id.toLowerCase(),
          step: nextStepName,
        },
      });
    },

    async save(exit = false) {
      if (this.updating) return false;
      this.updating = true;
      const locationResponse = await updateLocation(
        this.location.id,
        this.location
      );
      this.location = locationResponse.data;
      this.updating = false;
      if (exit) {
        this.$router.push({
          name: "Locations.View.Progress",
          params: {
            id: this.location.id,
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