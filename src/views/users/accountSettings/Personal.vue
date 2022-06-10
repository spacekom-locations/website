<template>
  <v-card class="pa-4" max-width="800" flat @keyup.enter="updatePersonalInfo">
    <upload-new-avatar
      :show="showUploadNewAvatar"
      @close="showUploadNewAvatar = false"
    />
    <v-row>
      <v-col>
        <h2 class="display-1 font-weight-bold">Personal Info</h2>
        <h3 class="subtitle-1 gray--text">
          Providing more information about yourself will increase the number of
          inquiries and responses from other users.
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="my-2"></p>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-hover v-slot="{ hover }">
          <user-avatar :size="220" :image="userAvatarImage">
            <v-expand-transition>
              <div
                v-if="hover"
                class="
                  d-flex
                  transition-fast-in-fast-out
                  orange
                  v-card--reveal
                  text-h2
                  white--text
                "
                style="height: 100%"
              >
                <v-btn
                  color="white"
                  x-large
                  depressed
                  @click="showUploadNewAvatar = true"
                  icon
                >
                  <v-icon>mdi-camera</v-icon>
                </v-btn>
              </div>
            </v-expand-transition>
          </user-avatar>
        </v-hover>
        <div class="ma-2"></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        {{ $t("pages.authenticate.signup.fields.name.label") }}
        <v-text-field
          :placeholder="$t('pages.authenticate.signup.fields.name.placeholder')"
          outlined
          color="blue"
          autocomplete="false"
          class="mt-4"
          v-model="user.name"
          :error-messages="errors.name"
          prepend-inner-icon="mdi-account-outline"
          prefix="  "
          :hide-details="errors.name.length == 0"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        {{ $t("pages.authenticate.signup.fields.email.label") }}
        <v-text-field
          :placeholder="
            $t('pages.authenticate.signup.fields.email.placeholder')
          "
          outlined
          color="blue"
          autocomplete="false"
          class="my-2"
          v-model="user.email"
          :error-messages="errors.email"
          prepend-inner-icon="mdi-email-outline"
          prefix="  "
          :hide-details="errors.email.length == 0"
        />
        <v-alert
          text
          dense
          type="success"
          v-if="$store.getters['User/isEmailConfirmed']"
        >
          email confirmed
        </v-alert>
        <v-alert text dense type="warning" border="left">
          email not confirmed
        </v-alert>
      </v-col>
      <v-col>
        Phone number
        <v-text-field
          placeholder="Please enter your phon number here"
          outlined
          color="blue"
          autocomplete="false"
          class="my-2"
          v-model="user.phone_number"
          :error-messages="errors.phoneNumber"
          prepend-inner-icon="mdi-phone-outline"
          prefix="  "
          :hide-details="errors.phoneNumber.length == 0"
        />
        <v-alert
          text
          dense
          type="success"
          v-if="$store.getters['User/isPhoneNumberConfirmed']"
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
        <v-btn
          block
          color="blue"
          class="white--text"
          depressed
          x-large
          @click="updatePersonalInfo"
          :loading="updatingInfos"
          :disabled="!hasModification"
        >
          <v-icon>mdi-content-save</v-icon>
          <span class="mx-2"></span>
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import UserAvatar from "@/components/user/UserAvatar.vue";
import UploadNewAvatar from "@/components/user/UploadNewAvatar.vue";
import { update } from "@/api/users";
import responseCodes from "@/api/responseCodes";
export default {
  components: { UserAvatar, UploadNewAvatar },
  data: () => ({
    user: {},
    errors: {
      name: [],
      email: [],
      phoneNumber: [],
    },
    showUploadNewAvatar: false,
    updatingInfos: false,
  }),
  created() {
    this.user = Object.assign({}, this.$store.getters["User/user"]);
  },
  computed: {
    userAvatarImage() {
      return this.$store.getters["User/user"].avatar;
    },
    hasModification() {
      const oldData = this.$store.getters["User/user"];
      if (oldData.name.trim() !== this.user.name.trim()) {
        return true;
      }
      if (
        oldData.email.trim().toLowerCase() !==
        this.user.email.trim().toLowerCase()
      ) {
        return true;
      }
      if (oldData.phone_number == null) {
        if (
          this.user.phone_number != null &&
          this.user.phone_number.trim().toLowerCase() != ""
        ) {
          return true;
        }
      } else if (
        oldData.phone_number.trim().toLowerCase() !==
          this.user.phone_number.trim().toLowerCase() &&
        this.user.phone_number.trim().toLowerCase() != ""
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    clearErrors() {
      this.errors = {
        name: [],
        email: [],
        phoneNumber: [],
      };
    },
    async updatePersonalInfo() {
      if (!this.hasModification) return false;
      this.updatingInfos = true;
      this.clearErrors();
      const oldData = this.$store.getters["User/user"];
      const newData = {};
      if (oldData.name.trim() !== this.user.name.trim()) {
        newData.name = this.user.name.trim();
      }
      if (
        oldData.email.trim().toLowerCase() !==
        this.user.email.trim().toLowerCase()
      ) {
        newData.email = this.user.email.trim().toLowerCase();
      }
      if (oldData.phone_number == null) {
        if (
          this.user.phone_number != null &&
          this.user.phone_number.trim().toLowerCase() != ""
        ) {
          newData.phone_number = this.user.phone_number.trim().toLowerCase();
        }
      } else if (
        oldData.phone_number.trim().toLowerCase() !==
          this.user.phone_number.trim().toLowerCase() &&
        this.user.phone_number.trim().toLowerCase() != ""
      ) {
        newData.phone_number = this.user.phone_number.trim().toLowerCase();
      }

      try {
        const updateResponse = await update(newData);
        this.$store.commit("User/setUser", updateResponse.data);
      } catch (error) {
        //get the response from the server
        const errorResponse = error.response;
        const errorData = errorResponse.data;

        //if the sent data is not valid
        if (errorResponse.status == responseCodes.HTTP_UNPROCESSABLE_ENTITY) {
          if (errorData.errors.name) {
            this.errors.name = errorData.errors.name;
          }
          if (errorData.errors.email) {
            this.errors.email = errorData.errors.email;
          }
          if (errorData.errors.phone_number) {
            this.errors.phoneNumber = errorData.errors.phone_number;
          }
        }
      }
      this.updatingInfos = false;
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>