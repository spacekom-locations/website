<template>
  <div>
    <v-container>
      <v-card v-if="loading" class="mx-auto text-center mt-12" flat>
        <v-progress-circular
          indeterminate
          size="46"
          color="success"
          :loading="true"
          class="mx-auto"
        ></v-progress-circular>
      </v-card>
      <v-card :disabled="loading" flat max-width="1080px" class="pa-4 mx-auto">
        <v-row class="mt-16">
          <v-col>
            <h3 class="display-1">Moving on!</h3>
            <v-progress-linear
              class="my-6"
              :value="completionProgress"
              height="10"
              color="success"
              rounded
            ></v-progress-linear>
            <p class="caption">
              Your listing is {{ completionProgress }}% done. Now let's get some
              details about your place so you can publish your listing.
            </p>
            <div class="my-8">
              <div
                v-for="(category, index) of categories"
                :key="category.id + index"
              >
                <div>
                  <div class="d-flex flex-row">
                    <v-card
                      width="50px"
                      height="50"
                      outlined
                      class="rounded-circle text-center"
                      :style="`line-height: 50px;${
                        calculateCategoryCompletion(category.id) < 100
                          ? ''
                          : 'border: 1px solid green'
                      }`"
                    >
                      <span
                        v-if="calculateCategoryCompletion(category.id) < 100"
                      >
                        {{ index + 1 }}
                      </span>
                      <v-icon v-else color="success">mdi-check</v-icon>
                    </v-card>

                    <div class="mx-4">
                      <span class="subtitle font-weight-bold">{{
                        category.name
                      }}</span>
                      <p class="caption">{{ category.description }}</p>
                    </div>
                    <div class="ml-auto">
                      <v-card
                        flat
                        route
                        :to="{
                          name: 'Locations.Edit',
                          params: {
                            id: location.id,
                            category: category.id.trim().toLowerCase(),
                            step: category.steps[0].name.trim().toLowerCase(),
                          },
                        }"
                        v-if="
                          category.id == 'BASICS'
                            ? true
                            : basicsCompletionProgress >= 100
                        "
                      >
                        <v-btn
                          color="success"
                          v-if="calculateCategoryCompletion(category.id) < 100"
                          depressed
                          large
                        >
                          continue
                        </v-btn>
                        <v-btn v-else color="success" depressed large text>
                          edit
                        </v-btn>
                      </v-card>
                    </div>
                  </div>
                  <v-progress-linear
                    class="my-6"
                    :value="calculateCategoryCompletion(category.id)"
                    height="5"
                    color="green"
                    rounded
                  ></v-progress-linear>
                </div>
                <v-divider
                  v-if="index + 1 < categories.length"
                  class="mt-2 mb-4"
                ></v-divider>
              </div>
            </div>
          </v-col>
          <v-col cols="6" class="pa-8">
            <div style="max-width: 400px" class="mx-auto">
              <v-img :src="progressImage" />
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-2">
          <v-col>
            <v-btn
              color="primary"
              outlined
              large
              route
              :to="{ name: 'Locations.Mine' }"
            >
              <span> go to listing </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { showLocation } from "@/api/locations";
import { categories } from "../categories";
import {
  basicsFields,
  calculateProgress,
  completionProgress,
  getReadyFields,
  sceneFields,
} from "./index";
export default {
  data() {
    return {
      categories,
      loading: false,
      location: {},
    };
  },
  computed: {
    completionProgress() {
      return completionProgress(this.location);
    },
    basicsCompletionProgress() {
      return calculateProgress(basicsFields, this.location);
    },
    sceneCompletionProgress() {
      return calculateProgress(sceneFields, this.location);
    },
    getReadyCompletionProgress() {
      return calculateProgress(getReadyFields, this.location);
    },
    progressImage() {
      if (this.basicsCompletionProgress < 100) {
        return `https://giggster.com/images/become-host-steps/step0.png`;
      }

      if (this.sceneCompletionProgress < 100) {
        return `https://giggster.com/images/become-host-steps/step1.png`;
      }

      if (this.getReadyCompletionProgress < 100) {
        return `https://giggster.com/images/become-host-steps/step2.png`;
      }

      return `https://giggster.com/images/become-host-steps/step3.png`;
    },
  },
  async created() {
    await this.loadLocation();
  },
  methods: {
    calculateCategoryCompletion(categoryId) {
      switch (categoryId) {
        case "BASICS":
          return this.basicsCompletionProgress;
        case "SCENE":
          return this.sceneCompletionProgress;
        case "GET_READY":
          return this.getReadyCompletionProgress;
        default:
          return 100;
      }
    },
    async loadLocation() {
      this.loading = true;
      const location = await showLocation(this.$route.params.id.trim());
      this.location = location.data;
      this.loading = false;
    },
  },
  watch: {},
};
</script>

<style>
</style>