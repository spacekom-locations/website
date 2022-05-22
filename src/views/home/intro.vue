<template>
  <div class="intro">
    <v-container style="height: auto; min-height: 90vh; position: relative">
      <v-row
        style="
          width: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -60%);
        "
      >
        <v-col>
          <v-card class="rounded-lg pa-6" outlined color="#ffffffCC">
            <v-card-title class="headline">
              Find a locations you are looking for
            </v-card-title>
            <v-card-text class="mt-3">
              <v-row>
                <v-col cols="12" lg="6">
                  <v-autocomplete
                    v-model="eventCategory"
                    :items="['Production', 'Event', 'Meeting']"
                    outlined
                    label="What's in your mind"
                    clearable
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-autocomplete
                    v-model="place"
                    :items="[
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
                      'Liwa Oasis, UA',
                      'Dhaid, UA',
                      'Ghayathi, UA',
                      'Ar-Rams, UA',
                      'Dibba Al-Hisn, UA',
                      'Hatta, UA',
                      'Al Madam, UA',
                    ]"
                    outlined
                    clearable
                    label="Where ?"
                  ></v-autocomplete>
                </v-col>
                <v-col>
                  <v-btn x-large color="info darken-1" block>
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
    eventCategory: "",
    place: "",
  }),
};
</script>

<style>
.intro {
  height: auto;
  min-height: 92vh;
  background-image: url("@/assets/img3-1080.webp");
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 94%, 50% 100%, 0 95%);
}
</style>