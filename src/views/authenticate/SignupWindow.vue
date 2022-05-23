<template>
  <v-row>
    <v-col cols="12" md="6" class="blue rounded-br-xl">
      <div style="text-align: center; padding: 180px 0">
        <v-card-text class="white--text">
          <h3 class="text-center display-1">Alredy Signed up?</h3>
          <p class="my-6"></p>

          <h6 class="text-center headline">
            Log in to your account so you can continue building and<br />
            editing your onboarding flows
          </h6>
          <p class="my-6 py-6"></p>
        </v-card-text>
        <div class="text-center">
          <v-btn width="250" x-large outlined dark @click="$emit('login')">Log in</v-btn>
        </div>
      </div>
    </v-col>

    <v-col cols="12" md="6">
      <v-card-text class="mt-12">
        <h4 class="text-center display-1 info--text">Sign Up for an Account</h4>
        <p class="my-6"></p>

        <h6 class="text-center grey--text headline">
          Let's get you all set up so you can start creatin your
          <br />
          first onboarding experiance
        </h6>
        <p class="my-6"></p>

        <v-row align="center" justify="center">
          <v-col cols="12" sm="8">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Full Name"
                  outlined
                  color="blue"
                  autocomplete="false"
                  class="mt-4"
                />
              </v-col>
            </v-row>
            <v-text-field
              label="Email"
              outlined
              type="email"
              color="blue"
              autocomplete="false"
            />
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Password"
                  outlined
                  color="blue"
                  autocomplete="false"
                  type="password"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Retype Password"
                  outlined
                  color="blue"
                  autocomplete="false"
                  type="password"
                />
              </v-col>
            </v-row>

            <h3>
              By singing up, you accept
              <span class="caption blue--text">Terms &Conditions</span>
            </h3>
            <div class="my-6"></div>
            <v-btn color="blue" depressed dark block x-large>Sign up</v-btn>

        <p class="my-6"></p>
            
          </v-col>
        <p class="my-6"></p>

        </v-row>
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>


<style scoped>
.v-application .rounded-br-xl {
  border-bottom-right-radius: 250px !important;
}
</style>