<template>
  <div class="pt-6 mt-6" style="background-color: #fbfbfb">
    <div class="pt-4" style="border-top: 1px solid #ccc">
      <v-container class="py-6 my-6">
        <v-row>
          <v-col>
            <span class="blue--text display-1 font-weight-bold"> Space</span
            ><span class="orange--text display-1 font-weight-black">Kom </span>
          </v-col>
          <v-col>
            <h2 class="headline">Company</h2>
            <div class="px-2 pt-2">
              <p>About us</p>
              <p>Brands</p>
              <p>Support</p>
              <p>Resources</p>
            </div>
          </v-col>
          <v-col>
            <h2 class="headline">Hosts</h2>
            <div class="px-2 pt-2">
              <p>List spaces</p>
              <p>Resource Center</p>
              <p>Guidelines</p>
            </div>
          </v-col>
          <v-col>
            <h2 class="headline">Activities</h2>
            <div class="px-2 pt-2">
              <p>Shoots</p>
              <p>Events</p>
              <p>Meeting</p>
              <p>Party</p>
              <p>Reception</p>
              <p>View All</p>
            </div>
          </v-col>
          
          <v-col>
            <h2 class="headline">Locations</h2>
            <div class="px-2 pt-2">
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
            <h2 class="headline">Apps</h2>
            <div class="px-2 pt-2">
              <p>List spaces</p>
              <p>Resource Center</p>
              <p>Guidelines</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div
              class="mt-6 pt-4 headline grey--text text-center"
              style="border-top: 1px solid #ccc"
            >
              SpaceKom All rights reserved . Made with ❤️ in Dubai, UA
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>