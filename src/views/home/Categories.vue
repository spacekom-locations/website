<template>
  <v-container>
    <div>
      <h1 class="display-1 font-weight-bold">
        Book film and event locations from local hosts
      </h1>
      <p class="headline grey--text">
        From studios to mansions and warehouses, we have locations that fit any
        need
      </p>
      <p class="my-6"></p>
      <v-row v-for="j in 2" :key="j">
        <v-col
          v-for="i in 3"
          :key="i"
          cols="12"
          lg="4"
          md="12"
          sm="12"
          class="pa-4"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              route
              :to="{ name: 'Home' }"
              height="350"
              flat
              outlined
              :elevation="hover ? 20 : 0"
              :class="{ 'on-hover': hover , 'rounded-0': hover }"
              class="ma-0 pa-0 rounded-lg category-card"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                class="white--text pa-6"
                gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)"
                height="350px"
              >
                <h1>Houses under $100</h1>
                <div style="padding-top: 200px"></div>
                <v-btn x-large align-end justify-start outlined color="white">
                  <span>See more</span>
                  <spna class="mx-2"></spna>
                  <v-icon color="white">mdi-arrow-right</v-icon>
                </v-btn>
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
export default {};
</script>

<style>
.category-card {
  transition: 0.4s ease-in-out;
}

.category-card:not(.on-hover) {
  opacity: 0.92;
}

</style>