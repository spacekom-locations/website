<template>
  <div>
    <div>
      <v-card
        flat
        :to="{
          name: 'Listing.Show',
          params: { locationId: location.id },
        }"
      >
        <v-img
          :aspect-ratio="16 / 9"
          :src="
            location.images[0] == null
              ? 'https://giggster.com/images/imgEmpty2.svg'
              : location.images[0]
          "
        />
        <p class="title font-weight-bold">
          {{ location.title ? location.title : "unTitled" }}
        </p>
      </v-card>
    </div>
    <v-divider></v-divider>
    <div>
      <v-card flat class="pa-4">
        <v-row>
          <v-col cols="8">
            <router-link
              :to="{ name: 'UserProfile', params: { id: location.user.id } }"
              style="text-decoration: none; color: black"
            >
              <p class="title font-weight-bold py-0 my-0 user-name-route">
                {{ location.user.name }}
              </p>
            </router-link>
            <p class="subtitle-2 py-0 my-0">
              <span class="grey--text">Response rating: </span>
              <span>Excellent</span>
            </p>
            <p class="subtitle-2 py-0 my-0">
              <span class="grey--text">Response time: </span>
              <span>A few hours</span>
            </p>
          </v-col>
          <v-col class="text-right">
            <router-link
              :to="{ name: 'UserProfile', params: { id: location.user.id } }"
              style="text-decoration: none; color: black"
            >
              <user-avatar :image="location.user.avatar" :size="64" />
            </router-link>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <v-divider></v-divider>
    <div></div>
  </div>
</template>

<script>
import UserAvatar from "@/components/user/UserAvatar.vue";
export default {
  components: { UserAvatar },
  props: {
    location: {
      required: true,
      type: Object,
      default() {
        return {
          images: [],
          user: {}
        };
      },
    },
  },
};
</script>

<style scoped>
.user-name-route:hover {
  color: rgb(7, 155, 69);
  transition-duration: 350ms;
}
</style>