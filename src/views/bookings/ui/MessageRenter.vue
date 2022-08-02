<template>
  <v-dialog
    :value="show"
    persistent
    max-width="500px"
    transition="dialog-transition"
    content-class="elevation-0"
  >
    <v-row>
      <v-spacer></v-spacer>
      <v-btn
        color="white"
        @click="$emit('close', 'UI_EVENT')"
        large
        icon
        class="my-4"
        ><v-icon>mdi-close</v-icon></v-btn
      >
    </v-row>
    <v-card outlined class="py-6 px-8" :loading="loading">
      <v-row class="my-0 py-0">
        <v-col cols="8">
          <p class="headline">Send a message to {{ user.name }}</p>
          <p class="grey--text">
            Let the renter know a bit about you, your activity, and how you plan
            to use the space
          </p>
        </v-col>
        <v-col class="text-right">
          <user-avatar :size="120" :image="user.avatar" />
        </v-col>
      </v-row>
      <v-row class="my-0 py-0">
        <v-col class="my-0 py-0">
          <p class="subtitle-2">Message the renter</p>
          <v-textarea
            :error-messages="messageErrors"
            v-model="message"
            outlined
            auto-grow
            :hide-details="messageErrors.length == 0"
          />
        </v-col>
      </v-row>
      <v-row class="my-0 py-0">
        <v-col class="my-0 py-0 mt-4">
          <v-btn
            @click="sendMessage"
            color="success"
            block
            x-large
            depressed
            :loading="loading"
          >
            Send a message
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import UserAvatar from "@/components/user/UserAvatar.vue";
import { createThreadFromBooking } from "@/api/messages";
export default {
  components: { UserAvatar },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    booking: {
      required: true,
    },
  },
  data() {
    return {
      message: "",
      messageErrors: [],
      loading: false,
    };
  },
  created() {},
  computed: {
    user() {
      return this.booking.user;
    },
  },
  methods: {
    async sendMessage() {
      this.messageErrors = [];

      if (this.message.trim() == "") {
        this.messageErrors.push("Write a message");
        return;
      }
      this.loading = true;
      try {
        const response = await createThreadFromBooking(
          this.booking.id,
          this.message
        );
        this.$router.push({
          name: "Messages.Thread",
          params: {
            id: response.data.id,
          },
        });
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
  watch: {},
};
</script>

<style>
</style>