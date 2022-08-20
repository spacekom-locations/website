<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12" class="">
      <p class="display-1 font-weight-bold">What kind of location is it?</p>

      <v-btn-toggle v-model="location.kind" width="100">
        <v-btn
          :value="kind.id"
          v-for="kind of kinds"
          :key="kind.id"
          x-large
          :color="location.kind == kind.id ? 'success white--text' : 'white'"
        >
          <span class="hidden-sm-and-down">{{ kind.name }}</span>
        </v-btn>
      </v-btn-toggle>
      <h3 class="mt-8 mb-2">What type?</h3>
      <v-card
        class="pa-0 ma-0 rounded-0"
        outlined
        v-for="(type, index) of kindObject.types"
        :key="`${location.kind}_${type.id}_${index}`"
        @click="toggleLocationType(type, kindObject.id)"
        :style="
          location.types.indexOf(type.id) > -1 ? `border: 1px solid green` : ''
        "
      >
        <v-card-title class="pa-0 ma-0">
          <v-img :src="type.image" max-width="200" />

          <span class="subtitle-1 mx-2">
            {{ type.name }}
          </span>
          <v-spacer></v-spacer>
          <v-simple-checkbox
            class="mx-4"
            :value="location.types.indexOf(type.id) > -1"
            :ripple="false"
            color="success"
            readonly
            @click="toggleLocationType(type, kindObject.id)"
          />
        </v-card-title>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/location-type.png"
          />
        </div>
        <p class="caption mt-4 grey--text">
          If your location can be associated with 2 different categories, either
          list the location for each category or pick the one that is most
          fitting.
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
      lastUsedKind: "",
      kinds: [
        {
          id: "RESIDENTIAL",
          name: "Residential",
          types: [
            {
              id: "APARTMENT_PENTHOUSE_CONDO",
              name: "Apartment/Penthouse/Condo",
              image:
                "https://static.giggster.com/app-images/types/apartment-penthouse-condo.jpg",
            },
            {
              id: "HOUSE",
              name: "House",
              image:
                "https://static.giggster.com/app-images/types/residential-house.jpg",
            },
            {
              id: "LOFT",
              name: "Loft",
              image:
                "https://static.giggster.com/app-images/types/residential-loft.jpg",
            },
            {
              id: "MANSION_ESTATE",
              name: "Mansion or Estate",
              image:
                "https://static.giggster.com/app-images/types/residential-mansion-or-estate.jpg",
            },
            {
              id: "RANCH",
              name: "Ranch",
              image:
                "https://static.giggster.com/app-images/types/residential-ranch.jpg",
            },
          ],
        },
        {
          id: "COMMERCIAL",
          name: "Commercial",
          types: [
            {
              id: "AIRPORT_HANGER",
              name: "Airport/Hangar",
              image:
                "https://static.giggster.com/app-images/types/commercial-airport-hangar.jpg",
            },
            {
              id: "BANK",
              name: "Bank ",
              image: "https://static.giggster.com/app-images/types/bank.jpg",
            },
            {
              id: "BARBER_SHOP",
              name: "Barber Shop",
              image:
                "https://static.giggster.com/app-images/types/barber-shop.jpg",
            },
            {
              id: "BAR_CLUB",
              name: "Bar/Club",
              image:
                "https://static.giggster.com/app-images/types/commercial-bar-club-lounge.jpg",
            },
            {
              id: "BREWERY",
              name: "Brewery",
              image: "https://static.giggster.com/app-images/types/brewery.jpg",
            },
            {
              id: "CEMETERY",
              name: "Cemetery",
              image:
                "https://static.giggster.com/app-images/types/commercial-cemetery.jpg",
            },
            {
              id: "CHURCH_TEMPLE",
              name: "Church/Temple",
              image:
                "https://static.giggster.com/app-images/types/commercial-church-temple.jpg",
            },
            {
              id: "CONCERT_ENTERTAINMENT_VENUE",
              name: "Concert/Entertainment Venue",
              image:
                "https://static.giggster.com/app-images/types/commercial-concert-entertainment-venue.jpg",
            },
            {
              id: "EVENT_SPACE",
              name: "Event Space",
              image:
                "https://static.giggster.com/app-images/types/commercial-event-space-rooftop.jpg",
            },
            {
              id: "FARM_RANCH",
              name: "Farm/Ranch",
              image:
                "https://static.giggster.com/app-images/types/farm-ranch.jpg",
            },
            {
              id: "DANCE_FITNESS_GYM",
              name: "Dance/Fitness/Gym",
              image:
                "https://static.giggster.com/app-images/types/commercial-fitness-dance-studio-or-gym.jpg",
            },
            {
              id: "GALLERY",
              name: "Gallery",
              image: "https://giggster.com/images/no-photos-in-location.jpg",
            },
            {
              id: "DOCTOR_OFFICE_HOSPITAL",
              name: "Doctor's Office/Hospital",
              image:
                "https://static.giggster.com/app-images/types/commercial-hospital-medical.jpg",
            },
            {
              id: "HOTEL_MOTEL",
              name: "Hotel/Motel",
              image:
                "https://static.giggster.com/app-images/types/commercial-hotel-motel.jpg",
            },
            {
              id: "INDUSTRIAL_BUILDINGS",
              name: "Industrial Buildings",
              image:
                "https://static.giggster.com/app-images/types/commercial-industrial-buildings.jpg",
            },
            {
              id: "MUSEUM",
              name: "Museum",
              image: "https://static.giggster.com/app-images/types/museum.jpg",
            },
            {
              id: "OFFICE",
              name: "Office",
              image:
                "https://static.giggster.com/app-images/types/commercial-office.jpg",
            },
            {
              id: "RESTAURANT_CAFE",
              name: "Restaurant/Cafe",
              image:
                "https://static.giggster.com/app-images/types/commercial-restaurant-cafe.jpg",
            },
            {
              id: "RETAIL_SMALL_BUSINESS",
              name: "Retail/Small Business",
              image:
                "https://static.giggster.com/app-images/types/commercial-retail-small-business.jpg",
            },
            {
              id: "SALON_SPA",
              name: "Salon/Spa",
              image:
                "https://static.giggster.com/app-images/types/salon-spa.jpg",
            },

            {
              id: "SCHOOL_UNIVERSITY_DORMITORY",
              name: "School/University/Dormitory",
              image:
                "https://static.giggster.com/app-images/types/commercial-school-library-university-or-dormitory.jpg",
            },
            {
              id: "SPORTS_VENUE",
              name: "Sports Venue",
              image:
                "https://static.giggster.com/app-images/types/sports-venue.png",
            },
            {
              id: "THEATER",
              name: "Theater",
              image:
                "https://static.giggster.com/app-images/types/commercial-theater.jpg",
            },
            {
              id: "WAREHOUSE",
              name: "Warehouse",
              image:
                "https://static.giggster.com/app-images/types/commercial-warehouse.jpg",
            },
            {
              id: "WINERY",
              name: "Winery",
              image:
                "https://static.giggster.com/app-images/types/commercial-winery.jpg",
            },
          ],
        },
        {
          id: "STUDIO",
          name: "Studio",
          types: [
            {
              id: "FILM_STUDIO",
              name: "Film Studio",
              image:
                "https://static.giggster.com/app-images/types/studio-film-studio.jpg",
            },
            {
              id: "LOFT_STUDIO",
              name: "Loft Studio",
              image:
                "https://static.giggster.com/app-images/types/studio-loft-studio.jpg",
            },
            {
              id: "PHOTOGRAPHY_STUDIO",
              name: "Photography Studio",
              image:
                "https://static.giggster.com/app-images/types/studio-photography-studio.jpg",
            },
            {
              id: "RECORDING_STUDIO",
              name: "Recording Studio",
              image:
                "https://static.giggster.com/app-images/types/studio-recording-studio.jpg",
            },
            {
              id: "TV_STUDIO_STAGE",
              name: "TV Studio/Stage",
              image:
                "https://static.giggster.com/app-images/types/studio-tv-studio-stage.jpg",
            },
          ],
        },
        {
          id: "TRANSPORTATION",
          name: "Transportation",
          types: [
            {
              id: "BOAT",
              name: "Boat",
              image:
                "https://static.giggster.com/app-images/Transportation/Boat/boat-transportation.jpg",
            },
            {
              id: "CAR",
              name: "Car",
              image:
                "https://static.giggster.com/app-images/Transportation/Car/Car-transportation.jpg",
            },
            {
              id: "MOTORCYCLE",
              name: "Motorcycle",
              image:
                "https://static.giggster.com/app-images/Transportation/Motorcycle/motorcycle-transportation.jpg",
            },
            {
              id: "AVIATION",
              name: "Aviation",
              image:
                "https://static.giggster.com/app-images/Transportation/Aircraft/aircraft-transportation.jpg",
            },
            {
              id: "TRAIN",
              name: "Train",
              image:
                "https://static.giggster.com/app-images/Transportation/Train/train-transportation.jpg",
            },
            {
              id: "TRUCK",
              name: "Truck",
              image:
                "https://static.giggster.com/app-images/Transportation/Truck/truck-transportation.jpg",
            },
            {
              id: "VAN_BUS_RV",
              name: "Van/Bus/RV",
              image:
                "https://static.giggster.com/app-images/Transportation/Van/RV-transportation.jpg",
            },
          ],
        },
      ],
      location: {},
    };
  },
  computed: {
    kindObject() {
      for (let kind of this.kinds) {
        if (this.location.kind == kind.id) return kind;
      }
      return { id: "", name: "", types: [] };
    },
    // isValid() {
      // if (this.selectedTypes.length < 1) return false;

      // const validKinds = [];
      // for (let k of this.kinds) {
      //   validKinds.push(k.id);
      // }
      // if (!validKinds.includes(this.selectedKind)) return false;

      // return true;
    // },
  },
  methods: {
    toggleLocationType(type, kind) {
      if (kind != this.lastUsedKind) this.location.types = [];
      if (this.location.types.indexOf(type.id) > -1) {
        this.location.types.splice(this.location.types.indexOf(type.id), 1);
      } else {
        this.location.types.push(type.id);
      }
      this.lastUsedKind = kind;
    },
    
   
  },
  created() {
    this.location = this.value;
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
};
</script>

<style>
</style>