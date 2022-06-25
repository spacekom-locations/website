<template>
  <div class="intro">
    <v-container style="height: auto; min-height: 100vh; position: relative">
      <v-row
        style="
          width: 90%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "
      >
        <v-col lg="5" xl="4" md="12" sm="12">
          <v-card class="rounded-lg pa-6" outlined color="#ffffffaa">
            <v-card-title class="headline">
              Find a locations you are looking for
            </v-card-title>
            <v-card-text class="mt-3">
              <v-row>
                <v-col cols="12" lg="12" md="6" sm="12" class="py-2">
                  <p class="subtitle-2">What's in your mind</p>
                  <v-autocomplete
                    v-model="activity"
                    :items="validActivities"
                    outlined
                    label="select an activity"
                    clearable
                    hide-details
                    item-text="value"
                    item-value="id"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" lg="12" md="6" sm="12" class="py-2">
                  <p class="subtitle-2">Where ?</p>
                  <v-autocomplete
                    v-model="address"
                    hide-details
                    :items="[
                      'Dubai, UAE',
                      'Abu Dhabi, UAE',
                      'Sharjah, UAE',
                      'Al Ain, UAE',
                      'Ajman, UAE',
                      'Ras Al Khaimah, UAE',
                      'Fujairah, UAE',
                      'Umm al-Quwain, UAE',
                      'Dibba Al-Fujairah, UAE',
                      'Khor Fakkan, UAE',
                      'Kalba, UAE',
                      'Jebel Ali, UAE',
                      'Madinat Zayed, UAE',
                      'Ruwais, UAE',
                      'Liwa Oasis, UAE',
                      'Dhaid, UAE',
                      'Ghayathi, UAE',
                      'Ar-Rams, UAE',
                      'Dibba Al-Hisn, UAE',
                      'Hatta, UAE',
                      'Al Madam, UAE',
                    ]"
                    outlined
                    clearable
                    label="Select a place"
                  ></v-autocomplete>
                </v-col>
                <v-col>
                  <v-btn
                    x-large
                    dark
                    depressed
                    color="info darken-1"
                    block
                    @click="search"
                  >
                    <v-icon>mdi-magnify</v-icon>
                    <span class="mx-1"></span>
                    <span>Find Location</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    validActivities: [
      {
        id: "PRODUCTION",
        value: "Production",
        description: "Film and photo shoots ",
      },
      {
        id: "EVENT",
        value: "Event",
        description: "Baby showers, wedding receptions, art exhibits ",
      },
      {
        id: "MEETING",
        value: "Meeting",
        description: "Workshops, trainings, conferences ",
      },
    ],
    activity: null,
    address: null,
  }),
  methods: {
    search() {
      // let address = this.address.split(",");
      // api.get("/locations/search", {
      //   address,
      //   activity: this.activity,
      // });
      if (
        !this.activity ||
        !this.address ||
        this.activity.trim() == "" ||
        this.address.trim() == ""
      ) {
        return;
      }
      this.$router.push({
        name: "Search",
        query: {
          address: this.address,
          activity: this.activity,
        },
      });
    },
  },
};
</script>

<style>
.intro {
  height: auto;
  min-height: 108vh;
  background-image: url("@/assets/img3-1080.webp");
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 94%, 50% 100%, 0 94%);
}
</style>