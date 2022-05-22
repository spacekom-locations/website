<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card-text class="mt-12">
        <h4 class="text-center display-1 info--text">Login in to Your Account</h4>
        <p class="mx-4"></p>
        <h6 class="text-center headline grey--text">
          Log in to your account so you can continue builiding
          <br />and editing your onboarding flows
        </h6>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8">
            <v-text-field
              label="Email"
              outlined
              color="blue"
              autocomplete="false"
              class="mt-16"
            />
            <v-text-field
              label="Password"
              outlined
              color="blue"
              autocomplete="false"
              type="password"
            />

            <v-card-actions class="py-4">
              <v-spacer></v-spacer>
              <span class="blue--text">Forgot password</span>
            </v-card-actions>

            <v-btn color="blue" dark block x-large>Log in</v-btn>

            <div class="my-6 py-6"></div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-col>
    <v-col cols="12" md="6" class="blue rounded-bl-xl">
      <div style="text-align: center; padding: 180px 0">
        <v-card-text class="white--text">
          <h3 class="text-center display-1">Don't Have an Account Yet?</h3>
          <p class="my-6"></p>
          <h6 class="text-center white--text darken-2 headline">
            Let's get you all set up so you can start creating your your
            first<br />
            onboarding experience
          </h6>
        </v-card-text>
          <p class="my-6 py-6"></p>

        <div class="text-center">
          <v-btn x-large outlined dark @click="$emit('signup')">SIGN UP</v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-top-left-radius: 350px !important;
}
</style>