<template>
  <div>
    <v-container
      class="ma-0 pa-0"
      style="height: 100%; background-color: #f8f8f8"
    >
      <div class="sticky-top" style="z-index: 2">
        <v-card
          class=""
          height="70px"
          style="border-bottom: 1px solid #d2d2d2 !important; border-radius: 0"
          flat
        >
          <v-card-text v-if="!loading">
            <p class="subtitle-1 black--text py-0 my-0 font-weight-bold">
              {{ getThreadUser() ? getThreadUser().name : "" }}
            </p>
            <p class="caption">Response Time: 1 day</p>
          </v-card-text>
          <div class="pa-4">
            <v-progress-circular
              v-if="loading"
              indeterminate
              size="32"
              color="success"
              :loading="true"
              class="mx-auto"
            ></v-progress-circular>
          </div>
        </v-card>
      </div>

      <v-row id="messages-container" class="pb-4" align="end">
        <div
          v-if="loading"
          style="width: 100%"
          class="d-flex justify-center my-2 pa-12 ma-0"
        >
          <v-progress-circular
            indeterminate
            size="56"
            color="success"
            :loading="true"
            class="mx-auto"
          ></v-progress-circular>
        </div>
        <v-col>
          <div
            v-for="(message, index) of sortedMessages"
            :key="message.id"
            :class="[
              'd-flex flex-row align-end my-2',
              message.user_id == currentUser.id ? 'justify-end' : null,
            ]"
          >
            <v-card
              max-width="500px"
              min-width="100px"
              v-if="message.user_id == currentUser.id"
              class="black--text mr-3 rounded-lg pa-2"
              color="#4caf50CC"
              flat
              :style="
                !sortedMessages[index + 1] ||
                sortedMessages[index + 1].user_id != message.user_id
                  ? 'border-bottom-right-radius: 0px !important'
                  : ''
              "
            >
              <v-card-text class="white--text subtitle-1">
                {{ message.body }}
                <span class="caption">
                  <elegant-date
                    :date="message.updated_at"
                    format="%H:%M"
                    type="format"
                    class="mx-2"
                  />
                  <v-icon
                    v-if="isMessageReadByTheParticipant(message.updated_at)"
                    color="white"
                    size="20"
                  >
                    mdi-check-all
                  </v-icon>
                </span>
              </v-card-text>
            </v-card>

            <user-avatar
              :image="getParticipantById(message.user_id).avatar"
              v-if="
                !sortedMessages[index + 1] ||
                sortedMessages[index + 1].user_id != message.user_id
              "
              :size="48"
            />
            <user-avatar v-else :size="48" style="opacity: 0" />

            <v-card
              max-width="500px"
              min-width="100px"
              v-if="message.user_id != currentUser.id"
              class="black--text ml-3 rounded-lg pa-2"
              color="#2196f3CC"
              flat
              :style="
                !sortedMessages[index + 1] ||
                sortedMessages[index + 1].user_id != message.user_id
                  ? 'border-bottom-left-radius: 0px !important' : ''"
            >
              <v-card-text class="white--text subtitle-1">
                <span class="caption">
                  <elegant-date
                    :date="message.updated_at"
                    format="%H:%M"
                    type="format"
                    class="mx-2"
                  />
                </span>
                {{ message.body }}
              </v-card-text>
            </v-card>
          </div>
          <div
            v-for="message in pendingMessages"
            :key="`${message.body}_${uuid()}`"
            :class="['d-flex flex-row align-center my-2 justify-end']"
          >
            <v-progress-circular
              color="success"
              size="24"
              indeterminate
              class="mx-4"
            ></v-progress-circular>
            <v-card
              max-width="500px"
              min-width="100px"
              class="black--text mr-3 rounded-xl pa-2"
              color="#4caf5066"
              flat
            >
              <v-card-text class="white--text subtitle-1">
                {{ message.body }}
              </v-card-text>
            </v-card>
            <user-avatar :image="currentUser.avatar" :size="48" />
          </div>
        </v-col>
      </v-row>
      <div class="message-input-box">
        <v-container class="ma-0 pa-0">
          <v-row no-gutters>
            <v-col>
              <v-card class="" flat>
                <v-card-text>
                  <v-text-field
                    v-model="msg"
                    placeholder="Type Something"
                    @keypress.enter="send"
                    append-icon="mdi-send"
                    @click:append="send"
                    outlined
                    hide-details
                  ></v-text-field>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
</template>

<script>
import { sendMessage, showThread } from "@/api/messages";
import UserAvatar from "@/components/user/UserAvatar.vue";
import { v4 as uuidv4 } from "uuid";
import ElegantDate from "@/components/ElegantDate.vue";
import moment from "moment";

export default {
  components: { UserAvatar, ElegantDate },
  props: {},
  data() {
    return {
      thread: {},
      pendingMessages: [],
      loading: false,
      msg: null,
    };
  },
  updated() {
    this.scrollToEnd();
  },
  async created() {
    await this.loadMessages();
  },
  computed: {
    currentUser() {
      return this.$store.getters["User/user"];
    },
    sortedMessages() {
      const messages = [...(this.thread.messages || [])];

      messages.sort(
        (objA, objB) =>
          Number(new Date(objA.updated_at)) - Number(new Date(objB.updated_at))
      );
      return messages;
    },
  },
  methods: {
    isMessageReadByTheParticipant(messageDate) {
      return moment(messageDate).isBefore(
        this.getThreadParticipant().last_read
      );
    },
    async loadMessages() {
      this.loading = true;
      const response = await showThread(this.$route.params.id);
      this.thread = response.data;
      this.loading = false;
    },
    scrollToEnd() {
      var container = this.$el.querySelector("#messages-container");
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },
    getParticipantById(id) {
      for (let participant of this.thread.participants) {
        if (participant.user_id == id) return participant.user;
      }
      return null;
    },
    async send() {
      if (!this.msg || this.msg.trim() == "") return false;

      const message = {
        user_id: this.currentUser.id,
        body: this.msg,
      };
      this.msg = null;
      this.pendingMessages.push(message);
      const response = await sendMessage(this.thread.id, message.body);
      const messages = Object.assign([], this.thread.messages);
      messages.push(response.data);

      this.thread.messages = messages;
      this.pendingMessages.splice(this.pendingMessages.indexOf(message), 1);
    },

    getThreadUser() {
      return this.getThreadParticipant().user;
    },
    getThreadParticipant() {
      if (!this.thread.participants) return {};
      if (this.thread.participants[0].user_id == this.currentUser.id) {
        return this.thread.participants[1];
      }
      return this.thread.participants[0];
    },
    uuid() {
      return uuidv4();
    },
  },
  watch: {
    "$route.params.id"() {
      this.thread = {};
      this.loadMessages();
    },
  },
};
</script>

<style scoped>
#messages-container {
  background-color: #e4e4e455;
  min-height: calc(100vh - 225px);
  width: 100%;
  height: calc(100vh - 225px);
  overflow: auto;
  left: 20px;
  margin: 0;
  z-index: 0;
}
</style>