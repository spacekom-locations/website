<template>
  <v-dialog
    :value="true"
    scrollable
    fullscreen
    persistent
    :overlay="false"
    transition="dialog-transition"
  >
    <v-card class="pa-0 ma-0" :loading="adding">
      <v-card-title>
        <v-container style="max-width: 1080px">
          Step One: The Basics
        </v-container>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="black--text">
        <v-container style="max-width: 1080px" class="mt-6">
          <v-row>
            <v-col lg="8" sm="12" xs="12" class="px-8">
              <v-row>
                <v-col>
                  <p class="display-1 font-weight-bold">
                    What is the address of your location?
                  </p>
                  <p class="subtitle-1">
                    Guests will only get your exact address once they’ve booked
                    a reservation.
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div class="mt-4">
                    <h3 class="my-2">
                      Country / Region
                      <span class="red--text">*</span>
                    </h3>
                    <v-autocomplete
                      :items="validCountries"
                      v-model="location.country"
                      item-text="name"
                      item-value="code"
                      outlined
                    ></v-autocomplete>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-row>
                    <v-col md="8">
                      <h3 class="my-2">
                        Street Address <span class="red--text">*</span>
                      </h3>
                      <v-text-field
                        placeholder="e.g 911 General St"
                        v-model="location.street"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <h3 class="my-2">Apt, Suite</h3>
                      <v-text-field
                        v-model="location.apt_suite"
                        placeholder="e.g Apt #1"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-row>
                    <v-col md="8">
                      <h3 class="my-2">
                        City <span class="red--text">*</span>
                      </h3>
                      <v-text-field
                        placeholder="e.g Dubai"
                        v-model="location.city"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <h3 class="my-2">
                        State <span class="red--text">*</span>
                      </h3>
                      <v-text-field
                        v-model="location.state"
                        placeholder="e.g Dubai"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3 class="my-2">
                    ZIP Code <span class="red--text">*</span>
                  </h3>
                  <v-text-field
                    placeholder="e.g 123456"
                    v-model="location.zip_code"
                    outlined
                  ></v-text-field>
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
                  Your location address will not be displayed publicly. The
                  exact location of your location will only be shared with the
                  production team once you confirm the booking.
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="pa-0 ma-0">
        <v-progress-linear :value="100 / 6" height="10" color="success">
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
              :disabled="!isValid"
              @click="GoNextStep"
              :loading="adding"
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
import { addLocation } from "@/api/locations";
export default {
  components: {},
  data() {
    return {
      validCountries: [{ code: "UAE", name: "United Arab Emirates" }],
      location: {
        country: "UAE",
        state: "",
        city: "",
        apt_suit: "",
        street: "",
        zip_code: "",
      },
      adding: false,
    };
  },
  computed: {
    validCountriesCodes() {
      let validCountriesAsCodes = [];
      for (let country of this.validCountries) {
        validCountriesAsCodes.push(country.code);
      }
      return validCountriesAsCodes;
    },
    isValid() {
      if (
        !this.location.country ||
        !this.validCountriesCodes.includes(this.location.country)
      ) {
        return false;
      }
      if (!this.location.street || this.location.street.trim() == "")
        return false;
      if (!this.location.city || this.location.city.trim() == "") return false;
      if (!this.location.state || this.location.state.trim() == "")
        return false;
      if (!this.location.zip_code || this.location.zip_code.trim() == "")
        return false;

      return true;
    },
  },
  methods: {
    showNext(value) {
      this.canGoNext = value;
    },
    GoPreviousStep() {
      window.history.back();
    },
    async GoNextStep() {
      this.adding = true;
      const location = await addLocation(this.location);
      this.$store.commit("Locations/draftLocation", location.data);

      this.$router.replace({
        name: "Locations.Edit",
        params: {
          id: location.data.id,
          category: "basics",
          step: "location-picker",
        },
      });
      this.adding = false;
    },
  },
};
</script>

<style>
</style>