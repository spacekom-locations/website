<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card-text class="mt-12">
        <h4 class="text-center display-1 info--text">
          {{ $t("pages.authenticate.login.title") }}
        </h4>
        <p class="mx-4"></p>
        <h6
          class="text-center headline grey--text"
          v-html="$t('pages.authenticate.login.description')"
        ></h6>

        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" @keyup.enter="login">
            <v-text-field
              :label="$t('pages.authenticate.login.fields.email.label')"
              :placeholder="
                $t('pages.authenticate.login.fields.email.placeholder')
              "
              outlined
              color="blue"
              autocomplete="false"
              class="mt-16"
              v-model="email"
              :error-messages="emailErrors"
              prepend-inner-icon="mdi-email-outline"
          prefix="  "
            />
            <v-text-field
              :label="$t('pages.authenticate.login.fields.password.label')"
              :placeholder="
                $t('pages.authenticate.login.fields.password.placeholder')
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
            <v-alert
              :border="responseAlert.border"
              outlined
              prominent
              :type="responseAlert.type"
              v-if="responseAlert.show"
            >
              <ul>
                <li
                  v-for="(message, index) of responseAlert.messages"
                  :key="index"
                >
                  {{ message }}
                </li>
              </ul>
            </v-alert>
            <v-card-actions class="py-4">
              <v-spacer></v-spacer>
              <span class="blue--text">
                {{ $t("pages.authenticate.login.forgot_password") }}
              </span>
            </v-card-actions>

            <v-btn
              @click="login"
              :loading="isLoggingIn"
              color="blue"
              depressed
              dark
              block
              x-large
            >
              {{ $t("pages.authenticate.login.login_button") }}
            </v-btn>

            <div class="my-6 py-6"></div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-col>
    <v-col cols="12" md="6" class="blue rounded-bl-xl">
      <div style="text-align: center; padding: 180px 0">
        <v-card-text class="white--text">
          <h3 class="text-center display-1">
            {{ $t("pages.authenticate.login.goto_signup_card.title") }}
          </h3>
          <p class="my-6"></p>
          <h6
            class="text-center white--text darken-2 headline"
            v-html="$t('pages.authenticate.login.goto_signup_card.description')"
          ></h6>
        </v-card-text>
        <p class="my-6 py-6"></p>

        <div class="text-center">
          <v-btn width="250" x-large outlined dark @click="$emit('signup')">
            {{ $t("pages.authenticate.login.goto_signup_card.singup_button") }}
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import responseCodes from "@/api/responseCodes";
import { login } from "@/api/users";

export default {
  data: () => ({
    isLoggingIn: false,
    email: "",
    password: "",
    emailErrors: [],
    passwordErrors: [],
    responseAlert: {
      show: false,
      messages: [],
      type: "warning",
      border: "left",
    },
  }),
  methods: {
    validateForm() {
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

      return true;
    },
    clearFieldsErrors() {
      this.emailErrors = [];
      this.passwordErrors = [];
      this.responseAlert.show = false;
    },
    async login() {
      this.clearFieldsErrors();
      if (!this.validateForm()) {
        return false;
      }
      this.isLoggingIn = true;
      try {
        const loginData = await login(this.email, this.password);
        this.responseAlert.type = "success";

        if (loginData.hasError) {
          this.responseAlert.type = "error";
        }
        this.responseAlert.messages = loginData.messages;
        this.responseAlert.show = true;

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
        //get the response from the server
        const errorResponse = error.response;
        const errorData = errorResponse.data;

        //if the sent data is not valid
        if (errorResponse.status == responseCodes.HTTP_UNPROCESSABLE_ENTITY) {
          if (errorData.errors.email) {
            this.emailErrors = errorData.errors.email;
          }
          if (errorData.errors.password) {
            this.passwordErrors = errorData.errors.password;
          }
        }else {
          //show the response message
          this.responseAlert.show = true;
          this.responseAlert.type = "error";
          this.responseAlert.messages = errorData.messages;

          //show error indicator in fields
          this.emailErrors.push("");
          this.passwordErrors.push("");
        }
      }
      this.isLoggingIn = false;
    },
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-top-left-radius: 250px !important;
}
</style>