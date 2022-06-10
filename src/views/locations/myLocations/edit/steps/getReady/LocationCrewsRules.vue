<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          Set location rules for crews
        </p>
        <div class="mt-8">
          <v-checkbox
            v-for="(rule, index) of initialRules"
            :key="rule + index"
            v-model="location.crews_rules"
            :label="rule"
            :value="rule"
            hide-details
            color="success"
          ></v-checkbox>
        </div>
        <div class="mt-8">
          <v-divider></v-divider>
          <v-checkbox
            v-for="(rule, index) of userNonInitialRules"
            :key="rule + index"
            v-model="location.crews_rules"
            :label="rule"
            :value="rule"
            hide-details
            color="error"
          ></v-checkbox>
        </div>
        <div class="my-8">
          <v-text-field
            v-model="newRule"
            @keyup.enter="addNewRule"
            placeholder="Add Rule"
            append-icon="mdi-plus"
            outlined
          ></v-text-field>
        </div>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/crews.png"
          />
        </div>
        <p class="caption mt-4 grey--text">
          In addition to the Giggster terms and conditions, production teams
          must agree to your location rules before they book.
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
  data: () => ({
    initialRules: [
      "No adult filming",
      "No electricity usage",
      "No smoking",
      "No pets",
      "No outside catering/food",
      "No cooking",
      "No alcohol",
      "No loud noises",
    ],
    location: {},
    newRule: "",
  }),
  computed: {
    userNonInitialRules() {
      const rules = [];
      for (let crewsRule of this.location.crews_rules) {
        if (!this.isInitialRule(crewsRule)) {
          rules.push(crewsRule);
        }
      }
      return rules;
    },
  },
  methods: {
    addNewRule() {
      if (this.newRule.trim() == "" || this.hasRule(this.newRule)) {
        return false;
      }
      this.location.crews_rules.push(this.newRule);
      this.newRule = "";
    },
    isInitialRule(rule) {
      for (let initialRule of this.initialRules) {
        if (
          initialRule.replace(/\s+/g, " ").trim().toLowerCase() ==
          rule.replace(/\s+/g, " ").trim().toLowerCase()
        ) {
          return true;
        }
      }
      return false;
    },
    hasRule(rule) {
      for (let crewsRule of this.location.crews_rules) {
        if (
          crewsRule.replace(/\s+/g, " ").trim().toLowerCase() ==
          rule.replace(/\s+/g, " ").trim().toLowerCase()
        ) {
          return true;
        }
      }
      return false;
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
};
</script>

<style>
</style>