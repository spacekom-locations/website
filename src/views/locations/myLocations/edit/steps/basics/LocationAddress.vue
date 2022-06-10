<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12" class="px-8">
      <v-row>
        <v-col>
          <p class="display-1 font-weight-bold">
            What is the address of your location?
          </p>
          <p class="subtitle-1">
            Guests will only get your exact address once they’ve booked a
            reservation.
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
              <h3 class="my-2">City <span class="red--text">*</span></h3>
              <v-text-field
                placeholder="e.g Dubai"
                v-model="location.city"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <h3 class="my-2">State <span class="red--text">*</span></h3>
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
          <h3 class="my-2">ZIP Code <span class="red--text">*</span></h3>
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
          Your location address will not be displayed publicly. The exact
          location of your location will only be shared with the production team
          once you confirm the booking.
        </p>
      </v-card>
    </v-col>
  </v-row>
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
      validCountries: [{ code: "UAE", name: "United Arab Emirates" }],
      defaultCountry: "UAE",
      location: {},
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
  watch: {
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
  created() {
    this.location = this.value;
  },
  methods: {},
};
</script>

<style>
</style>