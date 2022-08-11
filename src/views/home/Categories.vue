<template>
  <v-container style="max-width: 1080px">
    <div>
      <h1 class="display-1 font-weight-bold">
        Book film and event locations from local hosts
      </h1>
      <p class="headline grey--text">
        From studios to mansions and warehouses, we have locations that fit any
        need
      </p>
      <p class="my-6"></p>
      <v-row v-for="(row, index) of rows" :key="index">
        <v-col
          v-for="(card, j) of row"
          :key="j"
          cols="12"
          lg="4"
          md="4"
          sm="12"
          class="pa-4"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              route
              :to="{ name: 'Search' }"
              height="350px"
              flat
              outlined
              :elevation="hover ? 20 : 0"
              :class="{ 'on-hover': hover, 'rounded-0': hover }"
              class="ma-0 pa-0 rounded-lg category-card"
            >
              <v-img
                :src="card.image"
                class="white--text pa-6"
                gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.7)"
                height="350px"
              >
                <div>
                  <h1 style="height: 100px; overflow: visible">
                    {{ card.text }}
                  </h1>
                  <div style="padding-top: 150px"></div>
                  <v-btn x-large align-end justify-start text color="white">
                    <span>See more</span>
                    <span class="mx-2"></span>
                    <v-icon color="white">mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
    <p class="my-6"></p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        [
          {
            text: "Video shoot",
            image: require("../../assets/Video_shoot_tile_v2.webp"),
          },
          {
            text: "Photos shoot",
            image: require("../../assets/photo_shoot.webp"),
          },
          {
            text: "Meeting",
            image: require("../../assets/meeting.jpeg"),
          },
        ],
        [
          {
            text: "Workshop",
            image: require("../../assets/workshop.jpg"),
            
          },
          {
            text: "Performance spaces",
            image: require("../../assets/performance.jpg"),
          },
          {
            text: "Pop-up",
            image: require("../../assets/pop-up.jpeg"),
            
          },
        ],
      ],
    };
  },
};
</script>

<style>
.category-card {
  transition: 0.4s ease-in-out;
}

.category-card:not(.on-hover) {
  opacity: 0.92;
}
</style>