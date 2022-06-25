<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on">{{ dateToView }}</span>
    </template>
    <span>{{ fullDate }}</span>
  </v-tooltip>
</template>

<script>
import Sugar from "sugar";
export default {
  data() {
    return {
      dateToView: "",
      intervalId: 0,
      showedTimestamp: new Date().getTime(),
    };
  },

  props: {
    date: { required: true },
    type: { type: String, default: "relative" },
    format: { type: String, default: "" },
    relativeTo: {
      default() {
        return new Date();
      },
    },
  },
  computed: {
    fullDate() {
      return Sugar.Date(this.date).full();
    },
    shortDate() {
      return Sugar.Date(this.date).short();
    },
    longDate() {
      return Sugar.Date(this.date).long();
    },
    mediumDate() {
      return Sugar.Date(this.date).medium();
    },
    formatDate() {
      return Sugar.Date(this.date).format(this.format);
    },
  },
  created() {
    this.intervalId = setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function () {
      if (this.intervalId) {
        console.log("has interval");
        if (Sugar.Date.isBefore(Sugar.Date(this.date), "before 1 minute")) {
          window.clearInterval(this.intervalId);
          this.intervalId = setInterval(this.getNow, 1000 * 60);
        }
        if (Sugar.Date.isBefore(Sugar.Date(this.date), "before 1 hour")) {
          window.clearInterval(this.intervalId);
          this.intervalId = setInterval(this.getNow, 1000 * 60 * 60);
        }
        if (Sugar.Date.isBefore(Sugar.Date(this.date), "before 24 hours")) {
          window.clearInterval(this.intervalId);
          this.intervalId = setInterval(this.getNow, 1000 * 60 * 60 * 24);
        }
      }
      switch (this.type.trim().toLowerCase()) {
        case "relative":
          this.dateToView = this.relativeDate();
          break;
        case "relative-to":
        case "relativeto":
          this.dateToView = this.relativeToDate();
          break;
        case "full":
          this.dateToView = this.fullDate;
          break;
        case "long":
          this.dateToView = this.longDate;
          break;
        case "medium":
          this.dateToView = this.mediumDate;
          break;
        case "short":
          this.dateToView = this.shortDate;
          break;
        case "format":
          this.dateToView = this.formatDate;
          break;
        default:
          this.dateToView = this.relativeDate();
          break;
      }
    },
    relativeToDate() {
      return Sugar.Date(this.date).relativeTo(this.relativeTo);
    },
    relativeDate() {
      return Sugar.Date(this.date).relative();
    },
  },
  destroyed() {
    window.clearInterval(this.intervalId);
  },
};
</script>

<style></style>
