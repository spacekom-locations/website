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

            <v-divider class="my-4"></v-divider>
            <v-btn
               @click="handleClickSignIn"
              :loading="isLoggingIn"
              color="#ea4335"
              depressed
              dark
              block
              x-large
              outlined
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                aria-hidden="true"
              >
                <title>Google</title>
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#4285F4"
                    d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
                  ></path>
                  <path
                    fill="#EA4335"
                    d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
                  ></path>
                </g>
              </svg>
              <span class="mx-2"></span>
              {{ $t("pages.authenticate.login.login_button") }} using google
            </v-btn>
            <div>
              <p>isInit: {{isInit}}</p>
      <p>isSignIn: {{isSignIn}}</p>
            </div>
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
    isInit: false,
    isSignIn: false,
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

    async handleClickUpdateScope() {
      const option = new window.gapi.auth2.SigninOptionsBuilder();
      option.setScope("email https://www.googleapis.com/auth/drive.file");
      const googleUser = this.$gAuth.GoogleAuth.currentUser.get();
      try {
        await googleUser.grant(option);
        console.log("success");
      } catch (error) {
        console.error(error);
      }
    },
    handleClickLogin() {
      this.$gAuth
        .getAuthCode()
        .then((authCode) => {
          //on success
          console.log("authCode", authCode);
        })
        .catch((error) => {
          //on fail do something
          console.log(error);
        });
    },
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log("googleUser", googleUser);
        console.log("getId", googleUser.getId());
        console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        console.log(
          "getAuthResponse",
          this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
        );
        this.isSignIn = this.$gAuth.isAuthorized;
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        this.isSignIn = this.$gAuth.isAuthorized;
        console.log("isSignIn", this.$gAuth.isAuthorized);
      } catch (error) {
        console.error(error);
      }
    },
    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
  },
  created() {
    let that = this;
    let checkGauthLoad = setInterval(function () {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-top-left-radius: 100px !important;
  border-bottom-left-radius: 0px !important;
}
</style>