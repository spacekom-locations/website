<template>
  <v-card
    flat
    :loading="loading"
    loader-height="100%"
    :color="loading ? `primary lighten-3` : ``"
    class="ma-0 pa-0"
  >
    <v-card-text>
      <v-row>
        <v-col>
          <v-card flat class="mx-auto">
            <v-card-title>
              <v-spacer></v-spacer>
              <user-avatar :size="220" :image="user.avatar" />
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-title>
              <v-spacer></v-spacer>
              {{ user.name }}
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="mt-6">
              <v-row>
                <v-col>
                  <p class="title">About</p>
                  <p>
                    {{ user.bio }}
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col>
                  <span> Member since: </span>
                  <span class="black--text">{{ registrationDate }}</span>
                </v-col>
                <v-col>
                  <v-alert text dense type="success" v-if="isEmailConfirmed">
                    email confirmed
                  </v-alert>
                  <v-alert text dense type="warning" border="left">
                    email not confirmed
                  </v-alert>
                </v-col>
                <v-col>
                  <v-alert
                    text
                    dense
                    type="success"
                    v-if="isPhoneNumberConfirmed"
                  >
                    phone number confirmed
                  </v-alert>
                  <v-alert text dense type="warning" border="left">
                    phone number not confirmed
                  </v-alert>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <span> Reviews: </span>
                  <span class="black--text">40</span>
                </v-col>
                <v-col>
                  <span> Response Rating: </span>
                  <span class="black--text">Excellent</span>
                </v-col>
                <v-col>
                  <span> Response Speed: </span>
                  <span class="black--text">A few hours</span>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { getUser } from "@/api/users";
import UserAvatar from "@/components/user/UserAvatar.vue";
import Sugar from "sugar";
export default {
  components: { UserAvatar },

  data: () => ({
    user: {},
    loading: false,
  }),
  created() {
    if (this.$route.params.id == this.$store.getters["User/user"].id) {
      this.user = this.$store.getters["User/user"];
    } else {
      this.loadUser();
    }

  },
  computed: {
    registrationDate() {
      return new Sugar.Date(this.user.created_at).medium();
    },
    isEmailConfirmed() {
      return this.user.email_verified_at != null;
    },
    isPhoneNumberConfirmed() {
      return (
        this.user.phone_number != null &&
        this.user.phone_number_verified_at != null
      );
    },
  },
  methods: {
    async loadUser() {
      this.loading = true;
      try {
        const userResponse = await getUser(this.$route.params.id);
        this.user = userResponse.data;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style>
</style>