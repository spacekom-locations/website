<template>
  <v-container class="mt-4 fill-height" style="max-width: 1080px; min-height: 80vh;">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-0" style="border-color: #2196f3" outlined flat>
          <v-window v-model="step">
            <v-window-item :value="1">
              <login-window @signup="step++" />
            </v-window-item>
            <v-window-item :value="2">
              <signup-window @login="step--" />
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginWindow from "./LoginWindow.vue";
import SignupWindow from "./SignupWindow.vue";
export default {
  components: { LoginWindow, SignupWindow },
  data: () => ({
    step: 1,
  }),
  created() {
    if (this.$route.query.action.toLowerCase() == "signup") {
      this.step = 2;
    }
    if (this.$route.query.action.toLowerCase() == "login") {
      this.step = 1;
    }
  },
  props: {
    source: String,
  },
};
</script>

<style>
.container-card {
  border: 1px solid blue;
}
</style>
