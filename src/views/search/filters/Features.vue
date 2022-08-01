<template>
  <v-card-text>
    <p class="font-weight-bold">Features</p>
    <div
      :style="`${show == false ? 'max-height: 250px; overflow: hidden' : ''}`"
    >
      <div v-for="(feature, index) of features" :key="feature.id + index">
        <v-card color="#DDD" flat>
          <v-card-text class="py-2">
            {{ feature.name.toUpperCase() }}
          </v-card-text>
        </v-card>
        <v-row class="my-2">
          <v-col
            v-for="(f, index) of feature.features"
            :key="f.id + index"
            cols="6"
            class="my-0 py-0 pb-2"
          >
            <p
              class="my-0 py-0"
              @click="addFeature(f.name)"
              style="cursor: pointer"
            >
              {{ f.name }}
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
    };
  },
  methods: {
    getUUID() {
      return uuidv4;
    },
    addFeature(type) {
      this.$emit("add-feature", type);
    },
  },
  watch: {},
  computed: {
    features() {
      return [
        { id: this.getUUID(), name: "Features", features: this.validFeatures },
        {
          id: this.getUUID(),
          name: "Water Features",
          features: this.validWaterFeatures,
        },
        {
          id: this.getUUID(),
          name: "Kitchen Features",
          features: this.validKitchenFeatures,
        },
        {
          id: this.getUUID(),
          name: "Activities Types",
          features: this.validActivitiesTypes,
        },
        {
          id: this.getUUID(),
          name: "Bathrooms Types",
          features: this.validBathroomsTypes,
        },
        {
          id: this.getUUID(),
          name: "Ceiling Types",
          features: this.validCeilingTypes,
        },
        {
          id: this.getUUID(),
          name: "Floor Types",
          features: this.validFloorTypes,
        },
        {
          id: this.getUUID(),
          name: "Doors Types",
          features: this.validDoorsTypes,
        },
        {
          id: this.getUUID(),
          name: "Exterior Types",
          features: this.validExteriorTypes,
        },
        {
          id: this.getUUID(),
          name: "Interior Types",
          features: this.validInteriorTypes,
        },
        {
          id: this.getUUID(),
          name: "Walls Types",
          features: this.validWallsTypes,
        },
        {
          id: this.getUUID(),
          name: "Windows Types",
          features: this.validWindowsTypes,
        },
      ];
    },
    validActivitiesTypes() {
      return [
        { id: "BASEBALL_FIELD", name: "Baseball Field" },
        { id: "BOWLING_ALLEY", name: "Bowling alley" },
        { id: "BOXING_RING", name: "Boxing Ring" },
        { id: "DANCE", name: "Dance" },
        { id: "DANCE_YOGA_FITNESS", name: "Dance/Yoga/Fitness" },
        { id: "EQUESTRIAN", name: "Equestrian" },
        { id: "FOOTBALL_FIELD", name: "Football Field" },
        { id: "GOLF", name: "Golf" },
        { id: "GUN_RANGE_ARCHERY", name: "Gun Range/Archery" },
        { id: "GYM", name: "Gym" },
        { id: "HOCKEY", name: "Hockey" },
        { id: "INDOOR_BASKETBALL", name: "Indoor Basketball" },
        { id: "INDOOR_ROCK_CLIMBING", name: "Indoor Rock Climbing" },
        { id: "OUTDOOR_BASKETBALL", name: "Outdoor Basketball" },
        { id: "POOL_TABLE", name: "Pool table" },
        { id: "SOCCER_FIELD", name: "Soccer Field" },
        { id: "TENNIS_COURT", name: "Tennis Court" },
        { id: "TRACK_AND_FIELD", name: "Track and Field" },
        { id: "VOLLEYBALL", name: "Volleyball" },
      ];
    },
    validBathroomsTypes() {
      return [
        { id: "CLAWFOOT_BATHTUB", name: "Clawfoot Bathtub" },
        { id: "DOUBLE_SINK", name: "Double Sink" },
        { id: "LARGE_SHOWER", name: "Large Shower" },
        { id: "MARBLE_BATHROOM", name: "Marble Bathroom" },
        { id: "MODERN_BATHROOM", name: "Modern Bathroom" },
        { id: "SAUNA_STEAM_ROOM", name: "Sauna/Steam Room" },
        { id: "SPA_BATHTUB", name: "Spa Bathtub" },
      ];
    },
    validCeilingTypes() {
      return [
        { id: "CATHEDRAL_CEILING", name: "Cathedral Ceiling" },
        { id: "COFFERED_CEILING", name: "Coffered Ceiling" },
        { id: "CONVENTIONAL_CEILING", name: "Conventional Ceiling" },
        { id: "COVE_CEILING", name: "Cove Ceiling" },
        { id: "EXPOSED_BEAMS", name: "Exposed Beams" },
        { id: "HIGH_CEILING", name: "High Ceiling" },
        { id: "ORNATE_CEILING", name: "Ornate Ceiling" },
        { id: "SUSPENDED_CEILING", name: "Suspended Ceiling" },
        { id: "TRAY_CEILING", name: "Tray Ceiling" },
        { id: "VAULTED_CEILING", name: "Vaulted Ceiling" },
      ];
    },
    validDoorsTypes() {
      return [
        { id: "BATTENED_AND_LEDGED_DOORS", name: "Battened and Ledged Doors" },
        { id: "DUTCH_DOORS", name: "Dutch Doors" },
        { id: "FRENCH_DOORS", name: "French Doors" },
        { id: "GLASS_DOORS", name: "Glass Doors" },
        { id: "ORNATE_DOORS", name: "Ornate Doors" },
        { id: "PIVOT_DOORS", name: "Pivot Doors" },
        { id: "ROLLER_GARAGE_DOOR", name: "Roller Garage Door" },
        { id: "SCREEN_DOORS", name: "Screen Doors" },
        { id: "SLIDING_DOORS", name: "Sliding Doors" },
        { id: "STAINED_GLASS", name: "Stained Glass" },
        { id: "STEEL_DOORS", name: "Steel Doors" },
        { id: "TILT_GARAGE_DOOR", name: "Tilt Garage Door" },
        { id: "WOOD_DOORS", name: "Wood Doors" },
      ];
    },
    validExteriorTypes() {
      return [
        { id: "AVIARY", name: "Aviary" },
        { id: "BACKYARD", name: "Backyard" },
        { id: "BALCONY", name: "Balcony" },
        { id: "BALUSTRADE", name: "Balustrade" },
        { id: "BARN", name: "Barn" },
        { id: "BBQ_GRILL", name: "BBQ Grill" },
        { id: "BEACH_ACCESS", name: "Beach Access" },
        { id: "BRIDGE", name: "Bridge" },
        { id: "COLUMNS", name: "Columns" },
        { id: "COURTYARD", name: "Courtyard" },
        { id: "EXTERIOR_SHOWER", name: "Exterior Shower" },
        { id: "FRONT_YARD", name: "Front yard" },
        { id: "GARAGE_ATTACHED", name: "Garage (Attached)" },
        { id: "GARAGE_DETACHED", name: "Garage (Detached)" },
        { id: "GATES", name: "Gates" },
        { id: "GAZEBO_PERGOLA", name: "Gazebo/Pergola" },
        { id: "GREENHOUSE", name: "Greenhouse" },
        { id: "GUEST_HOUSE", name: "Guest House" },
        { id: "HELICOPTER_PAD", name: "Helicopter Pad" },
        { id: "HILLS", name: "Hills" },
        { id: "LARGE_GROUNDS", name: "Large Grounds" },
        { id: "PLAYGROUND_SWINGS", name: "Playground/Swings" },
        { id: "ROOFTOP", name: "Rooftop" },
        { id: "STABLE_CORRAL", name: "Stable/Corral" },
        { id: "TOOLSHED", name: "Toolshed" },
        { id: "TREEHOUSE", name: "Treehouse" },
        { id: "VERANDA", name: "Veranda" },
        { id: "WALKWAY", name: "Walkway" },
        { id: "WHITE_PICKET_FENCE", name: "White Picket Fence" },
      ];
    },
    validFeatures() {
      return [
        { id: "DRIVEWAY", name: "Driveway" },
        { id: "ELEVATOR", name: "Elevator" },
        { id: "FIREPLACE", name: "Fireplace" },
        { id: "GARDEN_YARD", name: "Garden/Yard" },
        { id: "POOL", name: "Pool" },
        { id: "STAIRS", name: "Stairs" },
        { id: "VIEWS", name: "View" },
      ];
    },
    validFloorTypes() {
      return [
        { id: "CARPET_FLOOR", name: "Carpet Floor" },
        { id: "CHECKER_TILES_FLOOR", name: "Checker Tiles Floor" },
        { id: "CONCRETE_FLOOR", name: "Concrete Floor" },
        { id: "DANCE_FLOOR", name: "Dance Floor" },
        { id: "DARK_WOOD_FLOOR", name: "Dark Wood Floor" },
        { id: "GLASS_FLOOR", name: "Glass Floor" },
        { id: "INLAID_PATTERNS_FLOOR", name: "Inlaid/Patterns Floor" },
        {
          id: "LIGHT_WOOD_WHITEWASH_FLOOR",
          name: "Light Wood/Whitewash Floor",
        },
        { id: "LINOLEUM_FLOOR", name: "Linoleum Floor" },
        { id: "MARBLE_FLOOR", name: "Marble Floor" },
        { id: "STONE_FLOOR", name: "Stone Floor" },
        { id: "TILES_FLOOR", name: "Tiles Floor" },
      ];
    },
    validInteriorTypes() {
      return [
        { id: "ATRIUM", name: "Atrium" },
        { id: "ATTIC", name: "Attic" },
        { id: "BABY_ROOM", name: "Baby Room" },
        { id: "BALLROOM", name: "Ballroom" },
        { id: "BASEMENT", name: "Basement" },
        { id: "BOOKCASE", name: "Bookcase" },
        { id: "CLOSET", name: "Closet" },
        { id: "CROWN_MOLDING", name: "Crown Molding" },
        { id: "DRESSING_ROOM", name: "Dressing Room" },
        { id: "GAME_ROOM", name: "Game room" },
        { id: "HOME_BAR", name: "Home Bar" },
        { id: "HOME_GYM", name: "Home Gym" },
        { id: "HOME_LIBRARY", name: "Home Library" },
        { id: "HOME_OFFICE", name: "Home Office" },
        { id: "HOME_RECORDING_STUDIO", name: "Home Recording Studio" },
        { id: "HOME_THEATRE", name: "Home Theatre" },
        { id: "KID_ROOM_TEENAGER_ROOM", name: "Kid Room/Teenager Room" },
        { id: "LANDRY_ROOM", name: "Laundry Room" },
        { id: "OPEN_FLOOR_PLAN", name: "Open Floor Plan" },
        { id: "PIANO", name: "Piano" },
        { id: "WALK_IN_CLOSET", name: "Walk-in closet" },
        { id: "WINE_CELLAR", name: "Wine Cellar" },
        { id: "WORKSHOP", name: "Workshop" },
      ];
    },
    validKitchenFeatures() {
      return [
        { id: "BREAKFAST_NOOK", name: "Breakfast Nook" },
        { id: "BRIGHT_KITCHEN", name: "Bright Kitchen" },
        { id: "CHEFS_KITCHEN", name: "Chef's Kitchen" },
        { id: "COUNTRY_KITCHEN", name: "Country Kitchen" },
        { id: "DATED_50S_TO_70S_KITCHEN", name: "Dated/50's to 70's Kitchen" },
        { id: "GLASS_KITCHEN_CABINETS", name: "Glass Kitchen Cabinets" },
        { id: "GRANITE_COUNTERTOP", name: "Granite Countertop" },
        { id: "KITCHEN_ISLAND", name: "Kitchen Island" },
        { id: "OPEN_KITCHEN", name: "Open Kitchen" },
        { id: "STAINLESS_STEEL_KITCHEN", name: "Stainless Steel Kitchen" },
        { id: "WHITE_KITCHEN", name: "White Kitchen" },
        { id: "WOOD_KITCHEN_CABINETS", name: "Wood Kitchen Cabinets" },
        { id: "WOOD_KITCHEN_COUNTERROP", name: "Wood Kitchen Countertop" },
      ];
    },
    validWallsTypes() {
      return [
        { id: "BRICK_WALLS", name: "Brick Walls" },
        { id: "COLORED_WALLS", name: "Colored Walls" },
        { id: "CONCRETE_WALLS", name: "Concrete Walls" },
        { id: "CORRUGATED_METAL_WALLS", name: "Corrugated Metal Walls" },
        { id: "GLASS_WALL", name: "Glass Wall" },
        { id: "GRAFFITI_WALL", name: "Graffiti Wall" },
        { id: "MIRRORED", name: "Mirrored" },
        { id: "MURAL_WALL", name: "Mural Wall" },
        { id: "STONE_WALLS", name: "Stone Walls" },
        { id: "TEXTURE_WALLS", name: "Texture Walls" },
        { id: "TILED_WALLS", name: "Tiled Walls" },
        { id: "WALLPAPER", name: "Wallpaper" },
        { id: "WHITE_WALLS", name: "White Walls" },
        { id: "WHITEWASHED_WALLS", name: "Whitewashed Walls" },
        { id: "WOOD_PANELED_WALLS", name: "Wood-Paneled Walls" },
      ];
    },
    validWaterFeatures() {
      return [
        { id: "FOUNTAIN", name: "Fountain" },
        { id: "LAKE", name: "Lake" },
        { id: "POND_STREAM_CREEK", name: "Pond/Stream/Creek" },
        { id: "REFLECTING_POOL", name: "Reflecting Pool" },
        { id: "WATERFALL", name: "Waterfall" },
      ];
    },
    validWindowsTypes() {
      return [
        { id: "BAY_OR_BOW_WINDOWS", name: "Bay or Bow Windows" },
        { id: "FLOOR_TO_CEILING_WINDOWS", name: "Floor-to-Ceiling Windows" },
        { id: "HINGED_CASEMENT_WINDOWS", name: "Hinged/Casement Windows" },
        { id: "ONE_WAY_MIRROR", name: "One-Way Mirror" },
        {
          id: "PICTURE_STATIONARY_WINDOWS",
          name: "Picture/Stationary Windows",
        },
        {
          id: "SASH_UP_AND_DOWN_HUNG_WINDOWS",
          name: "Sash/Up And Down/Hung Windows",
        },
        { id: "SLIDER_WINDOWS", name: "Slider Windows" },
        { id: "STAINED_GLASS_WINDOWS", name: "Stained Glass Windows" },
        { id: "TRANSOM_WINDOW", name: "Transom Window" },
      ];
    },
  },
};
</script>

<style>
</style>