<template>
  <div @keyup.enter="updatePassword">
    
    
    <v-row>
      <v-col>
        <p class="headline">Change your password</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Current Password
        <v-text-field
          :placeholder="`Enter your current used password`"
          type="password"
          outlined
          color="blue"
          autocomplete="false"
          class="mt-4"
          v-model="password.current"
          :error-messages="errors.currentPassword"
          prepend-inner-icon="mdi-lock"
          prefix="  "
          :hide-details="errors.currentPassword.length == 0"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        New Password
        <v-text-field
          :placeholder="`Enter your new password`"
          type="password"
          outlined
          color="blue"
          autocomplete="false"
          class="mt-4"
          v-model="password.new"
          :error-messages="errors.newPassword"
          prepend-inner-icon="mdi-lock-outline"
          prefix="  "
          :hide-details="errors.newPassword.length == 0"
        ></v-text-field>
      </v-col>
      <v-col>
        New Password Confirmation
        <v-text-field
          :placeholder="`Enter your new password again`"
          type="password"
          outlined
          color="blue"
          autocomplete="false"
          class="mt-4"
          v-model="password.newConfirmation"
          :error-messages="errors.newPasswordConfirmation"
          prepend-inner-icon="mdi-lock-outline"
          prefix="  "
          :hide-details="errors.newPasswordConfirmation.length == 0"
        ></v-text-field>
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
          @click="updatePassword"
          :loading="updatingInfos"
          :disabled="!canUpdate"
        >
          <v-icon>mdi-content-save</v-icon>
          <span class="mx-2"></span>
          Save
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import responseCodes from "@/api/responseCodes";
import { update } from "@/api/users";

export default {
  data: () => ({
    password: {
      current: "",
      new: "",
      newConfirmation: "",
    },
    errors: {
      currentPassword: [],
      newPassword: [],
      newPasswordConfirmation: [],
    },
    updatingInfos: false,
  }),
  computed: {
    canUpdate() {
      if (
        this.password.current != "" &&
        this.password.new != this.password.current &&
        this.password.new.trim() != "" &&
        this.password.newConfirmation == this.password.new
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    clearErrors() {
      this.errors = {
        currentPassword: [],
        newPassword: [],
        newPasswordConfirmation: [],
      };
    },
    async updatePassword() {
      if (!this.canUpdate) return false;
      this.updatingInfos = true;
      this.clearErrors();
      try {
        const updateResponse = await update({
          current_password: this.password.current,
          password: this.password.new,
          password_confirmation: this.password.newConfirmation,
        });
        this.$store.commit("User/setUser", updateResponse.data);
        this.password = {
          current: "",
          new: "",
          newConfirmation: "",
        };
      } catch (error) {
        //get the response from the server
        const errorResponse = error.response;
        const errorData = errorResponse.data;

        //if the sent data is not valid
        if (errorResponse.status == responseCodes.HTTP_UNPROCESSABLE_ENTITY) {
          if (errorData.errors.current_password) {
            this.errors.currentPassword = errorData.errors.current_password;
          }
          if (errorData.errors.password) {
            this.errors.newPassword = errorData.errors.password;
            this.errors.newPasswordConfirmation = errorData.errors.password;
          }
        }
      }
      this.updatingInfos = false;
    },
  },
};
</script>


<style>
</style>