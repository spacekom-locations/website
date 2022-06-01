<template>
  <v-card
    class="pa-4"
    max-width="800"
    flat
    @keydown.enter="updateAdditionalInfo"
  >
    <v-row>
      <v-col>
        <h2 class="display-1 font-weight-bold">Additional Info</h2>
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
      <v-col>
        Company
        <v-text-field
          :placeholder="`Enter your company name`"
          outlined
          color="blue"
          autocomplete="false"
          class="mt-4"
          v-model="user.company"
          :error-messages="errors.company"
          prepend-inner-icon="mdi-briefcase-outline"
          prefix="  "
          :hide-details="errors.company.length == 0"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Choose a category that fits you best:
        <v-autocomplete
          :placeholder="`Pick an option or type your own`"
          outlined
          color="blue"
          class="mt-4"
          v-model="user.category"
          :error-messages="errors.category"
          prepend-inner-icon="mdi-tag-outline"
          prefix="  "
          :hide-details="errors.category.length == 0"
          item-text="text"
          item-value="id"
          :items="validCategories"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Bio
        <v-textarea
          :placeholder="`Write a words about you, People like to know who they are dealing with`"
          outlined
          color="blue"
          autocomplete="false"
          class="mt-4"
          v-model="user.bio"
          :error-messages="errors.bio"
          grow
          rows="3"
          prepend-inner-icon="mdi-account"
          prefix="  "
          :hide-details="errors.bio.length == 0"
        />
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
          @click="updateAdditionalInfo"
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
import responseCodes from "@/api/responseCodes";
import { update } from "@/api/users";

export default {
  data: () => ({
    user: {},
    errors: {
      company: [],
      category: [],
      bio: [],
    },
    updatingInfos: false,
  }),
  created() {
    this.user = Object.assign({}, this.$store.getters["User/user"]);
  },
  computed: {
    validCategories() {
      const userValidCategories = [
        "PRODUCER_PRODUCTION_MANAGER",
        "BRAND_AFFILIATED",
        "INDEPENDENT_CONTENT_CREATOR",
        "STUDENT",
        "EVENT_PLANER",
        "PHOTOGRAPHER",
        "VIDEOGRAPHER",
        "DIRECTOR",
        "WEDDING_PLANNER",
        "ARTIST",
        "BRIDE",
        "BUSINESS_OWNER_AFFILIATED",
      ];
      const categories = [
        {
          text: "Choose a category that fits you best",
          id: -1,
          disabled: true,
        },
      ];
      for (let category of userValidCategories) {
        categories.push({
          id: category,
          text: this.$t("models.user.categories." + category),
        });
      }
      return categories;
    },
    hasModification() {
      const oldData = this.$store.getters["User/user"];
      if (oldData.company == null) {
        if (this.user.company !== null && this.user.company.trim() != "") {
          return true;
        }
      } else {
        if (oldData.company.trim() !== this.user.company.trim()) {
          return true;
        }
      }

      if (oldData.category == null) {
        if (this.user.category !== null && this.user.category.trim() != "") {
          return true;
        }
      } else {
        if (oldData.category.trim() !== this.user.category.trim()) {
          return true;
        }
      }

      if (oldData.bio == null) {
        if (this.user.bio !== null && this.user.bio.trim() != "") {
          return true;
        }
      } else {
        if (oldData.bio.trim() !== this.user.bio.trim()) {
          return true;
        }
      }

      return false;
    },
  },
  methods: {
    clearErrors() {
      this.errors = {
        company: [],
        category: [],
        bio: [],
      };
    },
    async updateAdditionalInfo() {
      if (!this.hasModification) return false;
      this.updatingInfos = true;
      this.clearErrors();
      const oldData = this.$store.getters["User/user"];
      const newData = {};

      if (oldData.company == null) {
        if (this.user.company !== null && this.user.company.trim() != "") {
          newData.company = this.user.company.trim();
        }
      } else {
        if (oldData.company.trim() !== this.user.company.trim()) {
          newData.company = this.user.company.trim();
        }
      }

      if (oldData.category == null) {
        if (this.user.category !== null && this.user.category.trim() != "") {
          newData.category = this.user.category;
        }
      } else {
        if (oldData.category.trim() !== this.user.category.trim()) {
          newData.category = this.user.category;
        }
      }

      if (oldData.bio == null) {
        if (this.user.bio !== null && this.user.bio.trim() != "") {
          newData.bio = this.user.bio;
        }
      } else {
        if (oldData.bio.trim() !== this.user.bio.trim()) {
          newData.bio = this.user.bio;
        }
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
          if (errorData.errors.company) {
            this.errors.company = errorData.errors.company;
          }
          if (errorData.errors.category) {
            this.errors.category = errorData.errors.category;
          }
          if (errorData.errors.bio) {
            this.errors.bio = errorData.errors.bio;
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