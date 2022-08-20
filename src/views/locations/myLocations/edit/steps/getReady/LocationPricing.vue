<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          Set a price for your location
        </p>
        <div>
          <p class="display-1 font-weight-bold mb-8">Automatic Pricing</p>
          <yes-no-button v-model="pricing.is_automatic" />
          <p class="py-2">
            This recommends prices that will likely boost bookings based off our
            data. Switch off automatic pricing to manually edit each tier. Once
            you are finished click "next" to save your prices.
          </p>
          <p class="my-6">
            <span class="font-weight-bold"> Tip: </span>
            Usually Event prices are 50% higher than Production prices, and
            Meeting prices are 25% lower
          </p>
        </div>
        <div>
          <v-row>
            <v-col>
              <p class="subtitle-2 font-weight-bold">Minimum hours</p>
              <v-select
                :items="validHours"
                v-model="location.minimum_rental_hours"
                placeholder="Select minium rental hours"
                outlined
              ></v-select>
            </v-col>
            <v-col>
              <p class="subtitle-2 font-weight-bold">Price currency</p>
              <v-select
                :items="validCurrencies"
                v-model="location.currency_code"
                placeholder="Select Currency"
                item-text="text"
                item-value="code"
                outlined
              >
                <template v-slot:item="{ item }">
                  <div class="my-2">
                    <p class="">
                      {{ item.text }}
                    </p>

                    <p class="caption">{{ item.code }} - {{ item.symbol }}</p>
                  </div>
                </template>
              </v-select>
            </v-col>
          </v-row>
        </div>
        <v-divider></v-divider>
        <div
          class="my-2"
          v-for="(range, rangeIndex) in pricing.ranges"
          :key="range.name + '__' + rangeIndex"
        >
          <v-card flat>
            <v-card-text>
              <p>
                <v-simple-checkbox
                  :ripple="false"
                  v-if="rangeIndex > 0"
                  :value="!range.is_disabled"
                  @click="range.is_disabled = !range.is_disabled"
                  class="d-inline-block"
                  color="success"
                />
                <span class="headline"> {{ range.name }} People </span>
              </p>
              <div v-if="!range.is_disabled">
                <v-row>
                  <v-col
                    v-for="(price, pricesIndex) of validPrices"
                    :key="price.id + '__' + pricesIndex"
                  >
                    <p class="subtitle-2 my-3">{{ price.name }}</p>
                    <v-text-field
                      :disabled="
                        !location.allowed_activities.includes(price.id)
                      "
                      :readonly="pricing.is_automatic && rangeIndex > 0"
                      :filled="pricing.is_automatic && rangeIndex > 0"
                      :outlined="!(pricing.is_automatic && rangeIndex > 0)"
                      type="number"
                      v-model="range.prices[price.id]"
                      :suffix="`/hr`"
                      :prefix="`AED : `"
                      :messages="`Your net payout: ${
                        range.prices[price.id] -
                        (15 * range.prices[price.id]) / 100
                      }`"
                      color="success"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </div>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/pricing.png"
          />
        </div>
        <p class="subtitle-1 font-weight-bold my-4">Flexible pricing</p>
        <p class="caption mt-4 grey--text">
          Your base rate can be negotiable. During the booking process, you'll
          have the opportunity to send a customized quote to anyone who wants to
          book your space.
        </p>
        <p class="subtitle-1 font-weight-bold my-4">We're here to help</p>
        <p class="caption mt-4 grey--text">
          If you're feeling uncertain about your price or would like to consult
          with one of our Space Experts, just let us know!
        </p>
        <p class="caption mt-4 grey--text">
          Don't know what price to put? You can take the rate you would charge
          for an airbnb type service and multiply by 3-4x. Remember we take 15%
          commission on every booking.
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import YesNoButton from "@/components/YesNoButton.vue";
export default {
  components: { YesNoButton },
  props: {
    value: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data: () => ({
    validHours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    validCurrencies: [
      // { code: "SDG", text: "Sudan Pound", symbol: "ج.س" },
      // { code: "USD", text: "United State Dollar", symbol: "$" },
      // { code: "EUR", text: "Euro", symbol: "€" },
      // { code: "GBP", text: "Pound Sterling", symbol: "£" },
      // { code: "AED", text: "United Arab Emirates Dirham", symbol: "د.إ" },
      // { code: "SR", text: "Saudi Riyal", symbol: "﷼" },

      { code: "AED", text: "United Arab Emirates Dirham", symbol: "AED" },
    ],
    validPrices: [
      {
        id: "PRODUCTION",
        name: "Production",
      },
      {
        id: "EVENT",
        name: "Event",
      },
      {
        id: "MEETING",
        name: "Meeting",
      },
    ],
    location: {},
  }),

  computed: {
    pricing: {
      get: function () {
        return this.location.pricing;
      },
      set: function (pricing) {
        this.updatePrices(pricing);
      },
    },
    enabledRanges() {
      let ranges = [];
      for (let priceIndex in this.location.pricing.ranges) {
        if (this.location.pricing.ranges[priceIndex].is_disabled) {
          continue;
        }
        ranges.push(parseInt(priceIndex));
      }
      return ranges;
    },
  },
  methods: {
    getCurrencySymbol(currencyCode) {
      if (!currencyCode) return "#";
      currencyCode = currencyCode.trim().toUpperCase();
      for (let currency of this.validCurrencies) {
        if (currency.code.trim().toUpperCase() == currencyCode) {
          return currency.symbol;
        }
      }
      return currencyCode;
    },
    updatePrices(pricing) {
      // update prices

      if (!pricing.is_automatic) {
        return false;
      }

      let initialRange = null;
      for (let range of pricing.ranges) {
        if (range.name.replace(/\s+/g, "").trim().toLowerCase() == "1-5") {
          initialRange = range;
          break;
        }
      }
      if (initialRange == null) {
        console.log("System Error : Data manipulated in pricing");
        return false;
      }

      const additionTable = {
        "1-5": 0,
        "6-15": 11,
        "16-30": 33,
        "31-45": 66,
        "46-60": 133,
        "60+": 166,
      };

      for (let range of pricing.ranges) {
        for (let price of this.validPrices) {
          let initialAmount = Number(initialRange.prices[price.id]);
          let additionAmount =
            (initialAmount *
              Number(
                additionTable[
                  range.name.replace(/\s+/g, "").trim().toLowerCase()
                ]
              )) /
            100;

          range.prices[price.id] = Math.floor(initialAmount + additionAmount);
        }
      }

      // this.location.pricing = pricing;
      // this.$emit("input", Object.assign({}, this.location));
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
        this.updatePrices(this.location.pricing);
        this.$emit("input", Object.assign({}, val));
      },
      deep: true,
    },
  },
  created() {
    this.location = this.value;
    //always set as AED
    this.location.currency_code = "AED";
  },
};
</script>

<style>
</style>