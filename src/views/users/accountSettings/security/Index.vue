<template>
  <v-card class="pa-4" max-width="800" flat>
    <v-row>
      <v-col>
        <h2 class="display-1 font-weight-bold">Login And Security</h2>
        <h3 class="subtitle-1 gray--text">
          Manage your account security setting here
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="my-2"></p>
      </v-col>
    </v-row>
    <change-password />
    <v-row>
      <v-col>
        <p class="my-2"></p>
      </v-col>
    </v-row>
    <login-sessions />
  </v-card>
</template>

<script>
import ChangePassword from "./ChangePassword.vue";
import LoginSessions from "./LoginSessions.vue";
export default {
  components: { ChangePassword, LoginSessions },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style>
</style>