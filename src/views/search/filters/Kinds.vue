<template>
  <v-card-text>
    <p class="font-weight-bold">Types</p>
    <div
      :style="`${show == false ? 'max-height: 250px; overflow: hidden' : ''}`"
    >
      <div
        v-for="(kind, index) of validKinds"
        :key="kind.id + getUUID() + index"
      >
        <v-card color="#DDD" flat>
          <v-card-text class="py-2">
            {{ kind.name.toUpperCase() }}
          </v-card-text>
        </v-card>
        <v-row class="my-2">
          <v-col
            v-for="(t, index) of kind.types"
            :key="kind.id + t.id + getUUID() + index"
            cols="6"
            class="my-0 py-0 pb-2"
          >
            <p
              class="my-0 py-0"
              @click="addType(t.name)"
              style="cursor: pointer"
            >
              {{ t.name }}
            </p>
          </v-col>
        </v-row>
      </div>
    </div>
    <v-btn v-if="show == false" color="success" text @click="show = true">
      show more
      <v-icon>mdi-chevron-double-down</v-icon>
    </v-btn>
    <v-btn v-if="show == true" color="success" text @click="show = false">
      show less
      <v-icon>mdi-chevron-double-up</v-icon>
    </v-btn>
  </v-card-text>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      show: false,
      validKinds: [
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
    };
  },
  methods: {
    getUUID() {
      return uuidv4;
    },
    addType(type) {
      this.$emit("add-type", type);
    },
  },
  watch: {},
};
</script>

<style>
</style>