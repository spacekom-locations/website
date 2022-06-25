<template>
  <div>
    <v-row class="my-4" v-for="(item, index) of detailsTable" :key="index">
      <v-col md="4" class="subtitle-1 font-weight-bold">
        {{ item.title }}</v-col
      >
      <v-col v-html="item.details"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    detailsTable() {
      let table = [];
      table.push(this.typesRow);
      table.push(this.parkingRow);
      table.push(this.detailsRow);
      table.push(this.rulesRow);
      table.push(this.amenitiesRow);
      table.push(this.featuresRow);
      table.push(this.crewAccessRow);
      return table;
    },
    typesRow() {
      let details_str = "";
      if (!this.location.types) return;

      for (let typeIndex in this.location.types) {
        if (typeIndex > 0) {
          details_str += ", ";
        }
        details_str += this.$t(
          "models.location.kinds." +
            this.location.kind +
            ".types." +
            this.location.types[typeIndex]
        );
      }
      details_str += " <br /> ";

      for (let StyleIndex in this.location.styles) {
        if (StyleIndex > 0) {
          details_str += ", ";
        }
        details_str += this.$t(
          "models.location.styles." + this.location.styles[StyleIndex] + ".name"
        );
      }
      return {
        title: "Category and Style",
        details: details_str,
      };
    },
    parkingRow() {
      let details_str = "";
      if (!this.location.types) {
        return;
      }
      details_str += `
        <div>
          Private parking for 
          <span class="font-weight-bold">${this.location.parking_capacity}</span>
          cars
        </div>
      `;

      details_str += `
        <div>
          Truck / motorhome on site parking: 
      `;
      for (let typeIndex in this.location.motor_home_parking_types) {
        if (typeIndex > 0) {
          details_str += ", ";
        }
        details_str += this.$t(
          "models.location.motor_home_parking_types." +
            this.location.motor_home_parking_types[typeIndex]
        );
      }
      details_str += `
        </div>
      `;

      if (this.location.has_parking_structure) {
        details_str += `
          <div>
            Available parking lot or parking structure nearby
          </div>
        `;
      }

      return {
        title: "Parking",
        details: details_str,
      };
    },
    detailsRow() {
      let details_str = "";

      details_str += `
        <div>
          Property size (sq ft): ${this.location.size}
        </div>
      `;
      if (this.location.main_floor_number) {
        details_str += `
          <div>
            Main floor number: ${this.location.main_floor_number}
          </div>
        `;
      }
      return {
        title: "Location Details",
        details: details_str,
      };
    },
    rulesRow() {
      let details_str = "";
      if (this.location.crews_rules.length < 1) return;

      for (let rule of this.location.crews_rules) {
        details_str += `
          <div>  ${rule}  </div>
        `;
      }
      return {
        title: "Location Rules",
        details: details_str,
      };
    },
    amenitiesRow() {
      let details_str = "";
      if (this.location.amenities.length < 1) return;

      for (let amenity of this.location.amenities) {
        details_str += `
          <div>  ${amenity}  </div>
        `;
      }
      return {
        title: "Amenities",
        details: details_str,
      };
    },
    featuresRow() {
      let details_str = "";
      details_str += `
        <div class="row">
      `;
      if (!this.location.features.length) return;
      for (let featureIndex in this.location.features) {
        if (featureIndex % 2 == 0) {
          details_str += `</div><div class="row">`;
        }
        details_str += `
          <div class="col">
            ${this.$t(
              "models.location.features." + this.location.features[featureIndex]
            )}
          </div>
        `;
      }
      details_str += `</div>`;
      return {
        title: "Features",
        details: details_str,
      };
    },
    crewAccessRow() {
      let details_str = "";
      for (let typeIndex in this.location.access_availability_types) {
        if (typeIndex > 0) {
          details_str += ", ";
        }
        details_str += this.$t(
          "models.location.access_availability_types." +
            this.location.access_availability_types[typeIndex]
        );
      }

      return {
        title: "Crew Access",
        details: details_str,
      };
    },
  },
};
</script>

<style>
</style>