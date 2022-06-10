<template>
  <v-row>
    <v-col cols="12" md="6" class="blue rounded-br-xl">
      <div style="text-align: center; padding: 180px 0">
        <v-card-text class="white--text">
          <h3 class="text-center display-1">
            {{ $t("pages.authenticate.signup.goto_login_card.title") }}
          </h3>
          <p class="my-6"></p>

          <h6
            class="text-center headline"
            v-html="$t('pages.authenticate.signup.goto_login_card.description')"
          ></h6>
          <p class="my-6 py-6"></p>
        </v-card-text>
        <div class="text-center">
          <v-btn width="250" x-large outlined dark @click="$emit('login')">
            {{ $t("pages.authenticate.signup.goto_login_card.login_button") }}
          </v-btn>
        </div>
      </div>
    </v-col>

    <v-col cols="12" md="6">
      <v-card-text class="mt-12">
        <h4 class="text-center display-1 info--text">
          {{ $t("pages.authenticate.signup.title") }}
        </h4>
        <p class="my-6"></p>

        <h6
          class="text-center grey--text headline"
          v-html="$t('pages.authenticate.signup.description')"
        ></h6>
        <p class="my-6"></p>

        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" @keyup.enter="signup">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  :label="$t('pages.authenticate.signup.fields.name.label')"
                  :placeholder="
                    $t('pages.authenticate.signup.fields.name.placeholder')
                  "
                  outlined
                  color="blue"
                  autocomplete="false"
                  class="mt-4"
                  v-model="name"
                  :error-messages="nameErrors"
                  prepend-inner-icon="mdi-account-outline"
          prefix="  "
                />
              </v-col>
            </v-row>
            <v-text-field
              :label="$t('pages.authenticate.signup.fields.email.label')"
              :placeholder="
                $t('pages.authenticate.signup.fields.email.placeholder')
              "
              outlined
              type="email"
              color="blue"
              autocomplete="false"
              v-model="email"
              :error-messages="emailErrors"
              prepend-inner-icon="mdi-email-outline"
          prefix="  "
            />
            <v-row>
              <v-col cols="12" lg="6">
                <v-text-field
                  :label="$t('pages.authenticate.signup.fields.password.label')"
                  :placeholder="
                    $t('pages.authenticate.signup.fields.password.placeholder')
                  "
                  outlined
                  color="blue"
                  autocomplete="false"
                  type="password"
                  v-model="password"
                  :error-messages="passwordErrors"
                  prepend-inner-icon="mdi-lock-outline"
          prefix="  "
                />
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field
                  :label="
                    $t(
                      'pages.authenticate.signup.fields.password_confirmation.label'
                    )
                  "
                  :placeholder="
                    $t(
                      'pages.authenticate.signup.fields.password_confirmation.placeholder'
                    )
                  "
                  outlined
                  color="blue"
                  autocomplete="false"
                  type="password"
                  :error-messages="passwordConfirmationErrors"
                  v-model="passwordConfirmation"
                  prepend-inner-icon="mdi-lock-outline"
          prefix="  "
                />
              </v-col>
            </v-row>

            <h3 v-html="$t('pages.authenticate.signup.terms_conditions')"></h3>
            <div class="my-6"></div>
            <v-btn
              color="blue"
              @click="signup"
              depressed
              dark
              block
              x-large
              :loading="isSingingUp"
            >
              {{ $t("pages.authenticate.signup.signup_button") }}
            </v-btn>

            <p class="my-6"></p>
          </v-col>
          <p class="my-6"></p>
        </v-row>
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
import responseCodes from "@/api/responseCodes";
import { login, signup } from "@/api/users";

export default {
  data: () => ({
    isSingingUp: false,
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    nameErrors: [],
    emailErrors: [],
    passwordErrors: [],
    passwordConfirmationErrors: [],
  }),
  methods: {
    validateForm() {
      if (this.name.trim() == "") {
        this.nameErrors.push(
          this.$t("pages.authenticate.signup.fields.name.errors.empty")
        );
        return false;
      }
      if (this.email.trim() == "") {
        this.emailErrors.push(
          this.$t("pages.authenticate.signup.fields.email.errors.empty")
        );
        return false;
      }

      if (this.password.trim() == "") {
        this.passwordErrors.push(
          this.$t("pages.authenticate.signup.fields.password.errors.empty")
        );
        return false;
      }

      if (this.passwordConfirmation != this.password) {
        this.passwordConfirmationErrors.push(
          this.$t("pages.authenticate.signup.fields.password_confirmation.errors.not_matched")
        );
        return false;
      }

      return true;
    },
    clearFieldsErrors() {
      this.nameErrors = [];
      this.emailErrors = [];
      this.passwordErrors = [];
      this.passwordConfirmationErrors = [];
    },
    async signup() {
      this.clearFieldsErrors();
      if (!this.validateForm()) {
        return false;
      }
      this.isSingingUp = true;
      try {
        const userData = await signup(
          this.name,
          this.email,
          this.password,
          this.passwordConfirmation
        );
        if (!userData.hasError) {
          try {
            const loginData = await login(this.email, this.password);
            await this.$store.dispatch("User/login", loginData.data);
            let next = "Home";
            if (
              this.$route.query.next &&
              this.$route.query.next.toLowerCase() != "notfound"
            ) {
              next = this.$route.query.next;
            }
            this.$router.push({ name: next });
          } catch (error) {
            alert(error.response.message);
          }
        }
      } catch (error) {
        //get the response from the server
        const errorResponse = error.response;
        const errorData = errorResponse.data;

        //if the sent data is not valid
        if (errorResponse.status == responseCodes.HTTP_UNPROCESSABLE_ENTITY) {
          if (errorData.errors.name) {
            this.nameErrors = errorData.errors.name;
          }
          if (errorData.errors.email) {
            this.emailErrors = errorData.errors.email;
          }
          if (errorData.errors.password) {
            this.passwordErrors = errorData.errors.password;
            this.passwordConfirmationErrors = errorData.errors.password;
          }
        }
      }

      this.isSingingUp = false;
    },
  },
};
</script>


<style scoped>
.v-application .rounded-br-xl {
  border-bottom-right-radius: 250px !important;
}
</style>