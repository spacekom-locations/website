<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card-text class="mt-4">
        <h3 class="text-center info--text">
          {{ $t("pages.authenticate.login.title") }}
        </h3>

        <h5
          class="text-center grey--text"
          v-html="$t('pages.authenticate.login.description')"
        ></h5>

        <v-row align="center" justify="center" class="my-0 py-0">
          <v-col cols="12" sm="10" @keyup.enter="login" class="my-4 py-0">
            <v-text-field
              :label="$t('pages.authenticate.login.fields.email.label')"
              :placeholder="
                $t('pages.authenticate.login.fields.email.placeholder')
              "
              outlined
              color="blue"
              autocomplete="false"
              class="my-2"
              v-model="email"
              :error-messages="emailErrors"
              :hide-details="emailErrors.length == 0"
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
              :hide-details="passwordErrors.length == 0"
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
            <v-card-actions class="py-2">
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
          </v-col>
        </v-row>
      </v-card-text>
    </v-col>
    <v-col cols="12" md="6" class="blue rounded-bl-xl">
      <div style="text-align: center; padding: 100px 0">
        <v-card-text class="white--text">
          <h3 class="text-center headline">
            {{ $t("pages.authenticate.login.goto_signup_card.title") }}
          </h3>

          <h6
            class="text-center white--text darken-2"
            v-html="$t('pages.authenticate.login.goto_signup_card.description')"
          ></h6>
        </v-card-text>

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
        } else {
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
  border-top-left-radius: 100px !important;
  border-bottom-left-radius: 0px !important;
}
</style>