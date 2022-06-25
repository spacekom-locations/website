<template>
  <div class="mt-6" style="background-color: #fbfbfb">
    <div class="pt-4" style="border-top: 1px solid #ccc">
      <v-container class="py-6 my-6" style="max-width: 1080px">
        <v-row>
          <v-col>
            <span class="blue--text title font-weight-bold"> Space</span
            ><span class="orange--text title font-weight-black">Kom </span>
          </v-col>
          <v-col>
            <h2 class="subtitle-2">Company</h2>
            <div class="px-2 pt-2 body-2">
              <p>About us</p>
              <p>Brands</p>
              <p>Support</p>
              <p>Resources</p>
            </div>
          </v-col>
          <v-col>
            <h2 class="subtitle-2">Hosts</h2>
            <div class="px-2 pt-2 body-2">
              <p>List spaces</p>
              <p>Resource Center</p>
              <p>Guidelines</p>
            </div>
          </v-col>
          <v-col>
            <h2 class="subtitle-2">Activities</h2>
            <div class="px-2 pt-2 body-2">
              <p>Shoots</p>
              <p>Events</p>
              <p>Meeting</p>
              <p>Party</p>
              <p>Reception</p>
              <p>View All</p>
            </div>
          </v-col>

          <v-col>
            <h2 class="subtitle-2">Locations</h2>
            <div class="px-2 pt-2 body-2">
              <p
                v-for="(location, index) of [
                  'Dubai, UA',
                  'Abu Dhabi, UA',
                  'Sharjah, UA',
                  'Al Ain, UA',
                  'Ajman, UA',
                  'Ras Al Khaimah, UA',
                  'Fujairah, UA',
                  'Umm al-Quwain, UA',
                  'Dibba Al-Fujairah, UA',
                  'Khor Fakkan, UA',
                  'Kalba, UA',
                  'Jebel Ali, UA',
                  'Madinat Zayed, UA',
                  'Ruwais, UA',
                ]"
                :key="index"
              >
                {{ location }}
              </p>
            </div>
          </v-col>
          <v-col>
            <h2 class="subtitle-2">Apps</h2>
            <div class="px-2 pt-2 body-2">
              <p>List spaces</p>
              <p>Resource Center</p>
              <p>Guidelines</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-row
        class="mt-8"
        style="background-color: #eaeaeaa0; border-top: 1px solid #ccc"
      >
        <v-col>
          <div class="grey--text text-center">
            <span class="blue--text"> Space</span
            ><span class="orange--text">Kom </span> All rights reserved . Made
            with ❤️ in Dubai, UAE
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>